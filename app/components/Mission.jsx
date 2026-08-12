'use client';
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { name: 'Integrity', desc: 'Transparency in all operations' },
  { name: 'Compassion', desc: 'Serving with empathy' },
  { name: 'Collaboration', desc: 'Partnering for impact' },
  { name: 'Sustainability', desc: 'Building lasting solutions' },
];

const Mission = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-subtle rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            Mission & Values
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Guided by purpose, driven by impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-white rounded-3xl p-10 lg:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-accent-subtle flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-3xl font-roboto font-bold text-gray-900 mb-6 tracking-tight">
                Our Mission
              </h3>

              <p className="text-gray-600 font-inter leading-relaxed text-lg">
                To empower remote communities in Eastern Nigeria by providing access to education, sustainable agriculture, and quality healthcare, creating lasting change for generations.
              </p>

              {/* Decorative */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-subtle rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Values card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-white rounded-3xl p-10 lg:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              <h3 className="text-3xl font-roboto font-bold text-gray-900 mb-8 tracking-tight">
                Our Values
              </h3>

              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-accent-subtle flex items-center justify-center shrink-0 group-hover/item:bg-accent/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent-dark" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="font-inter font-semibold text-gray-900">{value.name}:</span>
                      <span className="font-inter text-gray-600 ml-2">{value.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
