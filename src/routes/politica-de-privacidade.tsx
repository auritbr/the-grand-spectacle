import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Arco & Palco" },
      { name: "description", content: "Como tratamos seus dados pessoais no site do Ponto de Cultura." },
      { property: "og:title", content: "Política de Privacidade — Arco & Palco" },
      { property: "og:description", content: "Como tratamos seus dados pessoais." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} title="Política de Privacidade" />
      <article className="container-page prose prose-neutral mx-auto max-w-3xl py-16">
        <p>Esta política descreve como coletamos, usamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
        <h2>Dados coletados</h2>
        <p>Coletamos apenas dados necessários para responder contatos e realizar comunicações institucionais.</p>
        <h2>Uso</h2>
        <p>Utilizamos os dados exclusivamente para as finalidades informadas no momento da coleta.</p>
        <h2>Seus direitos</h2>
        <p>Você pode solicitar, a qualquer momento, o acesso, correção ou exclusão de seus dados.</p>
      </article>
    </>
  ),
});
