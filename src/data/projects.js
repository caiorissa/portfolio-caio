export const studio = {
  name: 'Loomee AI',
  url: 'https://loomeeai.com',
  image: '/images/printloomee.png',
  tagline: 'Seu negócio precisa de site. A gente faz.',
  taglineEn: 'Your business needs a website. We build it.',
  description:
    'Empresa que criei com um amigo para fazer sites e landing pages sob medida. Design no Figma, código na mão, direto com quem desenvolve, sem template genérico.',
  descriptionEn:
    'A company I started with a friend to build custom websites and landing pages. Figma design, hand-coded, direct contact with the developers, no generic templates.',
};

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
    title: 'Gentelman\'s Cut',
    category: 'Barbearia',
    categoryEn: 'Barbershop',
    description:
      'Site institucional para barbearia premium, com cardápio digital, história da marca, reservas e contato para eventos.',
    descriptionEn:
      'Institutional site for a premium barbershop, featuring digital menu, brand story, reservations, and event contact.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    url: 'https://mockup-barbearia.vercel.app/',
    gradient: 'linear-gradient(145deg, #050505 0%, #1a1033 50%, #5227FF 100%)',
    github: 'https://github.com/caiorissa/mockup-barbearia',
    image: '/images/barbearia.png',
    demo: 'https://mockup-barbearia.vercel.app/',
  },
  {
    title: 'VÉRTEX Performance Club',
    category: 'Academia',
    categoryEn: 'Gym',
    description:
      'Painel de gestão para rede de academias, com dashboard em tempo real, matrículas, mensalidades, fichas de treino, check-in e gestão de personais em múltiplas unidades.',
    descriptionEn:
      'Management dashboard for a gym network, featuring real-time metrics, enrollments, billing, workout plans, check-in, and personal trainer management across multiple locations.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Recharts'],
    url: 'https://mockup-academia.vercel.app/',
    gradient: 'linear-gradient(145deg, #080807 0%, #161614 50%, #d4f000 100%)',
    github: 'https://github.com/caiorissa/mockup-academia',
    image: '/images/academia.png',
    demo: 'https://mockup-academia.vercel.app/',
  },
  {
    title: 'Horizonte CRM Imobiliário',
    category: 'Imobiliária',
    categoryEn: 'Real Estate',
    description:
      'CRM premium para imobiliárias, com dashboard editorial, funil de vendas com drag-and-drop, catálogo de imóveis, agenda de visitas, gestão de leads e operação multiunidade em tempo real.',
    descriptionEn:
      'Premium CRM for real estate agencies, featuring an editorial dashboard, drag-and-drop sales pipeline, property catalog, visit scheduling, lead management, and multi-branch operations in real time.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Recharts'],
    url: 'https://mockup-imobiliaria.vercel.app/',
    gradient: 'linear-gradient(145deg, #0c0b0a 0%, #161412 50%, #c17f59 100%)',
    github: 'https://github.com/caiorissa/mockup-imobiliaria',
    image: '/images/imobiliaria.png',
    demo: 'https://mockup-imobiliaria.vercel.app/',
  },
  {
    category: 'Loja de Roupas',
    categoryEn: 'Clothing Store',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #0a0a0a 0%, #1a1018 50%, #be185d 100%)',
  },
  {
    category: 'Transportadora',
    categoryEn: 'Logistics',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #050505 0%, #141210 50%, #ea580c 100%)',
  },
  {
    category: 'Hotel',
    categoryEn: 'Hotel',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #080604 0%, #1c1810 50%, #ca8a04 100%)',
  },
  {
    category: 'Escritório Jurídico',
    categoryEn: 'Law Firm',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #050505 0%, #101418 50%, #475569 100%)',
  },
  {
    category: 'Concessionária',
    categoryEn: 'Car Dealership',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #050505 0%, #0d1117 50%, #dc2626 100%)',
  },
  {
    category: 'Farmácia',
    categoryEn: 'Pharmacy',
    comingSoon: true,
    gradient: 'linear-gradient(145deg, #050505 0%, #0d1117 50%, #8b5cf6 100%)',
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
  { name: 'GitHub', url: 'https://github.com/caiorissa', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/caio-rissa-b4706527a/', icon: 'linkedin' },
];

export const translations = {
  pt: {
    nav: { about: 'Sobre', studio: 'Loomee', projects: 'Projetos', mockups: 'Mockups', contact: 'Contato' },
    studio: {
      eyebrow: 'Minha empresa',
      cta: 'Conhecer a Loomee',
      ctaSecondary: 'Falar com a gente',
    },
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
    nav: { about: 'About', studio: 'Loomee', projects: 'Projects', mockups: 'Mockups', contact: 'Contact' },
    studio: {
      eyebrow: 'My company',
      cta: 'Visit Loomee',
      ctaSecondary: 'Get in touch',
    },
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
