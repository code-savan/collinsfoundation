'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formsubmit.co/info@collinsonyeaji.org', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-ink text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative grid md:grid-cols-2">
        {/* Contact Info + Form */}
        <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-light font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-4 mt-4 tracking-tight text-balance">
              Get In Touch
            </h2>
            <p className="text-gray-400 font-inter text-base mb-12 max-w-md">
              Ready to join us in making a difference? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 mb-12"
          >
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                ),
                icon2: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
                label: 'Address',
                value: 'Plot P/11 G.I Oguledo Avenue, Action Housing Area B, New Owerri P.M.B. 1217, Owerri, Imo State, Nigeria',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                label: 'Email',
                value: 'info@collinsonyeaji.org',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                label: 'Phone',
                value: '+2348059000097',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                    {item.icon2}
                  </svg>
                </div>
                <div>
                  <h4 className="font-roboto font-bold text-white mb-1">{item.label}</h4>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none font-inter text-white placeholder:text-gray-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none font-inter text-white placeholder:text-gray-500 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none font-inter text-white placeholder:text-gray-500 transition-colors"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Your message"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none font-inter text-white placeholder:text-gray-500 resize-none transition-colors"
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-dark transition-all disabled:opacity-60 w-full sm:w-auto shadow-lg shadow-accent/30"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
              >
                <p className="text-green-400 text-sm font-inter font-medium">
                  Message sent! We&apos;ll get back to you shortly.
                </p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
              >
                <p className="text-red-400 text-sm font-inter font-medium">
                  Something went wrong. Please email us directly at info@collinsonyeaji.org.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-auto bg-gray-900"
        >
          <iframe
            className="w-full h-full opacity-90"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31518.04524888348!2d7.459166!3d9.08601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1757413690170!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />
    </section>
  );
};

export default Contact;
