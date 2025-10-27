import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
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
  )
}

export default Footer
