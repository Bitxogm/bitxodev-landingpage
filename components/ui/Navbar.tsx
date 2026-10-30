import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Terminal,
  ShieldCheck,
  PhoneCall,
  Bot,
  Code2,
  FileText,
  Cpu,
  Server,
  Flag,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import type { MatrixMode } from '../../types/portfolio';

const navLinks = [
  { code: '01', name: 'Inicio',      href: '#hero',              id: 'hero' },
  { code: '02', name: 'Sobre_mí',    href: '#about',             id: 'about' },
  { code: '03', name: 'Web_Apps',    href: '#web-projects',      id: 'web-projects' },
  { code: '04', name: 'Mobile',      href: '#mobile-projects',   id: 'mobile-projects' },
  { code: '05', name: 'Labs_Repo',   href: '#bootcamp-projects', id: 'bootcamp-projects' },
  { code: '06', name: 'Trayectoria', href: '#experience',        id: 'experience' },
  { code: '07', name: 'Skills',      href: '#skills',            id: 'skills' },
  { code: '08', name: 'Contacto',    href: '#contact',           id: 'contact' },
];

const tickerItems = [
  {
    tag: 'ANDROID_SEC',
    text: 'SMSGuardian :: Anti-Smishing Híbrido + Gemini 2.5',
    href: '#mobile-projects',
    color: 'text-emerald-400 border-emerald-500/35 bg-emerald-500/10',
    Icon: ShieldCheck,
  },
  {
    tag: 'VOICE_AI',
    text: 'Call Spam Blocker :: Agente "Manolo" ~300ms (SIP/Asterisk)',
    href: '#mobile-projects',
    color: 'text-cyan-400 border-cyan-500/35 bg-cyan-500/10',
    Icon: PhoneCall,
  },
  {
    tag: 'EDTECH_IA',
    text: 'AgentLogic Academy :: Retos de Lógica en Tiempo Real',
    href: '#web-projects',
    color: 'text-indigo-400 border-indigo-500/35 bg-indigo-500/10',
    Icon: Bot,
  },
  {
    tag: 'DEVTOOLS',
    text: 'CodeAI Editor :: Refactorización & Tests con IA',
    href: '#web-projects',
    color: 'text-fuchsia-400 border-fuchsia-500/35 bg-fuchsia-500/10',
    Icon: Code2,
  },
  {
    tag: 'SAAS_ATS',
    text: 'AI CV Generator :: Currículums Optimizados ATS + PDF',
    href: '#web-projects',
    color: 'text-amber-400 border-amber-500/35 bg-amber-500/10',
    Icon: FileText,
  },
  {
    tag: 'KALI_OS',
    text: 'CyberShield AI :: Asistente LLM para Auditoría en Kali Linux',
    href: '#bootcamp-projects',
    color: 'text-emerald-400 border-emerald-500/35 bg-emerald-500/10',
    Icon: Cpu,
  },
  {
    tag: 'REDTEAM',
    text: 'CTF Squad & Writeups :: DockerLabs & HackMyVM',
    href: '#bootcamp-projects',
    color: 'text-rose-400 border-rose-500/35 bg-rose-500/10',
    Icon: Flag,
  },
  {
    tag: 'SYS_ONLINE',
    text: 'Hetzner VPS + Docker CI/CD :: Producción Activa 24/7',
    href: '#experience',
    color: 'text-cyan-400 border-cyan-500/35 bg-cyan-500/10',
    Icon: Server,
  },
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
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 200) {
        setActive('hero');
        return;
      }
      for (const { id } of [...navLinks].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= top - 280) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
      setMobileOpen(false);
    }
  };

  const matrixLabel =
    matrixMode === 'matrix'
      ? 'MATRIX: VERDE'
      : matrixMode === 'cyber'
      ? 'MATRIX: CYBER'
      : 'MATRIX: OFF';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 px-2.5 sm:px-4 transition-all duration-500 ${
        scrolled ? 'pt-2' : 'pt-2.5 sm:pt-3'
      }`}
    >
      <div
        className={`max-w-[1380px] w-full mx-auto relative rounded-2xl glass-card overflow-hidden transition-all duration-500 ${
          scrolled
            ? 'border-indigo-500/50 shadow-[0_14px_50px_rgba(99,102,241,0.24)]'
            : 'border-indigo-500/35 shadow-[0_10px_40px_rgba(99,102,241,0.16)]'
        }`}
      >
        {/* Top luminous accent line */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent" />

        {/* Upper Bar: Logo + Links + Controls */}
        <div className="flex items-center justify-between gap-2 px-3 sm:px-5 py-2.5">
          {/* Logo (visible on all screen sizes) */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 sm:gap-2.5 group no-underline flex-shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black text-white text-base transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 shadow-[0_0_20px_rgba(99,102,241,0.45)] border border-white/20 display">
              B
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg sm:text-xl text-theme display tracking-tight">
                Bitxo<span className="grad-text-2">Dev</span>
              </span>
              <span className="font-hacker text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-400 mt-0.5">
                &gt; AI_WEB_SEC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-0.5 px-1.5 py-1 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/20">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-link no-underline flex items-center gap-0.5 ${
                  active === link.id ? 'active' : ''
                }`}
              >
                <span className="text-[9px] text-indigo-400/80 font-extrabold">{link.code}.</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Right Controls: Matrix + Day/Night + GitHub + Burger Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={onToggleMatrix}
              title="Cambiar efecto Matrix (Verde / Cyber / Off)"
              className={`font-hacker hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 cursor-pointer border whitespace-nowrap ${
                matrixMode === 'matrix'
                  ? 'border-emerald-500/55 bg-emerald-500/15 text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.2)]'
                  : matrixMode === 'cyber'
                  ? 'border-cyan-500/55 bg-cyan-500/15 text-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.2)]'
                  : 'border-indigo-500/25 bg-indigo-500/5 text-theme-secondary'
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
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-xl glass text-theme-secondary hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 no-underline flex-shrink-0"
            >
              <Github size={17} />
            </a>

            <button
              type="button"
              className="xl:hidden px-3 py-2 rounded-xl bg-indigo-500/20 border border-indigo-400/50 text-theme hover:bg-indigo-500/30 transition-all flex items-center gap-1.5 font-hacker text-xs font-bold shadow-[0_0_16px_rgba(99,102,241,0.25)] cursor-pointer flex-shrink-0"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú de navegación"
            >
              {mobileOpen ? (
                <X size={18} className="text-indigo-400" />
              ) : (
                <Menu size={18} className="text-indigo-400" />
              )}
              <span>{mobileOpen ? 'CERRAR' : 'MENÚ'}</span>
            </button>
          </div>
        </div>

        {/* Lower Bar (Diseño B): Integrated Live Hacker Ticker Carousel */}
        <div className="border-t border-indigo-500/20 bg-indigo-950/20 px-3 sm:px-5 py-1.5 sm:py-2 flex items-center gap-2.5 w-full overflow-hidden">
          <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/35 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            <span className="font-hacker text-[10px] sm:text-[11px] font-extrabold tracking-wider text-indigo-300 uppercase">
              LIVE //
            </span>
          </div>

          <div className="nav-ticker-wrap flex-1 min-w-0">
            <div className="nav-ticker-track">
              {[...tickerItems, ...tickerItems].map((item, idx) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={`${item.tag}-${idx}`}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group flex items-center gap-2 px-3 py-1 rounded-lg glass hover:border-indigo-500/50 transition-all no-underline whitespace-nowrap"
                  >
                    <span
                      className={`font-hacker text-[10px] font-extrabold px-1.5 py-0.5 rounded border flex items-center gap-1 ${item.color}`}
                    >
                      <Icon size={11} />
                      {item.tag}
                    </span>
                    <span className="font-hacker text-xs font-semibold text-theme-secondary group-hover:text-theme transition-colors">
                      {item.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Burger Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-2 mx-auto max-w-lg rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 xl:hidden z-50 glass-card border border-indigo-500/45 shadow-[0_24px_60px_rgba(0,0,0,0.65)] max-h-[80vh] overflow-y-auto"
          >
            <div className="font-hacker text-[11px] font-bold uppercase tracking-widest text-indigo-400 pb-2 mb-1 border-b border-indigo-500/20 flex items-center justify-between">
              <span>// NAVEGACIÓN_DEL_SISTEMA</span>
              <span>08 SECCIONES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`no-underline font-hacker text-sm font-bold px-3.5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                    active === link.id
                      ? 'bg-indigo-500/20 border-indigo-500/50 text-theme shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                      : 'bg-indigo-500/5 border-indigo-500/15 text-theme-secondary hover:text-theme'
                  }`}
                >
                  <span className="text-xs text-indigo-400">[{link.code}]</span>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-2 pt-3 border-t border-indigo-500/20">
              <button
                type="button"
                onClick={onToggleMatrix}
                className="font-hacker flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 cursor-pointer"
              >
                <Terminal size={14} />
                {matrixLabel}
              </button>
              <a
                href="https://github.com/Bitxogm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-hacker flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border border-indigo-500/35 text-theme bg-indigo-500/10 no-underline"
              >
                <Github size={14} />
                GITHUB
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
