export const metadata = {
  title: "How We Work | Ukiyo Habitat",
  description: "Discover Ukiyo Habitat's unique design process: a 3-part framework blending ecology, empathy, and imagination for sustainable, people-centric architecture in India.",
  keywords: [
    "design process architecture India",
    "ecological design framework",
    "participatory design studio",
    "sustainable architecture methodology",
    "empathy in design",
    "imaginative urbanism"
  ],
};

export default function HowWeWork() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      {/* Hero Section */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#232323] text-center font-[var(--font-cormorant)]">How We Work</h1>
      <p className="text-lg text-[#232323] mb-10 text-center max-w-2xl mx-auto">
        Our approach is rooted in a belief that great design emerges from the intersection of ecology, empathy, and imagination. Every project is a collaboration—between people, place, and possibility.
      </p>

      {/* 3-Part Framework */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {/* Ecology */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">🌱</span>
          <div className="font-semibold text-lg mb-2">Ecology</div>
          <div className="text-sm text-[#232323] text-center">We begin with the land—its climate, water, soil, and memory. Our process is site-responsive, prioritizing native ecologies, resource cycles, and long-term resilience.</div>
        </div>
        {/* Empathy */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">🤝</span>
          <div className="font-semibold text-lg mb-2">Empathy</div>
          <div className="text-sm text-[#232323] text-center">We listen deeply—to clients, communities, and context. Through participatory workshops and co-design, we ensure every voice shapes the outcome.</div>
        </div>
        {/* Imagination */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">✨</span>
          <div className="font-semibold text-lg mb-2">Imagination</div>
          <div className="text-sm text-[#232323] text-center">We push boundaries—exploring new materials, technologies, and narratives. Our goal: to create spaces that inspire, adapt, and endure.</div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-[#232323] mb-6 max-w-2xl mx-auto">
          Ready to collaborate on a project that challenges convention and centers people, place, and planet? Let’s co-create the future of design—together.
        </p>
        <a href="/contact" className="inline-block bg-[#f59e42] hover:bg-[#ea580c] text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-md text-base">Start Your Project</a>
      </div>
    </section>
  );
} 