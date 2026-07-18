import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NearbyThings from "@/components/NearbyThings";

export const metadata: Metadata = {
  title: "Arredores",
  description:
    "O que fazer perto do chalé em Campos do Jordão: Museu Felicia Leirner, Palácio Boa Vista, cachoeiras e trilhas.",
};

export default function ArredoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Arredores"
        title="Pra quando vocês quiserem sair do roupão"
        subtitle="Os pontos mais procurados de Campos do Jordão, com a distância real a partir do chalé."
      />
      <NearbyThings showHeading={false} />
    </>
  );
}
