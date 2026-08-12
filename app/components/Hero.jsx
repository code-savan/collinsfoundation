'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: '/schoolhero.jpg',
      eyebrow: 'Building Tomorrow\'s Leaders',
      title: 'Education for All',
      description: 'Providing quality education to remote communities across Eastern Nigeria',
      stat: '10,000+',
      statLabel: 'Pupils reached',
    },
    {
      image: '/about.jpg',
      eyebrow: 'Growing Together',
      title: 'Sustainable Agriculture',
      description: 'Empowering farmers with modern techniques and reliable food systems',
      stat: '1,000+',
      statLabel: 'Farmers trained',
    },
    {
      image: '/collins.jpeg',
      eyebrow: 'Health is Wealth',
      title: 'Quality Healthcare',
      description: 'Bringing medical care and clean water to underserved communities',
      stat: '500+',
      statLabel: 'Medical interventions',
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
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % impactFacts.length);
    }, 3200);
    return () => clearInterval(factTimer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          {/* Live indicator badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-white text-xs font-inter font-semibold uppercase tracking-wider">
              Active in 95 LGAs across Eastern Nigeria
            </span>
          </motion.div>

          {/* Main content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-white"
            >
              <p className="text-accent-light font-inter text-sm font-bold uppercase tracking-[0.2em] mb-4">
                {slides[currentSlide].eyebrow}
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-roboto font-bold mb-6 leading-[0.95] tracking-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl font-inter mb-10 text-gray-200 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('donation')}
                  className="group relative bg-accent text-white px-8 py-4 rounded-full font-bold text-base hover:bg-accent-dark transition-all shadow-accent overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Donate Now
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('story')}
                  className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Our Story
                  </span>
                </motion.button>
              </div>

              {/* Impact ticker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-6 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-roboto font-bold text-white">{slides[currentSlide].stat}</div>
                    <div className="text-xs text-gray-400 font-inter uppercase tracking-wider">{slides[currentSlide].statLabel}</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-white/20" />

                <div className="flex items-center gap-2">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={factIndex}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm text-white font-inter"
                    >
                      <span className="font-bold text-accent-light">{impactFacts[factIndex].amount}</span>
                      {' '}{impactFacts[factIndex].impact}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
              index === currentSlide ? 'w-12 bg-white/30' : 'w-6 bg-white/20 hover:bg-white/40'
            }`}
          >
            {index === currentSlide && (
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-accent rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-inter uppercase tracking-wider rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
