import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Zap,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  Bot,
  Code2,
  FileText,
  Sparkles,
} from 'lucide-react';

interface HeroSlide {
  id: string;
  badge: string;
  category: 'mobile' | 'web';
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  accent: string;
  images?: [string, string];
  liveUrl?: string;
  targetSection: string;
  metricLabel: string;
  metricValue: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'sms-guardian',
    badge: 'Android App · Ciberseguridad',
    category: 'mobile',
    title: 'SMSGuardian',
    subtitle: 'Anti-Smishing con Motor Híbrido + Gemini 2.5',
    description:
      'Intercepta SMS fraudulentos en tiempo real mediante heurística local, detección de homoglyphs Unicode y verificación cloud.',
    tech: ['React Native', 'Java/Kotlin', 'SQLite', 'Gemini 2.5', 'VirusTotal'],
    accent: 'from-emerald-500/25 via-teal-500/15 to-cyan-500/20',
    images: ['/carousels/sms-guardian/slide-01.png', '/carousels/sms-guardian/slide-02.png'],
    targetSection: 'mobile-projects',
    metricLabel: 'Motor de Análisis',
    metricValue: '3 Fases (Offline + IA)',
  },
  {
    id: 'call-spam-blocker',
    badge: 'Android App · Voz IA en Vivo',
    category: 'mobile',
    title: 'Call Spam IA Blocker',
    subtitle: 'Filtrado CallScreening + Agente "Manolo" (SIP)',
    description:
      'Bloquea llamadas spam en milisegundos y desvía a los estafadores a un abuelo gallego con IA de voz en tiempo real (~300 ms).',
    tech: ['React Native', 'Java', 'Asterisk 20 SIP', 'Deepgram STT', 'Groq LLM'],
    accent: 'from-cyan-500/25 via-blue-500/15 to-indigo-500/20',
    images: [
      '/carousels/call-spam-blocker/slide-01.png',
      '/carousels/call-spam-blocker/slide-02.png',
    ],
    targetSection: 'mobile-projects',
    metricLabel: 'Latencia de Voz IA',
    metricValue: '~300 ms en Tiempo Real',
  },
  {
    id: 'agentlogic',
    badge: 'Web App · En Producción',
    category: 'web',
    title: 'AgentLogic Academy',
    subtitle: 'Aprendizaje de Programación Asistido por IA',
    description:
      'Plataforma interactiva con retos de lógica gamificados, tutoría inteligente en tiempo real y evaluación automatizada.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    accent: 'from-indigo-500/25 via-violet-500/15 to-fuchsia-500/20',
    liveUrl: 'https://agentlogic.bitxodev.com/',
    targetSection: 'web-projects',
    metricLabel: 'Estado del Servicio',
    metricValue: 'Online · VPS Hetzner',
  },
  {
    id: 'codeai',
    badge: 'Web App · En Producción',
    category: 'web',
    title: 'CodeAI Editor',
    subtitle: 'Refactorización, Tests y Traducción de Código',
    description:
      'Analiza repositorios, modulariza funciones complejas y genera suites de tests unitarios automáticamente con IA.',
    tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Tailwind'],
    accent: 'from-violet-500/25 via-fuchsia-500/15 to-pink-500/20',
    liveUrl: 'https://codeai.bitxodev.com/',
    targetSection: 'web-projects',
    metricLabel: 'Capacidades IA',
    metricValue: 'Refactor + Unit Tests',
  },
  {
    id: 'cvgenerator',
    badge: 'Web App · En Producción',
    category: 'web',
    title: 'AI CV Generator',
    subtitle: 'Currículums Optimizados para Filtros ATS',
    description:
      'Generador inteligente de CVs profesionales adaptados a ofertas técnicas con exportación directa en PDF.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'PDF-Lib'],
    accent: 'from-fuchsia-500/25 via-rose-500/15 to-orange-500/20',
    liveUrl: 'https://talent.bitxodev.com/',
    targetSection: 'web-projects',
    metricLabel: 'Optimización',
    metricValue: 'ATS-Ready + Export PDF',
  },
];

const Hero: React.FC = () => {
  const words = ['Automatizando', 'el Futuro', 'con IA'];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const socials = [
    { Icon: Github, href: 'https://github.com/Bitxogm', label: 'GitHub' },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/',
      label: 'LinkedIn',
    },
    { Icon: Mail, href: 'mailto:vmmoreno1999@gmail.com', label: 'vmmoreno1999@gmail.com' },
  ];

  const stats = [
    { value: '5+', label: 'Apps IA & Móvil' },
    { value: '2', label: 'Apps Android Nativas' },
    { value: '24/7', label: 'Self-Hosted en VPS' },
  ];

  const activeSlide = heroSlides[currentSlide];

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-10"
    >
      {/* Background Orbs */}
      <div
        className="orb w-[550px] h-[550px] top-[8%] -left-[12%] animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.26) 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[480px] h-[480px] bottom-[8%] -right-[10%] animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 70%)' }}
      />

      <span className="hero-num">01</span>

      <div className="container max-w-7xl mx-auto z-10 relative">
        {/* Main Framed Glass Hero Container */}
        <div className="glass-card rounded-[2.5rem] border border-indigo-500/35 shadow-[0_24px_90px_rgba(99,102,241,0.18)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top & Bottom luminous frame accents */}
          <div className="pointer-events-none absolute inset-x-16 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-fuchsia-500 opacity-80" />
          <div className="pointer-events-none absolute inset-x-24 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Intro + Metrics + CTAs */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col justify-between min-w-0"
            >
              {/* Status Badge */}
              <motion.div variants={item} className="mb-6">
                <span className="badge max-w-full flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#4ade80] animate-pulse" />
                  Full-Stack Developer · AI & Security Builder
                  <Zap size={13} className="text-fuchsia-500" />
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="display font-bold leading-[0.95] mb-6 tracking-tight">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    variants={item}
                    className={`block text-[clamp(2.2rem,5.5vw,5rem)] mb-1 ${
                      i === 2 ? 'grad-text' : 'text-theme'
                    }`}
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p
                variants={item}
                className="text-theme-secondary text-base sm:text-lg md:text-xl max-w-xl mb-7 leading-relaxed font-normal"
              >
                Construyendo aplicaciones web, apps móviles Android nativas y agentes de IA en
                tiempo real que resuelven problemas reales de automatización y ciberseguridad.
              </motion.p>

              {/* Framed Quick Metrics Row */}
              <motion.div
                variants={item}
                className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mb-7"
              >
                {stats.map((st) => (
                  <div
                    key={st.label}
                    className="glass rounded-2xl px-2.5 sm:px-4 py-2.5 sm:py-3.5 border border-indigo-500/25 flex flex-col min-w-0"
                  >
                    <span className="display font-bold text-xl sm:text-2xl md:text-3xl grad-text-2 leading-tight">
                      {st.value}
                    </span>
                    <span className="font-hacker text-[10px] sm:text-xs font-bold text-theme-secondary mt-1 truncate">
                      {st.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-wrap gap-3.5 mb-7">
                <button
                  type="button"
                  className="btn-primary w-full sm:w-auto justify-center"
                  onClick={() => {
                    const el = document.getElementById('web-projects');
                    if (el) {
                      window.scrollTo({
                        top: el.getBoundingClientRect().top + window.scrollY,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  Explorar Proyectos
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn-ghost w-full sm:w-auto justify-center"
                  onClick={() => {
                    const el = document.getElementById('mobile-projects');
                    if (el) {
                      window.scrollTo({
                        top: el.getBoundingClientRect().top + window.scrollY,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <Smartphone size={18} className="text-cyan-400" />
                  Ver Apps Móviles
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={item} className="flex flex-wrap items-center gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="font-hacker flex items-center gap-2 px-3.5 py-2.5 rounded-xl glass text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-xs font-bold no-underline max-w-full truncate"
                  >
                    <Icon size={15} className="flex-shrink-0" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive Project Showcase Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 min-w-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="glass rounded-[2rem] border border-indigo-500/35 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] relative overflow-hidden">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 font-hacker text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                      <Sparkles size={13} />
                      SHOWCASE_ACTIVO
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-hacker text-xs font-bold text-theme-muted mr-1">
                      0{currentSlide + 1} / 0{heroSlides.length}
                    </span>
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Proyecto anterior"
                      className="w-7 h-7 rounded-lg glass flex items-center justify-center text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/40 transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Siguiente proyecto"
                      className="w-7 h-7 rounded-lg glass flex items-center justify-center text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/40 transition-colors cursor-pointer"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Slide Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="flex flex-col"
                  >
                    {/* Visual Preview Area */}
                    <div
                      className={`relative rounded-2xl overflow-hidden border border-indigo-500/25 bg-gradient-to-br ${activeSlide.accent} p-3.5 mb-4 h-[230px] flex items-center justify-center`}
                    >
                      {activeSlide.images ? (
                        <div className="grid grid-cols-2 gap-3 w-full h-full items-center justify-items-center">
                          {activeSlide.images.map((imgSrc, idx) => (
                            <img
                              key={imgSrc}
                              src={imgSrc}
                              alt={`${activeSlide.title} slide ${idx + 1}`}
                              className="h-[200px] w-auto object-contain rounded-xl border border-white/15 shadow-lg bg-[#080814]"
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-xl bg-[#090919]/90 border border-indigo-500/30 p-5 flex flex-col justify-between text-left">
                          <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                              {activeSlide.id === 'agentlogic' && <Bot size={24} />}
                              {activeSlide.id === 'codeai' && <Code2 size={24} />}
                              {activeSlide.id === 'cvgenerator' && <FileText size={24} />}
                            </div>
                            <span className="font-hacker px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              ● LIVE_APP
                            </span>
                          </div>
                          <div>
                            <div className="font-hacker text-xs text-indigo-300/90 mb-1">
                              $ curl -I {activeSlide.liveUrl}
                            </div>
                            <div className="font-hacker text-xs text-emerald-400">
                              HTTP/2 200 OK · Gemini AI Active
                            </div>
                          </div>
                          <div className="font-hacker flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-300">
                            <span>{activeSlide.metricLabel}</span>
                            <span className="font-bold text-cyan-400">
                              {activeSlide.metricValue}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Badge + Metric */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-hacker px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
                        {activeSlide.category === 'mobile' ? (
                          activeSlide.id === 'sms-guardian' ? (
                            <ShieldCheck size={12} className="text-emerald-400" />
                          ) : (
                            <PhoneCall size={12} className="text-cyan-400" />
                          )
                        ) : (
                          <Sparkles size={12} className="text-fuchsia-400" />
                        )}
                        {activeSlide.badge}
                      </span>
                      <span className="font-hacker text-xs font-bold text-cyan-400">
                        {activeSlide.metricValue}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="display text-2xl font-bold text-theme mb-1">
                      {activeSlide.title}
                    </h3>
                    <p className="font-hacker text-xs font-bold text-indigo-400 mb-2">
                      {activeSlide.subtitle}
                    </p>
                    <p className="text-theme-secondary text-sm leading-relaxed mb-4 min-h-[3.5rem]">
                      {activeSlide.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {activeSlide.tech.map((t) => (
                        <span key={t} className="tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between pt-3 border-t border-indigo-500/15">
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById(activeSlide.targetSection);
                          if (el) {
                            window.scrollTo({
                              top: el.getBoundingClientRect().top + window.scrollY,
                              behavior: 'smooth',
                            });
                          }
                        }}
                        className="font-hacker text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
                      >
                        &gt; VER_EN_PORTAFOLIO
                        <ArrowRight size={14} />
                      </button>

                      {activeSlide.liveUrl && (
                        <a
                          href={activeSlide.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-hacker text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 no-underline"
                        >
                          ABRIR_DEMO
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Progress Dots */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-2">
                  {heroSlides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Ver ${s.title}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                        idx === currentSlide
                          ? 'w-7 bg-gradient-to-r from-indigo-500 to-fuchsia-500'
                          : 'w-2 bg-indigo-500/25 hover:bg-indigo-500/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
