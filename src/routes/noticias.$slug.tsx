import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { NewsCard } from "@/components/cards/NewsCard";
import { Button } from "@/components/ui/button";
import { NEWS } from "@/lib/site-data";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = NEWS.find((n) => n.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Notícias Arco & Palco` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/noticias/${params.slug}` },
        ]
      : [{ title: "Notícia — Arco & Palco" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
  }),
  component: NewsDetail,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Notícia não encontrada</h1>
      <Button asChild className="mt-6 bg-[color:var(--wine)] text-[color:var(--cream)]">
        <Link to="/noticias">Voltar para notícias</Link>
      </Button>
    </div>
  ),
  errorComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Notícia indisponível</h1>
    </div>
  ),
});

function NewsDetail() {
  const n = Route.useLoaderData();
  const related = NEWS.filter((x) => x.slug !== n.slug && x.tag === n.tag).slice(0, 3);
  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias", to: "/noticias" }, { label: n.title }]}
        eyebrow={n.tag}
        title={n.title}
        intro={n.subtitle}
      />
      <article className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[color:var(--muted-foreground)]">
            {new Date(n.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {n.author} · {n.readingTime}
          </p>
          <StagePlaceholder label={n.title} ratio="aspect-[16/9]" className="mt-6" />
          <div className="prose prose-neutral mt-8 max-w-none">
            {n.content.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="font-display text-2xl font-bold text-[color:var(--wine)]">{b.text}</h2>;
              if (b.type === "quote") return <blockquote key={i} className="border-l-4 border-[color:var(--gold)] pl-4 italic text-[color:var(--foreground)]/85">{b.text}</blockquote>;
              if (b.type === "ul") return <ul key={i} className="list-disc space-y-1 pl-5">{b.items?.map((it) => <li key={it}>{it}</li>)}</ul>;
              return <p key={i} className="text-[color:var(--foreground)]/85">{b.text}</p>;
            })}
          </div>
          <div className="mt-8 flex gap-3 border-t border-[color:var(--border)] pt-6 text-sm">
            <span className="text-[color:var(--muted-foreground)]">Compartilhar:</span>
            <a className="hover:text-[color:var(--wine)]" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(n.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="hover:text-[color:var(--wine)]" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="hover:text-[color:var(--wine)]" href={`https://wa.me/?text=${encodeURIComponent(n.title)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold">Leia também</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((r) => <NewsCard key={r.slug} n={r} />)}
            </div>
          </div>
        )}
      </article>
    </>
  );
}