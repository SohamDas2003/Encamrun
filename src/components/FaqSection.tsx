/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Questions & Answers
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our digital marketing services, timelines, and how we work together.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8FAFC] border-[#0D9488] shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 font-heading">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded transition-colors ${
                    isOpen ? 'bg-[#0D9488] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Have a question that's not answered here?{' '}
          <a
            href={`mailto:${SITE_CONFIG.contact.email.primary}`}
            className="text-[#0D9488] font-bold hover:underline inline-flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email us directly</span>
          </a>
        </div>

      </div>
    </section>
  );
};
