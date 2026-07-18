import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Arco & Palco" },
      { name: "description", content: "Programas de formação, criação e circulação em artes circenses." },
      { property: "og:title", content: "Projetos — Arco & Palco" },
      { property: "og:description", content: "Programas de formação, criação e circulação em artes circenses." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

function Projetos() {
  const [cat, setCat] = useState<string>("Todos");
  const [status, setStatus] = useState<string>("Todos");
  const cats = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const statuses = ["Todos", "Ativo", "Contínuo", "Concluído"];
  const list = useMemo(
    () =>
      PROJECTS.filter((p) => (cat === "Todos" || p.category === cat) && (status === "Todos" || p.status === status)),
    [cat, status],
  );

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        eyebrow="Programas contínuos"
        title="Nossos projetos"
        intro="Iniciativas que fazem a cultura viva acontecer todos os dias."
      />
      <section className="container-page py-16">
        <div className="flex flex-wrap gap-4">
          <Filter label="Categoria" options={cats} value={cat} onChange={setCat} />
          <Filter label="Status" options={statuses} value={status} onChange={setStatus} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function Filter({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-[color:var(--muted-foreground)]">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-sm"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}