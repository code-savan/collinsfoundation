'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const sectionLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our story' },
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const pageLinks = [
  { href: '/campaigns', label: 'Campaigns' },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const solidNav = scrolled || !isHome || isMenuOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = sectionLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      for (const section of sections.reverse()) {
        if (section.element && section.element.getBoundingClientRect().top <= 120) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 88;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    closeMenu();
  };

  const textClass = solidNav ? 'text-gray-700' : 'text-white/90';
  const hoverClass = solidNav ? 'hover:text-accent-dark hover:bg-accent-subtle' : 'hover:text-white hover:bg-white/10';

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          solidNav
            ? 'bg-white/90 backdrop-blur-xl border-gray-200/70 shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" onClick={closeMenu} className="group flex min-h-11 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Collins Onyeaji Foundation"
              width={44}
              height={44}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="hidden leading-tight sm:block">
              <span className={`block font-roboto text-base font-bold ${solidNav ? 'text-gray-950' : 'text-white'}`}>
                Collins Onyeaji
              </span>
              <span className={`block text-xs font-medium ${solidNav ? 'text-gray-500' : 'text-white/65'}`}>
                Foundation
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {isHome ? sectionLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative min-h-11 rounded-full px-4 text-sm font-semibold transition-colors ${
                    active && solidNav ? 'text-accent-dark' : textClass
                  } ${hoverClass}`}
                >
                  {link.label}
                  {active && solidNav && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-subtle"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                </button>
              );
            }) : (
              <Link href="/" className={`flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors ${textClass} ${hoverClass}`}>
                Home
              </Link>
            )}

            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                  pathname === link.href ? 'bg-accent-subtle text-accent-dark' : `${textClass} ${hoverClass}`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 text-sm font-bold text-white shadow-accent transition-all hover:scale-[1.03] hover:bg-accent-dark active:scale-95"
            >
              Donate now
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <button
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${solidNav ? 'hover:bg-gray-100' : 'bg-black/15 text-white backdrop-blur-md hover:bg-black/25'}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="relative block h-5 w-5">
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full transition-all ${solidNav ? 'bg-gray-900' : 'bg-white'} ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full transition-all ${solidNav ? 'bg-gray-900' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full transition-all ${solidNav ? 'bg-gray-900' : 'bg-white'} ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white/95 px-4 pb-8 pt-6 backdrop-blur-xl lg:hidden"
            style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
          >
            <div className="mx-auto flex max-w-xl flex-col gap-2">
              {(isHome ? sectionLinks : [{ href: '/', label: 'Home' }]).map((link, index) => {
                const isSection = 'id' in link;
                return isSection ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex min-h-12 items-center rounded-2xl px-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className="flex min-h-12 items-center rounded-2xl px-4 font-semibold text-gray-800 hover:bg-gray-50">
                    {link.label}
                  </Link>
                );
              })}

              {pageLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu} className="flex min-h-12 items-center rounded-2xl px-4 font-semibold text-gray-800 hover:bg-gray-50">
                  {link.label}
                </Link>
              ))}

              <Link href="/donate" onClick={closeMenu} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-6 font-bold text-white shadow-accent">
                Donate now
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
