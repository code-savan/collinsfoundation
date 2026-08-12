'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '10,000+',
    label: 'Pupils reached',
    sub: 'across 95 LGAs in Eastern Nigeria',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    value: '586',
    label: 'Schools supported',
    sub: 'renovation & learning-pack distribution',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    value: '1,000+',
    label: 'Farmers trained',
    sub: 'in modern sustainable techniques',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    value: '500+',
    label: 'Medical interventions',
    sub: 'per quarter across rural communities',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
];

const StatsBar = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0b1210] via-[#111a14] to-[#0b1210] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8dc220]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#8dc220] font-inter text-xs font-semibold uppercase tracking-[0.2em]">Our Impact In Numbers</span>
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-white mt-3 tracking-tight">
            Real change, measurable at scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8dc220]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {stat.icon}
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-roboto font-bold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-white font-inter font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 font-inter text-xs leading-relaxed">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
