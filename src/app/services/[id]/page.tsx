'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getServiceById, getAllServiceIds } from '@/utils/services';
import HeroSection from '@/components/HeroSection';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';
import ServiceSidebar from '@/components/ServiceSidebar';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceClientWrapper from '@/components/ServiceClientWrapper';
import PremiumTimeline from '@/components/PremiumTimeline';

interface ServicePageProps {
  params: {
    id: string;
  };
}

// Force static generation for all service pages
export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static params for all valid service IDs
export async function generateStaticParams() {
  const ids = getAllServiceIds();
  return ids.map((id) => ({
    id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceById(params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found - Mi5Star Security',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} - Mi5Star Security`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    notFound();
  }

  return (
    <ServiceClientWrapper>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title={service.title}
          description={service.description}
          image="/hero-bg.svg"
          pattern="grid"
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
    </ServiceClientWrapper>
  );
} 