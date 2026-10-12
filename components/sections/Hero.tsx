
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const words = ['Automatizando', 'el Futuro', 'con IA'];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24">

      {/* Orbs */}
      <div className="orb" style={{ width: 600, height: 600, top: '10%', left: '-15%', background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)', animation: 'orb 18s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 70%)', animation: 'orb 22s ease-in-out infinite reverse' }} />
      <div className="orb" style={{ width: 300, height: 300, top: '40%', right: '30%', background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)', animation: 'orb 15s ease-in-out 4s infinite' }} />

      {/* Big decorative number */}
      <span className="hero-num">01</span>

      <div className="container max-w-5xl mx-auto z-10 relative">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Status badge */}
          <motion.div variants={item} style={{ marginBottom: 32 }}>
            <span className="badge">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }} />
              Full Stack Developer · AI Enthusiast
              <Zap size={12} style={{ color: '#d946ef' }} />
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, lineHeight: 0.9, marginBottom: 32, letterSpacing: '-0.03em' }}>
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={item}
                className={i === 2 ? 'grad-text' : ''}
                style={{
                  display: 'block',
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  color: i === 2 ? undefined : '#f1f5f9',
                  marginBottom: 4,
                }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: 540, marginBottom: 48, lineHeight: 1.75, fontWeight: 300 }}
          >
            Creando herramientas inteligentes para simplificar problemas complejos.
            Especializado en el desarrollo de agentes de IA y automatización de procesos.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <button className="btn-primary" onClick={() => document.getElementById('web-projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explorar Proyectos
              <ArrowRight size={18} />
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contactar
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {[
              { Icon: Github,   href: 'https://github.com/Bitxogm', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/', label: 'LinkedIn' },
              { Icon: Mail,     href: 'mailto:vmmoreno1999@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 18px',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#64748b',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  fontFamily: 'Outfit, sans-serif',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#818cf8';
                  el.style.borderColor = 'rgba(99,102,241,0.4)';
                  el.style.background = 'rgba(99,102,241,0.08)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#64748b';
                  el.style.borderColor = 'rgba(255,255,255,0.06)';
                  el.style.background = 'transparent';
                }}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <span style={{ fontFamily: 'Outfit', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#334155' }}>scroll</span>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, #6366f1, transparent)', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 5, height: 5, borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 8px #6366f1' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
