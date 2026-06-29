import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

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

        {/* Logo - Now with text next to box */}
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
            <button className="flex items-center gap-1 text-[14px] font-semibold text-black hover:text-neutral-700 transition-colors">
              Platform
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-1 text-[14px] font-semibold text-neutral-600 hover:text-black transition-colors">
              Solutions
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-1 text-[14px] font-semibold text-neutral-600 hover:text-black transition-colors">
              Products
              <ChevronDown size={14} />
            </button>

            <Link
              href="/pricing"
              className="text-[14px] font-semibold text-neutral-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="text-[14px] font-semibold text-neutral-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden md:flex items-center text-[14px] font-semibold text-neutral-600 hover:text-black transition-colors">
            Book Demo
          </button>

          <div className="hidden md:block h-5 w-px bg-neutral-200" />

          <button className="h-8 sm:h-9 px-3 sm:px-4 rounded-lg bg-black text-white text-[12px] sm:text-[13px] font-medium hover:bg-neutral-800 transition-all hover:scale-105 duration-300 whitespace-nowrap">
            Get Started
          </button>

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
        className={`lg:hidden fixed top-[60px] sm:top-[68px] left-0 right-0 bg-white border-b border-neutral-200 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
          <button className="w-full flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-neutral-50 transition-colors text-[14px] sm:text-[15px] font-medium text-black">
            Platform
            <ChevronDown size={18} className="text-neutral-400" />
          </button>

          <button className="w-full flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-neutral-50 transition-colors text-[14px] sm:text-[15px] text-neutral-600">
            Solutions
            <ChevronDown size={18} className="text-neutral-400" />
          </button>

          <button className="w-full flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-neutral-50 transition-colors text-[14px] sm:text-[15px] text-neutral-600">
            Products
            <ChevronDown size={18} className="text-neutral-400" />
          </button>

          <Link
            href="/pricing"
            className="block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-neutral-50 transition-colors text-[14px] sm:text-[15px] text-neutral-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-neutral-50 transition-colors text-[14px] sm:text-[15px] text-neutral-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3 sm:pt-4 border-t border-neutral-200 space-y-3">
            <button className="w-full py-2.5 sm:py-3 rounded-lg text-[14px] sm:text-[15px] font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
              Book Demo
            </button>
            <button className="w-full py-2.5 sm:py-3 rounded-lg bg-black text-white text-[14px] sm:text-[15px] font-medium hover:bg-neutral-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
        @media (max-width: 479px) {
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}