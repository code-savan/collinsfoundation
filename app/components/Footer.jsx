import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div>
            <Image
              src="/logowhite.png"
              alt="Collins Onyeaji Foundation"
              width={160}
              height={160}
              className="object-contain mb-6"
            />
            <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-sm mb-6">
              Empowering remote communities in Eastern Nigeria through education, sustainable agriculture, and quality healthcare initiatives.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Facebook', icon: 'f' },
                { label: 'LinkedIn', icon: 'in' },
                { label: 'Instagram', icon: 'ig' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <span className="text-white font-bold text-xs">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-accent-light mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Campaigns', href: '/campaigns' },
                { label: 'Donate', href: '/donate' },
                { label: 'About Us', href: '/#about' },
                { label: 'Team', href: '/#team' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved column */}
          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-accent-light mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { label: 'Donate Now', href: '/donate' },
                { label: 'Featured Campaign', href: '/campaigns/back-to-school' },
                { label: 'Contact Us', href: '/#contact' },
                { label: 'Partner With Us', href: 'mailto:info@collinsonyeaji.org' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-accent-light mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 font-inter text-sm">
              <li className="leading-relaxed">
                Plot P/11 G.I Oguledo Avenue, Action Housing Area B, New Owerri P.M.B. 1217, Owerri, Imo State, Nigeria
              </li>
              <li>
                <a href="mailto:info@collinsonyeaji.org" className="hover:text-white transition-colors">
                  info@collinsonyeaji.org
                </a>
              </li>
              <li>
                <a href="tel:+2348059000097" className="hover:text-white transition-colors">
                  +2348059000097
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-inter text-sm">
            © 2024 Collins Onyeaji Foundation. All rights reserved.
          </p>
          <p className="text-gray-600 font-inter text-sm">
            An Initiative of GOZI AFRICA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
