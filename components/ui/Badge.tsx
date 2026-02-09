
import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'secondary' | 'gradient';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'secondary', className }) => {
  const variants = {
    outline: 'border border-white/20 text-slate-300',
    secondary: 'bg-white/10 text-slate-200',
    gradient: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none',
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-xs font-medium transition-all duration-300",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;
