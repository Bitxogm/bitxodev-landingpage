
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-fuchsia-500/8 blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Mesh gradient background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-gradient-radial from-violet-500/10 via-transparent to-transparent opacity-70" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fuchsia-500/8 rounded-full blur-3xl" />
          </div>

          {/* Label */}
          <p className="section-label text-violet-400 mb-6">Hablemos</p>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
            Ready to build <br />
            <span className="text-gradient">something epic?</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Currently accepting freelance projects and interesting full-time opportunities.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <a href="mailto:vmmoreno1999@gmail.com" className="w-full sm:w-auto">
              <button className="btn-shimmer group w-full h-14 px-10 rounded-2xl font-bold text-sm tracking-wide text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #d946ef, #6366f1)', backgroundSize: '200%' }}>
                <Mail className="w-5 h-5" />
                Send an Email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <button className="group w-full sm:w-auto h-14 px-10 rounded-2xl font-bold text-sm tracking-wide glass border-violet-500/25 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <MessageSquare className="w-5 h-5" />
              Book a Call
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6">
            {[
              { href: "https://github.com/Bitxogm", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:vmmoreno1999@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-all duration-300"
              >
                <div className="p-3.5 glass rounded-2xl group-hover:border-violet-500/40 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-slate-600 text-xs">
        <p>© {new Date().getFullYear()} BitxoDev — Crafted with precision.</p>
      </footer>
    </section>
  );
};

export default Contact;
