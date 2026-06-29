// app/components/PlatformAdvantage.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  TrendingUp,
  Network,
  Calendar,
  Building2,
  CreditCard,
  Users,
  Globe,
  MessageCircle,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Activity,
  LayoutDashboard,
  ShieldCheck,
  Gauge,
  Sparkles,
  Bot,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

// ======================================================
// TYPES
// ======================================================

interface AdvantageItem {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  change: string;
  image: string;
  colorScheme: 'emerald' | 'purple' | 'amber' | 'rose' | 'cyan' | 'indigo';
}

interface MetricItem {
  value: string;
  label: string;
  icon: React.ElementType;
  colorScheme: 'emerald' | 'purple' | 'amber' | 'cyan';
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

// ======================================================
// COLOR SCHEMES
// ======================================================

const colorSchemes = {
  emerald: {
    cardBg: 'bg-emerald-50/30',
    cardBgActive: 'bg-emerald-50/60',
    cardBorder: 'border-emerald-200/60',
    cardBorderHover: 'hover:border-emerald-300',
    cardBorderActive: 'border-emerald-400',
    cardShadow: 'shadow-emerald-500/10',
    cardShadowHover: 'hover:shadow-emerald-500/20',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'group-hover:bg-emerald-200',
    iconBgActive: 'bg-emerald-200',
    iconColor: 'text-emerald-600',
    iconColorHover: 'group-hover:text-emerald-700',
    iconColorActive: 'text-emerald-700',
    textPrimary: 'text-emerald-700',
    textPrimaryHover: 'group-hover:text-emerald-800',
    textPrimaryActive: 'text-emerald-800',
    textSecondary: 'text-emerald-600',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200',
    metricText: 'text-emerald-600',
    metricBg: 'bg-emerald-50',
    gradient: 'from-emerald-50 to-teal-50',
    gradientStrong: 'from-emerald-500 to-teal-500',
    indicatorColor: '#059669',
    shadow: 'shadow-emerald-500/20',
    metricContainerBg: 'bg-emerald-50/40',
    metricContainerBorder: 'border-emerald-200/40',
    glassBg: 'bg-emerald-500/10',
    glassBorder: 'border-emerald-500/20',
    glassShadow: 'shadow-emerald-500/30',
  },
  purple: {
    cardBg: 'bg-purple-50/30',
    cardBgActive: 'bg-purple-50/60',
    cardBorder: 'border-purple-200/60',
    cardBorderHover: 'hover:border-purple-300',
    cardBorderActive: 'border-purple-400',
    cardShadow: 'shadow-purple-500/10',
    cardShadowHover: 'hover:shadow-purple-500/20',
    iconBg: 'bg-purple-100',
    iconBgHover: 'group-hover:bg-purple-200',
    iconBgActive: 'bg-purple-200',
    iconColor: 'text-purple-600',
    iconColorHover: 'group-hover:text-purple-700',
    iconColorActive: 'text-purple-700',
    textPrimary: 'text-purple-700',
    textPrimaryHover: 'group-hover:text-purple-800',
    textPrimaryActive: 'text-purple-800',
    textSecondary: 'text-purple-600',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200',
    metricText: 'text-purple-600',
    metricBg: 'bg-purple-50',
    gradient: 'from-purple-50 to-pink-50',
    gradientStrong: 'from-purple-500 to-pink-500',
    indicatorColor: '#7c3aed',
    shadow: 'shadow-purple-500/20',
    metricContainerBg: 'bg-purple-50/40',
    metricContainerBorder: 'border-purple-200/40',
    glassBg: 'bg-purple-500/10',
    glassBorder: 'border-purple-500/20',
    glassShadow: 'shadow-purple-500/30',
  },
  amber: {
    cardBg: 'bg-amber-50/30',
    cardBgActive: 'bg-amber-50/60',
    cardBorder: 'border-amber-200/60',
    cardBorderHover: 'hover:border-amber-300',
    cardBorderActive: 'border-amber-400',
    cardShadow: 'shadow-amber-500/10',
    cardShadowHover: 'hover:shadow-amber-500/20',
    iconBg: 'bg-amber-100',
    iconBgHover: 'group-hover:bg-amber-200',
    iconBgActive: 'bg-amber-200',
    iconColor: 'text-amber-600',
    iconColorHover: 'group-hover:text-amber-700',
    iconColorActive: 'text-amber-700',
    textPrimary: 'text-amber-700',
    textPrimaryHover: 'group-hover:text-amber-800',
    textPrimaryActive: 'text-amber-800',
    textSecondary: 'text-amber-600',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
    badgeBorder: 'border-amber-200',
    metricText: 'text-amber-600',
    metricBg: 'bg-amber-50',
    gradient: 'from-amber-50 to-orange-50',
    gradientStrong: 'from-amber-500 to-orange-500',
    indicatorColor: '#d97706',
    shadow: 'shadow-amber-500/20',
    metricContainerBg: 'bg-amber-50/40',
    metricContainerBorder: 'border-amber-200/40',
    glassBg: 'bg-amber-500/10',
    glassBorder: 'border-amber-500/20',
    glassShadow: 'shadow-amber-500/30',
  },
  rose: {
    cardBg: 'bg-rose-50/30',
    cardBgActive: 'bg-rose-50/60',
    cardBorder: 'border-rose-200/60',
    cardBorderHover: 'hover:border-rose-300',
    cardBorderActive: 'border-rose-400',
    cardShadow: 'shadow-rose-500/10',
    cardShadowHover: 'hover:shadow-rose-500/20',
    iconBg: 'bg-rose-100',
    iconBgHover: 'group-hover:bg-rose-200',
    iconBgActive: 'bg-rose-200',
    iconColor: 'text-rose-600',
    iconColorHover: 'group-hover:text-rose-700',
    iconColorActive: 'text-rose-700',
    textPrimary: 'text-rose-700',
    textPrimaryHover: 'group-hover:text-rose-800',
    textPrimaryActive: 'text-rose-800',
    textSecondary: 'text-rose-600',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-700',
    badgeBorder: 'border-rose-200',
    metricText: 'text-rose-600',
    metricBg: 'bg-rose-50',
    gradient: 'from-rose-50 to-red-50',
    gradientStrong: 'from-rose-500 to-red-500',
    indicatorColor: '#e11d48',
    shadow: 'shadow-rose-500/20',
    metricContainerBg: 'bg-rose-50/40',
    metricContainerBorder: 'border-rose-200/40',
    glassBg: 'bg-rose-500/10',
    glassBorder: 'border-rose-500/20',
    glassShadow: 'shadow-rose-500/30',
  },
  cyan: {
    cardBg: 'bg-cyan-50/30',
    cardBgActive: 'bg-cyan-50/60',
    cardBorder: 'border-cyan-200/60',
    cardBorderHover: 'hover:border-cyan-300',
    cardBorderActive: 'border-cyan-400',
    cardShadow: 'shadow-cyan-500/10',
    cardShadowHover: 'hover:shadow-cyan-500/20',
    iconBg: 'bg-cyan-100',
    iconBgHover: 'group-hover:bg-cyan-200',
    iconBgActive: 'bg-cyan-200',
    iconColor: 'text-cyan-600',
    iconColorHover: 'group-hover:text-cyan-700',
    iconColorActive: 'text-cyan-700',
    textPrimary: 'text-cyan-700',
    textPrimaryHover: 'group-hover:text-cyan-800',
    textPrimaryActive: 'text-cyan-800',
    textSecondary: 'text-cyan-600',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-700',
    badgeBorder: 'border-cyan-200',
    metricText: 'text-cyan-600',
    metricBg: 'bg-cyan-50',
    gradient: 'from-cyan-50 to-sky-50',
    gradientStrong: 'from-cyan-500 to-sky-500',
    indicatorColor: '#0891b2',
    shadow: 'shadow-cyan-500/20',
    metricContainerBg: 'bg-cyan-50/40',
    metricContainerBorder: 'border-cyan-200/40',
    glassBg: 'bg-cyan-500/10',
    glassBorder: 'border-cyan-500/20',
    glassShadow: 'shadow-cyan-500/30',
  },
  indigo: {
    cardBg: 'bg-indigo-50/30',
    cardBgActive: 'bg-indigo-50/60',
    cardBorder: 'border-indigo-200/60',
    cardBorderHover: 'hover:border-indigo-300',
    cardBorderActive: 'border-indigo-400',
    cardShadow: 'shadow-indigo-500/10',
    cardShadowHover: 'hover:shadow-indigo-500/20',
    iconBg: 'bg-indigo-100',
    iconBgHover: 'group-hover:bg-indigo-200',
    iconBgActive: 'bg-indigo-200',
    iconColor: 'text-indigo-600',
    iconColorHover: 'group-hover:text-indigo-700',
    iconColorActive: 'text-indigo-700',
    textPrimary: 'text-indigo-700',
    textPrimaryHover: 'group-hover:text-indigo-800',
    textPrimaryActive: 'text-indigo-800',
    textSecondary: 'text-indigo-600',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-700',
    badgeBorder: 'border-indigo-200',
    metricText: 'text-indigo-600',
    metricBg: 'bg-indigo-50',
    gradient: 'from-indigo-50 to-blue-50',
    gradientStrong: 'from-indigo-500 to-blue-500',
    indicatorColor: '#4f46e5',
    shadow: 'shadow-indigo-500/20',
    metricContainerBg: 'bg-indigo-50/40',
    metricContainerBorder: 'border-indigo-200/40',
    glassBg: 'bg-indigo-500/10',
    glassBorder: 'border-indigo-500/20',
    glassShadow: 'shadow-indigo-500/30',
  }
};

// ======================================================
// DATA
// ======================================================

const advantages: AdvantageItem[] = [
  {
    icon: Building2,
    title: "Unified Operations Hub",
    description: "Replace multiple legacy systems with one intelligent, flexible PMS.",
    metric: "88%",
    change: "Faster Training",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
    colorScheme: 'emerald'
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Revenue Engine",
    description: "Signals causal AI delivers 95% accurate forecasts and an 18% RevPAR lift.",
    metric: "18%",
    change: "Average Revenue Lift",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
    colorScheme: 'purple'
  },
  {
    icon: Globe,
    title: "Omnichannel Distribution",
    description: "Connect to 300+ OTAs and channels with real-time, commission-free sync.",
    metric: "300+",
    change: "Connected Channels",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
    colorScheme: 'amber'
  },
  {
    icon: Users,
    title: "Elevated Guest Experience",
    description: "From AI chat to digital check-in, deliver 5-star experiences that drive reviews.",
    metric: "5x",
    change: "More Positive Reviews",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center",
    colorScheme: 'rose'
  }
];

const metrics: MetricItem[] = [
  { value: "50%", label: "Faster Staff Training", icon: Gauge, colorScheme: 'emerald' },
  { value: "80%", label: "Less Manual Work", icon: Zap, colorScheme: 'purple' },
  { value: "450+", label: "Integration Partners", icon: Network, colorScheme: 'amber' },
  { value: "24/7", label: "Live Support", icon: Headphones, colorScheme: 'cyan' }
];

// ======================================================
// SUB-COMPONENTS
// ======================================================

const AdvantageCard = ({ item, isActive, onClick, delay }: { 
  item: AdvantageItem; 
  isActive: boolean;
  onClick: () => void;
  delay: number;
}) => {
  const Icon = item.icon;
  const colors = colorSchemes[item.colorScheme];
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  
  return (
    <div 
      ref={ref}
      className={`group rounded-xl border p-3 sm:p-4 md:p-5 transition-all duration-700 ease-out cursor-pointer h-full ${
        isActive 
          ? `bg-white/40 backdrop-blur-xl ${colors.glassBg} ${colors.glassBorder} ${colors.glassShadow} shadow-2xl scale-[1.02] -translate-y-1 border-2`
          : `bg-white ${colors.cardBg} border-gray-200/60 ${colors.cardBorderHover} hover:shadow-md ${colors.cardShadowHover} hover:-translate-y-0.5`
      } ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <div className={`flex-shrink-0 p-1.5 sm:p-2 md:p-2.5 rounded-lg transition-colors ${
          isActive ? `${colors.iconBgActive} shadow-sm` : `${colors.iconBg} ${colors.iconBgHover}`
        }`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? colors.iconColorActive : `${colors.iconColor} ${colors.iconColorHover}`}`} strokeWidth={1.75} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1 transition-colors ${
            isActive ? colors.textPrimaryActive : `text-gray-700 ${colors.textPrimaryHover}`
          }`}>
            {item.title}
          </h3>
          <p className="text-[9px] sm:text-[14px] text-gray-500 leading-relaxed hidden sm:block">{item.description}</p>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2.5">
            <span className={`text-md sm:text-xl font-semibold ${isActive ? colors.textPrimaryActive : 'text-gray-700'}`}>
              {item.metric}
            </span>
            <span className={`text-[10px] sm:text-[12px] font-medium ${colors.badgeBg} ${colors.badgeText} px-1.5 sm:px-2.5 py-0.5 rounded-full border ${colors.badgeBorder}`}>
              {item.change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricPill = ({ metric, delay }: { metric: MetricItem; delay: number }) => {
  const Icon = metric.icon;
  const colors = colorSchemes[metric.colorScheme];
  const { ref, isVisible } = useFadeInOnScroll(0.1);

  return (
    <div 
      ref={ref}
      className={`flex items-center gap-2 sm:gap-4 px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-b sm:border-b-0 border-r-0 sm:border-r border-gray-200/40 last:border-r-0 ${colors.metricContainerBg} transition-all duration-700 ease-out flex-1 justify-center sm:justify-start ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`p-1.5 sm:p-2 md:p-2.5 rounded-xl ${colors.iconBg}`}>
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.iconColor}`} strokeWidth={1.5} />
      </div>
      <div>
        <div className={`text-base sm:text-2xl md:text-2xl font-bold ${colors.metricText}`}>
          {metric.value}
        </div>
        <div className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-500 font-medium">{metric.label}</div>
      </div>
    </div>
  );
};

// ======================================================
// IMAGE SLIDER COMPONENT
// ======================================================

const ImageSlider = ({ items, activeIndex, onPrevious, onNext, isPlaying, onTogglePlay }: {
  items: AdvantageItem[];
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        onNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onNext]);

  const handleTransition = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (direction === 'prev') {
      onPrevious();
    } else {
      onNext();
    }
    
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const currentItem = items[activeIndex];
  const colors = colorSchemes[currentItem.colorScheme];

  return (
    <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
      {/* Image Slider */}
      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200/60 bg-gray-50 flex-shrink-0" style={{ minHeight: '200px' }}>
        <div className="relative w-full h-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="min-w-full relative">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
          <button
            onClick={() => handleTransition('prev')}
            className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200/60 transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          </button>
          <button
            onClick={() => handleTransition('next')}
            className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200/60 transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
          {items.map((_, index) => {
            const colors = colorSchemes[items[index].colorScheme];
            return (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    if (index > activeIndex) {
                      for (let i = activeIndex; i < index; i++) {
                        setTimeout(() => onNext(), 100 * (i - activeIndex + 1));
                      }
                    } else {
                      for (let i = activeIndex; i > index; i--) {
                        setTimeout(() => onPrevious(), 100 * (activeIndex - i + 1));
                      }
                    }
                    setTimeout(() => setIsTransitioning(false), 400);
                  }
                }}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 sm:w-8' : 'w-1 sm:w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                style={{
                  backgroundColor: index === activeIndex ? colors.indicatorColor : undefined
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={onTogglePlay}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 pointer-events-auto p-1.5 sm:p-2 rounded-lg bg-white/90 hover:bg-white shadow-lg border border-gray-200/60 transition-all duration-200"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-700" />
          ) : (
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Text Content Below Image - Now grows to fill space */}
      <div className={`bg-white/80 backdrop-blur-sm rounded-xl border p-3 sm:p-4 md:p-5 transition-all duration-500 flex-1 ${colors.glassBorder} ${colors.glassBg}`}>
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <div className={`p-1.5 sm:p-2 rounded-xl ${colors.iconBg}`}>
            <currentItem.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.iconColor}`} strokeWidth={1.75} />
          </div>
          <span className={`text-[10px] sm:text-[14px] md:text-lg font-semibold ${colors.textSecondary} tracking-wider uppercase`}>
            {currentItem.title}
          </span>
          <span className={`text-[9px] sm:text-[11px] font-medium ${colors.badgeBg} ${colors.badgeText} px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${colors.badgeBorder} ml-auto`}>
            {currentItem.change}
          </span>
        </div>
        <p className="text-md sm:text-md mt-6 text-gray-700 leading-relaxed">
          {currentItem.description}
        </p>
        <div className="flex items-center gap-2 sm:gap-3 mt-8 sm:mt-9">
          <span className={`text-xl sm:text-2xl font-bold ${colors.metricText}`}>{currentItem.metric}</span>
          <span className="text-[12px] sm:text-lg text-gray-400">Impact Metric</span>
        </div>
      </div>
    </div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function PlatformAdvantage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Header fade in
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Container fade in
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerVisible, setContainerVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContainerVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? advantages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-11 md:py-15 bg-white">
      {/* Header */}
      <div 
        ref={headerRef}
        className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-block mb-6 sm:mb-8 relative">
          <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
            The Blackstone AI Advantage
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Built for What's Next
        </h2>
        <p className="text-md sm:text-md text-gray-500 max-w-3xl mx-auto mt-2 sm:mt-3 px-2">
          Most platforms are built for the past. Blackstone AI is your intelligent growth engine for the future.
        </p>
      </div>

      {/* Main Container */}
      <div 
        ref={containerRef}
        className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden transition-all duration-700 ease-out ${
          containerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Image Slider Section */}
        <div className="p-3 sm:p-4 md:p-5">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" strokeWidth={1.5} />
            <span className="text-[8px] sm:text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase">
              Platform Showcase
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
              <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
              <span className="text-[8px] sm:text-[10px] text-gray-500 font-medium">
                {activeIndex + 1} / {advantages.length}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* Image Slider with Text Below - Full height */}
            <div className="lg:col-span-3">
              <div className="h-full">
                <ImageSlider
                  items={advantages}
                  activeIndex={activeIndex}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  isPlaying={isPlaying}
                  onTogglePlay={handleTogglePlay}
                />
              </div>
            </div>

            {/* Advantage Cards - Full height with flex column */}
            <div className="lg:col-span-2">
              <div className="flex flex-col h-full space-y-1.5 sm:space-y-2">
                {advantages.map((item, index) => (
                  <AdvantageCard
                    key={index}
                    item={item}
                    isActive={index === activeIndex}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPlaying(false);
                    }}
                    delay={index * 100 + 50}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="border-t border-gray-200/60 bg-gray-50/30">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-gray-200/40">
            {metrics.map((metric, index) => (
              <MetricPill key={index} metric={metric} delay={index * 100 + 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}