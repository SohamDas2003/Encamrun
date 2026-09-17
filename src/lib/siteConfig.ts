/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Centralized Site Configuration & Global Variable Repository
 * Clean, modern digital marketing agency profile for Encamrun.
 */

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'acquisition' | 'retention' | 'creative' | 'analytics';
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  };
  startingPrice?: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  badge: string;
  tagline: string;
  summary: string;
  image?: string;
  challenge: string;
  strategy: string[];
  results: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
    tertiary?: { value: string; label: string };
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  servicesUsed: string[];
  timeframe: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialty: string;
  avatar: string;
  socialLinkedin?: string;
  socialTwitter?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  metricLabel: string;
  verified: boolean;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'services' | 'process' | 'guarantees';
}

export const SITE_CONFIG = {
  // Brand Identity
  brand: {
    name: "Encamrun",
    legalName: "Encamrun",
    domain: "encamrun.co.in",
    websiteUrl: "https://encamrun.co.in",
    tagline: "Results-Driven Digital Marketing That Grows Your Business",
    subtagline: "We help modern businesses increase website traffic, generate qualified inbound leads, and maximize revenue with data-backed SEO, paid advertising, and creative campaigns.",
    badge: "Certified Digital Marketing Agency",
    foundedYear: 2018,
    yearsInBusiness: new Date().getFullYear() - 2018,
    rating: "4.9 / 5.0",
    totalReviews: 120,
    logo: "/images/logo.png",
    heroDashboardImage: "/images/hero_marketing_dashboard.jpg",
    agencyWorkspaceImage: "/images/agency_workspace.jpg",
  },

  // Contact Information
  contact: {
    email: {
      primary: "growth@encamrun.co.in",
      support: "support@encamrun.co.in",
      careers: "careers@encamrun.co.in",
      sales: "sales@encamrun.co.in",
    },
    workingHours: {
      weekdays: "Mon – Fri: 9:00 AM – 6:00 PM",
      weekends: "Client Support: 24/7",
      timezone: "PST / EST / IST",
      responseTime: "Guaranteed reply within 2 business hours",
    },
    address: "Krishna Nagar, Safdarjung Enclave, New Delhi – 110029",
    bookingCalendarUrl: "https://calendly.com",
  },

  // Social Links
  socials: {
    linkedin: {
      url: "https://linkedin.com/company/encamrun",
      handle: "@encamrun",
      label: "LinkedIn",
    },
    twitter: {
      url: "https://x.com/encamrun",
      handle: "@encamrun",
      label: "X (Twitter)",
    },
    instagram: {
      url: "https://instagram.com/encamrun",
      handle: "@encamrun",
      label: "Instagram",
    },
    youtube: {
      url: "https://youtube.com/@encamrun",
      handle: "@encamrun",
      label: "YouTube",
    },
  },

  // Core Agency Impact Metrics
  heroStats: [
    { label: "Client Revenue Driven", value: "₹210M+", subtext: "Verified revenue generated across client campaigns" },
    { label: "Average Client ROAS", value: "4.8x", subtext: "Return on ad spend across Google & Meta" },
    { label: "Client Retention Rate", value: "96%", subtext: "Long-term client partnerships and satisfaction" },
  ] as StatItem[],

  // Core Digital Marketing Services
  services: [
    {
      id: "paid-advertising",
      title: "Pay-Per-Click Advertising (PPC)",
      category: "acquisition",
      iconName: "Target",
      popular: true,
      shortDesc: "Targeted Google & Meta ad campaigns engineered to reach buyers at the exact moment of intent and maximize return on ad spend.",
      fullDesc: "We design, manage, and scale high-converting paid search and social campaigns across Google Ads, YouTube, Facebook, and Instagram with precision budget pacing.",
      deliverables: [
        "Google Search & Performance Max Campaigns",
        "Meta (Facebook & Instagram) Direct-Response Ads",
        "High-Converting Retargeting Funnels",
        "Continuous A/B Ad Copy & Bid Optimization"
      ],
      metrics: { label: "Average CAC Reduction", value: "-38%" },
      startingPrice: "₹3,500/mo",
    },
    {
      id: "search-engine-optimization",
      title: "Search Engine Optimization (SEO)",
      category: "acquisition",
      iconName: "Search",
      popular: true,
      shortDesc: "Proven organic SEO strategies that rank your website on page one of Google, driving steady and sustainable inbound traffic.",
      fullDesc: "From comprehensive technical audits to keyword research and authoritative link building, we build an organic moat around your brand.",
      deliverables: [
        "Complete Technical SEO & Speed Optimization",
        "High-Intent Keyword & Content Strategy",
        "On-Page Optimization & Schema Architecture",
        "High-Quality Backlink Building & Digital PR"
      ],
      metrics: { label: "Average Organic Traffic Lift", value: "+285%" },
      startingPrice: "₹2,800/mo",
    },
    {
      id: "web-design-cro",
      title: "Web Design & Conversion Optimization",
      category: "acquisition",
      iconName: "TrendingUp",
      shortDesc: "Clean, modern, high-speed landing pages and websites designed to turn casual visitors into paying customers.",
      fullDesc: "We eliminate user drop-offs and friction points with strategic design, clear value propositions, and scientific conversion rate optimization (CRO).",
      deliverables: [
        "Custom High-Converting Landing Page Builds",
        "Mobile-First Responsive Web Design",
        "User Experience (UX) & Friction Audits",
        "A/B Testing & Funnel Analytics"
      ],
      metrics: { label: "Average Conversion Rate Lift", value: "+44%" },
      startingPrice: "₹2,500/mo",
    },
    {
      id: "social-media-creative",
      title: "Social Media & Creative Content",
      category: "creative",
      iconName: "Sparkles",
      shortDesc: "Compelling visuals, engaging short-form video, and high-impact social media creatives that build loyal brand communities.",
      fullDesc: "Great marketing starts with great creative. We produce engaging ad creatives and brand assets that capture attention and drive action.",
      deliverables: [
        "Short-Form Video & UGC Style Content",
        "Custom Social Ad Visuals & Banners",
        "Content Calendar Planning & Publishing",
        "Brand Storytelling & Direct-Response Copy"
      ],
      metrics: { label: "Engagement Rate Increase", value: "+180%" },
      startingPrice: "₹3,000/mo",
    },
    {
      id: "email-lifecycle",
      title: "Email Marketing & Automation",
      category: "retention",
      iconName: "Mail",
      shortDesc: "Automated email sequences and newsletter campaigns that nurture prospective leads and increase repeat purchases.",
      fullDesc: "Turn one-time buyers into lifetime customers with personalized email flows, smart audience segmentation, and deliverability optimization.",
      deliverables: [
        "Welcome & Onboarding Automated Flows",
        "Abandoned Cart & Browse Abandonment Sequences",
        "Customer Segmentation & List Cleaning",
        "Engaging Weekly Newsletter Campaigns"
      ],
      metrics: { label: "Revenue from Email Flows", value: "34%+" },
      startingPrice: "₹2,200/mo",
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Growth Reporting",
      category: "analytics",
      iconName: "BarChart3",
      shortDesc: "Crystal-clear conversion tracking, GA4 setup, and real-time executive dashboards so you always know your exact marketing ROI.",
      fullDesc: "Never guess what is working. We configure accurate tracking across all touchpoints and provide transparent, actionable performance reports.",
      deliverables: [
        "Google Analytics 4 (GA4) Custom Event Tracking",
        "Meta Pixel & Conversion API (CAPI) Integration",
        "Clean, Real-Time Executive Dashboards",
        "Monthly Strategy & ROI Performance Reviews"
      ],
      metrics: { label: "Tracking Signal Accuracy", value: "98%+" },
      startingPrice: "₹2,000/mo",
    },
  ] as ServiceItem[],

  // Verified Client Case Studies
  caseStudies: [
    {
      id: "lumina-health",
      clientName: "Lumina Wellness",
      industry: "E-Commerce & DTC",
      badge: "E-Commerce Growth",
      tagline: "Scaled monthly revenue from ₹120k to ₹1.4M in 9 months",
      image: "/images/case_study_lumina.jpg",
      summary: "We restructured Lumina's Google and Meta ad accounts, launched high-converting landing pages, and implemented an automated customer retention email system.",
      challenge: "High customer acquisition costs and low repeat purchase rates stalled their online sales growth.",
      strategy: [
        "Rebuilt Google Search & Meta ad campaigns with high-intent targeting",
        "Designed high-converting custom product landing pages",
        "Configured automated Klaviyo email flows for welcome and repurchase"
      ],
      results: {
        primary: { value: "3.94x", label: "Average Blended ROAS" },
        secondary: { value: "+380%", label: "Revenue Growth" },
        tertiary: { value: "-42%", label: "Cost Per Acquisition" },
      },
      testimonial: {
        quote: "Encamrun completely transformed our marketing. Our revenue more than tripled and our customer acquisition cost dropped significantly.",
        author: "Marcus Sterling",
        role: "Chief Operating Officer",
        company: "Lumina Wellness",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
      servicesUsed: ["Paid Advertising", "Landing Pages", "Email Marketing"],
      timeframe: "9 Month Campaign",
    },
    {
      id: "cloudscale-saas",
      clientName: "CloudScale Software",
      industry: "B2B SaaS / Tech",
      badge: "B2B Lead Generation",
      tagline: "Generated 840+ qualified enterprise demo requests",
      image: "/images/case_study_cloudscale.jpg",
      summary: "Deployed targeted LinkedIn ad campaigns paired with technical programmatic SEO content clusters that drove high-intent enterprise pipeline.",
      challenge: "Struggling to reach decision-makers cost-effectively and high sales cycle drop-off.",
      strategy: [
        "Targeted account-based LinkedIn campaigns aimed at engineering directors",
        "Authored high-intent SEO comparison guides targeting solution seekers",
        "Streamlined the demo booking page to remove UX friction"
      ],
      results: {
        primary: { value: "₹4.2M", label: "New ARR Generated" },
        secondary: { value: "-56%", label: "Cost Per Demo" },
        tertiary: { value: "+215%", label: "Organic Inbound Growth" },
      },
      testimonial: {
        quote: "Within 4 months, our qualified inbound demo volume exploded and our sales team's calendar was full.",
        author: "Dr. Elena Rostova",
        role: "VP of Growth",
        company: "CloudScale",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      },
      servicesUsed: ["B2B Paid Ads", "Technical SEO", "Landing Page CRO"],
      timeframe: "6 Month Campaign",
    },
    {
      id: "aero-luxury",
      clientName: "Aero Living Systems",
      industry: "Architecture & Home Goods",
      badge: "High-Ticket Leads",
      tagline: "Generated ₹18M in qualified project inquiries",
      image: "/images/case_study_aero.jpg",
      summary: "Architected a multi-step digital qualification quiz funnel paired with geo-targeted Google Search and visual social media campaigns.",
      challenge: "High-ticket sales requiring pre-qualified leads with approved budgets and land readiness.",
      strategy: [
        "Built an interactive property feasibility qualification configurator",
        "Targeted high-intent search keywords in prime geographic markets",
        "Created an educational email nurture sequence explaining materials and financing"
      ],
      results: {
        primary: { value: "11.2x", label: "Pipeline Value to Ad Spend" },
        secondary: { value: "₹18.4M", label: "Total Pipeline Generated" },
        tertiary: { value: "+145%", label: "Inquiry Conversion Rate" },
      },
      testimonial: {
        quote: "They built a qualification system that sends only serious, pre-funded clients directly to our sales team.",
        author: "Julian Vance",
        role: "Founder & Lead Architect",
        company: "Aero Living Systems",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      },
      servicesUsed: ["Google Search PPC", "Interactive Funnel", "Social Ads"],
      timeframe: "12 Month Campaign",
    },
  ] as CaseStudy[],

  // Client Testimonials
  testimonials: [
    {
      id: "1",
      quote: "Working with Encamrun has been an absolute game-changer. They don't just generate vanity clicks—they deliver real, bottom-line revenue growth and treat our budget like their own.",
      author: "Sarah Jenkins",
      role: "Chief Marketing Officer",
      company: "Nordic Wave",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      metric: "+312%",
      metricLabel: "Year-over-Year Growth",
      verified: true,
      rating: 5,
    },
    {
      id: "2",
      quote: "Their SEO and search campaigns took us from being invisible online to ranking in the top 3 for our most important keywords. Our sales pipeline has never been healthier.",
      author: "David Chen",
      role: "Founder & CEO",
      company: "VectorSync",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      metric: "-48%",
      metricLabel: "Lower Acquisition Cost",
      verified: true,
      rating: 5,
    },
    {
      id: "3",
      quote: "The team is proactive, highly skilled, and communicative. They handle our creative production and ad buying seamlessly, allowing our internal team to focus on product.",
      author: "Chloe Dubois",
      role: "Head of Marketing",
      company: "Maison Minimalist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      metric: "5.4x",
      metricLabel: "Average Blended ROAS",
      verified: true,
      rating: 5,
    },
  ] as Testimonial[],

  // Leadership Team
  team: [
    {
      name: "Alexander Reed",
      role: "Managing Partner & Strategy Lead",
      bio: "12+ years directing performance digital marketing, leading client campaign growth across search and social channels.",
      experience: "12+ Years Experience",
      specialty: "Growth Strategy & Paid Media",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Maya Lin",
      role: "Head of Analytics & Data",
      bio: "Former data scientist specializing in conversion tracking, analytics dashboards, and attribution modeling.",
      experience: "10+ Years Experience",
      specialty: "GA4, Tracking & Data Insights",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Darius Vance",
      role: "Creative Director",
      bio: "Direct-response designer and video producer specializing in high-converting ad visuals and brand content.",
      experience: "9+ Years Experience",
      specialty: "Ad Creative & Video Production",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Samantha Brooks",
      role: "Head of SEO & Content",
      bio: "Specializes in technical search engine optimization, content roadmaps, and sustainable organic traffic growth.",
      experience: "11+ Years Experience",
      specialty: "Technical SEO & Inbound Strategy",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80",
    },
  ] as TeamMember[],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What digital marketing services do you provide?",
      answer: "We offer end-to-end digital marketing solutions including Search Engine Optimization (SEO), Paid Advertising on Google and Meta, High-Converting Web Design, Creative Content, Email Marketing, and Analytics Tracking.",
      category: "services",
    },
    {
      question: "How quickly will we see measurable results?",
      answer: "For paid advertising campaigns, initial optimizations and performance improvements typically show within the first 14 to 21 days. For organic SEO and content strategies, steady compounding traffic growth builds strongly over 2 to 4 months.",
      category: "process",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. We believe in earning your business month-to-month through proven results and transparent communication. We work on flexible monthly agreements with a simple 30-day notice period.",
      category: "guarantees",
    },
    {
      question: "How do we get started?",
      answer: "Simply reach out via our contact form below or email us directly at growth@encamrun.co.in. We'll schedule a complimentary 30-minute discovery call to discuss your goals and review your current marketing.",
      category: "process",
    },
  ] as FaqItem[],

  // Navigation Links
  navigation: {
    main: [
      { name: "Services", href: "#services" },
      { name: "Locations", href: "#locations" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "About", href: "#about" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
    footerQuickLinks: [
      { name: "PPC Advertising", href: "#services" },
      { name: "Search Engine Optimization", href: "#services" },
      { name: "Web Design & CRO", href: "#services" },
      { name: "Social & Creative", href: "#services" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "About Us", href: "#about" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Preferences", href: "#cookies" },
    ]
  },

  // Agency Values
  guarantees: [
    { title: "Senior Experts", desc: "Your accounts are directly managed by experienced digital marketing specialists with proven track records." },
    { title: "Full Transparency", desc: "You maintain 100% ownership of your ad accounts, pixel data, analytics, and creative assets." },
    { title: "Results-Driven", desc: "We focus on genuine business outcomes—revenue, leads, and ROAS—rather than empty vanity metrics." },
  ]
};

// Helper utility to access configured values
export const getBrandName = () => SITE_CONFIG.brand.name;
export const getPrimaryEmail = () => SITE_CONFIG.contact.email.primary;
export const getDomain = () => SITE_CONFIG.brand.domain;
