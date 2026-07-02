"use client";

import { CheckCircle2, Sparkles, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Award, Star, Target, Activity, BarChart3, CircleCheck, Gem } from "lucide-react";
import { Product } from "../types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProductKeyPointsProps {
  product: Product;
}

export default function ProductKeyPoints({ product }: ProductKeyPointsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const theme = product.theme;

  // Extract theme color
  const getThemeColor = (className: string) => {
    const colorMap: Record<string, string> = {
      blue: "#3B82F6",
      emerald: "#10B981",
      purple: "#8B5CF6",
      orange: "#F97316",
      rose: "#F43F5E",
      indigo: "#6366F1",
      teal: "#14B8A6",
      sky: "#0EA5E9",
      amber: "#F59E0B",
      cyan: "#06B6D4",
      violet: "#8B5CF6",
      pink: "#EC4899",
      lime: "#84CC16",
      fuchsia: "#D946EF",
      slate: "#64748B",
      red: "#EF4444",
    };

    if (className.includes("blue")) return colorMap.blue;
    if (className.includes("emerald")) return colorMap.emerald;
    if (className.includes("purple")) return colorMap.purple;
    if (className.includes("orange")) return colorMap.orange;
    if (className.includes("rose")) return colorMap.rose;
    if (className.includes("indigo")) return colorMap.indigo;
    if (className.includes("teal")) return colorMap.teal;
    if (className.includes("sky")) return colorMap.sky;
    if (className.includes("amber")) return colorMap.amber;
    if (className.includes("cyan")) return colorMap.cyan;
    if (className.includes("violet")) return colorMap.violet;
    if (className.includes("pink")) return colorMap.pink;
    if (className.includes("lime")) return colorMap.lime;
    if (className.includes("fuchsia")) return colorMap.fuchsia;
    if (className.includes("slate")) return colorMap.slate;
    if (className.includes("red")) return colorMap.red;
    return "#3B82F6";
  };

  const primaryColor = getThemeColor(theme.accent);

  // Animation variants with correct Framer Motion types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const icons = [Sparkles, Zap, Shield, Clock, Users, TrendingUp];

  const keyPoints = product.keyPoints.slice(0, 6);
  const suitableForItems = product.suitableFor;

  // Statistics for the preview panel
  const stats = [
    { value: "98.7%", label: "Success Rate" },
    { value: "2.4s", label: "Avg Response" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-24 md:py-32 bg-white"
    >
      {/* Premium Background Effects */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, ${primaryColor}06 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, ${primaryColor}04 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, ${primaryColor}03 0%, transparent 70%)
          `,
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Soft Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large Blurred Blobs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `${primaryColor}04` }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `${primaryColor}03` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full"
              style={{ 
                color: primaryColor,
                background: `${primaryColor}08`,
                border: `1px solid ${primaryColor}12`
              }}
            >
              Why Choose This
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-[-0.03em]"
          >
            Everything You Need
            <br />
           
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 rounded-full mx-auto mt-6"
            style={{ background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}20)` }}
          />
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-[#5a5248] font-light tracking-wide max-w-2xl mx-auto"
          >
            Everything you need to {product.title.toLowerCase()} efficiently and effectively.
          </motion.p>
        </motion.div>

        {/* Main Content - Timeline + Preview Panel */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Timeline Section - 3 columns */}
          <div className="lg:col-span-3 relative">
            <div className="relative pl-8 md:pl-12">
              {/* Vertical Timeline Line */}
              <motion.div
                className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] rounded-full"
                style={{
                  background: `linear-gradient(to bottom, ${primaryColor}, ${primaryColor}30, ${primaryColor}05)`,
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />

              {/* Timeline Nodes and Cards */}
              {keyPoints.map((point, index) => {
                const Icon = icons[index % icons.length];
                const words = point.split(" ");
                const title = words.slice(0, 3).join(" ");
                const description = words.slice(3).join(" ") || "Premium feature";
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`relative mb-12 last:mb-0 flex items-start ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-[-36px] md:left-[-28px] top-1 z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 0.3 + index * 0.1 
                      }}
                    >
                      <div
                        className="relative w-[18px] h-[18px] rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}60)`,
                          boxShadow: `0 0 20px ${primaryColor}30, 0 0 60px ${primaryColor}10`,
                          border: `2px solid white`,
                        }}
                      >
                        {/* Pulse Ring */}
                        <motion.div
                          className="absolute inset-[-6px] rounded-full"
                          style={{
                            border: `2px solid ${primaryColor}20`,
                          }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Card Content */}
                    <div className={`flex-1 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                      <motion.div
                        className="group relative"
                        whileHover={{
                          y: -4,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div
                          className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{
                            borderColor: `${primaryColor}12`,
                            boxShadow: `0 10px 40px -12px ${primaryColor}15`,
                          }}
                        >
                          {/* Gradient Accent Strip */}
                          <div
                            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                            style={{
                              background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}30)`,
                            }}
                          />

                          {/* Hover Glow */}
                          <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                              boxShadow: `0 0 60px ${primaryColor}08`,
                            }}
                          />

                          <div className="flex items-start gap-4 relative">
                            <div
                              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                              style={{
                                background: `${primaryColor}10`,
                                color: primaryColor,
                              }}
                            >
                              <Icon size={20} strokeWidth={1.75} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base font-semibold text-[#1a1a1a] leading-tight">
                                {title}
                              </h4>
                              <p className="text-sm text-[#5a5248] mt-1">
                                {description}
                              </p>
                            </div>
                            <motion.div
                              className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0"
                              animate={isInView ? { x: 0 } : { x: -8 }}
                            >
                              <ArrowRight size={18} style={{ color: primaryColor }} />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Preview Panel - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="sticky top-24 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border shadow-2xl"
              style={{
                borderColor: `${primaryColor}12`,
                boxShadow: `0 20px 60px -20px ${primaryColor}20`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.8), ${primaryColor}02)`,
              }}
            >
              {/* Decorative Top Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}40, transparent)`,
                }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 rounded-xl"
                  style={{ background: `${primaryColor}10` }}
                >
                  <Gem size={20} style={{ color: primaryColor }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">Perfect For</h3>
                  <p className="text-xs text-[#5a5248]">Ideal use cases</p>
                </div>
              </div>

              {/* Suitable For Items */}
              <div className="space-y-3 mb-8">
                {suitableForItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-md"
                      style={{
                        borderColor: `${primaryColor}08`,
                        background: `${primaryColor}02`,
                      }}
                    >
                      <CircleCheck 
                        size={16} 
                        style={{ color: primaryColor }}
                        className="shrink-0"
                      />
                      <span className="text-sm font-medium text-[#1a1a1a]">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 rounded-xl bg-white/60 backdrop-blur-sm border"
                    style={{
                      borderColor: `${primaryColor}08`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                  >
                    <div
                      className="text-lg font-bold"
                      style={{ color: primaryColor }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#5a5248] mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mini Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#5a5248]">Adoption Rate</span>
                  <span className="font-medium" style={{ color: primaryColor }}>87%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}50)` }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "87%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#5a5248]">Satisfaction</span>
                  <span className="font-medium" style={{ color: primaryColor }}>94%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}30)` }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "94%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                  />
                </div>
              </div>

              {/* Mini Activity Indicator */}
              <div className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border"
                style={{ borderColor: `${primaryColor}08` }}
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: primaryColor }}
                  />
                  <span className="text-xs font-medium text-[#1a1a1a]">Active</span>
                </div>
                <div className="flex-1 h-px bg-gray-200" />
                <div className="flex items-center gap-1">
                  <Activity size={12} style={{ color: primaryColor }} />
                  <span className="text-xs text-[#5a5248]">Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "99.9%", sub: "Uptime Guaranteed", icon: Award },
            { label: "24/7", sub: "Premium Support", icon: Star },
            { label: "Enterprise", sub: "Security Certified", icon: Target },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div
                className="relative p-5 rounded-2xl bg-white/60 backdrop-blur-sm border shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                style={{
                  borderColor: `${primaryColor}10`,
                  background: `${primaryColor}02`,
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <item.icon size={16} style={{ color: primaryColor }} className="opacity-60" />
                  <div
                    className="text-xl font-bold"
                    style={{ color: primaryColor }}
                  >
                    {item.label}
                  </div>
                </div>
                <div className="text-xs text-[#5a5248]">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}