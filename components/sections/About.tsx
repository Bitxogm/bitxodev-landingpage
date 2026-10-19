import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const stats = [
    {
      value: '5+',
      label: 'Apps en Producción',
      Icon: Layers,
      accent: 'text-indigo-400 border-indigo-500/30',
    },
    {
      value: '20+',
      label: 'Repos & CTF Labs',
      Icon: ShieldCheck,
      accent: 'text-cyan-400 border-cyan-500/30',
    },
    {
      value: '100%',
      label: 'Enfoque IA & Sec',
      Icon: Sparkles,
      accent: 'text-fuchsia-400 border-fuchsia-500/30',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden"
    >
      <div
        className="orb w-[500px] h-[500px] top-[15%] -left-[10%]"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[420px] h-[420px] bottom-[10%] right-[5%]"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.11) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Enlarged Profile Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="aurora-wrap rounded-[2.5rem] w-full max-w-[420px] lg:max-w-[460px]">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#0d0d1f] relative shadow-2xl">
                {!loaded && !error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d1f]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                      className="w-20 h-20 rounded-full border-2 border-dashed border-indigo-500/40 flex items-center justify-center"
                    >
                      <Cpu size={32} className="text-indigo-500" />
                    </motion.div>
                  </div>
                )}

                <img
                  src="/profile.png"
                  alt="Victor Manuel Gonzalez"
                  onLoad={() => setLoaded(true)}
                  onError={() => setError(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center gap-2">
                  <span className="bg-indigo-500/25 backdrop-blur-md border border-indigo-400/40 text-indigo-200 px-3.5 py-1.5 rounded-full text-[11px] display font-bold tracking-wider uppercase">
                    Full-Stack · IA · Mobile
                  </span>
                  <span className="flex items-center gap-1.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 px-3 py-1.5 rounded-full text-[11px] display font-bold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Equal-Height Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <p className="sec-label mb-3">Sobre mí</p>

            <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-theme">
              Victor Manuel <br />
              <span className="grad-text">Gonzalez.</span>
            </h2>

            <blockquote className="border-l-4 border-indigo-500 pl-5 mb-6 text-theme-secondary italic text-base md:text-lg leading-relaxed">
              "Resolviendo problemas reales con arquitecturas limpias, agentes de IA y seguridad desde el diseño."
            </blockquote>

            <p className="text-theme-secondary leading-relaxed mb-4 text-base font-normal">
              Desarrollador <strong className="text-theme font-semibold">Full-Stack & Mobile</strong> especializado en integrar{' '}
              <strong className="text-theme font-semibold">Inteligencia Artificial</strong> y{' '}
              <strong className="text-theme font-semibold">Ciberseguridad</strong> en productos listos para producción.
            </p>
            <p className="text-theme-secondary leading-relaxed mb-8 text-base font-normal">
              Construyo desde plataformas SaaS con Next.js y TypeScript hasta aplicaciones Android nativas que filtran amenazas en milisegundos o conectan telefonía SIP/Asterisk con modelos de voz en tiempo real.
            </p>

            {/* Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-indigo-500/15">
              <div className="glass-card p-4 rounded-2xl">
                <p className="display font-bold text-xs uppercase tracking-widest text-indigo-400 mb-1">
                  Filosofía
                </p>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  Si una tarea repetitiva se puede automatizar con IA, se automatiza.
                </p>
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <p className="display font-bold text-xs uppercase tracking-widest text-cyan-400 mb-1">
                  Arquitectura
                </p>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  Código modular, privacidad local y despliegues propios en Linux VPS & Docker.
                </p>
              </div>
            </div>

            {/* Equal-Height Stats */}
            <div className="grid grid-cols-3 gap-4 auto-rows-fr">
              {stats.map(({ value, label, Icon, accent }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-center h-full border ${accent}`}
                >
                  <Icon size={18} className="mb-2 opacity-90" />
                  <p className="display font-black text-2xl sm:text-3xl text-theme mb-1">{value}</p>
                  <p className="display text-[10px] sm:text-xs font-bold uppercase tracking-wider text-theme-muted">
                    {label}
                  </p>
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
