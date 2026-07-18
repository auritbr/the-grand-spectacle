// Decorative SVG: layered stage curtain backdrop used in the home hero.
export function CurtainBackdrop() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-[color:var(--wine)]"
    >
      <defs>
        <linearGradient id="wine-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.32 0.15 20)" />
          <stop offset="100%" stopColor="oklch(0.24 0.12 20)" />
        </linearGradient>
        <linearGradient id="fold" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0 0 0 / 0.35)" />
          <stop offset="50%" stopColor="oklch(0 0 0 / 0)" />
          <stop offset="100%" stopColor="oklch(0 0 0 / 0.35)" />
        </linearGradient>
        <radialGradient id="spot" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="oklch(0.9 0.14 85 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.9 0.14 85 / 0)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="720" fill="oklch(0.18 0.06 265)" />
      <rect width="1440" height="720" fill="url(#spot)" />
      {/* left curtain */}
      <path d="M0 0 L360 0 C 340 240 300 480 260 720 L0 720 Z" fill="url(#wine-grad)" />
      <path d="M0 0 L360 0 C 340 240 300 480 260 720 L0 720 Z" fill="url(#fold)" opacity="0.5" />
      {/* right curtain */}
      <path d="M1440 0 L1080 0 C 1100 240 1140 480 1180 720 L1440 720 Z" fill="url(#wine-grad)" />
      <path d="M1440 0 L1080 0 C 1100 240 1140 480 1180 720 L1440 720 Z" fill="url(#fold)" opacity="0.5" />
      {/* gold cornice line */}
      <line x1="0" y1="18" x2="1440" y2="18" stroke="oklch(0.78 0.13 82)" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="30" x2="1440" y2="30" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

// Slim gold curved divider evoking a picadeiro arc.
export function ArcDivider({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className={className}>
      <path
        d="M0 40 Q 720 -30 1440 40"
        stroke="oklch(0.78 0.13 82)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0 50 Q 720 10 1440 50"
        stroke="oklch(0.78 0.13 82)"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}

// Placeholder image block with soft curtain/stage feel — used until real photos land.
export function StagePlaceholder({
  label = "Imagem em preparação",
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${ratio} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ph-bg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.28 0.06 265)" />
            <stop offset="100%" stopColor="oklch(0.18 0.06 265)" />
          </linearGradient>
          <radialGradient id="ph-spot" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="oklch(0.9 0.14 85 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.9 0.14 85 / 0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#ph-bg)" />
        <rect width="400" height="300" fill="url(#ph-spot)" />
        <path d="M0 0 L90 0 C 80 100 70 200 60 300 L0 300 Z" fill="oklch(0.32 0.15 20)" opacity="0.9" />
        <path d="M400 0 L310 0 C 320 100 330 200 340 300 L400 300 Z" fill="oklch(0.32 0.15 20)" opacity="0.9" />
        <circle cx="200" cy="180" r="42" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1.5" opacity="0.7" />
        <circle cx="200" cy="180" r="28" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.5" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}