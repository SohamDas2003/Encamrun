/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { 
  Mail, 
  Clock, 
  MapPin,
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowUp,
  Star
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center rounded bg-white px-3 py-2 group">
              <img
                src={SITE_CONFIG.brand.logo}
                alt={SITE_CONFIG.brand.name}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.brand.subtagline}
            </p>

            <div className="flex items-center space-x-2 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-semibold text-slate-300">
                {SITE_CONFIG.brand.rating} Rating from verified client partnerships
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                id="footer-social-linkedin"
                href={SITE_CONFIG.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-slate-900 border border-slate-800 hover:border-[#0D9488] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-twitter"
                href={SITE_CONFIG.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-slate-900 border border-slate-800 hover:border-[#0D9488] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href={SITE_CONFIG.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-slate-900 border border-slate-800 hover:border-[#0D9488] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-youtube"
                href={SITE_CONFIG.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-slate-900 border border-slate-800 hover:border-[#0D9488] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services & Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SITE_CONFIG.navigation.footerQuickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs">
              {/* Email */}
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block">Primary Email:</span>
                  <a
                    id="footer-email-link"
                    href={`mailto:${SITE_CONFIG.contact.email.primary}`}
                    className="text-slate-200 hover:text-teal-400 font-medium"
                  >
                    {SITE_CONFIG.contact.email.primary}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block">Office Hours:</span>
                  <span className="text-slate-300">{SITE_CONFIG.contact.workingHours.weekdays}</span>
                </div>
              </div>

              {/* Address */}
              {/* <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block">Office Address:</span>
                  <span className="text-slate-300">{SITE_CONFIG.contact.address}</span>
                </div>
              </div> */}
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.brand.legalName}. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
