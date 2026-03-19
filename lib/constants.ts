
export const featuredProjects = [
  {
    id: 'agentlogic',
    icon: '🤖',
    name: 'AgentLogic Academy',
    description: 'Plataforma interactiva de aprendizaje de programación con asistencia de IA y ejercicios de lógica gamificados.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    url: 'https://agentlogic.bitxodev.com/',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'codeai',
    icon: '⚡',
    name: 'CodeAI Editor',
    description: 'Herramienta avanzada de refactorización y traducción de código. Incluye análisis profundo, generación de tests unitarios y modularización inteligente mediante Gemini AI.',
    tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Tailwind'],
    url: 'https://codeai.bitxodev.com/',
    gradient: 'from-blue-600 to-indigo-500',
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
    company: "Full-Stack Web Bootcamp",
    role: "Estudiante de Desarrollo Web",
    period: "Mayo 2025 - Marzo 2026",
    description: "Formación intensiva en desarrollo moderno. Especialización en el stack MERN (MongoDB, Express, React, Node.js), arquitectura de software y buenas prácticas de desarrollo.",
    skills: ["Full-Stack Development", "Teamwork", "Agile"]
  },
  {
    company: "Formación Autodidacta",
    role: "Aspirante a Desarrollador",
    period: "2023 - 2025",
    description: "Aprendizaje independiente a través de plataformas como Udemy, freeCodeCamp y YouTube. Construcción de proyectos personales para consolidar fundamentos de JavaScript, HTML y CSS.",
    skills: ["Self-learning", "Problem Solving", "Web Fundamentals"]
  }
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL", "Prisma", "REST APIs"]
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "Vite", "AWS", "Postman", "Linux Terminal"]
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
    name: 'Proyecto Next.js',
    description: 'Aplicación web moderna utilizando el App Router de Next.js, optimización de imágenes y Server Components.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '#'
  },
  {
    name: 'Proyecto React',
    description: 'Desarrollo de una SPA interactiva con gestión de estado global y hooks personalizados.',
    tech: ['React', 'Vite', 'CSS Modules'],
    github: '#'
  },
  {
    name: 'Proyecto Node.js',
    description: 'API REST robusta con autenticación JWT, validación de datos y conexión a base de datos.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: '#'
  },
  {
    name: 'Proyecto Final (En curso)',
    description: 'Desarrollo integral de una solución full-stack aplicando todos los conocimientos del bootcamp.',
    tech: ['Full Stack', 'IA', 'AWS'],
    github: '#'
  }
];
