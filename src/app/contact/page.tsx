'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import PremiumGlowEffect from '@/components/PremiumGlowEffect';

const offices = [
  {
    region: "Australia (HQ)",
    phone: "1800 007 645",
    email: "au@mi5star.com"
  },
  {
    region: "Hong Kong (HQ)",
    phone: "+852 1234 5678",
    email: "hk@mi5star.com"
  },
  {
    region: "United Kingdom",
    phone: "+44 20 7123 4567",
    email: "uk@mi5star.com"
  },
  {
    region: "United States",
    phone: "+1 212 555 0123",
    email: "us@mi5star.com"
  }
];

export default function ContactPage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/80"
          style={{ opacity }}
        />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-[var(--secondary)]/20 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.05
          }} />
        </motion.div>

        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            style={{ y }}
          >
            <AnimatedText 
              className="heading-xl mb-6"
              animate="letters"
            >
              Get in <span className="text-gradient">Touch</span>
            </AnimatedText>
            <motion.p
              className="text-white/70 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Contact our team to discuss how we can provide tailored security solutions
              for your specific needs.
            </motion.p>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[var(--secondary)]"
                initial={{ 
                  opacity: 0,
                  x: Math.random() * 1000 - 500,
                  y: Math.random() * 500 - 250
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -100],
                  transition: {
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black/80">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <PremiumGlowEffect className="rounded-2xl" intensity="low">
              <div className="bg-black/90 backdrop-blur-sm p-12 rounded-2xl border border-[var(--secondary)]/10">
                <h2 className="heading-lg mb-8">Send Us a <span className="text-gradient">Message</span></h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white/70 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white/70 mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white/70 mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="asset-protection">High-Value Asset Protection</option>
                      <option value="corporate-risk">Corporate Risk Management</option>
                      <option value="executive-protection">Executive & VIP Protection</option>
                      <option value="luxury-travel">Luxury Travel & Lifestyle Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black/50 border border-[var(--secondary)]/10 rounded-lg px-4 py-3 text-white focus:border-[var(--secondary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]/50 transition-colors"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[var(--secondary)] text-black font-semibold py-4 rounded-lg hover:bg-[var(--secondary)]/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </PremiumGlowEffect>

            {/* Global Offices */}
            <div className="space-y-8">
              <h2 className="heading-lg mb-8">Global <span className="text-gradient">Offices</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offices.map((office) => (
                  <PremiumGlowEffect
                    key={office.region}
                    className="h-full rounded-xl"
                    intensity="low"
                    hover={true}
                  >
                    <motion.div
                      className="h-full bg-black/90 backdrop-blur-sm p-8 rounded-xl border border-[var(--secondary)]/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {office.region}
                      </h3>
                      <div className="space-y-3 text-white/70">
                        <p className="flex items-center gap-3">
                          <svg
                            className="w-5 h-5 text-[var(--secondary)]/70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-3">
                          <svg
                            className="w-5 h-5 text-[var(--secondary)]/70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {office.email}
                        </p>
                      </div>
                    </motion.div>
                  </PremiumGlowEffect>
                ))}
              </div>

              <PremiumGlowEffect className="rounded-xl" intensity="low">
                <div className="bg-black/90 backdrop-blur-sm p-8 rounded-xl border border-[var(--secondary)]/10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Additional Locations
                  </h3>
                  <p className="text-white/70 mb-4">
                    Mi5Star maintains operational presence in:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      "New Zealand",
                      "Singapore",
                      "China",
                      "India",
                      "Japan",
                      "Korea",
                      "Indonesia"
                    ].map((location) => (
                      <div
                        key={location}
                        className="text-white/70 flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--secondary)]/70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {location}
                      </div>
                    ))}
                  </div>
                </div>
              </PremiumGlowEffect>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 