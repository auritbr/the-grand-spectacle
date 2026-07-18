
# Site institucional — Ponto de Cultura (Artes Circenses)

Construir um site institucional completo, sofisticado e responsivo, com identidade inspirada no circo (cortinas, picadeiro, luzes cênicas, tecidos aéreos) — sem estética infantil ou comercial. Todo o conteúdo será fictício e facilmente editável.

## Identidade visual

- Paleta: vinho `#9E1628`, vermelho profundo `#B6122D`, dourado `#D7A52A`, amarelo suave `#F2C94C`, azul-marinho `#14213D`, branco quente `#FFFDF8`, bege `#F6F1E8`, grafite `#252525`. Tokens semânticos no `src/styles.css` (oklch), com variantes para header transparente/sólido e superfícies vinho/marinho/claras.
- Tipografia: títulos **Manrope**, corpo **Inter** — carregadas via `<link>` no `__root.tsx`.
- Motivos discretos: arcos de picadeiro, linhas curvas SVG, detalhes dourados sutis. Sem brilhos exagerados.

## Estrutura de rotas (TanStack Router)

```
/                              Início
/quem-somos                    Quem Somos (história + identidade)
/quem-somos/equipe             Equipe
/quem-somos/transparencia      Transparência
/projetos                      Lista de projetos
/projetos/projeto-1            Projeto individual
/projetos/projeto-2
/projetos/projeto-3
/noticias                      Listagem + busca/tags/paginação (?page, ?tag, ?q)
/noticias/$slug                Notícia individual
/galeria                       Galeria com abas de ano
/contato                       Contato + formulário
/politica-de-privacidade
/politica-de-cookies
/termos-de-uso
```

`__root.tsx` renderiza Header + `<Outlet/>` + Footer + botões flutuantes (Cookies, Acessibilidade à esquerda; WhatsApp, VLibras à direita) + banner de cookies.

## Componentes globais (`src/components/`)

- `layout/Header.tsx` — logo, menu com dropdown (Quem Somos, Projetos), CTA. Transparente no hero do `/`, sólido nas demais.
- `layout/Footer.tsx` — 5 colunas, faixa curva superior SVG, logos parceiros.
- `layout/PageHero.tsx` — hero interno reutilizável com breadcrumb.
- `layout/Breadcrumbs.tsx`
- `floating/CookiesButton.tsx` + `CookiesBanner.tsx` (localStorage: aceitar/recusar/personalizar).
- `floating/AccessibilityPanel.tsx` — fonte +/-, alto contraste, escala de cinza, destacar links, espaçamento, modo leitura, reset (aplica classes em `<html>` e persiste).
- `floating/WhatsAppButton.tsx`, `floating/VLibrasButton.tsx` (carrega script oficial sob demanda).
- Cards: `ProjectCard`, `NewsCard`, `MemberCard`, `DocumentCard`, `EventCard`, `AreaCard`.
- `HeroCarousel.tsx` (cortinas SVG laterais + slides, respeita `prefers-reduced-motion`).
- `Lightbox.tsx` (galeria e notícias — teclado, gestos, contador).
- `Pagination.tsx`, `TagChips.tsx`, `YearTabs.tsx`, `SearchInput.tsx`, `ShareButtons.tsx`.
- `SkipToContent.tsx`.

## Dados (mock, editáveis em `src/data/`)

`projects.ts`, `news.ts`, `team.ts`, `documents.ts`, `gallery.ts` (fotos agrupadas por ano), `events.ts`, `impact.ts`. Cada arquivo com comentário `// Conteúdo editável`.

## Página inicial

Hero carrossel com cortinas SVG (3 slides) → Apresentação institucional → Áreas de atuação (grid de cards com ícones lineares) → Projetos em destaque (3) → Cultura que transforma (indicadores, fundo marinho) → Próximas atividades (cards estilo bilhete institucional) → Notícias recentes (3) → Prévia galeria (1+4) → Chamada transparência → CTA final com imagem de fundo.

## Páginas internas

- **Quem Somos**: hero interno, história, linha do tempo, missão/visão/valores, identidade, prévia equipe, faixa transparência.
- **Equipe**: filtro por categoria (abas), grid de `MemberCard`, modal com biografia.
- **Transparência**: filtros (categoria/ano/tipo) + busca + lista de documentos com visualizar/baixar + estado vazio.
- **Projetos**: filtros (categoria/situação/público/ano) + grid de cards.
- **Projeto individual (x3)**: hero, breadcrumb, info rápida, sobre/objetivos/metodologia/atividades/resultados, equipe, parceiros, galeria, notícias relacionadas, CTA. Composição levemente diferente entre os três.
- **Notícias**: card destaque + grid + busca/tags/ordenação + paginação (URL search params).
- **Notícia individual**: conteúdo rico, compartilhamento (WhatsApp/Facebook/LinkedIn/X/copiar), galeria interna com lightbox, relacionadas.
- **Galeria**: abas de ano (rolagem horizontal no mobile), título dinâmico, grid responsivo, lightbox.
- **Contato**: info + mapa (iframe) + formulário validado com Zod (nome, email, telefone, assunto, mensagem, consentimento), estados de loading/sucesso/erro.
- **Políticas e Termos**: páginas textuais.

## Acessibilidade, SEO, performance

- HTML semântico, `SkipToContent`, foco visível, aria-labels, `aria-expanded` nos dropdowns, `aria-current` no menu, modais com trap de foco + Esc.
- Cada rota define `head()` próprio (title, description, og:*, canonical relativo). JSON-LD Organization no `__root`, NewsArticle nas notícias, BreadcrumbList em rotas profundas.
- `sitemap.xml` via server route, `robots.txt` em `public/`.
- Imagens: `loading="lazy"`, `aspect-*`, alt descritivo. Placeholders `data-lov-image-placeholder` para geração posterior.
- Animações discretas com Motion (`motion/react`), respeitando `prefers-reduced-motion`.

## Notas técnicas

- Não gerar imagens agora — usar placeholders (`bg-muted` + SVG decorativo do picadeiro) e um componente `Placeholder` com prompt embutido para geração futura. Isso evita 40+ chamadas de geração e mantém o build rápido; o usuário pediu preparar componentes para substituição posterior.
- Estado global mínimo: contexto de acessibilidade e de cookies (localStorage).
- Sem backend: formulário de contato apenas simula envio (mostra toast) — Cloud pode ser habilitado depois se o usuário pedir persistência/email.

## Ordem de entrega

1. Tokens + fontes + layout global (header/footer/floating/cookies/acessibilidade).
2. Home completa.
3. Quem Somos + Equipe + Transparência.
4. Projetos + 3 subpáginas.
5. Notícias + subpágina.
6. Galeria + Contato + Políticas.
7. SEO (head por rota, sitemap, robots) e revisão final (responsivo, teclado, contraste).
