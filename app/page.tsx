"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Link from "next/link";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";
import { Globe, MonitorSmartphone, Database, Brain, Hotel, MessageCircle, BarChart3, Receipt, Check, ChevronDown, ArrowRight, Building2, TrendingUp } from "lucide-react";
import React from "react";
import ImpactResults from "./components/ImpactResults";
import CoreServicesShowcase from "./components/CoreServicesShowcase";
import WhySwitchSection from "./components/WhySwitchSection";

// ======================================================
// FADE IN ON SCROLL HOOK
// ======================================================

const useFadeInOnScroll = (threshold: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// ======================================================
// WRAPPER: Fade In Section
// ======================================================

const FadeInSection = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useFadeInOnScroll(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

type Plan = {
  title: string;
  audience: string;
  price: string;
  description: string;
  icon: React.ElementType;
  featured: boolean;
  features: string[];
};
const stats = [
  {
    value: "1000+",
    label: "properties on Blackstone AI",
  },
  {
    value: "4x",
    label: "increase in direct bookings",
  },
  {
    value: "100+",
    label: "AI channels synced",
  },
  {
    value: "5 days",
    label: "to get onboarded",
  },
];

const products = [
{
title: "Google Hotel Ads & Booking Engine",
subtitle: "INCREASE DIRECT BOOKINGS",
features: [
"Commission-free reservations",
"Google Hotel Ads visibility",
"Secure online payments",
"Automated cancellation management",
],
},

{
title: "Hotel Website Development",
subtitle: "TURN VISITORS INTO GUESTS",
features: [
"SEO-ready website structure",
"Mobile-first responsive design",
"Fast loading performance",
"Brand-focused user experience",
],
},

{
title: "Channel Management Platform",
subtitle: "STAY PERFECTLY SYNCHRONIZED",
features: [
"100+ OTA integrations",
"Instant inventory updates",
"Rate and availability sync",
"Centralized distribution control",
],
},

{
title: "AI Dynamic Pricing Engine",
subtitle: "MAXIMIZE REVENUE AUTOMATICALLY",
features: [
"Demand-driven pricing",
"Competitor rate monitoring",
"Occupancy-based adjustments",
"AI-powered recommendations",
],
},

{
title: "Front Office Management",
subtitle: "DELIVER BETTER GUEST EXPERIENCES",
features: [
"Quick check-in and check-out",
"Guest profile management",
"Role-based permissions",
"Night audit automation",
],
},

{
title: "WhatsApp Automation Suite",
subtitle: "ENGAGE GUESTS INSTANTLY",
features: [
"Booking confirmations",
"Pre-arrival communication",
"Review collection campaigns",
"Booking recovery workflows",
],
},

{
title: "Revenue Management System",
subtitle: "BOOST HOTEL PROFITABILITY",
features: [
"Revenue forecasting",
"ADR and occupancy insights",
"Performance pacing analysis",
"Strategic pricing support",
],
},

{
title: "POS & Inventory Management",
subtitle: "SIMPLIFY DAILY OPERATIONS",
features: [
"Multi-outlet billing",
"Inventory tracking",
"Guest room posting",
"Detailed transaction reports",
],
},

{
title: "Restaurant Management System",
subtitle: "SPEED UP FOOD SERVICE",
features: [
"Order-to-billing automation",
"Kitchen order management",
"Multi-outlet operations",
"Room service integration",
],
},

{
title: "Housekeeping Management",
subtitle: "KEEP ROOMS READY FASTER",
features: [
"Live room status updates",
"Task allocation tools",
"Maintenance tracking",
"Faster room turnaround",
],
},

{
title: "Multi-Property Operations",
subtitle: "MANAGE ALL HOTELS FROM ONE PLACE",
features: [
"Centralized dashboard",
"Cross-property reporting",
"Unified workflows",
"Portfolio-wide visibility",
],
},

{
title: "Guest Reputation Management",
subtitle: "BUILD TRUST AND CREDIBILITY",
features: [
"Automated review requests",
"Review response management",
"Online reputation monitoring",
"Improved guest confidence",
],
},

{
title: "Customer Relationship Management",
subtitle: "CREATE LOYAL GUESTS",
features: [
"Guest history tracking",
"Personalized communication",
"Loyalty program support",
"Targeted marketing campaigns",
],
},

{
title: "Booking & Reservation Management",
subtitle: "HANDLE BOOKINGS EFFORTLESSLY",
features: [
"Central reservation dashboard",
"Real-time availability",
"Group booking support",
"Flexible reservation controls",
],
},

{
title: "Analytics & Business Intelligence",
subtitle: "MAKE SMARTER DECISIONS",
features: [
"Real-time dashboards",
"Revenue analytics",
"Occupancy insights",
"Performance benchmarking",
],
},

{
title: "Guest Mobile Experience",
subtitle: "MODERNIZE EVERY STAY",
features: [
"Mobile check-in and check-out",
"Digital room requests",
"Guest self-service options",
"Contactless experiences",
],
},
];


const icons = [
  Globe,
  MonitorSmartphone,
  Database,
  Brain,
  Hotel,
  MessageCircle,
  BarChart3,
  Receipt,
];
const comparisonRows = [
  {
    category: "Operations",
    items: [
      {
        feature: "Booking Engine",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Front Desk PMS",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Housekeeping",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Room Inventory",
        essential: true,
        growth: true,
        enterprise: true,
      },
    ],
  },

  {
    category: "Guest Experience",
    items: [
      {
        feature: "Guest Portal",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Guest CRM",
        essential: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "AI Assistant",
        essential: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "WhatsApp Automation",
        essential: false,
        growth: true,
        enterprise: true,
      },
    ],
  },

  {
    category: "Revenue & Analytics",
    items: [
      {
        feature: "Smart Pricing",
        essential: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Revenue Forecasting",
        essential: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Business Intelligence",
        essential: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Executive Reporting",
        essential: false,
        growth: false,
        enterprise: true,
      },
    ],
  },

  {
    category: "Platform & Integrations",
    items: [
      {
        feature: "OTA Connectivity",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Payment Gateway",
        essential: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Open API",
        essential: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "White Label",
        essential: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
];
const pricingData: Record<string, Plan[]> = {
  "Independent Hotel": [
    {
      title: "Essential",
      audience: "For Boutique Hotels",
      price: "$79",
      description: "Perfect for independent properties.",
      icon: Hotel,
      featured: false,
      features: [
        "Increase direct bookings",
        "Reduce manual work",
        "Centralize operations",
      ],
    },
    {
      title: "Growth",
      audience: "For Growing Hotels",
      price: "$149",
      description: "Automation and guest engagement tools.",
      icon: TrendingUp,
      featured: true,
      features: [
        "+38% Direct Bookings",
        "+24% Revenue Growth",
        "Automated Guest Journeys",
      ],
    },
    {
      title: "Enterprise",
      audience: "Large Independent Properties",
      price: "Custom",
      description: "Advanced infrastructure and support.",
      icon: Building2,
      featured: false,
      features: [
        "Advanced Analytics",
        "Custom Integrations",
        "Priority Support",
      ],
    },
  ],

  Group: [
    {
      title: "Group Starter",
      audience: "Small Hotel Groups",
      price: "$199",
      description: "Manage multiple properties easily.",
      icon: Hotel,
      featured: false,
      features: [
        "Multi-property Dashboard",
        "Shared Inventory",
        "Group Reporting",
      ],
    },
    {
      title: "Group Pro",
      audience: "Growing Chains",
      price: "$299",
      description: "Centralized operations and automation.",
      icon: TrendingUp,
      featured: true,
      features: [
        "Cross-property Insights",
        "Automation Workflows",
        "Revenue Management",
      ],
    },
    {
      title: "Group Enterprise",
      audience: "Large Hospitality Brands",
      price: "Custom",
      description: "Enterprise-level scalability.",
      icon: Building2,
      featured: false,
      features: [
        "Unlimited Properties",
        "Dedicated Success Team",
        "Custom APIs",
      ],
    },
  ],

  Resort: [
    {
      title: "Resort Core",
      audience: "Boutique Resorts",
      price: "$129",
      description: "Manage bookings and experiences.",
      icon: Hotel,
      featured: false,
      features: [
        "Spa Management",
        "Room Packages",
        "Guest Profiles",
      ],
    },
    {
      title: "Resort Growth",
      audience: "Luxury Resorts",
      price: "$249",
      description: "Revenue and experience optimization.",
      icon: TrendingUp,
      featured: true,
      features: [
        "Upsell Automation",
        "Guest Journey Flows",
        "Advanced Analytics",
      ],
    },
    {
      title: "Resort Elite",
      audience: "Destination Resorts",
      price: "Custom",
      description: "Premium enterprise solution.",
      icon: Building2,
      featured: false,
      features: [
        "Custom Workflows",
        "AI Forecasting",
        "Enterprise Integrations",
      ],
    },
  ],

  Enterprise: [
    {
      title: "Enterprise Core",
      audience: "Large Organizations",
      price: "$499",
      description: "Centralized operations platform.",
      icon: Hotel,
      featured: false,
      features: [
        "Unified Dashboard",
        "Security Controls",
        "Reporting",
      ],
    },
    {
      title: "Enterprise Plus",
      audience: "Global Hospitality Brands",
      price: "$999",
      description: "Enterprise-grade intelligence.",
      icon: TrendingUp,
      featured: true,
      features: [
        "AI Revenue Engine",
        "Predictive Analytics",
        "Advanced Automation",
      ],
    },
    {
      title: "Enterprise Custom",
      audience: "Global Chains",
      price: "Custom",
      description: "Tailored solution for large brands.",
      icon: Building2,
      featured: false,
      features: [
        "Custom Development",
        "Dedicated Team",
        "Unlimited Scale",
      ],
    },
  ],
};
export default function Home() {
  const [open, setOpen] = useState("");
  const cardsPerPage = 4;
const [activeTab, setActiveTab] = useState("Independent Hotel");
const [currentPage, setCurrentPage] = useState(0);

const totalPages = Math.ceil(products.length / cardsPerPage);

const paginatedProducts = products.slice(
  currentPage * cardsPerPage,
  currentPage * cardsPerPage + cardsPerPage
);
 const [activePlan, setActivePlan] = useState("growth");

  const comparisonData = [
    {
      feature: "Booking Engine",
      essential: true,
      growth: true,
      enterprise: true,
    },
    {
      feature: "Property Management System",
      essential: true,
      growth: true,
      enterprise: true,
    },
    {
      feature: "Housekeeping",
      essential: true,
      growth: true,
      enterprise: true,
    },
    {
      feature: "Guest CRM",
      essential: false,
      growth: true,
      enterprise: true,
    },
    {
      feature: "AI Assistant",
      essential: false,
      growth: true,
      enterprise: true,
    },
    {
      feature: "Revenue Intelligence",
      essential: false,
      growth: true,
      enterprise: true,
    },
    {
      feature: "White Label",
      essential: false,
      growth: false,
      enterprise: true,
    },
    {
      feature: "Open API",
      essential: false,
      growth: false,
      enterprise: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      
      <FadeInSection delay={0}>
        <section className="py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Content */}
              <div className="lg:col-span-4">

                <div className="inline-block mb-8 relative">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
                    Featured Story
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                    <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-5xl
                    lg:text-6xl
                    font-light
                    leading-[1]
                    tracking-tight
                    text-black
                  "
                >
                  Behind Every
                  <br />
                  Intelligent
                  <br />
                  Decision
                </h2>

                <p className="mt-8 text-neutral-500 leading-8 max-w-sm">
                  Discover how AI-powered workflows help businesses
                  automate operations, improve efficiency and create
                  exceptional customer experiences.
                </p>

                <button
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-neutral-300
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-medium
                    bg-black
                    text-white
                    hover:bg-black
                    hover:text-white
                    transition-all
                  "
                >
                  Watch Full Story
                  <span>↗</span>
                </button>

              </div>

              {/* Right Video */}
              <div className="lg:col-span-8">

                <div className="relative">

                  {/* Video Frame */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-neutral-200
                      bg-neutral-100
                      shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                    "
                  >

                    {/* Video Element - Replaced img with video */}
                    <video
                      src="/BLACKSTONE_AI_Hotel_Management_S…_202606251210.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="
                        w-full
                        h-[520px]
                        object-cover
                      "
                    />


                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      <ImpactResults/>
      <CoreServicesShowcase/>
      <WhySwitchSection/>

<FadeInSection delay={100}>
  <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">

    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-[0.02] sm:opacity-[0.03]"
      style={{
        backgroundImage: "url('/section-bg.png')",
      }}
    />

    {/* Decorative Blur */}
    <div className="absolute -top-24 sm:-top-32 -left-24 sm:-left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-100 blur-[80px] sm:blur-[120px] opacity-60" />
    <div className="absolute -bottom-24 sm:-bottom-32 -right-24 sm:-right-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-violet-100 blur-[80px] sm:blur-[120px] opacity-60" />

    {/* Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px sm:60px_60px] opacity-20" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 sm:gap-10 lg:gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:sticky lg:top-28">

          <div className="inline-block mb-4 sm:mb-6 lg:mb-8 relative">
            <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
              Hospitality Solutions
              <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
            </span>
          </div>

          <h2
            className="
              mt-4 sm:mt-6
              text-3xl sm:text-4xl lg:text-6xl
              font-black
              leading-[1.1]
              tracking-tight
              text-slate-900
            "
          >
            Solutions
            <br />
            Built For
            <br />
            Every
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-600 to-amber-600 bg-clip-text text-transparent">
              Hospitality
            </span>
            <br />
            Model
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-500 text-xs sm:text-sm leading-7 sm:leading-8 max-w-lg">
            Powerful infrastructure designed to simplify operations,
            elevate guest experiences and accelerate revenue growth
            across every hospitality business model.
          </p>

          {/* Features - Compact */}
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">

            <div className="flex gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                📈
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  All-in-One Platform
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Manage bookings, operations, distribution and revenue from a unified ecosystem.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                👥
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  Scalable For Every Business
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Flexible architecture built for independent properties, groups and global brands.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                🛡️
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  Secure & Reliable
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Enterprise-grade security with high availability and continuous uptime.
                </p>
              </div>
            </div>

          </div>

          <button
            className="
              mt-8 sm:mt-10
              bg-gradient-to-r
              from-slate-900
              to-slate-700
              text-white
              px-5 sm:px-6
              py-2.5 sm:py-3
              rounded-full
              text-xs sm:text-sm
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-slate-900/20
              hover:shadow-xl
              hover:shadow-slate-900/30
              inline-flex
              items-center
              gap-2
            "
          >
            Explore All Solutions
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4">

          {[
            {
              no: "01",
              title: "Independent Hotels",
              gradient: "from-slate-900 to-slate-700",
              icon: "🏨",
              text: "Run reservations, guest messaging, front desk operations and revenue growth from one platform.",
              badge: "Most Popular"
            },
            {
              no: "02",
              title: "Boutique Stays",
              gradient: "from-blue-600 to-sky-400",
              icon: "👑",
              text: "Deliver premium digital experiences with stronger branding and direct bookings.",
              badge: "Premium"
            },
            {
              no: "03",
              title: "Hostels",
              gradient: "from-violet-600 to-purple-400",
              icon: "🛏️",
              text: "Manage beds, dorms and distribution channels without operational complexity.",
              badge: "Flexible"
            },
            {
              no: "04",
              title: "Vacation Rentals",
              gradient: "from-cyan-500 to-teal-400",
              icon: "🏠",
              text: "Reduce OTA dependence and centralize communication across properties.",
              badge: "Modern"
            },
            {
              no: "05",
              title: "Groups & Chains",
              gradient: "from-indigo-400 to-blue-300",
              icon: "👥",
              text: "Standardize operations while maintaining visibility across multiple locations.",
              badge: "Enterprise"
            },
            {
              no: "06",
              title: "Revenue Teams",
              gradient: "from-blue-500 to-sky-400",
              icon: "📈",
              text: "Make pricing decisions faster using reporting, forecasting and inventory visibility.",
              badge: "Analytics"
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
                relative
                group
                bg-white/80
                backdrop-blur-sm
                rounded-xl sm:rounded-2xl
                border
                border-slate-200/60
                shadow-[0_4px_20px_rgba(15,23,42,0.06)]
                overflow-hidden
                min-h-[90px] sm:min-h-[110px]
                hover:-translate-y-1
                hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)]
                transition-all
                duration-400
              "
            >

              {/* Number Panel - SMALLER */}
              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[70px] sm:w-[80px] lg:w-[100px]
                  bg-gradient-to-br
                  ${item.gradient}
                  text-white
                  flex
                  items-center
                  justify-center
                  rounded-r-xl sm:rounded-r-2xl
                `}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
                    {item.no}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pl-[85px] sm:pl-[95px] lg:pl-[120px] pr-3 sm:pr-4 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4">

                <div className="flex items-center gap-3 sm:gap-4">

                  <div
                    className="
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                      rounded-lg sm:rounded-xl
                      bg-gradient-to-br
                      from-slate-50
                      to-slate-100
                      flex
                      items-center
                      justify-center
                      text-xl sm:text-2xl
                      flex-shrink-0
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 max-w-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                </div>

                <button
                  className="
                    shrink-0
                    w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                    rounded-full
                    bg-white
                    shadow-md
                    border
                    border-slate-800/60
                    flex
                    items-center
                    justify-center
                    text-xs sm:text-sm
                    hover:translate-x-1
                    hover:shadow-lg
                    transition-all
                    duration-300
                    text-black
                    group-hover:bg-slate-900
                    group-hover:text-white
                    group-hover:border-slate-900
                  "
                >
                  →
                </button>

              </div>

              {/* Decorative Corner */}
              <div className={`absolute bottom-0 right-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-tl ${item.gradient} opacity-5 [clip-path:polygon(100%_100%,0_100%,100%_0)]`} />

            </div>

          ))}

        </div>

      </div>

    </div>

  </section>
</FadeInSection>
<FadeInSection delay={150}>
  <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <div
        className="
          relative
          overflow-hidden
          rounded-[24px] sm:rounded-[32px] lg:rounded-[42px]
          border border-slate-200
          bg-black
          p-6 sm:p-8 lg:p-14
          shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:shadow-[0_30px_80px_rgba(15,23,42,0.08)]
        "
      >

        {/* Decorative Background */}
        <div
          className="
            absolute
            top-[-100px] sm:top-[-150px]
            right-[-80px] sm:right-[-100px]
            w-[300px] sm:w-[500px]
            h-[300px] sm:h-[500px]
            rounded-full
            bg-blue-100/60
            blur-[80px] sm:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px] sm:bottom-[-200px]
            left-[-100px] sm:left-[-150px]
            w-[400px] sm:w-[600px]
            h-[400px] sm:h-[600px]
            rounded-full
            bg-sky-100/70
            blur-[100px] sm:blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            bg-[size:40px_40px sm:80px_80px]
          "
        />

        {/* Content */}
        <div className="relative z-20 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-block mb-4 sm:mb-6 lg:mb-8 relative">
              <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
                Mobile Experience
                <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
              </span>
            </div>

            <h2 className="mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-6xl font-black text-slate-200 leading-[1.05]">
              Run your hotel.
              <br />
              From anywhere.
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              All the tools you need to manage your property,
              deliver exceptional stays and grow your business
              from one beautifully designed platform.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">

              {[
                {
                  title: "Reservations & Calendar",
                  desc: "Manage bookings and availability in real-time.",
                  icon: "📅",
                },
                {
                  title: "Housekeeping & Tasks",
                  desc: "Assign, track and complete daily operations.",
                  icon: "✅",
                },
                {
                  title: "Revenue & Analytics",
                  desc: "Track performance and improve profitability.",
                  icon: "📊",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    bg-white/90
                    backdrop-blur-xl
                    rounded-2xl sm:rounded-3xl
                    border
                    border-white
                    p-4 sm:p-5
                    flex
                    items-start
                    gap-3 sm:gap-4
                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-12 h-12 sm:w-14 sm:h-14
                      rounded-xl sm:rounded-2xl
                      bg-gradient-to-br
                      from-slate-400
                      to-sky-300
                      flex
                      items-center
                      justify-center
                      text-xl sm:text-2xl
                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 mt-0.5 sm:mt-1 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[620px] mt-6 sm:mt-8 lg:mt-0">

            {/* LEFT IMAGE - Hidden on mobile, visible on tablet+ */}
            <div
              className="
                hidden sm:block
                absolute
                left-0
                top-16 sm:top-20
                w-[180px] sm:w-[220px] lg:w-[280px]
                h-[240px] sm:h-[280px] lg:h-[340px]
                rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]
                overflow-hidden
                border-[4px] sm:border-[5px]
                border-white
                shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                rotate-[-6deg]
                z-10
              "
            >
              <img
                src="/card-bg1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT IMAGE - Hidden on mobile, visible on tablet+ */}
            <div
              className="
                hidden sm:block
                absolute
                right-0
                top-12 sm:top-16
                w-[180px] sm:w-[220px] lg:w-[280px]
                h-[240px] sm:h-[280px] lg:h-[340px]
                rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]
                overflow-hidden
                border-[4px] sm:border-[5px]
                border-white
                shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                rotate-[6deg]
                z-10
              "
            >
              <img
                src="/card-bg2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft Glass Behind Phone - Hidden on mobile */}
            <div
              className="
                hidden sm:block
                absolute
                w-[300px] sm:w-[360px] lg:w-[420px]
                h-[300px] sm:h-[360px] lg:h-[420px]
                rounded-full
                bg-white/50
                backdrop-blur-3xl
                border
                border-white/60
                z-0
              "
            />

            {/* PHONE */}
            <div className="relative z-30">
              <img
                src="/hand1.png"
                alt=""
                className="
                  h-[300px] sm:h-[400px] lg:h-[520px]
                  object-contain
                  drop-shadow-[0_20px_50px_rgba(0,0,0,0.20)] sm:drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]
                "
              />
            </div>

            {/* ANALYTICS CARD - Adjusted for mobile */}
            <div
              className="
                absolute
                left-2 sm:left-6 lg:left-8
                bottom-12 sm:bottom-16 lg:bottom-20
                z-40
                bg-white/95
                backdrop-blur-xl
                rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]
                border
                border-white
                px-3 sm:px-4 lg:px-5
                py-2 sm:py-3 lg:py-4
                shadow-[0_15px_30px_rgba(0,0,0,0.10)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              "
            >
              <p className="text-[8px] sm:text-xs uppercase tracking-wider text-slate-500">
                Occupancy
              </p>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-0.5 sm:mt-1">
                72%
              </h4>

              <div className="mt-1 sm:mt-2 text-green-600 text-[10px] sm:text-sm font-semibold">
                ↑ 12% This Month
              </div>
            </div>

            {/* FLOATING HOTEL CARD - Hidden on mobile */}
            <div
              className="
                hidden sm:block
                absolute
                right-2 sm:right-4 lg:right-6
                bottom-16 sm:bottom-20 lg:bottom-24
                z-40
                bg-white/95
                backdrop-blur-xl
                rounded-[20px] sm:rounded-[24px] lg:rounded-[28px]
                border
                border-white
                px-4 sm:px-6 lg:px-8
                py-4 sm:py-5 lg:py-7
                text-center
                shadow-[0_20px_40px_rgba(0,0,0,0.10)] sm:shadow-[0_25px_50px_rgba(0,0,0,0.12)]
              "
            >
              <div
                className="
                  w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                  rounded-full
                  bg-gradient-to-br
                  from-blue-100
                  to-sky-200
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-2 sm:mb-3 lg:mb-4
                  text-xl sm:text-2xl
                "
              >
                🏨
              </div>

              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Your Hotel
              </h4>

              <p className="text-slate-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1">
                In Your Hand
              </p>
            </div>

            {/* Floating Revenue Badge - Hidden on mobile */}
            <div
              className="
                hidden sm:block
                absolute
                top-6 sm:top-8 lg:top-10
                right-10 sm:right-14 lg:right-20
                bg-white
                rounded-xl sm:rounded-2xl
                px-3 sm:px-4
                py-2 sm:py-3
                shadow-[0_10px_25px_rgba(0,0,0,0.06)] sm:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                border
                border-slate-100
                z-40
              "
            >
              <p className="text-[8px] sm:text-xs text-slate-500">
                Revenue
              </p>

              <h5 className="font-black text-slate-900 text-base sm:text-lg">
                $24.6K
              </h5>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</FadeInSection>
<FadeInSection delay={200}>
  <section className="py-16 sm:py-20 lg:py-24 bg-[#FDF8F3] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <div className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-[#F2E8DE] bg-[#FFFDFB] p-4 sm:p-6 md:p-8 lg:p-14 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute -left-20 sm:-left-32 top-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#F7E8D8] blur-[80px] sm:blur-[120px] opacity-60" />
        <div className="absolute -right-20 sm:-right-32 bottom-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FFF0E1] blur-[80px] sm:blur-[120px] opacity-60" />

        <div className="relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-block mb-4 sm:mb-6 lg:mb-8 relative">
              <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
                Plans & Pricing
                <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
              </span>
            </div>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D241D] leading-tight">
              Choose the setup that fits your property.
            </h2>

            <p className="mt-3 sm:mt-5 text-[#8C8178] text-sm sm:text-base lg:text-lg px-2">
              Built for boutique hotels, resorts, vacation rentals and
              hospitality groups.
            </p>

          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
            <div className="bg-[#F5EFE9] rounded-full p-1.5 flex flex-wrap gap-1 max-w-full overflow-x-auto">
              {[
                "Independent Hotel",
                "Group",
                "Resort",
                "Enterprise",
              ].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-3 sm:px-4 md:px-6
                    py-2 sm:py-3
                    rounded-full
                    text-[10px] sm:text-xs md:text-sm
                    font-medium
                    transition-all
                    whitespace-nowrap
                    
                    ${
                      activeTab === tab
                        ? "bg-white text-[#F28C28] shadow-sm"
                        : "text-[#7B7269] hover:text-[#2D241D]"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 lg:mt-14">

            {pricingData[activeTab]?.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <div
                  key={index}
                  className={`
                    relative
                    bg-white
                    rounded-[20px] sm:rounded-[24px] lg:rounded-[30px]
                    p-5 sm:p-6 md:p-8
                    transition-all
                    duration-300
                    border
                    
                    ${
                      plan.featured
                        ? "border-[#F28C28] shadow-[0_20px_50px_rgba(242,140,40,0.15)] sm:shadow-[0_25px_60px_rgba(242,140,40,0.18)]"
                        : "border-[#EFE7DF]"
                    }
                  `}
                >

                  {/* Recommended Ribbon */}
                  {plan.featured && (
                    <div
                      className="
                        absolute
                        top-0
                        right-0
                        bg-[#F28C28]
                        text-white
                        text-[8px] sm:text-xs
                        font-semibold
                        px-3 sm:px-5
                        py-1.5 sm:py-2
                        rounded-bl-2xl
                        rounded-tr-[20px] sm:rounded-tr-[24px] lg:rounded-tr-[30px]
                      "
                    >
                      Recommended
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF3E8] flex items-center justify-center">
                    <Icon size={18} className="sm:text-[22px] text-[#F28C28]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D241D]">
                    {plan.title}
                  </h3>

                  <p className="mt-1 text-[#8C8178] text-xs sm:text-sm font-medium">
                    {plan.audience}
                  </p>

                  {/* Description */}
                  <p className="mt-4 sm:mt-6 text-[#8C8178] text-sm sm:text-base leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3 text-[#5A5048]"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F28C28] flex-shrink-0" />

                        <span className="text-xs sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}

                  </ul>

                  {/* Pricing */}
                  <div className="mt-8 sm:mt-10">

                    <p className="text-xs sm:text-sm text-[#8C8178]">
                      Starting from
                    </p>

                    <div className="flex items-end gap-2 mt-2">

                      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D241D]">
                        {plan.price}
                      </h4>

                      {plan.price !== "Custom" && (
                        <span className="text-[#8C8178] mb-1 sm:mb-2 text-xs sm:text-sm">
                          / month
                        </span>
                      )}

                    </div>

                  </div>

                  {/* CTA */}
                  <button
                    className={`
                      w-full
                      mt-6 sm:mt-8
                      py-3 sm:py-4
                      rounded-xl
                      font-semibold
                      text-sm sm:text-base
                      transition-all
                      duration-300
                      
                      ${
                        plan.featured
                          ? "bg-[#F28C28] text-white hover:bg-[#e67e16]"
                          : "border border-[#F28C28] text-[#F28C28] hover:bg-[#FFF6ED]"
                      }
                    `}
                  >
                    Get Pricing
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  </section>
</FadeInSection>

<FadeInSection delay={250}>
  <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#F7F7F4]">
    
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-200/30 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-200/30 rounded-full blur-[100px] sm:blur-[140px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-8 lg:gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">

          <div>
            <div className="inline-block mb-4 sm:mb-6 lg:mb-8 relative">
              <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
                Hospitality Growth
                <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
              </span>
            </div>

            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
              See how modern hotels
              outperform the competition.
            </h2>

            <p className="mt-3 sm:mt-4 lg:mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Automate operations, increase direct bookings,
              optimize revenue, and deliver exceptional guest
              experiences from one intelligent platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

            {[
              {
                title: "Operations",
                desc: "Manage reservations, housekeeping, front desk and guest services."
              },
              {
                title: "Revenue",
                desc: "Increase occupancy and maximize room revenue automatically."
              },
              {
                title: "Integrations",
                desc: "Connect OTAs, payment gateways and business tools."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="
                  bg-white
                  rounded-2xl sm:rounded-3xl
                  p-4 sm:p-5
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <h4 className="font-semibold text-slate-900 text-base sm:text-lg">
                  {item.title}
                </h4>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Success Story */}
          <div className="rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 shadow-xl">

            <div className="flex items-end gap-3 sm:gap-4">

              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                39%
              </h3>

              <p className="font-semibold text-slate-200 text-sm sm:text-base max-w-xs">
                Increase in RevPAR through automation and
                direct booking growth.
              </p>

            </div>

            <blockquote className="mt-6 sm:mt-8 text-lg sm:text-xl font-medium text-white leading-relaxed">
              "The platform transformed how we manage
              bookings and guest communication. Occupancy,
              revenue and guest satisfaction improved
              significantly."
            </blockquote>

            <div className="mt-6 sm:mt-8">
              <p className="font-bold text-white text-sm sm:text-base">
                Romain Stern
              </p>

              <p className="text-slate-400 text-xs sm:text-sm">
                Head of Revenue Strategy
              </p>
            </div>

          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-4">

            {[
              "Best PMS 2025",
              "Top Hospitality Tech",
              "Hotelier Choice",
            ].map((badge) => (
              <div
                key={badge}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-full
                  px-3 sm:px-5
                  py-2 sm:py-3
                  text-xs sm:text-sm
                  font-medium
                  text-slate-700
                  shadow-sm
                "
              >
                {badge}
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE PREMIUM FORM */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px] sm:rounded-[32px] lg:rounded-[40px]
            p-6 sm:p-8 lg:p-10
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-slate-800
            border border-slate-700/50
            shadow-[0_30px_80px_rgba(15,23,42,0.30)] sm:shadow-[0_40px_120px_rgba(15,23,42,0.35)]
          "
        >

          {/* Glow Effects */}
          <div className="absolute -top-32 -right-24 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute -bottom-32 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

          <div className="relative z-10">

            {/* Trust Badge */}
            <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">

              <div className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Trusted by 500+ Hotels & Resorts
              </span>

            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Request a Personalized Demo
            </h3>

            <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover how Blackstone AI helps hotels increase
              bookings, automate operations, and deliver
              exceptional guest experiences.
            </p>

            <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  placeholder="First Name"
                  className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 text-sm sm:text-base"
                />

                <input
                  placeholder="Last Name"
                  className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 text-sm sm:text-base"
                />
              </div>

              <input
                placeholder="Business Email"
                className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 text-sm sm:text-base"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  placeholder="Phone Number"
                  className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 text-sm sm:text-base"
                />

                <input
                  placeholder="Property Name"
                  className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                <select className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm sm:text-base">
                  <option>Property Type</option>
                  <option>Hotel</option>
                  <option>Resort</option>
                  <option>Villa</option>
                  <option>Homestay</option>
                </select>

                <select className="h-12 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm sm:text-base">
                  <option>Number of Rooms</option>
                  <option>1-20</option>
                  <option>21-50</option>
                  <option>51-100</option>
                  <option>100+</option>
                </select>

              </div>

              <textarea
                rows={4}
                placeholder="Tell us your biggest operational challenge..."
                className="
                  w-full
                  p-4 sm:p-5
                  rounded-xl sm:rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  resize-none
                  outline-none
                  focus:border-cyan-400
                  text-sm sm:text-base
                "
              />

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">

                <div className="text-xs sm:text-sm text-slate-300">
                  ✓ Free Consultation
                </div>

                <div className="text-xs sm:text-sm text-slate-300">
                  ✓ Custom Walkthrough
                </div>

                <div className="text-xs sm:text-sm text-slate-300">
                  ✓ No Commitment
                </div>

                <div className="text-xs sm:text-sm text-slate-300">
                  ✓ Fast Implementation
                </div>

              </div>

              {/* CTA */}
              <button
                type="submit"
                className="
                  w-full
                  h-12 sm:h-14
                  rounded-full
                  bg-gradient-to-r
                  from-slate-500
                  via-blue-900
                  to-slate-500
                  text-white
                  font-semibold
                  text-sm sm:text-base
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Schedule My Demo
              </button>

              <p className="text-center text-[10px] sm:text-xs text-slate-400">
                By submitting this form, you agree to receive
                communications regarding Blackstone AI products
                and services.
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  </section>
</FadeInSection>

      <Footer/>
    </div>
  );
}