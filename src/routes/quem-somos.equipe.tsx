import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { MemberCard } from "@/components/cards/MemberCard";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
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

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        eyebrow="Nossa equipe"
        title="Quem sustenta o picadeiro no dia a dia"
        intro="Um grupo diverso de artistas, educadores e profissionais dedicados à cultura viva."
      />
      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtro por categoria">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c
                  ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]"
                  : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m) => (
            <MemberCard key={m.name} m={m} onOpen={() => setOpen(m)} />
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal aria-label={`Biografia de ${open.name}`}>
          <div className="grid w-full max-w-3xl gap-6 rounded-2xl bg-[color:var(--cream)] p-6 shadow-xl md:grid-cols-[220px_1fr]">
            <StagePlaceholder label={open.name} ratio="aspect-[3/4]" />
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{open.category}</p>
                  <h2 className="mt-1 font-display text-2xl font-bold">{open.name}</h2>
                  <p className="text-sm text-[color:var(--muted-foreground)]">{open.role}</p>
                </div>
                <button aria-label="Fechar" onClick={() => setOpen(null)}><X className="h-5 w-5" /></button>
              </div>
              <p className="mt-4 text-sm text-[color:var(--foreground)]/85">{open.fullBio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}