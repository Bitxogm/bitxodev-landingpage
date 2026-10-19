import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Github, Layers } from 'lucide-react';
import type { MobileProject } from '../../types/portfolio';

interface MobileProjectCardProps {
  project: MobileProject;
  index: number;
  onOpenModal: (slideIndex: number) => void;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({
  project,
  index,
  onOpenModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = project.slides;
  const totalSlides = slides.length;

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative h-full"
    >
      <div className="glass-card rounded-[2rem] p-6 flex flex-col xl:flex-row gap-6 card-glow h-full items-stretch">
        {/* Left/Top: Interactive LinkedIn Carousel Preview (4:5 Ratio) */}
        <div
          onClick={() => onOpenModal(currentSlide)}
          className="relative w-full xl:w-[260px] flex-shrink-0 aspect-[4/5] max-h-[340px] mx-auto rounded-2xl overflow-hidden bg-[#0a0a16] border border-indigo-500/20 cursor-zoom-in flex items-center justify-center shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt={`${project.name} - Diapositiva ${currentSlide + 1}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </AnimatePresence>

          {/* Top pill */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/75 backdrop-blur-md text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
              <Layers className="w-3 h-3" />
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(currentSlide);
              }}
              className="pointer-events-auto p-1.5 rounded-lg bg-black/75 backdrop-blur-md text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all"
              title="Ver presentación en grande"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Prev / Next Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Diapositiva anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente diapositiva"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1"
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir a diapositiva ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right/Bottom: Project Details */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-black text-cyan-500 bg-cyan-500/10 uppercase tracking-widest border border-cyan-500/25">
                {project.type} · {project.year}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenModal(currentSlide)}
                  className="text-xs font-semibold text-cyan-500 hover:text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Ampliar
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 glass rounded-full flex items-center justify-center text-theme-secondary hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  title="Ver repositorio en GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1.5 tracking-tight text-theme group-hover:text-cyan-500 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-semibold text-indigo-400 mb-3">{project.subtitle}</p>
            <p className="text-theme-secondary text-sm leading-relaxed mb-5">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-indigo-500/10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/25"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProjectCard;
