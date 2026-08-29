
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ChevronDown, FolderClosed, Smartphone, Globe, Github, ShieldCheck, PhoneForwarded, Code2 } from 'lucide-react';
import { featuredProjects, mobileProjects, archiveProjects, bootcampPractices } from '../../lib/constants';

const Projects: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div id="projects" className="relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Featured Web Grid Section */}
        <section id="web-projects" className="min-h-screen py-32 flex flex-col justify-center">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-6">
              <h3 className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs">Producción Real</h3>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white">Proyectos <br/> <span className="text-slate-400 dark:text-slate-600">Desplegados.</span></h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-slate-600 dark:text-slate-400 max-w-xs text-sm leading-relaxed border-l border-slate-200 dark:border-white/10 pl-6">
                Soluciones de software especializadas en inteligencia artificial, desarrollo full-stack y seguridad en dispositivos móviles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Web Ecosystem</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Bootcamp Projects Section */}
        <section id="bootcamp-projects" className="min-h-screen py-32 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">Proyectos Destacados</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootcampPractices.map((practice, idx) => (
              <BootcampCard key={idx} practice={practice} index={idx} />
            ))}
          </div>
        </section>

        {/* Mobile Applications Section */}
        <section id="mobile-projects" className="min-h-screen py-32 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Mobile Ecosystem</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileProjects.map((project, idx) => (
              <MobileProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Archive Section - Integrated here to keep it within a snapping section or as a separate one if preferred */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200 dark:to-white/10" />
              <button 
                onClick={() => setShowArchive(!showArchive)}
                className="group flex items-center gap-3 glass px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-500 shadow-xl shadow-purple-500/5 border-slate-200 dark:border-white/5"
              >
                <FolderClosed className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {showArchive ? 'Cerrar Biblioteca' : 'Ver Archivo de Repositorios'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${showArchive ? 'rotate-180' : ''}`} />
              </button>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200 dark:to-white/10" />
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

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
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
      whileHover={{ scale: 1.02, rotate: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      className="group relative h-full cursor-pointer"
    >
      <div className="glass rounded-[2.5rem] overflow-hidden h-full flex flex-col border-slate-200 dark:border-white/5 group-hover:border-purple-500/30 transition-all duration-700">
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.12), transparent 70%)`
            )
          }}
        />

        <div className="relative z-10 p-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-10">
            <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-black/20 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
              {project.icon}
            </div>
            <a 
              href={project.url} 
              target="_blank" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-500 hover:scale-110"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-white transition-colors tracking-tight">{project.name}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-10 leading-relaxed font-light flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/5">
            {project.tech.map((t: string) => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02, rotate: -1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative cursor-pointer"
    >
      <div className="glass rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 bg-gradient-to-br from-transparent to-blue-500/[0.02]">
        {/* Phone Mockup Style Left Side */}
        <div className="flex-shrink-0 w-32 h-64 glass rounded-[2rem] border-slate-200 dark:border-white/10 p-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white/20 rounded-full mb-4" />
          <div className="flex-grow flex items-center justify-center">
            {project.id === 'sms-guardian' ? (
              <ShieldCheck className="w-12 h-12 text-blue-400 animate-pulse-slow" />
            ) : (
              <PhoneForwarded className="w-12 h-12 text-indigo-400 animate-pulse-slow" />
            )}
          </div>
          <div className="w-8 h-1 bg-slate-400 dark:bg-white/10 rounded-full mt-4" />
        </div>

        <div className="flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="glass px-3 py-1 rounded-full text-[10px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-widest border-blue-500/20">
              {project.type} App
            </span>
            <a href={project.url} target="_blank" className="text-slate-500 hover:text-blue-600 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg border border-slate-200 dark:border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BootcampCard: React.FC<{ practice: any, index: number }> = ({ practice, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass p-6 rounded-3xl border-slate-200 dark:border-white/5 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group flex flex-col h-full cursor-pointer"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
        <Code2 className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-3">
        {practice.demo && (
          <a href={practice.demo} target="_blank" className="text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <a href={practice.github} target="_blank" className="text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="flex items-center gap-2 mb-2">
      <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{practice.name}</h4>
      {practice.badge && (
        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          {practice.badge}
        </span>
      )}
    </div>
    <p className="text-xs text-slate-600 dark:text-slate-500 mb-6 font-light leading-relaxed">{practice.description}</p>
    
    <div className="mt-auto flex flex-wrap gap-2">
      {practice.tech.map((t: string) => (
        <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md border border-slate-200 dark:border-white/5">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ArchiveCard: React.FC<{ project: any, index: number }> = ({ project, index }) => (
  <motion.a
    href={project.url}
    target="_blank"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, rotate: -2 }}
    transition={{ delay: index * 0.05 }}
    className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all group flex flex-col relative overflow-hidden h-full cursor-pointer"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl glass ${project.type === 'Mobile' ? 'text-blue-400' : 'text-purple-400'}`}>
          {project.type === 'Mobile' ? (
            <Smartphone className="w-4 h-4" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
        </div>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{project.year}</span>
      </div>
      {project.url.includes('github') ? (
        <Github className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
      ) : (
        <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
      )}
    </div>

    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h4>
    <p className="text-xs text-slate-500 mb-6 line-clamp-3 font-light leading-relaxed">{project.description}</p>
    
    <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1">
      {project.tech.map((t: string) => (
        <span key={t} className="text-[9px] text-slate-600 group-hover:text-blue-500/70 font-bold uppercase tracking-tighter transition-colors">#{t}</span>
      ))}
    </div>
  </motion.a>
);

export default Projects;
