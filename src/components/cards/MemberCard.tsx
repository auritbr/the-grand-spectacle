import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif } from "@/components/decor/CircusMotifs";
import type { TeamMember } from "@/lib/site-data";

const ACCENT = {
  wine: { border: "var(--wine)", text: "var(--wine)", bg: "var(--wine)" },
  gold: { border: "var(--gold)", text: "var(--gold)", bg: "var(--gold)" },
  navy: { border: "var(--navy)", text: "var(--navy)", bg: "var(--navy)" },
} as const;

export function MemberCard({ m, onOpen }: { m: TeamMember; onOpen: () => void }) {
  const accent = ACCENT[m.accent ?? "wine"];
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accent.bg}, var(--gold))` }}
      />
      <div className="relative">
        <StagePlaceholder label={m.name} className="rounded-none" ratio="aspect-[3/4]" />
        {/* Motivo circense ligado ao/à artista */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cream)]/90 shadow-sm"
          style={{ color: accent.text }}
        >
          <Motif kind={m.motif ?? "star"} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
          {m.category}
        </p>
        <h3 className="font-display text-lg font-bold">{m.name}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">{m.role}</p>
        <p className="mt-2 text-sm text-[color:var(--foreground)]/80 line-clamp-3">{m.bio}</p>
        <span className="mt-auto pt-3 text-xs font-semibold text-[color:var(--wine)]">
          Ver trajetória completa →
        </span>
      </div>
    </button>
  );
}