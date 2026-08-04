// Calendário de disponibilidade.
// Sem AIRBNB_ICAL_URL/BOOKING_ICAL_URL configuradas, usa dados de demonstração
// (dias bloqueados aleatórios). Com elas, getRealBlockedDates() busca os feeds
// iCal oficiais (exportados pelo próprio painel de anfitrião do Airbnb/Booking
// — "Sincronizar calendários") e getMonthAvailability() passa a refletir
// reserva real, sem scraping e sem depender de nada não documentado.

export type DayAvailability = {
  date: Date;
  blocked: boolean;
  priceCents: number;
};

// PRNG determinístico (mulberry32) — evita divergência SSR/hidratação e
// mantém o mock estável entre renders do mesmo dia. Só usado quando não há
// feed real configurado.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const HIGH_SEASON_MONTHS = new Set([0, 1, 4, 5, 6, 7]); // jan, fev, mai-ago

function isoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getMonthAvailability(
  year: number,
  month: number,
  blockedDates?: Set<string> | null,
): DayAvailability[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const seed = year * 100 + month;
  const rand = mulberry32(seed);
  const isHighSeason = HIGH_SEASON_MONTHS.has(month);
  const useRealData = blockedDates != null;

  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const isWeekend = date.getDay() === 5 || date.getDay() === 6;
    const blocked = useRealData ? blockedDates.has(isoDate(date)) : rand() < 0.32;

    let priceCents = isHighSeason ? 92000 : 70000;
    if (isWeekend) priceCents += 18000;

    return { date, blocked, priceCents };
  });
}

export function formatBRL(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

// Uma linha iCal pode ser "dobrada" (continuada na linha seguinte com um
// espaço/tab no início) — desdobra antes de parsear, por especificação.
function unfoldIcsLines(text: string): string[] {
  const rawLines = text.split(/\r\n|\n|\r/);
  const lines: string[] = [];
  for (const line of rawLines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && lines.length > 0) {
      lines[lines.length - 1] += line.slice(1);
    } else {
      lines.push(line);
    }
  }
  return lines;
}

function parseIcsDate(value: string): Date | null {
  const dateOnly = value.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (dateOnly) {
    const [, y, m, d] = dateOnly;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  const dateTime = value.match(/^(\d{4})(\d{2})(\d{2})T\d{6}Z?$/);
  if (dateTime) {
    const [, y, m, d] = dateTime;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  return null;
}

// DTEND em evento de dia inteiro é exclusivo (o dia seguinte ao último dia
// bloqueado) — isso já bate com nossa própria regra de checkout: o dia de
// saída não fica marcado como ocupado.
function extractBlockedDates(icsText: string): Set<string> {
  const lines = unfoldIcsLines(icsText);
  const blocked = new Set<string>();
  let inEvent = false;
  let start: Date | null = null;
  let end: Date | null = null;

  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) {
      inEvent = true;
      start = null;
      end = null;
      continue;
    }
    if (line.startsWith("END:VEVENT")) {
      if (start) {
        const rangeEnd = end ?? new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
        for (const d = new Date(start); d < rangeEnd; d.setDate(d.getDate() + 1)) {
          blocked.add(isoDate(d));
        }
      }
      inEvent = false;
      continue;
    }
    if (!inEvent) continue;

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).split(";")[0];
    const value = line.slice(separatorIndex + 1);
    if (key === "DTSTART") start = parseIcsDate(value);
    if (key === "DTEND") end = parseIcsDate(value);
  }

  return blocked;
}

async function fetchIcsBlockedDates(url: string): Promise<Set<string>> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return new Set();
    const text = await res.text();
    return extractBlockedDates(text);
  } catch {
    return new Set();
  }
}

// null = nenhum feed configurado (modo demonstração). Set vazio = feeds
// configurados e respondendo, mas sem nenhum dia bloqueado no momento.
export async function getRealBlockedDates(): Promise<Set<string> | null> {
  const urls = [process.env.AIRBNB_ICAL_URL, process.env.BOOKING_ICAL_URL].filter(
    (u): u is string => Boolean(u),
  );
  if (urls.length === 0) return null;

  const results = await Promise.all(urls.map(fetchIcsBlockedDates));
  const merged = new Set<string>();
  for (const set of results) {
    for (const d of set) merged.add(d);
  }
  return merged;
}
