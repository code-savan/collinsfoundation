'use client';

import React from 'react';
import { motion } from 'framer-motion';

const trustSignals = [
  { value: '95', label: 'LGAs targeted' },
  { value: '₦0', label: 'platform setup fee' },
  { value: '24/7', label: 'secure online giving' },
  { value: '100%', label: 'program-focused support' },
];

const LogoStrip = () => {
  return (
    <section className="border-b border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Donation confidence signals
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Clear giving paths, visible impact, and supporter updates without implying third-party endorsements.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center"
            >
              <div className="font-roboto text-3xl font-black tracking-tight text-gray-950">
                {signal.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                {signal.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
