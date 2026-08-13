'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-subtle rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 md:p-16 text-center border border-gray-100 shadow-xl relative overflow-hidden"
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="w-16 h-16 rounded-3xl bg-accent-subtle flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-10 h-10 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-4 tracking-tight">
            Stay Connected to Our Impact
          </h3>
          <p className="text-gray-600 font-inter text-lg mb-10 max-w-xl mx-auto">
            Join our newsletter for stories from the field, project updates, and ways to help — no spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
            <label className="mb-2 block text-sm font-semibold text-gray-800" htmlFor="newsletter-email">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none font-inter text-gray-800 text-base transition-colors"
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-dark transition-all disabled:opacity-60 whitespace-nowrap shadow-lg shadow-accent/30"
            >
              {status === 'loading' ? 'Joining…' : 'Subscribe'}
            </motion.button>
            </div>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 max-w-md mx-auto"
            >
              <p className="text-green-700 font-inter text-sm font-medium">
                 You&apos;re in! Thank you for subscribing.
              </p>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 max-w-md mx-auto"
            >
              <p className="text-red-600 font-inter text-sm font-medium">
                Something went wrong. Please try again.
              </p>
            </motion.div>
          )}

          {/* Privacy note */}
          <p className="text-gray-400 font-inter text-xs mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
