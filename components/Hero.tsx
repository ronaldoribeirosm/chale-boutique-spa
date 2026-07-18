import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-pinheiro text-nevoa">
      <div className="ken-burns absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Scrim — garante contraste do texto sobre a foto, mais forte embaixo */}
      <div className="absolute inset-0 bg-gradient-to-t from-pinheiro/95 via-pinheiro/45 to-pinheiro/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-pinheiro/50 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-(--container-content) px-6 pb-16 pt-40 sm:px-10 sm:pb-24">
        <p className="eyebrow !text-cobre-claro">
          Sauna seca · Jacuzzi · Rede suspensa
        </p>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-light tracking-[-0.02em]">
          Seu refúgio na serra
        </h1>
        <p className="mt-6 max-w-xl text-lg text-nevoa/80">
          Um chalé boutique em {site.city}, feito pra desligar do mundo — vapor,
          silêncio e a montanha lá fora.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#disponibilidade" className="btn">
            Ver disponibilidade
          </Link>
          <Link href="/o-chale" className="btn-ghost btn">
            Conhecer o chalé
          </Link>
        </div>
      </div>
    </section>
  );
}
