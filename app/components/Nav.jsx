'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'about', label: 'About' },
  { id: 'focus-areas', label: 'Mandate' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };


  return (
    <nav className={`bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 border-b transition-shadow ${scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'}`}>
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
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex">
          <button onClick={() => scrollToSection('donation')} className="bg-[#8dc220] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#7bb01c] transition-all hover:scale-105 shadow-md shadow-[#8dc220]/20">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-[#8dc220] font-medium py-2.5 text-left border-b border-gray-100 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('donation')} className="bg-[#8dc220] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7bb01c] transition-colors mt-4 text-center">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}

export default Nav
