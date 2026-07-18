import Reveal from "@/components/Reveal";
import { amenities } from "@/content/amenities";
import {
  IconCheck,
  IconCoffee,
  IconDroplet,
  IconFlame,
  IconFridge,
  IconGlass,
  IconKitchen,
  IconLeaf,
  IconMountain,
  IconParking,
  IconRobe,
  IconSauna,
  IconTv,
  IconWave,
  IconWifi,
} from "@/components/icons";

const ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  sauna: IconSauna,
  jacuzzi: IconDroplet,
  rede: IconLeaf,
  piscina: IconWave,
  lareira: IconFlame,
  terraco: IconMountain,
  jardim: IconLeaf,
  varanda: IconMountain,
  kitchenette: IconKitchen,
  tv: IconTv,
  frigobar: IconFridge,
  wifi: IconWifi,
  estacionamento: IconParking,
  roupoes: IconRobe,
  cafe: IconCoffee,
  espumante: IconGlass,
};

export default function AmenityGrid() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-content) px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow">O chalé</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            Tudo o que você não vai precisar sair pra buscar
          </h2>
        </Reveal>

        <Reveal group>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((a) => {
              const Icon = ICONS[a.id] ?? IconCheck;
              return (
                <li key={a.id} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-cobre" />
                  <span className="text-sm text-carvao">{a.label}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
