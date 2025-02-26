'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Service } from '@/utils/services';
import HeroSection from '@/components/HeroSection';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import PremiumTimeline from '@/components/PremiumTimeline';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';

interface ServicePageContentProps {
  service: Service;
  id: string;
}

export default function ServicePageContent({ service, id }: ServicePageContentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const springConfig = { stiffness: 100, damping: 30, mass: 0.2 };
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.95]), springConfig);
  const y = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -50]), springConfig);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Enhanced Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale, y }}
      >
        {/* Ultra Premium Hero Section */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Multi-layered gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          
          {/* Dynamic gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(211,171,83,0.15), rgba(0,0,0,0.8) 50%)`,
              filter: 'blur(30px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(211, 171, 83, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(211, 171, 83, 0.03) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Light rays effect */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute inset-0 overflow-hidden opacity-[0.03]"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
            >
              <motion.div
                className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Content Container with Enhanced Layout */}
        <div className="container relative z-10 px-8 py-24 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Ultra Premium Label with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-16"
            >
              <PremiumGlowEffect intensity="high" hover={true}>
                <motion.span 
                  className="inline-block px-8 py-3 rounded-full text-sm font-medium bg-black/40 text-[var(--secondary)] border border-[var(--secondary)]/30 backdrop-blur-md"
                  whileHover={{
                    boxShadow: [
                      "0 0 20px rgba(211,171,83,0.3)",
                      "0 0 30px rgba(211,171,83,0.2)",
                      "0 0 20px rgba(211,171,83,0.3)"
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                >
                  <span className="mr-2 opacity-70">✦</span>
                  Exclusive Service
                  <span className="ml-2 opacity-70">✦</span>
                </motion.span>
              </PremiumGlowEffect>
            </motion.div>

            {/* Enhanced Luxury Title Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight">
                <motion.span 
                  className="block text-white opacity-90 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Elevating
                </motion.span>
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <AnimatedText 
                    animate="letters"
                    className="relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#d3ab53] via-[#f0c675] to-[#d3ab53] drop-shadow-[0_5px_15px_rgba(211,171,83,0.3)]"
                  >
                    {service.title}
                  </AnimatedText>
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, var(--secondary), transparent)',
                    }}
                  />
                </motion.div>
                <motion.span 
                  className="block text-white opacity-90 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Excellence
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Premium Description */}
            <motion.p
              className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-[var(--secondary)]">Premium</span>{' '}
              {service.description}
            </motion.p>

            {/* Enhanced Luxury CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-16"
            >
              <PremiumGlowEffect intensity="high" hover={true}>
                <AnimatedButton 
                  href="/contact" 
                  variant="primary"
                  className="inline-block px-8 py-4"
                >
                  Schedule Private Consultation
                </AnimatedButton>
              </PremiumGlowEffect>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Luxury Decorative Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Enhanced Premium Corner Accents */}
          <div className="absolute top-0 left-0 w-96 h-96">
            <motion.div 
              className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] via-[#f0c675] to-transparent"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.div 
              className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] via-[#f0c675] to-transparent"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96">
            <motion.div 
              className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] via-[#f0c675] to-transparent"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] via-[#f0c675] to-transparent"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Enhanced Luxury Floating Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                x: [0, (Math.random() - 0.5) * 300],
                y: [0, (Math.random() - 0.5) * 300],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              style={{
                left: `${50 + (Math.random() - 0.5) * 50}%`,
                top: `${50 + (Math.random() - 0.5) * 50}%`,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-[var(--secondary)] blur-[3px] opacity-60" />
              <div className="w-2 h-2 rounded-full bg-white/30 blur-[2px] absolute" />
              <div className="w-1 h-1 rounded-full bg-[#f0c675]/50 blur-[1px] absolute" />
            </motion.div>
          ))}

          {/* Enhanced Premium Light Rays */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute inset-0"
                initial={{ opacity: 0, rotate: 36 + i * 72 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1],
                  rotate: [36 + i * 72, 72 + i * 72],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  background: `linear-gradient(${45 + i * 45}deg, transparent, var(--secondary), transparent)`,
                  filter: 'blur(12px)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content with improved spacing and animations */}
      <div className="container mx-auto px-6">
        <div className="py-24 space-y-32">
          {/* Enhanced Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative">
                <PremiumGlowEffect intensity="low">
                  <motion.div
                    className="relative rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={`/services/${id}-overview.jpg`}
                      alt={`${service.title} Overview`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-[4/3]"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/10 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </PremiumGlowEffect>
              </div>

              <div className="space-y-8">
                <div>
                  <motion.span
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    Overview
                  </motion.span>
                  <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Our{' '}
                    <motion.span
                      className="text-[var(--secondary)]"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {service.title}
                    </motion.span>
                  </motion.h2>
                  <motion.p
                    className="text-lg text-white/70 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {service.longDescription || service.description}
                  </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--secondary)]/5 transition-colors duration-300"
                    >
                      <span className="text-[var(--secondary)] text-xl mt-1 group-hover:scale-110 transition-transform duration-300">✦</span>
                      <div>
                        <h3 className="font-semibold mb-2 group-hover:text-[var(--secondary)] transition-colors duration-300">{feature.title}</h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Enhanced Features Section */}
          <section id="features" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
                Features
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Key <span className="text-[var(--secondary)]">Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PremiumGlowEffect intensity="low" hover={true}>
                    <motion.div
                      className="group relative h-full bg-black/40 backdrop-blur-sm border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/30 rounded-lg p-8 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4 group-hover:text-[var(--secondary)]">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Enhanced Corner Accents */}
                      <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent"
                          animate={{ height: ["0%", "100%"] }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent"
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent"
                          animate={{ height: ["0%", "100%"] }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent"
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Enhanced Benefits Section */}
          <section id="benefits" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
                Benefits
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="text-[var(--secondary)]">Our Service</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PremiumGlowEffect intensity="low" hover={true}>
                    <motion.div
                      className="group h-full bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-2xl text-[var(--secondary)]">✦</span>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </motion.div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Enhanced Process Timeline */}
          <section id="process" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
                Process
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-[var(--secondary)]">Approach</span>
              </h2>
            </motion.div>

            <PremiumGlowEffect intensity="low">
              <div className="bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10">
                <PremiumTimeline 
                  items={service.process.map(step => ({
                    title: step.title,
                    description: step.description,
                    icon: '✦'
                  }))} 
                />
              </div>
            </PremiumGlowEffect>
          </section>

          {/* Ultra Premium CTA Section */}
          <section className="relative">
            <PremiumGlowEffect intensity="medium">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-[var(--secondary)]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, var(--secondary)/10 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, var(--secondary)/10 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, var(--secondary)/10 0%, transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 px-8 py-16 md:p-16 text-center">
                  <motion.span
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    Get Started
                  </motion.span>
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to Experience Premium
                    <motion.span
                      className="block text-[var(--secondary)]"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {service.title}?
                    </motion.span>
                  </motion.h2>
                  <motion.p
                    className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Contact us today to discuss how our {service.title.toLowerCase()} services can be tailored to your specific requirements.
                  </motion.p>
                  <motion.div
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <AnimatedButton
                      href="/contact"
                      className="inline-block px-8"
                    >
                      Schedule Private Consultation
                    </AnimatedButton>
                  </motion.div>
                </div>

                {/* Enhanced Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32">
                  <motion.div
                    className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32">
                  <motion.div
                    className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            </PremiumGlowEffect>
          </section>
        </div>
      </div>
    </div>
  );
} 