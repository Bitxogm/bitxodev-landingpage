
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';

const navLinks = [
  { name: 'Sobre mí',   href: '#about',      id: 'about' },
  { name: 'Proyectos',  href: '#projects',   id: 'web-projects' },
  { name: 'Experiencia',href: '#experience', id: 'experience' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Contacto',   href: '#contact',    id: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const { id } of [...navLinks].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500"
      style={{ paddingTop: scrolled ? '12px' : '20px' }}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500"
        style={scrolled ? {
          background: 'rgba(5,5,15,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(99,102,241,0.2)',
          boxShadow: '0 8px 40px rgba(99,102,241,0.1)',
        } : { background: 'transparent' }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group no-underline">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm transition-transform duration-300 group-hover:scale-110"
               style={{ background: 'linear-gradient(135deg, #4f46e5, #d946ef)' }}>
            B
          </div>
          <span className="font-bold text-xl text-white hidden sm:block" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Bitxo<span className="grad-text-2">Dev</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link no-underline"
              style={active === link.id ? { color: '#818cf8', background: 'rgba(99,102,241,0.08)', borderRadius: 8 } : {}}
            >
              {link.name}
            </a>
          ))}
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)', margin: '0 12px' }} />
          <a
            href="https://github.com/Bitxogm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 no-underline"
            style={{ border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(99,102,241,0.5)'; (e.currentTarget as HTMLElement).style.color='#818cf8'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color='#94a3b8'; }}
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white transition-colors" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-24 left-4 right-4 rounded-3xl p-8 flex flex-col gap-5 md:hidden z-40"
            style={{ background: 'rgba(13,13,31,0.97)', border: '1px solid rgba(99,102,241,0.25)', backdropFilter: 'blur(24px)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="no-underline"
                style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: active === link.id ? '#818cf8' : '#e2e8f0' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
