import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerGroups = [
  {
    title: 'Foundation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Impact', href: '/#impact' },
      { label: 'Team', href: '/#team' },
    ],
  },
  {
    title: 'Give',
    links: [
      { label: 'Donate now', href: '/donate' },
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'Back to school', href: '/campaigns/back-to-school' },
      { label: 'Contact us', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
      { label: 'Email us', href: 'mailto:info@collinsonyeaji.org' },
      { label: 'Call us', href: 'tel:+2348059000097' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-white">
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logowhite.png"
              alt="Collins Onyeaji Foundation"
              width={160}
              height={80}
              className="mb-6 h-auto object-contain"
            />
            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Empowering remote communities in Eastern Nigeria through education, sustainable agriculture, and quality healthcare initiatives.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-6 font-roboto text-sm font-bold uppercase tracking-[0.16em] text-accent-light">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 Collins Onyeaji Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">An Initiative of GOZI AFRICA</p>
            <a href="#top" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:bg-white/10 hover:text-white" aria-label="Back to top">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
