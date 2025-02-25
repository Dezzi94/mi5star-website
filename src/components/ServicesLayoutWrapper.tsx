'use client';

import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ServiceNavigation
const ServiceNavigation = dynamic(() => import('./ServiceNavigation'), {
  ssr: false,
  loading: () => (
    <div className="w-[400px] h-screen bg-black/80 backdrop-blur-sm animate-pulse" />
  ),
});

export default function ServicesLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const isServicePage = useMemo(() => {
    return pathname.startsWith('/services/') && pathname !== '/services';
  }, [pathname]);

  const opacity = useTransform(scrollY, [0, 200], [1, 0.2]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen w-full bg-black animate-pulse">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-screen bg-black/20" />
        </div>
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-8">
            {/* Service Navigation */}
            {isServicePage && (
              <motion.div 
                className="hidden lg:block w-[400px] flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="sticky top-24">
                  <ServiceNavigation />
                </div>
              </motion.div>
            )}

            {/* Main Content */}
            <main className={`flex-1 ${isServicePage ? 'lg:max-w-[calc(100%-400px-2rem)]' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 