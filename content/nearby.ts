export type NearbyPlace = {
  id: string;
  name: string;
  distanceKm: number;
  description: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: "felicia-leirner",
    name: "Museu Felicia Leirner",
    distanceKm: 2.3,
    description: "Esculturas ao ar livre em meio à mata — passeio curto, ótimo pela manhã.",
  },
  {
    id: "palacio-boa-vista",
    name: "Palácio Boa Vista",
    distanceKm: 4,
    description: "Residência oficial de inverno do governo de SP, aberta à visitação e cercada de jardins.",
  },
  {
    id: "bosque-silencio",
    name: "Bosque do Silêncio",
    distanceKm: 4.2,
    description: "Trilha curta entre araucárias — o nome já entrega o motivo de ir.",
  },
  {
    id: "cachoeira-lageado",
    name: "Cachoeira do Lageado",
    distanceKm: 4.6,
    description: "Queda d'água acessível, boa pausa no meio de um dia de passeio.",
  },
  {
    id: "mosteiro-sao-joao",
    name: "Mosteiro de São João",
    distanceKm: 5,
    description: "Silêncio, arquitetura simples e uma das vistas mais altas da região.",
  },
  {
    id: "abernessia",
    name: "Abernéssia",
    distanceKm: 6,
    description: "O bairro histórico da cidade — cafés, lojas e a arquitetura em estilo inglês.",
  },
];
