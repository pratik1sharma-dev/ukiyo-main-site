"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/hero-bg-10.jpg",
    headline: "Designing Tomorrow—Today",
    subheadline: "A cross disciplinary design studio creating sustainable immersive environments rooted in ecology and driven by innovation.",
    buttons: [
      { label: "Explore Our Work", href: "/projects", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
      { label: "Book a Discovery Call", href: "/contact", style: "bg-transparent border border-black text-[#232323] hover:bg-[#f2ede7]" },
    ],
  },
  {
    image: "/hero-bg-2.jpg",
    headline: "Urban Spaces, Human Stories",
    subheadline: "We shape resilient streetscapes and vibrant communities for a better tomorrow.",
    buttons: [
      { label: "See Urban Projects", href: "/projects?cat=urban", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-3.jpg",
    headline: "Nature Meets Innovation",
    subheadline: "From green infrastructure to smart interiors, we blend ecology and technology.",
    buttons: [
      { label: "Our Approach", href: "/about", style: "bg-[#e7a77e] hover:bg-[#e38d5f] text-white" },
    ],
  },
  {
    image: "/hero-bg-4.jpg",
    headline: "Co-Designing the Future",
    subheadline: "Workshops, research, and international collaborations for a new era of design.",
    buttons: [
      { label: "Join a Workshop", href: "/contact", style: "bg-transparent border border-black text-[#232323] hover:bg-[#f2ede7]" },
    ],
  },
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // 4 seconds per image
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
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-16 pb-24 px-4 sm:px-0 bg-transparent overflow-hidden z-10">
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-[#232323] leading-tight mb-4">{current.headline}</h1>
            <p className="text-lg sm:text-xl text-[#232323] mb-8 max-w-xl">{current.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {current.buttons.map((btn, idx) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={`font-semibold rounded-full px-7 py-3 transition-colors shadow-md text-base ${btn.style}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 gap-3 z-20">
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

      {/* What We Do (Services Preview) Section */}
      <section className="w-full bg-[#f6f2ed] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#232323] mb-10 text-center">Services that Shape Cities and Consciousness.</h2>
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
              <p className="mt-2 text-sm text-[#232323]">Resilient streetscapes, TODs, neighborhood revitalization</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center h-full">
              <svg width="48" height="48" fill="none" stroke="#232323" strokeWidth="2" viewBox="0 0 48 48"><rect x="12" y="28" width="24" height="10" /><path d="M24 28V18" /><circle cx="24" cy="14" r="4" /></svg>
              <h3 className="mt-4 text-lg font-semibold text-[#232323]">Interior Environments</h3>
              <p className="mt-2 text-sm text-[#232323]">Context-driven and sensory-sensitive spaces</p>
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
                <p className="mt-2 text-sm text-[#232323]">Think-tank programs, research, and co-design studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Clients Section */}
      <section className="w-full bg-white py-12 px-4 border-y border-[#e7d8c9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#232323] mb-8">Our Clients</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Kahwa */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/kahwa-logo.png" alt="Kahwa Logo" className="h-12 mb-2 object-contain" />
              <span className="text-lg font-semibold text-[#232323]">Kahwa</span>
            </div>
            {/* Cover and Pax */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/cover-and-pax-logo.png" alt="Cover and Pax Logo" className="h-12 mb-2 object-contain" />
              <span className="text-lg font-semibold text-[#232323]">Cover and Pax</span>
            </div>
            {/* Haldiram */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/haldiram-logo.png" alt="Haldiram Logo" className="h-12 mb-2 object-contain" />
              <span className="text-lg font-semibold text-[#232323]">Haldiram</span>
            </div>
            {/* Indian Navy */}
            <div className="bg-[#f6f2ed] rounded-xl px-8 py-4 flex flex-col items-center shadow min-w-[140px]">
              <img src="/indian-navy-logo.png" alt="Indian Navy Logo" className="h-12 mb-2 object-contain" />
              <span className="text-lg font-semibold text-[#232323]">Indian Navy</span>
            </div>
          </div>
        </div>
      </section>
       {/* Who We Are (About Us Preview) Section */}
       <section className="w-full bg-white py-12 px-4 border-y border-[#e7d8c9]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#232323] mb-4">Reimagining Urban Life. One Detail at a Time.</h2>
          <p className="text-lg text-[#232323] mb-2">
            Ukiyo Habitat is a collaborative design studio working at the intersection of landscape architecture, urban design, and social innovation.
          </p>
          <p className="text-lg text-[#232323] mb-2">
            We fuse ecological thinking with technology to craft spaces that are climate-resilient, context-aware, and deeply human.
          </p>
          <p className="text-lg text-[#232323]">
            Our designs are not just solutions—they’re invitations to engage, reflect, and co-create.
          </p>
          <a href="/about" className="inline-block mt-6 text-[#e7a77e] hover:underline font-semibold text-base">Learn more about us &rarr;</a>
        </div>
      </section>
    </div>
  );
}
