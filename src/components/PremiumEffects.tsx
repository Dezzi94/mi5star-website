import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const PremiumEffects = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -150]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -100]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -50]);

  // Floating animations for accent elements
  const floatingY = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      floatingY.set(Math.random() * 20 - 10);
    }, 2000);

    return () => clearInterval(interval);
  }, [floatingY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Animated accent lines */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer1Y }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-[var(--secondary)]/10"
            style={{ 
              top: `${i * 25}%`,
              transform: 'skewY(-15deg)',
            }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer2Y }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--secondary)]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Premium corner accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32"
          style={{ y: floatingY }}
        >
          <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent" />
          <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
        </motion.div>

        {/* Top right */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32"
          style={{ y: floatingY }}
        >
          <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent" />
        </motion.div>

        {/* Bottom left */}
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32"
          style={{ y: floatingY }}
        >
          <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
        </motion.div>

        {/* Bottom right */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32"
          style={{ y: floatingY }}
        >
          <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent" />
          <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent" />
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Light beam effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: layer3Y }}
      >
        <motion.div
          className="absolute -inset-[100%] opacity-[0.02]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, var(--secondary) 20deg, transparent 40deg)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default PremiumEffects; 