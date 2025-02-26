'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import ServiceSidebar from '@/components/ServiceSidebar';

interface ServicesLayoutProps {
  children: ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  const pathname = usePathname();
  const isMainServicesPage = pathname === '/services';
  const isServicePage = pathname.startsWith('/services/') && pathname !== '/services';

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      {children}

      {/* Right Sidebar (only shown on individual service pages) */}
      {isServicePage && (
        <>
          {/* Desktop Sidebar */}
          <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="w-[300px]">
              <ServiceSidebar />
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-[var(--secondary)]/10 p-4">
            <ServiceSidebar />
          </div>
        </>
      )}
    </div>
  );
} 