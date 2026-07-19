import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Lightbox } from "@/components/Lightbox";
import { RopeCurve, StarSpark } from "@/components/decor/CircusMotifs";
import { GALLERY_POSTS, GALLERY_YEARS, type GalleryPhoto, type GalleryPost } from "@/lib/site-data";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Arco & Palco" },
      { name: "description", content: "Registros fotográficos das oficinas, apresentações e ações do Ponto de Cultura." },
      { property: "og:title", content: "Galeria — Arco & Palco" },
      { property: "og:description", content: "Registros fotográficos das oficinas e apresentações." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

type LbState = { photos: GalleryPhoto[]; index: number; postTitle: string } | null;

function Galeria() {
  const [year, setYear] = useState<number>(GALLERY_YEARS[0]);
  const [lb, setLb] = useState<LbState>(null);
  const posts: GalleryPost[] = GALLERY_POSTS[year] ?? [];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        eyebrow="Registros"
        title="Galeria de Fotos"
        intro="Oficinas, apresentações e encontros comunitários organizados por ano e conjunto fotográfico."
      />

      <section className="container-page py-16">
        {/* Seletor de anos com rolagem horizontal no mobile */}
        <div
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          role="tablist"
          aria-label="Filtrar por ano"
        >
          {GALLERY_YEARS.map((y) => (
            <button
              key={y}
              role="tab"
              aria-selected={y === year}
              onClick={() => setYear(y)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                y === year
                  ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)] shadow-sm"
                  : "border-[color:var(--border)] bg-[color:var(--card)] hover:bg-[color:var(--beige)]"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Postagens fotográficas do ano selecionado */}
        <div className="mt-14 space-y-20">
          {posts.length === 0 && (
            <p className="py-12 text-center text-[color:var(--muted-foreground)]">
              Nenhum registro publicado neste ano.
            </p>
          )}
          {posts.map((post) => (
            <article key={post.id} aria-labelledby={`post-${post.id}`}>
              <header className="max-w-3xl">
                <div className="flex items-center gap-3 text-[color:var(--gold)]">
                  <StarSpark className="h-4 w-4" />
                  {post.date && (
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{post.date}</span>
                  )}
                </div>
                <h2
                  id={`post-${post.id}`}
                  className="mt-2 font-display text-2xl font-bold md:text-3xl"
                >
                  {post.title}
                </h2>
                <RopeCurve className="mt-3 h-3 w-40 text-[color:var(--gold)]" />
                <p className="mt-3 text-xs font-medium text-[color:var(--wine)]">
                  {post.photos.length} fotografia{post.photos.length > 1 ? "s" : ""}
                </p>
              </header>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {post.photos.map((ph, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLb({ photos: post.photos, index: i, postTitle: post.title })}
                    className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wine)]"
                    aria-label={`Abrir imagem: ${ph.alt}`}
                  >
                    <StagePlaceholder label={ph.caption ?? ph.alt} ratio="aspect-square" className="rounded-2xl transition-transform group-hover:scale-[1.02]" />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Lightbox
        images={
          lb
            ? lb.photos.map((p) => ({
                alt: p.alt,
                caption: [lb.postTitle, p.caption].filter(Boolean).join(" — "),
              }))
            : []
        }
        index={lb ? lb.index : null}
        onClose={() => setLb(null)}
        onIndex={(i) => setLb((prev) => (prev ? { ...prev, index: i } : prev))}
      />
    </>
  );
}