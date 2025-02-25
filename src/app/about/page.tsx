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
      <section className="relative py-24 overflow-hidden bg-black/90">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4">
          <AnimatedText
            animate="letters"
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-gold bg-clip-text text-transparent mb-6"
          >
            Global Leaders in Elite Security
          </AnimatedText>
          <motion.p
            className="text-lg text-white/70 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Since our inception, Mi5Star has set the gold standard in premium security solutions,
            serving elite clientele across the globe with unparalleled expertise and discretion.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Legacy of Excellence</h2>
              <div className="space-y-4 text-white/70">
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
                className="relative h-[400px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/security-operations.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white/90 text-sm">
                    State-of-the-art security operations center
                  </p>
                </div>
              </motion.div>
            </PremiumGlowEffect>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-gold bg-clip-text text-transparent">Leadership</h2>
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-[var(--secondary)]/10 p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="relative w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/jongraves.jpg"
                  alt="Jon Graves - Founder & CEO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">Jon Graves</h3>
                <p className="text-white/70 mb-4">Founder & CEO</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span>
                    Former Special Forces Commander
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span>
                    20+ years in elite security operations
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span>
                    Advanced degree in Risk Management
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span>
                    Certified Protection Professional (CPP)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              With strategic locations worldwide, we provide seamless security solutions
              across borders, ensuring our clients receive consistent, premium service
              wherever they are.
            </p>
          </motion.div>

          <LocationsGrid showAll={true} className="mb-12" />

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
      <section className="py-24 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <PremiumGlowEffect intensity="low" className="inline-block">
            <motion.div
              className="bg-black/80 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how Mi5Star can provide you with world-class security
                solutions tailored to your unique needs.
              </p>
              <AnimatedButton href="/contact">Get in Touch</AnimatedButton>
            </motion.div>
          </PremiumGlowEffect>
        </div>
      </section>
    </main>
  );
} 