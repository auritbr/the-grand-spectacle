import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif } from "@/components/decor/CircusMotifs";
import type { Project } from "@/lib/site-data";

const COLOR = {
  wine: "var(--wine)",
  gold: "var(--gold)",
  navy: "var(--navy)",
} as const;

export function ProjectCard({ p }: { p: Project }) {
  const accent = COLOR[p.colorKey ?? "wine"];
  const statusTone =
    p.status === "Ativo" ? "bg-[color:var(--gold)]/20 text-[color:var(--wine)]" :
    p.status === "Contínuo" ? "bg-[color:var(--navy)]/10 text-[color:var(--navy)]" :
    "bg-[color:var(--muted)] text-[color:var(--muted-foreground)]";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
      <div className="relative">
        <StagePlaceholder label={p.name} className="rounded-none" ratio="aspect-[16/10]" />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream)]/90 shadow"
          style={{ color: accent }}
        >
          <Motif kind={p.motif ?? "star"} className="h-7 w-7" />
        </span>
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${statusTone}`}>
          {p.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
          {p.category}
        </p>
        <h3 className="font-display text-xl font-bold leading-tight">{p.name}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)] line-clamp-3">{p.summary}</p>

        <ul className="mt-1 space-y-1.5 text-xs text-[color:var(--muted-foreground)]">
          <li className="flex items-start gap-2"><Users className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden /> {p.audience} · {p.ageRange}</li>
          <li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden /> {p.period}</li>
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden /> {p.location}</li>
        </ul>

        <Link
          to="/projetos/$slug"
          params={{ slug: p.slug }}
          className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-[color:var(--wine)] transition-all group-hover:gap-2"
        >
          Conheça o projeto <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}