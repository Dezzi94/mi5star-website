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
    ? 'relative overflow-hidden group bg-[var(--secondary)] text-black font-medium px-8 py-3 rounded-md hover:bg-[var(--secondary)]/90 transition-all duration-300'
    : 'relative overflow-hidden group bg-black/30 backdrop-blur-sm border-2 border-[var(--secondary)] text-[var(--secondary)] font-medium px-8 py-3 rounded-md hover:bg-[var(--secondary)] hover:text-black transition-all duration-300';

  const buttonContent = (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial="initial"
      animate="animate"
    >
      {/* Button content */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={transition}
      >
        {children}
      </motion.div>

      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: '0 0 20px rgba(211, 171, 83, 0.3)',
        }}
      />
    </motion.div>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}

export default AnimatedButton; 