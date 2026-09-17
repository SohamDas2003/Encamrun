/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ShieldCheck, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            A Growth Agency Built on Transparency & Results
          </h2>

          <p className="text-base text-slate-600">
            Founded in {SITE_CONFIG.brand.foundedYear}, {SITE_CONFIG.brand.name} was created to replace traditional agency overhead with agile, data-backed marketing that drives verifiable business growth.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Our Philosophy & Values (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              We treat your marketing budget like our own capital.
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In a digital marketing landscape filled with vanity metrics and empty promises, we focus squarely on contribution margin, customer acquisition efficiency, and bottom-line return on investment.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Senior Access</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    No junior hand-offs. You collaborate directly with experienced strategists and media buyers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Account Ownership</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    You own your ad accounts, pixel data, custom creatives, and analytics at all times.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Proven Track Record</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Over ₹210M+ in client revenue driven with an average 4.8x blended return on ad spend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Agency Workspace Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="/images/agency_workspace.jpg" 
                alt="Encamrun Marketing Team" 
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>

        </div>

        {/* Leadership Team Showcase */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Meet Our Leadership Team
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Experienced practitioners leading your campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.team.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 text-center hover:border-[#0D9488] hover:shadow-xs transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-[#0D9488] mt-0.5 mb-2">
                  {member.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
