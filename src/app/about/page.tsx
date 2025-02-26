'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import LocationsGrid from '@/components/LocationsGrid';
import AnimatedButton from '@/components/AnimatedButton';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black/90">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        {/* Premium grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20">
                About Mi5Star
              </span>
            </div>
            <AnimatedText
              animate="letters"
              className="text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-8"
            >
              <span className="text-white">Global Leaders in </span>
              <span className="bg-gradient-gold bg-clip-text text-transparent">Elite Security</span>
            </AnimatedText>
            <motion.p
              className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Since our inception, Mi5Star has set the gold standard in premium security solutions,
              serving elite clientele across the globe with unparalleled expertise and discretion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-black/95 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(211, 171, 83, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Our Legacy of <span className="text-[var(--secondary)]">Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-white/70">
                <p>
                  Mi5Star represents the pinnacle of security and risk management services,
                  combining decades of expertise with cutting-edge technology and methodologies.
                </p>
                <p>
                  Our commitment to excellence has earned us the trust of high-net-worth individuals,
                  corporate leaders, and prestigious organizations worldwide.
                </p>
              </div>
            </motion.div>
            <PremiumGlowEffect intensity="low" className="h-full">
              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: 'url(/luxury-car.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/90 text-lg font-medium mb-2">Premium Fleet</p>
                  <p className="text-white/70">
                    State-of-the-art armored vehicles for secure transportation
                  </p>
                </div>
              </motion.div>
            </PremiumGlowEffect>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(211, 171, 83, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">Leadership</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <PremiumGlowEffect intensity="low">
              <motion.div
                className="bg-black/80 backdrop-blur-sm rounded-2xl border border-[var(--secondary)]/10 p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <motion.div
                    className="relative w-full md:w-[280px] aspect-square rounded-2xl overflow-hidden shrink-0 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/jongraves.jpg"
                      alt="Jon Graves - Founder & CEO"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-[var(--secondary)] mb-2">Jon Graves</h3>
                      <p className="text-white/70 text-lg mb-6">Founder & CEO</p>
                      <ul className="space-y-4">
                        {[
                          'Former Special Forces Commander',
                          '20+ years in elite security operations',
                          'Advanced degree in Risk Management',
                          'Certified Protection Professional (CPP)'
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-3 text-white/80"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)]"></span>
                            <span className="text-lg">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </PremiumGlowEffect>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-black/95 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
              Worldwide Coverage
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Global <span className="text-[var(--secondary)]">Presence</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              With strategic locations worldwide, we provide seamless security solutions
              across borders, ensuring our clients receive consistent, premium service
              wherever they are.
            </p>
          </motion.div>

          <PremiumGlowEffect intensity="low" className="mb-16">
            <LocationsGrid showAll={true} className="mb-12" />
          </PremiumGlowEffect>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/50 text-sm">
              Additional operational presence in various strategic locations worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black/90 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 text-center">
          <PremiumGlowEffect intensity="low" className="inline-block">
            <motion.div
              className="bg-black/80 backdrop-blur-sm p-16 rounded-2xl border border-[var(--secondary)]/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-24">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent" />
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent" />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your <span className="text-[var(--secondary)]">Future</span>?
                </h2>
                <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                  Contact us to discuss how Mi5Star can provide you with world-class security
                  solutions tailored to your unique needs.
                </p>
                <AnimatedButton href="/contact" className="text-lg">
                  Get in Touch
                </AnimatedButton>
              </motion.div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[var(--secondary)]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, -50],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
              ))}
            </motion.div>
          </PremiumGlowEffect>
        </div>
      </section>
    </main>
  );
} 