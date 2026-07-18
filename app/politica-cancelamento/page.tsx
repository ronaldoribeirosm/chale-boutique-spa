import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { defaultWhatsappMessage, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de cancelamento",
  description: "Regras de cancelamento claras, mostradas antes de qualquer pagamento.",
};

const rules = [
  {
    title: "Até 7 dias antes do check-in",
    body: "Cancelamento gratuito, reembolso integral do valor pago.",
  },
  {
    title: "Entre 7 e 3 dias antes",
    body: "Reembolso de 50% do valor pago.",
  },
  {
    title: "Menos de 3 dias antes",
    body: "Sem reembolso — a data já está reservada só pra você.",
  },
];

export default function PoliticaCancelamentoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Política de cancelamento"
        title="Regras claras, antes de você pagar qualquer coisa"
        subtitle="As condições abaixo valem para reservas feitas direto pelo WhatsApp ou pelo site. Sempre confirmadas por escrito antes da cobrança."
      />

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-10 sm:py-28">
        <Reveal group>
          <div className="grid gap-8 sm:grid-cols-3">
            {rules.map((r) => (
              <div key={r.title}>
                <h2 className="text-lg">{r.title}</h2>
                <p className="mt-2 text-sm text-musgo">{r.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-14 max-w-2xl text-sm text-musgo">
            Em caso de força maior (fechamento de estrada, condições climáticas
            extremas) avaliamos remarcação sem custo, caso a caso. Qualquer
            dúvida antes de reservar, chama no{" "}
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-carvao"
            >
              WhatsApp
            </a>{" "}
            — a resposta é sempre humana.
          </p>
        </Reveal>
      </section>
    </>
  );
}
