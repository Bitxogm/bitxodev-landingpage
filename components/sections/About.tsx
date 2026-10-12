
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, BookOpen, Zap, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const stats = [
    { value: '3+',   label: 'Años aprendiendo', Icon: BookOpen, color: '#818cf8' },
    { value: '10+',  label: 'Proyectos labs',   Icon: Zap,      color: '#f0abfc' },
    { value: '100%', label: 'Curiosidad',        Icon: Sparkles, color: '#67e8f9' },
  ];

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 16px', position: 'relative', overflow: 'hidden' }}>
      {/* BG accent */}
      <div className="orb" style={{ width: 500, height: 500, top: '20%', left: '-10%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: '10%', right: '5%', background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* === IMAGE === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="aurora-wrap" style={{ borderRadius: '2.5rem', width: 320, maxWidth: '100%' }}>
              <div style={{
                aspectRatio: '3/4',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                background: '#0d0d1f',
                position: 'relative',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              }}>
                {/* Loading spinner */}
                {!loaded && !error && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0d0d1f' }}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                      style={{ width: 80, height: 80, borderRadius: '50%', border: '2px dashed rgba(99,102,241,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Cpu size={32} color="#6366f1" />
                    </motion.div>
                  </div>
                )}

                <img
                  src="/profile.png"
                  alt="Victor Manuel Gonzalez"
                  onLoad={() => setLoaded(true)}
                  onError={() => setError(true)}
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 1s ease, transform 0.5s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                />

                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,15,0.85) 0%, transparent 50%)', pointerEvents: 'none' }} />

                {/* Bottom badges */}
                <div style={{ position: 'absolute', bottom: 20, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc', padding: '5px 14px', borderRadius: 99, fontSize: '0.65rem', fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Full-Stack · IA
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', padding: '5px 12px', borderRadius: 99, fontSize: '0.65rem', fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === TEXT === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="sec-label" style={{ marginBottom: 16 }}>Sobre mí</p>

            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 32, color: '#f1f5f9' }}>
              Victor Manuel<br />
              <span className="grad-text">Gonzalez.</span>
            </h2>

            <blockquote style={{ borderLeft: '3px solid #6366f1', paddingLeft: 20, marginBottom: 24, color: '#94a3b8', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.7 }}>
              "Facilitando problemas reales mediante herramientas inteligentes."
            </blockquote>

            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem', fontWeight: 300 }}>
              Desarrollador Full-Stack apasionado por la <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>Inteligencia Artificial</strong>. Mi enfoque se centra en crear soluciones que automaticen tareas tediosas, permitiendo a las personas enfocarse en lo que realmente importa.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 40, fontSize: '0.95rem', fontWeight: 300 }}>
              Desde mi etapa autodidacta hasta completar mi formación intensiva en el bootcamp, he evolucionado hacia un perfil capaz de construir desde interfaces intuitivas hasta despliegues eficientes en servidor.
            </p>

            {/* Philosophy grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#818cf8', marginBottom: 6 }}>Filosofía</p>
                <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.6 }}>Si se puede automatizar, se debe automatizar.</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#818cf8', marginBottom: 6 }}>Enfoque</p>
                <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.6 }}>IA como motor de eficiencia y despliegues robustos.</p>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 12 }}>
              {stats.map(({ value, label, Icon, color }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.04 }}
                  style={{
                    flex: 1,
                    background: '#0d0d1f',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    padding: '20px 16px',
                    textAlign: 'center',
                    cursor: 'default',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}44`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${color}22`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <Icon size={16} style={{ color, margin: '0 auto 8px' }} />
                  <p style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.5rem', color: '#f1f5f9', margin: '0 0 4px' }}>{value}</p>
                  <p style={{ fontFamily: 'Outfit', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#334155' }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
