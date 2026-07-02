"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Users,
  Headphones,
  Zap,
  Mail,
  Phone,
  MapPin,
  Shield,
  Star,
  Clock,
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    property: '',
    propertyType: '',
    rooms: '',
    message: '',
  });

  // Simple scroll animation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FDF8F3] pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute left-20 top-20 w-80 h-80 rounded-full bg-orange-300/20 blur-[120px]" />
        <div className="absolute right-20 bottom-10 w-80 h-80 rounded-full bg-amber-200/20 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
             <div className="inline-block mb-4 sm:mb-6 md:mb-8 relative">
          <span className="inline-block text-[10px] sm:text-[8px] md:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.2em] uppercase text-white px-4 sm:px-4 md:px-6 py-1.5 sm:py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg shadow-lg shadow-indigo-500/25 relative">
            Contact Us
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
          </span>
        </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-[-0.02em] mb-4">
              Let's Start a
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Ready to transform your hospitality business? Reach out to our team and
              discover how Blackstone AI can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={sectionRef}>
        <section className=" bg-[#FDF8F3] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div 
              className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-[#F2E8DE] bg-[#FFFDFB] p-4 sm:p-6 md:p-8 lg:p-14 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >

              {/* Background Effects */}
              <div className="absolute -left-20 sm:-left-32 top-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#F7E8D8] blur-[80px] sm:blur-[120px] opacity-60" />
              <div className="absolute -right-20 sm:-right-32 bottom-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FFF0E1] blur-[80px] sm:blur-[120px] opacity-60" />

              <div className="relative z-10">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-8 lg:gap-10 items-start">

                  {/* LEFT SIDE - Content */}
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">

                    <div>
                      <div className="inline-block mb-4 sm:mb-6 lg:mb-8 relative">
                        <span className="inline-block text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-lg shadow-amber-500/25 relative">
                          Get in Touch
                          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg" />
                          <span className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg" />
                        </span>
                      </div>

                      <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                        We'd love to
                        <br />
                        hear from you.
                      </h2>

                      <p className="mt-3 sm:mt-4 lg:mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                        Whether you have a question about our platform, need a custom solution,
                        or want to book a demo — our team is here to help.
                      </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        {
                          title: "24/7 Support",
                          desc: "Our team is available around the clock to assist you.",
                          icon: Headphones
                        },
                        {
                          title: "Fast Response",
                          desc: "Average response time under 2 hours during business hours.",
                          icon: Zap
                        },
                        {
                          title: "Expert Team",
                          desc: "Talk to hospitality industry experts who understand your needs.",
                          icon: Users
                        }
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="
                              bg-white
                              rounded-2xl sm:rounded-3xl
                              p-4 sm:p-5
                              border
                              border-[#F2E8DE]
                              shadow-sm
                              hover:shadow-xl
                              hover:border-amber-300/50
                              transition-all
                              duration-300
                              cursor-pointer
                              hover:-translate-y-1
                            "
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                              transition: `opacity 0.5s ease ${0.1 + index * 0.1}s, transform 0.5s ease ${0.1 + index * 0.1}s`,
                            }}
                          >
                            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mb-2">
                              <Icon size={16} className="text-amber-500" />
                            </div>
                            <h4 className="font-semibold text-slate-900 text-base sm:text-lg">
                              {item.title}
                            </h4>
                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { icon: Mail, label: "Email", value: "hello@blackstoneai.com", href: "mailto:hello@blackstoneai.com" },
                        { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                        { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            className="
                              bg-white
                              rounded-xl sm:rounded-2xl
                              p-3 sm:p-4
                              border
                              border-[#F2E8DE]
                              shadow-sm
                              hover:shadow-lg
                              hover:border-amber-300/50
                              transition-all
                              duration-300
                              text-center
                              group
                              hover:-translate-y-1
                            "
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                              transition: `opacity 0.5s ease ${0.2 + index * 0.1}s, transform 0.5s ease ${0.2 + index * 0.1}s`,
                            }}
                          >
                            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-100 transition-colors">
                              <Icon size={16} className="text-amber-500" />
                            </div>
                            <p className="text-[10px] sm:text-xs text-slate-500">{item.label}</p>
                            <p className="text-[11px] sm:text-sm font-medium text-slate-900 mt-0.5">
                              {item.value}
                            </p>
                          </a>
                        );
                      })}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {[
                        "Trusted by 500+ Hotels",
                        "4.9/5 Average Rating",
                        "99.9% Uptime",
                      ].map((badge, index) => (
                        <div
                          key={badge}
                          className="
                            bg-white
                            border
                            border-[#F2E8DE]
                            rounded-full
                            px-3 sm:px-5
                            py-1.5 sm:py-2.5
                            text-[10px] sm:text-xs
                            font-medium
                            text-slate-700
                            shadow-sm
                          "
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 0.5s ease ${0.3 + index * 0.1}s, transform 0.5s ease ${0.3 + index * 0.1}s`,
                          }}
                        >
                          {badge}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* RIGHT SIDE - Premium Form */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
                      p-5 sm:p-6 lg:p-8
                      bg-gradient-to-br
                      from-slate-950
                      via-slate-900
                      to-slate-800
                      border border-slate-700/50
                      shadow-[0_30px_80px_rgba(15,23,42,0.30)] sm:shadow-[0_40px_120px_rgba(15,23,42,0.35)]
                    "
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                    }}
                  >

                    {/* Glow Effects */}
                    <div className="absolute -top-32 -right-24 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
                    <div className="absolute -bottom-32 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                    <div className="relative z-10">

                      {/* Trust Badge */}
                      <div className="mb-3 sm:mb-5 flex items-center gap-2 sm:gap-3">
                        <div className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium text-slate-300">
                          Trusted by 500+ Hotels & Resorts
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        Request a Demo
                      </h3>

                      <p className="mt-2 sm:mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        Discover how Blackstone AI helps hotels increase bookings,
                        automate operations, and deliver exceptional guest experiences.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-amber-400 text-xs sm:text-sm"
                          />
                          <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-amber-400 text-xs sm:text-sm"
                          />
                        </div>

                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Business Email"
                          className="w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-amber-400 text-xs sm:text-sm"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-amber-400 text-xs sm:text-sm"
                          />
                          <input
                            name="property"
                            value={formData.property}
                            onChange={handleChange}
                            placeholder="Property Name"
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-amber-400 text-xs sm:text-sm"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm"
                          >
                            <option className="text-slate-900" value="">Property Type</option>
                            <option className="text-slate-900" value="hotel">Hotel</option>
                            <option className="text-slate-900" value="resort">Resort</option>
                            <option className="text-slate-900" value="villa">Villa</option>
                            <option className="text-slate-900" value="homestay">Homestay</option>
                          </select>

                          <select
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm"
                          >
                            <option className="text-slate-900" value="">Number of Rooms</option>
                            <option className="text-slate-900" value="1-20">1-20</option>
                            <option className="text-slate-900" value="21-50">21-50</option>
                            <option className="text-slate-900" value="51-100">51-100</option>
                            <option className="text-slate-900" value="100+">100+</option>
                          </select>
                        </div>

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us your biggest operational challenge..."
                          className="
                            w-full
                            p-3 sm:p-4
                            rounded-lg sm:rounded-xl
                            bg-white/5
                            border border-white/10
                            text-white
                            placeholder:text-slate-400
                            resize-none
                            outline-none
                            focus:border-amber-400
                            text-xs sm:text-sm
                          "
                        />

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "✓ Free Consultation",
                            "✓ Custom Walkthrough",
                            "✓ No Commitment",
                            "✓ Fast Implementation",
                          ].map((benefit) => (
                            <div key={benefit} className="text-[10px] sm:text-xs text-slate-300">
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <button
                          type="submit"
                          className="
                            w-full
                            h-10 sm:h-11
                            rounded-full
                            bg-gradient-to-r
                            from-amber-500
                            to-orange-500
                            text-white
                            font-semibold
                            text-xs sm:text-sm
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-amber-500/25
                          "
                        >
                          Schedule My Demo
                        </button>

                        <p className="text-center text-[8px] sm:text-[10px] text-slate-400">
                          By submitting this form, you agree to receive communications
                          about Blackstone AI products and services.
                        </p>

                      </form>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

{/* Map Section - Premium Google Maps with Marker */}
<div>
  <section className="py-8 sm:py-12 bg-white border-t border-[#F2E8DE]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[300px] lg:h-[400px] border border-[#F2E8DE] shadow-sm">
        
        {/* Google Maps Iframe with Marker */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094247!2d-122.41941548468141!3d37.77492977975955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3e2f9a8b%3A0x8b7a2e2c8c7b8a2e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&markers=color:red%7C37.774929,-122.419415"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          title="Blackstone AI Location"
        />
        
        {/* Premium Overlay Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-white/20 max-w-sm mx-auto sm:mx-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 font-semibold text-sm sm:text-base">San Francisco Headquarters</p>
                <p className="text-slate-500 text-xs sm:text-sm">123 Market Street, Suite 400</p>
                <a 
                  href="https://maps.google.com/maps?daddr=San+Francisco+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-medium mt-1 transition-colors"
                >
                  Get Directions
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        
        {/* Full Screen Button */}
        <button 
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors flex items-center justify-center text-slate-600 hover:text-slate-900"
          onClick={() => {
            const map = document.querySelector('iframe');
            if (map) {
              // @ts-ignore
              if (map.requestFullscreen) {
                // @ts-ignore
                map.requestFullscreen();
              }
            }
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</div>

      {/* FAQ Section */}


      {/* CTA Section */}

          <Footer />
    </main>
  );
}