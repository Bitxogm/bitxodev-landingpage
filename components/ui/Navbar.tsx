import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import type { MatrixMode } from '../../types/portfolio';

const navLinks = [
  { name: 'Sobre mí',    href: '#about',           id: 'about' },
  { name: 'Web Apps',    href: '#web-projects',    id: 'web-projects' },
  { name: 'Mobile Apps', href: '#mobile-projects', id: 'mobile-projects' },
  { name: 'Labs & Repo', href: '#bootcamp-projects', id: 'bootcamp-projects' },
  { name: 'Trayectoria', href: '#experience',      id: 'experience' },
  { name: 'Skills',      href: '#skills',          id: 'skills' },
  { name: 'Contacto',    href: '#contact',         id: 'contact' },
];

interface NavbarProps {
  matrixMode: MatrixMode;
  onToggleMatrix: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  matrixMode,
  onToggleMatrix,
  isDark,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const { id } of [...navLinks].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 260) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const matrixLabel =
    matrixMode === 'matrix'
      ? 'Matrix: Verde'
      : matrixMode === 'cyber'
      ? 'Matrix: Cyber'
      : 'Matrix: Off';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-card border-indigo-500/25 shadow-[0_8px_40px_rgba(99,102,241,0.12)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group no-underline">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br from-indigo-600 to-fuchsia-500">
            B
          </div>
          <span className="font-bold text-xl text-theme hidden sm:block display">
            Bitxo<span className="grad-text-2">Dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link no-underline ${
                active === link.id ? 'active bg-indigo-500/10' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions: Matrix Toggle + Theme Toggle + GitHub */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMatrix}
            title="Cambiar efecto Matrix (Verde / Cyber / Off)"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer display border ${
              matrixMode === 'matrix'
                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-400'
                : matrixMode === 'cyber'
                ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-400'
                : 'border-slate-500/20 bg-transparent text-theme-muted'
            }`}
          >
            <Terminal size={13} />
            {matrixLabel}
          </button>

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <a
            href="https://github.com/Bitxogm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-xl glass text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 no-underline"
          >
            <Github size={17} />
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="text-theme-secondary hover:text-theme transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-20 left-4 right-4 rounded-3xl p-7 flex flex-col gap-4 md:hidden z-40 glass-card border-indigo-500/30 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`no-underline display text-xl font-extrabold ${
                  active === link.id ? 'text-indigo-400' : 'text-theme'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleMatrix}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold border border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
            >
              <Terminal size={15} />
              {matrixLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
