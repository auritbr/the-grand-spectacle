import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { StarSpark } from "@/components/decor/CircusMotifs";
import type { NewsPost } from "@/lib/site-data";

/**
 * Card padrão de notícia — layout homogêneo com moldura circense discreta.
 * `featured` mantido para retrocompatibilidade (usa layout horizontal maior).
 */
export function NewsCard({ n, featured = false }: { n: NewsPost; featured?: boolean }) {
  const dateLabel = new Date(n.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Fita superior dourada */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--gold)] via-[color:var(--wine)] to-[color:var(--gold)]" />

      <div className={`relative ${featured ? "md:w-[45%]" : ""}`}>
        <StagePlaceholder
          label={n.title}
          className="rounded-none"
          ratio={featured ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}
        />
        {/* Etiqueta de tag sobre a imagem */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[color:var(--wine)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--cream)] shadow-sm">
          <StarSpark className="h-2.5 w-2.5" />
          {n.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex items-center gap-3 text-xs text-[color:var(--muted-foreground)]">
          <time>{dateLabel}</time>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden /> {n.readingTime}
          </span>
        </div>

        <h3 className={`font-display font-bold leading-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {n.title}
        </h3>
        <p className={`text-sm text-[color:var(--muted-foreground)] ${featured ? "" : "line-clamp-3"}`}>{n.excerpt}</p>

        <Link
          to="/noticias/$slug"
          params={{ slug: n.slug }}
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--wine)] transition-all group-hover:gap-2"
        >
          Leia a notícia <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}