import { Link } from "@tanstack/react-router";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import type { NewsPost } from "@/lib/site-data";

export function NewsCard({ n, featured = false }: { n: NewsPost; featured?: boolean }) {
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${featured ? "md:flex-row" : ""}`}>
      <StagePlaceholder label={n.title} className="rounded-none" ratio={featured ? "aspect-[4/3] md:aspect-auto md:w-1/2" : "aspect-[16/10]"} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[color:var(--wine)] px-2 py-0.5 text-[color:var(--cream)]">{n.tag}</span>
          <time className="text-[color:var(--muted-foreground)]">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
        </div>
        <h3 className={`font-display font-bold ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>{n.title}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">{n.excerpt}</p>
        <Link to={`/noticias/$slug`} params={{ slug: n.slug }} className="mt-auto text-sm font-semibold text-[color:var(--wine)] hover:underline">
          Leia a notícia →
        </Link>
      </div>
    </article>
  );
}