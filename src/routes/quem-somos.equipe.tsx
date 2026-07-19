import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { MemberCard } from "@/components/cards/MemberCard";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif, StarSpark } from "@/components/decor/CircusMotifs";
import { TEAM, type TeamMember } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Arco & Palco" },
      { name: "description", content: "Coordenação, direção, produção, educadores, artistas e equipe técnica do Ponto de Cultura." },
      { property: "og:title", content: "Equipe — Arco & Palco" },
      { property: "og:description", content: "Conheça a equipe do Ponto de Cultura Arco & Palco." },
      { property: "og:url", content: "/quem-somos/equipe" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
  component: Equipe,
});

const CATEGORIES = ["Todos", "Coordenação", "Direção", "Produção", "Educadores", "Artistas", "Equipe técnica", "Colaboradores"] as const;

function Equipe() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [open, setOpen] = useState<TeamMember | null>(null);
  const list = cat === "Todos" ? TEAM : TEAM.filter((m) => m.category === cat);

  // Fechar modal com Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        eyebrow="Nossa equipe"
        title="Quem sustenta o picadeiro no dia a dia"
        intro="Um grupo diverso de artistas, educadores, produtores e profissionais técnicos que constrói o Ponto de Cultura em cada temporada."
      />
      <section className="container-page py-16">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filtro por categoria">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                cat === c
                  ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]"
                  : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-[color:var(--muted-foreground)]">
          {list.length} {list.length === 1 ? "integrante" : "integrantes"} nesta categoria.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m) => (
            <MemberCard key={m.name} m={m} onOpen={() => setOpen(m)} />
          ))}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal
          aria-label={`Biografia de ${open.name}`}
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="relative grid w-full max-w-3xl gap-6 overflow-hidden rounded-3xl bg-[color:var(--cream)] p-6 shadow-2xl md:grid-cols-[240px_1fr] md:p-8">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[color:var(--wine)] via-[color:var(--gold)] to-[color:var(--wine)]"
            />
            <div className="relative">
              <StagePlaceholder label={open.name} ratio="aspect-[3/4]" />
              <span
                aria-hidden
                className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-[color:var(--cream)]/95 text-[color:var(--wine)] shadow"
              >
                <Motif kind={open.motif ?? "star"} className="h-6 w-6" />
              </span>
            </div>
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                    <StarSpark className="h-2.5 w-2.5" /> {open.category}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{open.name}</h2>
                  <p className="text-sm text-[color:var(--muted-foreground)]">{open.role}</p>
                </div>
                <button
                  aria-label="Fechar"
                  onClick={() => setOpen(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[color:var(--border)] hover:bg-[color:var(--beige)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-5 border-t border-[color:var(--border)] pt-4">
                <p className="text-sm leading-relaxed text-[color:var(--foreground)]/85">{open.fullBio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}