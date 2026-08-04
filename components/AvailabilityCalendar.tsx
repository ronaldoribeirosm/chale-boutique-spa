"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { defaultWhatsappMessage, site, whatsappLink, whatsappMessageForDates } from "@/content/site";
import { formatBRL, getMonthAvailability, type DayAvailability } from "@/lib/availability";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function MonthGrid({
  year,
  month,
  checkIn,
  checkOut,
  onSelectDay,
}: {
  year: number;
  month: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectDay: (day: DayAvailability) => void;
}) {
  const days = getMonthAvailability(year, month);
  const leadingBlanks = days[0].date.getDay();

  return (
    <div className="rounded-sm border border-linha/60 bg-surface p-5 sm:p-6">
      <p className="font-display text-lg">
        {MONTH_NAMES[month]} <span className="text-musgo">{year}</span>
      </p>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-musgo">
        {WEEKDAYS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: leadingBlanks }).map((_, i) => (
          <div key={`b-${i}`} />
        ))}
        {days.map((d) => {
          const isStart = checkIn && sameDay(d.date, checkIn);
          const isEnd = checkOut && sameDay(d.date, checkOut);
          const inRange =
            checkIn && checkOut && d.date > checkIn && d.date < checkOut;
          const selected = isStart || isEnd;

          return (
            <button
              key={d.date.toISOString()}
              type="button"
              disabled={d.blocked}
              onClick={() => onSelectDay(d)}
              aria-pressed={Boolean(selected)}
              aria-label={
                d.blocked
                  ? `${d.date.getDate()} — indisponível`
                  : `${d.date.getDate()} — livre, ${formatBRL(d.priceCents)} a diária`
              }
              className={`flex aspect-square flex-col items-center justify-center rounded-sm text-[11px] transition-colors ${
                d.blocked
                  ? "cursor-not-allowed bg-linha/25 text-musgo/70"
                  : selected
                    ? "bg-cobre-claro text-carvao"
                    : inRange
                      ? "bg-cobre-claro/25 text-carvao"
                      : "bg-nevoa text-carvao hover:bg-cobre-claro/20"
              }`}
            >
              <span className={d.blocked ? "line-through decoration-musgo/60" : "font-medium"}>
                {d.date.getDate()}
              </span>
              {!d.blocked && (
                <span className="text-cobre-fundo">{Math.round(d.priceCents / 1000) / 10}k</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  function handleSelectDay(day: DayAvailability) {
    if (day.blocked) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(day.date);
      setCheckOut(null);
      return;
    }

    if (day.date > checkIn) {
      setCheckOut(day.date);
    } else {
      setCheckIn(day.date);
      setCheckOut(null);
    }
  }

  const rangeLabel = useMemo(() => {
    if (!checkIn) return "Escolha a data de entrada e saída no calendário";
    if (!checkOut) return `${checkIn.toLocaleDateString("pt-BR")} — escolha a saída`;
    return `${checkIn.toLocaleDateString("pt-BR")} → ${checkOut.toLocaleDateString("pt-BR")}`;
  }, [checkIn, checkOut]);

  const whatsapp = checkIn && checkOut ? whatsappMessageForDates(checkIn, checkOut) : defaultWhatsappMessage;

  return (
    <section id="disponibilidade" className="scroll-mt-24 bg-pinheiro py-20 text-nevoa sm:py-28">
      <div className="mx-auto max-w-(--container-content) px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow !text-cobre-claro">Disponibilidade e preço</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            Veja o dia livre e o preço, sem pedir seu e-mail
          </h2>
          <p className="mt-4 max-w-xl text-nevoa/70">
            Dias riscados já estão reservados. O preço muda por temporada e fim
            de semana — igual mostra a Booking, só que aqui sem comissão.
            Escolha entrada e saída para reservar.
          </p>
        </Reveal>

        <Reveal group>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <MonthGrid
              year={now.getFullYear()}
              month={now.getMonth()}
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectDay={handleSelectDay}
            />
            <MonthGrid
              year={nextMonth.getFullYear()}
              month={nextMonth.getMonth()}
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectDay={handleSelectDay}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-sm border border-nevoa/20 bg-nevoa/5 p-5 sm:p-6">
            <p className="font-medium">{rangeLabel}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={site.desbravadorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Reservar no sistema oficial
              </a>
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn"
              >
                Perguntar no WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-nevoa/60">
              Calendário de demonstração — a reserva de verdade (preço final,
              quartos disponíveis e pagamento) é feita no nosso sistema de
              reservas oficial. As datas escolhidas aqui não são enviadas
              automaticamente para lá; leve-as com você ou peça pelo WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
