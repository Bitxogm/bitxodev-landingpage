import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      title={isDark ? 'Cambiar a modo Día' : 'Cambiar a modo Noche'}
      aria-label="Alternar modo día y noche"
      className={`font-hacker flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border flex-shrink-0 ${
        isDark
          ? 'border-amber-400/45 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 shadow-[0_0_14px_rgba(251,191,36,0.18)]'
          : 'border-indigo-500/45 bg-indigo-500/15 text-indigo-700 hover:bg-indigo-500/25 shadow-[0_0_14px_rgba(99,102,241,0.18)]'
      }`}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-500" />
          <span className="hidden sm:inline">DÍA</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-500" />
          <span className="hidden sm:inline">NOCHE</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
