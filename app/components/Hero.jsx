'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/schoolhero.jpg',
      title: 'Education for All',
      subtitle: 'Building Tomorrow\'s Leaders',
      description: 'Providing quality education to remote communities across Eastern Nigeria',
    },
    {
      image: '/about.jpg',
      title: 'Sustainable Agriculture',
      subtitle: 'Growing Together',
      description: 'Empowering farmers with modern techniques and reliable food systems',
    },
    {
      image: '/collins.jpeg',
      title: 'Quality Healthcare',
      subtitle: 'Health is Wealth',
      description: 'Bringing medical care and clean water to underserved communities',
    },
  ];

  const impactFacts = [
    { amount: '₦5,000', impact: 'supplies a full learning pack for one child' },
    { amount: '₦15,000', impact: 'trains a farmer in sustainable techniques' },
    { amount: '₦30,000', impact: 'covers medical outreach for a family' },
  ];

  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % impactFacts.length);
    }, 3200);
    return () => clearInterval(factTimer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] mt-[0px] overflow-hidden bg-black">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top scale-105"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#8dc220]" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8dc220]" />
          </span>
          <span className="text-white text-xs font-inter font-medium uppercase tracking-wider">
            Active in 95 LGAs across Eastern Nigeria
          </span>
        </motion.div>

        <div className="text-white max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#8dc220] font-inter text-sm font-semibold uppercase tracking-wider mb-3">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-roboto font-bold mb-5 leading-[1.05]">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl font-inter mb-8 text-gray-200 max-w-lg">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={() => document.getElementById('donation').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#8dc220] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#7bb01c] transition-all transform hover:scale-105 shadow-lg shadow-[#8dc220]/30"
            >
              Donate Now
            </button>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/40 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              See Our Impact
            </button>
          </motion.div>

          {/* Impact ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 max-w-md"
          >
            <div className="w-9 h-9 rounded-full bg-[#8dc220]/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c-4 2-8 3-8 3v6c0 5 8 9 8 9s8-4 8-9V6s-4-1-8-3Z" />
              </svg>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={factIndex}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-white font-inter"
              >
                <span className="font-bold text-[#8dc220]">{impactFacts[factIndex].amount}</span>{' '}
                {impactFacts[factIndex].impact}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute md:bottom-8 bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-10 bg-[#8dc220]' : 'w-5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
