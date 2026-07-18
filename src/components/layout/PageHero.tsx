import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ArcDivider } from "@/components/decor/CurtainBackdrop";

export type Crumb = { label: string; to?: string };

export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <defs>
            <radialGradient id="ph-hero-spot" cx="50%" cy="0%" r="70%">
              <stop offset="0%" stopColor="oklch(0.9 0.14 85 / 0.4)" />
              <stop offset="100%" stopColor="oklch(0.9 0.14 85 / 0)" />
            </radialGradient>
          </defs>
          <rect width="1440" height="400" fill="url(#ph-hero-spot)" />
          <path d="M0 0 L200 0 C 190 130 180 260 170 400 L0 400 Z" fill="oklch(0.32 0.15 20)" opacity="0.85" />
          <path d="M1440 0 L1240 0 C 1250 130 1260 260 1270 400 L1440 400 Z" fill="oklch(0.32 0.15 20)" opacity="0.85" />
          <circle cx="720" cy="360" r="240" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.35" />
          <circle cx="720" cy="360" r="180" fill="none" stroke="oklch(0.78 0.13 82)" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="relative container-page pt-28 pb-14 md:pt-32 md:pb-20">
        <nav aria-label="Trilha de navegação" className="text-xs text-[color:var(--cream)]/70">
          <ol className="flex flex-wrap items-center gap-1">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {c.to ? (
                  <Link to={c.to as any} className="hover:text-[color:var(--gold)]">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-[color:var(--gold)]">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-base text-[color:var(--cream)]/80 md:text-lg">{intro}</p>}
      </div>

      <ArcDivider className="absolute bottom-0 left-0 right-0 h-6 w-full text-[color:var(--gold)]" />
    </section>
  );
}