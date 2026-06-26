import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />

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
                className="rounded-xl bg-white px-8 py-4 font-semibold text-black hover:scale-105 transition"
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

                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black font-bold text-xl">
                  B
                </div>

                <div>
                  <h3 className="text-white text-xl font-bold">
                    Blackstone AI
                  </h3>
                  <p className="text-white/50 text-sm">
                    AI Powered Solutions
                  </p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed">
                Empowering businesses with intelligent automation,
                data-driven decisions, and scalable AI innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Quick Links
              </h4>

              <div className="space-y-4">
                <Link href="/" className="block text-white/60 hover:text-cyan-400 transition">
                  Home
                </Link>

                <Link href="/about" className="block text-white/60 hover:text-cyan-400 transition">
                  About Us
                </Link>

                <Link href="/products" className="block text-white/60 hover:text-cyan-400 transition">
                  Products
                </Link>

                <Link href="/contact" className="block text-white/60 hover:text-cyan-400 transition">
                  Contact
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Solutions
              </h4>

              <div className="space-y-4">
                <Link href="#" className="block text-white/60 hover:text-cyan-400 transition">
                  AI Automation
                </Link>

                <Link href="#" className="block text-white/60 hover:text-cyan-400 transition">
                  Predictive Analytics
                </Link>

                <Link href="#" className="block text-white/60 hover:text-cyan-400 transition">
                  Machine Learning
                </Link>

                <Link href="#" className="block text-white/60 hover:text-cyan-400 transition">
                  Custom AI Models
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Stay Updated
              </h4>

              <p className="text-white/60 mb-5">
                Get the latest AI insights and product updates.
              </p>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none backdrop-blur-md"
                />

                <button className="rounded-xl bg-white py-3 text-black font-semibold hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/50 text-sm">
              © 2026 Blackstone AI. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#" className="text-white/50 hover:text-cyan-400 transition">
                Privacy Policy
              </Link>

              <Link href="#" className="text-white/50 hover:text-cyan-400 transition">
                Terms
              </Link>

              <Link href="#" className="text-white/50 hover:text-cyan-400 transition">
                Support
              </Link>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}