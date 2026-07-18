// Calendário de disponibilidade — dados de demonstração.
// Em produção, este módulo é substituído pelo import dos feeds iCal do
// Airbnb/Booking (ver ESTRUTURA_FUNCIONALIDADES_CHALE.md, seção 3) — a lógica
// de exibição (preço/dia, bloqueado/livre) já é a real, só a fonte muda.

export type DayAvailability = {
  date: Date;
  blocked: boolean;
  priceCents: number;
};

// PRNG determinístico (mulberry32) — evita divergência SSR/hidratação e
// mantém o mock estável entre renders do mesmo dia.
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

export function getMonthAvailability(year: number, month: number): DayAvailability[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const seed = year * 100 + month;
  const rand = mulberry32(seed);
  const isHighSeason = HIGH_SEASON_MONTHS.has(month);

  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const isWeekend = date.getDay() === 5 || date.getDay() === 6;
    const blocked = rand() < 0.32;

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
