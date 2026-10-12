
import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../lib/constants';

const catConfig: Record<string, { tagClass: string; color: string; dot: string; num: string }> = {
  'Frontend':     { tagClass: 'tag-indigo',  color: '#818cf8', dot: '#6366f1', num: '01' },
  'Backend':      { tagClass: 'tag-cyan',    color: '#67e8f9', dot: '#22d3ee', num: '02' },
  'Herramientas': { tagClass: 'tag-fuchsia', color: '#f0abfc', dot: '#d946ef', num: '03' },
};

const Skills: React.FC = () => (
  <section id="skills" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 16px', position: 'relative', overflow: 'hidden' }}>
    <div className="orb" style={{ width: 500, height: 500, bottom: '10%', left: '5%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
    <div className="orb" style={{ width: 300, height: 300, top: '15%', right: '10%', background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)' }} />

    {/* Marquee strip */}
    <div style={{ overflow: 'hidden', position: 'absolute', top: 0, left: 0, right: 0, height: 48, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="marquee-track">
        {['React', '·', 'Node.js', '·', 'TypeScript', '·', 'Next.js', '·', 'MongoDB', '·', 'PostgreSQL', '·', 'Docker', '·', 'AWS', '·', 'Python', '·', 'AI / ML', '·',
          'React', '·', 'Node.js', '·', 'TypeScript', '·', 'Next.js', '·', 'MongoDB', '·', 'PostgreSQL', '·', 'Docker', '·', 'AWS', '·', 'Python', '·', 'AI / ML', '·'].map((t, i) => (
          <span key={i} className={`marquee-item ${t === '·' ? 'marquee-accent' : ''}`}>{t}</span>
        ))}
      </div>
    </div>

    <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <p className="sec-label" style={{ marginBottom: 16 }}>Stack tecnológico</p>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.03em', color: '#f1f5f9', lineHeight: 1 }}>
          Technical <span className="grad-text">Arsenal.</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {skillCategories.map((cat, idx) => {
          const cfg = catConfig[cat.title] ?? { tagClass: 'tag-indigo', color: '#818cf8', dot: '#6366f1', num: '0' + (idx + 1) };
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                background: '#0d0d1f',
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: 28,
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = cfg.dot + '55';
                el.style.boxShadow = `0 16px 50px ${cfg.dot}18`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Background number watermark */}
              <span style={{ position: 'absolute', top: 16, right: 20, fontFamily: 'Outfit', fontWeight: 900, fontSize: '4rem', color: 'transparent', WebkitTextStroke: `1px ${cfg.dot}18`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                {cfg.num}
              </span>

              {/* Category label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: cfg.dot, boxShadow: `0 0 12px ${cfg.dot}` }} />
                <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: cfg.color }}>
                  {cat.title}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.04 + idx * 0.08 }}
                    className={`skill-tag ${cfg.tagClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
