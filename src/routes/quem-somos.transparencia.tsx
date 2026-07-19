import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, FileText, Archive, Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { CornerOrnament, RopeCurve, StarSpark, PicadeiroArc } from "@/components/decor/CircusMotifs";
import { Button } from "@/components/ui/button";
import { DOCS, type Doc } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Acervo institucional — Arco & Palco" },
      { name: "description", content: "Documentos institucionais, prestações de contas e certificados públicos." },
      { property: "og:title", content: "Acervo institucional — Arco & Palco" },
      { property: "og:description", content: "Acesso à informação do Ponto de Cultura Arco & Palco." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

// Agrupamento em cinco categorias amplas para a interface pública.
type GroupKey =
  | "Documentos oficiais e institucionais"
  | "Portfólios e prestação de contas"
  | "Relatórios de atividades"
  | "Certificados e reconhecimentos"
  | "Editais, parcerias e convênios";

const GROUP_ORDER: GroupKey[] = [
  "Documentos oficiais e institucionais",
  "Portfólios e prestação de contas",
  "Relatórios de atividades",
  "Certificados e reconhecimentos",
  "Editais, parcerias e convênios",
];

function groupOf(cat: Doc["category"]): GroupKey {
  switch (cat) {
    case "Documentos oficiais e institucionais":
    case "Atas e registros administrativos":
    case "Políticas internas":
      return "Documentos oficiais e institucionais";
    case "Portfólios e registros":
    case "Prestação de contas":
      return "Portfólios e prestação de contas";
    case "Relatórios de atividades":
    case "Relatórios financeiros":
      return "Relatórios de atividades";
    case "Certificados e reconhecimentos":
      return "Certificados e reconhecimentos";
    case "Editais e parcerias":
    case "Outros documentos":
    default:
      return "Editais, parcerias e convênios";
  }
}

function Transparencia() {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const grouped = useMemo(() => {
    const map = new Map<GroupKey, Doc[]>();
    for (const g of GROUP_ORDER) map.set(g, []);
    for (const d of DOCS) map.get(groupOf(d.category))!.push(d);
    return map;
  }, []);

  const toggleGroup = (g: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(g)) next.delete(g);
      else next.add(g);
      return next;
    });

  return (
    <main className="min-h-screen bg-[#F6F8FB]">
      {/* HERO institucional */}
      <header className="relative min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
        <div className="absolute inset-0">
          <StagePlaceholder
            label="Documentos e gestão institucional"
            ratio="aspect-auto h-full w-full"
            className="!aspect-auto h-full w-full rounded-none"
            variant="arc"
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/90 via-[color:var(--navy)]/70 to-[color:var(--navy)]/40" />
        <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-[color:var(--gold)]/60" />
        <StarSpark aria-hidden className="pointer-events-none absolute right-10 top-24 h-4 w-4 text-[color:var(--gold)]" />
        <CornerOrnament aria-hidden className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-[color:var(--gold)]/60" />
        <div className="container-page relative flex min-h-[300px] flex-col justify-end pb-10 pt-28 md:min-h-[380px] md:pb-14 md:pt-32 lg:min-h-[440px]">
          <nav aria-label="Trilha" className="text-xs text-[color:var(--cream)]/75">
            <Link to="/" className="hover:underline">Início</Link>
            <span aria-hidden> / </span>
            <Link to="/quem-somos" className="hover:underline">Quem Somos</Link>
            <span aria-hidden> / </span>
            <span className="text-[color:var(--gold)]">Transparência</span>
          </nav>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
            Acesso à informação
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-[color:var(--cream)] md:text-5xl">
            Transparência
          </h1>
          <p className="mt-3 max-w-2xl text-[color:var(--cream)]/85 md:text-lg">
            Informações, documentos e registros que fortalecem o compromisso do Ponto de Cultura com a gestão responsável
            e o acesso público.
          </p>
        </div>
      </header>

      {/* Cabeçalho da seção Acervo — compacto */}
      <header className="container-page pt-14 pb-10 text-center md:pt-16 md:pb-12">
        <div className="inline-flex items-center gap-1.5 text-[color:var(--navy)]">
          <Archive className="h-[18px] w-[18px]" aria-hidden />
          <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">Acervo</span>
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[color:var(--navy)] md:text-[40px]">
          Acervo institucional
        </h2>
        <RopeCurve aria-hidden className="mx-auto mt-3 h-3 w-20 text-[color:var(--gold)]" />
        <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.55] text-[color:var(--muted-foreground)] md:text-[18px]">
          Acesse documentos, certificados, reconhecimentos, portfólios e registros institucionais, organizados por
          categoria para facilitar a consulta pública.
        </p>
      </header>

      {/* Acordeões */}
      <section className="container-page pb-20">
        <div className="mx-auto w-full max-w-5xl space-y-4">
          {GROUP_ORDER.map((g) => {
            const docs = grouped.get(g) ?? [];
            const open = openGroups.has(g);
            return (
              <div
                key={g}
                className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(g)}
                  aria-expanded={open}
                  className="flex min-h-[86px] w-full items-center gap-4 px-6 py-4 text-left md:px-8"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-[color:var(--navy)]">
                    <Archive className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[17px] font-bold text-[color:var(--navy)] md:text-[19px]">
                      {g}
                    </span>
                    <span className="mt-1 block text-[14px] text-slate-500">
                      ({docs.length} {docs.length === 1 ? "documento" : "documentos"})
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {open && (
                  <div className="border-t border-slate-100">
                    {docs.length === 0 ? (
                      <p className="px-6 py-6 text-sm text-slate-500 md:px-8">
                        Nenhum documento publicado nesta categoria no momento.
                      </p>
                    ) : (
                      <ul className="divide-y divide-slate-100">
                        {docs.map((d) => (
                          <li
                            key={d.id}
                            className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8"
                          >
                            <div className="flex min-w-0 items-start gap-4">
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-50 text-[color:var(--navy)]">
                                <FileText className="h-4.5 w-4.5" aria-hidden />
                              </span>
                              <div className="min-w-0">
                                <p className="truncate font-semibold text-[color:var(--navy)]">{d.title}</p>
                                <p className="mt-0.5 text-xs text-slate-500">
                                  Arquivo {d.type} · {d.size} · {d.year}
                                </p>
                              </div>
                            </div>
                            <div className="flex shrink-0 gap-2 md:justify-end">
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-200 px-4 text-xs font-semibold text-[color:var(--navy)] hover:bg-slate-50"
                              >
                                <Eye className="h-3.5 w-3.5" aria-hidden /> Visualizar
                              </a>
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[color:var(--navy)] px-4 text-xs font-semibold text-white hover:brightness-110"
                              >
                                <Download className="h-3.5 w-3.5" aria-hidden /> Baixar documento
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA FINAL */}
        <div className="mx-auto mt-16 w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-[color:var(--navy)] p-8 text-[color:var(--cream)] shadow-lg md:p-12">
            <svg aria-hidden viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
              <path d="M-40 260 Q 400 -60 840 260" stroke="#E8B84A" strokeWidth="1.2" fill="none" />
              <circle cx="400" cy="220" r="180" fill="none" stroke="#E8B84A" strokeWidth="1" opacity="0.5" />
              <circle cx="400" cy="220" r="120" fill="none" stroke="#E8B84A" strokeWidth="0.7" opacity="0.35" />
            </svg>
            <StarSpark aria-hidden className="pointer-events-none absolute right-8 top-6 h-5 w-5 text-[color:var(--gold)]" />
            <StarSpark aria-hidden className="pointer-events-none absolute left-10 bottom-8 h-3 w-3 text-[color:var(--gold)]/80" />
            <FileText aria-hidden className="pointer-events-none absolute right-14 bottom-10 h-8 w-8 text-[color:var(--gold)]/40" />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                  Ainda com dúvidas?
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  Não encontrou a informação que procurava?
                </h3>
                <p className="mt-3 text-[color:var(--cream)]/85">
                  Entre em contato com nossa equipe para solicitar orientações ou informações complementares sobre os
                  documentos institucionais.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-[color:var(--gold)] text-[color:var(--navy)] hover:brightness-110">
                  <Link to="/contato">Fale conosco <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-[color:var(--cream)]/40 bg-transparent text-[color:var(--cream)] hover:bg-[color:var(--cream)]/10 hover:text-[color:var(--cream)]">
                  <Link to="/quem-somos">Conheça o Ponto de Cultura</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}