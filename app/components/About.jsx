'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-subtle rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/about.jpg"
                alt="Foundation Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-roboto font-bold text-gray-900">10+ Years</div>
                    <div className="text-sm text-gray-600 font-inter">of community impact</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 mb-8 tracking-tight text-balance">
              Empowering Communities, Transforming Lives
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-roboto font-bold text-gray-900 mb-3">
                  Who We Are
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed text-base">
                  The Collins Onyeaji Foundation was founded to address critical gaps in development across rural communities in Eastern Nigeria, focusing on education, agriculture, and healthcare.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xl font-roboto font-bold text-gray-900 mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed text-base mb-6">
                  Over 10,000 pupils reached, 1,000+ farmers trained, and 500+ medical interventions delivered across 95 LGAs in Eastern Nigeria.
                </p>

                {/* Impact metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '10K+', label: 'Pupils' },
                    { value: '1K+', label: 'Farmers' },
                    { value: '500+', label: 'Medical' },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                      <div className="text-2xl font-roboto font-bold text-accent-dark mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 font-inter font-medium uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('focus-areas')}
                  className="group inline-flex items-center gap-2 text-accent-dark font-inter font-semibold hover:text-accent transition-colors"
                >
                  Learn More About Our Work
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
