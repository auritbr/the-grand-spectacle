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
  variant,
}: {
  label?: string;
  className?: string;
  ratio?: string;
  variant?: "curtain" | "arc" | "spot" | "silk" | "juggle" | "ring";
}) {
  // Pick a variant either from prop or hashed from label so cards look varied.
  const variants = ["curtain", "arc", "spot", "silk", "juggle", "ring"] as const;
  const v =
    variant ??
    variants[
      Math.abs(
        [...label].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7),
      ) % variants.length
    ];

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
          <linearGradient id="ph-silk" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.9 0.14 85 / 0.05)" />
            <stop offset="50%" stopColor="oklch(0.9 0.14 85 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.9 0.14 85 / 0.05)" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#ph-bg)" />
        <rect width="400" height="300" fill="url(#ph-spot)" />
        {v === "curtain" && (
          <>
            <path d="M0 0 L90 0 C 80 100 70 200 60 300 L0 300 Z" fill="oklch(0.32 0.15 20)" opacity="0.9" />
            <path d="M400 0 L310 0 C 320 100 330 200 340 300 L400 300 Z" fill="oklch(0.32 0.15 20)" opacity="0.9" />
            <circle cx="200" cy="180" r="42" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1.5" opacity="0.7" />
            <circle cx="200" cy="180" r="28" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.5" />
          </>
        )}
        {v === "arc" && (
          <>
            <path d="M-20 320 Q 200 60 420 320" stroke="oklch(0.78 0.13 82)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M-20 340 Q 200 100 420 340" stroke="oklch(0.78 0.13 82)" strokeWidth="1" fill="none" opacity="0.35" />
            <circle cx="200" cy="160" r="60" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.4" />
          </>
        )}
        {v === "spot" && (
          <>
            <path d="M200 0 L360 300 L40 300 Z" fill="oklch(0.9 0.14 85 / 0.12)" />
            <circle cx="200" cy="18" r="10" fill="oklch(0.78 0.13 82)" opacity="0.8" />
          </>
        )}
        {v === "silk" && (
          <>
            <path d="M120 -10 C 160 80 90 160 140 240 C 165 280 130 300 140 310 L200 310 C 190 290 220 260 190 200 C 150 130 210 60 170 -10 Z" fill="url(#ph-silk)" />
            <path d="M260 -10 C 220 90 290 170 240 260 L300 260 C 320 200 280 130 310 -10 Z" fill="url(#ph-silk)" opacity="0.7" />
          </>
        )}
        {v === "juggle" && (
          <>
            <path d="M40 220 Q 200 40 360 220" stroke="oklch(0.78 0.13 82)" strokeWidth="1.5" fill="none" strokeDasharray="3 6" opacity="0.6" />
            <circle cx="80" cy="180" r="14" fill="oklch(0.78 0.13 82)" opacity="0.9" />
            <circle cx="200" cy="80" r="14" fill="oklch(0.78 0.13 82)" opacity="0.75" />
            <circle cx="320" cy="180" r="14" fill="oklch(0.78 0.13 82)" opacity="0.6" />
          </>
        )}
        {v === "ring" && (
          <>
            <circle cx="200" cy="160" r="86" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="2" opacity="0.85" />
            <circle cx="200" cy="160" r="60" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.45" />
            <line x1="200" y1="30" x2="200" y2="60" stroke="oklch(0.78 0.13 82)" strokeWidth="2" />
          </>
        )}
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}