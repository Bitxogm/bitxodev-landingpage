
import React from 'react';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
      <Hero />
      <div className="relative z-10">
        <Projects />
        <Skills />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} BitxoDev. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;
