
import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} BitxoDev. Crafted with precision.</p>
      </footer>
    </main>
  );
};

export default App;
