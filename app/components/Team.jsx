'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-subtle rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Dedicated professionals driving our mission forward
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Profile Image */}
                <div className="relative mx-auto mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2 group-hover:text-accent-dark transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm mb-4">
                    {member.role}
                  </p>

                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-accent mx-auto rounded-full group-hover:w-20 transition-all duration-500" />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-subtle rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-inter text-base max-w-2xl mx-auto">
            Our dedicated team combines expertise with compassion, working tirelessly to create lasting impact in the communities we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
