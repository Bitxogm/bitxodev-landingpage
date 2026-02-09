
import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../lib/constants';
import Badge from '../ui/Badge';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Badge variant="outline" className="px-5 py-2 text-sm hover:border-purple-500/50 hover:bg-purple-500/5 cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
