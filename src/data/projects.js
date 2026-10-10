export const studio = {
  name: 'Loomee AI',
  url: 'https://loomeeai.com',
  image: '/images/printloomee.png',
  width: 1024,
  height: 592,
  alt: 'Página inicial do estúdio Loomee AI',
  altEn: 'Loomee AI studio home page',
  tagline: 'Seu negócio precisa de site. A gente faz.',
  taglineEn: 'Your business needs a website. We build it.',
  description:
    'Estúdio que fundei com meu sócio para criar sites e landing pages sob medida. Design no Figma, código próprio e contato direto com quem desenvolve.',
  descriptionEn:
    'The studio I co-founded with my partner to craft custom websites and landing pages. Figma design, original code, and direct contact with the people building it.',
};

export const projects = [
  {
    title: 'Gestec Help Desk',
    category: 'Internal service management system',
    categoryPt: 'Sistema interno de gestão de serviços',
    width: 3325,
    height: 2061,
    alt: 'Jornada do Gestec Help Desk com timer e apontamentos de horas',
    altEn: 'Gestec Help Desk time tracking page with timer and recorded hours',
    description:
      'Sistema interno que desenvolvi para centralizar o atendimento de tickets, o registro de horas e os relatórios da equipe. Também reúne gestão de projetos e ativos de TI, além de um painel de inventário e auditoria das estações.',
    descriptionEn:
      'An internal system I built to bring ticket support, time tracking, and team reports together. It also includes project and IT asset management, plus a workstation inventory and audit dashboard.',
    rolePt: 'Desenvolvimento full-stack e interface do produto',
    roleEn: 'Full-stack development and product interface',
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS 4',
      'Supabase Auth',
      'Azure Cosmos DB',
      'pg-boss',
      'ExcelJS',
      'MCP SDK',
    ],
    image: '/images/gestec-helpdesk/jornada.png',
    directImage: true,
    demo: null,
    github: null,
    screenshots: [
      {
        image: '/images/gestec-helpdesk/jornada.png',
        width: 3325,
        height: 2061,
        alt: 'Jornada com timer e apontamentos de horas agrupados por dia',
        altEn: 'Workday page with a timer and time entries grouped by day',
        label: 'Jornada',
        labelEn: 'Time tracking',
      },
      {
        image: '/images/gestec-helpdesk/desk.png',
        width: 3281,
        height: 2016,
        alt: 'Painel Desk com cobertura do inventário e anomalias nas estações',
        altEn: 'Desk dashboard showing inventory coverage and workstation anomalies',
        label: 'Desk',
        labelEn: 'Desk',
      },
      {
        image: '/images/gestec-helpdesk/painel.png',
        width: 3259,
        height: 2018,
        alt: 'Painel da Jornada com metas mensais e horas registradas pela equipe',
        altEn: 'Workday dashboard with monthly goals and team hours',
        label: 'Painel',
        labelEn: 'Dashboard',
      },
      {
        image: '/images/gestec-helpdesk/projetos.png',
        width: 3295,
        height: 2011,
        alt: 'Lista de projetos com rateios, horas no mês e status',
        altEn: 'Project list with allocations, monthly hours, and status',
        label: 'Projetos',
        labelEn: 'Projects',
      },
      {
        image: '/images/gestec-helpdesk/equipe.png',
        width: 3279,
        height: 2001,
        alt: 'Tabela da equipe com total de horas registradas no mês',
        altEn: 'Team table with total hours recorded for the month',
        label: 'Equipe',
        labelEn: 'Team',
      },
      {
        image: '/images/gestec-helpdesk/relatorios.png',
        width: 3258,
        height: 1993,
        alt: 'Relatórios com indicadores de tickets e horas por projeto e centro de custo',
        altEn: 'Reports with ticket and time indicators by project and cost center',
        label: 'Relatórios',
        labelEn: 'Reports',
      },
      {
        image: '/images/gestec-helpdesk/inventario.png',
        width: 3248,
        height: 1988,
        alt: 'Inventário patrimonial de ativos de TI associados aos tickets',
        altEn: 'IT asset register linked to support tickets',
        label: 'Inventário',
        labelEn: 'Asset register',
      },
      {
        image: '/images/gestec-helpdesk/desk-auditoria.png',
        width: 3256,
        height: 2012,
        alt: 'Lista de estações e formulário de auditoria em massa no Desk',
        altEn: 'Workstation list and bulk audit form in Desk',
        label: 'Auditoria',
        labelEn: 'Audit',
      },
    ],
  },
  {
    title: 'Fyzen',
    category: 'Fitness product',
    categoryPt: 'Produto fitness',
    width: 3402,
    height: 1968,
    alt: 'Painel do Fyzen com acesso a treino, alimentação, metas e progresso',
    altEn: 'Fyzen dashboard with access to workouts, nutrition, goals, and progress',
    description:
      'Aplicativo que cria treinos personalizados a partir do perfil e da experiência de cada pessoa.',
    descriptionEn:
      'An app that creates personalized workouts around each person’s profile and experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    image: '/images/fyzen1.png',
    demo: 'https://fyzen.app',
    github: null,
  },
  {
    title: 'Riegel Films',
    category: 'Creative portfolio',
    categoryPt: 'Portfólio audiovisual',
    width: 3398,
    height: 1950,
    alt: 'Página inicial da Riegel Films com apresentação audiovisual e contato',
    altEn: 'Riegel Films home page with audiovisual introduction and contact',
    description:
      'Portfólio audiovisual com narrativa visual, serviços, filmes em destaque e uma jornada direta até o contato.',
    descriptionEn:
      'An audiovisual portfolio with visual storytelling, services, featured films, and a direct path to contact.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    image: '/images/printsiteriegel.png',
    demo: 'https://riegelfilms.com',
    github: null,
  },
  {
    title: 'Ventlize',
    category: 'Business website',
    categoryPt: 'Site institucional',
    width: 3392,
    height: 1948,
    alt: 'Página institucional da Ventlize',
    altEn: 'Ventlize business website',
    description:
      'Site institucional moderno desenvolvido para apresentar a empresa com clareza e gerar novas oportunidades.',
    descriptionEn:
      'A modern business website built to introduce the company clearly and generate new opportunities.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    image: '/images/printsitedopp.png',
    demo: 'https://ventlize-site.vercel.app',
    github: null,
  },
];

export const mockups = [
  {
    title: 'NEXA',
    width: 1586,
    height: 992,
    alt: 'Mockup editorial da plataforma financeira NEXA em monitor e smartphone',
    altEn: 'Editorial mockup of the NEXA finance platform on a monitor and smartphone',
    category: 'Finanças pessoais',
    categoryEn: 'Personal finance',
    description:
      'Plataforma financeira com visão consolidada do patrimônio, movimentações, cartões, investimentos e análises.',
    descriptionEn:
      'A personal finance platform with a consolidated view of net worth, transactions, cards, investments, and analytics.',
    tech: ['Product Design', 'Responsive UI', 'Dashboard'],
    github: null,
    image: '/images/nexa-mockup.png',
    demo: 'https://nexa-jade-theta.vercel.app/',
    featured: true,
  },
  {
    title: "Gentelman's Cut",
    width: 3408,
    height: 1964,
    alt: 'Conceito de site de barbearia com apresentação dos serviços',
    altEn: 'Barbershop website concept introducing its services',
    category: 'Barbearia',
    categoryEn: 'Barbershop',
    description:
      'Experiência digital para uma barbearia premium, com serviços, história e reservas.',
    descriptionEn:
      'A digital experience for a premium barbershop, with services, story, and bookings.',
    tech: ['React', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/caiorissa/mockup-barbearia',
    image: '/images/barbearia.png',
    demo: 'https://mockup-barbearia.vercel.app/',
  },
  {
    title: 'VÉRTEX Performance Club',
    width: 3420,
    height: 1974,
    alt: 'Dashboard VÉRTEX com indicadores de gestão da academia',
    altEn: 'VÉRTEX dashboard with gym management metrics',
    category: 'Academia',
    categoryEn: 'Gym',
    description:
      'Dashboard de gestão para academias com indicadores, matrículas, treinos e operação multiunidade.',
    descriptionEn:
      'A gym management dashboard with metrics, memberships, workouts, and multi-location operations.',
    tech: ['React', 'TypeScript', 'Recharts'],
    github: 'https://github.com/caiorissa/mockup-academia',
    image: '/images/academia.png',
    demo: 'https://mockup-academia.vercel.app/',
  },
  {
    title: 'Horizonte CRM',
    width: 3392,
    height: 1972,
    alt: 'Painel do Horizonte CRM para gestão imobiliária',
    altEn: 'Horizonte CRM real estate management dashboard',
    category: 'Imobiliária',
    categoryEn: 'Real estate',
    description:
      'CRM imobiliário com funil comercial, catálogo, agenda de visitas e gestão de leads.',
    descriptionEn:
      'A real-estate CRM with a sales pipeline, listings, visit scheduling, and lead management.',
    tech: ['React', 'TypeScript', 'Recharts'],
    github: 'https://github.com/caiorissa/mockup-imobiliaria',
    image: '/images/imobiliaria.png',
    demo: 'https://mockup-imobiliaria.vercel.app/',
  },
];

export const skills = [
  {
    name: 'HTML',
    icon: '/images/html5-logo-31813.png',
    desc: 'Semântica e acessibilidade',
    descEn: 'Semantics and accessibility',
  },
  {
    name: 'CSS',
    icon: '/images/css3-logo-31821.png',
    desc: 'Design responsivo',
    descEn: 'Responsive design',
  },
  {
    name: 'JavaScript',
    icon: '/images/javascript-39410.png',
    desc: 'Interações e produto',
    descEn: 'Interactions and product',
  },
  {
    name: 'React',
    icon: '/images/react-brands-solid-full.svg',
    desc: 'Interfaces escaláveis',
    descEn: 'Scalable interfaces',
  },
  {
    name: 'Tailwind CSS',
    icon: '/images/icons8-tailwind-css-48.png',
    desc: 'Sistemas consistentes',
    descEn: 'Consistent systems',
  },
];

export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/caaiio.dev' },
  { name: 'X', url: 'https://x.com/caiorissa' },
  { name: 'GitHub', url: 'https://github.com/caiorissa' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/caio-rissa-b4706527a/',
  },
];

export const translations = {
  pt: {
    meta: {
      description:
        'Caio Rissa, desenvolvedor front-end do Rio Grande do Sul. Projetos em React, UI/UX e sites sob medida. Conheça os trabalhos e entre em contato.',
    },
    skip: 'Pular para o conteúdo',
    top: 'Voltar ao topo',
    nav: {
      label: 'Principal',
      about: 'Sobre',
      studio: 'Loomee',
      projects: 'Trabalhos',
      mockups: 'Conceitos',
      contact: 'Contato',
      menu: 'Abrir menu',
      close: 'Fechar menu',
      theme: 'Alternar tema',
    },
    hero: {
      status: 'Disponível para novos projetos',
      eyebrow: 'Front-end & UI/UX · Brasil',
      title: 'Desenvolvimento front‑end com olhar de designer.',
      location: 'Rio Grande do Sul, Brasil',
      preview: 'Uma prévia do trabalho',
      choose: 'Escolher projeto para visualizar',
      personal: 'Design e código, de perto.',
      personalLink: 'Um pouco sobre mim',
      titleAccent: 'E funcionam de verdade.',
      description:
        'Crio sites e produtos digitais com atenção à experiência, à performance e aos detalhes. Da ideia no Figma à interface em React.',
      cta1: 'Ver projetos',
      cta2: 'Vamos conversar',
      scroll: 'Role para explorar',
      portraitAlt: 'Retrato de Caio Rissa',
      cardLabel: 'O que eu faço',
      cardValue: 'Design + desenvolvimento',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'O cuidado está nos detalhes. E em como tudo funciona junto.',
      text: 'Sou Caio Rissa Silveira, desenvolvedor front-end do Rio Grande do Sul. Gosto de transformar problemas complexos em interfaces naturais, com uma combinação de estratégia, design e código bem resolvido.',
      principles: [
        {
          title: 'Clareza',
          text: 'Cada elemento precisa ter um motivo para estar na tela.',
        },
        {
          title: 'Cuidado',
          text: 'Tipografia, ritmo e microinterações fazem parte do produto.',
        },
        {
          title: 'Resultado',
          text: 'Uma interface bonita também precisa ser rápida e útil.',
        },
      ],
      stats: [
        { value: '6+', label: 'projetos publicados' },
        { value: '3', label: 'projetos comerciais' },
        { value: '100%', label: 'responsivo' },
      ],
    },
    studio: {
      eyebrow: 'Cofundador de um estúdio independente',
      cta: 'Conhecer a Loomee',
      label: 'Da estratégia ao lançamento',
    },
    projects: {
      eyebrow: 'Trabalhos selecionados',
      title: 'Ideias que ganharam forma.',
      role: 'Design de interface e desenvolvimento front-end',
      subtitle:
        'Uma seleção de experiências digitais que projetei e desenvolvi para negócios e pessoas.',
      site: 'Visitar projeto',
      code: 'Ver código',
      screenshots: 'Telas do sistema',
    },
    mockups: {
      eyebrow: 'Explorações',
      title: 'Espaço para experimentar.',
      subtitle:
        'Estudos autorais para explorar diferentes negócios, sistemas complexos e novas direções visuais.',
      badge: 'Conceito',
      viewConcept: 'Abrir conceito',
    },
    skills: {
      eyebrow: 'Ferramentas & método',
      title: 'Do visual à interação.',
      text: 'As ferramentas que uso para transformar design em uma experiência funcional.',
    },
    contact: {
      eyebrow: 'Vamos conversar',
      title: 'Vamos criar algo bom?',
      subject: 'Contato via portfólio',
      text: 'Conte um pouco sobre o projeto pelo WhatsApp. Eu respondo com próximos passos, sem enrolação.',
      whatsapp: 'Chamar no WhatsApp',
      whatsappMessage:
        'Olá, Caio! Vi seu portfólio e gostaria de conversar sobre um projeto.',
      email: 'Enviar e-mail',
      social: 'Outros lugares',
    },
    footer: '© {year} Caio Rissa. Feito com cuidado no Brasil.',
  },
  en: {
    meta: {
      description:
        'Caio Rissa, a front-end developer from southern Brazil. React projects, UI/UX, and custom websites. Explore the work and get in touch.',
    },
    skip: 'Skip to content',
    top: 'Back to top',
    nav: {
      label: 'Main',
      about: 'About',
      studio: 'Loomee',
      projects: 'Work',
      mockups: 'Concepts',
      contact: 'Contact',
      menu: 'Open menu',
      close: 'Close menu',
      theme: 'Toggle theme',
    },
    hero: {
      status: 'Available for new projects',
      eyebrow: 'Front-end & UI/UX · Brazil',
      title: 'Front‑end development with a designer’s eye.',
      location: 'Rio Grande do Sul, Brazil',
      preview: 'A glimpse of the work',
      choose: 'Choose a project to preview',
      personal: 'A closer look at design and code.',
      personalLink: 'A little about me',
      titleAccent: 'And truly work.',
      description:
        'I build websites and digital products with care for the experience, performance, and details. From an idea in Figma to an interface in React.',
      cta1: 'Explore projects',
      cta2: 'Let’s talk',
      scroll: 'Scroll to explore',
      portraitAlt: 'Portrait of Caio Rissa',
      cardLabel: 'What I do',
      cardValue: 'Design + development',
    },
    about: {
      eyebrow: 'About',
      title: 'Care is in the details. And how it all works together.',
      text: 'I’m Caio Rissa Silveira, a front-end developer from southern Brazil. I enjoy turning complex problems into natural interfaces through a combination of strategy, design, and well-crafted code.',
      principles: [
        {
          title: 'Clarity',
          text: 'Every element needs a reason to be on the screen.',
        },
        {
          title: 'Care',
          text: 'Typography, rhythm, and microinteractions are part of the product.',
        },
        {
          title: 'Outcome',
          text: 'A beautiful interface also needs to be fast and useful.',
        },
      ],
      stats: [
        { value: '6+', label: 'published projects' },
        { value: '3', label: 'commercial projects' },
        { value: '100%', label: 'responsive' },
      ],
    },
    studio: {
      eyebrow: 'Co-founder of an independent studio',
      cta: 'Discover Loomee',
      label: 'From strategy to launch',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Ideas brought to life.',
      role: 'Interface design and front-end development',
      subtitle:
        'A selection of digital experiences I designed and developed for businesses and people.',
      site: 'Visit project',
      code: 'View code',
      screenshots: 'Product screens',
    },
    mockups: {
      eyebrow: 'Explorations',
      title: 'Room to experiment.',
      subtitle:
        'Independent studies exploring different industries, complex systems, and new visual directions.',
      badge: 'Concept',
      viewConcept: 'Open concept',
    },
    skills: {
      eyebrow: 'Tools & method',
      title: 'From visuals to interaction.',
      text: 'The tools I use to turn design into a working experience.',
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Let’s make something good.',
      subject: 'Portfolio inquiry',
      text: 'Tell me a little about the project on WhatsApp. I’ll reply with clear next steps.',
      whatsapp: 'Message me on WhatsApp',
      whatsappMessage:
        'Hi, Caio! I saw your portfolio and would like to discuss a project.',
      email: 'Send an email',
      social: 'Elsewhere',
    },
    footer: '© {year} Caio Rissa. Crafted with care in Brazil.',
  },
};
