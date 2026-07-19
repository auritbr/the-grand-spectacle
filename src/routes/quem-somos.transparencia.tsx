import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, FileText, Search, ShieldCheck, FolderOpen } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { CornerOrnament, StarSpark } from "@/components/decor/CircusMotifs";
import { DOCS, type Doc } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Arco & Palco" },
      { name: "description", content: "Documentos institucionais, prestações de contas e certificados públicos." },
      { property: "og:title", content: "Transparência — Arco & Palco" },
      { property: "og:description", content: "Acesso à informação do Ponto de Cultura Arco & Palco." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

// Ordem intencional dos grupos — do mais institucional ao mais operacional.
const GROUP_ORDER: Doc["category"][] = [
  "Documentos oficiais e institucionais",
  "Atas e registros administrativos",
  "Relatórios de atividades",
  "Relatórios financeiros",
  "Prestação de contas",
  "Editais e parcerias",
  "Certificados e reconhecimentos",
  "Políticas internas",
  "Portfólios e registros",
  "Outros documentos",
];

function Transparencia() {
  const [q, setQ] = useState("");
  const [year, setYear] = useState<string>("Todos");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set([GROUP_ORDER[0]]));

  const years = useMemo(
    () => ["Todos", ...Array.from(new Set(DOCS.map((d) => String(d.year)))).sort((a, b) => Number(b) - Number(a))],
    [],
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return DOCS.filter(
      (d) =>
        (year === "Todos" || String(d.year) === year) &&
        (!query || d.title.toLowerCase().includes(query) || d.category.toLowerCase().includes(query)),
    );
  }, [q, year]);

  const toggleGroup = (g: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(g)) next.delete(g);
      else next.add(g);
      return next;
    });

  const expandAll = () => setOpenGroups(new Set(GROUP_ORDER));
  const collapseAll = () => setOpenGroups(new Set());

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
        eyebrow="Acesso à informação"
        title="Transparência e prestação de contas"
        intro="Acervo público de documentos institucionais, financeiros e administrativos do Ponto de Cultura."
      />

      {/* Compromisso institucional */}
      <section className="container-page pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-sm md:p-12">
          <CornerOrnament className="absolute -right-2 -top-2 h-24 w-24 text-[color:var(--gold)]/60" />
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--wine)] text-[color:var(--cream)]">
              <ShieldCheck className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                Nosso compromisso
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                Documentos abertos, contas claras
              </h2>
              <p className="mt-3 max-w-3xl text-[color:var(--muted-foreground)]">
                Publicamos regularmente os documentos que registram a vida institucional, a aplicação de recursos e as
                parcerias do Ponto de Cultura. Este acervo é atualizado a cada ciclo e permanece disponível para consulta
                pública, imprensa, apoiadores e comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="container-page pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="w-full md:max-w-md">
            <label htmlFor="doc-search" className="text-xs font-semibold uppercase tracking-widest text-[color:var(--wine)]">
              Buscar documento
            </label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
              <input
                id="doc-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ex.: estatuto, relatório 2025..."
                className="h-11 w-full rounded-full border border-[color:var(--border)] bg-[color:var(--card)] pl-10 pr-4 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <label className="flex flex-col text-xs">
              <span className="font-semibold uppercase tracking-widest text-[color:var(--wine)]">Ano</span>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="mt-2 h-11 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 text-sm"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-medium hover:bg-[color:var(--beige)]"
              >
                Expandir tudo
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-medium hover:bg-[color:var(--beige)]"
              >
                Recolher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Acervo em accordions */}
      <section className="container-page py-14 space-y-4">
        {GROUP_ORDER.map((g) => {
          const docs = filtered.filter((d) => d.category === g);
          if (docs.length === 0) return null;
          const open = openGroups.has(g);
          return (
            <div
              key={g}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleGroup(g)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[color:var(--beige)]/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--beige)] text-[color:var(--wine)]">
                  <FolderOpen className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <StarSpark className="h-3 w-3 text-[color:var(--gold)]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                      Categoria
                    </span>
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-[color:var(--wine)]">{g}</span>
                </span>
                <span className="hidden shrink-0 rounded-full bg-[color:var(--beige)] px-3 py-1 text-xs font-semibold text-[color:var(--wine)] sm:inline">
                  {docs.length} {docs.length === 1 ? "arquivo" : "arquivos"}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[color:var(--wine)] transition-transform ${open ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {open && (
                <div className="border-t border-[color:var(--border)] bg-[color:var(--background)] p-5">
                  <div className="grid gap-3 md:grid-cols-2">
                    {docs.map((d) => (
                      <DocumentCard key={d.id} d={d} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)] p-12 text-center">
            <FileText className="mx-auto h-8 w-8 text-[color:var(--muted-foreground)]" aria-hidden />
            <p className="mt-3 font-display text-lg font-semibold">Nenhum documento encontrado</p>
            <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
              Tente ajustar a busca ou selecionar outro ano.
            </p>
          </div>
        )}
      </section>
    </>
  );
}