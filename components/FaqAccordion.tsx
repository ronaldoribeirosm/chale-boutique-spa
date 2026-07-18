import Reveal from "@/components/Reveal";
import { faqItems } from "@/content/faq";

export default function FaqAccordion({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="faq" className="mx-auto max-w-(--container-content) scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      {showHeading && (
        <Reveal>
          <p className="eyebrow">Perguntas</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
            O que quem já perguntou queria saber
          </h2>
        </Reveal>
      )}

      <Reveal>
        <div className="mt-10 max-w-2xl divide-y divide-linha/40 border-t border-linha/40">
          {faqItems.map((item) => (
            <details key={item.id} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-carvao marker:content-none">
                <span className="font-medium">{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0 text-cobre transition-transform duration-300 ease-out group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-xl text-sm text-musgo">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
