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

// Atividades do Ponto de Cultura — usadas na página Quem Somos.
export type Activity = {
  title: string;
  desc: string;
  motif: "juggle" | "silk" | "ring" | "star" | "rope" | "arc" | "spotlight" | "bunting";
};
export const ACTIVITIES: Activity[] = [
  { title: "Iniciação Circense", desc: "Primeiros contatos com técnicas, corpo e coletividade.", motif: "arc" },
  { title: "Malabarismo", desc: "Ritmo, coordenação e composição com objetos em movimento.", motif: "juggle" },
  { title: "Acrobacia", desc: "Preparo corporal, força e consciência do gesto.", motif: "star" },
  { title: "Tecidos aéreos", desc: "Sequências, dramaturgia e criação cênica em altura.", motif: "silk" },
  { title: "Equilíbrio", desc: "Rola-bola, arame e a escuta do corpo em eixo.", motif: "ring" },
  { title: "Palhaçaria", desc: "A arte do encontro, do gesto e do riso poético.", motif: "spotlight" },
  { title: "Expressão corporal", desc: "Dança, presença cênica e linguagem do movimento.", motif: "rope" },
  { title: "Criação de espetáculos", desc: "Laboratórios de dramaturgia e composição coletiva.", motif: "bunting" },
  { title: "Apresentações comunitárias", desc: "Circulação em praças, escolas e territórios.", motif: "spotlight" },
  { title: "Formação de educadores", desc: "Encontros de estudo e prática pedagógica em circo.", motif: "arc" },
];

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
  colorKey?: "navy" | "gold" | "wine";
  motif?: "juggle" | "silk" | "ring" | "star" | "rope" | "arc" | "spotlight" | "bunting";
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
    colorKey: "navy",
    motif: "juggle",
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
    colorKey: "gold",
    motif: "silk",
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
    colorKey: "wine",
    motif: "spotlight",
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
  motif?: "juggle" | "silk" | "ring" | "star" | "rope" | "arc" | "spotlight" | "bunting";
  accent?: "wine" | "gold" | "navy";
  bio: string;
  fullBio: string;
};

export const TEAM: TeamMember[] = [
  { name: "Ana Ribeiro", role: "Coordenação geral", category: "Coordenação", motif: "arc", accent: "wine", bio: "Gestora cultural com atuação em projetos comunitários há mais de 15 anos.", fullBio: "Ana coordena o Ponto de Cultura desde 2018. Atua na articulação de políticas culturais e formação de coletivos artísticos." },
  { name: "Marco Andrade", role: "Direção artística", category: "Direção", motif: "spotlight", accent: "navy", bio: "Diretor cênico e pesquisador em linguagens circenses.", fullBio: "Marco é responsável pela direção artística dos espetáculos da casa e coordena laboratórios de criação." },
  { name: "Júlia Nunes", role: "Produção executiva", category: "Produção", motif: "bunting", accent: "gold", bio: "Produtora com experiência em festivais e temporadas.", fullBio: "Júlia articula produção, cronogramas e parcerias institucionais." },
  { name: "Rafael Meireles", role: "Educador — Acrobacia", category: "Educadores", motif: "star", accent: "wine", bio: "Acrobata e pedagogo do movimento.", fullBio: "Formado em Educação Física e artes circenses, atua há dez anos como preparador corporal." },
  { name: "Sofia Prado", role: "Educadora — Tecidos aéreos", category: "Educadores", motif: "silk", accent: "wine", bio: "Artista aérea e criadora cênica.", fullBio: "Sofia dirige processos criativos em técnicas aéreas e ministra formações continuadas." },
  { name: "Bea Camargo", role: "Artista residente — Palhaçaria", category: "Artistas", motif: "spotlight", accent: "wine", bio: "Palhaça e pesquisadora da comicidade.", fullBio: "Bea integra o núcleo de criação e assina espetáculos autorais em circulação." },
  { name: "Diego Farah", role: "Iluminação e cenografia", category: "Equipe técnica", motif: "ring", accent: "navy", bio: "Iluminador cênico e cenotécnico.", fullBio: "Responsável pelo desenho de luz das produções e pela adequação técnica dos espaços." },
  { name: "Camila Rocha", role: "Comunicação", category: "Colaboradores", motif: "rope", accent: "gold", bio: "Comunicadora cultural.", fullBio: "Camila coordena comunicação, redes e relações com imprensa." },
  { name: "Tomás Vieira", role: "Educador — Malabarismo", category: "Educadores", motif: "juggle", accent: "gold", bio: "Malabarista com formação em circo de rua.", fullBio: "Tomás desenvolve trilhas de iniciação em malabarismo e composição rítmica com objetos." },
  { name: "Helena Marques", role: "Educadora — Expressão corporal", category: "Educadores", motif: "rope", accent: "navy", bio: "Bailarina e preparadora corporal.", fullBio: "Helena conduz aulas de dança, presença cênica e preparo do corpo para a linguagem circense." },
  { name: "Ivan Cordeiro", role: "Artista residente — Acrobacia", category: "Artistas", motif: "star", accent: "gold", bio: "Acrobata portor e pesquisador.", fullBio: "Ivan integra criações da Companhia Aérea e assina duetos acrobáticos em circulação regional." },
  { name: "Rosa Pimentel", role: "Figurinos e adereços", category: "Equipe técnica", motif: "bunting", accent: "wine", bio: "Costureira e designer cênica.", fullBio: "Rosa concebe e executa figurinos das produções e coordena a oficina de adereços." },
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

const NEWS_TITLES = [
  "Mostra cultural reúne famílias em apresentação aberta",
  "Oficina de tecidos aéreos abre novas vagas para o semestre",
  "Circo na Praça leva apresentações a quatro bairros",
  "Companhia Aérea estreia novo espetáculo autoral",
  "Parceria fortalece formação em escolas públicas",
  "Ponto de Cultura recebe reconhecimento estadual",
  "Encontro de palhaçaria movimenta a semana formativa",
  "Espetáculo comunitário lota praça central",
  "Novo ciclo de residências abre inscrições",
  "Publicação registra memória circense local",
  "Formação de educadores encerra com apresentação",
  "Casa aberta apresenta processos criativos ao público",
  "Malabarismo cênico ganha nova turma de iniciação",
  "Roda de acrobacia reúne artistas convidados",
  "Ação social leva oficinas a centro de convivência",
  "Semana da Cultura ocupa a sede com programação plural",
  "Vivência de expressão corporal aproxima escolas",
  "Estreia de espetáculo marca abertura da temporada",
  "Encontro com mestres do circo tradicional emociona plateia",
  "Projeto de figurinos abre chamada para colaboradores",
  "Ensaio aberto convida comunidade a acompanhar criação",
  "Curso livre de circo social entra em nova edição",
  "Ação em escola pública encerra ciclo formativo",
  "Festival de circo comunitário anuncia programação",
  "Coletivo aéreo compartilha processos em residência",
  "Publicação sobre pedagogia circense chega à sede",
  "Oficina de equilíbrio recebe grupo intergeracional",
  "Ponto de Cultura celebra doze anos de trajetória",
  "Mostra final integra turmas de formação inicial",
  "Circulação regional leva apresentações a três cidades",
  "Novo laboratório investiga corpo e dramaturgia",
  "Cadastro de artistas parceiros abre em fevereiro",
  "Comunidade se reúne em roda de conversa sobre acesso",
];

export const NEWS: NewsPost[] = NEWS_TITLES.map((title, i) => {
  const tag = NEWS_TAGS[i % NEWS_TAGS.length];
  const y = 2026 - Math.floor(i / 10);
  const m = ((i * 7) % 12) + 1;
  const d = ((i * 11) % 27) + 1;
  const date = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  return {
    slug: `${(i + 1).toString().padStart(2, "0")}-${title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 60)}`,
    title,
    subtitle: "Registros de uma programação plural, formativa e aberta à comunidade.",
    excerpt:
      "Uma tarde de encontros, apresentações e conversas entre artistas, estudantes e famílias — ampliando os caminhos das artes circenses no território.",
    date,
    author: ["Camila Rocha", "Ana Ribeiro", "Marco Andrade"][i % 3],
    readingTime: `${3 + (i % 5)} min de leitura`,
    tag,
    content: [
      { type: "p", text: "A programação reuniu artistas, educadores e comunidade em um encontro que aproximou linguagens circenses de novos públicos, reforçando o compromisso do Ponto de Cultura com a formação e o acesso à arte." },
      { type: "h2", text: "Um encontro entre linguagens" },
      { type: "p", text: "Ao longo do dia, oficinas abertas revelaram os processos que dão sustentação aos espetáculos apresentados no fim da tarde. Participantes de diferentes idades circularam por experiências de acrobacia, malabarismo e tecidos aéreos." },
      { type: "ul", items: ["Oficina de acrobacia de solo", "Roda de palhaçaria contemporânea", "Apresentação de tecidos aéreos", "Bate-papo com artistas residentes"] },
      { type: "quote", text: "O circo é um espaço em que arte, técnica e comunidade se encontram no mesmo picadeiro." },
      { type: "h2", text: "Continuidade no calendário" },
      { type: "p", text: "As atividades seguem no calendário do Ponto de Cultura, com programação atualizada mensalmente e vagas gratuitas para moradores do território." },
    ],
  };
});

export type Doc = {
  id: string;
  title: string;
  category:
    | "Documentos oficiais e institucionais"
    | "Atas e registros administrativos"
    | "Relatórios de atividades"
    | "Relatórios financeiros"
    | "Prestação de contas"
    | "Editais e parcerias"
    | "Certificados e reconhecimentos"
    | "Políticas internas"
    | "Portfólios e registros"
    | "Outros documentos";
  type: "PDF" | "DOC" | "XLS";
  year: number;
  size: string;
};

export const DOCS: Doc[] = [
  { id: "d1", title: "Estatuto Social", category: "Documentos oficiais e institucionais", type: "PDF", year: 2023, size: "412 KB" },
  { id: "d2", title: "Cadastro Nacional de Pessoa Jurídica", category: "Documentos oficiais e institucionais", type: "PDF", year: 2024, size: "128 KB" },
  { id: "d3", title: "Regimento Interno", category: "Documentos oficiais e institucionais", type: "PDF", year: 2023, size: "260 KB" },
  { id: "d4", title: "Ata da Assembleia Geral 2025", category: "Atas e registros administrativos", type: "PDF", year: 2025, size: "220 KB" },
  { id: "d5", title: "Ata de Eleição da Diretoria 2024", category: "Atas e registros administrativos", type: "PDF", year: 2024, size: "196 KB" },
  { id: "d6", title: "Ata de Reunião Ordinária — Junho 2025", category: "Atas e registros administrativos", type: "PDF", year: 2025, size: "142 KB" },
  { id: "d7", title: "Relatório de Atividades 2025", category: "Relatórios de atividades", type: "PDF", year: 2025, size: "3,2 MB" },
  { id: "d8", title: "Relatório de Atividades 2024", category: "Relatórios de atividades", type: "PDF", year: 2024, size: "2,8 MB" },
  { id: "d9", title: "Relatório de Atividades 2023", category: "Relatórios de atividades", type: "PDF", year: 2023, size: "2,4 MB" },
  { id: "d10", title: "Relatório Financeiro 2025", category: "Relatórios financeiros", type: "PDF", year: 2025, size: "1,8 MB" },
  { id: "d11", title: "Relatório Financeiro 2024", category: "Relatórios financeiros", type: "PDF", year: 2024, size: "1,6 MB" },
  { id: "d12", title: "Balanço Patrimonial 2024", category: "Relatórios financeiros", type: "PDF", year: 2024, size: "980 KB" },
  { id: "d13", title: "Prestação de Contas 2024", category: "Prestação de contas", type: "PDF", year: 2024, size: "2,4 MB" },
  { id: "d14", title: "Prestação de Contas — Edital Cultura Viva", category: "Prestação de contas", type: "PDF", year: 2023, size: "1,9 MB" },
  { id: "d15", title: "Edital de Seleção — Educadores 2026", category: "Editais e parcerias", type: "PDF", year: 2026, size: "180 KB" },
  { id: "d16", title: "Termo de Parceria — Secretaria de Cultura", category: "Editais e parcerias", type: "PDF", year: 2024, size: "540 KB" },
  { id: "d17", title: "Chamada Pública — Residências Aéreas", category: "Editais e parcerias", type: "PDF", year: 2025, size: "310 KB" },
  { id: "d18", title: "Reconhecimento como Ponto de Cultura", category: "Certificados e reconhecimentos", type: "PDF", year: 2016, size: "147 KB" },
  { id: "d19", title: "Certificado de Utilidade Pública Municipal", category: "Certificados e reconhecimentos", type: "PDF", year: 2019, size: "196 KB" },
  { id: "d20", title: "Menção Honrosa — Prêmio Cultura Viva", category: "Certificados e reconhecimentos", type: "PDF", year: 2022, size: "310 KB" },
  { id: "d21", title: "Política de Privacidade", category: "Políticas internas", type: "PDF", year: 2025, size: "96 KB" },
  { id: "d22", title: "Código de Conduta", category: "Políticas internas", type: "PDF", year: 2024, size: "112 KB" },
  { id: "d23", title: "Política de Proteção à Criança e ao Adolescente", category: "Políticas internas", type: "PDF", year: 2025, size: "148 KB" },
  { id: "d24", title: "Portfólio Institucional 2025", category: "Portfólios e registros", type: "PDF", year: 2025, size: "8,4 MB" },
  { id: "d25", title: "Portfólio de Projetos 2024", category: "Portfólios e registros", type: "PDF", year: 2024, size: "6,9 MB" },
  { id: "d26", title: "Planejamento Anual 2026", category: "Outros documentos", type: "PDF", year: 2026, size: "1,1 MB" },
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

export type GalleryPhoto = { alt: string; caption?: string };
export type GalleryPost = {
  id: string;
  title: string;
  date?: string;
  description?: string;
  photos: GalleryPhoto[];
};

const makePhotos = (prefix: string, n: number): GalleryPhoto[] =>
  Array.from({ length: n }).map((_, i) => ({
    alt: `${prefix} — foto ${i + 1}`,
    caption: `${prefix} — foto ${i + 1}`,
  }));

export const GALLERY_POSTS: Record<number, GalleryPost[]> = {
  2026: [
    {
      id: "2026-mostra",
      title: "Mostra de Artes Circenses — Encerramento das Oficinas",
      date: "Março de 2026",
      description: "Registros da apresentação realizada com participantes das oficinas de iniciação circense.",
      photos: [
        { alt: "Artista em tecido aéreo", caption: "Ensaio da Companhia Aérea" },
        { alt: "Roda de palhaçaria", caption: "Oficina aberta de palhaçaria" },
        { alt: "Público em apresentação", caption: "Mostra cultural na praça" },
        { alt: "Malabarista em performance", caption: "Malabarismo cênico" },
        { alt: "Educadora com estudantes", caption: "Formação continuada" },
        { alt: "Bastidor de espetáculo", caption: "Bastidores da estreia" },
      ],
    },
    {
      id: "2026-tecidos",
      title: "Oficina de Tecidos Aéreos",
      date: "Fevereiro de 2026",
      description: "Vivência prática com iniciantes e artistas em formação continuada.",
      photos: makePhotos("Tecidos aéreos 2026", 8),
    },
  ],
  2025: [
    {
      id: "2025-praca",
      title: "Apresentação na Praça — Vila Aurora",
      date: "Novembro de 2025",
      description: "Ocupação cultural com apresentações e oficinas abertas ao público.",
      photos: makePhotos("Circo na Praça 2025", 10),
    },
    {
      id: "2025-formacao",
      title: "Formação de Educadores",
      date: "Agosto de 2025",
      description: "Encontro formativo com educadores parceiros de escolas públicas.",
      photos: makePhotos("Formação 2025", 6),
    },
    {
      id: "2025-encontro",
      title: "Encontro Comunitário",
      date: "Maio de 2025",
      photos: makePhotos("Encontro comunitário 2025", 5),
    },
  ],
  2024: [
    {
      id: "2024-semana",
      title: "Semana da Cultura",
      date: "Outubro de 2024",
      description: "Programação plural com espetáculos, oficinas e rodas de conversa.",
      photos: makePhotos("Semana da Cultura 2024", 9),
    },
    {
      id: "2024-malabarismo",
      title: "Vivência de Malabarismo",
      date: "Junho de 2024",
      photos: makePhotos("Malabarismo 2024", 6),
    },
  ],
  2023: [
    {
      id: "2023-circo-comunidade",
      title: "Circo na Comunidade",
      date: "Setembro de 2023",
      description: "Apresentações em territórios de baixa oferta cultural.",
      photos: makePhotos("Circo na Comunidade 2023", 8),
    },
    {
      id: "2023-oficina",
      title: "Oficina de Palhaçaria",
      date: "Abril de 2023",
      photos: makePhotos("Palhaçaria 2023", 5),
    },
  ],
  2022: [
    {
      id: "2022-encerramento",
      title: "Mostra de Encerramento das Oficinas",
      date: "Dezembro de 2022",
      description: "Encerramento do ciclo formativo anual.",
      photos: makePhotos("Encerramento 2022", 6),
    },
  ],
};

export const NEWS_TAG_LIST = NEWS_TAGS;