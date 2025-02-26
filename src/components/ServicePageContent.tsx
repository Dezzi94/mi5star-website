'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/utils/services';
import HeroSection from '@/components/HeroSection';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import PremiumTimeline from '@/components/PremiumTimeline';
import Image from 'next/image';

interface ServicePageContentProps {
  service: Service;
  id: string;
}

export default function ServicePageContent({ service, id }: ServicePageContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with improved layout */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/services/${id}.jpg`}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 px-6 py-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-6">
              Premium Service
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Elevating </span>
              <span className="text-[var(--secondary)]">{service.title}</span>
              <span className="text-white"> Excellence</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with improved spacing */}
      <div className="container mx-auto px-6">
        <div className="py-24 space-y-32">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative">
                <PremiumGlowEffect intensity="low">
                  <Image
                    src={`/services/${id}-overview.jpg`}
                    alt={`${service.title} Overview`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                  />
                </PremiumGlowEffect>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-4">
                    Overview
                  </span>
                  <h2 className="text-4xl font-bold mb-6">
                    Why Choose Our <span className="text-[var(--secondary)]">{service.title}</span>
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {service.longDescription || service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-[var(--secondary)] text-xl mt-1">✦</span>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-white/70">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Features Section */}
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
                    <div className="group relative h-full bg-black/40 backdrop-blur-sm border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/30 rounded-lg p-8 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4 group-hover:text-[var(--secondary)]">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent" />
                        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent" />
                        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent" />
                      </div>
                    </div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
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
                    <div className="group h-full bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/30 transition-all duration-300">
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl text-[var(--secondary)]">✦</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3 group-hover:text-[var(--secondary)]">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                        {benefit.description}
                      </p>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent" />
                        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent" />
                        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent" />
                      </div>
                    </div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Timeline */}
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

          {/* Enhanced CTA Section */}
          <section className="relative">
            <PremiumGlowEffect intensity="medium">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-[var(--secondary)]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent" />
                </div>

                <div className="relative z-10 px-8 py-16 md:p-16 text-center">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 mb-6">
                    Get Started
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Experience Premium
                    <span className="block text-[var(--secondary)]">{service.title}?</span>
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                    Contact us today to discuss how our {service.title.toLowerCase()} services can be tailored to your specific requirements.
                  </p>
                  <AnimatedButton href="/contact" className="text-lg">
                    Schedule a Consultation
                  </AnimatedButton>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--secondary)] to-transparent" />
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32">
                  <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--secondary)] to-transparent" />
                  <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[var(--secondary)] to-transparent" />
                </div>
              </motion.div>
            </PremiumGlowEffect>
          </section>
        </div>
      </div>
    </div>
  );
} 