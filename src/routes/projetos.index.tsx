import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif, RopeCurve, StarSpark } from "@/components/decor/CircusMotifs";
import { PROJECTS, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Arco & Palco" },
      { name: "description", content: "Programas de formação, criação e circulação em artes circenses." },
      { property: "og:title", content: "Projetos — Arco & Palco" },
      { property: "og:description", content: "Programas de formação, criação e circulação em artes circenses." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

function Projetos() {
  const [cat, setCat] = useState<string>("Todos");
  const [status, setStatus] = useState<string>("Todos");
  const cats = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const statuses = ["Todos", "Ativo", "Contínuo", "Concluído"];
  const list = useMemo(
    () =>
      PROJECTS.filter((p) => (cat === "Todos" || p.category === cat) && (status === "Todos" || p.status === status)),
    [cat, status],
  );

  const highlights = list.filter((p) => p.highlight);
  const rest = list.filter((p) => !p.highlight);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        eyebrow="Programas do Ponto de Cultura"
        title="Projetos em formação, criação e circulação"
        intro="Iniciativas contínuas que unem formação artística, criação cênica, circulação comunitária e preservação da memória circense."
      />

      <section className="container-page pt-14">
        {/* Filtros elegantes em cartão */}
        <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-sm">
          <Filter label="Categoria" options={cats} value={cat} onChange={setCat} />
          <Filter label="Situação" options={statuses} value={status} onChange={setStatus} />
          <p className="ml-auto text-xs text-[color:var(--muted-foreground)]">
            Exibindo <strong>{list.length}</strong> {list.length === 1 ? "projeto" : "projetos"}
          </p>
        </div>
      </section>

      {/* DESTAQUES em layout editorial alternado */}
      {highlights.length > 0 && (
        <section className="container-page py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">
              Projetos em destaque
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Programas que movem o Ponto de Cultura
            </h2>
            <RopeCurve className="mt-3 h-4 w-40 text-[color:var(--gold)]" />
          </div>

          <div className="space-y-16">
            {highlights.map((p, i) => (
              <FeatureRow key={p.slug} p={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>
      )}

      {/* DEMAIS PROJETOS em grid */}
      {rest.length > 0 && (
        <section className="bg-[color:var(--beige)] py-16">
          <div className="container-page">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">
              Também no picadeiro
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Outros projetos</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {list.length === 0 && (
        <section className="container-page py-24 text-center">
          <p className="text-[color:var(--muted-foreground)]">Nenhum projeto encontrado com os filtros atuais.</p>
        </section>
      )}
    </>
  );
}

/** Linha editorial destacada — imagem grande + informações à direita/esquerda. */
function FeatureRow({ p, reverse }: { p: Project; reverse?: boolean }) {
  const accent =
    p.colorKey === "gold" ? "var(--gold)" :
    p.colorKey === "navy" ? "var(--navy)" :
    "var(--wine)";

  return (
    <article className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative">
        <StagePlaceholder label={p.name} ratio="aspect-[4/3]" />
        <span
          aria-hidden
          className="absolute -bottom-4 -left-4 grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--cream)] shadow-lg"
          style={{ color: accent }}
        >
          <Motif kind={p.motif ?? "star"} className="h-9 w-9" />
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--cream)]"
            style={{ background: accent }}
          >
            <StarSpark className="h-2.5 w-2.5" /> {p.category}
          </span>
          <span className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--muted-foreground)]">
            {p.status}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">{p.name}</h3>
        <p className="mt-3 text-[color:var(--muted-foreground)]">{p.summary}</p>

        <ul className="mt-6 grid gap-2 text-sm text-[color:var(--foreground)]/85 sm:grid-cols-2">
          <li className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--wine)]" /> {p.audience} · {p.ageRange}</li>
          <li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--wine)]" /> {p.period}</li>
          <li className="flex items-start gap-2 sm:col-span-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--wine)]" /> {p.location}</li>
        </ul>

        <Link
          to="/projetos/$slug"
          params={{ slug: p.slug }}
          className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[color:var(--cream)] transition-all hover:gap-3"
          style={{ background: accent }}
        >
          Conheça o projeto <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function Filter({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-[color:var(--muted-foreground)]">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-sm"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}