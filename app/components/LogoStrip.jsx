'use client';
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'GOZI Africa', role: 'Parent Org' },
  { name: 'Imo State Govt', role: 'Government Partner' },
  { name: 'UNICEF Nigeria', role: 'Development Partner' },
  { name: 'Providus Bank', role: 'Banking Partner' },
  { name: 'Paystack', role: 'Payment Partner' },
  { name: 'Nigerian Red Cross', role: 'Humanitarian Partner' },
];

const LogoStrip = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-inter font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8"
        >
          Trusted partners &amp; collaborators
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="h-8 flex items-center">
                <span className="text-gray-800 font-roboto font-bold text-lg tracking-tight">
                  {p.name}
                </span>
              </div>
              <span className="text-[10px] font-inter text-gray-400 uppercase tracking-wider">
                {p.role}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoStrip;
