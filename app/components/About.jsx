import React from 'react'

const About = () => {
  return (
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
                  <div className="text-xl md:text-3xl font-roboto font-bold text-[#8dc220]">10,000+</div>
                  <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Pupils reached</div>
                </div>
                <div className="md:text-center w-fit text-center">
                  <div className="text-xl md:text-3xl font-roboto font-bold text-[#007acc]">1000+</div>
                  <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Farmers reached</div>
                </div>
                <div className="md:text-right w-fit text-center">
                  <div className="text-xl md:text-3xl font-roboto font-bold text-[#ffeb3b]">500+</div>
                  <div className="md:text-sm text-xs font-semibold text-gray-600 font-inter mt-1">Medical intervention</div>
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
  )
}

export default About
