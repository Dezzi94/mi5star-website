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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Premium Background Effects */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Enhanced Grid Pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Luxury Light Rays */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: `rotate(${i * 72}deg)`,
              opacity: 0.03,
            }}
          >
            <motion.div
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"
              animate={{
                translateX: ['-100%', '100%'],
              }}
              transition={{
                duration: 7 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          </motion.div>
        ))}

        <div className="container relative z-10 px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Premium Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-12"
            >
              <PremiumGlowEffect intensity="high" hover={true}>
                <motion.span 
                  className="inline-block px-8 py-3 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 backdrop-blur-md"
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
                  <span className="mr-2">✦</span>
                  Global Excellence in Security
                  <span className="ml-2">✦</span>
                </motion.span>
              </PremiumGlowEffect>
            </motion.div>

            {/* Enhanced Title */}
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
                  Global Leaders in
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
                    Elite Security
                  </AnimatedText>
                </motion.div>
              </h1>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Since our inception, Mi5Star has set the <span className="text-[var(--secondary)]">gold standard</span> in premium security solutions, serving elite clientele across the globe with unparalleled expertise and discretion.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            >
              {[
                { number: "20+", label: "Years of Excellence" },
                { number: "100+", label: "Elite Clients Worldwide" },
                { number: "24/7", label: "Global Operations" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <PremiumGlowEffect intensity="low" hover={true}>
                    <motion.div
                      className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[var(--secondary)]/10"
                      whileHover={{
                        borderColor: "rgba(211,171,83,0.3)",
                      }}
                    >
                      <h3 className="text-4xl font-bold text-[var(--secondary)] mb-2">{stat.number}</h3>
                      <p className="text-white/70">{stat.label}</p>
                    </motion.div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              x: [0, (Math.random() - 0.5) * 400],
              y: [0, (Math.random() - 0.5) * 400],
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
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)] blur-[2px] opacity-40" />
          </motion.div>
        ))}
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