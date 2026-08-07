'use client';
import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    color: '#8dc220',
    title: 'Education',
    desc: 'Building learning-friendly environments and providing educational resources',
    items: ['Back to School Project', 'Renovate and Equip School Project', 'Sole to School Project'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    color: '#007acc',
    title: 'Agriculture',
    desc: 'Promoting sustainable farming and food security initiatives',
    items: ['Modern Farming', 'Food Distribution', 'Youth Training'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    color: '#f9a825',
    title: 'Healthcare',
    desc: 'Delivering essential medical services to underserved communities',
    items: ['Medical Outreach', 'Maternal Health', 'Clean Water'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
];

const Focus = () => {
  return (
    <section id="focus-areas" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#8dc220] font-inter text-sm font-semibold uppercase tracking-wider">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2 mb-4">
          Focus Areas
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Three pillars that drive sustainable community development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-xl transition-all"
            style={{ borderTopWidth: 3, borderTopColor: card.color }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: `${card.color}1a` }}
            >
              <svg className="w-8 h-8" style={{ color: card.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {card.icon}
              </svg>
            </div>
            <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-4">
              {card.desc}
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-inter">
              {card.items.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: card.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Focus
