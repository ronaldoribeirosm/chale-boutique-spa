"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/o-chale", label: "O chalé" },
  { href: "/como-chegar", label: "Como chegar" },
  { href: "/arredores", label: "Arredores" },
  { href: "/faq", label: "Perguntas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-linha/60 bg-nevoa/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-(--container-content) items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-xl tracking-tight text-carvao" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium ${
                pathname === link.href ? "text-cobre-fundo" : "text-carvao"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#disponibilidade" className="btn">
            Ver disponibilidade
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-carvao md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-linha/60 bg-nevoa px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-carvao"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#disponibilidade" onClick={() => setOpen(false)} className="btn w-full justify-center">
                Ver disponibilidade
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
