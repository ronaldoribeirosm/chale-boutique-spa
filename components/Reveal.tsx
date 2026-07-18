"use client";

import { useLayoutEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  group?: boolean;
};

// Conteúdo é visível por padrão (ver .reveal em globals.css) — a classe "js"
// na <html> só existe depois que este efeito roda, então sem JS (ou se o
// IntersectionObserver nunca disparar) nada fica invisível pra sempre.
export default function Reveal({ children, className = "", group = false }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add("js");

    const reveal = () => el.classList.add("is-visible");

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);

    // Rede de segurança: qualquer ambiente onde o observer não dispare
    // (snapshot headless sem scroll, navegador exótico) ainda revela.
    const fallback = window.setTimeout(reveal, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className={`${group ? "reveal-group" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}
