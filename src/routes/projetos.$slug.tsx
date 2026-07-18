import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/site-data";

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

function ProjectDetail() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: p.name }]}
        eyebrow={p.category}
        title={p.name}
        intro={p.summary}
      />
      <section className="container-page grid gap-10 py-16 md:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          <StagePlaceholder label={p.name} ratio="aspect-[16/9]" />
          <Block title="Sobre o projeto"><p>{p.about}</p></Block>
          <Block title="Objetivos"><List items={p.objectives} /></Block>
          <Block title="Metodologia"><p>{p.methodology}</p></Block>
          <Block title="Atividades"><List items={p.activities} /></Block>
          <Block title="Resultados"><List items={p.results} /></Block>
          <Block title="Equipe envolvida"><List items={p.team} /></Block>
          <Block title="Parceiros"><List items={p.partners} /></Block>
        </div>
        <aside className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm h-fit md:sticky md:top-24">
          <Info label="Público" value={p.audience} />
          <Info label="Faixa etária" value={p.ageRange} />
          <Info label="Período" value={p.period} />
          <Info label="Local" value={p.location} />
          <Info label="Status" value={p.status} />
          <Button asChild className="w-full bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
            <Link to="/contato">Quero apoiar</Link>
          </Button>
        </aside>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-[color:var(--wine)]">{title}</h2>
      <div className="mt-3 text-[color:var(--foreground)]/85 space-y-2">{children}</div>
    </div>
  );
}
function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((it) => <li key={it}>{it}</li>)}
    </ul>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}