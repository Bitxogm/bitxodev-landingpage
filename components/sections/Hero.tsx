
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Rocket, Code2 } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-purple-600 rounded-full orb-blur animate-orb" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500 rounded-full orb-blur animate-orb [animation-delay:2s]" />
      
      <motion.div 
        className="container max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-purple-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          Building Digital <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-Stack Developer specializing in high-performance web applications with a focus on modern UX and scalable architectures.
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="gradient" size="lg" className="group">
            View Projects
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            Let's Talk
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
