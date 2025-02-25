'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PremiumBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(600px at 0% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 100% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 100% 100%, rgba(211, 171, 83, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 0% 100%, rgba(211, 171, 83, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 0% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 80%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse follow effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(211, 171, 83, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--secondary)]/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 0 50 Q 400 0 800 50 T 1600 50"
          stroke="rgba(211, 171, 83, 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default PremiumBackground; 