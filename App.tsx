import React, { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import MatrixRain from './components/ui/MatrixRain';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import type { MatrixMode } from './types/portfolio';

const App: React.FC = () => {
  const [matrixMode, setMatrixMode] = useState<MatrixMode>('matrix');
  const [isDark, setIsDark] = useState<boolean>(true);

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
