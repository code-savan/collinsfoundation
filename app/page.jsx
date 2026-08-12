'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from './components/Nav';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Stories from './components/Stories';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Mission from './components/Mission';
import Focus from './components/Focus'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Team from './components/Team'
import HowItWorks from './components/HowItWorks'
import Donation from './components/Donation'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { campaigns, donationTiers, impactMetrics, donorProof } from './data/fundraising';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
      {/* Hero Section */}
      <Hero />
      {/* Partner Logo Strip */}
        <LogoStrip />
      {/* Stories From the Field - Real Video Footage */}
        <Stories />
      {/* Impact Stats Bar - Dark Section */}
        <StatsBar />
      {/* About Section */}
        <About />
      {/* Mission & Values */}
        <Mission />
      {/* Focus Areas - Bento Grid */}
        <Focus />
      {/* Projects Section */}
        <Projects />
      {/* Gallery Section */}
        <Gallery />
      {/* Team Section */}
        <Team />
      {/* How Your Donation Works - 3 Step Flow */}
        <HowItWorks />
      {/* Donation Section */}
        <Donation />
      {/* Newsletter / Donor Capture */}
        <Newsletter />
      {/* Contact Section */}
        <Contact />
      {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
