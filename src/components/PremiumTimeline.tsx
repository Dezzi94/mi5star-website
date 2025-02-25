'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PremiumGlowEffect from './PremiumGlowEffect';

interface TimelineItem {
  title: string;
  description: string;
  icon?: string;
}

interface PremiumTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function PremiumTimeline({ items, className = '' }: PremiumTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  return (
    <div ref={containerRef} className={`relative py-20 ${className}`}>
      {/* Vertical connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--secondary)]/10">
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ 
            height: lineHeight,
            background: 'linear-gradient(to bottom, var(--secondary), var(--secondary))',
            opacity: lineOpacity,
            boxShadow: '0 0 10px var(--secondary)'
          }}
        />
      </div>

      {/* Timeline items */}
      <div className="relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-8 mb-20 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Content */}
            <div className="flex-1">
              <PremiumGlowEffect intensity="low">
                <motion.div
                  className="relative bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-[var(--secondary)]/20 overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background effects */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(211,171,83,0.15), transparent 70%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </div>

                  {/* Animated borders */}
                  <motion.div
                    className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)]/30 to-transparent"
                    animate={{ scaleY: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)]/30 to-transparent"
                    animate={{ scaleX: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </PremiumGlowEffect>
            </div>

            {/* Center point with enhanced animations */}
            <div className="relative flex-shrink-0 w-16 h-16">
              <motion.div
                className="absolute inset-0 bg-black rounded-full border-2 border-[var(--secondary)] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(211,171,83,0.4)",
                    "0 0 20px rgba(211,171,83,0.2)",
                    "0 0 0 rgba(211,171,83,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">{item.icon || '✨'}</span>
              </motion.div>

              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[var(--secondary)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Empty flex item for alignment */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 