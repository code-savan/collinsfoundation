'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

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
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100"
        >
          <div className="w-14 h-14 bg-[#8dc220]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-roboto font-bold text-gray-900 mb-3 tracking-tight">
            Stay Connected to Our Impact
          </h3>
          <p className="text-gray-600 font-inter mb-8 max-w-xl mx-auto">
            Join our newsletter for stories from the field, project updates, and ways to help — no spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-[#8dc220] outline-none font-inter text-gray-800"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#8dc220] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#7bb01c] transition-all disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining…' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-[#5d8708] font-inter text-sm mt-4 font-semibold">
              🎉 You&apos;re in! Thank you for subscribing.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 font-inter text-sm mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
