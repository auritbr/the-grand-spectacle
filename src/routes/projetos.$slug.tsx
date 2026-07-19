import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Users, Clock, Quote, Sparkles } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Motif, JugglingArc, SilkRibbon, PicadeiroArc, StarSpark, RopeCurve, CornerOrnament, RingHoop, SpotlightBeam, BuntingRow } from "@/components/decor/CircusMotifs";
import { Lightbox } from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Projetos Arco & Palco` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.summary },
          { property: "og:url", content: `/projetos/${params.slug}` },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Projeto — Arco & Palco" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => <NotFound />,
  errorComponent: () => <NotFound />,
});

function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Projeto não encontrado</h1>
      <Button asChild className="mt-6 bg-[color:var(--wine)] text-[color:var(--cream)]">
        <Link to="/projetos">Voltar para projetos</Link>
      </Button>
    </div>
  );
}

/* =========================================================
   Configuração por projeto — identidade visual e linguagens
   ========================================================= */
type Theme = {
  primary: string;   // cor principal (bg do hero)
  accent: string;    // cor de destaque
  ink: string;       // texto sobre primary
  soft: string;      // fundo suave da seção
  variant: "curtain" | "arc" | "spot" | "silk" | "juggle" | "ring";
  languagesTitle: "Expressões artísticas" | "Linguagens circenses";
};

function themeOf(p: Project): Theme {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria"))
    return { primary: "#B15C1E", accent: "#E8B84A", ink: "#FBF6EC", soft: "#FBF3E7", variant: "silk", languagesTitle: "Expressões artísticas" };
  if (cat.includes("circul"))
    return { primary: "#5C1A1B", accent: "#E8B84A", ink: "#F8F5EE", soft: "#F7EEEE", variant: "spot", languagesTitle: "Expressões artísticas" };
  // Formação e demais
  return { primary: "#1E3A5F", accent: "#E8B84A", ink: "#F8F5EE", soft: "#EEF2F8", variant: "juggle", languagesTitle: "Linguagens circenses" };
}

type Language = { title: string; desc: string; motif: string; bg: string; ink: string };

function languagesOf(p: Project): Language[] {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria")) {
    return [
      { title: "Tecidos Aéreos", desc: "Sequências, dramaturgia e criação em altura.", motif: "silk", bg: "#5C1A1B", ink: "#F8F5EE" },
      { title: "Aro e Lira", desc: "Composições circulares em aparelhos suspensos.", motif: "ring", bg: "#B15C1E", ink: "#FBF6EC" },
      { title: "Criação Cênica", desc: "Laboratórios de dramaturgia e composição coletiva.", motif: "bunting", bg: "#E8B84A", ink: "#1B1E2C" },
      { title: "Figurinos e Cenografia", desc: "Materialidades que sustentam a poética cênica.", motif: "star", bg: "#1E3A5F", ink: "#F8F5EE" },
    ];
  }
  if (cat.includes("circul")) {
    return [
      { title: "Apresentações", desc: "Espetáculos abertos em praças e territórios.", motif: "spotlight", bg: "#5C1A1B", ink: "#F8F5EE" },
      { title: "Palhaçaria", desc: "Encontro poético entre público e artista.", motif: "star", bg: "#B15C1E", ink: "#FBF6EC" },
      { title: "Cortejo Circense", desc: "Deslocamentos que ocupam a rua e reúnem comunidades.", motif: "bunting", bg: "#E8B84A", ink: "#1B1E2C" },
      { title: "Roda de Escuta", desc: "Diálogos com moradores após cada apresentação.", motif: "rope", bg: "#1E3A5F", ink: "#F8F5EE" },
    ];
  }
  return [
    { title: "Malabarismo", desc: "Ritmo, coordenação e composição com objetos.", motif: "juggle", bg: "#1E3A5F", ink: "#F8F5EE" },
    { title: "Acrobacia de Solo", desc: "Preparo corporal e virtuosismo em piso.", motif: "star", bg: "#3D7AB3", ink: "#F8F5EE" },
    { title: "Equilíbrio", desc: "Rola-bola, arame e o corpo em eixo.", motif: "ring", bg: "#E8B84A", ink: "#1B1E2C" },
    { title: "Palhaçaria", desc: "A arte do gesto, do riso e do encontro.", motif: "spotlight", bg: "#5C1A1B", ink: "#F8F5EE" },
  ];
}

type PublicGroup = { title: string; age: string; note: string; motif: string; bg: string; ink: string };
function publicsOf(p: Project): PublicGroup[] {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria")) {
    return [
      { title: "Artistas em formação", age: "A partir de 16 anos", note: "Percurso continuado de pesquisa cênica.", motif: "silk", bg: "#5C1A1B", ink: "#F8F5EE" },
      { title: "Educadores", age: "Sem limite de idade", note: "Formação em pedagogia do circo e criação.", motif: "bunting", bg: "#B15C1E", ink: "#FBF6EC" },
      { title: "Colaboradores técnicos", age: "Público adulto", note: "Figurinistas, cenotécnicos e iluminadores.", motif: "star", bg: "#E8B84A", ink: "#1B1E2C" },
    ];
  }
  if (cat.includes("circul")) {
    return [
      { title: "Comunidade local", age: "Todas as idades", note: "Apresentações gratuitas ao ar livre.", motif: "spotlight", bg: "#5C1A1B", ink: "#F8F5EE" },
      { title: "Famílias", age: "Livre para todos", note: "Espetáculos pensados para atravessar gerações.", motif: "star", bg: "#B15C1E", ink: "#FBF6EC" },
      { title: "Escolas e coletivos", age: "Grupos organizados", note: "Ações educativas junto às apresentações.", motif: "bunting", bg: "#1E3A5F", ink: "#F8F5EE" },
    ];
  }
  return [
    { title: "Crianças", age: "7 a 11 anos", note: "Primeiros contatos com o circo e o corpo lúdico.", motif: "ring", bg: "#1E3A5F", ink: "#F8F5EE" },
    { title: "Adolescentes", age: "12 a 17 anos", note: "Desenvolvimento técnico e criação coletiva.", motif: "juggle", bg: "#3D7AB3", ink: "#F8F5EE" },
    { title: "Jovens e adultos", age: "A partir de 18 anos", note: "Aprofundamento e formação continuada.", motif: "star", bg: "#E8B84A", ink: "#1B1E2C" },
    { title: "Educadores", age: "Todas as idades", note: "Trilhas de pedagogia do circo.", motif: "arc", bg: "#5C1A1B", ink: "#F8F5EE" },
  ];
}

type Step = { n: number; title: string; desc: string };
function stepsOf(p: Project): Step[] {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria"))
    return [
      { n: 1, title: "Pesquisa e escuta", desc: "Levantamento de referências e temas para a criação." },
      { n: 2, title: "Laboratórios de linguagem", desc: "Experimentação de aparelhos, corpo e dramaturgia." },
      { n: 3, title: "Composição cênica", desc: "Estruturação dos materiais em espetáculo." },
      { n: 4, title: "Ensaios e estreia", desc: "Preparação técnica, luz, figurino e apresentação pública." },
    ];
  if (cat.includes("circul"))
    return [
      { n: 1, title: "Mapeamento do território", desc: "Escuta com lideranças e agentes culturais locais." },
      { n: 2, title: "Montagem e preparação", desc: "Instalação de estrutura leve e ensaio técnico." },
      { n: 3, title: "Apresentação aberta", desc: "Espetáculo gratuito no espaço público." },
      { n: 4, title: "Oficina e roda", desc: "Vivência prática e conversa com a comunidade." },
    ];
  return [
    { n: 1, title: "Acolhimento", desc: "Boas-vindas, apresentação da turma e do espaço." },
    { n: 2, title: "Experimentação", desc: "Primeiros contatos com as linguagens circenses." },
    { n: 3, title: "Desenvolvimento técnico", desc: "Aprofundamento em técnicas específicas." },
    { n: 4, title: "Criação coletiva", desc: "Composição de números e cenas em grupo." },
    { n: 5, title: "Ensaios", desc: "Preparação para a mostra final." },
    { n: 6, title: "Mostra pública", desc: "Apresentação aberta para famílias e comunidade." },
  ];
}

type Metric = { value: string; label: string };
function metricsOf(p: Project): Metric[] {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria"))
    return [
      { value: "2", label: "espetáculos em circulação" },
      { value: "20", label: "artistas em residência" },
      { value: "4", label: "festivais alcançados" },
      { value: "120", label: "horas de laboratório" },
    ];
  if (cat.includes("circul"))
    return [
      { value: "42", label: "apresentações realizadas" },
      { value: "8k", label: "espectadores alcançados" },
      { value: "12", label: "bairros ocupados" },
      { value: "36", label: "oficinas abertas" },
    ];
  return [
    { value: "180", label: "participantes atendidos" },
    { value: "6", label: "escolas parceiras" },
    { value: "24", label: "oficinas realizadas" },
    { value: "4", label: "mostras culturais" },
  ];
}

type Testimony = { quote: string; author: string; role: string };
function testimonyOf(p: Project): Testimony {
  const cat = p.category.toLowerCase();
  if (cat.includes("cria"))
    return {
      quote: "A residência ampliou o meu jeito de pensar o corpo em cena — cada aparelho passou a contar uma história diferente.",
      author: "Sofia Prado",
      role: "Artista aérea residente",
    };
  if (cat.includes("circul"))
    return {
      quote: "Quando o circo chega na praça, a rua vira picadeiro. As crianças correm, os avós sorriem, e a gente entende para que serve tudo isso.",
      author: "Dona Aurora",
      role: "Moradora da Vila Aurora",
    };
  return {
    quote: "Meu filho descobriu no circo um lugar de pertencimento — hoje ele não vive sem as oficinas.",
    author: "Marcia Souza",
    role: "Mãe de participante",
  };
}

/* =========================================================
   Página do projeto
   ========================================================= */
function ProjectDetail() {
  const p = Route.useLoaderData();
  const t = themeOf(p);
  const languages = languagesOf(p);
  const publics = publicsOf(p);
  const steps = stepsOf(p);
  const metrics = metricsOf(p);
  const testimony = testimonyOf(p);

  // Galeria interna: usa fotos sintéticas para o lightbox.
  const galleryLabels = [
    `${p.name} — bastidores`,
    `${p.name} — oficina`,
    `${p.name} — apresentação`,
    `${p.name} — comunidade`,
    `${p.name} — encontro`,
    `${p.name} — cena`,
  ];
  const galleryImages = galleryLabels.map((l) => ({ alt: l, caption: l }));
  const [lb, setLb] = useState<number | null>(null);

  return (
    <main>
      {/* ============ HERO ============ */}
      <header
        className="relative overflow-hidden"
        style={{ backgroundColor: t.primary, color: t.ink }}
      >
        {/* Ornamentos */}
        <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full" style={{ color: t.accent }} />
        <StarSpark aria-hidden className="pointer-events-none absolute right-16 top-24 h-4 w-4" style={{ color: t.accent }} />
        <StarSpark aria-hidden className="pointer-events-none absolute left-24 top-36 h-3 w-3" style={{ color: t.accent, opacity: 0.7 }} />
        <CornerOrnament aria-hidden className="pointer-events-none absolute right-6 top-6 h-16 w-16" style={{ color: t.accent, opacity: 0.5 }} />

        <div className="container-page relative grid items-center gap-10 pb-16 pt-28 md:min-h-[500px] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:pb-20 md:pt-32">
          {/* Coluna texto */}
          <div>
            <nav aria-label="Trilha" className="text-xs opacity-80">
              <Link to="/" className="hover:underline">Início</Link>
              <span aria-hidden> / </span>
              <Link to="/projetos" className="hover:underline">Projetos</Link>
              <span aria-hidden> / </span>
              <span style={{ color: t.accent }}>{p.name}</span>
            </nav>

            <span
              className="mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ backgroundColor: t.accent, color: t.primary }}
            >
              <StarSpark className="h-2.5 w-2.5" /> {p.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{p.name}</h1>
            <RopeCurve aria-hidden className="mt-4 h-3 w-24" style={{ color: t.accent }} />
            <p className="mt-4 max-w-xl text-[17px] opacity-90 md:text-lg">{p.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm opacity-95">
              <li className="inline-flex items-center gap-1.5"><Sparkles className="h-4 w-4" style={{ color: t.accent }} /> {p.status}</li>
              <li className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" style={{ color: t.accent }} /> {p.ageRange}</li>
              <li className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" style={{ color: t.accent }} /> {p.location}</li>
              <li className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" style={{ color: t.accent }} /> {p.period}</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-11" style={{ backgroundColor: t.accent, color: t.primary }}>
                <Link to="/contato">Quero participar <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Link
                to="/projetos"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-4 text-sm font-semibold hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" /> Voltar para projetos
              </Link>
            </div>
          </div>

          {/* Coluna imagem */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute -left-6 -top-6 h-[85%] w-[85%] rounded-[28px]"
              style={{ backgroundColor: t.accent, opacity: 0.85 }}
            />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <StagePlaceholder label={p.name} ratio="aspect-[4/3]" variant={t.variant} className="!rounded-[28px]" />
            </div>
            <JugglingArc aria-hidden className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-40" style={{ color: t.accent }} />
            <span
              aria-hidden
              className="absolute -bottom-4 -left-4 grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--cream)] shadow-lg"
              style={{ color: t.primary }}
            >
              <Motif kind={p.motif ?? "star"} className="h-9 w-9" />
            </span>
          </div>
        </div>
      </header>

      {/* ============ SOBRE O PROJETO ============ */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] py-20">
        <StarSpark aria-hidden className="pointer-events-none absolute left-10 top-10 h-4 w-4" style={{ color: t.primary }} />
        <div className="container-page grid items-start gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.primary }}>
              Sobre o projeto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Uma experiência que aproxima arte, formação e comunidade
            </h2>
            <RopeCurve aria-hidden className="mt-4 h-3 w-24" style={{ color: t.accent }} />
            <p className="mt-5 text-[color:var(--foreground)]/85 md:text-lg">{p.about}</p>
            <p className="mt-4 text-[color:var(--foreground)]/80">{p.methodology}</p>

            {/* Info rápida compacta */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <QuickInfo label="Periodicidade" value={p.period} accent={t.accent} />
              <QuickInfo label="Público" value={p.audience} accent={t.accent} />
              <QuickInfo label="Local" value={p.location} accent={t.accent} />
              <QuickInfo label="Situação" value={p.status} accent={t.accent} />
            </div>
          </div>

          <div className="relative">
            <span
              aria-hidden
              className="absolute -right-4 -top-4 h-[80%] w-[80%] rounded-[24px]"
              style={{ backgroundColor: t.primary, opacity: 0.15 }}
            />
            <div className="relative overflow-hidden rounded-[24px] shadow-lg">
              <StagePlaceholder label={`${p.name} — oficina`} ratio="aspect-[4/5]" variant={t.variant} />
            </div>
            <SilkRibbon aria-hidden className="pointer-events-none absolute -left-6 top-0 h-full w-16" style={{ color: t.primary }} />
            <BuntingRow aria-hidden className="pointer-events-none absolute -bottom-4 inset-x-0 h-8 w-full" style={{ color: t.accent }} />
            <RingHoop aria-hidden className="pointer-events-none absolute -right-6 bottom-6 h-16 w-16" style={{ color: t.accent }} />
          </div>
        </div>
      </section>

      {/* ============ LINGUAGENS / EXPRESSÕES ============ */}
      <section className="relative py-20" style={{ backgroundColor: t.soft }}>
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.primary }}>
              O que se aprende
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              {t.languagesTitle}
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24" style={{ color: t.accent }} />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((l) => (
              <article
                key={l.title}
                className="relative overflow-hidden rounded-3xl p-6 shadow-md transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: l.bg, color: l.ink, minHeight: 260 }}
              >
                <div className="relative flex h-full flex-col justify-between">
                  <div className="h-24">
                    <Motif kind={l.motif} className="h-full w-full opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{l.title}</h3>
                    <p className="mt-2 text-sm opacity-90">{l.desc}</p>
                  </div>
                </div>
                <StarSpark aria-hidden className="pointer-events-none absolute right-4 top-4 h-3 w-3 opacity-70" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMO O PROJETO ACONTECE ============ */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] py-20">
        <JugglingArc aria-hidden className="pointer-events-none absolute -left-10 top-16 h-20 w-64" style={{ color: t.accent, opacity: 0.4 }} />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.primary }}>
              Passo a passo
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Como o projeto acontece
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24" style={{ color: t.accent }} />
          </div>

          <ol className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {/* linha curva conectora */}
            <svg aria-hidden viewBox="0 0 800 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-8 hidden h-8 w-full md:block">
              <path d="M20 20 Q 200 -10 400 20 T 780 20" stroke={t.accent} strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.7" />
            </svg>
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold shadow"
                  style={{ backgroundColor: t.primary, color: t.ink }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-[color:var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ PARA QUEM É O PROJETO ============ */}
      <section className="relative py-20" style={{ backgroundColor: t.soft }}>
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.primary }}>
              Público
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Para quem é o projeto
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24" style={{ color: t.accent }} />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publics.map((g) => (
              <article
                key={g.title}
                className="relative overflow-hidden rounded-3xl p-6 shadow-md"
                style={{ backgroundColor: g.bg, color: g.ink, minHeight: 240 }}
              >
                <div className="flex items-start justify-between">
                  <Motif kind={g.motif} className="h-16 w-16 opacity-85" />
                  <StarSpark aria-hidden className="h-3 w-3 opacity-70" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{g.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] opacity-80">{g.age}</p>
                <p className="mt-2 text-sm opacity-90">{g.note}</p>
              </article>
            ))}
          </div>

          {/* Notas de acessibilidade */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[color:var(--muted-foreground)]">
            Atividades gratuitas, sem exigência de experiência anterior. Acessibilidade e acolhimento fazem parte do
            processo formativo.
          </p>
        </div>
      </section>

      {/* ============ IMPACTO / RESULTADOS ============ */}
      <section className="relative overflow-hidden py-20 text-[color:var(--cream)]" style={{ backgroundColor: t.primary }}>
        <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full" style={{ color: t.accent }} />
        <SpotlightBeam aria-hidden className="pointer-events-none absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2" style={{ color: t.accent }} />

        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.accent }}>
              Impacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Resultados construídos em movimento
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
            {metrics.map((m, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative grid h-36 w-36 place-items-center">
                  {/* aro suspenso */}
                  <svg aria-hidden viewBox="0 0 140 140" className="absolute inset-0 h-full w-full">
                    <line x1="70" y1="0" x2="70" y2="20" stroke={t.accent} strokeWidth="1.5" />
                    <circle cx="70" cy="78" r="58" fill="none" stroke={t.accent} strokeWidth="2" />
                    <circle cx="70" cy="78" r="44" fill="none" stroke={t.accent} strokeWidth="0.8" opacity="0.5" />
                  </svg>
                  <span className="relative font-display text-4xl font-bold">{m.value}</span>
                </div>
                <p className="mt-3 text-sm uppercase tracking-widest opacity-90">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Lista textual de resultados do JSON do projeto */}
          {p.results?.length > 0 && (
            <ul className="mx-auto mt-12 grid max-w-3xl gap-2 text-center text-sm opacity-90">
              {p.results.map((r: string) => (
                <li key={r} className="inline-flex items-center justify-center gap-2">
                  <StarSpark className="h-3 w-3" style={{ color: t.accent }} /> {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ============ GALERIA DO PROJETO ============ */}
      <section className="bg-[color:var(--cream)] py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: t.primary }}>
              Registros
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--navy)] md:text-4xl">
              Galeria de fotos
            </h2>
            <RopeCurve aria-hidden className="mx-auto mt-4 h-3 w-24" style={{ color: t.accent }} />
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-3 md:grid-cols-4 md:grid-rows-2">
            <button onClick={() => setLb(0)} className="col-span-2 row-span-2 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]">
              <StagePlaceholder label={galleryLabels[0]} ratio="aspect-auto h-full w-full" className="!aspect-auto h-full w-full" variant={t.variant} />
            </button>
            {galleryLabels.slice(1, 5).map((l, i) => (
              <button key={l} onClick={() => setLb(i + 1)} className="overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]">
                <StagePlaceholder label={l} ratio="aspect-square" />
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-[color:var(--navy)] text-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-[color:var(--cream)]">
              <Link to="/galeria">Ver mais registros</Link>
            </Button>
          </div>
        </div>

        <Lightbox images={galleryImages} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      </section>

      {/* ============ DEPOIMENTO ============ */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: t.soft }}>
        <div className="container-page">
          <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-md md:grid-cols-[160px_1fr] md:p-12">
            <div className="relative mx-auto md:mx-0">
              <div className="overflow-hidden rounded-full ring-4" style={{ ["--tw-ring-color" as any]: t.accent }}>
                <StagePlaceholder label={testimony.author} ratio="aspect-square" className="!rounded-full !h-32 !w-32" />
              </div>
              <StarSpark aria-hidden className="pointer-events-none absolute -right-2 -top-2 h-4 w-4" style={{ color: t.accent }} />
            </div>
            <div>
              <Quote className="h-8 w-8" style={{ color: t.primary }} aria-hidden />
              <blockquote className="mt-3 font-display text-xl italic leading-snug text-[color:var(--navy)] md:text-2xl">
                “{testimony.quote}”
              </blockquote>
              <RopeCurve aria-hidden className="mt-4 h-3 w-24" style={{ color: t.accent }} />
              <p className="mt-4 text-sm font-semibold text-[color:var(--navy)]">{testimony.author}</p>
              <p className="text-xs text-[color:var(--muted-foreground)]">{testimony.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="container-page py-14">
        <div
          className="relative overflow-hidden rounded-3xl shadow-xl"
          style={{ backgroundColor: t.primary, color: t.ink }}
        >
          <div className="absolute inset-0 opacity-30">
            <StagePlaceholder label="Comunidade" ratio="aspect-auto h-full w-full" className="!aspect-auto h-full w-full rounded-none" variant={t.variant} />
          </div>
          <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full" style={{ color: t.accent, opacity: 0.6 }} />
          <StarSpark aria-hidden className="pointer-events-none absolute right-10 top-10 h-4 w-4" style={{ color: t.accent }} />
          <SilkRibbon aria-hidden className="pointer-events-none absolute -left-4 top-0 h-full w-16" style={{ color: t.accent, opacity: 0.5 }} />

          <div className="relative px-8 py-12 md:px-14 md:py-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: t.accent }}>
              Fale com o Ponto de Cultura
            </p>
            <h2 className="mt-3 max-w-[680px] font-display text-3xl font-bold leading-tight md:text-[34px]">
              Quer saber mais sobre este projeto?
            </h2>
            <p className="mt-3 max-w-[680px] text-[17px] opacity-90">
              Entre em contato para conhecer as atividades, o calendário e as formas de participação.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-11" style={{ backgroundColor: t.accent, color: t.primary }}>
                <Link to="/contato">Fale conosco</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 border-[color:var(--cream)] bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--navy)]">
                <Link to="/projetos">Conheça outros projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickInfo({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>{label}</p>
      <p className="mt-1 text-sm font-medium text-[color:var(--navy)]">{value}</p>
    </div>
  );
}