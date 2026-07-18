import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import AmenityGrid from "@/components/AmenityGrid";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "O chalé",
  description:
    "Conheça os ambientes do chalé boutique em Campos do Jordão: sauna, jacuzzi, varanda com vista e kitchenette equipada.",
};

const spaces = [
  { id: "quarto", label: "Quarto" },
  { id: "sala", label: "Sala de estar" },
  { id: "varanda", label: "Varanda" },
  { id: "banheiro", label: "Banheiro" },
];

export default function OChalePage() {
  return (
    <>
      <PageHeader
        eyebrow="O chalé"
        title="Feito pra dois, do jeito que um refúgio deveria ser"
        subtitle="Pensado para casais — a capacidade exata e os detalhes de cada acomodação confirmamos junto com você ao combinar a data."
      />

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-10 sm:py-28">
        <Reveal group>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {spaces.map((s) => (
              <figure key={s.id}>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src={`/images/${s.id}.jpg`}
                    alt={s.label}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-musgo">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      <AmenityGrid />

      <section id="reservar" className="mx-auto max-w-(--container-content) scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
        <Reveal>
          <p className="eyebrow">Solicitar disponibilidade</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            Conta pra gente a data e a gente confirma
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-10 max-w-xl">
            <LeadForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
