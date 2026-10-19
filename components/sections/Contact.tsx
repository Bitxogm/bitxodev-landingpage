import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const socials = [
    { href: 'https://github.com/Bitxogm', icon: Github, label: 'GitHub' },
    {
      href: 'https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    { href: 'mailto:vmmoreno1999@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden card-glow"
        >
          <p className="section-label text-indigo-400 mb-5">Contacto Profesional</p>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-theme leading-tight">
            ¿Construimos algo <br />
            <span className="grad-text">increíble juntos?</span>
          </h2>

          <p className="text-theme-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Disponible para oportunidades Full-Stack / Mobile / IA y proyectos donde aportar valor desde el primer día.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:vmmoreno1999@gmail.com" className="w-full sm:w-auto no-underline">
              <button type="button" className="btn-primary w-full justify-center">
                <Mail className="w-5 h-5" />
                Enviar Email (vmmoreno1999@gmail.com)
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto no-underline"
            >
              <button type="button" className="btn-ghost w-full justify-center">
                <Linkedin className="w-5 h-5 text-indigo-400" />
                Conectar en LinkedIn
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex flex-col items-center gap-2 text-theme-secondary hover:text-indigo-400 transition-all duration-300 no-underline"
              >
                <div className="p-3.5 glass rounded-2xl group-hover:border-indigo-500/50 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-12 text-center text-theme-muted text-xs">
          <p>© {new Date().getFullYear()} BitxoDev — Victor Manuel Gonzalez Moreno.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
