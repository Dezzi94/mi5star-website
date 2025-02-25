'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getServiceById } from '@/utils/services';
import HeroSection from '@/components/HeroSection';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import ServiceSidebar from '@/components/ServiceSidebar';
import { notFound } from 'next/navigation';

export default function HighValueAssetPage() {
  const service = getServiceById('high-value-asset');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        description={service.description}
        pattern="grid"
        image="/hero-bg.svg"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-24">
          {/* Main Content */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Features Section */}
            <section id="features" className="mb-24">
              <PremiumGlowEffect intensity="low" className="mb-16">
                <div className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--secondary)]/10">
                  <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="space-y-2"
                      >
                        <h3 className="text-xl font-semibold text-[var(--secondary)]">
                          {feature.title}
                        </h3>
                        <p className="text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PremiumGlowEffect>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-24">
              <h2 className="text-3xl font-bold text-white mb-12">Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => (
                  <PremiumGlowEffect key={index} intensity="low">
                    <div
                      className="h-full bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-[var(--secondary)]/10"
                    >
                      <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70">
                        {benefit.description}
                      </p>
                    </div>
                  </PremiumGlowEffect>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="mb-24">
              <h2 className="text-3xl font-bold text-white mb-12">Our Process</h2>
              <div className="relative">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <PremiumGlowEffect key={index} intensity="low" className="mb-8">
                      <motion.div 
                        className="bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-[var(--secondary)]/10 cursor-pointer"
                        whileHover={{ scale: 1.02, borderColor: 'rgba(211,171,83,0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start gap-6">
                          <motion.div 
                            className="flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          >
                            <div className="w-16 h-16 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center border border-[var(--secondary)]/20">
                              <span className="text-[var(--secondary)] text-2xl font-bold">{index + 1}</span>
                            </div>
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-3">
                              {step.title}
                            </h3>
                            <p className="text-white/70 text-lg">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </PremiumGlowEffect>
                  </motion.div>
                ))}
                {/* Animated Connecting Line */}
                <motion.div 
                  className="absolute left-[2.5rem] top-0 bottom-0 w-px"
                  style={{
                    background: 'linear-gradient(to bottom, var(--secondary), transparent)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black/50 rounded-2xl overflow-hidden">
              <PremiumGlowEffect intensity="low">
                <div className="bg-black/80 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10 text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-gold bg-clip-text text-transparent">
                      Ready to Enhance Your Security?
                    </span>
                  </h2>
                  <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                    Contact us to discuss how our {service.title.toLowerCase()} services can be tailored to your specific requirements.
                  </p>
                  <AnimatedButton href="/contact">Get in Touch</AnimatedButton>
                </div>
              </PremiumGlowEffect>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px] flex-shrink-0 order-1 lg:order-2">
            <div className="sticky top-24">
              <ServiceSidebar service={service} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 