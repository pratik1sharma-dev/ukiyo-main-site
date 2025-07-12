"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

const heroSlides = [
  {
    image: "/hero-bg.jpg",
    headline: "Between soil and skyline, we imagine what’s next.",
    subheadline: "We design landscapes, cities, and sustainable water systems that return value — to the earth, to people, and to generations not yet born. Our work is both gentle and urgent",
    buttons: [
      { label: "Explore Our Work", href: "/projects", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" }
    ], 
  },
  {
    image: "/hero-bg-1.jpg",
    headline: "Where Ecology Meets Imagination.",
    subheadline: "We design for the future, creating sustainable and visionary spaces that last for generations.",
    buttons: [
      { label: "Explore Our Services", href: "/services", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-2.jpg",
    headline: "Co-Designing With Communities, Not Just for Them",
    subheadline: "Our process is participatory. We listen, sketch, and build together, turning collective knowledge into living landscapes. Great design is a shared journey.",
    buttons: [
      { label: "See How We Work", href: "/about", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-3.jpg",
    headline: "Exploring Technology That Listens",
    subheadline: "We use advanced tools like AI and data analysis not just to build faster, but to design smarter. Our technology helps us create responsive, intelligent landscapes that truly serve the people who use them",
    buttons: [
      { label: "Collaborate with us", href: "/services-extended", style: "bg-transparent border border-black text-[#232323] hover:bg-[#f2ede7]" },
    ],
  },
];

// AnimatedCounter component
function AnimatedCounter({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [to, duration, count, isClient]);

  useEffect(() => {
    if (isClient) {
      return rounded.on("change", (v) => {
        if (ref.current) ref.current.textContent = v.toString();
      });
    }
  }, [rounded, isClient]);

  return <span ref={ref}>{isClient ? "0" : to.toString()}</span>;
}

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // 4 seconds per image
    return () => clearInterval(interval);
  }, []);

  const current = heroSlides[bgIndex];

  return (
    <div className="min-h-screen bg-[#f6f2ed] flex flex-col items-center font-sans">
      {/* Parallax Background Wrapper for Navbar + Hero */}
      <div className="w-full relative">
        {/* Carousel Background Images */}
        {heroSlides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === bgIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            style={{ pointerEvents: 'none' }}
            aria-hidden="true"
          />
        ))}
        {/* Hero Section - Fullscreen Carousel */}
        <section
          className="relative flex flex-col items-start justify-end px-4 sm:px-0 bg-transparent overflow-hidden z-10"
          style={{ minHeight: '100vh', height: '100svh', maxHeight: '100svh' }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-start justify-end h-full w-full max-w-2xl pb-16 pl-6 sm:pb-24 sm:pl-12">
            <h1 className="font-[var(--font-cormorant)] text-2xl sm:text-4xl font-bold text-white leading-tight mb-3 drop-shadow-xl">{current.headline}</h1>
            <p className="text-base sm:text-lg text-white mb-6 max-w-xl drop-shadow-lg">{current.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {current.buttons.map((btn, idx) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={`font-semibold rounded-full px-6 py-2 transition-colors shadow-md text-sm sm:text-base ${btn.style}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 gap-3 z-20 absolute bottom-8 left-0 right-0">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setBgIndex(i)}
                className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${bgIndex === i ? 'bg-[#e7a77e] scale-125 shadow-lg' : 'bg-white/70 hover:bg-[#e7a77e]/60'}`}
                aria-label={`Go to slide ${i + 1}`}
                style={{ outline: 'none' }}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Vision Statement */}
      <motion.section
        className="w-full bg-[#f6f2ed] min-h-screen flex items-center justify-center px-4 py-8 md:py-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main vision statement */}
          <h2 className="text-3xl sm:text-5xl font-bold text-[#232323] font-[var(--font-cormorant)] mb-6 leading-tight">
            We shape places that listen
            <br />
            <span className="text-[#e7a77e]">— to people, to climate, and to change.</span>
          </h2>
          
          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-[#6b7280] mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Whether it's a stormwater edge or a city's identity, our work responds to the moment while staying rooted in what truly matters — land, care, and time.
          </p>
          
          {/* CTA Button with enhanced styling */}
          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-[#f59e42] to-[#e7a77e] hover:from-[#ea580c] hover:to-[#e38d5f] text-white font-semibold rounded-full px-10 py-4 transition-all duration-300 shadow-lg hover:shadow-xl text-lg group">
              Start a Conversation
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-12">
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#e7d8c9] to-transparent rounded-full"></div>
          </div>
        </div>
      </motion.section>
      {/* Section Divider */}
      <div className="w-full flex justify-center py-4">
        <div className="h-1 w-32 bg-gradient-to-r from-[#e7d8c9]/0 via-[#e7d8c9] to-[#e7d8c9]/0 rounded-full" />
      </div>

      {/* Who We Are (About Us Preview) Section */}
      <section className="w-full bg-white min-h-screen flex items-center justify-center px-4 py-8 md:py-0 border-y border-[#e7d8c9]">
        <div className="max-w-6xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6 font-[var(--font-cormorant)] leading-tight">
            Reimagining Urban Life.
            <br />
            <span className="text-[#e7a77e]">One Detail at a Time.</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-[#232323] mb-8 max-w-4xl mx-auto leading-relaxed">
            Ukiyo Habitat is a collaborative design studio working at the intersection of landscape architecture, urban design, and social innovation.
          </p>
      
          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Project 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/projects/Texas-us-main.jpg" 
                alt="Frontyard Park Design" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">Frontyard Park Design</h3>
                <p className="text-sm text-white/90">Texas, USA</p>
              </div>
              {/* Hover overlay for additional info */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium">Click to view project details</p>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/project-2.jpg" 
                alt="Sustainable Campus" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">Sustainable Campus</h3>
                <p className="text-sm text-white/90">Mumbai, India</p>
              </div>
              {/* Hover overlay for additional info */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium">Click to view project details</p>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/project-3.jpg" 
                alt="Waterfront Development" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">Waterfront Development</h3>
                <p className="text-sm text-white/90">Chennai, India</p>
              </div>
              {/* Hover overlay for additional info */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium">Click to view project details</p>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/project-4.jpg" 
                alt="Green Infrastructure" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">Green Infrastructure</h3>
                <p className="text-sm text-white/90">Bangalore, India</p>
              </div>
              {/* Hover overlay for additional info */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium">Click to view project details</p>
                </div>
              </div>
            </div>
          </div>
          
          <a href="/about" className="inline-block text-[#e7a77e] hover:underline font-semibold text-base">Learn more about us &rarr;</a>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center py-4">
        <div className="h-1 w-32 bg-gradient-to-r from-[#e7d8c9]/0 via-[#e7d8c9] to-[#e7d8c9]/0 rounded-full" />
      </div>
      
      {/* What We Do (Services Preview) Section */}
      <motion.section
        className="w-full bg-[#f6f2ed] min-h-screen flex items-center justify-center px-4 py-8 md:py-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-12 text-center font-[var(--font-cormorant)] leading-tight">
            Services that Shape
            <br />
            <span className="text-[#e7a77e]">Cities and Consciousness.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {/* First row: 3 cards */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
              <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14" /><path d="M24 38v-8" /><path d="M12 36c4 0 8-4 12-4s8 4 12 4" /></svg>
              <h3 className="mt-4 text-lg font-semibold text-[#232323]">Landscape Architecture</h3>
              <p className="mt-2 text-sm text-[#232323]">Public parks, campuses, green infrastructure</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
              <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><rect x="10" y="20" width="8" height="18" /><rect x="22" y="12" width="8" height="26" /><rect x="34" y="26" width="8" height="12" /></svg>
              <h3 className="mt-4 text-lg font-semibold text-[#232323]">Urban Design</h3>
              <p className="mt-2 text-sm text-[#232323]">Resilient streetscapes, transit-oriented development (TODs), and neighborhood revitalization.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
              <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><rect x="12" y="28" width="24" height="10" /><path d="M24 28V18" /><circle cx="24" cy="14" r="4" /></svg>
              <h3 className="mt-4 text-lg font-semibold text-[#232323]">Interior Environments</h3>
              <p className="mt-2 text-sm text-[#232323]">Sensory-rich interiors that are deeply connected to their context.</p>
            </div>
            {/* Second row: 2 cards centered */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center gap-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
                <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="18" r="8" /><path d="M24 26c-8 0-12 4-12 8v4h24v-4c0-4-4-8-12-8z" /></svg>
                <h3 className="mt-4 text-lg font-semibold text-[#232323]">Brand & Visual Communication</h3>
                <p className="mt-2 text-sm text-[#232323]">Campaigns and graphics for social impact</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
                <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><rect x="14" y="14" width="20" height="20" rx="4" /><path d="M24 18v8" /><circle cx="24" cy="30" r="2" /></svg>
                <h3 className="mt-4 text-lg font-semibold text-[#232323]">Speculative Futures & Workshops</h3>
                <p className="mt-2 text-sm text-[#232323]">Innovation workshops, strategic research, and collaborative design studios.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clients & Stats Section */}
      <motion.section
        className="w-full bg-white min-h-screen flex items-center justify-center px-4 py-8 md:py-0 border-y border-[#e7d8c9]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6 font-[var(--font-cormorant)] leading-tight">
            We work with those who
            <br />
            <span className="text-[#e7a77e]">value what design can do.</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-[#232323] mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            From institutions and infrastructure bodies to artists, educators, and small businesses — our clients come to us not just for solutions, but for possibilities.
          </p>
          
          {/* Stats Row */}
          <div className="bg-gradient-to-r from-[#f6f2ed] to-[#f2ede7] rounded-2xl p-8 mb-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#e7a77e] rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#232323] font-[var(--font-cormorant)]">
                  <AnimatedCounter to={15} duration={2.2} />+ years
                </div>
                <div className="text-sm text-[#6b7280] font-medium">of team experience</div>
              </div>
              <div className="w-px h-16 bg-[#e7d8c9] hidden sm:block" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f59e42] rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#232323] font-[var(--font-cormorant)]">
                  <AnimatedCounter to={50} duration={2.2} />+ projects
                </div>
                <div className="text-sm text-[#6b7280] font-medium">across 8 cities</div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Kahwa */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/kahwa-logo.png" alt="Kahwa Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Cover and Pax */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/cover-and-pax-logo.png" alt="Cover and Pax Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Haldiram */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/haldiram-logo.png" alt="Haldiram Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Indian Navy */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/indian-navy-logo.png" alt="Indian Navy Logo" className="h-12 mb-2 object-contain" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rooted in India. Open to the world. Section */}
      <motion.section
        className="w-full bg-[#f6f2ed] min-h-screen flex items-center justify-center px-4 py-8 md:py-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="max-w-4xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <h3 className="text-2xl sm:text-4xl font-bold text-[#232323] mb-6 font-[var(--font-cormorant)] leading-tight">
            Rooted in India.
            <br />
            <span className="text-[#e7a77e]">Open to the world.</span>
          </h3>
          
          {/* Content in two columns for better readability */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left column - India context */}
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#e7a77e] rounded-full flex items-center justify-center mr-3">
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#232323] font-[var(--font-cormorant)]">Our Foundation</h4>
              </div>
              <p className="text-base sm:text-lg text-[#232323] font-light leading-relaxed">
                Our foundation is built on India's rich tapestry of urban complexity, ecological urgency, and cultural depth. This unique context shapes every project we undertake, infusing our work with authenticity and purpose.
              </p>
            </div>
            
            {/* Right column - Global perspective */}
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#f59e42] rounded-full flex items-center justify-center mr-3">
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#232323] font-[var(--font-cormorant)]">Global Vision</h4>
              </div>
              <p className="text-base sm:text-lg text-[#232323] font-light leading-relaxed">
                Our global vision extends beyond borders. We engage with worldwide conversations on climate resilience, sustainable urbanism, and future cities, while maintaining our commitment to local specificity and cultural sensitivity.
              </p>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#e7d8c9] to-transparent rounded-full"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
