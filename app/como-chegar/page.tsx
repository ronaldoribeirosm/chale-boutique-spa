import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LocationMap from "@/components/LocationMap";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Como chegar",
  description: `Endereço e distâncias reais a partir do ${site.name}, em ${site.city}.`,
};

export default function ComoChegarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Como chegar"
        title={`A ${site.city} minutos de distância do centro`}
        subtitle="O mapa e as distâncias abaixo já contam a partir da porta do chalé."
      />
      <LocationMap showHeading={false} />
    </>
  );
}
