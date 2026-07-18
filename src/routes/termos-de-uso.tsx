import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Arco & Palco" },
      { name: "description", content: "Termos e condições de uso do site institucional." },
      { property: "og:title", content: "Termos de Uso — Arco & Palco" },
      { property: "og:description", content: "Termos e condições de uso do site institucional." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} title="Termos de Uso" />
      <article className="container-page prose prose-neutral mx-auto max-w-3xl py-16">
        <p>Ao navegar por este site, você concorda com os termos e condições descritos nesta página.</p>
        <h2>Conteúdo</h2>
        <p>Todos os conteúdos publicados são de propriedade do Ponto de Cultura Arco &amp; Palco.</p>
      </article>
    </>
  ),
});
