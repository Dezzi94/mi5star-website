'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';

const services = [
  {
    id: 'high-value-asset',
    title: 'High-Value Asset Protection',
    description: 'Comprehensive security solutions for valuable assets, from art collections to luxury properties.',
    icon: '🔒',
    features: [
      'Advanced surveillance systems',
      'Secure transportation',
      'Risk assessment and mitigation',
      'Emergency response protocols'
    ]
  },
  {
    id: 'corporate-risk-management',
    title: 'Corporate Risk Management',
    description: 'Strategic security planning and implementation for businesses and organizations.',
    icon: '🏢',
    features: [
      'Security audits and assessments',
      'Crisis management planning',
      'Staff training and development',
      'Cyber security integration'
    ]
  },
  {
    id: 'executive-protection',
    title: 'Executive Protection',
    description: 'Elite close protection services for VIPs, executives, and high-profile individuals.',
    icon: '👤',
    features: [
      'Personal security details',
      'Travel security planning',
      'Threat assessment',
      'Secure transportation'
    ]
  },
  {
    id: 'luxury-travel',
    title: 'Luxury Travel Security',
    description: 'Comprehensive security solutions for luxury travel and lifestyle experiences.',
    icon: '✈️',
    features: [
      'Travel risk assessment',
      'Secure transportation',
      'Location security',
      'Emergency response'
    ]
  }
];

const industries = [
  'Entertainment',
  'Corporate',
  'Government',
  'High-Net-Worth Individuals',
  'Luxury Brands'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.1) 0%, transparent 50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-gold bg-clip-text text-transparent">Premium Security</span>{' '}
            <span className="text-white">Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover our comprehensive range of <span className="bg-gradient-gold bg-clip-text text-transparent">elite security services</span>, tailored to meet the unique needs of our distinguished clientele.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <PremiumGlowEffect intensity="low">
                  <motion.div
                    className="h-full bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--secondary)]/10 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center border border-[var(--secondary)]/20">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--secondary)] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-white/70 mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-white/60">
                              <span className="w-1 h-1 rounded-full bg-[var(--secondary)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>
                </PremiumGlowEffect>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our expertise spans across various sectors, providing tailored security
              solutions for each industry's unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <PremiumGlowEffect
                key={industry}
                className="h-full"
                intensity="low"
                hover={true}
              >
                <motion.div
                  className="h-full bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-[var(--secondary)]/10 flex items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-white/90 font-medium">
                    {industry}
                  </p>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/95">
        <div className="container mx-auto px-4 text-center">
          <PremiumGlowEffect intensity="low" className="inline-block">
            <motion.div
              className="bg-black/80 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Elevate Your Security?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our premium security solutions can be
                tailored to your specific requirements.
              </p>
              <Link href="/contact">Get in Touch</Link>
            </motion.div>
          </PremiumGlowEffect>
        </div>
      </section>
    </div>
  );
} 