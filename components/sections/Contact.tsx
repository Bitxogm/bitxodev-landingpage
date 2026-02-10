
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-600/10 blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to build <br />
            <span className="text-gradient">something epic?</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Currently accepting freelance projects and interesting full-time opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:vmmoreno1999@gmail.com" className="w-full sm:w-auto">
              <Button variant="gradient" size="lg" className="w-full">
                <Mail className="w-5 h-5" />
                Send an Email
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <MessageSquare className="w-5 h-5" />
              Book a Call
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <SocialLink href="https://github.com/Bitxogm" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:vmmoreno1999@gmail.com" icon={<Mail />} label="Email" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string, icon: React.ReactNode, label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-all duration-300"
  >
    <div className="p-3 glass rounded-2xl group-hover:border-purple-500/50 group-hover:scale-110 transition-all">
      {/* Fixed cloneElement error by casting icon to ReactElement<any> to allow injecting className */}
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
    </div>
    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
      {label}
    </span>
  </a>
);

export default Contact;
