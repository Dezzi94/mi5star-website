import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity } from 'framer-motion';

const ScrollEffects = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Dynamic parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateX = useTransform(smoothVelocity, [-0.5, 0.5], [-10, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Scroll progress indicator
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', `${mouseX * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${mouseY * 100}%`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-px bg-[var(--secondary)]/10 z-50"
        style={{ opacity }}
      >
        <motion.div 
          className="h-full bg-[var(--secondary)]"
          style={{ width: progressHeight }}
        />
      </motion.div>

      {/* Scroll-based Parallax Layers */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Layer 1: Floating Elements */}
        <motion.div
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-32 h-32"
              style={{
                left: `${(i * 20)}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.03,
                background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* Layer 2: Perspective Grid */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: y2,
            rotateX,
            perspective: '1000px',
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, var(--secondary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--secondary) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.05,
            transform: 'rotateX(60deg)',
          }} />
        </motion.div>

        {/* Layer 3: Dynamic Light Rays */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0])
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute w-[200%] h-2"
              style={{
                left: '-50%',
                top: `${i * 25}%`,
                background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                transform: 'rotate(-35deg)',
              }}
              animate={{
                x: [-1000, 1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Layer 4: Mouse-following Gradient */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--secondary) 0%, transparent 50%)',
          }}
        />

        {/* Layer 5: Scroll Velocity Indicators */}
        <motion.div
          className="fixed top-1/2 right-8 h-32 w-px"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--secondary), transparent)',
            opacity: useTransform(smoothVelocity, [-1, 0, 1], [0.5, 0, 0.5]),
            scaleY: useTransform(smoothVelocity, [-1, 0, 1], [2, 1, 2]),
          }}
        />
      </div>

      {/* Scroll-triggered Section Transitions */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, var(--secondary) 0%, transparent 50%)',
          opacity: useTransform(scrollVelocity, [-0.5, 0, 0.5], [0.1, 0, 0.1]),
          scale: useTransform(scrollVelocity, [-0.5, 0, 0.5], [1.2, 1, 1.2]),
        }}
      />
    </>
  );
};

export default ScrollEffects; 