import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif, RopeCurve, StarSpark, JugglingArc, SilkRibbon, PicadeiroArc, BuntingRow, SpotlightBeam, CornerOrnament } from "@/components/decor/CircusMotifs";
import { Button } from "@/components/ui/button";
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
        title="Projetos"
        intro="Formação, criação e circulação das artes circenses junto à comunidade."
      />

      {/* INTRODUÇÃO curta e visual */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] py-16">
        <StarSpark aria-hidden className="pointer-events-none absolute left-10 top-10 h-4 w-4 text-[color:var(--gold)]" />
        <StarSpark aria-hidden className="pointer-events-none absolute right-16 bottom-16 h-3 w-3 text-[color:var(--wine)]" />
        <JugglingArc aria-hidden className="pointer-events-none absolute right-8 top-8 h-16 w-40 text-[color:var(--gold)]" />
        <RopeCurve aria-hidden className="pointer-events-none absolute -left-10 bottom-4 h-8 w-64 text-[color:var(--wine)]/50" />
        <div className="container-page relative text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">
            Nossos projetos
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
            Aprender, criar e compartilhar
          </h2>
          <RopeCurve aria-hidden className="mx-auto mt-4 h-4 w-32 text-[color:var(--gold)]" />
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--muted-foreground)] md:text-lg">
            Cada projeto nasce do encontro entre prática artística, formação cultural e participação comunitária.
          </p>
        </div>
      </section>

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

          <div className="space-y-24">
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

      {/* CTA FINAL */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--wine)] text-[color:var(--cream)] shadow-xl">
          <div className="absolute inset-0">
            <StagePlaceholder
              label="Atividade circense na comunidade"
              ratio="aspect-auto h-full w-full"
              className="!aspect-auto h-full w-full rounded-none"
              variant="juggle"
            />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[color:var(--wine)]/95 via-[color:var(--wine)]/80 to-[color:var(--wine)]/40" />
          <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-[color:var(--gold)]/60" />
          <JugglingArc aria-hidden className="pointer-events-none absolute right-8 top-8 h-16 w-40 text-[color:var(--gold)]" />
          <StarSpark aria-hidden className="pointer-events-none absolute left-10 top-10 h-4 w-4 text-[color:var(--gold)]" />
          <div className="relative px-8 py-14 md:px-14 md:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
              Leve o circo até você
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-[40px]">
              Quer levar uma atividade circense para sua comunidade?
            </h2>
            <p className="mt-4 max-w-2xl text-[color:var(--cream)]/85 md:text-lg">
              Entre em contato para conhecer possibilidades de oficinas, apresentações, parcerias e ações culturais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[color:var(--gold)] text-[color:var(--navy)] hover:brightness-110">
                <Link to="/contato">Fale conosco</Link>
              </Button>
              <Button asChild variant="outline" className="border-[color:var(--cream)] bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--wine)]">
                <Link to="/quem-somos">Conheça nossa história</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Linha editorial destacada — imagem grande + informações à direita/esquerda. */
function FeatureRow({ p, reverse }: { p: Project; reverse?: boolean }) {
  const accent =
    p.colorKey === "gold" ? "var(--gold)" :
    p.colorKey === "navy" ? "var(--navy)" :
    "var(--wine)";

  // Ornamentos por categoria — cada projeto ganha um repertório visual próprio.
  const cat = p.category.toLowerCase();
  const isFormacao = cat.includes("forma");
  const isCriacao = cat.includes("cria");
  const isCirculacao = cat.includes("circul");

  return (
    <article className={`relative grid items-center gap-14 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      {/* Coluna da imagem com composição gráfica */}
      <div className="relative">
        {/* bloco de cor atrás da imagem */}
        <span
          aria-hidden
          className={`absolute -z-10 h-[90%] w-[85%] rounded-3xl ${reverse ? "-right-6 -top-6" : "-left-6 -top-6"}`}
          style={{ background: accent, opacity: 0.9 }}
        />
        {/* fotografia com recorte assimétrico */}
        <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
          <StagePlaceholder label={p.name} ratio="aspect-[4/3]" className="!rounded-[28px]" />
          <SpotlightBeam aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full text-[color:var(--gold)]" />
        </div>

        {/* Ornamentos temáticos */}
        {isFormacao && (
          <>
            <span aria-hidden className="absolute -top-6 left-4 flex gap-2">
              <span className="h-4 w-4 rounded-full bg-[color:var(--gold)]" />
              <span className="h-4 w-4 rounded-full bg-[color:var(--wine)]" />
              <span className="h-4 w-4 rounded-full bg-[color:var(--navy)]" />
            </span>
            <JugglingArc aria-hidden className={`pointer-events-none absolute -bottom-8 h-16 w-40 text-[color:var(--gold)] ${reverse ? "-left-4" : "-right-4"}`} />
            <PicadeiroArc aria-hidden className={`pointer-events-none absolute -bottom-2 h-8 w-32 text-[color:var(--gold)]/80 ${reverse ? "right-4" : "left-4"}`} />
          </>
        )}
        {isCriacao && (
          <>
            <SilkRibbon aria-hidden className={`pointer-events-none absolute top-0 h-full w-16 text-[color:var(--gold)] ${reverse ? "-right-6" : "-left-6"}`} />
            <span aria-hidden className={`absolute -top-8 h-20 w-20 rounded-full bg-[color:var(--gold)]/60 ${reverse ? "left-6" : "right-6"}`} />
            <StarSpark aria-hidden className={`pointer-events-none absolute -top-4 h-6 w-6 text-[color:var(--wine)] ${reverse ? "right-10" : "left-10"}`} />
          </>
        )}
        {isCirculacao && (
          <>
            <PicadeiroArc aria-hidden className="pointer-events-none absolute -bottom-4 inset-x-0 h-12 w-full text-[color:var(--gold)]" />
            <BuntingRow aria-hidden className="pointer-events-none absolute -top-6 inset-x-0 h-10 w-full text-[color:var(--wine)]" />
            <StarSpark aria-hidden className={`pointer-events-none absolute bottom-4 h-5 w-5 text-[color:var(--gold)] ${reverse ? "left-6" : "right-6"}`} />
          </>
        )}

        {/* Ícone circular do motivo — canto */}
        <span
          aria-hidden
          className={`absolute grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--cream)] shadow-lg ${reverse ? "-bottom-4 -right-4" : "-bottom-4 -left-4"}`}
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
        <RopeCurve aria-hidden className="mt-3 h-3 w-24" style={{ color: accent }} />
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