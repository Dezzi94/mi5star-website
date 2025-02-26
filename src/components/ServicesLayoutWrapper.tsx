'use client';

import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ServicesLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 200], [1, 0.2]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen w-full bg-black animate-pulse">
        <div className="h-screen bg-black/20" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Premium background effects */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(211,171,83,0.15), transparent 70%)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(211, 171, 83, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(211, 171, 83, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.05,
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
} 