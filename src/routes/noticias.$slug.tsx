import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, Clock, User, Link2, Check, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { NewsCard } from "@/components/cards/NewsCard";
import { Lightbox } from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { CornerOrnament, RopeCurve, StarSpark } from "@/components/decor/CircusMotifs";
import { NEWS, type NewsPost } from "@/lib/site-data";

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
  const n = Route.useLoaderData() as NewsPost;
  const related = NEWS.filter((x) => x.slug !== n.slug && x.tag === n.tag).slice(0, 3);
  const dateFmt = new Date(n.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  // Galeria interna simulada — 6 registros ligados ao post.
  const gallery = Array.from({ length: 6 }).map((_, i) => ({
    alt: `${n.title} — registro ${i + 1}`,
    caption: `${n.title} — registro ${i + 1}`,
  }));
  const [lb, setLb] = useState<number | null>(null);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://arcoepalco.org.br/noticias/${n.slug}`;
  const shareText = encodeURIComponent(n.title);

  return (
    <>
      {/* HERO EDITORIAL — imagem grande com título sobreposto */}
      <header className="relative">
        <StagePlaceholder
          label={n.title}
          ratio="aspect-[16/9] md:aspect-[21/9]"
          className="rounded-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-[color:var(--navy)]/50 to-transparent" />
        <CornerOrnament aria-hidden className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-[color:var(--gold)]/70" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-10 md:pb-16">
          <nav aria-label="Trilha" className="mb-4 text-xs text-[color:var(--cream)]/80">
            <Link to="/" className="hover:underline">Início</Link>
            <span aria-hidden> / </span>
            <Link to="/noticias" className="hover:underline">Notícias</Link>
            <span aria-hidden> / </span>
            <span className="text-[color:var(--cream)]/60">{n.tag}</span>
          </nav>
          <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--navy)]">
            <StarSpark className="h-2.5 w-2.5" /> {n.tag}
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold text-[color:var(--cream)] md:text-5xl">
            {n.title}
          </h1>
          <p className="mt-3 max-w-3xl text-[color:var(--cream)]/85 md:text-lg">{n.subtitle}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[color:var(--cream)]/80">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {dateFmt}</span>
            <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {n.author}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {n.readingTime}</span>
          </div>
        </div>
      </header>

      {/* CORPO DA NOTÍCIA */}
      <article className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <RopeCurve className="mb-8 h-4 w-32 text-[color:var(--gold)]" />

          <div className="space-y-5">
            {n.content.map((b: NewsPost["content"][number], i: number) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} className="mt-10 font-display text-2xl font-bold text-[color:var(--wine)] md:text-3xl">
                    {b.text}
                  </h2>
                );
              if (b.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="relative my-8 rounded-2xl border-l-4 border-[color:var(--gold)] bg-[color:var(--beige)] p-6 font-display text-xl italic leading-relaxed text-[color:var(--wine)] md:text-2xl"
                  >
                    <span aria-hidden className="absolute left-4 top-2 font-display text-5xl leading-none text-[color:var(--gold)]/60">“</span>
                    <span className="relative">{b.text}</span>
                  </blockquote>
                );
              if (b.type === "ul")
                return (
                  <ul key={i} className="list-none space-y-2 pl-0">
                    {b.items?.map((it: string) => (
                      <li key={it} className="flex items-start gap-3 text-[color:var(--foreground)]/85">
                        <StarSpark className="mt-1.5 h-3 w-3 shrink-0 text-[color:var(--gold)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="text-lg leading-relaxed text-[color:var(--foreground)]/85">
                  {b.text}
                </p>
              );
            })}
          </div>

          {/* Galeria interna */}
          <section className="mt-14 rounded-3xl bg-[color:var(--beige)] p-6 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Registros</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-[color:var(--wine)]">Galeria de fotos</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLb(i)}
                  className="group overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wine)]"
                  aria-label={`Abrir imagem ${i + 1}`}
                >
                  <StagePlaceholder label={g.alt} ratio="aspect-square" className="rounded-xl transition-transform group-hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </section>

          <ShareBar url={shareUrl} text={shareText} />

          <div className="mt-10">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--wine)] hover:underline"
            >
              ← Voltar para todas as notícias
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Continue lendo</p>
            <h2 className="mt-1 font-display text-3xl font-bold">Notícias relacionadas</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => <NewsCard key={r.slug} n={r} />)}
            </div>
          </div>
        )}
      </article>

      <Lightbox
        images={gallery}
        index={lb}
        onClose={() => setLb(null)}
        onIndex={setLb}
      />
    </>
  );
}

function ShareBar({ url, text }: { url: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };
  const btn =
    "inline-flex h-12 items-center gap-2.5 rounded-full border border-[color:var(--navy)]/25 bg-[color:var(--card)] px-6 text-sm font-semibold text-[color:var(--navy)] transition-colors hover:bg-[color:var(--beige)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wine)]";
  return (
    <div className="mt-12 border-t border-[color:var(--border)] pt-6">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <span className="font-display text-sm font-bold text-[color:var(--wine)]">Compartilhe:</span>
        <a className={btn} href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp">
          <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
        </a>
        <a className={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook">
          <Facebook className="h-4 w-4" aria-hidden /> Facebook
        </a>
        <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no LinkedIn">
          <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
        </a>
        <a className={btn} href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Abrir Instagram">
          <Instagram className="h-4 w-4" aria-hidden /> Instagram
        </a>
        <button type="button" onClick={copyLink} className={btn} aria-live="polite">
          {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
          {copied ? "Link copiado" : "Copiar link"}
        </button>
      </div>
      {copied && (
        <p className="mt-3 text-xs font-medium text-[color:var(--wine)]">Link copiado com sucesso.</p>
      )}
    </div>
  );
}