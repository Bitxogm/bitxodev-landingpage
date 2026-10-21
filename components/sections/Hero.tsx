import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Zap, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  const words = ['Automatizando', 'el Futuro', 'con IA'];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const socials = [
    { Icon: Github, href: 'https://github.com/Bitxogm', label: 'GitHub' },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/',
      label: 'LinkedIn',
    },
    { Icon: Mail, href: 'mailto:vmmoreno1999@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Background Orbs */}
      <div
        className="orb w-[550px] h-[550px] top-[10%] -left-[12%] animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.26) 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[480px] h-[480px] bottom-[10%] -right-[10%] animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.2) 0%, transparent 70%)' }}
      />

      <span className="hero-num">01</span>

      <div className="container max-w-5xl mx-auto z-10 relative">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Status Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="badge">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#4ade80] animate-pulse" />
              Full-Stack Developer · AI & Security Builder
              <Zap size={12} className="text-fuchsia-500" />
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="display font-black leading-[0.92] mb-8 tracking-tight">
            {words.map((w, i) => (
              <motion.span
                key={w}
                variants={item}
                className={`block text-[clamp(3.2rem,9.5vw,7.5rem)] mb-1 ${
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
            className="text-theme-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            Construyendo productos web, apps móviles Android y agentes de IA en tiempo real que
            resuelven problemas reales de automatización y ciberseguridad.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <button
              type="button"
              className="btn-primary"
              onClick={() =>
                document.getElementById('web-projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explorar Proyectos
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() =>
                document.getElementById('mobile-projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Smartphone size={18} className="text-cyan-400" />
              Ver Apps Móviles
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-xs font-semibold display no-underline"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
