// Biblioteca de motivos circenses reutilizáveis (SVG puros, sem dependências).
// Todos são decorativos, ficam com aria-hidden e herdam cor via currentColor
// quando aplicável.

type Props = { className?: string; style?: React.CSSProperties; "aria-hidden"?: boolean | "true" | "false" };

/** Trajetória de 3 bolas de malabarismo em arco. */
export function JugglingArc({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 160 80" aria-hidden className={className} style={style}>
      <path d="M8 70 Q 80 -10 152 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.55" />
      <circle cx="30" cy="46" r="7" fill="currentColor" />
      <circle cx="80" cy="14" r="7" fill="currentColor" opacity="0.85" />
      <circle cx="130" cy="46" r="7" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Faixa vertical curva evocando tecido aéreo. */
export function SilkRibbon({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 60 240" aria-hidden className={className} style={style}>
      <defs>
        <linearGradient id="silk" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path d="M15 0 C 40 60, 10 120, 30 180 C 45 210, 20 230, 25 240 L45 240 C 40 220, 60 200, 45 160 C 25 110, 55 60, 35 0 Z" fill="url(#silk)" />
    </svg>
  );
}

/** Aros concêntricos — inspirado em lira / aro aéreo. */
export function RingHoop({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} style={style}>
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <line x1="60" y1="0" x2="60" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Estrela pequena e discreta (cinco pontas). */
export function StarSpark({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} style={style}>
      <path
        d="M12 2 L14 9 L22 10 L16 15 L18 22 L12 18 L6 22 L8 15 L2 10 L10 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Curva grossa evocando corda. */
export function RopeCurve({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 200 40" aria-hidden className={className} style={style}>
      <path d="M0 20 Q 50 -10 100 20 T 200 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M0 20 Q 50 -10 100 20 T 200 20" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="1 6" />
    </svg>
  );
}

/** Arco de picadeiro — moldura em meia-lua. */
export function PicadeiroArc({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 400 120" aria-hidden preserveAspectRatio="none" className={className} style={style}>
      <path d="M0 120 Q 200 -40 400 120" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.75" />
      <path d="M0 120 Q 200 -10 400 120" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
      <circle cx="10" cy="120" r="4" fill="currentColor" opacity="0.75" />
      <circle cx="390" cy="120" r="4" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

/** Cone/feixe de luz cênica. */
export function SpotlightBeam({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} style={style}>
      <defs>
        <radialGradient id="beam" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M100 0 L200 200 L0 200 Z" fill="url(#beam)" />
      <circle cx="100" cy="6" r="6" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/** Bandeirolas abstratas em fila. */
export function BuntingRow({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 240 40" aria-hidden className={className} style={style}>
      <path d="M0 4 Q 120 20 240 4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 12 + i * 24;
        const y = 6 + Math.sin(i / 2) * 3;
        return (
          <polygon
            key={i}
            points={`${x - 8},${y} ${x + 8},${y} ${x},${y + 20}`}
            fill="currentColor"
            opacity={i % 2 === 0 ? 0.85 : 0.55}
          />
        );
      })}
    </svg>
  );
}

/** Linha de arame com tensão nas pontas. */
export function TightropeLine({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 240 20" aria-hidden className={className} style={style}>
      <line x1="4" y1="10" x2="236" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="10" r="4" fill="currentColor" />
      <circle cx="236" cy="10" r="4" fill="currentColor" />
    </svg>
  );
}

/** Ornamento de canto (estrela + linhas de movimento). */
export function CornerOrnament({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden className={className} style={style}>
      <path d="M0 40 Q 40 0 80 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M0 55 Q 40 15 80 55" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
      <circle cx="40" cy="30" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** Divisor curvo de seção — arco duplo dourado. */
export function SectionArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden className={className}>
      <path d="M0 40 Q 720 -20 1440 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M0 50 Q 720 10 1440 50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
    </svg>
  );
}

/** Escolhe motivo por chave. Retorna um componente <svg/>. */
export function Motif({ kind, className, style }: { kind: string; className?: string; style?: React.CSSProperties }) {
  switch (kind) {
    case "juggle":
      return <JugglingArc className={className} style={style} />;
    case "silk":
      return <SilkRibbon className={className} style={style} />;
    case "ring":
      return <RingHoop className={className} style={style} />;
    case "star":
      return <StarSpark className={className} style={style} />;
    case "rope":
      return <RopeCurve className={className} style={style} />;
    case "arc":
      return <PicadeiroArc className={className} style={style} />;
    case "spotlight":
      return <SpotlightBeam className={className} style={style} />;
    case "bunting":
      return <BuntingRow className={className} style={style} />;
    default:
      return <StarSpark className={className} style={style} />;
  }
}