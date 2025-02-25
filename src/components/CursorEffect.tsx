import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CursorEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);
  
  const springConfig = { damping: 35, stiffness: 450, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(scale, springConfig);
  
  const rotation = useTransform(
    cursorXSpring,
    [-100, window.innerWidth + 100],
    [-30, 30]
  );

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('interactive');
      
      setIsHovered(isInteractive);
      scale.set(isInteractive ? 1.5 : 1);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(0.9);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(isHovered ? 1.5 : 1);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, scale, isHovered]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[var(--secondary)] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: scaleSpring,
          rotate: rotation,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-[var(--secondary)] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: scaleSpring,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          borderWidth: isHovered ? '2px' : '1px',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-40 opacity-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: scaleSpring,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(211, 171, 83, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Magnetic field effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {isHovered && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-[var(--secondary)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
              x: [
                0,
                Math.cos(i * 45 * (Math.PI / 180)) * 30,
                Math.cos(i * 45 * (Math.PI / 180)) * 40
              ],
              y: [
                0,
                Math.sin(i * 45 * (Math.PI / 180)) * 30,
                Math.sin(i * 45 * (Math.PI / 180)) * 40
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.div
            className="w-12 h-12 border-2 border-[var(--secondary)] rounded-full"
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}

      {/* Trail effect */}
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: 'var(--secondary)',
                filter: 'blur(2px)',
              }}
              animate={{
                opacity: [0.3, 0],
                scale: [1, 0.5],
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CursorEffect; 