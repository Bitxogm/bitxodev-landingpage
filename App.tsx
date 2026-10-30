import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/ui/Navbar';
import MatrixRain from './components/ui/MatrixRain';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import type { MatrixMode } from './types/portfolio';

const SECTION_IDS = [
  'hero',
  'about',
  'web-projects',
  'mobile-projects',
  'bootcamp-projects',
  'experience',
  'skills',
  'contact',
];

const getAbsoluteTop = (el: HTMLElement): number =>
  el.getBoundingClientRect().top + window.scrollY;

const App: React.FC = () => {
  const [matrixMode, setMatrixMode] = useState<MatrixMode>('matrix');
  const [isDark, setIsDark] = useState<boolean>(true);
  const isAnimatingScroll = useRef<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Desktop one-wheel-tick section-by-section navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024 || e.ctrlKey) return;
      if (Math.abs(e.deltaY) < 12) return;

      // Do not hijack wheel if fullscreen carousel modal is open
      if (document.querySelector('.fixed.inset-0.z-\\[100\\]')) return;

      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => el !== null
      );
      if (!sections.length) return;

      const scrollY = window.scrollY;
      let currentIdx = 0;
      let minDist = Infinity;

      sections.forEach((sec, idx) => {
        const secTop = getAbsoluteTop(sec);
        const dist = Math.abs(secTop - scrollY);
        if (dist < minDist) {
          minDist = dist;
          currentIdx = idx;
        }
      });

      const currentSec = sections[currentIdx];
      const rect = currentSec.getBoundingClientRect();
      const direction = e.deltaY > 0 ? 1 : -1;

      // If a section was manually expanded (e.g. Archive drawer open) and is much taller than viewport,
      // allow natural scroll inside it until reaching its edge
      if (currentSec.offsetHeight > window.innerHeight + 140) {
        if (direction > 0 && rect.bottom > window.innerHeight + 70) return;
        if (direction < 0 && rect.top < -70) return;
      }

      const nextIdx = Math.max(0, Math.min(sections.length - 1, currentIdx + direction));
      if (nextIdx === currentIdx) return;

      e.preventDefault();
      if (isAnimatingScroll.current) return;

      isAnimatingScroll.current = true;
      const targetTop = getAbsoluteTop(sections[nextIdx]);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      window.setTimeout(() => {
        isAnimatingScroll.current = false;
      }, 650);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const cycleMatrixMode = () => {
    setMatrixMode((prev) =>
      prev === 'matrix' ? 'cyber' : prev === 'cyber' ? 'off' : 'matrix'
    );
  };

  return (
    <main className="relative">
      <MatrixRain mode={matrixMode} isDark={isDark} />
      <Navbar
        matrixMode={matrixMode}
        onToggleMatrix={cycleMatrixMode}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;
