import Link from "next/link";
import { defaultWhatsappMessage, site, whatsappLink } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-pinheiro text-nevoa">
      <div className="mx-auto max-w-(--container-content) px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm text-nevoa/70">
              Refúgio a dois em Campos do Jordão — sauna seca, jacuzzi e silêncio, a poucos
              minutos do centro da cidade.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-cobre-claro">Contato</p>
            <ul className="mt-4 space-y-2 text-sm text-nevoa/85">
              <li>
                <a href={whatsappLink(defaultWhatsappMessage)} className="link-underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} className="link-underline" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-cobre-claro">Endereço</p>
            <p className="mt-4 text-sm text-nevoa/85">{site.address}</p>
            <Link href="/como-chegar" className="link-underline mt-3 inline-block text-sm">
              Ver como chegar
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-nevoa/15 pt-8 text-xs text-nevoa/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <Link href="/politica-cancelamento" className="link-underline">
            Política de cancelamento
          </Link>
        </div>
      </div>
    </footer>
  );
}
