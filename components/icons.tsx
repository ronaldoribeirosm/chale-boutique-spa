type IconProps = { className?: string };

const base = "h-5 w-5";

export function IconSauna({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M6 20c2-2 2-4 0-6s-2-4 0-6" strokeLinecap="round" />
      <path d="M12 20c2-2 2-4 0-6s-2-4 0-6" strokeLinecap="round" />
      <path d="M18 20c2-2 2-4 0-6s-2-4 0-6" strokeLinecap="round" />
    </svg>
  );
}

export function IconDroplet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLeaf({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M20 4C9 4 4 9 4 20c11 0 16-5 16-16Z" strokeLinejoin="round" />
      <path d="M6 18C11 13 14 10 19 5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFlame({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 1.5 2.4 1.5 3.8A4.5 4.5 0 0 1 12 21a5 5 0 0 1-5-5c0-4 3-4 5-13Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWave({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M3 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 2 0 3-1" strokeLinecap="round" />
      <path d="M3 10c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 2 0 3-1" strokeLinecap="round" />
    </svg>
  );
}

export function IconMountain({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="m3 19 6-10 4 6 2-3 6 7Z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function IconKitchen({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 10h16M9 4v6" />
    </svg>
  );
}

export function IconTv({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="1" />
      <path d="M9 21h6M12 18v3" strokeLinecap="round" />
    </svg>
  );
}

export function IconFridge({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="1" />
      <path d="M6 9h12M9 5v2M9 12v2" strokeLinecap="round" />
    </svg>
  );
}

export function IconWifi({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M4 9c4.4-4 11.6-4 16 0M7 12.5c2.9-2.6 7.1-2.6 10 0M10.2 16c1.1-1 2.5-1 3.6 0" strokeLinecap="round" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconParking({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9.5 16V8h3a2.5 2.5 0 0 1 0 5h-3" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRobe({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M9 3h6l1 3-2 2v13H10V8L8 6Z" strokeLinejoin="round" />
      <path d="M15 8l4 2-1 3-3-1M9 8 5 10l1 3 3-1" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCoffee({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 4c0 1-1 1-1 2M12 4c0 1-1 1-1 2" strokeLinecap="round" />
    </svg>
  );
}

export function IconGlass({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M7 3h10l-1.5 9a3.5 3.5 0 0 1-7 0L7 3Z" strokeLinejoin="round" />
      <path d="M12 15v6M9 21h6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronLeft({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
