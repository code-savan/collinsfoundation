'use client';
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="bg-white">
    <div className="grid md:grid-cols-2">
      {/* Image Section - No padding */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative h-[420px] md:h-auto overflow-hidden"
      >
        <img
          src="/about.jpg"
          alt="Foundation Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 px-6 md:p-16 lg:p-20 flex flex-col justify-center"
      >
        <div className="max-w-xl">
          <span className="text-[#8dc220] font-inter text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2 mb-8">
            Empowering Communities
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-roboto font-bold text-gray-900 mb-3">
                Who We Are
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                The Collins Onyeaji Foundation was founded to address critical gaps in development across rural communities in Eastern Nigeria, focusing on education, agriculture, and healthcare.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-roboto font-bold text-gray-900 mb-3">
                Our Impact
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Over 10,000 pupils reached, 1,000+ farmers trained, and 500+ medical interventions delivered across 95 LGAs in Eastern Nigeria.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => document.getElementById('focus-areas').scrollIntoView({ behavior: 'smooth' })}
                className="text-[#8dc220] font-semibold hover:text-[#7bb01c] transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default About
