import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, FileText, Image as ImageIcon, Newspaper, Sparkles, Users } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NewsCard } from "@/components/cards/NewsCard";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif, JugglingArc, SilkRibbon, PicadeiroArc, StarSpark, RopeCurve, CornerOrnament, RingHoop, SpotlightBeam, BuntingRow } from "@/components/decor/CircusMotifs";
import { Button } from "@/components/ui/button";
import { IMPACT, NEWS, PROJECTS } from "@/lib/site-data";

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

/* =========================================================
   Página inicial — guia de navegação do Ponto de Cultura
   ========================================================= */

const NAV_CARDS: {
  title: string;
  desc: string;
  to: "/projetos" | "/quem-somos" | "/quem-somos/equipe" | "/noticias" | "/galeria" | "/quem-somos/transparencia" | "/contato";
  bg: string;
  ink: string;
  accent: string;
  motif: string;
  Icon: typeof Users;
}[] = [
  { title: "Oficinas e Formação", desc: "Trilhas formativas para diferentes idades e experiências.", to: "/quem-somos", bg: "#1E3A5F", ink: "#F8F5EE", accent: "#E8B84A", motif: "silk", Icon: Users },
  { title: "Projetos", desc: "Iniciativas contínuas de formação, criação e circulação.", to: "/projetos", bg: "#5C1A1B", ink: "#F8F5EE", accent: "#E8B84A", motif: "juggle", Icon: Sparkles },
  { title: "Apresentações", desc: "Espetáculos e mostras abertas ao público.", to: "/noticias", bg: "#E8B84A", ink: "#1B1E2C", accent: "#5C1A1B", motif: "spotlight", Icon: CalendarDays },
  { title: "Notícias", desc: "O que tem acontecido no Ponto de Cultura.", to: "/noticias", bg: "#B15C1E", ink: "#FBF6EC", accent: "#1E3A5F", motif: "star", Icon: Newspaper },
  { title: "Galeria de Fotos", desc: "Registros das oficinas, ensaios e apresentações.", to: "/galeria", bg: "#3D7AB3", ink: "#F8F5EE", accent: "#E8B84A", motif: "ring", Icon: ImageIcon },
  { title: "Transparência", desc: "Documentos, prestações de contas e reconhecimentos.", to: "/quem-somos/transparencia", bg: "#1B1E2C", ink: "#F8F5EE", accent: "#E8B84A", motif: "arc", Icon: FileText },
];

const LANGUAGES = [
  { title: "Malabarismo", motif: "juggle", color: "#1E3A5F", ink: "#F8F5EE" },
  { title: "Acrobacia", motif: "star", color: "#5C1A1B", ink: "#F8F5EE" },
  { title: "Tecidos Aéreos", motif: "silk", color: "#B15C1E", ink: "#FBF6EC" },
  { title: "Equilíbrio", motif: "ring", color: "#E8B84A", ink: "#1B1E2C" },
  { title: "Palhaçaria", motif: "spotlight", color: "#3D7AB3", ink: "#F8F5EE" },
  { title: "Expressão Corporal", motif: "rope", color: "#1B1E2C", ink: "#F8F5EE" },
];

function Home() {
  const highlighted = PROJECTS.filter((p) => p.highlight).slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  return (
    <main>
      <HeroCarousel />

      {/* ===== 2. Breve apresentação ===== */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] py-16 md:py-20">
        <StarSpark aria-hidden className="pointer-events-none absolute left-8 top-16 h-4 w-4 text-[color:var(--gold)]" />
        <RopeCurve aria-hidden className="pointer-events-none absolute right-6 bottom-8 h-6 w-40 text-[color:var(--wine)]/40" />
        <div className="container-page grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Quem Somos</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Um Ponto de Cultura que transforma aprendizagem em criação
            </h2>
            <RopeCurve aria-hidden className="mt-4 h-3 w-24 text-[color:var(--gold)]" />
            <p className="mt-5 text-[color:var(--muted-foreground)] md:text-lg">
              Dedicamos nossa atuação à formação artística, à circulação e à preservação das artes circenses. Reunimos
              crianças, jovens, adultos e educadores em torno do circo como linguagem cultural, educativa e comunitária.
            </p>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Acreditamos no acesso democrático à cultura — no picadeiro, na oficina, na praça e na sede.
            </p>
            <Button asChild className="mt-6 h-11 bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
              <Link to="/quem-somos">Conheça nossa história <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="relative">
            <span aria-hidden className="absolute -left-6 -top-6 h-[80%] w-[80%] rounded-[28px] bg-[color:var(--wine)]/90" />
            <span aria-hidden className="absolute -right-4 bottom-6 h-16 w-16 rounded-full bg-[color:var(--gold)]/70" />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <StagePlaceholder label="Oficina do Ponto de Cultura" ratio="aspect-[4/5]" variant="silk" />
            </div>
            <CornerOrnament aria-hidden className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 text-[color:var(--gold)]" />
            <JugglingArc aria-hidden className="pointer-events-none absolute -bottom-6 -left-4 h-14 w-40 text-[color:var(--gold)]" />
          </div>
        </div>
      </section>

      {/* ===== 3. O que acontece por aqui ===== */}
      <section className="relative bg-[color:var(--beige)] py-16 md:py-20">
        <BuntingRow aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto h-8 w-2/3 text-[color:var(--wine)]/40" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Navegue pelo site</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              O que acontece por aqui
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24 text-[color:var(--gold)]" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_CARDS.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group relative overflow-hidden rounded-3xl p-6 shadow-md transition-transform hover:-translate-y-1"
                style={{ backgroundColor: c.bg, color: c.ink, minHeight: 240 }}
              >
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ backgroundColor: c.accent, color: c.bg }}
                    >
                      <c.Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <Motif kind={c.motif} className="h-14 w-14 opacity-70" style={{ color: c.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm opacity-90">{c.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest transition-all group-hover:gap-2" style={{ color: c.accent }}>
                      Acessar <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
                <StarSpark aria-hidden className="pointer-events-none absolute right-6 bottom-6 h-3 w-3 opacity-60" style={{ color: c.accent }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Projetos em destaque ===== */}
      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Projetos</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
            Projetos que colocam a arte em movimento
          </h2>
          <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24 text-[color:var(--gold)]" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlighted.map((p) => {
            const color =
              p.colorKey === "gold" ? { bg: "#E8B84A", ink: "#1B1E2C", accent: "#5C1A1B" } :
              p.colorKey === "navy" ? { bg: "#1E3A5F", ink: "#F8F5EE", accent: "#E8B84A" } :
              { bg: "#5C1A1B", ink: "#F8F5EE", accent: "#E8B84A" };
            return (
              <article key={p.slug} className="group relative flex flex-col overflow-hidden rounded-3xl shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: color.bg, color: color.ink }}>
                <div className="relative">
                  <StagePlaceholder label={p.name} ratio="aspect-[4/3]" className="!rounded-none" />
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream)]/95 shadow"
                    style={{ color: color.bg }}
                  >
                    <Motif kind={p.motif ?? "star"} className="h-7 w-7" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: color.accent }}>{p.category}</span>
                  <h3 className="mt-2 font-display text-xl font-bold leading-tight">{p.name}</h3>
                  <RopeCurve aria-hidden className="mt-3 h-3 w-16" style={{ color: color.accent }} />
                  <p className="mt-3 text-sm opacity-90">{p.summary}</p>
                  <Link
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold transition-all group-hover:gap-2"
                    style={{ color: color.accent }}
                  >
                    Conheça o projeto <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="h-11 border-[color:var(--navy)] text-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-[color:var(--cream)]">
            <Link to="/projetos">Ver todos os projetos <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ===== 5. Linguagens circenses ===== */}
      <section className="relative overflow-hidden bg-[color:var(--beige)] py-16 md:py-20">
        <JugglingArc aria-hidden className="pointer-events-none absolute right-8 top-10 h-14 w-40 text-[color:var(--gold)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Repertório</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Circo se aprende fazendo
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24 text-[color:var(--gold)]" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {LANGUAGES.map((l) => (
              <div
                key={l.title}
                className="flex flex-col items-center rounded-2xl p-5 text-center shadow-sm"
                style={{ backgroundColor: l.color, color: l.ink, minHeight: 170 }}
              >
                <Motif kind={l.motif} className="h-14 w-14 opacity-90" />
                <p className="mt-3 font-display text-sm font-bold uppercase tracking-wider">{l.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Indicadores em aros ===== */}
      <section className="relative overflow-hidden bg-[color:var(--navy)] py-20 text-[color:var(--cream)]">
        <SpotlightBeam aria-hidden className="pointer-events-none absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 text-[color:var(--gold)]" />
        <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-[color:var(--gold)]" />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Cultura que transforma</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Cada número é um encontro
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-5">
            {IMPACT.map((i) => (
              <div key={i.label} className="flex flex-col items-center text-center">
                <div className="relative grid h-32 w-32 place-items-center">
                  <svg aria-hidden viewBox="0 0 140 140" className="absolute inset-0 h-full w-full">
                    <line x1="70" y1="0" x2="70" y2="18" stroke="#E8B84A" strokeWidth="1.5" />
                    <circle cx="70" cy="76" r="56" fill="none" stroke="#E8B84A" strokeWidth="2" />
                    <circle cx="70" cy="76" r="42" fill="none" stroke="#E8B84A" strokeWidth="0.8" opacity="0.5" />
                  </svg>
                  <span className="relative font-display text-3xl font-bold">{i.value}</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--cream)]/80">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Notícias ===== */}
      <section className="bg-[color:var(--cream)] py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Notícias</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
                O que tem acontecido por aqui
              </h2>
            </div>
            <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--wine)] hover:gap-2">
              Ver todas as notícias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestNews.map((n) => (
              <NewsCard key={n.slug} n={n} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. Memórias / Galeria ===== */}
      <section className="relative overflow-hidden bg-[#FBF6EC] py-16 md:py-20">
        <StarSpark aria-hidden className="pointer-events-none absolute left-10 top-16 h-5 w-5 text-[color:var(--gold)]" />
        <StarSpark aria-hidden className="pointer-events-none absolute right-16 top-28 h-3 w-3 text-[color:var(--wine)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">Memória</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Memórias do picadeiro
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24 text-[color:var(--gold)]" />
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4 md:grid-rows-2">
            <div className="relative md:col-span-2 md:row-span-2">
              <StagePlaceholder label="Registro principal — Mostra cultural" className="!rounded-2xl h-full w-full" ratio="aspect-[4/3] md:aspect-auto" />
              <span className="absolute bottom-4 left-4 rounded-full bg-[color:var(--cream)]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--wine)]">Março · 2026</span>
            </div>
            {[
              { label: "Oficina de tecidos", date: "Fev · 2026" },
              { label: "Circo na praça", date: "Nov · 2025" },
              { label: "Formação de educadores", date: "Ago · 2025" },
              { label: "Semana da cultura", date: "Out · 2024" },
            ].map((r) => (
              <div key={r.label} className="relative">
                <StagePlaceholder label={r.label} ratio="aspect-square" />
                <span className="absolute bottom-2 left-2 rounded-full bg-[color:var(--cream)]/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[color:var(--navy)]">{r.date}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="h-11 border-[color:var(--wine)] text-[color:var(--wine)] hover:bg-[color:var(--wine)] hover:text-[color:var(--cream)]">
              <Link to="/galeria">Ver Galeria de Fotos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== 9. CTA final ===== */}
      <section className="container-page py-14">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--wine)] text-[color:var(--cream)] shadow-xl">
          <div className="absolute inset-0 opacity-40">
            <StagePlaceholder label="Comunidade no picadeiro" ratio="aspect-auto h-full w-full" className="!aspect-auto h-full w-full rounded-none" variant="spot" />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[color:var(--wine)]/95 via-[color:var(--wine)]/80 to-[color:var(--wine)]/40" />
          <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-[color:var(--gold)]/60" />
          <SilkRibbon aria-hidden className="pointer-events-none absolute -left-4 top-0 h-full w-16 text-[color:var(--gold)]/50" />
          <JugglingArc aria-hidden className="pointer-events-none absolute right-8 top-6 h-12 w-32 text-[color:var(--gold)]" />
          <StarSpark aria-hidden className="pointer-events-none absolute left-12 top-10 h-3 w-3 text-[color:var(--gold)]" />
          <div className="relative px-8 py-12 md:px-14 md:py-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Faça parte</p>
            <h2 className="mt-3 max-w-[680px] font-display text-3xl font-bold leading-tight md:text-[36px]">
              Entre no picadeiro com a gente
            </h2>
            <p className="mt-3 max-w-[680px] text-[color:var(--cream)]/90 md:text-[18px]">
              Conheça as atividades, acompanhe nossos projetos ou converse com a equipe do Ponto de Cultura.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-11 bg-[color:var(--gold)] text-[color:var(--navy)] hover:brightness-110">
                <Link to="/projetos">Conheça nossos projetos</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 border-[color:var(--cream)] bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--wine)]">
                <Link to="/contato">Entre em contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
