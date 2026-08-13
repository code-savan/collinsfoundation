'use client';
import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    color: '#8dc220',
    colorLight: 'rgba(141, 194, 32, 0.1)',
    title: 'Education',
    desc: 'Building learning-friendly environments and providing educational resources to remote communities',
    items: ['Back to School Project', 'Renovate and Equip Schools', 'Sole to School Project'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    stat: '10,000+',
    statLabel: 'Students impacted',
  },
  {
    color: '#007acc',
    colorLight: 'rgba(0, 122, 204, 0.1)',
    title: 'Agriculture',
    desc: 'Promoting sustainable farming and food security initiatives for rural farmers',
    items: ['Modern Farming Techniques', 'Food Distribution Programs', 'Youth Training'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    stat: '1,000+',
    statLabel: 'Farmers trained',
  },
  {
    color: '#f9a825',
    colorLight: 'rgba(249, 168, 37, 0.1)',
    title: 'Healthcare',
    desc: 'Delivering essential medical services to underserved communities across Eastern Nigeria',
    items: ['Medical Outreach Programs', 'Maternal Health Support', 'Clean Water Initiatives'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    stat: '500+',
    statLabel: 'Medical interventions',
  },
];

const Focus = () => {
  return (
    <section id="focus-areas" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-subtle rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            Focus Areas
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Three pillars that drive sustainable community development
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Education - large card spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8dc220] via-[#a8d93f] to-[#8dc220]" />

            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: cards[0].colorLight }}
                  >
                    <svg className="w-8 h-8" style={{ color: cards[0].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {cards[0].icon}
                    </svg>
                  </div>

                  <h3 className="text-3xl font-roboto font-bold text-gray-900 mb-4 tracking-tight">
                    {cards[0].title}
                  </h3>

                  <p className="text-gray-600 font-inter leading-relaxed text-lg mb-8 max-w-lg">
                    {cards[0].desc}
                  </p>

                  <ul className="space-y-3">
                    {cards[0].items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cards[0].colorLight }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cards[0].color }} />
                        </div>
                        <span className="text-gray-700 font-inter text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stat box */}
                <div className="lg:shrink-0">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center lg:text-left">
                    <div className="text-4xl font-roboto font-bold mb-1" style={{ color: cards[0].color }}>
                      {cards[0].stat}
                    </div>
                    <div className="text-xs text-gray-600 font-inter font-semibold uppercase tracking-wider">
                      {cards[0].statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agriculture - tall card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007acc] via-[#3399dd] to-[#007acc]" />

            <div className="p-8 lg:p-12 h-full flex flex-col">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: cards[1].colorLight }}
              >
                <svg className="w-8 h-8" style={{ color: cards[1].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {cards[1].icon}
                </svg>
              </div>

              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4 tracking-tight">
                {cards[1].title}
              </h3>

              <p className="text-gray-600 font-inter leading-relaxed mb-6 flex-1">
                {cards[1].desc}
              </p>

              <ul className="space-y-3 mb-8">
                {cards[1].items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cards[1].colorLight }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cards[1].color }} />
                    </div>
                    <span className="text-gray-700 font-inter text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stat */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                <div className="text-3xl font-roboto font-bold mb-1" style={{ color: cards[1].color }}>
                  {cards[1].stat}
                </div>
                <div className="text-xs text-gray-600 font-inter font-semibold uppercase tracking-wider">
                  {cards[1].statLabel}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Healthcare - full width bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f9a825] via-[#fbbf24] to-[#f9a825]" />

            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: cards[2].colorLight }}
                  >
                    <svg className="w-8 h-8" style={{ color: cards[2].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {cards[2].icon}
                    </svg>
                  </div>

                  <h3 className="text-3xl font-roboto font-bold text-gray-900 mb-4 tracking-tight">
                    {cards[2].title}
                  </h3>

                  <p className="text-gray-600 font-inter leading-relaxed text-lg max-w-2xl">
                    {cards[2].desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:shrink-0">
                  <ul className="space-y-3 flex-1">
                    {cards[2].items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cards[2].colorLight }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cards[2].color }} />
                        </div>
                        <span className="text-gray-700 font-inter text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stat */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center shrink-0">
                    <div className="text-4xl font-roboto font-bold mb-1" style={{ color: cards[2].color }}>
                      {cards[2].stat}
                    </div>
                    <div className="text-xs text-gray-600 font-inter font-semibold uppercase tracking-wider">
                      {cards[2].statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
