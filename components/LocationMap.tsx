import Reveal from "@/components/Reveal";
import { nearbyPlaces } from "@/content/nearby";
import { site } from "@/content/site";

export default function LocationMap({ showHeading = true }: { showHeading?: boolean }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  return (
    <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-10 sm:py-28">
      {showHeading && (
        <Reveal>
          <p className="eyebrow">Como chegar</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            Perto do centro, longe do barulho
          </h2>
          <p className="mt-4 max-w-xl text-musgo">{site.address}</p>
        </Reveal>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden rounded-sm border border-linha/60 sm:aspect-[16/10]">
            <iframe
              title={`Mapa — ${site.address}`}
              src={mapSrc}
              loading="lazy"
              className="h-full w-full grayscale-[15%]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>

        <Reveal>
          <ul className="space-y-4">
            {nearbyPlaces.slice(0, 4).map((place) => (
              <li key={place.id} className="flex items-baseline justify-between gap-4 border-b border-linha/40 pb-3">
                <span className="text-sm text-carvao">{place.name}</span>
                <span className="whitespace-nowrap text-sm font-medium text-cobre-fundo">
                  {place.distanceKm.toLocaleString("pt-BR")} km
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
