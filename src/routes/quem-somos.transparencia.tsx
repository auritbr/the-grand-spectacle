import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentCard } from "@/components/cards/DocumentCard";
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

const GROUPS: Doc["category"][] = ["Institucionais", "Financeiro", "Certificados", "Editais", "Parcerias", "Políticas"];

function Transparencia() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
        eyebrow="Acesso à informação"
        title="Transparência e prestação de contas"
        intro="Documentos institucionais e financeiros para consulta pública."
      />
      <section className="container-page py-16 space-y-12">
        {GROUPS.map((g) => {
          const docs = DOCS.filter((d) => d.category === g);
          if (docs.length === 0) return null;
          return (
            <div key={g}>
              <h2 className="font-display text-2xl font-bold text-[color:var(--wine)]">{g}</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {docs.map((d) => (
                  <DocumentCard key={d.title} d={d} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}