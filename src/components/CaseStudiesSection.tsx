/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowRight, Quote } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Proven Results
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Client Success Stories
          </h2>

          <p className="text-base text-slate-600">
            Real growth stories from ambitious brands we've helped scale across e-commerce, B2B technology, and specialized industries.
          </p>
        </div>

        {/* 3-Card Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                {cs.image && (
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={cs.image} 
                      alt={cs.clientName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/95 backdrop-blur-xs text-slate-900 rounded shadow-xs">
                      {cs.badge}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Industry & Title */}
                  <div className="text-xs text-slate-500 font-medium mb-1">{cs.industry}</div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                    {cs.clientName}
                  </h3>

                  {/* Primary Highlight Tag */}
                  <div className="inline-flex items-center px-3 py-1.5 bg-teal-50 border border-teal-200 rounded text-xs font-bold text-[#0D9488] mb-4">
                    <span>{cs.tagline}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  {/* 2 Key Metric Badges */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 mb-6">
                    <div>
                      <div className="text-lg font-black text-slate-900 font-heading">{cs.results.primary.value}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{cs.results.primary.label}</div>
                    </div>
                    <div>
                      <div className="text-lg font-black text-[#0D9488] font-heading">{cs.results.secondary.value}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{cs.results.secondary.label}</div>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  {cs.testimonial && (
                    <div className="border-t border-slate-100 pt-4 flex items-start space-x-2 text-xs text-slate-600 italic">
                      <Quote className="w-4 h-4 text-teal-500 shrink-0 not-italic mt-0.5" />
                      <p>"{cs.testimonial.quote}"</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Client Detail */}
              {cs.testimonial && (
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">{cs.testimonial.author}</span>
                  <span>{cs.testimonial.role}, {cs.testimonial.company}</span>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition-all group"
          >
            <span>Discuss Your Project Goals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
