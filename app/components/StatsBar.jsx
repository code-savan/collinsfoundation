'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '10,000+',
    label: 'Pupils Reached',
    sub: 'across 95 LGAs in Eastern Nigeria',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    color: 'from-accent to-accent-light',
  },
  {
    value: '586',
    label: 'Schools Supported',
    sub: 'renovation & learning-pack distribution',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    color: 'from-secondary to-secondary-light',
  },
  {
    value: '1,000+',
    label: 'Farmers Trained',
    sub: 'in modern sustainable techniques',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    color: 'from-amber to-yellow',
  },
  {
    value: '500+',
    label: 'Medical Interventions',
    sub: 'per quarter across rural communities',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    color: 'from-pink-500 to-rose-400',
  },
];

const StatsBar = () => {
  return (
    <section id="impact" className="py-32 bg-gradient-to-br from-ink via-ink-light to-ink relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-light font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            Our Impact In Numbers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mt-4 tracking-tight text-balance">
            Real change, measurable at scale
          </h2>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto mt-6">
            Every number represents a life touched, a community transformed, and a future secured
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden h-full">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                  <svg className="relative w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {stat.icon}
                  </svg>
                </div>

                {/* Number */}
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-roboto font-bold text-white tracking-tight mb-3 group-hover:scale-105 transition-transform duration-500 origin-left">
                    {stat.value}
                  </div>
                  <div className="text-white font-inter font-semibold text-base mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 font-inter text-sm leading-relaxed">
                    {stat.sub}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 font-inter text-sm mb-4">
            These numbers grow every day. Join us in making a difference.
          </p>
          <a
            href="#donation"
            className="inline-flex items-center gap-2 text-accent-light font-inter font-semibold text-sm hover:text-accent transition-colors group"
          >
            Support our mission
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
