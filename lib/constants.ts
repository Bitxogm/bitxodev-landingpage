
export const featuredProjects = [
  {
    id: 'agentlogic',
    icon: '🤖',
    name: 'AgentLogic Academy',
    description: 'Plataforma interactiva de aprendizaje de programación con asistencia de IA y ejercicios de lógica gamificados.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    url: 'https://agentlogic.bitxodev.com/',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    id: 'codeai',
    icon: '⚡',
    name: 'CodeAI Editor',
    description: 'Herramienta avanzada de refactorización y traducción de código. Incluye análisis profundo, generación de tests unitarios y modularización inteligente mediante Gemini AI.',
    tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Tailwind'],
    url: 'https://codeai.bitxodev.com/',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'cvgenerator',
    icon: '📄',
    name: 'AI CV Generator',
    description: 'Herramienta para crear currículums profesionales optimizados para sistemas ATS utilizando inteligencia artificial.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'PDF-Lib'],
    url: 'https://cvgenerator.bitxodev.com/',
    gradient: 'from-orange-500 to-rose-500',
  }
];

export const mobileProjects = [
  {
    id: 'sms-guardian',
    year: '2024',
    name: 'SMSGuardian',
    type: 'Mobile',
    description: 'Sistema inteligente de detección de fraudes en SMS mediante NLP. Identifica enlaces maliciosos y patrones de phishing en tiempo real.',
    tech: ['React Native', 'NLP', 'TensorFlow', 'Firebase'],
    url: 'https://github.com/Bitxogm/SMSGuardian',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'call-spam-blocker',
    year: '2024',
    name: 'Call Spam IA Blocker',
    type: 'Mobile',
    description: 'Bloqueador de llamadas spam basado en IA. Analiza la reputación de números y utiliza modelos predictivos para filtrar llamadas comerciales agresivas.',
    tech: ['React Native', 'Python API', 'AI Models', 'Kotlin'],
    url: 'https://github.com/Bitxogm/Call-Spam-IA-Bolcker',
    gradient: 'from-blue-500 to-indigo-500',
  }
];

export const archiveProjects = [
  {
    id: 'devstart',
    year: '2024',
    name: 'DevStart Resources',
    type: 'Web',
    description: 'Un hub masivo de recursos para desarrolladores. Centraliza herramientas de diseño, frameworks, documentación y utilidades esenciales para el ecosistema web moderno.',
    tech: ['React', 'Astro', 'Curated Content', 'Tailwind'],
    url: 'https://devstart.bitxodev.com/',
  },
  {
    id: 'master-portfolio',
    year: '2024',
    name: 'Master Portfolio',
    type: 'Web',
    description: 'Portfolio profesional diseñado con un enfoque en el rendimiento y la estética minimalista. Implementa arquitecturas de componentes limpios y animaciones de alta fidelidad.',
    tech: ['React', 'Framer Motion', 'Vite', 'Lucide'],
    url: 'https://portfolio.bitxodev.com/',
  },
  {
    id: 'old-ecom',
    year: '2023',
    name: 'Legacy E-commerce',
    type: 'Web',
    description: 'Plataforma completa de ventas con gestión de inventario, pasarela de pagos Stripe y panel de analíticas.',
    tech: ['Next.js', 'Stripe', 'Supabase', 'TypeScript'],
    url: '#',
  }
];

export const experiences = [
  {
    company: "BitxoDev Studio",
    role: "Senior Full-Stack Developer",
    period: "2023 - Presente",
    description: "Liderando el desarrollo de soluciones basadas en IA y arquitecturas distribuidas de alto rendimiento.",
    skills: ["Architecture", "System Design", "Team Leadership"]
  },
  {
    company: "Tech Solutions Inc.",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    description: "Desarrollo de aplicaciones web escalables y optimización de bases de datos para clientes internacionales.",
    skills: ["React", "PostgreSQL", "AWS"]
  }
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"]
  },
  {
    title: "AI & Data",
    skills: ["Gemini API", "OpenAI", "LangChain", "Vector DBs", "PyTorch"]
  }
];

export const certificates = [
  {
    id: 'fullstack-bootcamp',
    title: 'Full-Stack Web Development',
    issuer: 'KeepCoding',
    date: '2024',
    url: '/certificates/fullstack.pdf', // Aquí pondrás tu PDF
    image: 'https://picsum.photos/seed/cert1/400/300', // Opcional: miniatura
  },
  {
    id: 'ai-specialization',
    title: 'AI & Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    url: '/certificates/ai.pdf',
    image: 'https://picsum.photos/seed/cert2/400/300',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Architecture (AWS)',
    issuer: 'Amazon Web Services',
    date: '2023',
    url: '/certificates/aws.pdf',
    image: 'https://picsum.photos/seed/cert3/400/300',
  }
];

export const bootcampPractices = [
  {
    name: 'Fundamentos de Programación',
    description: 'Lógica pura, algoritmos y estructuras de datos básicas.',
    tech: ['JavaScript', 'Logic'],
    github: '#'
  },
  {
    name: 'Frontend Avanzado',
    description: 'Single Page Applications con gestión de estado compleja.',
    tech: ['React', 'Redux'],
    github: '#'
  },
  {
    name: 'Backend & APIs',
    description: 'Diseño de microservicios y despliegue en contenedores.',
    tech: ['Node.js', 'Docker'],
    github: '#'
  }
];
