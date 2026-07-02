"use client";

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
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
  ArrowRight,
  Crown,
  Gem,
  Rocket,
  Target,
  Award,
  BadgeCheck,
} from 'lucide-react';
import Footer from '../components/Footer';

// ============================================
// TYPES
// ============================================

interface PricingPlan {
  title: string;
  audience: string;
  description: string;
  price: string;
  features: string[];
  icon: any;
  featured?: boolean;
  popular?: boolean;
  color?: string;
}

// ============================================
// PRICING DATA
// ============================================

const pricingData = {
  "Elite": [
    {
      title: "Starter",
      audience: "For Independent Hotels",
      description: "Perfect for boutique hotels and independent properties getting started with digital operations.",
      price: "$99",
      icon: Building2,
      features: [
        "Reservation Management",
        "Housekeeping Automation",
        "Guest Communication",
        "Basic Analytics",
        "Channel Manager",
        "Email Support",
      ],
      color: "#64748B",
    },
    {
      title: "Professional",
      audience: "For Growing Properties",
      description: "Comprehensive management for properties looking to scale operations and increase revenue.",
      price: "$199",
      icon: Hotel,
      featured: true,
      popular: true,
      features: [
        "Everything in Starter",
        "Revenue Management",
        "Advanced Analytics",
        "Multi-Property Dashboard",
        "Guest CRM",
        "Priority Support",
      ],
      color: "#F28C28",
    },
    {
      title: "Enterprise",
      audience: "For Groups & Chains",
      description: "Full-scale enterprise solution for hotel groups and chains with complex operations.",
      price: "$399",
      icon: Crown,
      features: [
        "Everything in Professional",
        "Portfolio Analytics",
        "Cross-Property Reporting",
        "Brand Standardization",
        "Performance Benchmarking",
        "24/7 Premium Support",
      ],
      color: "#7C3AED",
    },
  ],
  "Essential": [
    {
      title: "Basic",
      audience: "For Small Properties",
      description: "Essential tools for small hotels, hostels, and vacation rentals to manage daily operations.",
      price: "$49",
      icon: Home,
      features: [
        "Room Management",
        "Basic Booking Engine",
        "Guest Communication",
        "Simple Analytics",
        "Email Support",
        "Mobile App Access",
      ],
      color: "#10B981",
    },
    {
      title: "Standard",
      audience: "For Mid-Size Properties",
      description: "Complete solution for properties with multiple rooms and growing guest expectations.",
      price: "$129",
      icon: LayoutDashboard,
      featured: true,
      features: [
        "Everything in Basic",
        "Channel Manager",
        "Housekeeping Automation",
        "Revenue Insights",
        "Guest CRM",
        "Priority Support",
      ],
      color: "#6366F1",
    },
    {
      title: "Premium",
      audience: "For Large Properties",
      description: "Advanced features for large properties and resorts with diverse service offerings.",
      price: "$249",
      icon: Gem,
      features: [
        "Everything in Standard",
        "Multi-Property Dashboard",
        "Advanced Analytics",
        "Spa & Activity Management",
        "Restaurant Integration",
        "24/7 Support",
      ],
      color: "#7C3AED",
    },
  ],
};

// ============================================
// COMPONENT
// ============================================

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('Elite');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Get current plans based on active tab
  const currentPlans = pricingData[activeTab as keyof typeof pricingData] || [];

  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FDF8F3] pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute left-20 top-20 w-80 h-80 rounded-full bg-orange-300/20 blur-[120px]" />
        <div className="absolute right-20 bottom-10 w-80 h-80 rounded-full bg-orange-200/20 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
      <div className="inline-block mb-4 sm:mb-6 md:mb-8 relative">
          <span className="inline-block text-[10px] sm:text-[8px] md:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.2em] uppercase text-white px-4 sm:px-4 md:px-6 py-1.5 sm:py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
            Pricing
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
          </span>
        </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-[-0.02em] mb-4">
              Choose the setup that
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                fits your property.
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Built for boutique hotels, resorts, vacation rentals and hospitality groups.
              Start free, scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <div ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <section className=" bg-[#FDF8F3] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-[#F2E8DE] bg-[#FFFDFB] p-4 sm:p-6 md:p-8 lg:p-14 overflow-hidden">

                {/* Background Effects */}
                <div className="absolute -left-20 sm:-left-32 top-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#F7E8D8] blur-[80px] sm:blur-[120px] opacity-60" />
                <div className="absolute -right-20 sm:-right-32 bottom-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FFF0E1] blur-[80px] sm:blur-[120px] opacity-60" />

                <div className="relative z-10">
                  {/* Tabs */}
                  <div className="flex justify-center mt-2 sm:mt-4">
                    <div className="bg-[#F5EFE9] rounded-full p-1.5 flex flex-wrap gap-1 max-w-full overflow-x-auto">
                      {Object.keys(pricingData).map((tab) => (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 lg:mt-10">
                    {currentPlans.map((plan: PricingPlan, index: number) => {
                      const Icon = plan.icon;

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{
                            y: -8,
                            transition: { duration: 0.2 },
                          }}
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
                                : "border-[#EFE7DF] hover:border-[#F28C28]/30 hover:shadow-lg"
                            }
                          `}
                        >
                          {/* Popular Ribbon */}
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-[#F28C28] text-white text-[8px] sm:text-xs font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-bl-2xl rounded-tr-[20px] sm:rounded-tr-[24px] lg:rounded-tr-[30px]">
                              Most Popular
                            </div>
                          )}

                          {/* Featured Ribbon */}
                          {plan.featured && !plan.popular && (
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-amber-400 text-white text-[8px] sm:text-xs font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-bl-2xl rounded-tr-[20px] sm:rounded-tr-[24px] lg:rounded-tr-[30px]">
                              Recommended
                            </div>
                          )}

                          {/* Icon */}
                          <div 
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                            style={{ background: `${plan.color || '#F28C28'}15` }}
                          >
                            <Icon 
                              size={18} 
                              className="sm:text-[22px]"
                              style={{ color: plan.color || '#F28C28' }}
                            />
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
                            {plan.features.map((feature: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 sm:gap-3 text-[#5A5048]"
                              >
                                <div 
                                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                                  style={{ background: plan.color || '#F28C28' }}
                                />
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
                                  ? "bg-[#F28C28] text-white hover:bg-[#e67e16] hover:scale-105"
                                  : "border border-[#F28C28] text-[#F28C28] hover:bg-[#FFF6ED] hover:scale-102"
                              }
                            `}
                          >
                            Get Pricing
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
                    {[
                      { icon: Shield, label: "99.9% Uptime" },
                      { icon: Headphones, label: "24/7 Support" },
                      { icon: Lock, label: "Enterprise Security" },
                      { icon: Users, label: "10K+ Properties" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <Icon size={16} className="text-[#F28C28]" />
                          <span className="text-xs sm:text-sm text-[#5A5048] font-medium">
                            {item.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

       {/* FAQ Section - Advanced Orange Theme */}
<div ref={useRef<HTMLDivElement>(null)}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Large blurred circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-200/30 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-200/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-100/10 blur-[100px]" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Orange Accent */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Decorative Orange Line */}
          <div className="inline-block mb-4 sm:mb-6 md:mb-8 relative">
          <span className="inline-block text-[10px] sm:text-[8px] md:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.2em] uppercase text-white px-4 sm:px-4 md:px-6 py-1.5 sm:py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
            FAQ  
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
          </span>
        </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241D] leading-tight">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="mt-3 text-[#8C8178] text-md sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>

          {/* Decorative Orange Underline */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
          </div>
        </motion.div>

        {/* FAQ Grid with Orange Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              icon: "🔄"
            },
            {
              q: "Is there a free trial?",
              a: "Yes, all plans include a 14-day free trial. No credit card required to get started.",
              icon: "🎁"
            },
            {
              q: "Do you offer custom pricing?",
              a: "For enterprise-level needs and custom requirements, we offer tailored pricing solutions.",
              icon: "⚡"
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, debit cards, and bank transfers for annual plans.",
              icon: "💳"
            },
            {
              q: "Is there a setup fee?",
              a: "No setup fees. All plans include free onboarding and migration support.",
              icon: "🚀"
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription at any time with no penalties or hidden fees.",
              icon: "✅"
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-orange-100/50 shadow-sm hover:shadow-xl hover:border-orange-300/70 transition-all duration-300 cursor-pointer"
            >
              {/* Orange Accent Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-100/0 group-hover:from-orange-50/30 group-hover:via-orange-50/20 group-hover:to-orange-100/20 transition-all duration-500" />
              
              {/* Orange Corner Accent */}
              <div className="absolute -top-0.5 -right-0.5 w-12 h-12 rounded-tr-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-bl-2xl" />
              </div>

              <div className="relative flex items-start gap-4">
                {/* Icon with Orange Circle */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <span className="text-orange-600">{faq.icon}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Question with Orange Hover */}
                  <h3 className="text-sm sm:text-base font-semibold text-[#2D241D] group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
                    {faq.q}
                    <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight size={14} />
                    </span>
                  </h3>
                  
                  {/* Answer with improved readability */}
                  <p className="mt-1.5 text-xs sm:text-sm text-[#8C8178] leading-relaxed group-hover:text-[#5A5048] transition-colors duration-300">
                    {faq.a}
                  </p>

                  {/* Orange Progress Bar on Hover */}
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  </motion.div>
</div>

<Footer />
    </main>
  );
}