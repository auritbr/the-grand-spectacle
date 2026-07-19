import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CurtainBackdrop } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";

const SLIDES = [
  {
    eyebrow: "Ponto de Cultura",
    title: "Arte circense, formação e comunidade",
    text: "Um espaço onde crianças, jovens e adultos aprendem, criam e compartilham diferentes linguagens do circo.",
    primary: { label: "Conheça o Ponto de Cultura", to: "/quem-somos" as const },
    secondary: { label: "Veja nossos projetos", to: "/projetos" as const },
  },
  {
    eyebrow: "Projetos",
    title: "Experiências que nascem no picadeiro",
    text: "Oficinas, processos criativos e apresentações que aproximam arte, educação e território.",
    primary: { label: "Conheça os projetos", to: "/projetos" as const },
    secondary: { label: "Fale com a equipe", to: "/contato" as const },
  },
  {
    eyebrow: "Memória e circulação",
    title: "Uma história construída em movimento",
    text: "Registros, encontros e apresentações que preservam e fortalecem a cultura circense.",
    primary: { label: "Veja as notícias", to: "/noticias" as const },
    secondary: { label: "Acesse a galeria", to: "/galeria" as const },
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative isolate min-h-[540px] overflow-hidden md:min-h-[610px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Apresentação do Ponto de Cultura"
    >
      <CurtainBackdrop />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" aria-hidden />

      <div className="relative container-page flex min-h-[540px] items-end pb-16 pt-32 md:min-h-[610px] md:items-center">
        <div className="max-w-2xl text-[color:var(--cream)]">
          {SLIDES.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "pointer-events-none absolute opacity-0 translate-y-2"}`}
              aria-hidden={idx !== i}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">{s.eyebrow}</p>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">{s.title}</h1>
              <p className="mt-5 max-w-xl text-base text-[color:var(--cream)]/85 md:text-lg">{s.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
                  <Link to={s.primary.to}>{s.primary.label}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[color:var(--cream)]/40 bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)]/10">
                  <Link to={s.secondary.to}>{s.secondary.label}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-[color:var(--cream)]">
        <button aria-label="Slide anterior" onClick={() => setI((n) => (n - 1 + SLIDES.length) % SLIDES.length)} className="rounded-full border border-white/30 p-2 hover:bg-white/10">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para o slide ${idx + 1}`}
            aria-current={idx === i}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[color:var(--gold)]" : "w-3 bg-white/40"}`}
          />
        ))}
        <button aria-label="Próximo slide" onClick={() => setI((n) => (n + 1) % SLIDES.length)} className="rounded-full border border-white/30 p-2 hover:bg-white/10">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}