import type {
  FeaturedProject,
  MobileProject,
  ArchiveProject,
  ExperienceItem,
  SkillCategory,
  CertificateItem,
  BootcampPractice,
} from '../types/portfolio';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'agentlogic',
    icon: '🤖',
    name: 'AgentLogic Academy',
    description:
      'Plataforma interactiva de aprendizaje de programación con asistencia de IA y ejercicios de lógica gamificados en tiempo real.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    url: 'https://agentlogic.bitxodev.com/',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'codeai',
    icon: '⚡',
    name: 'CodeAI Editor',
    description:
      'Herramienta avanzada de refactorización y traducción de código. Incluye análisis profundo, generación de tests unitarios y modularización con Gemini AI.',
    tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Tailwind'],
    url: 'https://codeai.bitxodev.com/',
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    id: 'cvgenerator',
    icon: '📄',
    name: 'AI CV Generator',
    description:
      'Plataforma inteligente para crear currículums profesionales optimizados para sistemas ATS mediante modelos generativos.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'PDF-Lib'],
    url: 'https://talent.bitxodev.com/',
    gradient: 'from-orange-500 to-rose-500',
  },
];

export const mobileProjects: MobileProject[] = [
  {
    id: 'sms-guardian',
    year: '2026',
    name: 'SMSGuardian',
    subtitle: 'Anti-Smishing · Motor Híbrido Offline/Cloud',
    type: 'Mobile',
    description:
      'App Android Open Source que intercepta SMS maliciosos antes de que los veas. Motor híbrido en 3 fases (Whitelist local, Heurística española + detección de Unicode homoglyphs y Verificación cloud) con análisis bajo demanda en Gemini 2.5 Flash.',
    tech: [
      'React Native 0.81',
      'TypeScript',
      'Java / Kotlin',
      'SQLite',
      'Gemini 2.5 Flash',
      'VirusTotal API',
      'Safe Browsing',
    ],
    url: 'https://github.com/Bitxogm/SMSGuardian',
    gradient: 'from-emerald-500 to-teal-500',
    slides: Array.from(
      { length: 12 },
      (_, i) => `/carousels/sms-guardian/slide-${String(i + 1).padStart(2, '0')}.png`
    ),
  },
  {
    id: 'call-spam-blocker',
    year: '2026',
    name: 'Call Spam IA Blocker',
    subtitle: 'Filtrado en Milisegundos · Agente de Voz IA "Manolo"',
    type: 'Mobile',
    description:
      'App Android anti-spam que filtra llamadas antes de que suene el móvil y desvía a los spammers a "Manolo", un abuelo gallego con IA de voz en tiempo real (~300 ms de latencia) que conversa con ellos y les hace perder el tiempo.',
    tech: [
      'React Native + Expo 53',
      'Java (CallScreening)',
      'Asterisk 20 (SIP/ARI)',
      'Python asyncio',
      'Deepgram STT',
      'Groq LLM',
      'Edge TTS',
    ],
    url: 'https://github.com/Bitxogm/Call-Spam-IA-Bolcker',
    gradient: 'from-blue-500 to-indigo-500',
    slides: Array.from(
      { length: 12 },
      (_, i) => `/carousels/call-spam-blocker/slide-${String(i + 1).padStart(2, '0')}.png`
    ),
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: 'cybershield-ai',
    year: '2026',
    name: 'CyberShield AI',
    type: 'Security',
    description:
      'Asistente personal integrado a nivel de sistema operativo para Kali Linux que conecta LLMs con herramientas locales de ciberseguridad y auditoría.',
    tech: ['Python', 'Kali Linux', 'LLMs', 'Cybersecurity'],
    url: 'https://github.com/Bitxogm/cybershield-ai',
  },
  {
    id: 'redteam-agy-labs',
    year: '2026',
    name: 'RedTeam & CTF Squad',
    type: 'Security',
    description:
      'Flujo multi-agente (Antigravity/Gemini) y colección de laboratorios paso a paso para pentesting en DockerLabs y HackMyVM.',
    tech: ['Python', 'AI Agents', 'Pentesting', 'DockerLabs'],
    url: 'https://github.com/Bitxogm/redteam-agy-labs',
  },
  {
    id: 'check-secrets-hook',
    year: '2026',
    name: 'Check Secrets Hook',
    type: 'Security',
    description:
      'Hook pre-commit en Bash para DevSecOps que inspecciona y bloquea automáticamente fugas de API keys, tokens, credenciales y archivos .env.',
    tech: ['Bash', 'Git Hooks', 'DevSecOps', 'Regex'],
    url: 'https://github.com/Bitxogm/check-secrets-hook',
  },
  {
    id: 'backend-bookshop',
    year: '2026',
    name: 'Backend Pro Book Shop',
    type: 'Web',
    description:
      'Arquitectura backend avanzada con Node.js y Express, autenticación robusta, modelado de datos y buenas prácticas de API REST.',
    tech: ['Node.js', 'Express', 'REST API', 'Architecture'],
    url: 'https://github.com/Bitxogm/Backend-Advanced-Practice-Book_Shop',
  },
  {
    id: 'devstart-jr',
    year: '2025',
    name: 'DevStart Resources',
    type: 'Web',
    description:
      'Guía y hub de recursos Full-Stack para desarrolladores. Centraliza herramientas, frameworks, documentación y utilidades del ecosistema web moderno.',
    tech: ['Full-Stack', 'Documentation', 'Curated Hub'],
    url: 'https://github.com/Bitxogm/DevStart-Jr',
  },
  {
    id: 'master-portfolio',
    year: '2025',
    name: 'Portfolio Anterior (Matrix)',
    type: 'Web',
    description:
      'Versión previa de mi portfolio personal con estética cyber/matrix, animaciones fluidas y arquitectura de componentes en React.',
    tech: ['React', 'Framer Motion', 'Vite', 'Tailwind'],
    url: 'https://portfolio.bitxodev.com/',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'BitxoDev · Proyectos en Producción',
    role: 'Full-Stack & AI Product Builder',
    period: '2025 - Actualidad',
    description:
      'Diseño, desarrollo y despliegue en producción (VPS Linux, Docker, Cloudflare) de aplicaciones web y móviles con IA integrada: sistemas anti-smishing en Android (SMSGuardian), agentes de voz en tiempo real sobre telefonía SIP/Asterisk (Manolo) y herramientas SaaS con Gemini AI.',
    skills: ['React & Next.js', 'React Native', 'AI Agents & LLMs', 'Asterisk / SIP', 'Docker & VPS'],
  },
  {
    company: 'KeepCoding — Full-Stack Web Bootcamp (Edición XIX)',
    role: 'Full-Stack Web Developer',
    period: 'Mayo 2025 - Marzo 2026',
    description:
      'Especialización intensiva en arquitectura de software moderna, desarrollo Full-Stack con TypeScript, React, Next.js, Node.js, Express, bases de datos relacionales/NoSQL (PostgreSQL, Prisma, MongoDB) y despliegues cloud.',
    skills: ['MERN Stack', 'Next.js 15', 'TypeScript', 'PostgreSQL & Prisma', 'Clean Architecture'],
  },
  {
    company: 'Desarrollo Independiente & Ciberseguridad Labs',
    role: 'Desarrollador Web & Pentesting Enthusiast',
    period: '2023 - 2025',
    description:
      'Construcción de proyectos prácticos en JavaScript/TypeScript y resolución documentada de laboratorios de seguridad ofensiva y CTF (DockerLabs, HackMyVM), aplicando mentalidad de seguridad desde el diseño (DevSecOps).',
    skills: ['JavaScript / TS', 'Linux & Bash', 'Ethical Hacking / CTF', 'DevSecOps'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    skills: [
      'React',
      'Next.js',
      'React Native (Expo / CLI)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5 / CSS3',
    ],
  },
  {
    title: 'Backend & Telefonía',
    skills: [
      'Node.js',
      'Express',
      'Python (asyncio / Flask)',
      'Java / Kotlin (Android Nativo)',
      'PostgreSQL',
      'Prisma',
      'MongoDB',
      'SQLite',
      'Asterisk 20 (SIP / ARI)',
    ],
  },
  {
    title: 'IA & Ciberseguridad',
    skills: [
      'Gemini AI API',
      'Groq & LLMs',
      'Deepgram STT / Edge TTS',
      'AI Voice Agents',
      'VirusTotal & Safe Browsing',
      'Pentesting & CTF',
      'DevSecOps',
    ],
  },
  {
    title: 'Infra & Herramientas',
    skills: [
      'Docker',
      'Linux VPS (Hetzner)',
      'Nginx & Cloudflare',
      'AWS',
      'Git & GitHub',
      'Bash Scripting',
      'Vite',
      'Postman',
    ],
  },
];

export const certificates: CertificateItem[] = [
  {
    id: 'fullstack-bootcamp',
    title: 'Full-Stack Web Development',
    issuer: 'KeepCoding',
    date: '2026',
    url: '/certificates/fullstack.pdf',
    image: 'https://picsum.photos/seed/cert1/400/300',
  },
  {
    id: 'ai-specialization',
    title: 'AI & Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    url: '/certificates/ai.pdf',
    image: 'https://picsum.photos/seed/cert2/400/300',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Architecture (AWS)',
    issuer: 'Amazon Web Services',
    date: '2025',
    url: '/certificates/aws.pdf',
    image: 'https://picsum.photos/seed/cert3/400/300',
  },
];

export const bootcampPractices: BootcampPractice[] = [
  {
    name: 'Luxe Estate',
    description:
      'Plataforma inmobiliaria premium con exploración y gestión de propiedades de lujo, fichas detalladas y navegación fluida.',
    tech: ['Next.js 15', 'TypeScript', 'Prisma', 'Tailwind'],
    github: 'https://github.com/Bitxogm/luxe-estate',
    demo: 'https://luxe-estate-frontend-tau.vercel.app',
  },
  {
    name: 'Beatforge',
    description:
      'Estudio interactivo de producción musical electrónica (house/disco) con sintetizadores directamente en el navegador.',
    tech: ['Next.js', 'Express', 'Prisma', 'Tone.js'],
    github: 'https://github.com/Bitxogm/DJ_Studio',
    badge: 'En desarrollo',
  },
  {
    name: 'CTF Writeups',
    description:
      'Documentación técnica estructurada de máquinas y laboratorios de ciberseguridad ofensiva y pentesting (HackMyVM, DockerLabs).',
    tech: ['Ciberseguridad', 'CTF', 'Pentesting', 'Linux'],
    github: 'https://github.com/Bitxogm/CTF-Writeups',
  },
  {
    name: 'Marketplace Next.js',
    description:
      'Plataforma de anuncios de compraventa con filtrado avanzado y autenticación, usando App Router y PostgreSQL vía Supabase.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Shadcn/ui'],
    github: 'https://github.com/Bitxogm/React-Avanzado-Practica',
    demo: 'https://nextjs.bitxodev.com/',
  },
];
