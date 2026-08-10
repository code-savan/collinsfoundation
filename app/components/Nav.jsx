'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sectionLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'about', label: 'About' },
  { id: 'focus-areas', label: 'Mandate' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

const pageLinks = [
  { href: '/donate', label: 'Donate' },
  { href: '/campaigns', label: 'Campaigns' },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 border-b transition-shadow ${scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 gap-4">
          <div className="flex items-center shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Collins Onyeaji Foundation"
                width={180}
                height={180}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {isHome && sectionLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-[#8dc220] font-medium cursor-pointer text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}

            {!isHome && (
              <Link href="/" className="text-gray-700 hover:text-[#8dc220] font-medium text-sm transition-colors">
                Home
              </Link>
            )}

            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors ${pathname === link.href ? 'text-[#8dc220]' : 'text-gray-700 hover:text-[#8dc220]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/donate" className="bg-[#8dc220] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#7bb01c] transition-all hover:scale-105 shadow-md shadow-[#8dc220]/20">
              Donate Now
            </Link>
          </div>

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

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {isHome && sectionLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-[#8dc220] font-medium py-2.5 text-left border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </button>
              ))}

              {!isHome && (
                <Link href="/" onClick={closeMenu} className="text-gray-700 hover:text-[#8dc220] font-medium py-2.5 text-left border-b border-gray-100">
                  Home
                </Link>
              )}

              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-[#8dc220] font-medium py-2.5 text-left border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/donate" onClick={closeMenu} className="bg-[#8dc220] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7bb01c] transition-colors mt-4 text-center">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
