# Design

## Theme

Light, warm-neutral base (Névoa) with a dark complement (Pinheiro) reserved for footer, overlays, and hero scrims. Not a "cream SaaS" palette — the neutrals lean toward stone/sand rather than paper, and the accent (Cobre) is a mineral copper, not a brand blue. Reference: madeira, névoa da serra, vapor de sauna, cobre de lareira.

## Color Strategy

Restrained-to-committed: tinted neutrals as the base (Névoa/Carvão), one warm accent (Cobre) used sparingly for CTAs and hover states, and Pinheiro as a full-saturation dark section for footer/overlays only. No gradients, no glass, no neon.

## Palette

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F5F2ED` (Névoa) | Page background, light sections |
| `--bg-dark` | `#1F2D27` (Pinheiro) | Footer, hero overlay, dark sections |
| `--surface` | `#FAF8F4` | Cards on light background |
| `--text` | `#2B2926` (Carvão) | Body text on light — 13.0:1 on `--bg` |
| `--text-dark-bg` | `#F5F2ED` | Text on dark background — 12.9:1 on `--bg-dark` |
| `--text-muted` | `#5A6B5D` (Musgo) | Secondary text, captions — 5.1:1 on `--bg` |
| `--line` | `#8B6F47` (Madeira) | Dividers, section-title accents — large text only (4.2:1) |
| `--accent` | `#B87333` (Cobre) | Icons, hover, borders, underline — decorative/large only (3.4–3.8:1) |
| `--accent-btn` | `#9A5F28` (Cobre Fundo) | Button fill (text Névoa on top — 4.7:1) |

Full ramps (green/wood/sand 900→100 or 50) live in `styles/tokens.css`, ported verbatim from the project's palette spec.

**Contrast rule, non-negotiable:** body copy is always Carvão-on-Névoa or Névoa-on-Pinheiro. Cobre and Madeira never carry small text — they're for icons, borders, underlines, and headings ≥18px only.

## Typography

- Display / hero: **Fraunces** (optical size axis), weight 300–400, 48–72px, `letter-spacing: -0.01em to -0.02em`, `text-wrap: balance`.
- Section titles: Fraunces 400, 32–40px.
- Subtitle: Fraunces 400, 22–26px.
- Body: **Inter** 400, 17px base, `line-height: 1.7`, max 70ch measure.
- Eyebrow/label: Inter 500, 12–13px, `letter-spacing: 0.15em`, uppercase, color Madeira — used once per page as a hero descriptor line (`SAUNA SECA · JACUZZI · REDE SUSPENSA`), never repeated as a scaffolding kicker above every section.
- Loaded via `next/font/google` (not `<link>` tags) for zero layout shift and automatic `font-display: swap`.

## Layout & Spacing

- Max content width 1200px, generous side gutters (min 24px mobile, 64px+ desktop).
- 8px rhythm scale. Section vertical padding 96–160px desktop, 56–80px mobile — luxury reads as space, not density.
- Flex for 1D rows (amenity list, stat pills), CSS Grid for 2D (photo/experience blocks, FAQ two-column).
- Cards used only where they're the right affordance (amenity tiles); experience sections use full-bleed alternating image/text blocks instead of a repeated card grid.

## Motion

Dose baixa — motion reveals, never decorates itself.

- **Reveal on scroll**: `opacity 0 → 1`, `translateY(24px) → 0`, `0.8s cubic-bezier(0.22, 1, 0.36, 1)`, triggered once via `IntersectionObserver` (`threshold: 0.15`), never a scroll listener.
- **Ken Burns** on hero visual: `scale(1) → scale(1.08)`, `20s ease-out infinite alternate`.
- **Parallax**: max 30px translate via `--scroll` custom property, `requestAnimationFrame`-throttled.
- **Link underline**: width `0 → 100%` on hover, `0.35s`, Cobre.
- **Button**: `translateY(-2px)` + background shift Cobre Fundo → Cobre on hover, `scale(0.97)` on `:active`. `border-radius: 2px` — square, not pill.
- **Reduced motion**: every keyframe/transition above collapses to `0.01ms` and `.reveal` elements render fully visible under `prefers-reduced-motion: reduce`. Mandatory, tested.

## Components

- `Hero` — full-bleed visual (CSS gradient/texture placeholder standing in for the view), Ken Burns, eyebrow line, Fraunces H1, single primary CTA.
- `ExperienceBlock` — alternating image/text sections (jacuzzi, sauna, rede, vista), reveal-in.
- `AmenityGrid` — icon + label tiles, SVG icons only (no emoji).
- `AvailabilityCalendar` — read-only month grid, price/day, blocked/open state shown by shape + color (not color alone), demo data pending real iCal feed.
- `DirectPerks` — 3–4 line comparison of direct vs OTA (no taxa de serviço, vantagem exclusiva).
- `LocationMap` — static map placeholder + distance list.
- `NearbyThings` — attraction cards with real distances from the docs.
- `FaqAccordion` — native `<details>`-based or button+region accordion, keyboard accessible.
- `SocialProof` — nota 9,4 Booking, linked, no fabricated quote.
- `WhatsAppFloat` — fixed button, pre-filled message, respects safe-area, one per viewport.
- `Footer` — dark (Pinheiro) section, contact, address, socials.

## Anti-references

Teal/neon/purple-gradient SaaS aesthetic. Glassmorphism. Bouncy/elastic easing. Pop-ups. Numbered eyebrows on every section. Stock-photo-style fake "real" property photography (until Gabriel authorizes real assets).
