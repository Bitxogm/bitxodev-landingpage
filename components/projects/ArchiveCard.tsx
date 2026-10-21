import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, ShieldCheck, Github, ExternalLink } from 'lucide-react';
import type { ArchiveProject } from '../../types/portfolio';

interface ArchiveCardProps {
  project: ArchiveProject;
  index: number;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({ project, index }) => {
  const isSecurity = project.type === 'Security';
  const isMobile = project.type === 'Mobile';

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ delay: index * 0.05 }}
      className="glass-card p-6 rounded-3xl card-glow transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full no-underline"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-xl glass ${
                isSecurity
                  ? 'text-emerald-500 border-emerald-500/25'
                  : isMobile
                  ? 'text-cyan-500 border-cyan-500/25'
                  : 'text-indigo-400 border-indigo-500/25'
              }`}
            >
              {isSecurity ? (
                <ShieldCheck className="w-4 h-4" />
              ) : isMobile ? (
                <Smartphone className="w-4 h-4" />
              ) : (
                <Globe className="w-4 h-4" />
              )}
            </div>
            <span className="text-[10px] font-black text-theme-muted uppercase tracking-widest">
              {project.type} · {project.year}
            </span>
          </div>
          {project.url.includes('github') ? (
            <Github className="w-4 h-4 text-theme-muted group-hover:text-indigo-400 transition-colors" />
          ) : (
            <ExternalLink className="w-4 h-4 text-theme-muted group-hover:text-indigo-400 transition-colors" />
          )}
        </div>

        <h4 className="font-bold text-lg mb-2 text-theme group-hover:text-indigo-400 transition-colors">
          {project.name}
        </h4>
        <p className="text-xs text-theme-secondary mb-5 line-clamp-3 leading-relaxed min-h-[3.5rem]">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-indigo-500/10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] text-theme-muted group-hover:text-indigo-400 font-bold uppercase tracking-tight transition-colors"
          >
            #{t}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default ArchiveCard;
