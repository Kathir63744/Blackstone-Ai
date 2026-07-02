"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Utensils,
  ClipboardList,
  DoorOpen,
  Package,
  Receipt,
  Zap,
  Users,
  Wallet,
  Clock,
  Star,
  Building2,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Sparkles,
  Smartphone,
  Calendar,
  Brain,
} from "lucide-react";
import { Product } from "../types";

interface ProductHeroProps {
  product: Product;
}

// Icon mapping for features
const iconMap: Record<string, any> = {
  "Utensils": Utensils,
  "ClipboardList": ClipboardList,
  "DoorOpen": DoorOpen,
  "Package": Package,
  "Receipt": Receipt,
  "Zap": Zap,
  "Users": Users,
  "Wallet": Wallet,
  "Clock": Clock,
  "Star": Star,
  "Building2": Building2,
  "Globe": Globe,
  "Layers": Layers,
  "LayoutDashboard": LayoutDashboard,
  "MessageSquare": MessageSquare,
  "BarChart3": BarChart3,
  "Sparkles": Sparkles,
  "Smartphone": Smartphone,
  "Calendar": Calendar,
  "Brain": Brain,
};

// Feature card component
const FeatureCard = ({ icon, title, description, themeColor, index }: any) => {
  const colors = ['#F4C64E', '#10B981', '#3B82F6', '#8B5CF6', '#F97316'];
  const cardColor = colors[index % colors.length];
  
  return (
    <motion.div
      className="group relative bg-white backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 border border-white/20 hover:border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Glass Reflection */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Card Glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${cardColor}10, transparent, ${cardColor}05)`,
        }}
      />
      
      <div className="flex items-start gap-3 sm:gap-3.5 relative">
        {/* Icon Bullet */}
        <div
          className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${cardColor}15, ${cardColor}05)`,
            color: cardColor,
          }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs sm:text-sm font-semibold text-[#1e1b16]">{title}</h4>
          <p className="text-[10px] sm:text-xs text-[#6b6256] leading-relaxed mt-0.5">{description}</p>
        </div>
        <div
          className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            borderColor: `${cardColor}20`,
            background: `${cardColor}08`,
          }}
        >
          <ArrowRight size={10} style={{ color: cardColor }} />
        </div>
      </div>
      
      {/* Bottom Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${cardColor}30, ${cardColor}10, transparent)`,
        }}
      />
    </motion.div>
  );
};

export default function ProductHero({ product }: ProductHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [bgImageError, setBgImageError] = useState(false);
  const [centerImageError, setCenterImageError] = useState(false);

  const theme = product.theme;

  // Extract theme colors
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

  // Get icon for feature based on feature content
  const getFeatureIcon = (feature: string) => {
    const iconNames = [
      "Utensils", "ClipboardList", "DoorOpen", "Package", "Receipt",
      "Zap", "Users", "Wallet", "Clock", "Star",
      "Building2", "Globe", "Layers", "LayoutDashboard", "MessageSquare",
      "BarChart3", "Sparkles", "Smartphone", "Calendar", "Brain"
    ];
    const index = Math.abs(feature.length) % iconNames.length;
    const iconName = iconNames[index];
    const Icon = iconMap[iconName] || Utensils;
    return <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />;
  };

  // Prepare features from product data - ONLY from heroFeatures
  const features = product.heroFeatures.slice(0, 5).map((feature, index) => {
    const title = feature.split("—")[0] || feature;
    const description = feature.includes("—")
      ? feature.split("—")[1]
      : `${title}`;
    return {
      icon: getFeatureIcon(feature),
      title,
      description,
      index,
    };
  });

  const backgroundImage = product.backgroundImage || product.heroImage;
  const centerImage = product.heroImage;

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: product.heroBackground || "#FFFFFF",
      }}
    >
      {/* ========================================== */}
      {/* BACKGROUND */}
      {/* ========================================== */}

      <div className="absolute inset-0">
        {!bgImageError && (
          <Image
            src={backgroundImage}
            alt={`${product.title} background`}
            fill
            className="object-cover opacity-25"
            priority
            onError={() => setBgImageError(true)}
            unoptimized
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${product.heroBackground || '#FFFFFF'}CC 0%, ${product.heroBackground || '#FFFFFF'}80 30%, transparent 70%)`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-[8%] right-[12%] w-2 h-2 sm:w-3 sm:h-3 rounded-full pointer-events-none z-10"
        style={{ background: primaryColor, opacity: 0.15 }}
        animate={{ y: [0, -25, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[8%] w-3 h-3 sm:w-4 sm:h-4 rounded-full pointer-events-none z-10"
        style={{ background: primaryColor, opacity: 0.12 }}
        animate={{ y: [0, 20, 0], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border pointer-events-none z-10"
        style={{ borderColor: `${primaryColor}10` }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full border pointer-events-none z-10"
        style={{ borderColor: `${primaryColor}06` }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 45% 45%, ${primaryColor}15 0%, transparent 70%)`,
        }}
      />

      {/* ========================================== */}
      {/* MAIN CONTENT - FULL RESPONSIVE */}
      {/* ========================================== */}

      <div className="relative w-full px-14 sm:px-22 lg:px-30 py-8 sm:py-12 lg:py-16 z-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full">
          
          {/* ========================================== */}
          {/* LEFT COLUMN - Content (30%) */}
          {/* ========================================== */}

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="w-full lg:w-[30%] flex-shrink-0 z-10 flex flex-col space-y-3 sm:space-y-4 lg:pl-0"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="inline-flex items-center rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase w-fit"
              style={{
                background: `${primaryColor}15`,
                color: primaryColor,
                border: `1px solid ${primaryColor}25`,
              }}
            >
              ✦ {product.badge}
            </motion.div>

            {/* Heading - Responsive */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } },
              }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-[-0.02em] sm:tracking-[-0.03em] text-[#1e1b16]"
            >
              {product.title.split(" ").slice(0, -1).join(" ")}
              <br />
              <span
                className="font-extrabold"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}60)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {product.title.split(" ").slice(-1)}
              </span>
            </motion.h1>

            {/* Decorative Underline */}
            <motion.div
              variants={{
                hidden: { opacity: 0, width: 0 },
                visible: { opacity: 1, width: 60, transition: { duration: 0.5, delay: 0.1 } },
              }}
              className="h-[2px] sm:h-[3px] rounded-full"
              style={{
                width: "60px",
                background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}20)`,
              }}
            />

            {/* Description - Responsive */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
              }}
              className="text-sm sm:text-base lg:text-lg text-[#5a5248] max-w-sm leading-relaxed font-light tracking-wide"
            >
              {product.description}
            </motion.p>
          </motion.div>

          {/* ========================================== */}
          {/* CENTER COLUMN - BIGGER IMAGE FRAME (45%) */}
          {/* ========================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-[45%] flex-shrink-0 z-10 flex flex-col items-center relative"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[680px]">
              {/* Theme Glow Behind Image */}
              <div className="absolute inset-[-25%] sm:inset-[-30%] lg:inset-[-35%] flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle at 45% 40%, ${primaryColor}30, ${primaryColor}10 50%, transparent 70%)`,
                  }}
                />
              </div>

              {/* TV Frame Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] lg:shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
                {/* TV Frame Border */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none z-20"
                  style={{
                    border: `2px solid ${primaryColor}25`,
                    boxShadow: `inset 0 0 40px ${primaryColor}08`,
                  }}
                />

                {/* TV Frame - Top Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 z-20"
                  style={{
                    background: `linear-gradient(90deg, ${primaryColor}30, ${primaryColor}70, ${primaryColor}30)`,
                  }}
                />

                {/* Image Container */}
                <div className="relative bg-black/5">
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none z-10"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, ${primaryColor}05 30%, transparent 60%)`,
                    }}
                  />

                  {!centerImageError ? (
                    <Image
                      src={centerImage}
                      alt={product.title}
                      width={680}
                      height={780}
                      className="w-full h-auto object-cover brightness-[1.05] contrast-[1.05]"
                      priority
                      onError={() => {
                        console.error("Failed to load center image:", centerImage);
                        setCenterImageError(true);
                      }}
                      unoptimized
                    />
                  ) : (
                    <div 
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}05)`,
                      }}
                    >
                      <div className="text-center">
                        <span className="text-sm text-gray-500 block">Image not available</span>
                        <span className="text-xs text-gray-400 block mt-1">{centerImage}</span>
                      </div>
                    </div>
                  )}

                  {/* TV Frame - Bottom Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 z-20"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor}30, ${primaryColor}70, ${primaryColor}30)`,
                    }}
                  />
                </div>

                {/* TV Frame - Corner Accents */}
                <div
                  className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full z-20"
                  style={{ background: `${primaryColor}15` }}
                />
                <div
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full z-20"
                  style={{ background: `${primaryColor}15` }}
                />
                <div
                  className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full z-20"
                  style={{ background: `${primaryColor}15` }}
                />
                <div
                  className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full z-20"
                  style={{ background: `${primaryColor}15` }}
                />
              </div>
            </div>

            {/* CTA Button - Below Center Frame (Equal to frame bottom) */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.25 } },
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 sm:mt-5 lg:mt-6 text-white px-6 sm:px-8 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 w-fit flex items-center gap-2 sm:gap-2.5 group mx-auto lg:mx-0"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}70)`,
                boxShadow: `0 8px 30px ${primaryColor}30`,
              }}
            >
              Contact Us
      
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-white/20">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </span>
            </motion.button>
          </motion.div>

          {/* ========================================== */}
          {/* RIGHT COLUMN - Feature Cards (25%) */}
          {/* ========================================== */}

          <div className="w-full lg:w-[25%] flex-shrink-0 z-10 flex flex-col gap-2 sm:gap-3 pr-0 lg:pr-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  themeColor={primaryColor}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}