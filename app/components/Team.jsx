import React from 'react'
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mt-2">
              Meet Our Team
            </h2>
          </div>

          {/*
            Improved Team Cards UI with dynamic content mapping.
            Modern, elevated card design with subtle glassmorphism, hover effects, and unified color theme.
          */}
          {(() => {
            const teamMembers = [
              {
                name: "Collins Onyeaji",
                role: "Founder & Executive Director",
                image: "/collins.jpeg",
                alt: "Collins Onyeaji",
              },
              {
                name: "Adamma Judith Aloka",
                role: "Programme Coordinator (Southeast)",
                image: "/judith.jpeg",
                alt: "Adamma Judith Aloka",
              },
              {
                name: "Precious Amaka Isoh",
                role: "Legal Adviser",
                image: "/precious.webp",
                alt: "Precious Amaka Isoh",
              },
              {
                name: "Hope Gregory",
                role: "Group HR/Admin",
                image: "/hope.jpeg",
                alt: "Hope Gregory",
              },
              // Add more team members here if needed
            ];

            return (
              <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {teamMembers.map((member, idx) => (
                  <div
                    key={member.name}
                    className="relative flex flex-col items-center bg-white/80 backdrop-blur-lg p-10 pt-15 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                  >
                    {/* Decorative background accent */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#8dc220]/10 rounded-full blur-2xl opacity-70"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#8dc220]/10 rounded-full blur-xl opacity-60"></div>
                    </div>
                    {/* Profile Image */}
                    <div className="mx-auto">
                      <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={member.image}
                          alt={member.alt}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col items-center mt-8 z-10">
                      <h3 className="text-xl font-roboto font-bold text-gray-900 mb-1 group-hover:text-[#8dc220] transition-colors duration-200 text-center">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-inter mb-4 tracking-wide text-center text-sm">
                        {member.role}
                      </p>
                      {/* Optional: Social icons or short bio */}
                      <div className="flex gap-3 mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block w-8 h-1 rounded bg-[#8dc220]"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          <div className="text-center mt-12">
            <p className="text-base text-gray-600 font-inter max-w-2xl mx-auto">
              Our dedicated team combines expertise with compassion, working tirelessly to create lasting impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Team
