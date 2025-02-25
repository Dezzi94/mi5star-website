'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PremiumGlowEffect from './PremiumGlowEffect';

interface HeroSectionProps {
  title: string;
  description?: string;
  image: string;
  className?: string;
  pattern?: 'grid' | 'dots' | 'waves';
}

export default function HeroSection({ title, description, image, className = '', pattern = 'grid' }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getPatternStyle = () => {
    switch (pattern) {
      case 'dots':
        return {
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        };
      case 'waves':
        return {
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)
          `,
          backgroundSize: '40px 40px',
        };
      default:
        return {
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        };
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(211,171,83,0.15), transparent 50%)`
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(211, 171, 83, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(211, 171, 83, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.5
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-8 py-24">
        <PremiumGlowEffect intensity="medium">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Premium Label */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20">
                Premium Service
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-white">Elevating </span>
              <span className="bg-gradient-gold bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_rgba(211,171,83,0.3)]">
                {title}
              </span>
              <span className="text-white"> Excellence</span>
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                className="text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-gold bg-clip-text text-transparent">Premium</span>{' '}
                {description}
              </motion.p>
            )}

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[var(--secondary)]/20 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[var(--secondary)]/20 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[var(--secondary)]/20 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[var(--secondary)]/20 rounded-br-xl" />
          </motion.div>
        </PremiumGlowEffect>
      </div>
    </motion.section>
  );
} 