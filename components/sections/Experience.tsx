
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../lib/constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => (
  <section id="experience" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 16px', position: 'relative', overflow: 'hidden' }}>
    <div className="orb" style={{ width: 400, height: 400, top: '20%', right: '0%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

    <div style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <p className="sec-label" style={{ marginBottom: 16 }}>Carrera profesional</p>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.03em', color: '#f1f5f9', lineHeight: 1 }}>
          Mi <span className="grad-text">Trayectoria.</span>
        </h2>
        <p style={{ color: '#475569', marginTop: 20, maxWidth: 480, lineHeight: 1.7, fontWeight: 300 }}>
          Experiencia profesional construyendo productos digitales de principio a fin.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 48 }}>
        <div className="tl-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ position: 'relative' }}
            >
              {/* Dot */}
              <div className={`tl-dot ${idx === 0 ? 'active' : ''}`} style={{ position: 'absolute', left: -36, top: 28 }} />

              {/* Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="exp-card"
              >
                {/* Top bar accent */}
                {idx === 0 && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #6366f1, #d946ef)', borderRadius: '24px 24px 0 0' }} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', padding: '5px 14px', borderRadius: 99 }}>
                    <Briefcase size={12} color="#818cf8" />
                    <span style={{ fontFamily: 'Outfit', fontSize: '0.65rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{exp.period}</span>
                  </div>
                  {idx === 0 && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.65rem', fontFamily: 'Outfit', fontWeight: 700, color: '#4ade80', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
                      Más reciente
                    </span>
                  )}
                </div>

                <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.5rem', color: '#f1f5f9', marginBottom: 4 }}>{exp.role}</h3>
                <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.875rem', marginBottom: 16 }}>{exp.company}</p>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 24 }}>{exp.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {exp.skills.map(s => (
                    <span key={s} style={{ padding: '5px 14px', borderRadius: 99, fontSize: '0.7rem', fontFamily: 'Outfit', fontWeight: 700, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
