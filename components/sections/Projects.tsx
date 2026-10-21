import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FolderClosed } from 'lucide-react';
import {
  featuredProjects,
  mobileProjects,
  archiveProjects,
  bootcampPractices,
} from '../../lib/constants';
import type { MobileProject } from '../../types/portfolio';
import ProjectCard from '../projects/ProjectCard';
import MobileProjectCard from '../projects/MobileProjectCard';
import CarouselModal from '../projects/CarouselModal';
import BootcampCard from '../projects/BootcampCard';
import ArchiveCard from '../projects/ArchiveCard';

const Projects: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);
  const [activeModal, setActiveModal] = useState<{
    project: MobileProject;
    initialSlide: number;
  } | null>(null);

  return (
    <div id="projects" className="relative">
      <div className="orb w-[900px] h-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500/5" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4">
        {/* 1. Featured Web Projects */}
        <section id="web-projects" className="min-h-screen py-24 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <p className="section-label text-indigo-400">Producción Real</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-theme leading-[0.95]">
                Proyectos <span className="grad-text">Desplegados.</span>
              </h2>
            </div>
            <p className="text-theme-secondary text-sm leading-relaxed border-l-2 border-indigo-500/40 pl-5 max-w-sm">
              Soluciones especializadas en inteligencia artificial, desarrollo full-stack y ciberseguridad móvil.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h4 className="section-label text-theme-muted">Web Ecosystem</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* 2. Mobile Projects & LinkedIn PDF Carousels */}
        <section id="mobile-projects" className="min-h-screen py-24 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="section-label text-cyan-500 mb-2">Android · IA · Seguridad</p>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight text-theme">
                Mobile <span className="grad-text">Ecosystem.</span>
              </h3>
            </div>
            <p className="text-xs text-theme-secondary max-w-sm">
              Desliza cada presentación técnica o pulsa en <strong className="text-cyan-400">Ampliar</strong> para ver el carrusel completo en alta resolución.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
            {mobileProjects.map((project, idx) => (
              <MobileProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenModal={(slideIndex: number) =>
                  setActiveModal({ project, initialSlide: slideIndex })
                }
              />
            ))}
          </div>
        </section>

        {/* 3. Bootcamp Labs & Repository Archive */}
        <section id="bootcamp-projects" className="min-h-screen py-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <h4 className="section-label text-emerald-500">Proyectos Destacados & Labs</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
            {bootcampPractices.map((practice, idx) => (
              <BootcampCard key={practice.name} practice={practice} index={idx} />
            ))}
          </div>

          {/* Repository Archive */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/20" />
              <button
                type="button"
                onClick={() => setShowArchive(!showArchive)}
                className="group flex items-center gap-3 glass-card px-7 py-3.5 rounded-full hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-pointer"
              >
                <FolderClosed className="w-4 h-4 text-indigo-400" />
                <span className="section-label text-theme-secondary group-hover:text-theme transition-colors">
                  {showArchive ? 'Cerrar Biblioteca' : 'Ver Archivo de Repositorios (6)'}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-indigo-400 transition-transform duration-500 ${
                    showArchive ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/20" />
            </div>

            <AnimatePresence mode="wait">
              {showArchive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-8 auto-rows-fr">
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

      <AnimatePresence>
        {activeModal && (
          <CarouselModal
            project={activeModal.project}
            initialSlide={activeModal.initialSlide}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
