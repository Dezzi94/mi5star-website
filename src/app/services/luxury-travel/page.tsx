'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getServiceById } from '@/utils/services';
import HeroSection from '@/components/HeroSection';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import PremiumTimeline from '@/components/PremiumTimeline';
import { notFound } from 'next/navigation';

export default function LuxuryTravelSecurityPage() {
  const service = getServiceById('luxury-travel');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        description={service.description}
        pattern="grid"
        image="/hero-bg.svg"
      />

      {/* Features Section */}
      <section id="features" className="mb-24">
        <PremiumGlowEffect intensity="low" className="mb-16">
          <div className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--secondary)]/10">
            <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-[var(--secondary)]">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </PremiumGlowEffect>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-12">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {service.benefits.map((benefit, index) => (
            <PremiumGlowEffect key={index} intensity="low">
              <motion.div
                className="h-full bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-[var(--secondary)]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </motion.div>
            </PremiumGlowEffect>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="mb-24">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Our Process
          </span>
        </motion.h2>
        <PremiumTimeline 
          items={service.process.map(step => ({
            title: step.title,
            description: step.description,
            icon: '✨'
          }))} 
        />
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <PremiumGlowEffect intensity="medium">
          <div className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--secondary)]/10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our luxury travel security services can ensure your peace of mind.
            </p>
            <AnimatedButton href="/contact" variant="primary">
              Get Started
            </AnimatedButton>
          </div>
        </PremiumGlowEffect>
      </section>
    </>
  );
} 