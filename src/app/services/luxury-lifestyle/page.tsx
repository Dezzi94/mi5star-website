'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';

const features = [
  {
    title: 'Private Aviation',
    description: 'Secure private jet services with comprehensive security protocols and luxury amenities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Yacht Security',
    description: 'Elite protection for luxury vessels, ensuring safety during maritime adventures.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Event Protection',
    description: 'Comprehensive security for private events and exclusive gatherings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Venue Security',
    description: 'Advanced security measures for luxury properties and exclusive locations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

const services = [
  {
    title: 'Travel Services',
    items: [
      'Private Jet Charters',
      'Luxury Ground Transportation',
      'Yacht Charters',
      'Helicopter Transfers'
    ]
  },
  {
    title: 'Event Planning',
    items: [
      'Private Celebrations',
      'Corporate Functions',
      'VIP Entertainment',
      'Exclusive Experiences'
    ]
  },
  {
    title: 'Lifestyle Management',
    items: [
      'Personal Security',
      'Property Protection',
      'Asset Management',
      'Privacy Services'
    ]
  }
];

export default function LuxuryLifestylePage() {
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
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-6"
          >
            Luxury Travel & Lifestyle
          </AnimatedText>
          <motion.p
            className="text-lg text-white/70 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium security and lifestyle services for discerning clients who demand
            excellence in every aspect of their travel and leisure experiences.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <PremiumGlowEffect
                key={feature.title}
                className="h-full"
                intensity="low"
                hover={true}
              >
                <motion.div
                  className="h-full bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--secondary)]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-[var(--secondary)] mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Premium Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience unparalleled luxury with our comprehensive range of travel
              and lifestyle services, each delivered with the highest level of security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <PremiumGlowEffect
                key={service.title}
                className="h-full"
                intensity="low"
                hover={true}
              >
                <motion.div
                  className="h-full bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-[var(--secondary)]/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-center text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto px-4">
          <PremiumGlowEffect intensity="low" className="rounded-2xl overflow-hidden">
            <motion.div
              className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-[var(--secondary)]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">The Mi5Star Experience</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Personalized Service',
                    description: 'Bespoke solutions tailored to your unique preferences and requirements.'
                  },
                  {
                    title: 'Global Network',
                    description: 'Access to exclusive venues and services worldwide through our premium partnerships.'
                  },
                  {
                    title: 'Seamless Integration',
                    description: 'Perfect blend of luxury service and comprehensive security measures.'
                  },
                  {
                    title: 'Privacy Assured',
                    description: 'Absolute discretion and confidentiality in all aspects of service delivery.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </PremiumGlowEffect>
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
                Elevate Your Lifestyle
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Contact us to discover how our luxury travel and lifestyle services can
                transform your experiences with unparalleled security and sophistication.
              </p>
              <AnimatedButton href="/contact">Get in Touch</AnimatedButton>
            </motion.div>
          </PremiumGlowEffect>
        </div>
      </section>
    </main>
  );
} 