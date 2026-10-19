import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { FeaturedProject } from '../../types/portfolio';

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      <div className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col justify-between card-glow p-8 relative">
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(450px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.12), transparent 70%)`
            ),
          }}
        />

        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-6">
            <div
              className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 border-indigo-500/20`}
            >
              {project.icon}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.name}`}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-theme-secondary hover:border-indigo-500/50 hover:text-indigo-400 hover:scale-110 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-theme group-hover:text-indigo-400 transition-colors duration-300 tracking-tight">
            {project.name}
          </h3>
          <p className="text-theme-secondary text-sm leading-relaxed font-normal flex-grow min-h-[4.5rem]">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 pt-5 mt-6 border-t border-indigo-500/10">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
