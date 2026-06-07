export const projects = [
  {
    title: 'Fyzen',
    description: 'App que gera treinos personalizados com base na sua altura, peso, idade e experiência.',
    descriptionEn: 'App that generates personalized workouts based on your height, weight, age, and experience.',
    tech: ['React', 'JavaScript', 'TailwindCSS'],
    image: '/images/fyzen1.png',
    demo: 'https://fyzen.app',
    github: null,
    featured: null,
  },
  {
    title: 'Riegel Films',
    description:
      'Site portfolio para criação audiovisual, com apresentação de serviços, portfólio de vídeos, destaque de resultados e contato para novos projetos.',
    descriptionEn:
      'Portfolio site for audiovisual production, featuring services overview, video showcase, results highlights, and contact for new projects.',
    tech: ['React', 'JavaScript', 'TailwindCSS'],
    image: '/images/printsiteriegel.png',
    demo: 'https://riegelfilms.com',
    github: null,
    featured: null,
  },
  {
    title: 'Ventlize',
    description: 'Site institucional moderno. Projeto pago.',
    descriptionEn: 'Modern institutional website. Paid project.',
    tech: ['React', 'JavaScript', 'TailwindCSS'],
    image: '/images/printsitedopp.png',
    demo: 'https://ventlize-site.vercel.app',
    github: null,
    featured: null,
  },
];

export const mockups = [
  {
    title: 'Noir Café',
    category: 'Cafeteria',
    categoryEn: 'Coffee Shop',
    description:
      'Site institucional para cafeteria premium, com cardápio digital, história da marca, reservas e contato para eventos.',
    descriptionEn:
      'Institutional site for a premium coffee shop, featuring digital menu, brand story, reservations, and event contact.',
    tech: ['React', 'TailwindCSS', 'UI/UX'],
    url: 'noircafe.com.br',
    gradient: 'linear-gradient(145deg, #1a0f0a 0%, #3d2314 50%, #c9a87c 100%)',
    image: null,
    demo: null,
  },
  {
    title: 'Lumen SaaS',
    category: 'Dashboard',
    categoryEn: 'Dashboard',
    description:
      'Painel de analytics fictício para startups, com métricas em tempo real, gráficos, relatórios e gestão de equipe.',
    descriptionEn:
      'Fictional analytics dashboard for startups, with real-time metrics, charts, reports, and team management.',
    tech: ['React', 'JavaScript', 'TailwindCSS'],
    url: 'lumen.app',
    gradient: 'linear-gradient(145deg, #050505 0%, #1a1033 50%, #5227FF 100%)',
    image: null,
    demo: null,
  },
  {
    title: 'Atelier Mode',
    category: 'E-commerce',
    categoryEn: 'E-commerce',
    description:
      'Loja virtual de moda minimalista, com catálogo de produtos, lookbook editorial, filtros e checkout simplificado.',
    descriptionEn:
      'Minimalist fashion e-commerce store with product catalog, editorial lookbook, filters, and simplified checkout.',
    tech: ['React', 'TailwindCSS', 'Figma'],
    url: 'ateliermode.com',
    gradient: 'linear-gradient(145deg, #f8f4f0 0%, #e8dfd6 50%, #1a1a1a 100%)',
    image: null,
    demo: null,
  },
];

export const skills = [
  { name: 'HTML5', icon: '/images/html5-logo-31813.png', desc: 'Estrutura semântica', descEn: 'Semantic structure' },
  { name: 'CSS3', icon: '/images/css3-logo-31821.png', desc: 'Design responsivo', descEn: 'Responsive design' },
  { name: 'JavaScript', icon: '/images/javascript-39410.png', desc: 'Lógica e interatividade', descEn: 'Logic & interactivity' },
  { name: 'React', icon: '/images/react-brands-solid-full.svg', desc: 'Interfaces modernas', descEn: 'Modern interfaces' },
  { name: 'Tailwind', icon: '/images/icons8-tailwind-css-48.png', desc: 'Estilização rápida', descEn: 'Rapid styling' },
];

export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/caaiio.dev', icon: 'instagram' },
  { name: 'X / Twitter', url: 'https://x.com/caaiiors_', icon: 'twitter' },
  { name: 'GitHub', url: 'https://github.com/caaiiors', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/caio-rissa-b4706527a/', icon: 'linkedin' },
];

export const translations = {
  pt: {
    nav: { about: 'Sobre', projects: 'Projetos', mockups: 'Mockups', contact: 'Contato' },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Caio',
      subtitle: 'Desenvolvedor Front-End · UI/UX',
      cta1: 'Ver Projetos',
      cta2: 'Entrar em contato',
    },
    about: {
      title: 'Sobre mim',
      text: 'Meu nome é Caio Rissa Silveira e sou do Rio Grande do Sul. Sou um desenvolvedor front-end que gosta de interfaces limpas, animações sutis e experiências com muita presença visual.',
    },
    skills: { title: 'Skills' },
    projects: { title: 'Projetos', demo: 'Demo', site: 'Site', code: 'Código' },
    mockups: {
      title: 'Mockups',
      subtitle: 'Sites fictícios criados para explorar UI/UX e mostrar como seriam projetos reais.',
      badge: 'Conceito',
      comingSoon: 'Em breve',
      viewConcept: 'Ver conceito',
    },
    contact: {
      title: "Let's connect",
      text: 'Quer conversar ou trabalhar comigo?',
      email: 'Enviar e-mail',
      social: 'Me siga nas redes',
    },
    stats: { projects: 'Projetos', clients: 'Clientes', year: 'Desde' },
    footer: '© {year} Caio Rissa Silveira — Todos os direitos reservados',
  },
  en: {
    nav: { about: 'About', projects: 'Projects', mockups: 'Mockups', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      name: 'Caio',
      subtitle: 'Front-End Developer · UI/UX',
      cta1: 'View Projects',
      cta2: 'Get in touch',
    },
    about: {
      title: 'About me',
      text: "My name is Caio Rissa Silveira and I'm from Rio Grande do Sul, Brazil. I'm a front-end developer who loves clean interfaces, subtle animations, and strong visual experiences.",
    },
    skills: { title: 'Skills' },
    projects: { title: 'Projects', demo: 'Demo', site: 'Site', code: 'Code' },
    mockups: {
      title: 'Mockups',
      subtitle: 'Fictional websites built to explore UI/UX and showcase what real client projects could look like.',
      badge: 'Concept',
      comingSoon: 'Coming soon',
      viewConcept: 'View concept',
    },
    contact: {
      title: "Let's connect",
      text: 'Want to chat or work with me?',
      email: 'Send email',
      social: 'Follow me on socials',
    },
    stats: { projects: 'Projects', clients: 'Clients', year: 'Since' },
    footer: '© {year} Caio Rissa Silveira — All rights reserved',
  },
};
