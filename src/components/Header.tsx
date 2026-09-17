/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../lib/siteConfig';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Mail
} from 'lucide-react';

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3.5' 
          : 'bg-white border-slate-200 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            id="brand-logo-nav"
            href="#" 
            className="flex items-center group text-left"
          >
            <img
              src={SITE_CONFIG.brand.logo}
              alt={SITE_CONFIG.brand.name}
              className="h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {SITE_CONFIG.navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-slate-600 hover:text-[#0D9488] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#0D9488] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Single Clean CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="header-consultation-btn"
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#0D9488] hover:bg-[#0F766E] rounded shadow-xs transition-all active:scale-95 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {SITE_CONFIG.navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#0D9488] hover:bg-slate-50 rounded transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="text-xs text-slate-600 flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
              <a href={`mailto:${SITE_CONFIG.contact.email.primary}`} className="text-slate-600 font-medium">
                {SITE_CONFIG.contact.email.primary}
              </a>
            </div>

            <div>
              <button
                id="mobile-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0D9488] hover:bg-[#0F766E] rounded transition-colors text-center shadow-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
