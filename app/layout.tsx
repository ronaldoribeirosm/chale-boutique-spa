import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL, site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Refúgio a dois em ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Chalé boutique em Campos do Jordão com sauna seca, jacuzzi e rede suspensa. Reserve direto, sem taxa de serviço.",
  keywords: [
    "chalé campos do jordão",
    "chalé com jacuzzi campos do jordão",
    "chalé com sauna campos do jordão",
    "chalé romântico campos do jordão",
    "chalé lua de mel serra da mantiqueira",
  ],
  openGraph: {
    title: `${site.name} — Refúgio a dois em ${site.city}`,
    description:
      "Sauna seca, jacuzzi e rede suspensa. Reserve direto, sem taxa de serviço.",
    url: SITE_URL,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description:
    "Chalé boutique em Campos do Jordão com sauna seca, jacuzzi e rede suspensa.",
  url: SITE_URL,
  telephone: `+${site.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  starRating: {
    "@type": "Rating",
    ratingValue: site.bookingRating,
    bestRating: 10,
  },
  amenityFeature: [
    "Sauna seca",
    "Jacuzzi",
    "Rede suspensa",
    "Piscina com vista",
    "Lareira",
    "Wi-Fi",
    "Estacionamento gratuito",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  priceRange: "R$700 - R$1100",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-nevoa text-carvao antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
