'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real project photography and field-video stills — no stock imagery.
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
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">In the Field</span>
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Moments from our education, agriculture, and healthcare programs across Eastern Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                <span className="text-[#d4f27e] text-xs font-inter font-semibold uppercase tracking-wider">{item.tag}</span>
                <p className="text-white text-sm font-inter font-medium">{item.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={prev}
              className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
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
              className="max-w-4xl max-h-[80vh] w-full"
            >
              <img
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].caption}
                className="w-full h-full max-h-[70vh] object-contain rounded-xl mx-auto"
              />
              <div className="text-center mt-4">
                <span className="text-[#8dc220] text-xs font-inter font-semibold uppercase tracking-wider">
                  {galleryItems[activeIndex].tag}
                </span>
                <p className="text-white font-inter">{galleryItems[activeIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
