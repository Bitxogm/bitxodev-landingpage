
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ChevronDown, FolderClosed, Smartphone, Globe, Github, ShieldCheck, PhoneForwarded, Code2 } from 'lucide-react';
import { featuredProjects, mobileProjects, archiveProjects, bootcampPractices } from '../../lib/constants';

const Projects: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div id="projects" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-500/5 blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4">

        {/* Featured Web Projects */}
        <section id="web-projects" className="min-h-screen py-32 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <p className="section-label text-violet-400">Producción Real</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                Proyectos <br />
                <span className="text-slate-600">Desplegados.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 max-w-xs">
              <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-violet-500/30 pl-6">
                Soluciones de software especializadas en inteligencia artificial, desarrollo full-stack y seguridad en dispositivos móviles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <h4 className="section-label text-slate-500">Web Ecosystem</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Bootcamp Projects */}
        <section id="bootcamp-projects" className="min-h-screen py-32 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="section-label text-emerald-500">Proyectos Destacados</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootcampPractices.map((practice, idx) => (
              <BootcampCard key={idx} practice={practice} index={idx} />
            ))}
          </div>
        </section>

        {/* Mobile Projects */}
        <section id="mobile-projects" className="min-h-screen py-32 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="section-label text-cyan-500">Mobile Ecosystem</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileProjects.map((project, idx) => (
              <MobileProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Archive */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/5" />
              <button
                onClick={() => setShowArchive(!showArchive)}
                className="group flex items-center gap-3 glass px-8 py-4 rounded-full hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500"
              >
                <FolderClosed className="w-4 h-4 text-violet-400" />
                <span className="section-label text-slate-400 group-hover:text-white transition-colors">
                  {showArchive ? 'Cerrar Biblioteca' : 'Ver Archivo de Repositorios'}
                </span>
                <ChevronDown className={`w-4 h-4 text-violet-400 transition-transform duration-500 ${showArchive ? 'rotate-180' : ''}`} />
              </button>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/5" />
            </div>

            <AnimatePresence mode="wait">
              {showArchive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-12">
                    {archiveProjects.map((project, idx) => (
                      <ArchiveCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      className="group relative h-full cursor-pointer"
    >
      <div className="glass-card rounded-[2.5rem] overflow-hidden h-full flex flex-col card-glow transition-all duration-700">
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.1), transparent 70%)`
            )
          }}
        />

        <div className="relative z-10 p-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-10">
            <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-black/20 bg-gradient-to-br ${project.gradient} bg-opacity-10 border-violet-500/10`}>
              {project.icon}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-full flex items-center justify-center hover:border-violet-500/50 hover:text-violet-400 hover:scale-110 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors duration-300 tracking-tight">{project.name}</h3>
          <p className="text-slate-500 text-sm mb-10 leading-relaxed font-light flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {project.tech.map((t: string) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.01 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="group relative cursor-pointer"
  >
    <div className="glass-card rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 card-glow transition-all duration-500">
      {/* Phone mockup */}
      <div className="flex-shrink-0 w-32 h-64 glass rounded-[2rem] border-cyan-500/15 p-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
        <div className="w-1 h-1 bg-white/20 rounded-full mb-4" />
        <div className="flex-grow flex items-center justify-center">
          {project.id === 'sms-guardian' ? (
            <ShieldCheck className="w-12 h-12 text-cyan-400 animate-pulse-slow" />
          ) : (
            <PhoneForwarded className="w-12 h-12 text-indigo-400 animate-pulse-slow" />
          )}
        </div>
        <div className="w-8 h-1 bg-white/10 rounded-full mt-4" />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <span className="glass px-3 py-1 rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest border-cyan-500/20">
            {project.type} App
          </span>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] font-bold text-cyan-400 bg-cyan-500/8 px-2.5 py-1 rounded-full border border-cyan-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const BootcampCard: React.FC<{ practice: any; index: number }> = ({ practice, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.04, y: -4 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-6 rounded-3xl card-glow transition-all duration-300 group flex flex-col h-full cursor-pointer"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform border-emerald-500/20">
        <Code2 className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-3">
        {practice.demo && (
          <a href={practice.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <a href={practice.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="flex items-center gap-2 mb-2">
      <h4 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">{practice.name}</h4>
      {practice.badge && (
        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          {practice.badge}
        </span>
      )}
    </div>
    <p className="text-xs text-slate-500 mb-6 font-light leading-relaxed flex-grow">{practice.description}</p>

    <div className="mt-auto flex flex-wrap gap-2">
      {practice.tech.map((t: string) => (
        <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/8 px-2 py-1 rounded-md border border-emerald-500/20">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ArchiveCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
  <motion.a
    href={project.url}
    target="_blank"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.04, y: -4 }}
    transition={{ delay: index * 0.05 }}
    className="glass-card p-8 rounded-3xl card-glow transition-all duration-300 group flex flex-col relative overflow-hidden h-full cursor-pointer"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl glass ${project.type === 'Mobile' ? 'text-cyan-400 border-cyan-500/20' : 'text-violet-400 border-violet-500/20'}`}>
          {project.type === 'Mobile' ? <Smartphone className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
        </div>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{project.year}</span>
      </div>
      {project.url.includes('github') ? (
        <Github className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors" />
      ) : (
        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors" />
      )}
    </div>

    <h4 className="font-bold text-lg mb-2 text-white group-hover:text-violet-400 transition-colors">{project.name}</h4>
    <p className="text-xs text-slate-500 mb-6 line-clamp-3 font-light leading-relaxed">{project.description}</p>

    <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1">
      {project.tech.map((t: string) => (
        <span key={t} className="text-[9px] text-slate-600 group-hover:text-violet-400/70 font-bold uppercase tracking-tighter transition-colors">#{t}</span>
      ))}
    </div>
  </motion.a>
);

export default Projects;
