
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, BookOpen, GraduationCap } from 'lucide-react';
import { certificates, bootcampPractices } from '../../lib/constants';
import Button from '../ui/Button';

const Certificates: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-purple-400 font-medium mb-2"
            >
              <GraduationCap size={20} />
              <span className="uppercase tracking-wider text-sm">Trayectoria Académica</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Certificados y <span className="text-gradient">Labs</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Certificates Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Award className="text-purple-500" />
              Certificaciones Oficiales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <span className="text-xs font-medium text-slate-500">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                  
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Ver PDF <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bootcamp Practices Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <BookOpen className="text-blue-500" />
              Bootcamp Labs
            </h3>
            <div className="space-y-4">
              {bootcampPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-5 rounded-xl border-l-4 border-l-blue-500/50 hover:border-l-blue-500 transition-all"
                >
                  <h4 className="font-bold text-slate-200 mb-1">{practice.name}</h4>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">{practice.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {practice.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <p className="text-slate-500 text-xs italic">
                  * Estas prácticas forman parte del currículo intensivo del bootcamp, enfocadas en dominar cada stack tecnológico.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
