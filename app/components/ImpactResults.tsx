"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  TrendingUp,
  Database,
  Clock,
  Sparkles,
} from "lucide-react";

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

const metrics = [
  {
    metric: "50%",
    title: "Less Manual Work",
    description: "Automate repetitive tasks and reduce dependency.",
    icon: Zap,
    align: "left",
    position: "top",
  },
  {
    metric: "4x",
    title: "Faster Decision Making",
    description: "Real-time insights that help you decide with confidence.",
    icon: TrendingUp,
    align: "right",
    position: "top",
  },
  {
    metric: "100+",
    title: "Connected Systems",
    description: "Seamlessly integrate with your existing technology.",
    icon: Database,
    align: "left",
    position: "bottom",
  },
  {
    metric: "5 Day",
    title: "Implementation",
    description: "Go live in days, not months with our rapid deployment.",
    icon: Clock,
    align: "right",
    position: "bottom",
  },
];

const brands = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

export default function ImpactResults() {
  // Section fade in
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Desktop metric cards fade in
  const metricRefs = metrics.map(() => useRef<HTMLDivElement>(null));
  const [metricVisible, setMetricVisible] = useState(metrics.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    metrics.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMetricVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      
      if (metricRefs[index].current) {
        observer.observe(metricRefs[index].current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (metricRefs[index].current) {
          observer.unobserve(metricRefs[index].current);
        }
        observer.disconnect();
      });
    };
  }, []);

  // Mobile cards fade in
  const mobileRefs = metrics.map(() => useRef<HTMLDivElement>(null));
  const [mobileVisible, setMobileVisible] = useState(metrics.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    metrics.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMobileVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      
      if (mobileRefs[index].current) {
        observer.observe(mobileRefs[index].current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (mobileRefs[index].current) {
          observer.unobserve(mobileRefs[index].current);
        }
        observer.disconnect();
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-white/60 transition-all duration-700 ease-out ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f4ff_1px,transparent_1px)] bg-[size:30px_30px sm:60px_60px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6">
        {/* Trusted By Section - Mobile optimized */}
        <section className="relative w-full mb-6 sm:mb-10 overflow-hidden bg-white border-y border-slate-200">

          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          <div className="py-4 sm:py-8">

            {/* Label Row - Mobile optimized */}
            <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4 sm:mb-8 px-3 sm:px-6">
              <div className="h-px flex-1 max-w-[40px] sm:max-w-[120px] bg-slate-200" />

              <span className="text-[8px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.40em] text-slate-700 font-semibold whitespace-nowrap text-center">
                Trusted By Leading Hotel Brands
              </span>

              <div className="h-px flex-1 max-w-[40px] sm:max-w-[120px] bg-slate-200" />
            </div>

            {/* Full Width Marquee - Mobile optimized */}
            <div className="relative overflow-hidden">

              {/* Left Fade */}
              <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-r from-white via-white to-transparent" />

              {/* Right Fade */}
              <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-l from-white via-white to-transparent" />

              <motion.div
                className="flex items-center gap-12 sm:gap-32 whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...brands, ...brands].map((brand, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={80}
                      height={30}
                      className="
                        h-8 sm:h-12
                        w-auto
                        object-contain
                        opacity-60
                        grayscale
                        hover:opacity-100
                        hover:grayscale-0
                        transition-all
                        duration-500
                      "
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>

        {/* Header - Mobile optimized */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Real Impact.
            <span className="block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Measurable Results.
            </span>
          </h2>

          <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-slate-500 max-w-2xl mx-auto px-2">
            Zotal AI helps hotels streamline operations and accelerate growth.
          </p>
        </div>

        {/* Desktop Network Layout */}
        <div className="relative h-[520px] hidden lg:block">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Curved lines from center to each card */}
            <path 
              d="M 50% 50% C 35% 35%, 25% 28%, 12% 32%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% C 65% 35%, 75% 28%, 88% 32%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% C 35% 65%, 25% 72%, 12% 68%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% C 65% 65%, 75% 72%, 88% 68%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />

            {/* Dashed overlay */}
            <path 
              d="M 50% 50% C 35% 35%, 25% 28%, 12% 32%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% C 65% 35%, 75% 28%, 88% 32%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% C 35% 65%, 25% 72%, 12% 68%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% C 65% 65%, 75% 72%, 88% 68%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />

            {/* Connection dots */}
            <circle cx="12%" cy="32%" r="3" fill="#60a5fa" opacity="0.5" />
            <circle cx="88%" cy="32%" r="3" fill="#60a5fa" opacity="0.5" />
            <circle cx="12%" cy="68%" r="3" fill="#60a5fa" opacity="0.5" />
            <circle cx="88%" cy="68%" r="3" fill="#60a5fa" opacity="0.5" />
          </svg>

          {/* Left Column Cards - Equal width and spacing */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 w-[360px]">
            {metrics.filter(m => m.align === "left").map((item, i) => {
              const Icon = item.icon;
              const index = metrics.indexOf(item);
              
              return (
                <div
                  key={index}
                  ref={metricRefs[index]}
                  className={`transition-all duration-700 ease-out ${
                    metricVisible[index]
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 100}ms` }}
                >
                  <div className="bg-white border border-blue-100/60 p-5 rounded-xl shadow-sm text-left h-full">
                    <div className="flex justify-start mb-2">
                      <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.metric}
                    </h3>

                    <p className="text-md font-medium text-slate-700 mt-0.5">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[12.5px] font-semibold text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Cards - Equal width and spacing */}
          <div className="absolute -right-14 top-1/2 -translate-y-1/2 flex flex-col gap-6 w-[380px]">
            {metrics.filter(m => m.align === "right").map((item, i) => {
              const Icon = item.icon;
              const index = metrics.indexOf(item);
              
              return (
                <div
                  key={index}
                  ref={metricRefs[index]}
                  className={`transition-all duration-700 ease-out ${
                    metricVisible[index]
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 100}ms` }}
                >
                  <div className="bg-white border border-blue-100/60 p-5 rounded-xl shadow-sm text-right h-full">
                    <div className="flex justify-end mb-2">
                      <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.metric}
                    </h3>

                    <p className="text-md font-medium text-slate-700 mt-0.5">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[12.5px] font-semibold text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Hub - Equal size with proper gap */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[400px] h-[400px]">
              {/* Center Video */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-amber-200/30 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/From Klickpin.com- Try Elegant fall outfit ideas that feel curated elegant and easy enough to recreate this weekend for ideas worth saving right n.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Enhanced with better spacing and design */}
        <div className="grid lg:hidden gap-3 mt-4 sm:mt-6">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={mobileRefs[i]}
                className={`bg-white border border-blue-100 rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-700 ease-out ${
                  mobileVisible[i]
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100 + 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.metric}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}