
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../../lib/constants';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-950">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h3 className="text-purple-500 font-bold uppercase tracking-widest text-sm">Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-slate-400 max-w-lg">
              A selection of my recent works involving complex front-end architectures and robust backend systems.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            See all work <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2">
        {/* Header/Banner Area */}
        <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
           <span className="text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-125">
             {project.icon}
           </span>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{project.name}</h3>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:bg-white hover:text-slate-950 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="group-hover:bg-white/15">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
