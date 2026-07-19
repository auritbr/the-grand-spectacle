import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";
import { Motif, RopeCurve, StarSpark, CornerOrnament, JugglingArc, SilkRibbon, RingHoop, PicadeiroArc, BuntingRow, SpotlightBeam } from "@/components/decor/CircusMotifs";
import { ACTIVITIES, TIMELINE, IMPACT } from "@/lib/site-data";

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
        title="Quem Somos"
        intro="Um Ponto de Cultura dedicado à formação, à criação e à difusão das artes circenses."
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">Quem somos</p>
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

      {/* MISSÃO / VISÃO / VALORES — painéis ilustrados */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--wine)]">O que nos move</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Missão, visão e valores</h2>
          <RopeCurve className="mx-auto mt-4 h-4 w-48 text-[color:var(--gold)]" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PillarCard variant="missao" />
          <PillarCard variant="visao" />
          <PillarCard variant="valores" />
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((a, i) => (
              <ActivityCard key={a.title} title={a.title} desc={a.desc} motif={a.motif} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CULTURA QUE TRANSFORMA — picadeiro visto de cima com indicadores */}
      <section className="relative overflow-hidden bg-[color:var(--navy)] py-24 text-[color:var(--cream)]">
        {/* fundo cenográfico */}
        <svg aria-hidden viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
          <defs>
            <radialGradient id="picadeiro" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#E8B84A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#E8B84A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="720" cy="420" r="360" fill="url(#picadeiro)" />
          <circle cx="720" cy="420" r="300" fill="none" stroke="#E8B84A" strokeWidth="1.2" opacity="0.55" />
          <circle cx="720" cy="420" r="230" fill="none" stroke="#E8B84A" strokeWidth="0.8" opacity="0.35" />
          <circle cx="720" cy="420" r="160" fill="none" stroke="#E8B84A" strokeWidth="0.6" opacity="0.25" />
          <path d="M0 700 Q 720 300 1440 700" stroke="#E8B84A" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>

        <div className="container-page relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
                Cultura que transforma
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                Cada número é um encontro entre corpos, praças e histórias
              </h2>
              <p className="mt-5 max-w-lg text-[color:var(--cream)]/80">
                Somamos quase duas décadas em ação: turmas que se formaram, praças ocupadas, apresentações que
                emocionaram e comunidades que reconheceram o Ponto de Cultura como um espaço próprio.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-[color:var(--gold)] text-[color:var(--navy)] hover:brightness-110">
                  <Link to="/projetos">Conheça os projetos</Link>
                </Button>
                <Button asChild variant="outline" className="border-[color:var(--cream)] bg-[color:var(--cream)] text-[color:var(--navy)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]">
                  <Link to="/projetos">Conheça nossos projetos</Link>
                </Button>
              </div>
            </div>

            {/* Indicadores em aros suspensos */}
            <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-3">
              {IMPACT.map((k, i) => (
                <ImpactRing key={k.label} value={k.value} label={k.label} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMÓRIAS DO PICADEIRO */}
      <section className="relative overflow-hidden bg-[#FBF6EC] py-24">
        <StarSpark aria-hidden className="pointer-events-none absolute left-10 top-16 h-6 w-6 text-[color:var(--gold)]" />
        <StarSpark aria-hidden className="pointer-events-none absolute right-16 top-28 h-4 w-4 text-[color:var(--wine)]" />
        <BuntingRow aria-hidden className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-10 w-[70%] text-[color:var(--wine)]/40" />

        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--wine)]">
              Memória e trajetória
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--wine)] md:text-4xl">
              Memórias do picadeiro
            </h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              Cada oficina, ensaio e apresentação deixa registros que formam a história coletiva do Ponto de Cultura —
              bastidores, encontros comunitários, figurinos, cenários e vidas atravessadas pelo circo.
            </p>
          </div>

          {/* Composição editorial de "álbum" */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-6 md:grid-rows-2">
            <MemoryFrame className="md:col-span-3 md:row-span-2" label="Bastidores da apresentação" date="Novembro · 2025" tape="left" ratio="aspect-[4/5]" />
            <MemoryFrame className="md:col-span-3" label="Formação da turma" date="Março · 2024" tape="right" ratio="aspect-[16/9]" />
            <MemoryFrame className="md:col-span-2" label="Encontro com a comunidade" date="2023" tape="top" ratio="aspect-square" />
            <MemoryFrame className="md:col-span-1 hidden md:block" label="Figurinos" date="" tape="left" ratio="aspect-square" />
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:brightness-110">
              <Link to="/galeria">Veja nossa galeria de fotos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL — encerra Quem Somos */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--navy)] text-[color:var(--cream)] shadow-xl">
          <div className="absolute inset-0">
            <StagePlaceholder
              label="Comunidade no picadeiro"
              ratio="aspect-auto h-full w-full"
              className="!aspect-auto h-full w-full rounded-none"
              variant="spot"
            />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/95 via-[color:var(--navy)]/75 to-[color:var(--navy)]/30" />
          <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-[color:var(--gold)]/50" />
          <SilkRibbon aria-hidden className="pointer-events-none absolute -left-4 top-0 h-full w-20 text-[color:var(--wine)]/70" />
          <SilkRibbon aria-hidden className="pointer-events-none absolute -right-4 top-0 h-full w-20 text-[color:var(--wine)]/70" />
          <JugglingArc aria-hidden className="pointer-events-none absolute right-10 top-10 h-16 w-32 text-[color:var(--gold)]" />
          <StarSpark aria-hidden className="pointer-events-none absolute left-12 top-16 h-4 w-4 text-[color:var(--gold)]" />
          <StarSpark aria-hidden className="pointer-events-none absolute right-20 bottom-24 h-3 w-3 text-[color:var(--gold)]/80" />
          <div className="relative px-8 py-16 md:px-14 md:py-20 lg:px-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
              Um convite ao picadeiro
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-[42px]">
              O circo ganha vida quando a comunidade entra no picadeiro.
            </h2>
            <p className="mt-4 max-w-2xl text-[color:var(--cream)]/85 md:text-lg">
              Conheça as ações, oficinas e apresentações que transformam o aprendizado artístico em experiências de
              convivência, expressão e pertencimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[color:var(--gold)] text-[color:var(--navy)] hover:brightness-110">
                <Link to="/projetos">Conheça nossos projetos</Link>
              </Button>
              <Button asChild variant="outline" className="border-[color:var(--cream)] bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--navy)]">
                <Link to="/contato">Fale com a gente</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------- Sub-componentes locais ---------- */

function PillarCard({ variant }: { variant: "missao" | "visao" | "valores" }) {
  const cfg = {
    missao: {
      bg: "#5C1A1B",
      ink: "#F8F5EE",
      accent: "#E8B84A",
      label: "MISSÃO",
      text: "Promover formação, criação, circulação e preservação da memória em artes circenses, com forte atuação comunitária e territorial.",
    },
    visao: {
      bg: "#1E3A5F",
      ink: "#F8F5EE",
      accent: "#E8B84A",
      label: "VISÃO",
      text: "Ser referência em cultura viva pelo rigor artístico, alcance comunitário e formação de novas gerações de artistas circenses.",
    },
    valores: {
      bg: "#C9A24C",
      ink: "#1B1E2C",
      accent: "#5C1A1B",
      label: "VALORES",
      text: "Coletividade, diversidade, escuta ativa, cuidado com corpos e histórias, acesso democrático e amor pela linguagem circense.",
    },
  }[variant];

  return (
    <article
      className="relative flex min-h-[560px] flex-col overflow-hidden rounded-3xl p-8 shadow-lg md:min-h-[640px]"
      style={{ backgroundColor: cfg.bg, color: cfg.ink }}
    >
      {/* Composição gráfica na metade superior (≈45%) */}
      <div className="relative h-[46%] w-full">
        {variant === "missao" && <MissaoArt accent={cfg.accent} />}
        {variant === "visao" && <VisaoArt accent={cfg.accent} />}
        {variant === "valores" && <ValoresArt accent={cfg.accent} />}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <span className="text-[11px] font-bold tracking-[0.3em]" style={{ color: cfg.accent }}>
          {cfg.label}
        </span>
        <h3 className="mt-3 font-display text-3xl font-bold leading-tight">{cfg.label.charAt(0) + cfg.label.slice(1).toLowerCase()}</h3>
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: `${cfg.ink}D9` }}>
          {cfg.text}
        </p>
      </div>
    </article>
  );
}

function MissaoArt({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
      {/* lona / mastros */}
      <path d="M40 220 L200 40 L360 220 Z" fill={accent} opacity="0.18" />
      <path d="M200 40 L200 220" stroke={accent} strokeWidth="1.5" opacity="0.5" />
      <path d="M40 220 L360 220" stroke={accent} strokeWidth="1.5" />
      {/* bandeirinhas subindo */}
      <path d="M60 60 Q 200 20 340 60" stroke={accent} strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 60 + i * 40;
        const y = 60 + Math.sin(i / 2) * 3;
        return <polygon key={i} points={`${x - 6},${y} ${x + 6},${y} ${x},${y + 14}`} fill={accent} opacity={i % 2 ? 0.7 : 0.9} />;
      })}
      {/* estrelas */}
      <circle cx="200" cy="40" r="6" fill={accent} />
      <circle cx="110" cy="150" r="4" fill={accent} opacity="0.7" />
      <circle cx="300" cy="170" r="5" fill={accent} opacity="0.85" />
      {/* escada / crescimento */}
      <path d="M240 210 L280 170 L320 210" stroke={accent} strokeWidth="1.5" fill="none" />
      <PicadeiroArc className="text-[color:transparent]" />
    </svg>
  );
}

function VisaoArt({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
      {/* olho abstrato */}
      <path d="M40 130 Q 200 20 360 130 Q 200 240 40 130 Z" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="200" cy="130" r="52" fill={accent} opacity="0.2" />
      <circle cx="200" cy="130" r="52" fill="none" stroke={accent} strokeWidth="1.5" />
      <circle cx="200" cy="130" r="18" fill={accent} />
      {/* órbitas */}
      <ellipse cx="200" cy="130" rx="120" ry="30" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.55" />
      {/* estrelas orbitando */}
      <circle cx="90" cy="70" r="3" fill={accent} />
      <circle cx="330" cy="200" r="4" fill={accent} />
      <circle cx="340" cy="80" r="3" fill={accent} opacity="0.7" />
      <circle cx="70" cy="200" r="3" fill={accent} opacity="0.7" />
      <SpotlightBeam className="text-[color:transparent]" />
    </svg>
  );
}

function ValoresArt({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
      {/* mãos estilizadas sustentando estrela */}
      <path d="M80 220 Q 130 120 200 130 Q 270 120 320 220" stroke={accent} strokeWidth="2" fill="none" />
      <path d="M100 220 L100 180 M140 220 L140 170 M260 220 L260 170 M300 220 L300 180" stroke={accent} strokeWidth="1.5" />
      {/* estrela central */}
      <path d="M200 40 L212 78 L252 78 L220 100 L232 138 L200 116 L168 138 L180 100 L148 78 L188 78 Z" fill={accent} />
      {/* círculos conectados / coletividade */}
      <circle cx="60" cy="90" r="10" fill={accent} opacity="0.7" />
      <circle cx="120" cy="60" r="8" fill={accent} opacity="0.7" />
      <circle cx="280" cy="60" r="8" fill={accent} opacity="0.7" />
      <circle cx="340" cy="90" r="10" fill={accent} opacity="0.7" />
      <path d="M60 90 Q 200 20 340 90" stroke={accent} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function ActivityCard({
  title, desc, motif, index,
}: { title: string; desc: string; motif: string; index: number }) {
  const palettes = [
    { bg: "#1E3A5F", ink: "#F8F5EE", accent: "#E8B84A" },
    { bg: "#5C1A1B", ink: "#F8F5EE", accent: "#E8B84A" },
    { bg: "#C9A24C", ink: "#1B1E2C", accent: "#5C1A1B" },
    { bg: "#1B3B36", ink: "#F8F5EE", accent: "#E8B84A" },
  ];
  const p = palettes[index % palettes.length];
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-3xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: p.bg, color: p.ink, minHeight: 260 }}
    >
      {/* motivo grande translúcido */}
      <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 opacity-60" style={{ color: p.accent }}>
        {motif === "silk" ? <SilkRibbon className="h-full w-full" /> :
         motif === "juggle" ? <JugglingArc className="h-full w-full" /> :
         motif === "ring" ? <RingHoop className="h-full w-full" /> :
         motif === "arc" ? <PicadeiroArc className="h-full w-full" /> :
         motif === "bunting" ? <BuntingRow className="h-full w-full" /> :
         motif === "spotlight" ? <SpotlightBeam className="h-full w-full" /> :
         <Motif kind={motif} className="h-full w-full" />}
      </div>
      {/* bloco de destaque colorido */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2"
        style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
      />
      <div className="relative mt-auto">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${p.ink}22`, color: p.accent }}
          aria-hidden
        >
          <Motif kind={motif} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold leading-tight">{title}</h3>
        <p className="mt-2 text-sm" style={{ color: `${p.ink}CC` }}>{desc}</p>
      </div>
    </article>
  );
}

function ImpactRing({ value, label, index }: { value: string; label: string; index: number }) {
  // Alterna cores dos aros para variação.
  const colors = ["#E8B84A", "#F8F5EE", "#C9A24C", "#E8B84A", "#F8F5EE"];
  const c = colors[index % colors.length];
  return (
    <div className="relative">
      <div
        className="relative mx-auto grid aspect-square w-full max-w-[180px] place-items-center rounded-full border-2 bg-[color:var(--navy)]/40 backdrop-blur-sm"
        style={{ borderColor: `${c}CC` }}
      >
        <span
          aria-hidden
          className="absolute inset-2 rounded-full border"
          style={{ borderColor: `${c}55` }}
        />
        <div className="text-center">
          <p className="font-display text-3xl font-bold md:text-4xl" style={{ color: c }}>
            {value}
          </p>
          <p className="mt-1 px-2 text-[10px] uppercase tracking-widest text-[color:var(--cream)]/85">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function MemoryFrame({
  label, date, tape, ratio, className = "",
}: { label: string; date: string; tape: "left" | "right" | "top"; ratio: string; className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      {/* Fita adesiva estilizada */}
      <span
        aria-hidden
        className={`absolute z-10 h-6 w-20 -rotate-6 bg-[color:var(--gold)]/70 shadow-sm ${
          tape === "left" ? "-left-2 -top-3" : tape === "right" ? "-right-2 -top-3 rotate-6" : "left-1/2 -top-4 -translate-x-1/2 rotate-3"
        }`}
      />
      <div className="relative rounded-2xl border border-[color:var(--wine)]/15 bg-white p-3 shadow-md">
        <StagePlaceholder label={label} ratio={ratio} className="rounded-xl" />
        <figcaption className="mt-3 flex items-center justify-between px-1">
          <span className="font-display text-sm font-bold text-[color:var(--wine)]">{label}</span>
          {date && <span className="text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)]">{date}</span>}
        </figcaption>
      </div>
    </figure>
  );
}