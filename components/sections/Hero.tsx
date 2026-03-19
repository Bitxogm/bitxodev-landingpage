
import React from 'react';
// Added Variants type import to fix type inference issues with easing strings
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket, Code2 } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const words = "Automatizando el Futuro con IA".split(" ");

  // Explicitly typing as Variants to avoid inferred string types causing errors in motion props
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Explicitly typing as Variants to fix 'string' not assignable to 'Easing' error for 'easeOut'
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full orb-blur animate-orb" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full orb-blur animate-orb [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full orb-blur pointer-events-none" />
      
      <motion.div 
        className="container max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={wordVariants} className="flex justify-center mb-6">
          <span className="glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-purple-500 dark:text-purple-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            Full Stack Developer & AI Enthusiast
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900 dark:text-white">
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordVariants} 
              className={i === 2 ? "text-gradient block" : "inline-block mr-4"}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          variants={wordVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Creando herramientas inteligentes para simplificar problemas complejos. Especializado en el desarrollo de agentes de IA y automatización de procesos.
        </motion.p>

        <motion.div variants={wordVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="gradient" size="lg" className="group h-16 px-10 rounded-2xl" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar Proyectos
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group h-16 px-10 rounded-2xl border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contactar
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>

        <motion.div variants={wordVariants} className="flex items-center justify-center gap-8">
          {[
            { Icon: Github, href: "https://github.com/Bitxogm" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/" },
            { Icon: Mail, href: "mailto:vmmoreno1999@gmail.com" }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i} 
              href={href} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-slate-500 hover:text-purple-600 dark:hover:text-white transition-all duration-500"
            >
              <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
              <Icon className="w-7 h-7 relative z-10" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-24 bg-gradient-to-b from-purple-500 to-transparent relative">
           <motion.div 
             animate={{ top: ["0%", "100%", "0%"] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 dark:bg-white rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] dark:shadow-[0_0_10px_white]"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
