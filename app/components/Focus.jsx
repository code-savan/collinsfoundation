import React from 'react'

const Focus = () => {
  return (
    <section id="focus-areas" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2 mb-4">
          Focus Areas
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Three pillars that drive sustainable community development
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Education Card */}
        <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#8dc220] border-[#8dc220] p-8 hover:border-[#8dc220] transition-all hover:shadow-lg">

          <div className="w-16 h-16 bg-[#8dc220]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
            Education
          </h3>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Building learning-friendly environments and providing educational resources
          </p>
          <ul className="space-y-2 text-sm text-gray-500 font-inter">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />Back to School Project</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />Renovate and Equip School Project</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8dc220] rounded-full mr-2" />Sole to School Project</li>
          </ul>
        </div>

        {/* Agriculture Card */}
        <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#007acc] border-[#007acc] p-8 hover:border-[#007acc] transition-all hover:shadow-lg">

          <div className="w-16 h-16 bg-[#007acc]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#007acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
            Agriculture
          </h3>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Promoting sustainable farming and food security initiatives
          </p>
          <ul className="space-y-2 text-sm text-gray-500 font-inter">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Modern Farming</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Food Distribution</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#007acc] rounded-full mr-2" />Youth Training</li>
          </ul>
        </div>

        {/* Healthcare Card */}
        <div className="group relative bg-white rounded-2xl border border-t-3 border-t-[#ffeb3b] border-[#ffeb3b] p-8 hover:border-[#ffeb3b] transition-all hover:shadow-lg">

          <div className="w-16 h-16 bg-[#ffeb3b]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#f9a825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
            Healthcare
          </h3>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Delivering essential medical services to underserved communities
          </p>
          <ul className="space-y-2 text-sm text-gray-500 font-inter">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Medical Outreach</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Maternal Health</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#f9a825] rounded-full mr-2" />Clean Water</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Focus
