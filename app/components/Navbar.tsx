"use client"
import { ChevronDown, Menu, X, Building2, Globe, Layers, Zap, LayoutDashboard, MessageSquare, BarChart3, Package, Utensils, Sparkles, Building, Star, Users, Calendar, Brain, Smartphone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { products } from "../products/data/products";
import { Product } from "../products/types";

// Icon mapping type
type IconMap = Record<string, any>;

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fade in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover delay handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  // Check if link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Get product color based on title
  const getProductColor = (productTitle: string) => {
    const colorMap: Record<string, string> = {
      "Google Hotel Ads & Booking": "blue",
      "Hotel Website Development": "emerald",
      "Channel Management Platform": "purple",
      "AI Dynamic Pricing Engine": "orange",
      "Front Office Management": "rose",
      "WhatsApp Automation Suite": "indigo",
      "Revenue Management System": "teal",
      "POS & Inventory Management": "sky",
      "Restaurant Management System": "amber",
      "Housekeeping Management": "cyan",
      "Multi-Property Operations": "violet",
      "Guest Reputation Management": "pink",
      "Customer Relationship Management": "lime",
      "Booking & Reservation Management": "fuchsia",
      "Analytics & Business Intelligence": "slate",
      "Guest Mobile Experience": "red",
    };
    return colorMap[productTitle] || "amber";
  };

  // Get product color classes
  const getProductColorClasses = (productTitle: string) => {
    const color = getProductColor(productTitle);
    const colorClassMap: Record<string, { bg: string, hover: string, text: string, hoverText: string, gradient: string }> = {
      blue: {
        bg: "bg-blue-50",
        hover: "group-hover:bg-blue-100",
        text: "text-blue-500",
        hoverText: "group-hover:text-blue-600",
        gradient: "from-blue-50 to-blue-100/50"
      },
      emerald: {
        bg: "bg-emerald-50",
        hover: "group-hover:bg-emerald-100",
        text: "text-emerald-500",
        hoverText: "group-hover:text-emerald-600",
        gradient: "from-emerald-50 to-emerald-100/50"
      },
      purple: {
        bg: "bg-purple-50",
        hover: "group-hover:bg-purple-100",
        text: "text-purple-500",
        hoverText: "group-hover:text-purple-600",
        gradient: "from-purple-50 to-purple-100/50"
      },
      orange: {
        bg: "bg-orange-50",
        hover: "group-hover:bg-orange-100",
        text: "text-orange-500",
        hoverText: "group-hover:text-orange-600",
        gradient: "from-orange-50 to-orange-100/50"
      },
      rose: {
        bg: "bg-rose-50",
        hover: "group-hover:bg-rose-100",
        text: "text-rose-500",
        hoverText: "group-hover:text-rose-600",
        gradient: "from-rose-50 to-rose-100/50"
      },
      indigo: {
        bg: "bg-indigo-50",
        hover: "group-hover:bg-indigo-100",
        text: "text-indigo-500",
        hoverText: "group-hover:text-indigo-600",
        gradient: "from-indigo-50 to-indigo-100/50"
      },
      teal: {
        bg: "bg-teal-50",
        hover: "group-hover:bg-teal-100",
        text: "text-teal-500",
        hoverText: "group-hover:text-teal-600",
        gradient: "from-teal-50 to-teal-100/50"
      },
      sky: {
        bg: "bg-sky-50",
        hover: "group-hover:bg-sky-100",
        text: "text-sky-500",
        hoverText: "group-hover:text-sky-600",
        gradient: "from-sky-50 to-sky-100/50"
      },
      amber: {
        bg: "bg-amber-50",
        hover: "group-hover:bg-amber-100",
        text: "text-amber-500",
        hoverText: "group-hover:text-amber-600",
        gradient: "from-amber-50 to-amber-100/50"
      },
      cyan: {
        bg: "bg-cyan-50",
        hover: "group-hover:bg-cyan-100",
        text: "text-cyan-500",
        hoverText: "group-hover:text-cyan-600",
        gradient: "from-cyan-50 to-cyan-100/50"
      },
      violet: {
        bg: "bg-violet-50",
        hover: "group-hover:bg-violet-100",
        text: "text-violet-500",
        hoverText: "group-hover:text-violet-600",
        gradient: "from-violet-50 to-violet-100/50"
      },
      pink: {
        bg: "bg-pink-50",
        hover: "group-hover:bg-pink-100",
        text: "text-pink-500",
        hoverText: "group-hover:text-pink-600",
        gradient: "from-pink-50 to-pink-100/50"
      },
      lime: {
        bg: "bg-lime-50",
        hover: "group-hover:bg-lime-100",
        text: "text-lime-500",
        hoverText: "group-hover:text-lime-600",
        gradient: "from-lime-50 to-lime-100/50"
      },
      fuchsia: {
        bg: "bg-fuchsia-50",
        hover: "group-hover:bg-fuchsia-100",
        text: "text-fuchsia-500",
        hoverText: "group-hover:text-fuchsia-600",
        gradient: "from-fuchsia-50 to-fuchsia-100/50"
      },
      slate: {
        bg: "bg-slate-50",
        hover: "group-hover:bg-slate-100",
        text: "text-slate-500",
        hoverText: "group-hover:text-slate-600",
        gradient: "from-slate-50 to-slate-100/50"
      },
      red: {
        bg: "bg-red-50",
        hover: "group-hover:bg-red-100",
        text: "text-red-500",
        hoverText: "group-hover:text-red-600",
        gradient: "from-red-50 to-red-100/50"
      },
    };
    return colorClassMap[color] || colorClassMap.amber;
  };

  // Icon mapping function - returns icon component
  const getProductIcon = (productTitle: string) => {
    const iconMap: IconMap = {
      "Google Hotel Ads & Booking": Building2,
      "Hotel Website Development": Globe,
      "Channel Management Platform": Layers,
      "AI Dynamic Pricing Engine": Zap,
      "Front Office Management": LayoutDashboard,
      "WhatsApp Automation Suite": MessageSquare,
      "Revenue Management System": BarChart3,
      "POS & Inventory Management": Package,
      "Restaurant Management System": Utensils,
      "Housekeeping Management": Sparkles,
      "Multi-Property Operations": Building,
      "Guest Reputation Management": Star,
      "Customer Relationship Management": Users,
      "Booking & Reservation Management": Calendar,
      "Analytics & Business Intelligence": Brain,
      "Guest Mobile Experience": Smartphone,
    };
    return iconMap[productTitle] || Building2;
  };

  // Product subtitle mapping for dropdown
  const getProductSubtitle = (productTitle: string) => {
    const subtitleMap: Record<string, string> = {
      "Google Hotel Ads & Booking": "Commission-free direct bookings",
      "Hotel Website Development": "Turn visitors into guests",
      "Channel Management Platform": "Stay perfectly synchronized",
      "AI Dynamic Pricing Engine": "Maximize revenue automatically",
      "Front Office Management": "Better guest experiences",
      "WhatsApp Automation Suite": "Engage guests instantly",
      "Revenue Management System": "Boost hotel profitability",
      "POS & Inventory Management": "Simplify daily operations",
      "Restaurant Management System": "Speed up food service",
      "Housekeeping Management": "Keep rooms ready faster",
      "Multi-Property Operations": "Manage all hotels from one place",
      "Guest Reputation Management": "Build trust and credibility",
      "Customer Relationship Management": "Create loyal guests",
      "Booking & Reservation Management": "Handle bookings effortlessly",
      "Analytics & Business Intelligence": "Make smarter decisions",
      "Guest Mobile Experience": "Modernize every stay",
    };
    return subtitleMap[productTitle] || "Premium hospitality solution";
  };

  return (
    <header 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-8'
        } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto h-[60px] sm:h-[68px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black flex items-center justify-center">
            <span className="text-amber-500 text-[10px] sm:text-xs font-bold">B</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[13px] sm:text-[15px] text-amber-500 font-semibold leading-none">
              Blackstone AI
            </h2>
            <p className="text-[8px] sm:text-[10px] text-neutral-500 uppercase tracking-[0.12em] sm:tracking-[0.15em] mt-0.5 sm:mt-1">
              Hospitality Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center gap-6 xl:gap-8">
            <Link
              href="/platform"
              className={`text-[14px] font-semibold transition-colors ${
                isActive('/platform') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Platform
            </Link>

            {/* Products Dropdown */}
            <div 
              ref={productsRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 text-[14px] font-semibold transition-colors ${
                  isProductsOpen || isActive('/products') ? 'text-black' : 'text-neutral-600 hover:text-black'
                }`}
              >
                Products
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu - 4 columns with themed colors */}
              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[920px] max-h-[460px] overflow-y-auto scrollbar-hide bg-white rounded-2xl shadow-2xl border border-neutral-200/80 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-4 gap-3">
                    {products.map((product: Product) => {
                      const Icon = getProductIcon(product.title);
                      const subtitle = getProductSubtitle(product.title);
                      const colorClasses = getProductColorClasses(product.title);
                      const isProductActive = isActive(`/products/${product.slug}`);
                      
                      return (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] border ${
                            isProductActive
                              ? 'bg-neutral-50 border-neutral-200/80 shadow-sm'
                              : 'border-transparent hover:border-neutral-200/80 hover:shadow-sm hover:bg-neutral-50'
                          }`}
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {/* Themed Icon with gradient background */}
                          <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${colorClasses.gradient} ${colorClasses.bg} ${colorClasses.hover} transition-all duration-200 flex items-center justify-center shadow-sm group-hover:shadow-md`}>
                            <Icon className={`w-5 h-5 ${colorClasses.text} ${colorClasses.hoverText} transition-colors`} strokeWidth={1.75} />
                          </div>
                          
                          {/* Text content with themed colors on hover */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-semibold ${isProductActive ? 'text-black' : 'text-neutral-900'} ${colorClasses.hoverText} transition-colors leading-tight`}>
                              {product.title}
                            </h4>
                            <p className={`text-xs ${isProductActive ? 'text-neutral-700' : 'text-neutral-500'} ${colorClasses.hoverText.replace('hover:', 'group-hover:')} transition-colors mt-0.5 leading-tight line-clamp-1`}>
                              {subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                  {/* View All Products Link */}
                  <div className="mt-4 pt-3 border-t border-neutral-200/80">
                    <Link
                      href="/products"
                      className={`flex items-center justify-center gap-2 text-sm font-semibold transition-colors group ${
                        isActive('/products') ? 'text-amber-500' : 'text-black hover:text-amber-500'
                      }`}
                      onClick={() => setIsProductsOpen(false)}
                    >
                      View All Products
                      <ChevronDown size={16} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={`text-[14px] font-semibold transition-colors ${
                isActive('/pricing') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={`text-[14px] font-semibold transition-colors ${
                isActive('/contact') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/get-started"
            className={`h-8 sm:h-9 px-3 sm:px-4 rounded-lg text-[12px] sm:text-[13px] font-medium transition-all hover:scale-105 duration-300 whitespace-nowrap flex items-center ${
              isActive('/get-started') || isActive('/book-demo')
                ? 'bg-black text-white'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            Book Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-[60px] sm:top-[68px] left-0 right-0 bg-white border-b border-neutral-200 shadow-xl transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-68px)] ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
          <Link
            href="/platform"
            className={`block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-[14px] sm:text-[15px] font-medium ${
              isActive('/platform') 
                ? 'bg-neutral-100 text-black' 
                : 'text-black hover:bg-neutral-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Platform
          </Link>

          {/* Products Section in Mobile with themed colors */}
          <div className="space-y-2">
            <div className={`py-2.5 sm:py-3 px-3 sm:px-4 text-[14px] sm:text-[15px] font-semibold ${
              isActive('/products') ? 'text-amber-500' : 'text-black'
            }`}>
              Products
            </div>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {products.map((product: Product) => {
                const Icon = getProductIcon(product.title);
                const subtitle = getProductSubtitle(product.title);
                const colorClasses = getProductColorClasses(product.title);
                const isProductActive = isActive(`/products/${product.slug}`);
                
                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className={`flex flex-col items-center text-center gap-1.5 p-3 rounded-lg transition-colors border ${
                      isProductActive
                        ? 'bg-neutral-50 border-neutral-200/80'
                        : 'border-transparent hover:border-neutral-200/80 hover:bg-neutral-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses.gradient} ${colorClasses.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colorClasses.text}`} strokeWidth={1.75} />
                    </div>
                    <div className="w-full">
                      <div className={`text-xs font-semibold ${isProductActive ? 'text-black' : 'text-neutral-900'} leading-tight`}>
                        {product.title}
                      </div>
                      <div className={`text-[10px] ${isProductActive ? 'text-neutral-700' : 'text-neutral-500'} mt-0.5 leading-tight line-clamp-1`}>
                        {subtitle}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/pricing"
            className={`block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-[14px] sm:text-[15px] ${
              isActive('/pricing') 
                ? 'bg-neutral-100 text-black font-medium' 
                : 'text-neutral-600 hover:bg-neutral-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className={`block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-[14px] sm:text-[15px] ${
              isActive('/contact') 
                ? 'bg-neutral-100 text-black font-medium' 
                : 'text-neutral-600 hover:bg-neutral-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3 sm:pt-4 border-t border-neutral-200 space-y-3">
            <Link
              href="/get-started"
              className={`block w-full py-2.5 sm:py-3 rounded-lg text-[14px] sm:text-[15px] font-medium transition-colors text-center ${
                isActive('/get-started') || isActive('/book-demo')
                  ? 'bg-black text-white'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Global styles for hiding scrollbar and line-clamp */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </header>
  );
}