export const metadata = {
  title: "Our Services | Ukiyo Habitat",
  description: "Explore Ukiyo Habitat's multidisciplinary design services: landscape architecture, urban design, interiors, branding, workshops, and speculative futures in India.",
  keywords: [
    // Page-level
    "sustainable design studio India",
    "multidisciplinary design firm",
    "ecological design consultants",
    // Service-level
    "landscape architecture firm India",
    "ecological campus design",
    "native planting consultants",
    "urban design consultancy India",
    "resilient city design",
    "public space design Mumbai",
    "public space design Delhi",
    "interior architecture India",
    "sensory interior design",
    "minimalist interiors Delhi",
    "minimalist interiors Bangalore",
    "social branding design India",
    "visual communication for NGOs",
    "campaign design studio",
    "co-design workshops India",
    "participatory design services",
    "architecture workshops with community",
    "speculative design India",
    "urban future modeling",
    "AI in landscape planning"
  ],
};

export default function ServicesExtended() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      {/* Header & Intro */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-6 text-center font-[var(--font-cormorant)]">Design Across Scales — With Purpose, People, and the Planet in Mind</h2>
      <p className="text-lg text-[#232323] mb-8 text-center max-w-3xl mx-auto">
        At Ukiyo Habitat, we offer integrated design services in India across landscapes, cities, interior environments, and visual identities — all guided by ecology, empathy, and imagination.<br/><br/>
        Our services are not fixed packages, but evolving collaborations. Whether it’s a streetscape in Bangalore, a campus landscape in Chennai, or a visual campaign for a public initiative, we treat each design opportunity as a way to reconnect people with place, and projects with purpose.
      </p>
      {/* Our Design Services */}
      <h3 className="text-xl font-semibold text-[#232323] mb-6 text-center">🧩 Our Design Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Landscape Architecture */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🟠</span>
          <div className="font-semibold mb-1">Landscape Architecture</div>
          <div className="text-sm text-[#232323] mb-2">Designing with climate, soil, water systems, and memory.<br/>We craft parks, institutional campuses, urban waterfronts, sponge landscapes, and native plantations that are functional, sensory, and climate-resilient.</div>
        </div>
        {/* Urban Design */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🔵</span>
          <div className="font-semibold mb-1">Urban Design</div>
          <div className="text-sm text-[#232323] mb-2">Street-scale sensitivity meets large-scale systems thinking.<br/>From neighborhood-level masterplans to micro-interventions in dense city cores, our urban projects focus on resilience, equity, and long-term adaptability.</div>
        </div>
        {/* Interior Environments */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🟣</span>
          <div className="font-semibold mb-1">Interior Environments</div>
          <div className="text-sm text-[#232323] mb-2">Spaces that breathe, restore, and reflect purpose.<br/>We design interiors for studios, institutions, homes, and collaborative workspaces — spaces shaped by light, materiality, and memory.</div>
        </div>
        {/* Brand & Visual Communication */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🟢</span>
          <div className="font-semibold mb-1">Brand & Visual Communication</div>
          <div className="text-sm text-[#232323] mb-2">Designing visual narratives that carry meaning.<br/>We build brand identities, public awareness campaigns, and design-led social communication tools — especially for causes that intersect with urban life and climate resilience.</div>
        </div>
        {/* Workshops & Co-Design Labs */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🌍</span>
          <div className="font-semibold mb-1">Workshops & Co-Design Labs</div>
          <div className="text-sm text-[#232323] mb-2">We open up the process of design — to people, institutions, and the city.<br/>Through participatory mapping, urban walkshops, and speculative design labs, we help communities and students co-author their own spaces.</div>
        </div>
        {/* Speculative Futures */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🔮</span>
          <div className="font-semibold mb-1">Speculative Futures (Emerging Practice)</div>
          <div className="text-sm text-[#232323] mb-2">We’re actively exploring how tools like GIS, AI, and foresight strategies can enrich design — not to automate, but to provoke deeper questions.<br/>Our focus is on long-term thinking, scenario planning, and design that adapts to planetary and social change.</div>
        </div>
      </div>

      {/* Closing Statement & CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-[#232323] mb-6 max-w-2xl mx-auto">
          We work across disciplines, geographies, and imaginations.<br/>
          If your project challenges convention, spans multiple scales, or involves climate-sensitive, people-centric thinking — you're in the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-block bg-[#f59e42] hover:bg-[#ea580c] text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-md text-base">Start Your Project</a>
          <a href="/projects" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-md text-base">See Our Work</a>
        </div>
      </div>
    </section>
  );
} 