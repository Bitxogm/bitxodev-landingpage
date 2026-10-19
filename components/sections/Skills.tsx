import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../lib/constants';

const catConfig: Record<string, { tagClass: string; color: string; dot: string; num: string }> = {
  'Frontend & Mobile':   { tagClass: 'tag-indigo',  color: '#818cf8', dot: '#6366f1', num: '01' },
  'Backend & Telefonía': { tagClass: 'tag-cyan',    color: '#22d3ee', dot: '#06b6d4', num: '02' },
  'IA & Ciberseguridad': { tagClass: 'tag-emerald', color: '#34d399', dot: '#10b981', num: '03' },
  'Infra & Herramientas':{ tagClass: 'tag-fuchsia', color: '#e879f9', dot: '#d946ef', num: '04' },
};

const marqueeItems = [
  'React', '·', 'Next.js', '·', 'React Native', '·', 'TypeScript', '·',
  'Gemini AI', '·', 'Asterisk SIP', '·', 'Python', '·', 'Docker', '·', 'Cybersecurity', '·',
];

const Skills: React.FC = () => (
  <section
    id="skills"
    className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden"
  >
    {/* Top Marquee Strip */}
    <div className="overflow-hidden absolute top-0 left-0 right-0 h-12 flex items-center border-b border-indigo-500/10">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((t, i) => (
          <span key={i} className={`marquee-item ${t === '·' ? 'marquee-accent' : ''}`}>
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto w-full relative z-10 pt-6">
      <div className="mb-12">
        <p className="sec-label mb-3">Stack tecnológico</p>
        <h2 className="display font-black text-4xl sm:text-6xl tracking-tight text-theme leading-none">
          Technical <span className="grad-text">Arsenal.</span>
        </h2>
      </div>

      {/* 2x2 Equal-Height Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {skillCategories.map((cat, idx) => {
          const cfg = catConfig[cat.title] ?? {
            tagClass: 'tag-indigo',
            color: '#818cf8',
            dot: '#6366f1',
            num: `0${idx + 1}`,
          };
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden card-glow h-full flex flex-col justify-between"
            >
              <span
                className="absolute top-4 right-5 display font-black text-6xl pointer-events-none select-none"
                style={{ color: 'transparent', WebkitTextStroke: `1px ${cfg.dot}28` }}
              >
                {cfg.num}
              </span>

              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: cfg.dot, boxShadow: `0 0 12px ${cfg.dot}` }}
                  />
                  <span
                    className="display font-extrabold text-xs uppercase tracking-[0.22em]"
                    style={{ color: cfg.color }}
                  >
                    {cat.title}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`skill-tag ${cfg.tagClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
