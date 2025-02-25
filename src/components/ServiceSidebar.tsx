'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PremiumGlowEffect from './PremiumGlowEffect';
import { Service } from '@/utils/services';

interface ServiceSidebarProps {
  service?: Service;
}

const services = [
  { id: 'executive-protection', title: 'Executive Protection' },
  { id: 'corporate-risk-management', title: 'Corporate Risk Management' },
  { id: 'high-value-asset', title: 'High-Value Asset Protection' },
  { id: 'luxury-travel', title: 'Luxury Travel Security' }
];

export default function ServiceSidebar({ service }: ServiceSidebarProps) {
  return (
    <motion.aside 
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Navigation */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/5 to-transparent rounded-2xl"
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-[var(--secondary)]/10">
          <h3 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Our Services</h3>
          <nav className="space-y-2">
            {services.map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className={`block p-3 rounded-xl transition-all duration-300 ${
                  service?.id === item.id
                    ? 'bg-[var(--secondary)]/10 text-[var(--secondary)]'
                    : 'text-white/70 hover:bg-[var(--secondary)]/5 hover:text-[var(--secondary)]'
                }`}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-sm">{item.title}</span>
                  {service?.id === item.id && (
                    <motion.div
                      className="w-1 h-1 rounded-full bg-[var(--secondary)]"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Contact Card */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-2xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-[var(--secondary)]/10">
          <h3 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">Need Assistance?</h3>
          <p className="text-white/70 mb-6 text-sm">
            Our security experts are ready to discuss your requirements and provide tailored solutions.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 w-full py-3 px-6 text-center rounded-xl bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 transition-all duration-300 hover:bg-[var(--secondary)]/20"
          >
            <motion.span
              className="relative"
              whileHover={{ x: 4 }}
            >
              Contact Us
            </motion.span>
            <motion.svg
              className="w-4 h-4"
              initial={{ x: 0 }}
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </div>
      </div>
    </motion.aside>
  );
} 