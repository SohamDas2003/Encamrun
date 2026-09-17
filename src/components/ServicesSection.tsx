/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { 
  Target, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Mail, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-[#0D9488]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#0D9488]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#0D9488]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#0D9488]" />;
      case 'Mail': return <Mail className="w-5 h-5 text-[#0D9488]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#0D9488]" />;
      default: return <TrendingUp className="w-5 h-5 text-[#0D9488]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Our Capabilities
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Full-Service Digital Marketing Solutions
          </h2>

          <p className="text-base text-slate-600">
            We deliver targeted marketing campaigns designed to expand your reach, attract high-intent customers, and maximize revenue.
          </p>
        </div>

        {/* Clean Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 flex flex-col justify-between hover:border-[#0D9488] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Icon & Category Header */}
                <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-100/70 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Link */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0D9488]">
                  {service.metrics.label}: <strong>{service.metrics.value}</strong>
                </span>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-900 hover:text-[#0D9488] transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
