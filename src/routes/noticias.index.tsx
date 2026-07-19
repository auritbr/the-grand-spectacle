import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/layout/PageHero";
import { NewsCard } from "@/components/cards/NewsCard";
import { Pagination } from "@/components/Pagination";
import { BuntingRow } from "@/components/decor/CircusMotifs";
import { NEWS, NEWS_TAG_LIST } from "@/lib/site-data";

const PER_PAGE = 9;

const searchSchema = z.object({
  page: z.number().int().min(1).optional().catch(1),
  q: z.string().optional().catch(undefined),
  tag: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/noticias/")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Notícias — Arco & Palco" },
      { name: "description", content: "Novidades, coberturas e registros das ações do Ponto de Cultura." },
      { property: "og:title", content: "Notícias — Arco & Palco" },
      { property: "og:description", content: "Novidades e coberturas do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

function Noticias() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTag = search.tag ?? "Todos";
  const page = search.page ?? 1;
  const [qLocal, setQLocal] = useState(search.q ?? "");

  const filtered = useMemo(() => {
    const query = (search.q ?? "").trim().toLowerCase();
    const sorted = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
    return sorted.filter(
      (n) =>
        (activeTag === "Todos" || n.tag === activeTag) &&
        (!query || n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query)),
    );
  }, [search.q, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const slice = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const updateSearch = (patch: Record<string, unknown>) =>
    navigate({
      search: (prev: Record<string, unknown>) => {
        const next: Record<string, unknown> = { ...prev, ...patch };
        // limpa valores default para manter URLs curtas
        if (!next.q) delete next.q;
        if (!next.tag || next.tag === "Todos") delete next.tag;
        if (!next.page || next.page === 1) delete next.page;
        return next as never;
      },
    });

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearch({ q: qLocal.trim(), page: 1 });
  };

  const clearFilters = () => {
    setQLocal("");
    updateSearch({ q: undefined, tag: undefined, page: undefined });
  };

  const hasFilters = !!search.q || (search.tag && search.tag !== "Todos");

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        eyebrow="Comunicação"
        title="Notícias"
      />

      <section className="container-page py-16">
        {/* Barra de busca + filtros de tags */}
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
          <form onSubmit={submitSearch} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
            <div className="relative w-full sm:w-[320px]">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
              <input
                type="search"
                value={qLocal}
                onChange={(e) => setQLocal(e.target.value)}
                placeholder="Buscar notícias..."
                className="h-11 w-full rounded-full border border-[color:var(--border)] bg-[color:var(--background)] pl-10 pr-9 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wine)]"
                aria-label="Buscar notícias"
              />
              {qLocal && (
                <button
                  type="button"
                  onClick={() => { setQLocal(""); updateSearch({ q: undefined, page: 1 }); }}
                  aria-label="Limpar busca"
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-[color:var(--muted-foreground)] hover:bg-[color:var(--beige)]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="h-11 rounded-full bg-[color:var(--wine)] px-5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--wine-deep)]"
            >
              Buscar
            </button>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex h-11 items-center gap-1 rounded-full border border-[color:var(--border)] px-4 text-sm text-[color:var(--muted-foreground)] hover:bg-[color:var(--beige)]"
              >
                <X className="h-4 w-4" /> Limpar
              </button>
            )}
          </form>

          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Filtrar por editoria
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Todos", ...NEWS_TAG_LIST].map((t) => (
                <button
                  key={t}
                  onClick={() => updateSearch({ tag: t, page: 1 })}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                    activeTag === t
                      ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]"
                      : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-[color:var(--muted-foreground)]">
            {filtered.length} {filtered.length === 1 ? "notícia" : "notícias"}
            {hasFilters ? " para os filtros aplicados" : " no total"}
          </p>
          <BuntingRow className="h-5 w-40 text-[color:var(--gold)] opacity-70 sm:w-56" />
        </div>

        {slice.length === 0 ? (
          <p className="mt-16 text-center text-[color:var(--muted-foreground)]">Nenhuma notícia encontrada com os filtros atuais.</p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {slice.map((n) => (
              <NewsCard key={n.slug} n={n} />
            ))}
          </div>
        )}

        <Pagination page={safePage} totalPages={totalPages} onChange={(p) => updateSearch({ page: p })} />
      </section>
    </>
  );
}