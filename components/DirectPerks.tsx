import Reveal from "@/components/Reveal";
import { IconCheck } from "@/components/icons";
import { site } from "@/content/site";

const rows = [
  {
    label: "Taxa de serviço",
    direct: "Nenhuma",
    ota: "Cobrada no checkout",
  },
  {
    label: "Contato",
    direct: `Direto com ${site.host} no WhatsApp`,
    ota: "Mensagens pela plataforma",
  },
  {
    label: "Vantagem",
    direct: "Late check-out e welcome de espumante",
    ota: "Padrão, igual pra todo mundo",
  },
];

export default function DirectPerks() {
  return (
    <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <p className="eyebrow">Por que reservar direto</p>
        <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
          O mesmo chalé, sem o intermediário
        </h2>
      </Reveal>

      <Reveal>
        <div className="mt-12 overflow-hidden rounded-sm border border-linha/60">
          <div className="grid grid-cols-3 bg-surface px-5 py-4 text-sm font-medium text-musgo sm:px-8">
            <span></span>
            <span className="text-cobre-fundo">Direto aqui</span>
            <span>Pela OTA</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-start gap-2 px-5 py-5 text-sm sm:px-8 ${
                i > 0 ? "border-t border-linha/40" : ""
              }`}
            >
              <span className="font-medium text-carvao">{row.label}</span>
              <span className="flex items-start gap-2 text-carvao">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-cobre-fundo" />
                {row.direct}
              </span>
              <span className="text-musgo">{row.ota}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
