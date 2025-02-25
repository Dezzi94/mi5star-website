'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllServices } from '@/utils/services';
import PremiumGlowEffect from './PremiumGlowEffect';

export default function ServiceNavigation() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const services = getAllServices();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PremiumGlowEffect intensity="low">
      <motion.aside
        className="w-[400px] bg-black/40 backdrop-blur-xl rounded-2xl border border-[var(--secondary)]/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Effects */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(211,171,83,0.3), transparent 100%)`
          }}
        />

        {/* Content */}
        <div className="relative p-8">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
            Our Services
          </h2>

          <nav className="space-y-4">
            {services.map((service) => {
              const isActive = pathname === `/services/${service.id}`;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block group"
                >
                  <motion.div
                    className={`
                      relative p-4 rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-[var(--secondary)]/10 border border-[var(--secondary)]/30' 
                        : 'hover:bg-[var(--secondary)]/5 border border-transparent'
                      }
                    `}
                    whileHover={{ x: 8 }}
                  >
                    <h3 className={`
                      font-medium mb-1 transition-colors duration-300
                      ${isActive ? 'text-[var(--secondary)]' : 'text-white group-hover:text-[var(--secondary)]'}
                    `}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {service.description}
                    </p>

                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--secondary)]"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </PremiumGlowEffect>
  );
} 