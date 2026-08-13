'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-subtle rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-dark font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-gray-900 mt-4 tracking-tight text-balance">
            Active Projects
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Driving sustainable change across Eastern Nigeria
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Education Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold font-roboto text-xl shadow-lg shadow-accent/30">
                1
              </div>
              <h3 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 ml-6 tracking-tight">
                Education Initiatives
              </h3>
            </div>

            <div className="space-y-6 ml-7 md:ml-20">
              {[
                {
                  title: 'Back to School Project',
                  desc: 'Distributing 10,000 learning packs to 586 primary schools across 95 LGAs of the South-Eastern Region of Nigeria.',
                },
                {
                  title: 'Renovate and Equip School Project',
                  desc: 'Renovating and equipping 586 dilapidated primary school structures across 95 LGAs of the South-Eastern region.',
                },
                {
                  title: 'Sole to School Project',
                  desc: 'Distributing 10,000 school footwears to 586 primary schools across 95 LGAs of the South-Eastern region.',
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-8 w-4 h-4 rounded-full bg-accent border-4 border-gray-50 hidden md:block" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-roboto font-bold text-gray-900 mb-3">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 font-inter leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent-dark shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-inter font-semibold text-sm">Active</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Agriculture Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white font-bold font-roboto text-xl shadow-lg shadow-secondary/30">
                2
              </div>
              <h3 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 ml-6 tracking-tight">
                Agriculture Programs
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 ml-7 md:ml-20">
              {[
                {
                  title: 'Community Farms',
                  desc: '200+ farmers trained in modern agricultural techniques',
                },
                {
                  title: 'Food Distribution',
                  desc: '1,000 families receive essential food supplies annually',
                },
                {
                  title: 'Youth Empowerment',
                  desc: 'Agricultural skills training for young entrepreneurs',
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Healthcare Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-amber rounded-full flex items-center justify-center text-white font-bold font-roboto text-xl shadow-lg shadow-amber/30">
                3
              </div>
              <h3 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 ml-6 tracking-tight">
                Healthcare Services
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 ml-7 md:ml-20">
              {[
                {
                  title: 'Medical Outreach',
                  desc: '500 people per quarter receive medical care',
                },
                {
                  title: 'Maternal Health',
                  desc: 'Reducing childbirth risks for expecting mothers',
                },
                {
                  title: 'Clean Water',
                  desc: 'Borehole construction for safe water access',
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-roboto font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
