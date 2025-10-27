import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
              Active Projects
            </h2>
          </div>

          <div className="space-y-16">
            {/* Education Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#8dc220] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Education Initiatives</h3>
              </div>
              <div className="space-y-4">
                {/* 1. */}
              <div className="ml-16 bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-roboto font-bold text-gray-900 mb-4">
                  Back to School Project
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Our “Back to School Project” is aimed at distributing 10,000 learning packs to 586 primary schools across 95 LGAs of the South-Eastern Region of Nigeria.
                </p>
                <div className="flex items-center text-[#8dc220]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Active Project</span>
                </div>
              </div>
                {/* 2. */}
              <div className="ml-16 bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-roboto font-bold text-gray-900 mb-4">
                  Renovate and Equip School Project
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Our “Renovate and Equip Project” is aimed at renovating and equipping 586 dilapidated primary school structures across 95 LGAs of the South-Eastern region of Nigeria.
                </p>
                <div className="flex items-center text-[#8dc220]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Active Project</span>
                </div>
              </div>
                {/* 3. */}
              <div className="ml-16 bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-roboto font-bold text-gray-900 mb-4">
                Sole to School Project
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                Our “Sole to School Project” is aimed at distributing 10,000 school footwears to 586 primary schools across 95 LGAs of the South-Eastern region of Nigeria.
                </p>
                <div className="flex items-center text-[#8dc220]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Active Project</span>
                </div>
              </div>
              </div>
            </div>

            {/* Agriculture Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#007acc] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Agriculture Programs</h3>
              </div>
              <div className="ml-16 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Community Farms
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    200+ farmers trained in modern agricultural techniques
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Food Distribution
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    1,000 families receive essential food supplies annually
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Youth Empowerment
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Agricultural skills training for young entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            {/* Healthcare Projects */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#f9a825] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-3xl font-roboto font-bold text-gray-900 ml-4">Healthcare Services</h3>
              </div>
              <div className="ml-16 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Medical Outreach
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    500 people per quarter receive medical care
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Maternal Health
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Reducing childbirth risks for expecting mothers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    Clean Water
                  </h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Borehole construction for safe water access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects
