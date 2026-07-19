import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, Heart, ArrowRight, Users, Sparkles, BookOpen } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";
import { Motif, RopeCurve, StarSpark, CornerOrnament } from "@/components/decor/CircusMotifs";
import { ACTIVITIES, TEAM, TIMELINE, IMPACT } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Arco & Palco" },
      { name: "description", content: "História, trajetória e identidade do Ponto de Cultura Arco & Palco." },
      { property: "og:title", content: "Quem Somos — Arco & Palco" },
      { property: "og:description", content: "História, trajetória e identidade do Ponto de Cultura Arco & Palco." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        eyebrow="Ponto de Cultura"
        title="Um Ponto de Cultura dedicado às artes circenses"
        intro="Formamos pessoas, sustentamos processos criativos e ocupamos territórios com apresentações que aproximam arte, corpo e comunidade."
      />

      {/* HISTÓRIA — texto e imagem lado a lado com ornamento */}
      <section className="container-page py-20" id="historia">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <CornerOrnament aria-hidden className="absolute -left-3 -top-3 h-16 w-16 text-[color:var(--gold)]/70" />
            <StagePlaceholder label="Registro histórico" ratio="aspect-[4/3]" />
            <CornerOrnament aria-hidden className="absolute -bottom-3 -right-3 h-16 w-16 rotate-180 text-[color:var(--gold)]/70" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Nossa história</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              De coletivo de artistas a Ponto de Cultura reconhecido
            </h2>
            <RopeCurve className="mt-4 h-4 w-40 text-[color:var(--gold)]" />
            <p className="mt-5 text-[color:var(--muted-foreground)]">
              Fundado em 2008 por um coletivo de artistas circenses, o Arco &amp; Palco cresceu a partir de residências,
              oficinas comunitárias e apresentações em praças. Em 2016 foi reconhecido como Ponto de Cultura, ampliando
              sua atuação territorial e institucional.
            </p>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Hoje sustenta programas contínuos de formação, criação artística, circulação e preservação da memória
              circense — sempre em diálogo com escolas públicas, coletivos locais e centros culturais.
            </p>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO — inspirada em corda tencionada */}
      <section className="relative bg-[color:var(--beige)] py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Trajetória</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Uma corda esticada no tempo</h2>
          <p className="mt-3 max-w-2xl text-[color:var(--muted-foreground)]">
            Cada nó marca um passo — fundação, sede, reconhecimento, expansão comunitária, publicação, novo ciclo.
          </p>

          <ol className="relative mt-14 space-y-10 md:space-y-14">
            {/* linha vertical decorativa */}
            <span aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--wine)] to-[color:var(--gold)] md:left-1/2" />
            {TIMELINE.map((t, i) => {
              const rightSide = i % 2 === 1;
              return (
                <li key={t.year} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* nó decorativo */}
                  <span
                    aria-hidden
                    className="absolute left-[7px] top-3 grid h-4 w-4 place-items-center rounded-full bg-[color:var(--wine)] shadow ring-4 ring-[color:var(--beige)] md:left-1/2 md:-translate-x-1/2"
                  />
                  <div className={`pl-12 md:pl-0 ${rightSide ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--wine)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--cream)]">
                      <StarSpark className="h-2.5 w-2.5" /> {t.year}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-[color:var(--wine)] md:text-2xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{t.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">O que nos move</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Missão, visão e valores</h2>
          <RopeCurve className="mx-auto mt-4 h-4 w-48 text-[color:var(--gold)]" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Compass, title: "Missão", text: "Promover formação, criação, circulação e preservação da memória em artes circenses, com forte atuação comunitária e territorial." },
            { icon: Eye, title: "Visão", text: "Ser referência em cultura viva pelo rigor artístico, alcance comunitário e formação de novas gerações de artistas circenses." },
            { icon: Heart, title: "Valores", text: "Coletividade, diversidade, escuta ativa, cuidado com corpos e histórias, acesso democrático e amor pela linguagem circense." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[color:var(--wine)] to-[color:var(--gold)]" />
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--wine)] text-[color:var(--cream)] shadow">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-bold text-[color:var(--wine)]">{title}</h3>
              <p className="mt-3 text-[color:var(--muted-foreground)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE FAZEMOS — atividades do Ponto de Cultura */}
      <section className="bg-[color:var(--beige)] py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">O que fazemos</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Atividades permanentes</h2>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Um repertório amplo de práticas que sustentam a formação, a criação e o encontro com a comunidade.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ACTIVITIES.map((a) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--wine)]/10 text-[color:var(--wine)]"
                >
                  <Motif kind={a.motif} className="h-8 w-8" />
                </span>
                <h3 className="font-display text-base font-bold">{a.title}</h3>
                <p className="mt-2 text-xs text-[color:var(--muted-foreground)]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO — números */}
      <section className="bg-[color:var(--navy)] py-20 text-[color:var(--cream)]">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Cultura que transforma
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Números de uma trajetória viva</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {IMPACT.map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-[color:var(--cream)]/15 bg-[color:var(--navy)]/40 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-bold text-[color:var(--gold)] md:text-5xl">{k.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[color:var(--cream)]/80">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTIDADE — três eixos ilustrados */}
      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Identidade</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              O circo como linguagem contemporânea
            </h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              Compreendemos o circo como linguagem viva — que atravessa dança, teatro e expressão corporal, e sustenta
              processos de formação humana, artística e comunitária.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Users, title: "Comunidade", text: "Ações abertas em praças, escolas e territórios de baixa oferta cultural." },
                { icon: Sparkles, title: "Criação artística", text: "Núcleos de pesquisa em técnicas aéreas, acrobacia, palhaçaria e dramaturgia." },
                { icon: BookOpen, title: "Formação e memória", text: "Trilhas pedagógicas contínuas e preservação da tradição circense local." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--beige)] text-[color:var(--wine)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display font-bold text-[color:var(--wine)]">{title}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <StagePlaceholder label="Detalhe de identidade" ratio="aspect-[4/5]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-4 hidden h-32 w-32 md:block">
              <div className="h-full w-full rounded-full border-2 border-[color:var(--gold)]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe preview */}
      <section className="bg-[color:var(--beige)] py-20">
       <div className="container-page">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Equipe</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Pessoas que sustentam essa casa</h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/quem-somos/equipe">Conhecer toda a equipe <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.slice(0, 4).map((m) => (
            <div key={m.name} className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm">
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[color:var(--wine)] to-[color:var(--gold)]" />
              <StagePlaceholder label={m.name} ratio="aspect-[3/4]" className="rounded-none" />
              <div className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--gold)]">{m.category}</p>
                <h3 className="mt-1 font-display font-bold">{m.name}</h3>
                <p className="text-xs text-[color:var(--muted-foreground)]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
       </div>
      </section>

      {/* Chamada transparência */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--wine)] p-8 text-[color:var(--cream)] shadow-lg md:p-12">
          <CornerOrnament aria-hidden className="pointer-events-none absolute -right-2 -top-2 h-32 w-32 text-[color:var(--gold)]/40" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Acesso à informação</p>
              <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                Consulte nossos documentos, prestações de contas e certificados
              </h2>
            </div>
            <Button
              asChild
              className="bg-[color:var(--cream)] text-[color:var(--wine)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
            >
              <Link to="/quem-somos/transparencia">Acessar o acervo público</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}