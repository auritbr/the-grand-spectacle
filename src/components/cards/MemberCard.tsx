import { Motif } from "@/components/decor/CircusMotifs";
import type { TeamMember } from "@/lib/site-data";

// Paleta de fundos, alternando por índice para dar variação editorial à grade.
const PALETTE = [
  { bg: "#1E3A5F", ink: "#F8F5EE", accent: "#E8B84A", side: "left" as const }, // navy
  { bg: "#5C1A1B", ink: "#F8F5EE", accent: "#E8B84A", side: "right" as const }, // wine
  { bg: "#C9A24C", ink: "#1B1E2C", accent: "#5C1A1B", side: "left" as const }, // gold
  { bg: "#1B3B36", ink: "#F8F5EE", accent: "#E8B84A", side: "right" as const }, // petrol
];

function pickPalette(name: string, accent?: string) {
  // Prioriza o accent para manter coerência, mas alterna posição pelo hash do nome.
  const base =
    accent === "navy" ? PALETTE[0] :
    accent === "wine" ? PALETTE[1] :
    accent === "gold" ? PALETTE[2] :
    PALETTE[Math.abs([...name].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)) % PALETTE.length];
  const side = ((name.length % 2) === 0 ? "left" : "right") as "left" | "right";
  return { ...base, side };
}

// Silhueta abstrata de "figura" — evita fotos reais até chegarem as fotografias.
function Figure({ color, side }: { color: string; side: "left" | "right" }) {
  return (
    <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMax meet" className="h-full w-full">
      <g transform={side === "right" ? "translate(200,0) scale(-1,1)" : undefined}>
        {/* cabeça */}
        <circle cx="70" cy="70" r="34" fill={color} />
        {/* tronco / silhueta em movimento */}
        <path
          d="M40 120 C 20 170 30 220 60 260 L130 260 C 120 220 140 180 120 130 C 108 108 82 108 70 120 Z"
          fill={color}
        />
        {/* braço estendido */}
        <path d="M115 135 C 155 130 175 155 190 200 L170 210 C 155 175 138 160 108 155 Z" fill={color} opacity="0.92" />
      </g>
    </svg>
  );
}

export function MemberCard({ m, onOpen }: { m: TeamMember; onOpen: () => void }) {
  const p = pickPalette(m.name, m.accent);
  const figureLeft = p.side === "left";

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver trajetória de ${m.name}`}
      className="group relative block h-full w-full overflow-hidden rounded-3xl text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]"
      style={{ backgroundColor: p.bg, color: p.ink, aspectRatio: "4 / 5" }}
    >
      {/* Grafismo circense de fundo (aro / arco / bandeirola) */}
      <svg
        aria-hidden
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      >
        <circle cx={figureLeft ? 320 : 80} cy="90" r="70" fill="none" stroke={p.accent} strokeWidth="1.5" />
        <circle cx={figureLeft ? 320 : 80} cy="90" r="46" fill="none" stroke={p.accent} strokeWidth="0.8" opacity="0.6" />
        <path
          d={figureLeft ? "M-20 480 Q 200 260 420 480" : "M-20 480 Q 200 260 420 480"}
          stroke={p.accent}
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
      </svg>

      {/* Figura recortada */}
      <div
        className={`absolute bottom-0 h-[78%] w-[62%] transition-transform duration-500 group-hover:scale-[1.04] ${
          figureLeft ? "left-0" : "right-0"
        }`}
        aria-hidden
      >
        <Figure color={p.accent} side={p.side} />
      </div>

      {/* Motivo pequeno no canto oposto */}
      <span
        aria-hidden
        className={`absolute top-5 grid h-10 w-10 place-items-center rounded-full ${
          figureLeft ? "right-5" : "left-5"
        }`}
        style={{ backgroundColor: `${p.ink}22`, color: p.accent }}
      >
        <Motif kind={m.motif ?? "star"} className="h-6 w-6" />
      </span>

      {/* Bloco de texto na área livre */}
      <div
        className={`absolute inset-x-5 top-16 max-w-[62%] ${figureLeft ? "text-right ml-auto" : "text-left"}`}
      >
        <p
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
          style={{ color: p.accent }}
        >
          {m.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight" style={{ color: p.ink }}>
          {m.name}
        </h3>
        <p className="mt-1.5 text-sm" style={{ color: `${p.ink}CC` }}>
          {m.role}
        </p>
      </div>

      {/* CTA discreto */}
      <span
        className={`absolute bottom-4 z-10 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 transition-opacity group-hover:opacity-100 ${
          figureLeft ? "right-4" : "left-4"
        }`}
        style={{ backgroundColor: p.accent, color: p.bg }}
      >
        Ver trajetória →
      </span>
    </button>
  );
}