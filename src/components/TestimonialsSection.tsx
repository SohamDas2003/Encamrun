/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-base text-slate-600">
            Hear directly from the founders and marketing directors who scale their businesses with Encamrun.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-white border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 relative hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-teal-100 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center space-x-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}, <span className="text-slate-700 font-medium">{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
