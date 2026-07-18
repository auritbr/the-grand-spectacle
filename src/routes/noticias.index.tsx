import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NewsCard } from "@/components/cards/NewsCard";
import { NEWS, NEWS_TAG_LIST } from "@/lib/site-data";

export const Route = createFileRoute("/noticias/")({
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
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("Todos");
  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return NEWS.filter(
      (n) =>
        (tag === "Todos" || n.tag === tag) &&
        (!query || n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query)),
    );
  }, [q, tag]);
  const featured = list[0];
  const rest = list.slice(1);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        eyebrow="Comunicação"
        title="Notícias"
        intro="Novidades, coberturas e registros das ações do Ponto de Cultura."
      />
      <section className="container-page py-16 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar notícias..."
              className="h-11 w-full rounded-full border border-[color:var(--border)] bg-[color:var(--card)] pl-10 pr-4 text-sm"
              aria-label="Buscar notícias"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Todos", ...NEWS_TAG_LIST].map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-3 py-1 text-xs ${
                  tag === t
                    ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]"
                    : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {featured && <NewsCard n={featured} featured />}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <NewsCard key={n.slug} n={n} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-12 text-center text-[color:var(--muted-foreground)]">Nenhuma notícia encontrada.</p>
        )}
      </section>
    </>
  );
}