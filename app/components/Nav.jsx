'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
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
          Mandate
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
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer">
            Gallery
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
            Mandate
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
              Team
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#8dc220] font-medium py-2 text-left">
              Gallery
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
  )
}

export default Nav
