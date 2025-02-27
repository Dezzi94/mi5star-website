'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import PremiumCard from "@/components/PremiumCard";
import { slideInFromLeft, slideInFromRight, fadeIn, floatingAnimation } from "@/utils/animations";
import CursorEffect from "@/components/CursorEffect";
import HeroBackground from "@/components/HeroBackground";
import PremiumEffects from "@/components/PremiumEffects";
import ScrollEffects from "@/components/ScrollEffects";
import PremiumGlowEffect from "@/components/PremiumGlowEffect";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -20]);
  
  // Smooth scroll progress for enhanced animations
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  });

  // Dynamic transforms for section transitions
  const translateY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(smoothProgress, [0, 1], [2, -2]);

  return (
    <>
      <CursorEffect />
      <PremiumEffects />
      <ScrollEffects />
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black opacity-90" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden"
        style={{ scale, opacity, y }}
      >
        {/* Premium gradient background */}
        <div className="absolute inset-0 z-0">
          {/* Main radial gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(211, 171, 83, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(211, 171, 83, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(211, 171, 83, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(211, 171, 83, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(211, 171, 83, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(211, 171, 83, 0.15) 0%, transparent 50%)',
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              opacity: 0.05,
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="heading-xl mb-6">
              <AnimatedText animate="letters">Setting the Standard in</AnimatedText>{' '}
              <AnimatedText animate="letters" className="text-gradient">Elite Security</AnimatedText>
            </div>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Mi5Star has been providing world-class security solutions to discerning clients for over two decades, 
              combining expertise, innovation, and unwavering commitment to excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <AnimatedButton href="/contact" variant="primary">
                Get Started
              </AnimatedButton>
            </motion.div>
          </div>
        </div>

        {/* Subtle animated particles */}
        {[...Array(8)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--secondary)]"
              initial={{
                opacity: 0,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.2, 0],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 50}%`],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </motion.section>

      {/* Enhanced Featured Services Section */}
      <AnimatedSection 
        className="py-20 relative"
        style={{
          background: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [
              'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5), transparent)',
              'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7), transparent)',
              'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5), transparent)',
            ]
          )
        }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0, 0.1, 0]),
            backgroundImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--secondary) 0%, transparent 50%)',
          }}
        />

        <div className="container relative z-10">
          {/* Premium accent lines with dynamic animation */}
          <motion.div
            className="absolute -top-px left-0 right-0 h-px"
            style={{
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                  'linear-gradient(90deg, transparent, var(--secondary), var(--secondary), transparent)',
                  'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                ]
              ),
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
            }}
          />

          {/* Section content with enhanced animations */}
          <motion.div
            className="relative"
            style={{
              opacity: sectionOpacity,
              y: translateY,
              rotateX,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background: 'radial-gradient(circle at center, var(--secondary), transparent 70%)',
                }}
              />
              <AnimatedText 
                animate="words" 
                className="heading-xl text-center mb-12 px-4 sm:px-6 relative z-10"
              >
                <span className="bg-gradient-to-r from-[#d3ab53] via-[#f0c675] to-[#d3ab53] bg-clip-text text-transparent drop-shadow-[0_5px_35px_rgba(211,171,83,0.15)]">
                  Premium Security Solutions
                </span>
              </AnimatedText>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PremiumCard
                title="High-Value Asset Protection"
                description="Comprehensive protection strategies for luxury goods, fine art, jewelry, and confidential documents with secure transportation & storage solutions."
                href="/services/asset-protection"
                icon={
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              />

              <PremiumCard
                title="Executive Protection"
                description="Elite personal security for high-profile individuals, celebrities, and corporate executives with 24/7 close protection services."
                href="/services/executive-protection"
                icon={
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />

              <PremiumCard
                title="Corporate Risk Management"
                description="Strategic security planning, threat intelligence, and operational risk assessments for global businesses."
                href="/services/corporate-risk-management"
                icon={
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />

              <PremiumCard
                title="Luxury Travel Security"
                description="Bespoke travel experiences with private jet charters, yacht services, and exclusive VIP hospitality arrangements."
                href="/services/luxury-travel"
                icon={
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* Bottom accent line with dynamic animation */}
          <motion.div
            className="absolute -bottom-px left-0 right-0 h-px"
            style={{
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                  'linear-gradient(90deg, transparent, var(--secondary), var(--secondary), transparent)',
                  'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                ]
              ),
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
            }}
          />
        </div>
      </AnimatedSection>

      {/* Enhanced Sections with 3D Transforms */}
      {/* Leadership Section */}
      <AnimatedSection 
        className="py-20 relative"
        style={{
          transform: useTransform(smoothProgress, [0, 1], ['perspective(1000px) rotateX(0deg)', 'perspective(1000px) rotateX(2deg)']),
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedText animate="words" className="heading-lg mb-6">
              World-Class Leadership
            </AnimatedText>
            <motion.div
              className="bg-black/50 backdrop-blur-premium p-8 rounded-lg border border-[var(--secondary)]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-4">Jon Graves - Founder & CEO</h3>
              <p className="text-white/90 mb-4">
                With over 20 years of experience in risk management, Jon Graves is a world-renowned VIP support consultant. His background includes elite military training and Specialist Police Firearms Officer experience.
              </p>
              <p className="text-white/80">
                Under Jon's leadership, Mi5Star continues to set the gold standard in executive protection and risk management.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials with Dynamic Backgrounds */}
      <AnimatedSection 
        className="py-20 relative"
        style={{
          background: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [
              'linear-gradient(45deg, transparent, rgba(211, 171, 83, 0.05), transparent)',
              'linear-gradient(45deg, transparent, rgba(211, 171, 83, 0.1), transparent)',
              'linear-gradient(45deg, transparent, rgba(211, 171, 83, 0.05), transparent)',
            ]
          )
        }}
      >
        <div className="container">
          <AnimatedText animate="words" className="heading-lg text-center mb-12">
            Client Testimonials
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-black/50 backdrop-blur-premium p-8 rounded-lg border border-[var(--secondary)]/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/90 italic mb-4">
                "I have had the pleasure of working with Jonathan on more than one occasion and cannot fault his professionalism, detailed planning, and personal attention. His presence and local knowledge ensured that the needs of the entire party were prioritized without compromise."
              </p>
              <p className="text-[var(--secondary)] font-semibold">Mark H, Security Director for Sir Paul McCartney</p>
            </motion.div>

            <motion.div
              className="bg-black/50 backdrop-blur-premium p-8 rounded-lg border border-[var(--secondary)]/30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/90 italic mb-4">
                "In 2017, I traveled to Sydney from America with a very high-profile British celebrity. I was impressed by Jon Graves' professionalism and flawless delivery of all our needs. I would highly recommend Jon Graves and Mi5Star for any high-profile travel or security operation."
              </p>
              <p className="text-[var(--secondary)] font-semibold">Steve G, Security Director for Music Talent</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Global Presence with Floating Effect */}
      <AnimatedSection 
        className="py-20 relative overflow-hidden"
        style={{
          perspective: "2000px",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--secondary) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="container">
          <AnimatedText animate="words" className="heading-lg text-center mb-12">
            Global Presence
          </AnimatedText>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              "Australia", "Hong Kong", "United Kingdom", "United States", "New Zealand",
              "Singapore", "China", "India", "Japan", "Korea", "Indonesia"
            ].map((location, index) => (
              <motion.div
                key={location}
                className="text-center p-4 rounded-lg bg-black/30 border border-[var(--secondary)]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90">{location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section with Dynamic Gradients */}
      <AnimatedSection 
        className="py-20 relative"
        style={{
          background: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [
              'linear-gradient(to right, transparent, rgba(211, 171, 83, 0.05), transparent)',
              'linear-gradient(to right, transparent, rgba(211, 171, 83, 0.1), transparent)',
              'linear-gradient(to right, transparent, rgba(211, 171, 83, 0.05), transparent)',
            ]
          )
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "1000+", label: "Successful Operations" },
              { number: "50+", label: "Countries Served" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-gold text-transparent bg-clip-text mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
    </div>
      </AnimatedSection>
    </>
  );
}
