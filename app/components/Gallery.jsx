'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { src: '/schoolhero.jpg', caption: 'Back to School distribution, Imo State', tag: 'Education' },
  { src: '/about.jpg', caption: 'Community outreach programme', tag: 'Community' },
  { src: '/videos/thumbs/field-05.jpg', caption: 'En route to rural communities', tag: 'Community' },
  { src: '/videos/thumbs/field-02.jpg', caption: 'Community Primary School, Amaodun', tag: 'Education' },
  { src: '/videos/thumbs/field-08.jpg', caption: 'Reaching remote villages', tag: 'Community' },
  { src: '/videos/thumbs/field-07.jpg', caption: 'A school structure in need of renovation', tag: 'Education' },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = (e) => { e.stopPropagation(); setActiveIndex((i) => (i + 1) % galleryItems.length); };
  const prev = (e) => { e.stopPropagation(); setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length); };

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-accent-subtle rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            In the Field
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Moments from our education, agriculture, and healthcare programs across Eastern Nigeria
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[600px]' : 'aspect-square'
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-inter font-semibold uppercase tracking-wider mb-2">
                  {item.tag}
                </span>
                <p className="text-white font-inter font-medium text-sm leading-tight">
                  {item.caption}
                </p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prev}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[80vh] w-full"
            >
              <img
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].caption}
                className="w-full h-full max-h-[70vh] object-contain rounded-2xl mx-auto"
              />
              <div className="text-center mt-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-inter font-semibold uppercase tracking-wider mb-2">
                  {galleryItems[activeIndex].tag}
                </span>
                <p className="text-white font-inter text-base">{galleryItems[activeIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
