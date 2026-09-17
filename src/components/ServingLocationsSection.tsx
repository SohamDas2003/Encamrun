/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin } from 'lucide-react';

const servingLocations = [
  'Mumbai',
  'Pune',
  'Bangalore',
  'Delhi',
  'Gurgaon',
  'Chandigarh',
];

export const ServingLocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 md:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Where We Work
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Serving Ambitious Brands Across India
          </h2>

          <p className="text-base text-slate-600">
            From local businesses to growing national brands, we build digital marketing strategies for teams in India's leading business hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {servingLocations.map((location) => (
            <div
              key={location}
              className="flex items-center gap-4 p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl hover:border-[#0D9488] hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#0D9488]" />
              </div>
              <span className="text-lg font-bold text-slate-900 font-heading">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};