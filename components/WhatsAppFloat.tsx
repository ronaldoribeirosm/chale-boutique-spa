import { defaultWhatsappMessage, whatsappLink } from "@/content/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(31,45,39,0.25)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.21 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.25-8.26 8.25a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.55 3.71-8.25 8.25-8.25Zm-4.6 4.51c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.71 4.2 3.7 2.08.82 2.5.66 2.95.62.45-.04 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.45-.28-.24-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.16.24-.64.8-.79.97-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.78-1.86-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01Z" />
      </svg>
    </a>
  );
}
