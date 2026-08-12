'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      if (isHome) {
        const sections = sectionLinks.map(link => ({
          id: link.id,
          element: document.getElementById(link.id),
        }));

        for (const section of sections.reverse()) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center shrink-0"
            >
              <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Collins Onyeaji Foundation"
                    width={48}
                    height={48}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-roboto font-bold text-gray-900 text-lg leading-tight">
                    Collins Onyeaji
                  </div>
                  <div className="text-xs text-gray-500 font-inter">Foundation</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-1"
            >
              {isHome && sectionLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    activeSection === link.id
                      ? 'text-accent-dark'
                      : 'text-gray-700 hover:text-accent-dark hover:bg-accent-subtle'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent-subtle rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}

              {!isHome && (
                <Link
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-dark hover:bg-accent-subtle rounded-full transition-colors"
                >
                  Home
                </Link>
              )}

              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    pathname === link.href
                      ? 'text-accent-dark bg-accent-subtle'
                      : 'text-gray-700 hover:text-accent-dark hover:bg-accent-subtle'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center gap-3"
            >
              <Link
                href="/donate"
                className="relative group inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all hover:shadow-accent hover:scale-105 active:scale-95"
              >
                <span>Donate Now</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center relative">
                <span className={`absolute bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`} />
                <span className={`absolute bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`} />
                <span className={`absolute bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`} />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 z-40 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col space-y-1">
                {isHome && sectionLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-accent-dark bg-accent-subtle'
                        : 'text-gray-700 hover:text-accent-dark hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {!isHome && (
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-accent-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors"
                  >
                    Home
                  </Link>
                )}

                <div className="pt-4 mt-4 border-t border-gray-100">
                  {pageLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionLinks.length + i) * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                          pathname === link.href
                            ? 'text-accent-dark bg-accent-subtle'
                            : 'text-gray-700 hover:text-accent-dark hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/donate"
                    onClick={closeMenu}
                    className="block w-full bg-accent text-white px-6 py-3.5 rounded-xl font-semibold text-center hover:bg-accent-dark transition-all hover:shadow-accent"
                  >
                    Donate Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
