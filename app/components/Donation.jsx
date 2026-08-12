'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { donorProof } from '../data/fundraising';

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';

const presetAmounts = [5000, 15000, 30000, 50000];

function usePaystackScript() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.PaystackPop) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v2/inline.js';
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  return ready;
}

const Donation = () => {
  const [frequency, setFrequency] = useState('once');
  const [amount, setAmount] = useState(15000);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribeNews, setSubscribeNews] = useState(true);
  const [status, setStatus] = useState('idle');
  const [showBankDetails, setShowBankDetails] = useState(false);
  const paystackReady = usePaystackScript();

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handlePaystack = useCallback(() => {
    if (!email || !finalAmount || finalAmount < 100) {
      setStatus('error');
      return;
    }

    if (!PAYSTACK_PUBLIC_KEY) {
      setShowBankDetails(true);
      return;
    }

    if (!paystackReady || !window.PaystackPop) {
      setStatus('error');
      return;
    }

    setStatus('processing');
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: finalAmount * 100,
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: 'Donor Name', variable_name: 'donor_name', value: name || 'Anonymous' },
          { display_name: 'Frequency', variable_name: 'frequency', value: frequency },
          { display_name: 'Newsletter', variable_name: 'newsletter', value: subscribeNews ? 'yes' : 'no' },
        ],
      },
      callback: () => setStatus('success'),
      onClose: () => setStatus('idle'),
    });
    handler.openIframe();
  }, [email, finalAmount, name, frequency, subscribeNews, paystackReady]);

  return (
    <section id="donation" className="relative py-32 bg-gradient-to-br from-ink via-ink-light to-ink overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-light font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            Make an Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mt-4 mb-6 tracking-tight text-balance">
            Be Part of the Change
          </h2>
          <p className="text-xl text-white/80 font-inter max-w-2xl mx-auto">
            Your support directly funds education, agriculture, and healthcare for communities across Eastern Nigeria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Donation Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            {/* Frequency toggle */}
            <div className="flex bg-gray-100 rounded-full p-1.5 mb-8 w-fit">
              <button
                onClick={() => setFrequency('once')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold font-inter transition-all ${
                  frequency === 'once' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500'
                }`}
              >
                Give Once
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold font-inter transition-all flex items-center gap-2 ${
                  frequency === 'monthly' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500'
                }`}
              >
                Give Monthly
                <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Popular
                </span>
              </button>
            </div>

            {/* Amount selection */}
            <label className="block text-sm font-semibold text-gray-800 font-inter mb-4">
              Choose an amount {frequency === 'monthly' && <span className="text-gray-400">/ month</span>}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {presetAmounts.map((amt) => (
                <motion.button
                  key={amt}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                  className={`py-3.5 rounded-xl font-bold font-roboto text-sm transition-all border-2 ${
                    !customAmount && amount === amt
                      ? 'bg-accent border-accent text-white shadow-lg shadow-accent/30'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-accent/50'
                  }`}
                >
                  ₦{amt.toLocaleString()}
                </motion.button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-lg">₦</span>
              <input
                type="number"
                min="100"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none font-inter text-gray-800 text-base transition-colors"
              />
            </div>

            {/* Donor details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-accent outline-none font-inter text-gray-800 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-accent outline-none font-inter text-gray-800 transition-colors"
              />
            </div>

            {/* Newsletter checkbox */}
            <label className="flex items-start gap-3 mb-8 cursor-pointer group">
              <input
                type="checkbox"
                checked={subscribeNews}
                onChange={(e) => setSubscribeNews(e.target.checked)}
                className="w-5 h-5 rounded accent-accent mt-0.5"
              />
              <span className="text-sm text-gray-600 font-inter group-hover:text-gray-900 transition-colors">
                Keep me updated on the impact of my donation
              </span>
            </label>

            {/* Status messages */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
              >
                <p className="text-red-600 text-sm font-inter font-medium">
                  Please enter a valid email and an amount of at least ₦100.
                </p>
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
              >
                <p className="text-green-700 text-sm font-inter font-medium">
                  Thank you! Your donation was received — a receipt has been sent to your email.
                </p>
              </motion.div>
            )}

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePaystack}
              disabled={status === 'processing'}
              className="w-full bg-accent text-white py-4 rounded-xl font-bold font-roboto text-lg hover:bg-accent-dark transition-all shadow-lg shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'processing' ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing…
                </>
              ) : (
                <>
                  Donate ₦{finalAmount ? finalAmount.toLocaleString() : '0'} {frequency === 'monthly' ? '/mo' : ''}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </motion.button>

            {/* Bank transfer toggle */}
            <button
              type="button"
              onClick={() => setShowBankDetails((s) => !s)}
              className="w-full text-center text-sm text-gray-500 font-inter mt-6 hover:text-accent transition-colors font-medium"
            >
              {showBankDetails ? 'Hide bank transfer details' : 'Prefer bank transfer? Click here'}
            </button>

            {/* Bank details */}
            {showBankDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4 overflow-hidden"
              >
                {[
                  { label: 'Account Name', value: 'GOZI Education Foundation' },
                  { label: 'Account Number', value: '1308436771' },
                  { label: 'Bank Name', value: 'Providus Bank Ltd' },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-gray-700 text-sm w-36">{row.label}:</span>
                    <span className="font-mono text-gray-700 text-sm flex-1 select-all">{row.value}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(row.value)}
                      className="px-4 py-1.5 text-xs bg-accent text-white rounded-lg hover:bg-accent-dark transition self-start font-medium"
                      type="button"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-inter">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secured by Paystack
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-inter">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% goes to programs
              </div>
            </div>
          </motion.div>

          {/* Social proof / donor wall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Recent supporters */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-roboto font-bold text-lg">Recent Supporters</h3>
                <span className="flex items-center gap-2 text-xs text-accent-light font-inter font-semibold">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Live
                </span>
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {donorProof.map((donor) => (
                  <div key={donor.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {donor.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-inter font-medium truncate">{donor.name}</p>
                      <p className="text-white/50 text-xs font-inter">{donor.cause}</p>
                    </div>
                    <span className="text-accent-light font-bold font-roboto text-sm whitespace-nowrap">{donor.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-[11px] font-inter mt-4 text-center">
                Sample data shown — connects to live donor feed once donations begin.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <svg className="w-10 h-10 text-accent-light mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z" />
              </svg>
              <p className="text-white font-inter text-sm leading-relaxed mb-4">
                &ldquo;A small monthly gift from supporters like you keeps our learning-pack program running year-round. Thank you for believing in these communities.&rdquo;
              </p>
              <p className="text-accent-light font-inter text-sm font-semibold">— Collins Onyeaji, Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
