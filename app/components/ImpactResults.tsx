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
    x: "18%",
    y: "28%",
    align: "left",
  },
  {
    metric: "4x",
    title: "Faster Decision Making",
    description: "Real-time insights that help you decide with confidence.",
    icon: TrendingUp,
    x: "82%",
    y: "28%",
    align: "right",
  },
  {
    metric: "100+",
    title: "Connected Systems",
    description: "Seamlessly integrate with your existing technology.",
    icon: Database,
    x: "18%",
    y: "72%",
    align: "left",
  },
  {
    metric: "5 Day",
    title: "Implementation",
    description: "Go live in days, not months with our rapid deployment.",
    icon: Clock,
    x: "82%",
    y: "72%",
    align: "right",
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f4ff_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="relative w-full mb-8 overflow-hidden bg-white border-y border-slate-200">

          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          <div className="py-8">

            {/* Label Row */}
            <div className="flex items-center justify-center gap-6 mb-8 px-6">
              <div className="h-px flex-1 max-w-[120px] bg-slate-200" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-slate-700 font-semibold whitespace-nowrap">
                Trusted By Leading Hotel Brands
              </span>

              <div className="h-px flex-1 max-w-[120px] bg-slate-200" />
            </div>

            {/* Full Width Marquee */}
            <div className="relative overflow-hidden">

              {/* Left Fade */}
              <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white via-white to-transparent" />

              {/* Right Fade */}
              <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white via-white to-transparent" />

              <motion.div
                className="flex items-center gap-32 whitespace-nowrap"
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
                      width={140}
                      height={50}
                      className="
                        h-12
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

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Real Impact.
            <span className="block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Measurable Results.
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Zotal AI helps hotels streamline operations and accelerate growth.
          </p>
        </div>

        {/* Desktop Network Layout */}
        <div className="relative h-[420px] hidden lg:block">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Curved lines from center to each card */}
            <path 
              d="M 50% 50% Q 32% 36%, 18% 28%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% Q 68% 36%, 82% 28%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% Q 32% 64%, 18% 72%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />
            <path 
              d="M 50% 50% Q 68% 64%, 82% 72%" 
              stroke="#93c5fd" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.5"
            />

            {/* Dashed overlay */}
            <path 
              d="M 50% 50% Q 32% 36%, 18% 28%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% Q 68% 36%, 82% 28%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% Q 32% 64%, 18% 72%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />
            <path 
              d="M 50% 50% Q 68% 64%, 82% 72%" 
              stroke="#60a5fa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="3, 5"
            />

            {/* Connection dots */}
            <circle cx="18%" cy="28%" r="2.5" fill="#60a5fa" opacity="0.5" />
            <circle cx="82%" cy="28%" r="2.5" fill="#60a5fa" opacity="0.5" />
            <circle cx="18%" cy="72%" r="2.5" fill="#60a5fa" opacity="0.5" />
            <circle cx="82%" cy="72%" r="2.5" fill="#60a5fa" opacity="0.5" />
          </svg>

          {/* Metric Cards */}
          {metrics.map((item, i) => {
            const Icon = item.icon;
            const isLeft = item.align === "left";

            return (
              <div
                key={i}
                ref={metricRefs[i]}
                className={`absolute w-[300px] -mt-14 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                  metricVisible[i]
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ left: item.x, top: item.y, transitionDelay: `${i * 150 + 100}ms` }}
              >
                <div className={`bg-white border border-blue-100/60 p-4 rounded-xl shadow-sm ${isLeft ? 'text-left' : 'text-right'}`}>
                  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-2`}>
                    <div className="w-15 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.metric}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mt-0.5">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[360px] h-[360px]">
              {/* Glow */}
              <div className="absolute inset-10 rounded-full" />

              {/* Center Video */}
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden"
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

        {/* Mobile Layout */}
        <div className="grid lg:hidden gap-3 mt-6">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={mobileRefs[i]}
                className={`bg-white border border-blue-100 rounded-xl p-3 shadow-sm transition-all duration-700 ease-out ${
                  mobileVisible[i]
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100 + 50}ms` }}
              >
                <Icon className="w-4 h-4 text-blue-600 mb-1" />
                <h3 className="text-xl font-bold">{item.metric}</h3>
                <p className="text-xs font-semibold text-slate-700">{item.title}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}