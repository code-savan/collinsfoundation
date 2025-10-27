'use client';
    import React, { useState, useEffect } from 'react'
    import Image from 'next/image';

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        image: '/schoolhero.jpg',
        title: 'Education for All',
        subtitle: 'Building Tomorrow\'s Leaders',
        description: 'Providing quality education to remote communities'
      },
      {
        image: 'https://images.unsplash.com/photo-1585094659595-04a44bcba305?q=80&w=2070&auto=format&fit=crop',
        title: 'Sustainable Agriculture',
        subtitle: 'Growing Together',
        description: 'Empowering farmers with modern techniques'
      },
      {
        image: 'https://images.pexels.com/photos/33132346/pexels-photo-33132346.jpeg?_gl=1*17kgs86*_ga*OTY5OTMzMTY2LjE3NTc0MTYyODg.*_ga_8JE65Q40S6*czE3NTc0MTYyODckbzEkZzEkdDE3NTc0MTYzNzQkajQ0JGwwJGgw',
        title: 'Quality Healthcare',
        subtitle: 'Health is Wealth',
        description: 'Bringing medical care to underserved areas'
      }
    ];

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);


  return (
    <section id="home" className="relative h-screen mt-[0px] overflow-hidden">
    {/* Slider Images */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
    ))}

    {/* Content */}
    <div className="absolute bottom-0 right-0 z-20 p-8 md:p-16 md:w-2xl max-w-2xl">
      <div className="text-white w-full">
        <p className="text-[#8dc220] font-inter text-sm uppercase tracking-wider mb-2">
          {slides[currentSlide].subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-roboto font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl font-inter mb-8 text-gray-200">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8dc220] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7bb01c] transition-all transform hover:scale-105"
          >
            Discover More
          </button>
          <button
            onClick={() => document.getElementById('donation').scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/50 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Support Us
          </button>
        </div>
      </div>
    </div>

    {/* Slide Indicators */}
    <div className="absolute md:bottom-8 bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`h-1 transition-all duration-300 ${
            index === currentSlide ? 'w-8 bg-[#8dc220]' : 'w-4 bg-white/50'
          }`}
        />
      ))}
    </div>
  </section>
  )
}

export default Hero
