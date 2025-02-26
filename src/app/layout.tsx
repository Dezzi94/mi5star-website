import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const PremiumGlowEffect = dynamic(() => import('@/components/PremiumGlowEffect'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi5Star - Elite Security & Luxury Services",
  description: "Premium security solutions and luxury services for discerning clients worldwide.",
  keywords: "security services, executive protection, corporate risk management, luxury travel, elite security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {/* Premium background effect */}
        <div className="fixed inset-0 bg-black z-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.15), transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              opacity: 0.02,
            }}
          />
        </div>

        {/* Main content wrapper with premium effects */}
        <PremiumGlowEffect 
          className="relative z-10 min-h-screen"
          intensity="low"
          animate={true}
        >
          <Navigation />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </PremiumGlowEffect>
      </body>
    </html>
  );
}
