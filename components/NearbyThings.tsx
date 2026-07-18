import Reveal from "@/components/Reveal";
import { nearbyPlaces } from "@/content/nearby";

export default function NearbyThings({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-content) px-6 sm:px-10">
        {showHeading && (
          <Reveal>
            <p className="eyebrow">O que fazer perto</p>
            <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
              A serra tem mais pra oferecer do que o chalé
            </h2>
          </Reveal>
        )}

        <Reveal group>
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {nearbyPlaces.map((place) => (
              <li key={place.id} className="border-l-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg">{place.name}</h3>
                  <span className="whitespace-nowrap text-xs text-cobre-fundo">
                    {place.distanceKm.toLocaleString("pt-BR")} km
                  </span>
                </div>
                <p className="mt-2 text-sm text-musgo">{place.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="mt-14 text-sm text-musgo">
            Quer alguém te levando nesses passeios? A{" "}
            <a
              href="https://passeiosdamantiqueira.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-carvao"
            >
              Passeios da Mantiqueira
            </a>{" "}
            organiza roteiros guiados pela região.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
