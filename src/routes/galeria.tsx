import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Lightbox } from "@/components/Lightbox";
import { GALLERY, GALLERY_YEARS } from "@/lib/site-data";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Arco & Palco" },
      { name: "description", content: "Registros fotográficos das atividades, apresentações e ações do Ponto de Cultura." },
      { property: "og:title", content: "Galeria — Arco & Palco" },
      { property: "og:description", content: "Registros fotográficos das atividades e apresentações." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  const [year, setYear] = useState<number>(GALLERY_YEARS[0]);
  const [idx, setIdx] = useState<number | null>(null);
  const items = useMemo(() => GALLERY[year] ?? [], [year]);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        eyebrow="Registros"
        title="Galeria de imagens"
        intro="Momentos de formação, criação e apresentações."
      />
      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por ano">
          {GALLERY_YEARS.map((y) => (
            <button
              key={y}
              role="tab"
              aria-selected={y === year}
              onClick={() => setYear(y)}
              className={`rounded-full border px-4 py-1.5 text-sm ${
                y === year
                  ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]"
                  : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wine)]"
              aria-label={`Abrir imagem: ${it.alt}`}
            >
              <StagePlaceholder label={it.caption} ratio="aspect-square" className="rounded-2xl" />
            </button>
          ))}
        </div>
      </section>
      <Lightbox
        images={items.map((i) => ({ alt: i.alt, caption: i.caption }))}
        index={idx}
        onClose={() => setIdx(null)}
        onIndex={setIdx}
      />
    </>
  );
}