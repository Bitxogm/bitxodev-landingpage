import React, { useEffect, useRef } from 'react';
import type { MatrixMode } from '../../types/portfolio';

interface MatrixRainProps {
  mode: MatrixMode;
  isDark: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ mode, isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (mode === 'off') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fpsInterval = 48;

    const chars =
      '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]#$%&*+=-~';
    const fontSize = 15;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };

    resize();
    window.addEventListener('resize', resize);

    const trailColors =
      mode === 'matrix'
        ? isDark
          ? ['#00ff41', '#10b981', '#22c55e']
          : ['#059669', '#10b981', '#047857']
        : isDark
        ? ['#00f5ff', '#22d3ee', '#00ff41', '#38bdf8']
        : ['#0284c7', '#0891b2', '#059669'];

    const headColor = isDark ? '#ecfdf5' : '#064e3b';

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);
      if (timestamp - lastTime < fpsInterval) return;
      lastTime = timestamp;

      ctx.fillStyle = isDark ? 'rgba(5, 5, 15, 0.1)' : 'rgba(244, 246, 251, 0.14)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        if (Math.random() > 0.7) {
          ctx.fillStyle = headColor;
        } else {
          ctx.fillStyle = trailColors[i % trailColors.length];
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [mode, isDark]);

  if (mode === 'off') return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{ opacity: isDark ? 0.36 : 0.25 }}
    />
  );
};

export default MatrixRain;
