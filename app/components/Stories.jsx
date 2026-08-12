'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const featured = {
  src: '/videos/campaign.mp4',
  poster: '/videos/thumbs/campaign.jpg',
  title: 'Impact in Action',
  description: 'Watch how learning packs reach children across 95 LGAs in Eastern Nigeria.',
};

const stories = [
  {
    src: '/videos/the-intro.mp4',
    poster: '/videos/thumbs/the-intro.jpg',
    title: 'Our Educational Mandate',
    tag: 'Introduction',
  },
  {
    src: '/videos/field-06.mp4',
    poster: '/videos/thumbs/field-06.jpg',
    title: 'One Simple Truth',
    tag: 'On the Ground',
  },
  {
    src: '/videos/field-04.mp4',
    poster: '/videos/thumbs/field-04.jpg',
    title: 'Schools That Need Us',
    tag: 'The Problem',
  },
  {
    src: '/videos/field-01.mp4',
    poster: '/videos/thumbs/field-01.jpg',
    title: 'Preparing for Distribution',
    tag: 'Behind the Scenes',
  },
];

const VideoModal = ({ item, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full"
      >
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          className="w-full max-h-[75vh] rounded-xl bg-black"
        />
        <p className="text-white font-inter text-center mt-4">{item.title}</p>
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
    setTimeout(() => featuredRef.current?.play().catch(() => {}), 50);
  };

  return (
    <section id="story" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8dc220] font-inter text-xs font-semibold uppercase tracking-[0.2em]">See It For Yourself</span>
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-white mt-3 tracking-tight">
            Stories From the Field
          </h2>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Real footage from our education, agriculture, and healthcare programs across Eastern Nigeria
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-6 group cursor-pointer"
          onClick={!featuredPlaying ? playFeatured : undefined}
        >
          {!featuredPlaying ? (
            <>
              <img src={featured.poster} alt={featured.title} className="w-full h-[320px] md:h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8dc220]/90 transition-all">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-[#d4f27e] text-xs font-inter font-semibold uppercase tracking-wider">Featured</span>
                <h3 className="text-white text-2xl md:text-3xl font-roboto font-bold mt-1">{featured.title}</h3>
                <p className="text-gray-300 font-inter text-sm mt-1 max-w-md">{featured.description}</p>
              </div>
            </>
          ) : (
            <video
              ref={featuredRef}
              src={featured.src}
              poster={featured.poster}
              controls
              playsInline
              className="w-full h-[320px] md:h-[480px] object-contain bg-black"
            />
          )}
        </motion.div>

        {/* Story grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stories.map((story, i) => (
            <motion.button
              key={story.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(story)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img src={story.poster} alt={story.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8dc220]/90 transition-all">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-3 text-left">
                <span className="text-[#d4f27e] text-[10px] font-inter font-semibold uppercase tracking-wider">{story.tag}</span>
                <p className="text-white text-sm font-inter font-medium leading-tight">{story.title}</p>
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
