import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AreaCard } from "@/components/cards/AreaCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { EventCard } from "@/components/cards/EventCard";
import { StagePlaceholder, ArcDivider } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";
import { AREAS, EVENTS, IMPACT, NEWS, PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arco & Palco — Ponto de Cultura em Artes Circenses" },
      { name: "description", content: "Formação artística, apresentações e ações comunitárias em artes do circo." },
      { property: "og:title", content: "Arco & Palco — Ponto de Cultura" },
      { property: "og:description", content: "Formação artística, apresentações e ações comunitárias em artes do circo." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const highlighted = PROJECTS.filter((p) => p.highlight).slice(0, 3);
  const latestNews = NEWS.slice(0, 3);
  return (
    <>
      <HeroCarousel />

      {/* 7.2 Apresentação */}
      <section className="container-page py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Ponto de Cultura</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Uma casa dedicada à arte, à formação e à comunidade</h2>
            <p className="mt-5 text-[color:var(--muted-foreground)]">
              Somos um Ponto de Cultura dedicado às artes circenses. Nosso trabalho reúne pesquisa artística, formação de novos artistas e ações educativas que atravessam bairros, escolas e territórios da cidade.
            </p>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Acreditamos no circo como linguagem contemporânea — capaz de fortalecer vínculos, ampliar horizontes e afirmar o acesso democrático à cultura.
            </p>
            <Button asChild className="mt-6 bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
              <Link to="/quem-somos">Conheça o Ponto de Cultura</Link>
            </Button>
          </div>
          <StagePlaceholder label="Artistas em apresentação" ratio="aspect-[5/4]" />
        </div>
      </section>

      {/* 7.3 Áreas */}
      <section className="bg-[color:var(--beige)] py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="Nossas áreas"
            title="Linguagens que compõem o picadeiro"
            intro="Diferentes técnicas e olhares que se cruzam no cotidiano da casa."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a) => (
              <AreaCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 Projetos em destaque */}
      <section className="container-page py-20">
        <SectionHead eyebrow="Projetos" title="Programas que fazem cultura acontecer" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlighted.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/projetos">Ver todos os projetos <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* 7.5 Cultura que transforma */}
      <section className="relative bg-[color:var(--navy)] py-20 text-[color:var(--cream)]">
        <ArcDivider className="absolute -top-4 left-0 right-0 h-6 w-full text-[color:var(--gold)]" />
        <div className="container-page">
          <SectionHead
            eyebrow="Cultura que transforma"
            title="Impacto que se mede em pessoas, encontros e presença"
            invert
          />
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {IMPACT.map((i) => (
              <div key={i.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{i.label}</dt>
                <dd className="mt-2 font-display text-4xl font-bold">{i.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7.6 Próximas atividades */}
      <section className="container-page py-20">
        <SectionHead eyebrow="Próximas atividades" title="Agenda cultural" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {EVENTS.map((ev) => (
            <EventCard key={ev.title} ev={ev} />
          ))}
        </div>
      </section>

      {/* 7.7 Notícias */}
      <section className="bg-[color:var(--beige)] py-20">
        <div className="container-page">
          <SectionHead eyebrow="Notícias" title="O que tem acontecido por aqui" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestNews.map((n) => (
              <NewsCard key={n.slug} n={n} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/noticias">Ver todas as notícias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7.8 Galeria prévia */}
      <section className="container-page py-20">
        <SectionHead eyebrow="Galeria" title="Registros de 2026" />
        <div className="mt-10 grid gap-3 md:grid-cols-4 md:grid-rows-2">
          <StagePlaceholder label="Registro principal" className="md:col-span-2 md:row-span-2" ratio="aspect-[4/3] md:aspect-auto" />
          {Array.from({ length: 4 }).map((_, i) => (
            <StagePlaceholder key={i} label={`Registro ${i + 1}`} ratio="aspect-square" />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/galeria">Ver galeria completa</Link>
          </Button>
        </div>
      </section>

      {/* 7.9 Transparência */}
      <section className="container-page pb-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center md:flex-row md:text-left">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[color:var(--beige)] text-[color:var(--wine)]">
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold">Transparência e acesso à informação</h3>
            <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Documentos institucionais, prestações de contas e certificados abertos ao público.</p>
          </div>
          <Button asChild className="bg-[color:var(--navy)] text-[color:var(--cream)] hover:bg-[color:var(--wine)]">
            <Link to="/quem-somos/transparencia">Acessar Transparência</Link>
          </Button>
        </div>
      </section>

      {/* 7.10 Chamada final */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <StagePlaceholder label="Bastidores do palco" ratio="" className="h-full w-full rounded-none" />
          <div className="absolute inset-0 bg-[color:var(--navy)]/80" />
        </div>
        <div className="relative container-page py-24 text-[color:var(--cream)]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Faça parte</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Conheça, participe, apoie e realize com a gente</h2>
            <p className="mt-4 text-[color:var(--cream)]/85">
              Parcerias, apoios institucionais, doações e propostas de circulação são bem-vindos. Fale com a equipe e descubra como colaborar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
                <Link to="/contato">Entre em contato</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-[color:var(--cream)] hover:bg-white/10">
                <Link to="/quem-somos">Conheça o Ponto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title, intro, invert }: { eyebrow: string; title: string; intro?: string; invert?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${invert ? "text-[color:var(--gold)]" : "text-[color:var(--wine)]"}`}>{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {intro && <p className={`mt-3 ${invert ? "text-[color:var(--cream)]/80" : "text-[color:var(--muted-foreground)]"}`}>{intro}</p>}
    </div>
  );
}
