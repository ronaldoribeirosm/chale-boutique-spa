import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export default function SocialProof() {
  return (
    <section className="border-y border-linha/40 bg-surface py-14 sm:py-16">
      <Reveal>
        <div className="mx-auto flex max-w-(--container-content) flex-col items-center gap-3 px-6 text-center sm:px-10">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl text-carvao">{site.bookingRating.toLocaleString("pt-BR")}</span>
            <span className="text-sm text-musgo">/ 10</span>
          </div>
          <p className="text-sm text-musgo">
            Nota dos hóspedes no Booking —{" "}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-carvao"
            >
              ver avaliações
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
