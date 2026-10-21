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
      className="flex items-center justify-center w-9 h-9 rounded-xl glass hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
