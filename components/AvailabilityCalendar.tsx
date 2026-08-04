"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";
import {
  defaultWhatsappMessage,
  desbravadorReservationUrl,
  site,
  whatsappLink,
  whatsappMessageForDates,
} from "@/content/site";
import { getMonthAvailability, type DayAvailability } from "@/lib/availability";

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
  today,
  checkIn,
  checkOut,
  onSelectDay,
}: {
  year: number;
  month: number;
  today: Date;
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
          const isPast = d.date < today;
          const isUnavailable = d.blocked || isPast;
          const isStart = checkIn && sameDay(d.date, checkIn);
          const isEnd = checkOut && sameDay(d.date, checkOut);
          const inRange =
            checkIn && checkOut && d.date > checkIn && d.date < checkOut;
          const selected = isStart || isEnd;

          return (
            <button
              key={d.date.toISOString()}
              type="button"
              disabled={isUnavailable}
              onClick={() => onSelectDay(d)}
              aria-pressed={Boolean(selected)}
              aria-label={
                isPast
                  ? `${d.date.getDate()} — data passada`
                  : d.blocked
                    ? `${d.date.getDate()} — indisponível`
                    : `${d.date.getDate()} — livre`
              }
              className={`flex aspect-square flex-col items-center justify-center rounded-sm text-[11px] transition-colors duration-150 active:scale-95 ${
                isUnavailable
                  ? "cursor-not-allowed bg-linha/25 text-musgo/70"
                  : selected
                    ? "bg-cobre-claro text-carvao"
                    : inRange
                      ? "bg-cobre-claro/25 text-carvao"
                      : "bg-nevoa text-carvao hover:bg-cobre-claro/20"
              }`}
            >
              <span className={isUnavailable ? "line-through decoration-musgo/60" : "font-medium"}>
                {d.date.getDate()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Mês anterior" : "Próximo mês"}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 active:scale-95 ${
        disabled
          ? "cursor-not-allowed border-nevoa/10 text-nevoa/25"
          : "border-nevoa/30 text-nevoa hover:border-cobre-claro hover:text-cobre-claro"
      }`}
    >
      {direction === "prev" ? <IconChevronLeft className="h-5 w-5" /> : <IconChevronRight className="h-5 w-5" />}
    </button>
  );
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [navDirection, setNavDirection] = useState<"next" | "prev">("next");

  const firstMonth = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const secondMonth = new Date(now.getFullYear(), now.getMonth() + monthOffset + 1, 1);

  function goToPrevMonth() {
    if (monthOffset === 0) return;
    setNavDirection("prev");
    setMonthOffset((m) => Math.max(0, m - 1));
  }

  function goToNextMonth() {
    setNavDirection("next");
    setMonthOffset((m) => m + 1);
  }

  function handleSelectDay(day: DayAvailability) {
    if (day.blocked || day.date < today) return;

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
  const reservationUrl =
    checkIn && checkOut ? desbravadorReservationUrl(checkIn, checkOut) : site.desbravadorUrl;

  return (
    <section id="disponibilidade" className="scroll-mt-24 bg-pinheiro py-20 text-nevoa sm:py-28">
      <div className="mx-auto max-w-(--container-content) px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow !text-cobre-claro">Disponibilidade</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            Veja o dia livre, sem pedir seu e-mail
          </h2>
          <p className="mt-4 max-w-xl text-nevoa/70">
            Dias riscados já estão reservados ou já passaram. Escolha entrada
            e saída para reservar — o preço final aparece no sistema oficial.
          </p>
        </Reveal>

        <Reveal group>
          <div className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <NavButton direction="prev" disabled={monthOffset === 0} onClick={goToPrevMonth} />
              <NavButton direction="next" onClick={goToNextMonth} />
            </div>

            <div
              key={monthOffset}
              className={`mt-4 grid gap-6 md:grid-cols-2 ${
                navDirection === "next" ? "month-enter-next" : "month-enter-prev"
              }`}
            >
              <MonthGrid
                year={firstMonth.getFullYear()}
                month={firstMonth.getMonth()}
                today={today}
                checkIn={checkIn}
                checkOut={checkOut}
                onSelectDay={handleSelectDay}
              />
              <MonthGrid
                year={secondMonth.getFullYear()}
                month={secondMonth.getMonth()}
                today={today}
                checkIn={checkIn}
                checkOut={checkOut}
                onSelectDay={handleSelectDay}
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-sm border border-nevoa/20 bg-nevoa/5 p-5 sm:p-6">
            <p className="font-medium">{rangeLabel}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={reservationUrl}
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
              reservas oficial. Ao clicar em &ldquo;Reservar no sistema
              oficial&rdquo; com as datas escolhidas, elas já chegam prontas lá;
              só falta confirmar que você não é um robô.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
