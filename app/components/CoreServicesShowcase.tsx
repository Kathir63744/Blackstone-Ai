// app/components/CoreServicesShowcase.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Cloud, 
  Shield, 
  Headphones, 
  Circle,
  CircleDot,
  CircleCheck,
  CalendarDays,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  Globe,
  LayoutGrid,
  Bell,
  Menu,
  Search,
  Plus,
  ChevronDown,
  Maximize2,
  Minimize2,
  Settings,
  HelpCircle,
  BellRing,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Award,
  Star,
  BarChart3,
  Rocket
} from 'lucide-react';

// ======================================================
// TYPES
// ======================================================

interface Product {
  title: string;
  subtitle: string;
  features: string[];
}

interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
  gradient?: string;
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
// DATA
// ======================================================

const products: Product[] = [
  {
    title: "Google Hotel Ads & Booking",
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
    subtitle: "BETTER GUEST EXPERIENCES",
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

const trustItems: TrustItem[] = [
  {
    icon: Zap,
    title: "AI Powered",
    description: "Intelligent automation for every operation",
    highlight: "98% Accuracy",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Scalable infrastructure, always available",
    highlight: "99.9% Uptime",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade protection for your data",
    highlight: "256-bit Encryption",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated experts, always on standby",
    highlight: "Average 2-min Response",
    gradient: "from-orange-500 to-amber-500",
  },
];

// ======================================================
// CALENDAR THEME HELPERS
// ======================================================

const getCalendarTheme = (index: number, isDark: boolean) => {
  const lightThemes = [
    {
      border: "border-blue-200/80 hover:border-blue-400",
      bg: "bg-blue-50/30 hover:bg-blue-50/50",
      dot: "bg-blue-400",
      accent: "text-blue-600",
      lightAccent: "text-blue-400",
      shadow: "shadow-blue-100/20",
      gradient: "from-blue-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-emerald-200/80 hover:border-emerald-400",
      bg: "bg-emerald-50/30 hover:bg-emerald-50/50",
      dot: "bg-emerald-400",
      accent: "text-emerald-600",
      lightAccent: "text-emerald-400",
      shadow: "shadow-emerald-100/20",
      gradient: "from-emerald-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-purple-200/80 hover:border-purple-400",
      bg: "bg-purple-50/30 hover:bg-purple-50/50",
      dot: "bg-purple-400",
      accent: "text-purple-600",
      lightAccent: "text-purple-400",
      shadow: "shadow-purple-100/20",
      gradient: "from-purple-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-orange-200/80 hover:border-orange-400",
      bg: "bg-orange-50/30 hover:bg-orange-50/50",
      dot: "bg-orange-400",
      accent: "text-orange-600",
      lightAccent: "text-orange-400",
      shadow: "shadow-orange-100/20",
      gradient: "from-orange-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-rose-200/80 hover:border-rose-400",
      bg: "bg-rose-50/30 hover:bg-rose-50/50",
      dot: "bg-rose-400",
      accent: "text-rose-600",
      lightAccent: "text-rose-400",
      shadow: "shadow-rose-100/20",
      gradient: "from-rose-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-indigo-200/80 hover:border-indigo-400",
      bg: "bg-indigo-50/30 hover:bg-indigo-50/50",
      dot: "bg-indigo-400",
      accent: "text-indigo-600",
      lightAccent: "text-indigo-400",
      shadow: "shadow-indigo-100/20",
      gradient: "from-indigo-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-teal-200/80 hover:border-teal-400",
      bg: "bg-teal-50/30 hover:bg-teal-50/50",
      dot: "bg-teal-400",
      accent: "text-teal-600",
      lightAccent: "text-teal-400",
      shadow: "shadow-teal-100/20",
      gradient: "from-teal-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
    {
      border: "border-sky-200/80 hover:border-sky-400",
      bg: "bg-sky-50/30 hover:bg-sky-50/50",
      dot: "bg-sky-400",
      accent: "text-sky-600",
      lightAccent: "text-sky-400",
      shadow: "shadow-sky-100/20",
      gradient: "from-sky-50/40 to-transparent",
      cardBg: "bg-white",
      textPrimary: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-400",
      borderLight: "border-gray-200/80",
      hoverBg: "hover:bg-gray-50/50",
    },
  ];

  const darkThemes = [
    {
      border: "border-blue-700/80 hover:border-blue-500",
      bg: "bg-blue-900/30 hover:bg-blue-900/50",
      dot: "bg-blue-400",
      accent: "text-blue-400",
      lightAccent: "text-blue-300",
      shadow: "shadow-blue-500/10",
      gradient: "from-blue-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-emerald-700/80 hover:border-emerald-500",
      bg: "bg-emerald-900/30 hover:bg-emerald-900/50",
      dot: "bg-emerald-400",
      accent: "text-emerald-400",
      lightAccent: "text-emerald-300",
      shadow: "shadow-emerald-500/10",
      gradient: "from-emerald-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-purple-700/80 hover:border-purple-500",
      bg: "bg-purple-900/30 hover:bg-purple-900/50",
      dot: "bg-purple-400",
      accent: "text-purple-400",
      lightAccent: "text-purple-300",
      shadow: "shadow-purple-500/10",
      gradient: "from-purple-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-orange-700/80 hover:border-orange-500",
      bg: "bg-orange-900/30 hover:bg-orange-900/50",
      dot: "bg-orange-400",
      accent: "text-orange-400",
      lightAccent: "text-orange-300",
      shadow: "shadow-orange-500/10",
      gradient: "from-orange-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-rose-700/80 hover:border-rose-500",
      bg: "bg-rose-900/30 hover:bg-rose-900/50",
      dot: "bg-rose-400",
      accent: "text-rose-400",
      lightAccent: "text-rose-300",
      shadow: "shadow-rose-500/10",
      gradient: "from-rose-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-indigo-700/80 hover:border-indigo-500",
      bg: "bg-indigo-900/30 hover:bg-indigo-900/50",
      dot: "bg-indigo-400",
      accent: "text-indigo-400",
      lightAccent: "text-indigo-300",
      shadow: "shadow-indigo-500/10",
      gradient: "from-indigo-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-teal-700/80 hover:border-teal-500",
      bg: "bg-teal-900/30 hover:bg-teal-900/50",
      dot: "bg-teal-400",
      accent: "text-teal-400",
      lightAccent: "text-teal-300",
      shadow: "shadow-teal-500/10",
      gradient: "from-teal-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
    {
      border: "border-sky-700/80 hover:border-sky-500",
      bg: "bg-sky-900/30 hover:bg-sky-900/50",
      dot: "bg-sky-400",
      accent: "text-sky-400",
      lightAccent: "text-sky-300",
      shadow: "shadow-sky-500/10",
      gradient: "from-sky-900/40 to-transparent",
      cardBg: "bg-gray-800/80",
      textPrimary: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      borderLight: "border-gray-700/80",
      hoverBg: "hover:bg-gray-700/50",
    },
  ];

  return isDark ? darkThemes[index % darkThemes.length] : lightThemes[index % lightThemes.length];
};

const getCalendarIcon = (index: number) => {
  const icons = [
    CalendarDays,
    Clock,
    Users,
    TrendingUp,
    Sparkles,
    Globe,
    LayoutGrid,
    Bell,
  ];
  return icons[index % icons.length];
};

// ======================================================
// SUB-COMPONENTS
// ======================================================

const StatusBadge = ({ index, isDark }: { index: number; isDark: boolean }) => {
  const statuses = [
    { label: "ACTIVE", icon: CircleCheck, color: isDark ? "text-emerald-400" : "text-emerald-600" },
    { label: "LIVE", icon: CircleDot, color: isDark ? "text-blue-400" : "text-blue-600" },
    { label: "CORE", icon: Circle, color: isDark ? "text-indigo-400" : "text-indigo-600" },
    { label: "AI", icon: Zap, color: isDark ? "text-purple-400" : "text-purple-600" },
  ];
  
  const status = statuses[index % statuses.length];
  const Icon = status.icon;
  
  return (
    <div className="flex items-center gap-1.5 text-[10px] font-medium">
      <Icon className={`w-3 h-3 ${status.color}`} strokeWidth={2.5} />
      <span className={isDark ? "text-gray-400" : "text-gray-500"}>{status.label}</span>
    </div>
  );
};

const ServiceCell = ({ product, index, isDark, delay }: { 
  product: Product; 
  index: number; 
  isDark: boolean;
  delay: number;
}) => {
  const theme = getCalendarTheme(index, isDark);
  const CalendarIcon = getCalendarIcon(index);
  const dayNumber = String(index + 1).padStart(2, '0');
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  
  return (
    <div 
      ref={ref}
      className={`group relative ${theme.cardBg} border ${theme.border} rounded-xl p-4 sm:p-5 transition-all duration-700 ease-out hover:shadow-xl ${theme.shadow} hover:-translate-y-0.5 cursor-default overflow-hidden flex flex-col h-full min-h-[260px] sm:min-h-[280px] ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
      
      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${theme.bg} flex items-center justify-center flex-shrink-0 border-2 ${theme.border} transition-all duration-200 group-hover:scale-105`}>
              <span className={`text-xs sm:text-sm font-bold ${theme.accent}`}>{dayNumber}</span>
            </div>
            <div className={`p-1 sm:p-1.5 rounded-lg ${theme.bg} transition-all duration-200 group-hover:scale-110`}>
              <CalendarIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${theme.accent}`} strokeWidth={1.75} />
            </div>
          </div>
          <StatusBadge index={index} isDark={isDark} />
        </div>
        
        {/* Meta - Hide on very small screens */}
        <div className="hidden xs:flex items-center gap-2 mb-2 sm:mb-3">
          <div className={`w-1.5 h-1.5 rounded-full ${theme.dot} ${isDark ? '' : 'animate-pulse'}`} />
          <span className={`text-[8px] sm:text-[10px] font-medium ${theme.textMuted} tracking-wider uppercase`}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Special'][index % 8]}
          </span>
          <span className={`text-[8px] sm:text-[10px] ${theme.textMuted}`}>•</span>
          <span className={`text-[8px] sm:text-[10px] font-mono ${theme.textMuted}`}>
            Q{Math.floor(index / 4) + 1}
          </span>
        </div>
        
        {/* Title */}
        <div className="mb-3 sm:mb-4 flex-1">
          <h3 className={`text-sm sm:text-base font-bold ${theme.textPrimary} leading-snug mb-0.5 sm:mb-1 group-hover:${isDark ? 'text-gray-200' : 'text-gray-800'} transition-colors`}>
            {product.title}
          </h3>
          <p className={`text-[10px] sm:text-xs font-semibold ${theme.textMuted} tracking-wider`}>
            {product.subtitle}
          </p>
        </div>
        
        {/* Features */}
        <div className="mt-auto">
          <div className={`h-px bg-gradient-to-r ${isDark ? 'from-gray-700/80' : 'from-gray-200/80'} to-transparent mb-2 sm:mb-3`} />
          <ul className="space-y-1 sm:space-y-1.5">
            {product.features.map((feature, idx) => (
              <li key={idx} className={`text-[10px] sm:text-xs ${theme.textSecondary} flex items-start gap-1.5 sm:gap-2 group/feature`}>
                <span className={`${theme.accent} select-none transition-all duration-200 group-hover/feature:scale-125 text-[8px] sm:text-xs`}>◆</span>
                <span className={`group-hover/feature:${isDark ? 'text-gray-200' : 'text-gray-700'} transition-colors`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl ${theme.gradient} opacity-20 pointer-events-none`} />
    </div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function CoreServicesShowcase() {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('calendarTheme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Save theme preference
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('calendarTheme', newTheme ? 'dark' : 'light');
  };

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

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:py-10 lg:py-19 bg-white">
      {/* Header - Always Light */}
      <div 
        ref={headerRef}
        className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-block mb-6 sm:mb-8 relative">
          <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
            Core Services
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4">
          Everything You Need.
          <br />
          <span className="text-amber-600">One Intelligent Platform.</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-2">
          Discover the complete ecosystem powering modern hotels with Blackstone AI.
        </p>
      </div>
      
      {/* Platform Container - Theme applies inside this frame */}
      <div 
        ref={containerRef}
        className={`rounded-xl sm:rounded-2xl border shadow-sm overflow-hidden transition-all duration-700 ease-out ${
          isDark 
            ? 'bg-gray-800/50 border-gray-700/80 shadow-gray-900/20' 
            : 'bg-white border-gray-200/80 shadow-sm'
        } ${
          containerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Browser Header - Adapts to theme */}
        <div className={`sticky top-0 z-10 backdrop-blur-sm border-b px-3 sm:px-4 md:px-6 py-2.5 sm:py-3.5 flex items-center justify-between transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-800/95 border-gray-700/80' 
            : 'bg-white/95 border-gray-200/80'
        }`}>
          {/* Left - macOS dots and navigation */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Hide dots on very small screens */}
            <div className="hidden sm:flex gap-1.5">
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400/80 hover:bg-red-500 transition-colors cursor-pointer"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-500 transition-colors cursor-pointer"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400/80 hover:bg-green-500 transition-colors cursor-pointer"></span>
            </div>
            <div className={`h-4 sm:h-5 w-px ${isDark ? 'bg-gray-700/80' : 'bg-gray-200/80'}`}></div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button className={`p-1 sm:p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}>
                <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>
              <button className={`p-1 sm:p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}>
                <Maximize2 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
          
          {/* Center - Platform branding */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <span className="text-[6px] sm:text-[7px] md:text-[8px] font-bold text-white tracking-wider">BA</span>
              </div>
              <span className={`text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="hidden xs:inline">Blackstone AI Platform</span>
                <span className="xs:hidden">BA Platform</span>
              </span>
            </div>
            <div className={`h-3 sm:h-4 w-px ${isDark ? 'bg-gray-700/80' : 'bg-gray-200/80'}`}></div>
            <div className={`hidden sm:flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <CalendarDays className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-[8px] sm:text-[10px] font-medium">Dashboard</span>
            </div>
            <div className={`hidden sm:flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-[8px] sm:text-[10px] font-medium">Services</span>
            </div>
          </div>
          
          {/* Right - Action buttons with Dark/Light toggle */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Dark/Light Mode Toggle - Inside frame */}
            <button
              onClick={toggleTheme}
              className={`p-1 sm:p-1.5 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700/50 hover:bg-gray-600/50 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle calendar theme"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </button>
            
            <button className={`hidden sm:block p-1 sm:p-1.5 rounded-lg transition-colors relative ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}>
              <BellRing className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
              <span className="absolute top-0.5 right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-400"></span>
            </button>
            <button className={`hidden sm:block p-1 sm:p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}>
              <Search className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
            </button>
            <button className={`hidden sm:block p-1 sm:p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}>
              <Settings className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
            </button>
            <div className={`h-4 sm:h-5 w-px ${isDark ? 'bg-gray-700/80' : 'bg-gray-200/80'}`}></div>
            <button className={`px-2 sm:px-3 py-1 sm:py-1.5 text-white text-[8px] sm:text-[10px] md:text-xs font-medium rounded-lg transition-colors ${
              isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-900 hover:bg-gray-800'
            }`}>
              <span className="hidden xs:inline">+ New</span>
              <span className="xs:hidden">+</span>
            </button>
          </div>
        </div>
        
        {/* Scrollable Grid - Theme applies here */}
        <div className={`max-h-[600px] sm:max-h-[700px] md:max-h-[900px] overflow-y-auto scrollbar-hide transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="p-3 sm:p-4 md:p-6">
            {/* Grid with consistent heights */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-fr">
              {products.map((product, index) => (
                <ServiceCell 
                  key={index} 
                  product={product} 
                  index={index} 
                  isDark={isDark}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced Bottom Trust Bar - Separated with Highlight */}
          <div className={`sticky bottom-0 backdrop-blur-sm border-t transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800/95 border-gray-700/80' 
              : 'bg-white/95 border-gray-200/80'
          }`}>
            {/* Decorative Top Gradient Line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x relative">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                const { ref, isVisible } = useFadeInOnScroll(0.1);
                
                return (
                  <div 
                    ref={ref}
                    key={index} 
                    className={`group relative px-2 sm:px-3 py-2 sm:py-3 transition-all duration-700 ease-out ${
                      isDark 
                        ? 'hover:bg-gray-700/30' 
                        : 'hover:bg-gray-50'
                    } ${index > 0 && isDark ? 'md:border-l border-gray-700/80' : ''} ${
                      index > 0 && !isDark ? 'md:border-l border-gray-200/80' : ''
                    } ${
                      index > 1 && !isDark ? 'border-t border-gray-200/80 sm:border-t-0' : ''
                    } ${
                      index > 1 && isDark ? 'border-t border-gray-700/80 sm:border-t-0' : ''
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 50}ms` }}
                  >
                    <div className="relative flex items-center gap-2 sm:gap-4">
                      {/* Icon with gradient background */}
                      <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" strokeWidth={1.75} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-2 mb-0.5">
                          <h4 className={`text-[10px] sm:text-xs md:text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'} transition-colors group-hover:${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className={`text-[8px] sm:text-[10px] md:text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} transition-colors truncate sm:truncate-none`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Bottom Decorative Line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-amber-500/50 via-transparent to-amber-500/50" />
          </div>
        </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 480px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }
        @media (max-width: 479px) {
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}