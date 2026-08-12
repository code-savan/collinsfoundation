'use client';
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'GOZI Africa', role: 'Parent Organization' },
  { name: 'Imo State Govt', role: 'Government Partner' },
  { name: 'UNICEF Nigeria', role: 'Development Partner' },
  { name: 'Providus Bank', role: 'Banking Partner' },
  { name: 'Paystack', role: 'Payment Partner' },
  { name: 'Nigerian Red Cross', role: 'Humanitarian Partner' },
];

const LogoStrip = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Trusted by leading organizations
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center gap-2"
            >
              <div className="relative">
                <div className="h-10 flex items-center px-6 py-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:border-accent/30 group-hover:bg-accent-subtle transition-all duration-300">
                  <span className="text-gray-700 group-hover:text-accent-dark font-roboto font-bold text-base tracking-tight transition-colors">
                    {partner.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-[10px] font-inter text-gray-400 uppercase tracking-wider font-medium">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoStrip;
