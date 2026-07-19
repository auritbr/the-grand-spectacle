import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, FileText, Archive, Download, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
      {/* Trilha discreta */}
      <div className="container-page pt-10">
        <nav aria-label="Trilha" className="text-xs text-[color:var(--muted-foreground)]">
          <Link to="/" className="hover:underline">Início</Link>
          <span aria-hidden> / </span>
          <Link to="/quem-somos" className="hover:underline">Quem Somos</Link>
          <span aria-hidden> / </span>
          <span className="text-[color:var(--foreground)]/70">Acervo institucional</span>
        </nav>
      </div>

      {/* Cabeçalho central */}
      <header className="container-page relative pb-10 pt-14 text-center md:pt-20">
        <span aria-hidden className="pointer-events-none absolute inset-x-0 -top-4 mx-auto h-40 max-w-3xl opacity-40">
          <svg viewBox="0 0 800 160" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0 130 Q 400 -20 800 130" stroke="#94a3b8" strokeWidth="1" fill="none" />
          </svg>
        </span>
        <div className="relative inline-flex items-center gap-2 text-[color:var(--navy)]">
          <Archive className="h-4 w-4" aria-hidden />
          <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">Acervo</span>
        </div>
        <h1 className="relative mt-5 font-display text-4xl font-bold text-[color:var(--navy)] md:text-5xl lg:text-[54px] lg:leading-[1.05]">
          Acervo institucional
        </h1>
        <p className="relative mx-auto mt-5 max-w-[850px] text-[color:var(--muted-foreground)] md:text-lg">
          Acesse documentos, certificados, reconhecimentos, portfólios e registros institucionais, organizados por
          categoria para facilitar a consulta pública.
        </p>
      </header>

      {/* Acordeões */}
      <section className="container-page pb-24">
        <div className="mx-auto w-full max-w-5xl space-y-5">
          {GROUP_ORDER.map((g) => {
            const docs = grouped.get(g) ?? [];
            const open = openGroups.has(g);
            return (
              <div
                key={g}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(g)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-8 md:py-8"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-100 text-[color:var(--navy)]">
                    <Archive className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-[color:var(--navy)] md:text-xl">
                      {g}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      ({docs.length} {docs.length === 1 ? "documento" : "documentos"})
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
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
      </section>
    </main>
  );
}