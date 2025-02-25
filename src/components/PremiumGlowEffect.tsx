'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumGlowEffectProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  animate?: boolean;
  hover?: boolean;
}

export default function PremiumGlowEffect({
  children,
  className = '',
  intensity = 'medium',
  animate = false,
  hover = false,
}: PremiumGlowEffectProps) {
  const getGlowOpacity = () => {
    switch (intensity) {
      case 'low': return 0.1;
      case 'high': return 0.3;
      default: return 0.2;
    }
  };

  const baseGlow = {
    boxShadow: `0 0 20px rgba(211, 171, 83, ${getGlowOpacity()})`,
    background: 'linear-gradient(45deg, rgba(211, 171, 83, 0.1), transparent)',
  };

  const animatedGlow = animate ? {
    animate: {
      boxShadow: [
        `0 0 20px rgba(211, 171, 83, 0)`,
        `0 0 40px rgba(211, 171, 83, ${getGlowOpacity()})`,
        `0 0 20px rgba(211, 171, 83, 0)`,
      ],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  } : {};

  const hoverGlow = hover ? {
    whileHover: {
      boxShadow: `0 0 30px rgba(211, 171, 83, ${getGlowOpacity() * 1.5})`,
      background: 'linear-gradient(45deg, rgba(211, 171, 83, 0.15), transparent)',
    },
    transition: {
      duration: 0.3,
    },
  } : {};

  return (
    <motion.div
      className={`relative ${className}`}
      initial={baseGlow}
      {...animatedGlow}
      {...hoverGlow}
    >
      {/* Premium corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent" />
      </div>

      {/* Floating particles */}
      {animate && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--secondary)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, -50],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            />
          ))}
        </>
      )}

      {children}
    </motion.div>
  );
} 