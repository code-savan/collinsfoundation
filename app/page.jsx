'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/">
            <Image
              src="/logo.png"
              alt="Collins Onyeaji Foundation"
              width={180}
              height={180}
              className="object-contain"
            />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('focus-areas')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              Focus Areas
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
              Contact
            </button>
          </div>

          <div className="hidden md:flex">
            <button onClick={() => scrollToSection('donation')} className="bg-[#8dc220] text-white px-6 py-2 rounded-md font-medium hover:bg-[#7bb01c] transition-colors">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('focus-areas')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                Focus Areas
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                Team
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
                Contact
              </button>
              <button onClick={() => scrollToSection('donation')} className="bg-[#8dc220] text-white px-6 py-2 rounded-md font-medium hover:bg-[#7bb01c] transition-colors mt-4">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component with Slider
const HeroSection = () => {
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
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* About Section - Modern Grid */}
      <section id="about" className="bg-white">
        <div className="grid md:grid-cols-2">
          {/* Image Section - No padding */}
          <div className="relative h-[600px] md:h-auto">
            <img
              src="/about.jpg"
              alt="Foundation Work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="py-8 px-4 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">About Us</span>
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
                  <div className="flex items-center md:gap-8 mt-4 justify-between w-full">
                    <div className="md:text-left w-fit text-center">
                      <div className="text-xl md:text-3xl font-roboto font-bold text-[#8dc220]">2.3M+</div>
                      <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Students Reached</div>
                    </div>
                    <div className="md:text-center w-fit text-center">
                      <div className="text-xl md:text-3xl font-roboto font-bold text-[#007acc]">1000+</div>
                      <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Families Fed</div>
                    </div>
                    <div className="md:text-right w-fit text-center">
                      <div className="text-xl md:text-3xl font-roboto font-bold text-[#ffeb3b]">500+</div>
                      <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Medical Visits</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => document.getElementById('focus-areas').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#8dc220] font-medium hover:text-[#7bb01c] transition-colors inline-flex items-center"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Modern Minimal */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
              Mission & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-[#8dc220]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                To empower remote communities in Eastern Nigeria by providing access to education, sustainable agriculture, and quality healthcare, creating lasting change for generations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-[#007acc]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#007acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Integrity', desc: 'Transparency in all operations' },
                  { name: 'Compassion', desc: 'Serving with empathy' },
                  { name: 'Collaboration', desc: 'Partnering for impact' },
                  { name: 'Sustainability', desc: 'Building lasting solutions' }
                ].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#8dc220] rounded-full mr-3" />
                    <span className="font-inter text-gray-700">
                      <span className="font-medium">{value.name}:</span> {value.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Modern Cards */}
      <section id="focus-areas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2 mb-4">
              Focus Areas
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Three pillars that drive sustainable community development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#8dc220] border-[#8dc220] p-8 hover:border-[#8dc220] transition-all hover:shadow-lg">

              <div className="w-16 h-16 bg-[#8dc220]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                Education
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Building learning-friendly environments and providing educational resources
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-inter">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />Scholarships</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />School Renovations</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />Literacy Programs</li>
              </ul>
            </div>

            {/* Agriculture Card */}
            <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#007acc] border-[#007acc] p-8 hover:border-[#007acc] transition-all hover:shadow-lg">

              <div className="w-16 h-16 bg-[#007acc]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#007acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                Agriculture
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Promoting sustainable farming and food security initiatives
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-inter">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Modern Farming</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Food Distribution</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Youth Training</li>
              </ul>
            </div>

            {/* Healthcare Card */}
            <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#ffeb3b] border-[#ffeb3b] p-8 hover:border-[#ffeb3b] transition-all hover:shadow-lg">

              <div className="w-16 h-16 bg-[#ffeb3b]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#f9a825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                Healthcare
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Delivering essential medical services to underserved communities
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-inter">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Medical Outreach</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Maternal Health</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Clean Water</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Timeline */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
              Active Projects
            </h2>
          </div>

          <div className="space-y-16">
            {/* Education Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#8dc220] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Education Initiatives</h3>
              </div>
              <div className="ml-16 bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-roboto font-bold text-gray-900 mb-4">
                  Back to School Project
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                  Distributing 2.3 million branded learning packs including school bags, textbooks, math sets, and exercise books to primary schools across 36 states.
                </p>
                <div className="flex items-center text-[#8dc220]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Active Project</span>
                </div>
              </div>
            </div>

            {/* Agriculture Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#007acc] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Agriculture Programs</h3>
              </div>
              <div className="ml-16 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Community Farms
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    200+ farmers trained in modern agricultural techniques
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Food Distribution
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    1,000 families receive essential food supplies annually
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Youth Empowerment
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Agricultural skills training for young entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            {/* Healthcare Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#f9a825] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Healthcare Services</h3>
              </div>
              <div className="ml-16 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Medical Outreach
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    500 people per quarter receive medical care
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Maternal Health
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Reducing childbirth risks for expecting mothers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Clean Water
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Borehole construction for safe water access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Minimal Cards */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
              Meet Our Team
            </h2>
          </div>

          {/*
            Improved Team Cards UI with dynamic content mapping.
            Modern, elevated card design with subtle glassmorphism, hover effects, and unified color theme.
          */}
          {(() => {
            const teamMembers = [
              {
                name: "Collins Onyeaji",
                role: "Founder & Executive Director",
                image: "/collins.jpeg",
                alt: "Collins Onyeaji",
              },
              {
                name: "Adanma Judith Aloka",
                role: "Programme Coordinator (Southeast)",
                image: "/judith.jpeg",
                alt: "Adanma Judith Aloka",
              },
              {
                name: "Precious Amaka Isoh",
                role: "Legal Adviser",
                image: "/precious.webp",
                alt: "Precious Amaka Isoh",
              },
              {
                name: "Hope Gregory",
                role: "Group HR/Admin",
                image: "/hope.jpeg",
                alt: "Hope Gregory",
              },
              // Add more team members here if needed
            ];

            return (
              <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {teamMembers.map((member, idx) => (
                  <div
                    key={member.name}
                    className="relative flex flex-col items-center bg-white/80 backdrop-blur-lg p-10 pt-15 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                  >
                    {/* Decorative background accent */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#8dc220]/10 rounded-full blur-2xl opacity-70"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#8dc220]/10 rounded-full blur-xl opacity-60"></div>
                    </div>
                    {/* Profile Image */}
                    <div className="mx-auto">
                      <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={member.image}
                          alt={member.alt}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col items-center mt-8 z-10">
                      <h3 className="text-xl font-roboto font-bold text-gray-900 mb-1 group-hover:text-[#8dc220] transition-colors duration-200 text-center">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-inter mb-4 tracking-wide text-center text-sm">
                        {member.role}
                      </p>
                      {/* Optional: Social icons or short bio */}
                      <div className="flex gap-3 mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block w-8 h-1 rounded bg-[#8dc220]"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          <div className="text-center mt-12">
            <p className="text-base text-gray-600 font-inter max-w-2xl mx-auto">
              Our dedicated team combines expertise with compassion, working tirelessly to create lasting impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>


      {/* Donation Section - Modern CTA */}
      <section id="donation" className="py-24 bg-gradient-to-br from-[#5d8708] to-[#446802]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-white/90 font-inter mb-12">
            Your support directly impacts education, agriculture, and healthcare in underserved communities
          </p>

          <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-8">
              Donate via Bank Transfer
            </h3>
            <p className="text-gray-700 font-inter mb-6 text-base text-center">
              For now, please send your donation directly to our bank account below. Thank you for supporting our mission!
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 flex flex-col gap-4 items-center border border-gray-200">
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Account Name:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="accountName">Collins Onyeaji</span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('Collins Onyeaji');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Account Number:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="accountNumber">3101143261</span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('3101143261');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Bank Name:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="bankName">First Bank Nigeria</span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('First Bank Nigeria');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
            </div>
            <p className="text-gray-500 font-inter text-sm text-center">
              100% of your donation goes to the communities we serve. Thank you for your generosity!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="bg-black text-white">
        <div className="grid md:grid-cols-2">
          {/* Contact Info */}
          <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold mb-2 mt-2">
              Get In Touch
            </h2>
            <p className="text-[15px] text-gray-400 font-inter mb-10">
              Ready to join us in making a difference? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-roboto font-bold mb-1">Address</h4>
                  <p className="text-gray-400 font-inter font-medium text-[15px]">Kingfem GA247 Plot 264, Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT-Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-roboto font-bold mb-1">Email</h4>
                  <p className="text-gray-400 font-inter font-medium text-[15px]">info@collinsonyeaji.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-roboto font-bold mb-1">Phone</h4>
                  <p className="text-gray-400 font-inter font-medium text-[15px]">+2348059000097</p>
                </div>
              </div>
            </div>
                {/* Socials links  */}
            {/* <div className="flex space-x-4 mt-10">
              <a href="#" className="w-12 h-12 bg-[#8dc220] rounded-full flex items-center justify-center hover:bg-[#7bb01c] transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-[#007acc] rounded-full flex items-center justify-center hover:bg-[#005a99] transition-colors">
                <span className="text-white font-bold">in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center hover:bg-[#c2185b] transition-colors">
                <span className="text-white font-bold">ig</span>
              </a>
            </div> */}
          </div>

          {/* Map Section */}
          <div className="relative h-[500px] md:h-auto bg-gray-900">
            <iframe
              className="w-full h-full opacity-90"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31518.04524888348!2d7.459166!3d9.08601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1757413690170!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-slate-900" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-12 pb-6">
        <div className=" mx-auto py-4 sm:py-6 lg:pt-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logowhite.png"
                alt="Collins Onyeaji Foundation"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <p className="text-gray-400 font-inter text-[15px] mb-8 max-w-2xl mx-auto">
              Empowering remote communities in Eastern Nigeria through education, sustainable agriculture, and quality healthcare initiatives.
            </p>

            {/* <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-[#8dc220] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#8dc220] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#8dc220] transition-colors">Donate</a>
            </div> */}

            <div className="pt-8 border-t border-gray-900">
              <p className="text-gray-200 font-inter text-sm font-semibold">
                © 2024 Collins Onyeaji Foundation. All rights reserved. | An Initiative of GOZI AFRICA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
