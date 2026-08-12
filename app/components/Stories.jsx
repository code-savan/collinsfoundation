'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const featured = {
  src: '/videos/campaign.mp4',
  poster: '/videos/thumbs/campaign.jpg',
  title: 'Impact in Action',
  description: 'Watch how learning packs reach children across 95 LGAs in Eastern Nigeria.',
  duration: '3:08',
};

const stories = [
  {
    src: '/videos/the-intro.mp4',
    poster: '/videos/thumbs/the-intro.jpg',
    title: 'Our Educational Mandate',
    tag: 'Introduction',
    duration: '1:08',
  },
  {
    src: '/videos/field-06.mp4',
    poster: '/videos/thumbs/field-06.jpg',
    title: 'One Simple Truth',
    tag: 'On the Ground',
    duration: '0:55',
  },
  {
    src: '/videos/field-04.mp4',
    poster: '/videos/thumbs/field-04.jpg',
    title: 'Schools That Need Us',
    tag: 'The Problem',
    duration: '1:15',
  },
  {
    src: '/videos/field-01.mp4',
    poster: '/videos/thumbs/field-01.jpg',
    title: 'Preparing for Distribution',
    tag: 'Behind the Scenes',
    duration: '1:05',
  },
];

const VideoModal = ({ item, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full"
      >
        <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            className="w-full max-h-[70vh] object-contain"
          />
        </div>
        <div className="mt-6 text-center">
          <span className="text-accent-light text-xs font-inter font-semibold uppercase tracking-wider">
            {item.tag || 'Featured'}
          </span>
          <h3 className="text-white font-roboto font-bold text-xl mt-2">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Stories = () => {
  const [active, setActive] = useState(null);
  const [featuredPlaying, setFeaturedPlaying] = useState(false);
  const featuredRef = useRef(null);

  const playFeatured = () => {
    setFeaturedPlaying(true);
    setTimeout(() => featuredRef.current?.play().catch(() => {}), 100);
  };

  return (
    <section id="story" className="py-32 bg-ink relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-light font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            See It For Yourself
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mt-4 tracking-tight text-balance">
            Stories From the Field
          </h2>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto mt-6">
            Real footage from our education, agriculture, and healthcare programs across Eastern Nigeria
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-8 group cursor-pointer"
          onClick={!featuredPlaying ? playFeatured : undefined}
        >
          {!featuredPlaying ? (
            <>
              <img src={featured.poster} alt={featured.title} className="w-full h-[400px] md:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-50 animate-pulse-ring" />
                  <div className="relative w-24 h-24 rounded-full bg-accent/90 backdrop-blur-xl border-2 border-white/30 flex items-center justify-center group-hover:bg-accent transition-colors shadow-2xl">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-inter font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-white/60 text-sm font-inter">{featured.duration}</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-roboto font-bold mb-3 tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-300 font-inter text-base leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </>
          ) : (
            <video
              ref={featuredRef}
              src={featured.src}
              poster={featured.poster}
              controls
              playsInline
              className="w-full h-[400px] md:h-[560px] object-contain bg-black"
            />
          )}
        </motion.div>

        {/* Story grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stories.map((story, i) => (
            <motion.button
              key={story.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(story)}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img src={story.poster} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-accent/90 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-inter font-medium">
                {story.duration}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-accent-light text-[10px] font-inter font-semibold uppercase tracking-wider">
                  {story.tag}
                </span>
                <p className="text-white text-sm font-inter font-medium leading-tight mt-1">
                  {story.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <VideoModal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Stories;
