import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, Heart, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";
import { TEAM, TIMELINE } from "@/lib/site-data";

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
        title="Uma trajetória construída no encontro entre arte e comunidade"
        intro="Formamos artistas, ampliamos o acesso à cultura e ocupamos territórios com apresentações que aproximam pessoas."
      />

      <section className="container-page py-20" id="historia">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <StagePlaceholder label="Registro histórico" ratio="aspect-[4/3]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Nossa história</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">De coletivo a Ponto de Cultura reconhecido</h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              Fundado em 2008 por um coletivo de artistas circenses, o Arco &amp; Palco cresceu a partir de residências, formações e apresentações comunitárias. Em 2016 recebeu o reconhecimento estadual como Ponto de Cultura, ampliando sua atuação territorial.
            </p>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Hoje mantém programas contínuos de formação, criação artística e circulação, com forte diálogo com escolas públicas, praças e centros culturais.
            </p>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="bg-[color:var(--beige)] py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Trajetória</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Linha do tempo</h2>
          <ol className="relative mt-10 space-y-8 border-l-2 border-[color:var(--gold)]/60 pl-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[34px] top-1 grid h-6 w-6 place-items-center rounded-full bg-[color:var(--wine)] text-[10px] font-bold text-[color:var(--cream)]">
                  •
                </span>
                <p className="font-display text-lg font-bold text-[color:var(--wine)]">{t.year} · {t.title}</p>
                <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Missão, visão, valores */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Compass, title: "Missão", text: "Promover formação, criação e circulação em artes circenses, com forte atuação comunitária." },
            { icon: Eye, title: "Visão", text: "Ser referência em cultura viva, com atuação territorial ampla e obras autorais reconhecidas." },
            { icon: Heart, title: "Valores", text: "Coletividade, diversidade, escuta, rigor artístico e acesso democrático à cultura." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[color:var(--wine)] text-[color:var(--cream)]">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Identidade */}
      <section className="bg-[color:var(--navy)] py-20 text-[color:var(--cream)]">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Nossa identidade</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">O circo como linguagem contemporânea</h2>
            <p className="mt-4 text-[color:var(--cream)]/85">
              Compreendemos o circo como uma linguagem plural que atravessa a dança, a expressão corporal e as artes cênicas. Nosso trabalho valoriza o desenvolvimento humano, o fortalecimento da cultura local e o acesso democrático à arte.
            </p>
          </div>
          <StagePlaceholder label="Detalhe de identidade" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* Equipe preview */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Equipe</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Pessoas que fazem essa casa</h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/quem-somos/equipe">Conheça nossa equipe <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.slice(0, 4).map((m) => (
            <div key={m.name} className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)]">
              <StagePlaceholder label={m.name} ratio="aspect-[3/4]" className="rounded-none" />
              <div className="p-4">
                <h3 className="font-display font-semibold">{m.name}</h3>
                <p className="text-xs text-[color:var(--muted-foreground)]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada transparência */}
      <section className="container-page pb-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[color:var(--wine)] p-8 text-[color:var(--cream)] md:flex-row">
          <p className="max-w-xl font-display text-xl">Acesse nossos documentos, prestações de contas e certificados.</p>
          <Button asChild className="bg-[color:var(--cream)] text-[color:var(--wine)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]">
            <Link to="/quem-somos/transparencia">Acesse nossos documentos</Link>
          </Button>
        </div>
      </section>
    </>
  );
}