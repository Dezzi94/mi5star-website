'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';
import AnimatedButton from '@/components/AnimatedButton';

const caseStudies = [
  {
    title: "Musical Talent Protection",
    client: "High-profile British musician",
    challenge: "Provide executive protection while ensuring a seamless international tour experience.",
    solution: [
      "Customized risk assessment for all travel destinations",
      "Coordinated with local law enforcement & security agencies",
      "Provided 24/7 security detail and secure transportation"
    ],
    outcome: "Successfully completed the tour without incident while ensuring maximum privacy and security.",
    testimonial: {
      text: "I have had the pleasure of working with Jonathan on more than one occasion and cannot fault his professionalism, detailed planning, and personal attention. His presence and local knowledge ensured that the needs of the entire party were prioritized without compromise.",
      author: "Mark H",
      position: "Security Director for Sir Paul McCartney"
    }
  },
  {
    title: "Corporate Executive Security & Risk Assessment",
    client: "Fortune 500 CEO",
    challenge: "High-risk corporate travel requiring strategic risk mitigation.",
    solution: [
      "Conducted pre-travel intelligence reports and risk mitigation strategies",
      "Provided on-ground close protection officers and local security team integration"
    ],
    outcome: "Safe travel and execution of high-level business operations in sensitive regions.",
    testimonial: {
      text: "In 2017, I traveled to Sydney from America with a very high-profile British celebrity. I was impressed by Jon Graves' professionalism and flawless delivery of all our needs. I would highly recommend Jon Graves and Mi5Star for any high-profile travel or security operation.",
      author: "Steve G",
      position: "Security Director for Music Talent"
    }
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText className="heading-xl mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </AnimatedText>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover how Mi5Star delivers exceptional security solutions through our proven track record
              of successful operations worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <PremiumGlowEffect
                key={study.title}
                className="rounded-2xl"
                intensity="medium"
                hover={true}
              >
                <motion.div
                  className="bg-black/30 backdrop-blur-sm p-12 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Case Study Details */}
                    <div className="space-y-8">
                      <div>
                        <h2 className="heading-lg text-gradient mb-4">{study.title}</h2>
                        <p className="text-white/80 text-lg">Client: {study.client}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">Challenge</h3>
                        <p className="text-white/80">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">Solution</h3>
                        <ul className="space-y-2">
                          {study.solution.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <svg
                                className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">Outcome</h3>
                        <p className="text-white/80">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="lg:border-l lg:border-[var(--secondary)]/20 lg:pl-12">
                      <PremiumGlowEffect
                        className="h-full rounded-xl"
                        intensity="low"
                        hover={true}
                      >
                        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl h-full flex flex-col">
                          <svg
                            className="w-12 h-12 text-[var(--secondary)]/40 mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <blockquote className="text-white/80 text-lg italic mb-6 flex-grow">
                            {study.testimonial.text}
                          </blockquote>
                          <div>
                            <p className="text-[var(--secondary)] font-semibold">
                              {study.testimonial.author}
                            </p>
                            <p className="text-white/60">{study.testimonial.position}</p>
                          </div>
                        </div>
                      </PremiumGlowEffect>
                    </div>
                  </div>
                </motion.div>
              </PremiumGlowEffect>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <PremiumGlowEffect className="rounded-2xl" intensity="high">
            <div className="bg-black/30 backdrop-blur-sm p-12 rounded-2xl text-center">
              <h2 className="heading-lg mb-6 text-gradient">Ready to Experience Our Excellence?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join our list of satisfied clients and discover why Mi5Star is the trusted name in elite security services.
              </p>
              <AnimatedButton href="/contact" variant="primary">
                Get in Touch
              </AnimatedButton>
            </div>
          </PremiumGlowEffect>
        </div>
      </section>
    </div>
  );
} 