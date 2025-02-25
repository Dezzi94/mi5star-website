'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface PremiumServiceCardProps {
  title: string;
  description: string;
  href: string;
  isActive?: boolean;
}

const PremiumServiceCard = ({ title, description, href, isActive = false }: PremiumServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        className={`
          relative group cursor-pointer
          min-h-[400px] p-8
          bg-black/40 backdrop-blur-lg
          border border-[var(--secondary)]/20
          overflow-hidden
          ${isActive ? 'border-[var(--secondary)]' : 'hover:border-[var(--secondary)]/60'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(211, 171, 83, 0.15) 0%, transparent 100%)',
          }}
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <motion.div
            className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent"
            animate={{ height: isHovered ? '100%' : '4rem' }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent"
            animate={{ width: isHovered ? '100%' : '4rem' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="absolute bottom-0 right-0 w-16 h-16">
          <motion.div
            className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent"
            animate={{ height: isHovered ? '100%' : '4rem' }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent"
            animate={{ width: isHovered ? '100%' : '4rem' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <motion.h2
            className="text-3xl font-bold mb-6 uppercase tracking-wider"
            animate={{
              color: isHovered ? 'var(--secondary)' : '#ffffff',
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-white/70 mb-8"
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            {description}
          </motion.p>

          {/* Service Button */}
          <motion.div
            className="mt-auto flex items-center gap-2 text-[var(--secondary)]"
            animate={{
              x: isHovered ? 10 : 0,
            }}
          >
            <span className="uppercase tracking-wider text-sm font-semibold">Service</span>
            <motion.svg
              className="w-5 h-5"
              animate={{
                x: isHovered ? 5 : 0,
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Hover effect particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[var(--secondary)]"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: '50%',
                  y: '50%',
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: ['50%', `${Math.random() * 100}%`],
                  y: ['50%', `${Math.random() * 100}%`],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </Link>
  );
};

export default PremiumServiceCard; 