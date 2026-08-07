'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stories from './components/Stories';
import About from './components/About';
import Mission from './components/Mission';
import Focus from './components/Focus'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Donation from './components/Donation'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      {/* Hero Section - Modern Grid */}
      <Hero />
      {/* Stories From the Field - Real Video Footage */}
        <Stories />
      {/* About Section - Modern Grid */}
        <About />
      {/* Mission & Values - Modern Minimal */}
        <Mission />

      {/* Focus Areas - Modern Cards */}
        <Focus />

      {/* Projects Section - Modern Timeline */}
        <Projects />

      {/* Gallery Section - Image Grid + Lightbox */}
        <Gallery />

      {/* Team Section - Modern Minimal Cards */}
        <Team />

      {/* Donation Section - Modern CTA */}
        <Donation />

      {/* Newsletter / Donor Capture */}
        <Newsletter />

      {/* Contact Section with Map */}
        <Contact />

      {/* Footer */}
        <Footer />
    </div>
  );
}
