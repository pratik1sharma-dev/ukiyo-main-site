"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

const heroSlides = [
  {
    image: "/hero-bg.jpg",
    headline: "Between soil and skyline, we imagine what’s next.",
    subheadline: "Ukiyo Habitat is a landscape and urban design studio working at the intersection of ecology, infrastructure, and public life. We create gardens, parks, campuses, streetscapes, and water-sensitive landscapes that give back — to the environment and to communities.",
    buttons: [
      { label: "Explore Our Work", href: "/projects", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" }
    ],
  },
  {
    image: "/hero-bg-1.jpg",
    headline: "Where Ecology Meets Imagination.",
    subheadline: "We craft future-ready design solutions that respond to climate change, ecological systems, and urban resilience. Our work blends science, design, and systems thinking — shaping landscapes and spaces that are visionary, sustainable, and built to last.",
    buttons: [
      { label: "Explore Our Services", href: "/services", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-2.jpg",
    headline: "Designing With People, Not Just for Them",
    subheadline: "Our design process centers on participation and deep listening. We see ourselves as facilitators, not just consultants—co-creating with users and stakeholders to build spaces everyone can truly own.",
    buttons: [
      { label: "Our Philosophy", href: "/about", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-3.jpg",
    headline: "Smarter Design for a Changing World",
    subheadline: "We use AI, GIS, and spatial data to design smarter, more responsive spaces. Technology lets us map, simulate, and create resilient, people-centric environments. By collaborating with technologists and researchers, we co-create tools for sustainable, inclusive cities and landscapes.",
    buttons: [
      { label: "Let's Collaborate", href: "/contact", style: "bg-transparent border border-black text-[#232323] hover:bg-[#f2ede7]" },
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
        className="w-full bg-[#f0ebe6] min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl xl:max-w-7xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main vision statement */}
          <h2 className="text-3xl sm:text-5xl font-bold text-[#232323] font-[var(--font-cormorant)] mb-6 leading-tight">
            We Shape Places That Respond — To People, Climate, and Context.
          </h2>
          
          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-[#6b7280] mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Our landscapes, streets, campuses, and spaces aren’t just built — they’re grown from listening. To rain patterns. To neighbourhood stories. To local materials and future needs.<br/>
            From a stormwater edge to a city’s visual identity, every design is our response to care, context, and climate.
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
      <div className="w-full flex justify-center py-8">
        <div className="h-1 w-32 bg-gradient-to-r from-[#e7d8c9]/0 via-[#e7d8c9] to-[#e7d8c9]/0 rounded-full" />
      </div>

      {/* Who We Are (About Us Preview) Section */}
      {/* Removed as per latest instructions */}

      {/* What We Do / Project Showcase Section */}
      <motion.section
        className="w-full bg-white min-h-screen flex items-center justify-center px-4 py-16 md:py-24 border-y border-[#e7d8c9]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4 text-center font-[var(--font-cormorant)] leading-tight">
            What We Do, Through What We’ve Done
          </h2>
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#232323] mb-4 text-center font-light max-w-3xl mx-auto leading-relaxed">
            Each project is a conversation — with land, with people, and with possibility.<br/>
            Explore how our work translates values into space, and vision into impact.
          </p>
          {/* Optional Body Copy */}
          <p className="text-base sm:text-lg text-[#6b7280] mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            From landscape-led masterplans to co-designed public spaces, these stories show our design thinking in action. Click through to dive deeper into each discipline — and see how design becomes a tool for equity, ecology, and everyday life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Landscape Architecture */}
            <div className="bg-[#f6f2ed] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
              <div className="relative w-full mb-8">
                <img src="/projects/Texas-us-main.jpg" alt="Frontyard Park Design" className="w-full h-80 object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl flex items-center justify-center">
                  Frontyard Park Design, Texas, USA
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">Landscape Architecture</h3>
              <a href="/projects" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">Explore Landscape Design →</a>
            </div>
            {/* Interior Environments */}
            <div className="bg-[#f6f2ed] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
              <div className="relative w-full mb-8">
                <img src="/projects/qsr-gurgaon.jpg" alt="A Studio that Breathes" className="w-full h-80 object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl flex items-center justify-center">
                  A Studio that Breathes, QSR Outlet, Gurgaon
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">Interior Environments</h3>
              <a href="/projects#interiors" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">Explore Interior Design →</a>
            </div>
            {/* Brand & Visual Communication */}
            <div className="bg-[#f6f2ed] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
              <div className="relative w-full mb-8">
                <img src="/projects/voices-of-the-city.jpg" alt="Voices of the City" className="w-full h-80 object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl flex items-center justify-center">
                  Voices of the City
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">Brand & Visual Communication</h3>
              <a href="/projects#visual-communication" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">Explore Visual Communication →</a>
            </div>
            {/* Workshops & Co-Design Labs */}
            <div className="bg-[#f6f2ed] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
              <div className="relative w-full mb-8">
                <img src="/projects/workshop-placeholder.jpg" alt="Imagining Public Spaces with Communities" className="w-full h-80 object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl flex items-center justify-center">
                  Imagining Public Spaces with Communities
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">Workshops & Co-Design Labs</h3>
              <a href="/think-tank" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">Explore Think tank and collaborations →</a>
            </div>
            {/* Emerging Tech / Speculative Futures */}
            <div className="bg-[#f6f2ed] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center md:col-span-2">
              <div className="relative w-full mb-8">
                <img src="/projects/ranthambore-ai.jpg" alt="AI-Enabled Green Infrastructure Planning" className="w-full h-80 object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl flex items-center justify-center">
                  AI-Enabled Green Infrastructure Planning, Ranthambore
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">Emerging Tech / Speculative Futures</h3>
              <a href="/futures-lab" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">Explore Futures Lab →</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clients & Stats Section */}
      <motion.section
        className="w-full bg-white min-h-screen flex items-center justify-center px-4 py-16 md:py-24 border-y border-[#e7d8c9]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto text-center w-full px-4">
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
            <div className="bg-[#b7c9c9] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/kahwa-logo.png" alt="Kahwa Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Cover and Pax */}
            <div className="bg-[#b7c9c9] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/cover-and-pax-logo.png" alt="Cover and Pax Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Haldiram */}
            <div className="bg-[#b7c9c9] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/haldiram-logo.png" alt="Haldiram Logo" className="h-12 mb-2 object-contain" />
            </div>
            {/* Indian Navy */}
            <div className="bg-[#b7c9c9] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/indian-navy-logo.png" alt="Indian Navy Logo" className="h-12 mb-2 object-contain" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Media Recognition Section */}
      <motion.section
        className="w-full bg-[#f0ebe6] min-h-screen flex items-center justify-center px-4 py-16 md:py-24 border-y border-[#e7d8c9]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto text-center w-full px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] rounded-full"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6 font-[var(--font-cormorant)] leading-tight">
            Recognition &
            <br />
            <span className="text-[#e7a77e]">Thought Leadership</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-[#232323] mb-12 max-w-4xl mx-auto leading-relaxed">
            Our co-founder Garima Dubey recently presented a compelling vision for the future of out-of-home advertising at the Third South India Talks OOH event, advocating for its seamless integration into the fabric of our cities.
          </p>
          
          {/* Featured Article Card */}
          <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <img 
                    src="/ooh-garima.jpg" 
                    alt="Garima Dubey presenting at South India Talks OOH" 
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-[#232323] mb-6">
                  "OOH as an Integral Part of Public Space Design"
                </h3>
                
                <p className="text-[#232323] mb-6 leading-relaxed">
                  Garima's presentation painted a picture where advertising transcends its traditional disruptive role, becoming an enriching element of the urban experience. She emphasized how OOH can evolve from an interruption to a resumption, like "that white character in a movie that doesn't say much, but changes the entire plot."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.media4growth.com/events/talks-ooh-news/ooh-as-an-integral-part-of-public-space-design-garima-dubeys-vision-at-south-india-talks-ooh-76554" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-[#f59e42] to-[#e7a77e] hover:from-[#ea580c] hover:to-[#e38d5f] text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm group"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <span className="text-sm text-[#6b7280] font-medium">
                    Published on Media4Growth • May 3, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-12">
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#e7d8c9] to-transparent rounded-full"></div>
          </div>
        </div>
      </motion.section>

      {/* Rooted in India. Open to the world. Section */}
      <motion.section
        className="w-full bg-[#f0ebe6] min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="max-w-4xl xl:max-w-7xl mx-auto text-center w-full px-4">
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
