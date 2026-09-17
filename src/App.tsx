/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServingLocationsSection } from './components/ServingLocationsSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>();
  const [selectedNotesForQuote, setSelectedNotesForQuote] = useState<string | undefined>();

  // Smooth scroll triggers
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-[#0D9488] selection:text-white geometric-grid">
      {/* Fixed Header */}
      <Header
        onOpenAudit={handleScrollToContact}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Impact Stats, Trust Proof & Live Dashboard Graphic */}
        <Hero
          onOpenAudit={handleScrollToContact}
          onOpenContact={handleScrollToContact}
        />

        {/* 2. Cities Served Across India */}
        <ServingLocationsSection />

        {/* 3. Core Full-Funnel Services Portfolio */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Verified Client Case Studies with Rich Visuals */}
        <CaseStudiesSection
          onOpenAudit={handleScrollToContact}
        />

        {/* 5. Senior Leadership & Strategic Studio */}
        <AboutSection />

        {/* 6. Verified Client Testimonials & Ratings */}
        <TestimonialsSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Direct Contact, Free Audit & RFP Proposal Form */}
        <ContactSection
          initialService={selectedServiceForQuote}
          initialNotes={selectedNotesForQuote}
        />
      </main>

      {/* Clean Footer powered by SITE_CONFIG */}
      <Footer />
    </div>
  );
}
