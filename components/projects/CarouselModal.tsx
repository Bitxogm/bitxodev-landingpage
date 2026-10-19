import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Github } from 'lucide-react';
import type { MobileProject } from '../../types/portfolio';

interface CarouselModalProps {
  project: MobileProject;
  initialSlide: number;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
  project,
  initialSlide,
  onClose,
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const slides = project.slides;
  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
      if (e.key === 'ArrowRight') setCurrentSlide((p) => (p + 1) % totalSlides);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, totalSlides]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
    >
      {/* Header */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl flex items-center justify-between mb-4 px-2"
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
            <p className="text-slate-400 text-xs">{project.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-cyan-400 flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500/40 transition-all cursor-pointer"
            aria-label="Cerrar vista ampliada"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl flex-1 max-h-[75vh] flex items-center justify-center"
      >
        <button
          type="button"
          onClick={() => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides)}
          className="absolute left-2 sm:-left-14 z-10 w-11 h-11 rounded-full bg-black/80 border border-white/15 text-white flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all shadow-xl cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#070712] p-2 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt={`${project.name} - Slide ${currentSlide + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="max-w-full max-h-full object-contain rounded-xl select-none"
              draggable={false}
            />
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => setCurrentSlide((p) => (p + 1) % totalSlides)}
          className="absolute right-2 sm:-right-14 z-10 w-11 h-11 rounded-full bg-black/80 border border-white/15 text-white flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all shadow-xl cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl mt-4 flex items-center justify-center gap-2 overflow-x-auto py-2 px-4"
      >
        {slides.map((slideUrl, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`relative flex-shrink-0 w-11 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              idx === currentSlide
                ? 'border-cyan-400 scale-110 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                : 'border-white/10 opacity-50 hover:opacity-90'
            }`}
          >
            <img
              src={slideUrl}
              alt={`Miniatura ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselModal;
