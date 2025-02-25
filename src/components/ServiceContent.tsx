'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Service } from '@/utils/services';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import Image from 'next/image';

interface ServiceContentProps {
  service: Service;
}

const ServiceContent = ({ service }: ServiceContentProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, 20]);

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{ opacity, scale, y: translateY }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.15), transparent 70%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              {service.description}
            </p>
            <AnimatedButton href="/contact">Get Started</AnimatedButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-6 h-6 text-[var(--secondary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Key Features</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Discover the advanced capabilities that set our service apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PremiumGlowEffect className="h-full rounded-2xl" intensity="low">
                  <div className="relative h-full p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-[var(--secondary)]/10">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8">
                      <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent" />
                      <div className="absolute top-0 left-0 h-px w-8 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8">
                      <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent" />
                      <div className="absolute bottom-0 right-0 h-px w-8 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-[var(--secondary)]">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </PremiumGlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-24">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Experience the advantages of choosing our premium security solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <PremiumGlowEffect className="h-full rounded-2xl" intensity="low">
                    <div className="relative h-full p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-[var(--secondary)]/10">
                      <h3 className="text-xl font-bold mb-4 text-[var(--secondary)]">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && (
        <section className="py-24 bg-black/50">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Our Process</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Understanding our systematic approach to ensuring your security
              </p>
            </motion.div>

            <div className="space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <PremiumGlowEffect className="rounded-2xl" intensity="low">
                    <div className="relative p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-[var(--secondary)]/10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center border border-[var(--secondary)]/20">
                            <span className="text-[var(--secondary)] font-bold">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-[var(--secondary)]">
                            {step.title}
                          </h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </PremiumGlowEffect>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <PremiumGlowEffect className="rounded-2xl" intensity="low">
            <div className="relative overflow-hidden p-12 bg-black/80 backdrop-blur-xl rounded-2xl border border-[var(--secondary)]/10">
              {/* Background Effects */}
              <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(211, 171, 83, 0.15), transparent 70%)',
                }}
              />

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent" />
                <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-[var(--secondary)]/30 to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--secondary)]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="text-gradient">Ready to Secure Your Future?</span>
                  </h2>
                  <p className="text-lg text-white/70 mb-8">
                    Contact our team of experts today and discover how we can help protect what matters most to you.
                  </p>
                  <AnimatedButton href="/contact">
                    Get Started Today
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>
          </PremiumGlowEffect>
        </div>
      </section>
    </div>
  );
};

export default ServiceContent; 