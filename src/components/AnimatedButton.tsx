'use client';

import { motion } from 'framer-motion';
import { glowingBorder, transition } from '@/utils/animations';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
}: AnimatedButtonProps) => {
  const baseClasses = variant === 'primary' 
    ? 'relative overflow-hidden group bg-[var(--secondary)] text-black font-semibold px-8 py-4 rounded-md'
    : 'relative overflow-hidden group bg-black/30 backdrop-blur-sm border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold px-8 py-4 rounded-md hover:bg-[var(--secondary)] hover:text-black';

  const buttonContent = (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial="initial"
      animate="animate"
    >
      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%', skew: '-20deg' }}
        whileHover={{ x: '100%', skew: '-20deg' }}
        transition={{ duration: 0.7 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: '0 0 20px rgba(211, 171, 83, 0.5)',
        }}
      />

      {/* Button content with floating animation */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={transition}
      >
        {children}
        
        {/* Animated arrow */}
        <motion.span
          className="inline-block"
          initial={{ x: 0, opacity: 0.5 }}
          whileHover={{ x: 3, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Particle effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="initial"
        whileHover="animate"
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            variants={{
              initial: { scale: 0, opacity: 0 },
              animate: {
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * -100],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 0.5,
                }
              }
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}

export default AnimatedButton; 