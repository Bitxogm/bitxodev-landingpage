import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../../lib/constants';

const Experience: React.FC = () => (
  <section
    id="experience"
    className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden"
  >
    <div
      className="orb w-[420px] h-[420px] top-[20%] right-0"
      style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
    />

    <div className="max-w-4xl mx-auto w-full relative z-10">
      {/* Header */}
      <div className="mb-14">
        <p className="sec-label mb-3">Carrera profesional</p>
        <h2 className="display font-black text-4xl sm:text-6xl tracking-tight text-theme leading-none">
          Mi <span className="grad-text">Trayectoria.</span>
        </h2>
        <p className="text-theme-secondary mt-4 max-w-lg leading-relaxed">
          Evolución continua construyendo y desplegando aplicaciones reales de extremo a extremo.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-10 sm:pl-12">
        <div className="tl-line" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              className="relative"
            >
              <div
                className={`tl-dot ${idx === 0 ? 'active' : ''}`}
                style={{ position: 'absolute', left: -36, top: 28 }}
              />

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="exp-card relative"
              >
                {idx === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-t-3xl" />
                )}

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 px-3.5 py-1 rounded-full">
                    <Briefcase size={12} className="text-indigo-400" />
                    <span className="display text-[11px] font-bold text-indigo-400 tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>
                  {idx === 0 && (
                    <span className="flex items-center gap-1.5 text-[11px] display font-bold text-emerald-500 tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Actual
                    </span>
                  )}
                </div>

                <h3 className="display font-extrabold text-xl sm:text-2xl text-theme mb-1">
                  {exp.role}
                </h3>
                <p className="text-indigo-400 font-semibold text-sm mb-3">{exp.company}</p>
                <p className="text-theme-secondary text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="tech-pill">
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
