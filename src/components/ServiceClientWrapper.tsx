'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import PremiumEffects with a proper loading state
const PremiumEffects = dynamic(() => import('@/components/PremiumEffects'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-black/40 backdrop-blur-xl animate-pulse" />
  )
});

export default function ServiceClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure the code only runs in the browser
    if (typeof window !== 'undefined') {
      // Scroll to top on mount
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none">
        <PremiumEffects />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 