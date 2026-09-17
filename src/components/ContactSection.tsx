/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Clock, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialNotes }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    serviceNeeded: initialService || 'Paid Advertising (PPC)',
    message: initialNotes || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        serviceNeeded: initialService
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData(prev => ({
        ...prev,
        message: initialNotes
      }));
    }
  }, [initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D9488]">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Let's Talk About Your Growth Goals
          </h2>

          <p className="text-base text-slate-600">
            Reach out today to discuss how we can help you acquire more customers and scale your digital marketing.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Direct Contact
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Email Us
                  </span>
                  <a 
                    id="contact-primary-email"
                    href={`mailto:${SITE_CONFIG.contact.email.primary}`} 
                    className="text-sm font-bold text-slate-900 hover:text-[#0D9488] transition-colors"
                  >
                    {SITE_CONFIG.contact.email.primary}
                  </a>
                  <span className="text-xs text-[#0D9488] block mt-0.5 font-semibold">
                    ⚡ {SITE_CONFIG.contact.workingHours.responseTime}
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Business Hours
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {SITE_CONFIG.contact.workingHours.weekdays}
                  </p>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {SITE_CONFIG.contact.workingHours.weekends}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-3.5 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 font-heading uppercase tracking-wider">
                What to Expect:
              </h4>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Complimentary 30-minute discovery consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Custom audit of your current channels & opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>No hard sell or high-pressure commitments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below and we'll be in touch shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 block">
                      Your Name <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 block">
                      Work Email <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700 block">
                    Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] text-sm"
                  >
                    <option>Pay-Per-Click Advertising (PPC)</option>
                    <option>Search Engine Optimization (SEO)</option>
                    <option>Web Design & Conversion Optimization</option>
                    <option>Social Media & Creative Content</option>
                    <option>Email Marketing & Automation</option>
                    <option>Analytics & Growth Reporting</option>
                    <option>Full-Service Growth Retainer</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 block">
                    Your Message / Goals
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your brand, current targets, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] text-sm"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center mx-auto text-[#0D9488]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName || 'Partner'}</strong>. We have received your inquiry and our team will get back to you within 2 business hours at <strong className="text-[#0D9488]">{formData.workEmail}</strong>.
                  </p>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
