import Reveal from "@/components/Reveal";
import { defaultWhatsappMessage, whatsappLink } from "@/content/site";
import { formatBRL, getMonthAvailability } from "@/lib/availability";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

function MonthGrid({ year, month }: { year: number; month: number }) {
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
        {days.map((d) => (
          <div
            key={d.date.toISOString()}
            className={`flex aspect-square flex-col items-center justify-center rounded-sm text-[11px] ${
              d.blocked
                ? "bg-linha/25 text-musgo/70"
                : "bg-nevoa text-carvao"
            }`}
            aria-label={
              d.blocked
                ? `${d.date.getDate()} — indisponível`
                : `${d.date.getDate()} — livre, ${formatBRL(d.priceCents)} a diária`
            }
          >
            <span className={d.blocked ? "line-through decoration-musgo/60" : "font-medium"}>
              {d.date.getDate()}
            </span>
            {!d.blocked && (
              <span className="text-cobre-fundo">{Math.round(d.priceCents / 1000) / 10}k</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

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
          </p>
        </Reveal>

        <Reveal group>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <MonthGrid year={now.getFullYear()} month={now.getMonth()} />
            <MonthGrid year={nextMonth.getFullYear()} month={nextMonth.getMonth()} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Perguntar disponibilidade no WhatsApp
            </a>
            <p className="text-sm text-nevoa/60">
              Calendário de demonstração — em produção, sincronizado com Airbnb e Booking.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
