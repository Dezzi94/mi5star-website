'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import AnimatedButton from './AnimatedButton';

interface PremiumCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

const PremiumCard = ({
  title,
  description,
  icon,
  href,
  className = '',
}: PremiumCardProps) => {
  return (
    <motion.div
      className={`
        relative group h-[500px] flex flex-col
        bg-gradient-to-br from-black/80 via-black/70 to-black/80
        backdrop-blur-premium
        p-8 rounded-lg
        border border-[var(--secondary)]/20
        hover:border-[var(--secondary)]
        transition-all duration-500
        overflow-hidden
        shadow-premium hover:shadow-premium-hover
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/0 via-[var(--secondary)]/10 to-[var(--secondary)]/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {icon && (
          <motion.div
            className="text-[var(--secondary)] mb-6"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}

        <motion.h3
          className="heading-sm mb-4 bg-gradient-gold text-transparent bg-clip-text font-bold"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-white/90 mb-8 leading-relaxed flex-grow"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>

        {href && (
          <div className="mt-auto">
            <AnimatedButton href={href} variant="secondary">
              Learn More
            </AnimatedButton>
          </div>
        )}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent" />
        <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent" />
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: '0 0 40px rgba(211, 171, 83, 0.15) inset',
        }}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
          opacity: 0.1,
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
};

export default PremiumCard; 