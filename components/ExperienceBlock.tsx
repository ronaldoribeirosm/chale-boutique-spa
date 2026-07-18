import Image from "next/image";
import Reveal from "@/components/Reveal";
import { experiences } from "@/content/amenities";

export default function ExperienceBlock() {
  return (
    <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <p className="eyebrow">A experiência</p>
        <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)]">
          Cada detalhe pensado pra você não pensar em nada
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-20 sm:mt-20 sm:gap-28">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id}>
            <div
              className={`grid items-center gap-8 sm:gap-14 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={`/images/${exp.id}.jpg`}
                  alt={exp.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">{exp.eyebrow}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)]">{exp.title}</h3>
                <p className="mt-4 max-w-md text-musgo">{exp.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
