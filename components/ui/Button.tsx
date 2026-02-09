
import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) => {
  const variants = {
    primary: 'bg-white text-slate-950 hover:bg-slate-200',
    outline: 'border border-white/20 hover:bg-white/5 text-white',
    ghost: 'hover:bg-white/10 text-white',
    gradient: 'bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white border-none shadow-lg shadow-purple-500/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  return (
    <button 
      className={cn(
        "rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
