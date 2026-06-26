"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Badge {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  x: number;
  y: number;
}

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

const HeroBanner = () => {
  const [activeBadges, setActiveBadges] = useState<string[]>([]);
  const [badgePositions, setBadgePositions] = useState<Record<string, { x: number; y: number }>>({});
  const [isHolding, setIsHolding] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // BADGES MOVED CLOSER TO CENTER - SHORTER LINES
  const badgeData: Badge[] = [
    { id: "pms", name: "PMS", subtitle: "CORE OPS", icon: "🏨", x: 25, y: 28 },
    { id: "booking", name: "Booking", subtitle: "REVENUE", icon: "📅", x: 50, y: 18 },
    { id: "google", name: "Google Hotels", subtitle: "VISIBILITY", icon: "🔍", x: 75, y: 28 },
    { id: "housekeeping", name: "HouseKeeping", subtitle: "AUTOMATION", icon: "🧹", x: 15, y: 50 },
    { id: "pricing", name: "AI Pricing", subtitle: "SMART RATES", icon: "🤖", x: 85, y: 50 },
    { id: "dashboards", name: "Dashboards", subtitle: "ANALYTICS", icon: "📊", x: 25, y: 72 },
    { id: "seo", name: "SEO Websites", subtitle: "GROWTH", icon: "🌐", x: 50, y: 82 },
    { id: "ota", name: "OTA Sync", subtitle: "CHANNELS", icon: "🔄", x: 75, y: 72 },
  ];

  // Fade in refs for sections
  const topContentRef = useRef<HTMLDivElement>(null);
  const [topContentVisible, setTopContentVisible] = useState(false);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const [ecosystemVisible, setEcosystemVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Observer for top content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTopContentVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (topContentRef.current) {
      observer.observe(topContentRef.current);
    }
    
    return () => {
      if (topContentRef.current) {
        observer.unobserve(topContentRef.current);
      }
    };
  }, []);

  // Observer for ecosystem
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEcosystemVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    
    if (ecosystemRef.current) {
      observer.observe(ecosystemRef.current);
    }
    
    return () => {
      if (ecosystemRef.current) {
        observer.unobserve(ecosystemRef.current);
      }
    };
  }, []);

  // Observer for CTA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    let holdTimeout: NodeJS.Timeout;
    let deployTimeout: NodeJS.Timeout;

    const deployAllBadges = () => {
      setIsAnimating(true);
      setActiveBadges([]);
      setBadgePositions({});

      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      // Initialize all badges at center
      const initialPositions: Record<string, { x: number; y: number }> = {};
      badgeData.forEach((badge) => {
        initialPositions[badge.id] = { x: centerX, y: centerY };
      });
      setBadgePositions(initialPositions);

      // Show all badges
      setActiveBadges(badgeData.map(b => b.id));

      // Animate all badges simultaneously
      const startTime = Date.now();
      const duration = 2000;

      const animateAll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease in-out cubic
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const newPositions: Record<string, { x: number; y: number }> = {};
        
        badgeData.forEach((badge) => {
          const destX = (badge.x / 100) * dimensions.width;
          const destY = (badge.y / 100) * dimensions.height;
          
          const currentX = centerX + (destX - centerX) * ease;
          const currentY = centerY + (destY - centerY) * ease;
          
          newPositions[badge.id] = { x: currentX, y: currentY };
        });

        setBadgePositions(newPositions);

        if (progress < 1) {
          requestAnimationFrame(animateAll);
        } else {
          // Snap to final positions
          const finalPositions: Record<string, { x: number; y: number }> = {};
          badgeData.forEach((badge) => {
            finalPositions[badge.id] = {
              x: (badge.x / 100) * dimensions.width,
              y: (badge.y / 100) * dimensions.height
            };
          });
          setBadgePositions(finalPositions);
          setIsAnimating(false);
          setIsHolding(true);
          
          holdTimeout = setTimeout(() => {
            // Reset and restart
            setIsHolding(false);
            setActiveBadges([]);
            setBadgePositions({});
            deployTimeout = setTimeout(deployAllBadges, 500);
          }, 60000);
        }
      };

      animateAll();
    };

    deployTimeout = setTimeout(deployAllBadges, 600);

    return () => {
      clearTimeout(deployTimeout);
      clearTimeout(holdTimeout);
    };
  }, [dimensions]);

  const getBadgeStyle = (badgeId: string): React.CSSProperties => {
    const pos = badgePositions[badgeId];
    if (!pos) return { display: "none" };
    
    return {
      position: "absolute",
      left: pos.x - 55,
      top: pos.y - 42,
      width: 110,
      zIndex: 20,
      pointerEvents: "auto",
    };
  };

  const isBadgeVisible = (badgeId: string): boolean => {
    return activeBadges.includes(badgeId);
  };

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  return (
    <section className="relative overflow-hidden bg-[#F8F8F5]">
      {/* Grid Background */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#d9d9d920_1px,transparent_1px),
        linear-gradient(to_bottom,#d9d9d920_1px,transparent_1px)]
        bg-[size:30px_30px sm:50px_50px md:70px_70px]
      "
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] bg-sky-300/20 blur-[80px] sm:blur-[140px] md:blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] bg-cyan-300/20 blur-[80px] sm:blur-[140px] md:blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-5 md:pt-7 pb-6 sm:pb-10 md:pb-12">
        {/* TOP CONTENT */}
        <div 
          ref={topContentRef}
          className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
            topContentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="mt-4 sm:mt-10 md:mt-16">
            <div className="inline-block mb-1.5 sm:mb-2 md:mb-3 relative">
              <span className="inline-block text-[7px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-white px-2.5 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
                Core Services
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-2 sm:mt-3 md:mt-4 text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] sm:leading-[0.95] md:leading-[0.9] font-semibold tracking-[-0.04em] sm:tracking-[-0.05em] text-[#121212]">
            The Operating System
            <br />
            for
            <span className="relative mx-1.5 sm:mx-2 md:mx-3 mt-1 sm:mt-4 md:mt-8 inline-block">
              <span className="bg-[#ff8c00] text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-lg sm:rounded-xl text-[1.2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] inline-block">
                Modern Hotels
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-5 md:mt-8 max-w-2xl mx-auto text-xs sm:text-sm md:text-lg text-slate-900 leading-relaxed px-3 sm:px-4">
            Powerful hospitality technology that unifies bookings,
            operations, guest experiences, and revenue management
            into one intelligent ecosystem.
          </p>

          {/* Platform Connector */}
          <div className="relative flex flex-col items-center mt-3 sm:mt-4 md:mt-6 mb-2 sm:mb-3 md:mb-4">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute left-[15%] sm:left-[20%] md:left-[30%] w-[12%] sm:w-[15%] h-px bg-gradient-to-r from-transparent to-[#75c6f2]" />
              <div className="absolute right-[15%] sm:right-[20%] md:right-[30%] w-[12%] sm:w-[15%] h-px bg-gradient-to-l from-transparent to-[#75c6f2]" />
              <div className="relative px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-white shadow-lg">
                <span className="uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.25em] text-[7px] sm:text-[9px] md:text-[10px] text-gray-600">
                  View Platform
                </span>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-px h-1 sm:h-1.5 md:h-2 bg-gradient-to-b from-[#75c6f2] to-transparent" />
            </div>
          </div>
        </div>

        {/* Ecosystem Section - Fixed height responsive */}
        <div 
          ref={ecosystemRef}
          className={`relative mt-1 sm:mt-2 h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-700 ease-out ${
            ecosystemVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute inset-0" ref={containerRef}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/rb.png"
                alt="Hotel Dashboard"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* SVG Connector Lines - SHORT LINES */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              {badgeData.map((badge) => {
                const endX = (badge.x / 100) * dimensions.width;
                const endY = (badge.y / 100) * dimensions.height;
                const isVisible = isBadgeVisible(badge.id);
                
                if (!isVisible) return null;
                
                return (
                  <line
                    key={`line-${badge.id}`}
                    x1={centerX}
                    y1={centerY}
                    x2={endX}
                    y2={endY}
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1"
                    strokeDasharray="2, 4"
                  />
                );
              })}
            </svg>

            {/* Center Hub Card - PERFECTLY CENTERED */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="relative px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl text-center min-w-[60px] sm:min-w-[80px] md:min-w-[110px] pointer-events-auto">
                <div className="text-[4px] sm:text-[5px] md:text-[7px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] text-blue-200 uppercase mb-0.5">
                  BLACKSTONE AI
                </div>
                <div className="text-[5px] sm:text-[6px] md:text-[8px] font-medium text-white/70 mb-0.5">
                  Core Services
                </div>
                <div className="text-[6px] sm:text-[7px] md:text-[9px] font-bold text-white leading-tight">
                  One Platform. Complete Ops.
                </div>
              </div>
            </div>

            {/* Service Badges - WIDER WITH CLEAR TEXT */}
            {badgeData.map((badge) => {
              const isVisible = isBadgeVisible(badge.id);
              const pos = badgePositions[badge.id];
              if (!pos) return null;
              
              // Responsive badge sizing
              const badgeWidth = dimensions.width < 480 ? 60 : dimensions.width < 640 ? 70 : dimensions.width < 768 ? 85 : 110;
              const badgeHeight = dimensions.width < 480 ? 28 : dimensions.width < 640 ? 32 : dimensions.width < 768 ? 38 : 42;
              
              return (
                <div
                  key={badge.id}
                  style={{
                    position: "absolute",
                    left: pos.x - (badgeWidth / 2),
                    top: pos.y - (badgeHeight / 2),
                    width: badgeWidth,
                    zIndex: 20,
                    pointerEvents: "auto",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="relative group p-1 sm:p-1.5 md:p-2.5 rounded-md sm:rounded-lg md:rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                    <div className="relative z-10">
                      <div className="text-xs sm:text-sm md:text-md mb-0.5">{badge.icon}</div>
                      <div className="text-gray-900 font-extrabold text-[6px] sm:text-[7px] md:text-[10px] leading-tight tracking-wide">
                        {badge.name}
                      </div>
                      <div className="text-gray-500 font-bold text-[5px] sm:text-[6px] md:text-[7px] mt-0.5 tracking-wider uppercase">
                        {badge.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-4 sm:mt-6 md:mt-9 transition-all duration-700 ease-out ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#"
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-[#111827] text-white font-semibold hover:scale-105 transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
            >
              Schedule a Demo
            </Link>
            <Link
              href="#"
              className="px-3.5 sm:px-4 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-white border border-gray-300 font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;