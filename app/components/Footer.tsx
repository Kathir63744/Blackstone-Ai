"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Check if link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <footer className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10">

        {/* Top CTA */}
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

              <div>
                <h2 className="text-1xl md:text-3xl font-bold text-white">
                  Ready to transform
                  your business?
                </h2>

                <p className="mt-4 text-white/70 max-w-xl">
                  Unlock growth, automate operations, and drive innovation
                  with intelligent AI solutions.
                </p>
              </div>

              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-500 px-8 py-4 font-semibold text-white hover:scale-105 transition shadow-lg shadow-amber-500/25"
              >
                Book a Demo →
              </Link>

            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-amber-500 font-bold text-xl">
                  B
                </div>

                <div>
                  <h3 className="text-white text-xl font-bold">
                    Blackstone AI
                  </h3>
                  <p className="text-white/50 text-sm">
                    Hospitality Intelligence
                  </p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed">
                Empowering hospitality businesses with intelligent automation,
                data-driven decisions, and scalable AI innovation.
              </p>
            </div>

            {/* Quick Links - Matching Navbar */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Quick Links
              </h4>

              <div className="space-y-4">
                <Link 
                  href="/platform" 
                  className={`block transition ${
                    isActive('/platform') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Platform
                </Link>

                <Link 
                  href="/products" 
                  className={`block transition ${
                    isActive('/products') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Products
                </Link>

                <Link 
                  href="/pricing" 
                  className={`block transition ${
                    isActive('/pricing') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Pricing
                </Link>

                <Link 
                  href="/contact" 
                  className={`block transition ${
                    isActive('/contact') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Products - All Product Navlinks */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Platform Solutions
              </h4>

              <div className="space-y-3">
                <Link 
                  href="/products/independent-hotels" 
                  className={`block transition text-sm ${
                    isActive('/products/independent-hotels') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Independent Hotels
                </Link>

                <Link 
                  href="/products/boutique-stays" 
                  className={`block transition text-sm ${
                    isActive('/products/boutique-stays') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Boutique Stays
                </Link>

                <Link 
                  href="/products/hostels" 
                  className={`block transition text-sm ${
                    isActive('/products/hostels') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Hostels
                </Link>

                <Link 
                  href="/products/vacation-rentals" 
                  className={`block transition text-sm ${
                    isActive('/products/vacation-rentals') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Vacation Rentals
                </Link>

                <Link 
                  href="/products/groups-chains" 
                  className={`block transition text-sm ${
                    isActive('/products/groups-chains') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Groups & Chains
                </Link>

                <Link 
                  href="/products/revenue-teams" 
                  className={`block transition text-sm ${
                    isActive('/products/revenue-teams') 
                      ? 'text-amber-400' 
                      : 'text-white/60 hover:text-amber-400'
                  }`}
                >
                  Revenue Teams
                </Link>
              </div>
            </div>

            {/* Solutions / Features */}
            <div>
              <h4 className="text-white font-semibold mb-6">
               Our Products
              </h4>

              <div className="space-y-4">
                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  AI Automation
                </Link>

                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  Revenue Management
                </Link>

                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  Guest Experience
                </Link>

                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  Operations & Analytics
                </Link>

                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  Channel Management
                </Link>

                <Link 
                  href="#" 
                  className="block text-white/60 hover:text-amber-400 transition"
                >
                  Booking Engine
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/50 text-sm">
              © 2026 Blackstone AI. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link 
                href="#" 
                className="text-white/50 hover:text-amber-400 transition"
              >
                Privacy Policy
              </Link>

              <Link 
                href="#" 
                className="text-white/50 hover:text-amber-400 transition"
              >
                Terms
              </Link>

              <Link 
                href="#" 
                className="text-white/50 hover:text-amber-400 transition"
              >
                Support
              </Link>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}