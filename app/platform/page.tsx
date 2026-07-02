"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  Hotel,
  Sparkles,
  Users,
  Utensils,
  Bed,
  Calendar,
  BarChart3,
  LayoutDashboard,
  Smartphone,
  Check,
  Star,
  Shield,
  Clock,
  Quote,
  ChevronRight,
  TrendingUp,
  Home,
  Headphones,
  Lock,
  Zap,
  Globe,
  MessageSquare,
  Package,
  PieChart,
} from "lucide-react";
import Footer from "../components/Footer";

// ============================================
// TYPES
// ============================================

interface PlatformSection {
  id: string;
  number: string;
  title: string;
  description: string;
  paragraphs: string[];
  features: string[];
  color: string;
  gradient: string;
  icon: any;
  image: string;
  stats: { label: string; value: string; icon: any }[];
}

// ============================================
// COMPONENT
// ============================================

export default function PlatformSolutions() {
  // ============================================
  // PLATFORM SECTIONS DATA
  // ============================================

  const platformSections: PlatformSection[] = [
    {
      id: "independent-hotels",
      number: "01",
      title: "Independent Hotels",
      description: "Complete hotel management for independent properties",
      paragraphs: [
        "Independent hotels need a powerful yet flexible system that adapts to their unique operations. Our platform provides everything you need to manage reservations, housekeeping, guest communications, and revenue - all from one intuitive dashboard.",
        "From boutique hotels to luxury properties, our solution scales with your business. Automate repetitive tasks, improve guest satisfaction, and increase direct bookings without the complexity of enterprise systems.",
      ],
      features: [
        "Reservation Management",
        "Housekeeping Automation",
        "Revenue Management",
        "Channel Manager",
        "Guest Communication",
        "Analytics & Reporting",
      ],
      color: "#64748B",
      gradient: "from-slate-50 to-slate-100/50",
      icon: Building2,
      image: "/independent-hotels.png",
      stats: [
        { label: "Bookings", value: "2,847", icon: Calendar },
        { label: "Revenue", value: "$124K", icon: TrendingUp },
        { label: "Occupancy", value: "87%", icon: Users },
      ],
    },
    {
      id: "boutique-stays",
      number: "02",
      title: "Boutique Stays",
      description: "Premium digital experiences for boutique properties",
      paragraphs: [
        "Boutique hotels and stays require a unique approach that emphasizes brand identity and personalized guest experiences. Our platform helps you create memorable digital experiences that reflect your property's character.",
        "From stunning visual presentations to seamless booking flows, we help boutique properties compete with larger brands while maintaining their unique charm and personality.",
      ],
      features: [
        "Branded Booking Engine",
        "Guest Experience Design",
        "Direct Booking Optimization",
        "Premium Visual Showcase",
        "Guest Personalization",
        "Loyalty Features",
      ],
      color: "#2563EB",
      gradient: "from-blue-50 to-blue-100/50",
      icon: Hotel,
      image: "/botique.png",
      stats: [
        { label: "Bookings", value: "1,234", icon: Calendar },
        { label: "Revenue", value: "$89K", icon: TrendingUp },
        { label: "Satisfaction", value: "96%", icon: Star },
      ],
    },
    {
      id: "hostels",
      number: "03",
      title: "Hostels",
      description: "Optimized management for social accommodations",
      paragraphs: [
        "Hostels have unique operational needs with dormitory beds, private rooms, and social events. Our platform helps you manage everything efficiently while creating a vibrant community atmosphere.",
        "From booking to check-out, we help you deliver memorable experiences that earn rave reviews and repeat visits from travelers around the world.",
      ],
      features: [
        "Dormitory Management",
        "Bed Allocation System",
        "Social Event Planning",
        "Group Booking Support",
        "Dynamic Pricing",
        "Guest Community Features",
      ],
      color: "#7C3AED",
      gradient: "from-violet-50 to-violet-100/50",
      icon: Sparkles,
      image: "/hostels.png",
      stats: [
        { label: "Guests", value: "2,156", icon: Users },
        { label: "Events", value: "48", icon: Calendar },
        { label: "Rating", value: "4.8", icon: Star },
      ],
    },
    {
      id: "vacation-rentals",
      number: "04",
      title: "Vacation Rentals",
      description: "Centralized management for short-term rentals",
      paragraphs: [
        "Vacation rental properties need to reduce OTA dependence and centralize communication. Our platform helps you manage multiple properties efficiently while building direct relationships with guests.",
        "From automated messaging to dynamic pricing, we provide the tools you need to maximize occupancy and revenue across your entire portfolio.",
      ],
      features: [
        "Multi-Property Management",
        "Automated Guest Communication",
        "Channel Management",
        "Dynamic Pricing",
        "Calendar Synchronization",
        "Revenue Optimization",
      ],
      color: "#06B6D4",
      gradient: "from-cyan-50 to-cyan-100/50",
      icon: Home,
      image: "/vacation-rentals.png",
      stats: [
        { label: "Properties", value: "156", icon: Home },
        { label: "Bookings", value: "3,847", icon: Calendar },
        { label: "Revenue", value: "$289K", icon: TrendingUp },
      ],
    },
    {
      id: "groups-chains",
      number: "05",
      title: "Groups & Chains",
      description: "Centralized management for multi-property operations",
      paragraphs: [
        "Hotel groups and chains need a unified view of operations, revenue, and guest satisfaction across all properties. Our platform delivers enterprise-grade capabilities designed for multi-property management.",
        "Monitor performance across your portfolio from a single dashboard. Standardize operations, maintain brand consistency, and share best practices across all locations.",
      ],
      features: [
        "Multi-Property Dashboard",
        "Portfolio Analytics",
        "Cross-Property Reporting",
        "Centralized Revenue Management",
        "Brand Standardization",
        "Performance Benchmarking",
      ],
      color: "#6366F1",
      gradient: "from-indigo-50 to-indigo-100/50",
      icon: Users,
      image: "/groups-chains.png",
      stats: [
        { label: "Properties", value: "42", icon: Building2 },
        { label: "Rooms", value: "5,847", icon: Bed },
        { label: "Occupancy", value: "82%", icon: Users },
      ],
    },
    {
      id: "revenue-teams",
      number: "06",
      title: "Revenue Teams",
      description: "Analytics and optimization for revenue management",
      paragraphs: [
        "Revenue teams need fast, accurate data to make pricing and inventory decisions. Our platform provides comprehensive reporting, forecasting, and analytics tools designed for revenue optimization.",
        "Make smarter decisions with real-time insights into market demand, competitor pricing, and booking patterns. Our AI-powered recommendations help you maximize revenue potential.",
      ],
      features: [
        "Revenue Analytics",
        "Forecasting Tools",
        "Market Intelligence",
        "Competitor Analysis",
        "Pricing Optimization",
        "Performance Dashboards",
      ],
      color: "#10B981",
      gradient: "from-emerald-50 to-emerald-100/50",
      icon: TrendingUp,
      image: "/revenue.png",
      stats: [
        { label: "Revenue", value: "$1.2M", icon: TrendingUp },
        { label: "Growth", value: "23%", icon: TrendingUp },
        { label: "Accuracy", value: "94%", icon: Star },
      ],
    },
  ];

  // ============================================
  // OVERVIEW CARDS
  // ============================================

  const overviewCards = [
    { number: "01", title: "Independent Hotels", icon: Building2, description: "Complete hotel management for independent properties", color: "#64748B" },
    { number: "02", title: "Boutique Stays", icon: Hotel, description: "Premium digital experiences for boutique properties", color: "#2563EB" },
    { number: "03", title: "Hostels", icon: Sparkles, description: "Optimized management for social accommodations", color: "#7C3AED" },
    { number: "04", title: "Vacation Rentals", icon: Home, description: "Centralized management for short-term rentals", color: "#06B6D4" },
    { number: "05", title: "Groups & Chains", icon: Users, description: "Centralized management for multi-property operations", color: "#6366F1" },
    { number: "06", title: "Revenue Teams", icon: TrendingUp, description: "Analytics and optimization for revenue management", color: "#10B981" },
  ];

  // ============================================
  // FADE IN SECTION WRAPPER
  // ============================================

  const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delay }}
      >
        {children}
      </motion.div>
    );
  };

  // ============================================
  // RENDER FUNCTIONS
  // ============================================

const renderHeroSection = () => (
  <FadeInSection>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mt-10 bg-white pt-8 pb-8 lg:pt-12 lg:pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

      {/* Decorative Glow */}
      <div className="absolute left-20 top-20 w-80 h-80 rounded-full bg-orange-300/20 blur-[120px]" />
      <div className="absolute right-20 bottom-10 w-80 h-80 rounded-full bg-orange-200/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Floating Layout */}
        <div className="relative h-[700px]">

          {/* LEFT TOP */}
          <FadeInSection delay={0.1}>
            <HeroCard
              className="absolute left-0 top-0"
              card={overviewCards[0]}
            />
          </FadeInSection>

          {/* LEFT CENTER */}
          <FadeInSection delay={0.2}>
            <HeroCard
              className="absolute left-44 top-[235px]"
              card={overviewCards[1]}
            />
          </FadeInSection>

          {/* LEFT BOTTOM */}
          <FadeInSection delay={0.3}>
            <HeroCard
              className="absolute left-0 bottom-0"
              card={overviewCards[2]}
            />
          </FadeInSection>

          {/* CENTER */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 scale-[1.45] rounded-full bg-orange-400/20 blur-[90px]" />

              {/* Ring */}
              <div className="relative w-[270px] h-[270px] rounded-full border-[14px] border-orange-100 bg-white/70 backdrop-blur">

                {/* Inner Circle */}
                <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-amber-400 shadow-[0_25px_80px_rgba(249,115,22,.22)] flex flex-col items-center justify-center">

                  <div className="text-center">
                    <div className="text-4xl font-black text-white">6</div>
                    <p className="mt-1 text-center text-orange-50 text-sm leading-6">
                      Platform
                      <br />
                      Modules
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT TOP */}
          <FadeInSection delay={0.15}>
            <HeroCard
              className="absolute right-0 top-0"
              card={overviewCards[3]}
            />
          </FadeInSection>

          {/* RIGHT CENTER */}
          <FadeInSection delay={0.25}>
            <HeroCard
              className="absolute right-44 top-[235px]"
              card={overviewCards[4]}
            />
          </FadeInSection>

          {/* RIGHT BOTTOM */}
          <FadeInSection delay={0.35}>
            <HeroCard
              className="absolute right-0 bottom-0"
              card={overviewCards[5]}
            />
          </FadeInSection>

          {/* HEADING SECTION - Positioned above the circle, centered */}
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-3xl text-center z-10" style={{ top: '30%', transform: 'translate(1%, 10%) translateY(-195px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-200/50 mb-3">
                Platform Solutions
              </span>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.1] tracking-[-0.02em]">
                Complete Hospitality
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Platform Ecosystem
                </span>
              </h1>
              
              <p className="mt-2 text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
                Six powerful solutions designed for every type of hospitality business — 
                from independent hotels to global chains.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  </FadeInSection>
);

  const HeroCard = ({
    card,
    className = "",
  }: {
    card: any;
    className?: string;
  }) => {
    const Icon = card.icon;

    return (
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.04,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`${className} group w-[230px] rounded-2xl bg-white border border-orange-100 shadow-lg hover:shadow-2xl hover:border-orange-300 p-4 transition-all duration-300 cursor-pointer`}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `${card.color}15`,
          }}
        >
          <Icon
            size={22}
            style={{
              color: card.color,
            }}
          />
        </div>

        {/* Number */}
        <span
          className="mt-4 block text-[11px] font-bold uppercase tracking-[2px]"
          style={{
            color: card.color,
          }}
        >
          {card.number}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-lg font-bold text-slate-900">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {card.description}
        </p>

        {/* Arrow */}
        <div className="mt-5 flex items-center">
          <ArrowRight
            size={16}
            className="text-orange-500 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Bottom Accent */}
        <div
          className="mt-4 h-1 w-0 rounded-full transition-all duration-300 group-hover:w-full"
          style={{
            background: `linear-gradient(90deg, ${card.color}, #f97316)`,
          }}
        />
      </motion.div>
    );
  };

  const renderOverviewSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    
    return (
      <section ref={ref} className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {overviewCards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.04,
                    transition: { duration: 0.15 }
                  }}
                  className="group relative flex-shrink-0 w-[180px] p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative flex flex-col items-center text-center">
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-1.5"
                      style={{
                        background: `${card.color}10`,
                      }}
                    >
                      <Icon size={16} style={{ color: card.color }} />
                    </div>
                    
                    <span 
                      className="text-[10px] font-bold mb-0.5"
                      style={{ color: `${card.color}50` }}
                    >
                      {card.number}
                    </span>
                    
                    <h3 className="text-xs font-semibold text-slate-900 leading-tight mb-0.5">
                      {card.title}
                    </h3>
                    
                    <p className="text-[10px] text-slate-500 leading-tight line-clamp-1">{card.description}</p>
                    
                    <div className="mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0.5 group-hover:translate-y-0">
                      <ArrowRight size={12} style={{ color: card.color }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const renderPlatformSection = (section: PlatformSection, index: number) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const isEven = index % 2 === 0;
    const Icon = section.icon;
    
    return (
      <motion.section
        key={section.id}
        ref={ref}
        className="py-12 md:py-16 bg-white border-b border-slate-100 last:border-b-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Themed accent bar at top */}
          <div 
            className="w-20 h-1 rounded-full mb-8"
            style={{ background: section.color }}
          />
          
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
            {/* Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Number Badge */}
              <div className="relative inline-block mb-4">
                <div
                  className="absolute inset-0 rounded-xl blur-2xl"
                  style={{ background: `radial-gradient(circle, ${section.color}25, transparent 70%)` }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${section.color}10`,
                    border: `1px solid ${section.color}20`,
                  }}
                >
                  <span className="text-lg font-bold" style={{ color: section.color }}>
                    {section.number}
                  </span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                {section.title}
              </h2>
              
              <p className="text-base text-slate-600 font-light leading-relaxed mb-3">
                {section.description}
              </p>
              
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-slate-600 leading-relaxed mb-3 last:mb-5">
                  {paragraph}
                </p>
              ))}
              
              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {section.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${section.color}12` }}
                    >
                      <Check size={10} style={{ color: section.color }} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Image/Illustration */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-3xl opacity-40"
                  style={{ background: `radial-gradient(circle, ${section.color}10, transparent 70%)` }}
                />
                
                <div className="relative bg-white border border-slate-200/50 rounded-2xl shadow-lg overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-200/50 flex items-center justify-between bg-slate-50/30">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-400">{section.title}</span>
                    <div className="w-12" />
                  </div>
                  
                  <div className="p-4">
                    <div className="relative rounded-lg overflow-hidden aspect-[16/9] bg-slate-50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <main>
      {renderHeroSection()}
      {renderOverviewSection()}
      {platformSections.map((section, index) => renderPlatformSection(section, index))}
      <Footer />
    </main>
  );
}