/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { 
  ArrowRight, 
  CheckCircle2,
  BarChart2
} from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleScrollToCases = () => {
    const el = document.getElementById('case-studies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography, Value Proposition & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-teal-50 border border-teal-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-[#0D9488]">
                {SITE_CONFIG.brand.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-heading leading-[1.12]">
              Grow Your Brand With Strategic <br />
              <span className="text-[#0D9488]">Digital Marketing</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
              {SITE_CONFIG.brand.subtagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="hero-audit-cta-btn"
                onClick={onOpenContact}
                className="px-7 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition-all flex items-center justify-center space-x-2 active:scale-98 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cases-btn"
                onClick={handleScrollToCases}
                className="px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2"
              >
                <BarChart2 className="w-4 h-4 text-[#0D9488]" />
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Clean Key Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-200">
              {SITE_CONFIG.heroStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Assurance Points */}
            <div className="pt-1 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Dedicated Marketing Team</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Flexible Monthly Terms</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Transparent KPI Reporting</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Marketing Dashboard Showcase (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <img 
                src="/images/hero_marketing_dashboard.jpg" 
                alt="Encamrun Marketing Performance Dashboard" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
