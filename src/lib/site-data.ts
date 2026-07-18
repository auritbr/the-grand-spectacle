// Conteúdo editável — dados fictícios do Ponto de Cultura

export const SITE = {
  name: "Ponto de Cultura Arco & Palco",
  shortName: "Arco & Palco",
  tagline: "Artes circenses como caminho de formação, comunidade e cultura viva.",
  description:
    "Ponto de Cultura dedicado à formação artística, apresentações e ações comunitárias por meio das artes circenses.",
  address: "Rua das Artes, 240 — Centro Cultural, São Paulo/SP",
  phone: "+55 (11) 4002-8922",
  whatsapp: "5511940028922",
  email: "contato@arcoepalco.org.br",
  hours: "Segunda a sexta, 9h às 18h",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const AREAS = [
  { title: "Acrobacia", desc: "Preparo corporal, consciência e virtuosismo em piso e aparelhos.", icon: "acrobat" },
  { title: "Tecidos aéreos", desc: "Suspensão, sequências e criação cênica em altura.", icon: "silks" },
  { title: "Malabarismo", desc: "Ritmo, coordenação e composição com objetos.", icon: "juggle" },
  { title: "Palhaçaria", desc: "A arte do encontro, do gesto e do riso poético.", icon: "clown" },
  { title: "Equilíbrio", desc: "Rola-bola, arame e o corpo como eixo de escuta.", icon: "balance" },
  { title: "Expressão corporal", desc: "Dança, presença cênica e linguagem do movimento.", icon: "dance" },
  { title: "Formação cultural", desc: "Oficinas, laboratórios e trilhas de aprendizagem.", icon: "book" },
  { title: "Apresentações comunitárias", desc: "Circulação em praças, escolas e territórios.", icon: "community" },
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  audience: string;
  ageRange: string;
  period: string;
  location: string;
  status: "Ativo" | "Contínuo" | "Concluído";
  highlight: boolean;
  about: string;
  objectives: string[];
  methodology: string;
  activities: string[];
  results: string[];
  team: string[];
  partners: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "projeto-1",
    name: "Picadeiro Comunitário",
    category: "Formação",
    summary:
      "Programa de iniciação em artes circenses para crianças e adolescentes de bairros periféricos.",
    audience: "Crianças e adolescentes",
    ageRange: "7 a 15 anos",
    period: "Março a dezembro",
    location: "Sede e escolas parceiras",
    status: "Ativo",
    highlight: true,
    about:
      "O Picadeiro Comunitário nasceu para ampliar o acesso às artes do circo em regiões com pouca oferta cultural. Une preparação corporal, criação coletiva e apresentações abertas ao público.",
    objectives: [
      "Democratizar o acesso à formação em artes circenses.",
      "Fortalecer vínculos comunitários por meio da arte.",
      "Estimular protagonismo cultural entre crianças e jovens.",
    ],
    methodology:
      "Encontros semanais estruturados em aquecimento, técnica, criação e roda de escuta, com mostras trimestrais abertas às famílias.",
    activities: [
      "Oficinas de acrobacia de solo",
      "Iniciação em tecidos aéreos",
      "Laboratório de palhaçaria",
      "Mostras culturais trimestrais",
    ],
    results: [
      "180 crianças atendidas em 2025",
      "Quatro mostras culturais abertas",
      "Parceria com seis escolas públicas",
    ],
    team: ["Ana Ribeiro", "Marco Andrade", "Júlia Nunes"],
    partners: ["Secretaria de Cultura", "Instituto Trilha", "Escola Aurora"],
  },
  {
    slug: "projeto-2",
    name: "Companhia Aérea",
    category: "Criação artística",
    summary:
      "Núcleo de pesquisa e criação em técnicas aéreas, com espetáculos itinerantes em espaços culturais.",
    audience: "Artistas em formação continuada",
    ageRange: "A partir de 16 anos",
    period: "Contínuo",
    location: "Sede",
    status: "Contínuo",
    highlight: true,
    about:
      "A Companhia Aérea reúne artistas em processo de pesquisa em tecidos, lira, trapézio e trapézio-dança. Investiga dramaturgias do corpo suspenso e leva os resultados a festivais e temporadas curtas.",
    objectives: [
      "Aprofundar pesquisa cênica em técnicas aéreas.",
      "Circular obras autorais em festivais e centros culturais.",
      "Formar artistas para o mercado profissional.",
    ],
    methodology:
      "Residência semanal com preparação técnica, laboratório de improvisação e mentorias de dramaturgia. Ciclos criativos culminam em estreias e circulação.",
    activities: [
      "Residência de criação",
      "Mentorias de dramaturgia",
      "Temporada anual",
      "Circulação em festivais",
    ],
    results: [
      "Dois espetáculos autorais em circulação",
      "Presença em quatro festivais nacionais",
      "20 artistas em residência ativa",
    ],
    team: ["Rafael Meireles", "Sofia Prado", "Bea Camargo"],
    partners: ["Centro Cultural Ondas", "Festival Convergência"],
  },
  {
    slug: "projeto-3",
    name: "Circo na Praça",
    category: "Circulação",
    summary:
      "Programa de apresentações gratuitas em praças e territórios comunitários, com oficinas abertas.",
    audience: "Público geral",
    ageRange: "Todas as idades",
    period: "Junho a novembro",
    location: "Praças e territórios da cidade",
    status: "Ativo",
    highlight: true,
    about:
      "Circo na Praça ocupa espaços públicos com apresentações e oficinas abertas. Cria encontros entre artistas e comunidade em locais onde a cultura raramente chega.",
    objectives: [
      "Ocupar praças e espaços públicos com arte.",
      "Provocar encontros entre artistas e comunidade.",
      "Divulgar a linguagem circense em novos territórios.",
    ],
    methodology:
      "Mapeamento de territórios, articulação com lideranças locais e montagem de estrutura leve para apresentações ao ar livre, seguidas de oficinas abertas.",
    activities: [
      "Apresentações em praças",
      "Oficinas abertas ao público",
      "Rodas de conversa com artistas",
    ],
    results: [
      "42 apresentações em 2025",
      "Mais de 8 mil espectadores",
      "Presença em 12 bairros",
    ],
    team: ["Ana Ribeiro", "Diego Farah", "Camila Rocha"],
    partners: ["Prefeitura Municipal", "Coletivo Terreiro"],
  },
  {
    slug: "projeto-4",
    name: "Escola Preparatória",
    category: "Formação",
    summary: "Curso livre anual de iniciação para adolescentes e jovens adultos.",
    audience: "Jovens",
    ageRange: "14 a 22 anos",
    period: "Fevereiro a novembro",
    location: "Sede",
    status: "Ativo",
    highlight: false,
    about: "Trilha estruturada de formação técnica e cênica.",
    objectives: ["Preparar jovens para trajetória artística."],
    methodology: "Aulas regulares e mostras semestrais.",
    activities: ["Aulas técnicas", "Mostras internas"],
    results: ["60 jovens formados em 2024"],
    team: ["Sofia Prado"],
    partners: ["Instituto Trilha"],
  },
  {
    slug: "projeto-5",
    name: "Memória do Circo",
    category: "Pesquisa",
    summary: "Projeto de registro e memória sobre a tradição circense local.",
    audience: "Pesquisadores e público geral",
    ageRange: "Todas as idades",
    period: "2023 — 2024",
    location: "Arquivo e sede",
    status: "Concluído",
    highlight: false,
    about: "Coleta de depoimentos, fotos e materiais de arquivo.",
    objectives: ["Preservar memória circense local."],
    methodology: "Entrevistas, digitalização e publicação.",
    activities: ["Entrevistas", "Publicação de livro"],
    results: ["Livro publicado", "Acervo digital aberto"],
    team: ["Bea Camargo"],
    partners: ["Universidade Aberta"],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  category: "Coordenação" | "Direção" | "Produção" | "Educadores" | "Artistas" | "Equipe técnica" | "Colaboradores";
  bio: string;
  fullBio: string;
};

export const TEAM: TeamMember[] = [
  { name: "Ana Ribeiro", role: "Coordenação geral", category: "Coordenação", bio: "Gestora cultural com atuação em projetos comunitários há mais de 15 anos.", fullBio: "Ana coordena o Ponto de Cultura desde 2018. Atua na articulação de políticas culturais e formação de coletivos artísticos." },
  { name: "Marco Andrade", role: "Direção artística", category: "Direção", bio: "Diretor cênico e pesquisador em linguagens circenses.", fullBio: "Marco é responsável pela direção artística dos espetáculos da casa e coordena laboratórios de criação." },
  { name: "Júlia Nunes", role: "Produção executiva", category: "Produção", bio: "Produtora com experiência em festivais e temporadas.", fullBio: "Júlia articula produção, cronogramas e parcerias institucionais." },
  { name: "Rafael Meireles", role: "Educador — Acrobacia", category: "Educadores", bio: "Acrobata e pedagogo do movimento.", fullBio: "Formado em Educação Física e artes circenses, atua há dez anos como preparador corporal." },
  { name: "Sofia Prado", role: "Educadora — Tecidos aéreos", category: "Educadores", bio: "Artista aérea e criadora cênica.", fullBio: "Sofia dirige processos criativos em técnicas aéreas e ministra formações continuadas." },
  { name: "Bea Camargo", role: "Artista residente", category: "Artistas", bio: "Palhaça e pesquisadora da comicidade.", fullBio: "Bea integra o núcleo de criação e assina espetáculos autorais em circulação." },
  { name: "Diego Farah", role: "Iluminação e cenografia", category: "Equipe técnica", bio: "Iluminador cênico e cenotécnico.", fullBio: "Responsável pelo desenho de luz das produções e pela adequação técnica dos espaços." },
  { name: "Camila Rocha", role: "Comunicação", category: "Colaboradores", bio: "Comunicadora cultural.", fullBio: "Camila coordena comunicação, redes e relações com imprensa." },
];

export type NewsPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  readingTime: string;
  tag: string;
  content: { type: "p" | "h2" | "quote" | "ul"; text?: string; items?: string[] }[];
};

const NEWS_TAGS = [
  "Evento", "Ação Social", "Oficina", "Projeto", "Formação",
  "Apresentação", "Cultura", "Comunidade", "Parceria", "Institucional",
] as const;

export const NEWS: NewsPost[] = Array.from({ length: 12 }).map((_, i) => {
  const tag = NEWS_TAGS[i % NEWS_TAGS.length];
  const y = 2026 - Math.floor(i / 6);
  const m = ((i * 3) % 12) + 1;
  const d = ((i * 5) % 27) + 1;
  const date = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  return {
    slug: `noticia-${i + 1}-${tag.toLowerCase().replace(/\s/g, "-")}`,
    title: [
      "Mostra cultural reúne famílias em apresentação aberta",
      "Oficina de tecidos aéreos abre novas vagas",
      "Circo na Praça leva apresentações a quatro bairros",
      "Companhia Aérea estreia novo espetáculo",
      "Parceria fortalece formação em escolas públicas",
      "Ponto de Cultura recebe reconhecimento estadual",
      "Encontro de palhaçaria movimenta a semana",
      "Espetáculo comunitário lota praça central",
      "Novo ciclo de residências abre inscrições",
      "Publicação registra memória circense local",
      "Formação de educadores encerra com apresentação",
      "Casa aberta apresenta processos criativos ao público",
    ][i],
    subtitle: "Registros de uma programação plural, formativa e aberta à comunidade.",
    excerpt:
      "Uma tarde de encontros, apresentações e conversas entre artistas, estudantes e famílias — ampliando os caminhos das artes circenses no território.",
    date,
    author: ["Camila Rocha", "Ana Ribeiro", "Marco Andrade"][i % 3],
    readingTime: `${3 + (i % 5)} min de leitura`,
    tag,
    content: [
      { type: "p", text: "A programação reuniu artistas, educadores e comunidade em um encontro que aproximou linguagens circenses de novos públicos." },
      { type: "h2", text: "Um encontro entre linguagens" },
      { type: "p", text: "Ao longo do dia, oficinas abertas revelaram os processos que dão sustentação aos espetáculos apresentados no fim da tarde." },
      { type: "ul", items: ["Oficina de acrobacia", "Roda de palhaçaria", "Apresentação de tecidos aéreos"] },
      { type: "quote", text: "O circo é um espaço em que arte, técnica e comunidade se encontram no mesmo picadeiro." },
      { type: "p", text: "As atividades seguem no calendário do Ponto de Cultura, com programação atualizada mensalmente." },
    ],
  };
});

export type Doc = {
  id: string;
  title: string;
  category: "Institucionais" | "Financeiro" | "Editais" | "Parcerias" | "Políticas" | "Certificados";
  type: "PDF" | "DOC" | "XLS";
  year: number;
  size: string;
};

export const DOCS: Doc[] = [
  { id: "d1", title: "Estatuto Social", category: "Institucionais", type: "PDF", year: 2023, size: "412 KB" },
  { id: "d2", title: "Ata da Assembleia Geral 2025", category: "Institucionais", type: "PDF", year: 2025, size: "220 KB" },
  { id: "d3", title: "Relatório de Atividades 2025", category: "Institucionais", type: "PDF", year: 2025, size: "3,2 MB" },
  { id: "d4", title: "Relatório Financeiro 2025", category: "Financeiro", type: "PDF", year: 2025, size: "1,8 MB" },
  { id: "d5", title: "Prestação de Contas 2024", category: "Financeiro", type: "PDF", year: 2024, size: "2,4 MB" },
  { id: "d6", title: "Edital de Seleção — Educadores", category: "Editais", type: "PDF", year: 2026, size: "180 KB" },
  { id: "d7", title: "Termo de Parceria — Secretaria de Cultura", category: "Parcerias", type: "PDF", year: 2024, size: "540 KB" },
  { id: "d8", title: "Política de Privacidade", category: "Políticas", type: "PDF", year: 2025, size: "96 KB" },
  { id: "d9", title: "Certificado — Ponto de Cultura", category: "Certificados", type: "PDF", year: 2022, size: "310 KB" },
  { id: "d10", title: "Planejamento Anual 2026", category: "Institucionais", type: "PDF", year: 2026, size: "1,1 MB" },
];

export const EVENTS = [
  { date: "2026-04-12", time: "19h30", title: "Mostra de Tecidos Aéreos", category: "Apresentação", location: "Sede — Sala Palco" },
  { date: "2026-04-20", time: "10h00", title: "Oficina Aberta de Palhaçaria", category: "Oficina", location: "Sede — Sala Picadeiro" },
  { date: "2026-05-03", time: "17h00", title: "Circo na Praça — Vila Aurora", category: "Circulação", location: "Praça da Vila Aurora" },
  { date: "2026-05-15", time: "20h00", title: "Estreia — Suspensa", category: "Espetáculo", location: "Centro Cultural Ondas" },
];

export const IMPACT = [
  { label: "Anos de atuação", value: "18" },
  { label: "Participantes atendidos", value: "12 500" },
  { label: "Oficinas realizadas", value: "640" },
  { label: "Apresentações culturais", value: "320" },
  { label: "Comunidades alcançadas", value: "42" },
];

export const TIMELINE = [
  { year: "2008", title: "Fundação", text: "Nasce como coletivo de artistas em busca de espaço para pesquisa e formação circense." },
  { year: "2012", title: "Sede própria", text: "Ocupação do galpão que se tornaria referência para apresentações e oficinas." },
  { year: "2016", title: "Reconhecimento como Ponto de Cultura", text: "Certificação estadual amplia atuação territorial." },
  { year: "2020", title: "Programas comunitários", text: "Início do Circo na Praça e das residências itinerantes." },
  { year: "2024", title: "Publicação de memória", text: "Livro de registro da tradição circense local." },
  { year: "2026", title: "Novo ciclo formativo", text: "Ampliação da escola preparatória e da companhia residente." },
];

export const GALLERY_YEARS = [2026, 2025, 2024, 2023, 2022];
export const GALLERY: Record<number, { alt: string; caption: string }[]> = {
  2026: [
    { alt: "Artista em tecido aéreo", caption: "Ensaio da Companhia Aérea" },
    { alt: "Roda de palhaçaria", caption: "Oficina aberta de palhaçaria" },
    { alt: "Público em apresentação", caption: "Mostra cultural na praça" },
    { alt: "Malabarista em performance", caption: "Malabarismo cênico" },
    { alt: "Educadora com estudantes", caption: "Formação continuada" },
    { alt: "Bastidor de espetáculo", caption: "Bastidores da estreia" },
    { alt: "Detalhe de figurino", caption: "Detalhe de figurino" },
    { alt: "Palco com iluminação cênica", caption: "Palco iluminado" },
  ],
  2025: Array.from({ length: 8 }).map((_, i) => ({ alt: `Registro 2025 ${i + 1}`, caption: `Registro cultural ${i + 1}` })),
  2024: Array.from({ length: 6 }).map((_, i) => ({ alt: `Registro 2024 ${i + 1}`, caption: `Registro cultural ${i + 1}` })),
  2023: Array.from({ length: 6 }).map((_, i) => ({ alt: `Registro 2023 ${i + 1}`, caption: `Registro cultural ${i + 1}` })),
  2022: Array.from({ length: 4 }).map((_, i) => ({ alt: `Registro 2022 ${i + 1}`, caption: `Registro cultural ${i + 1}` })),
};

export const NEWS_TAG_LIST = NEWS_TAGS;