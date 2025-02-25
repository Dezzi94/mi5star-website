'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  animate?: 'letters' | 'words' | 'lines';
}

const AnimatedText = ({ children, className = '', animate = 'words' }: AnimatedTextProps) => {
  const text = typeof children === 'string' ? children : '';

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.02 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
      },
    },
  };

  if (animate === 'letters' && text) {
    return (
      <motion.div
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ 
              textShadow: char.trim() ? '0 0 8px rgba(211, 171, 83, 0.3)' : 'none'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (animate === 'words' && text) {
    return (
      <motion.div
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ 
              textShadow: '0 0 8px rgba(211, 171, 83, 0.3)',
              marginRight: '0.25em'
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Fallback for non-text content
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 150,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText; 