'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getServiceById } from '@/utils/services';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import { notFound } from 'next/navigation';

export default function CybersecurityPage() {
  const service = getServiceById('cybersecurity');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    notFound();
  }

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
        <div className="container mx-auto px-8">
          <AnimatedText
            animate="letters"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {service.title}
          </AnimatedText>
          <motion.p
            className="text-lg text-white/70 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
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
                    <h3 className="text-xl font-semibold text-white">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Benefits</h2>
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
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70">
                    {benefit.description}
                  </p>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Our Process</h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <PremiumGlowEffect key={index} intensity="low">
                <motion.div
                  className="bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-[var(--secondary)]/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center border border-[var(--secondary)]/20">
                        <span className="text-[var(--secondary)] font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-8">
          <PremiumGlowEffect intensity="low">
            <motion.div
              className="bg-black/80 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our {service.title.toLowerCase()} services can be tailored to your specific requirements.
              </p>
              <AnimatedButton href="/contact">Get in Touch</AnimatedButton>
            </motion.div>
          </PremiumGlowEffect>
        </div>
      </section>
    </div>
  );
} 