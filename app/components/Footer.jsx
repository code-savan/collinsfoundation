import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <Image
              src="/logowhite.png"
              alt="Collins Onyeaji Foundation"
              width={160}
              height={160}
              className="object-contain mb-4"
            />
            <p className="text-gray-400 font-inter text-[15px] leading-relaxed max-w-sm">
              Empowering remote communities in Eastern Nigeria through education, sustainable agriculture, and quality healthcare initiatives.
            </p>
          </div>

          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-[#8dc220] mb-4">Explore</h4>
            <ul className="space-y-2.5 text-gray-400 font-inter text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#focus-areas" className="hover:text-white transition-colors">Our Mandate</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-[#8dc220] mb-4">Get Involved</h4>
            <ul className="space-y-2.5 text-gray-400 font-inter text-sm">
              <li><a href="#donation" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="mailto:info@collinsonyeaji.org" className="hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-roboto font-bold text-sm uppercase tracking-wider text-[#8dc220] mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/5 hover:bg-[#8dc220] rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/5 hover:bg-[#8dc220] rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold text-sm">in</span>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/5 hover:bg-[#8dc220] rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 font-inter text-sm">
            © 2024 Collins Onyeaji Foundation. All rights reserved.
          </p>
          <p className="text-gray-500 font-inter text-sm">
            An Initiative of GOZI AFRICA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
