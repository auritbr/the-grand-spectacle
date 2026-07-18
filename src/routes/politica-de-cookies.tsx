import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Arco & Palco" },
      { name: "description", content: "Como utilizamos cookies neste site." },
      { property: "og:title", content: "Política de Cookies — Arco & Palco" },
      { property: "og:description", content: "Como utilizamos cookies neste site." },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Início", to: "/" }, { label: "Política de Cookies" }]} title="Política de Cookies" />
      <article className="container-page prose prose-neutral mx-auto max-w-3xl py-16">
        <p>Utilizamos cookies estritamente necessários para o funcionamento do site e cookies opcionais para analisar o uso.</p>
        <h2>Gerenciar preferências</h2>
        <p>Você pode ajustar suas preferências a qualquer momento no botão de cookies flutuante.</p>
      </article>
    </>
  ),
});
