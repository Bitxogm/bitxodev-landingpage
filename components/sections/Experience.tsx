
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../lib/constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">Mi <span className="text-purple-500">Trayectoria.</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">Experiencia profesional construyendo productos digitales de principio a fin.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-purple-500 rounded-full -translate-x-1/2 mt-1.5 z-10 hidden md:block shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                <div className="flex-1 md:w-1/2">
                  <div className={`glass p-8 rounded-3xl border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition-colors group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">{exp.role}</h3>
                    <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
