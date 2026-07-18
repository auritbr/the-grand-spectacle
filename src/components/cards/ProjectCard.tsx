import { Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import type { Project } from "@/lib/site-data";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <StagePlaceholder label={p.name} className="rounded-none" ratio="aspect-[16/10]" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="w-fit rounded-full bg-[color:var(--beige)] px-2.5 py-1 text-xs font-medium text-[color:var(--wine)]">{p.category}</span>
          <span className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-xs text-[color:var(--muted-foreground)]">{p.status}</span>
        </div>
        <h3 className="font-display text-xl font-bold">{p.name}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">{p.summary}</p>
        <p className="mt-auto flex items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
          <Users className="h-3.5 w-3.5" aria-hidden /> {p.audience}
        </p>
        <Link
          to={`/projetos/${p.slug}` as never}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--wine)] hover:gap-2"
        >
          Conheça o projeto <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}