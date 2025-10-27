import React from 'react'

const Mission = () => {
  return (
    <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Our Purpose</span>
        <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
          Mission & Values
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">
          <div className="w-14 h-14 bg-[#8dc220]/10 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-[#8dc220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 font-inter leading-relaxed">
            To empower remote communities in Eastern Nigeria by providing access to education, sustainable agriculture, and quality healthcare, creating lasting change for generations.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-200">
          <div className="w-14 h-14 bg-[#007acc]/10 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-[#007acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-4">
            Our Values
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Integrity', desc: 'Transparency in all operations' },
              { name: 'Compassion', desc: 'Serving with empathy' },
              { name: 'Collaboration', desc: 'Partnering for impact' },
              { name: 'Sustainability', desc: 'Building lasting solutions' }
            ].map((value, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-[#8dc220] rounded-full mr-3" />
                <span className="font-inter text-gray-700">
                  <span className="font-medium">{value.name}:</span> {value.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mission
