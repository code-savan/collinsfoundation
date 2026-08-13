'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Choose Your Impact',
    desc: 'Pick an amount — even ₦5,000 supplies a full learning pack for one child. Give once or set up a monthly gift.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    num: '02',
    title: 'Pay Securely',
    desc: 'Complete your donation in seconds via Paystack — card, bank transfer, or USSD. Your details are encrypted end-to-end.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    num: '03',
    title: 'See the Difference',
    desc: 'Get a receipt instantly and regular updates on how your donation is changing lives in Eastern Nigeria.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-subtle rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            Simple & Transparent
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            How Your Donation Works
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Three simple steps from your heart to the communities that need it most
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[calc(16.66%+3rem)] right-[calc(16.66%+3rem)] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Step number badge */}
              <div className="relative inline-flex mb-8">
                <div className="relative w-16 h-16 rounded-3xl bg-white border-2 border-accent/20 flex items-center justify-center shadow-lg group-hover:border-accent/40 group-hover:shadow-xl transition-all duration-500">
                  <svg className="w-9 h-9 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {step.icon}
                  </svg>

                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold font-roboto flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-accent-subtle blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-gray-600 font-inter text-base leading-relaxed max-w-sm mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
