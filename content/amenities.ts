export type Amenity = {
  id: string;
  label: string;
};

export const amenities: Amenity[] = [
  { id: "sauna", label: "Sauna seca" },
  { id: "jacuzzi", label: "Jacuzzi" },
  { id: "rede", label: "Rede suspensa" },
  { id: "piscina", label: "Piscina com vista" },
  { id: "lareira", label: "Lareira" },
  { id: "terraco", label: "Terraço" },
  { id: "jardim", label: "Jardim" },
  { id: "varanda", label: "Varanda com vista da montanha" },
  { id: "kitchenette", label: "Kitchenette equipada" },
  { id: "tv", label: "TV com streaming" },
  { id: "frigobar", label: "Frigobar" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "estacionamento", label: "Estacionamento gratuito" },
  { id: "roupoes", label: "Roupões" },
  { id: "cafe", label: "Café da manhã" },
  { id: "espumante", label: "Vinho, espumante e frutas" },
];

export const experiences = [
  {
    id: "jacuzzi",
    eyebrow: "A jacuzzi",
    title: "Água quente, ar frio da serra",
    body: "A jacuzzi fica na varanda, de frente pra montanha. À noite, o vapor sobe contra o frio de Campos e o silêncio é só seu — e de quem você trouxe.",
  },
  {
    id: "sauna",
    eyebrow: "A sauna",
    title: "Madeira, calor seco, sem pressa",
    body: "Sauna seca privativa, sem hora marcada e sem dividir com ninguém. É o tipo de detalhe que separa hospedagem de refúgio.",
  },
  {
    id: "rede",
    eyebrow: "A rede",
    title: "Suspensa entre o terraço e a vista",
    body: "Um lugar pra não fazer nada. A rede fica virada pro jardim e pra montanha — o resto do dia pode esperar.",
  },
  {
    id: "lareira",
    eyebrow: "A lareira",
    title: "Fondue, espumante, a serra lá fora",
    body: "Nas noites frias, a lareira acende e o resto da cidade desaparece. Roupão, vinho, e nenhum plano até amanhã.",
  },
] as const;
