import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Pet, café da manhã, horário de check-in, sauna privativa — tudo que você precisa saber antes de reservar.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Perguntas frequentes"
        title="Antes de reservar, tira as dúvidas"
      />
      <FaqAccordion showHeading={false} />
    </>
  );
}
