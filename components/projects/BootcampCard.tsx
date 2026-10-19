import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';
import type { BootcampPractice } from '../../types/portfolio';

interface BootcampCardProps {
  practice: BootcampPractice;
  index: number;
}

const BootcampCard: React.FC<BootcampCardProps> = ({ practice, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="glass-card p-6 rounded-3xl card-glow transition-all duration-300 group flex flex-col justify-between h-full"
  >
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform border-emerald-500/20">
          <Code2 className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-3">
          {practice.demo && (
            <a
              href={practice.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demo de ${practice.name}`}
              className="text-theme-secondary hover:text-emerald-500 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={practice.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${practice.name}`}
            className="text-theme-secondary hover:text-emerald-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <h4 className="font-bold text-lg text-theme group-hover:text-emerald-500 transition-colors">
          {practice.name}
        </h4>
        {practice.badge && (
          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/25">
            {practice.badge}
          </span>
        )}
      </div>
      <p className="text-xs text-theme-secondary mb-6 leading-relaxed min-h-[3.75rem]">
        {practice.description}
      </p>
    </div>

    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-emerald-500/10">
      {practice.tech.map((t) => (
        <span
          key={t}
          className="text-[9px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/25"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default BootcampCard;
