export const metadata = {
  title: "About | Ukiyo Habitat",
  description: "A studio built on imagination, ecology, and urgency. Discover Ukiyo Habitat's story, philosophy, and work in climate-responsive, people-centric design.",
  keywords: [
    "about Ukiyo Habitat",
    "ecological design studio",
    "founding philosophy architecture",
    "climate-responsive design India",
    "participatory urbanism",
    "design for the future"
  ],
};

export default function About() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-6 text-center font-[var(--font-cormorant)]">A Studio Built on Imagination, Ecology, and Urgency</h2>
      {/* Intro Paragraph */}
      <p className="text-lg text-[#232323] mb-10 text-center max-w-2xl mx-auto">
        Ukiyo Habitat was born from a shared restlessness — with the way cities were being shaped, with landscapes being reduced to visuals, and with the silence around ecological time.<br/><br/>
        We came together not just as designers, but as listeners, walkers, and observers — determined to imagine spaces that restore, adapt, and resonate.<br/><br/>
        Our work lives between the everyday and the imagined. Between what the city needs today, and what the climate demands tomorrow.
      </p>
      {/* Founding Philosophy (Quote-style block) */}
      <div className="bg-[#f6f2ed] rounded-xl shadow p-8 mb-10 max-w-3xl mx-auto text-center border-l-4 border-[#e7a77e]">
        <p className="italic text-[#232323] mb-2">“We grew up watching cities harden — asphalt where soil belonged, drains where lakes once held the sky.”</p>
        <p className="italic text-[#232323] mb-2">“As designers, we chose to do something about it. Slowly. Intentionally.”</p>
        <p className="italic text-[#232323]">“Ukiyo was born from sketchbooks, site walks, local stories, and the belief that space can heal.”</p>
      </div>
      {/* Founders Photographs */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full sm:w-1/2">
          <img src="/garima-dubey.jpg" alt="Garima Dubey" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow mb-3" />
          <div className="text-xl font-bold text-[#232323]">Garima Dubey</div>
          <div className="text-sm text-[#e7a77e] font-semibold mb-2">Founder</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full sm:w-1/2">
          <img src="/aarav-mehta.jpg" alt="Aarav Mehta" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow mb-3" />
          <div className="text-xl font-bold text-[#232323]">Aarav Mehta</div>
          <div className="text-sm text-[#e7a77e] font-semibold mb-2">Co-Founder</div>
        </div>
      </div>
      {/* Our Work So Far */}
      <h3 className="text-xl font-semibold text-[#232323] mb-6 text-center">Our Work So Far</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🟢</span>
          <div className="font-semibold mb-1 text-center">Velachery Railway Ground – Chennai</div>
          <div className="text-sm text-[#232323] text-center">A neglected transit-edge landscape reimagined as a climate-responsive public space — where rain becomes play, flood becomes memory, and edges become connections.</div>
        </div>
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">🌿</span>
          <div className="font-semibold mb-1 text-center">Bandhavgarh Wildlife Edge Design</div>
          <div className="text-sm text-[#232323] text-center">Designing not just a boundary wall, but a relationship — between human and wild. Our approach used native vegetation, non-invasive fences, and landscape as transition.</div>
        </div>
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-3xl mb-2">✨</span>
          <div className="font-semibold mb-1 text-center">More Projects</div>
          <div className="text-sm text-[#232323] text-center">Explore our full portfolio of climate-responsive, people-centric projects.<br/><a href="/projects" className="text-[#3b82f6] underline">See All Projects</a></div>
        </div>
      </div>
      {/* What We Believe */}
      <h3 className="text-xl font-semibold text-[#232323] mb-6 text-center">What We Believe</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🪴</span>
          <div className="font-semibold mb-1 text-center">Design for Ecology</div>
          <div className="text-sm text-[#232323] text-center">Every site is a living system. We respond to water, soil, sun, and time — not just drawings.</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🫱🏽‍🫲🏾</span>
          <div className="font-semibold mb-1 text-center">Design With People</div>
          <div className="text-sm text-[#232323] text-center">We don’t bring answers. We design with — through walks, maps, questions, and stories.</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🛰</span>
          <div className="font-semibold mb-1 text-center">Design for the Future</div>
          <div className="text-sm text-[#232323] text-center">We’re curious about GIS, AI, and speculative design — not for the sake of tech, but to see deeper and imagine better.</div>
        </div>
      </div>
      {/* Invitation Block (Closing) */}
      <div className="bg-[#f6f2ed] rounded-xl shadow p-8 mt-12 max-w-2xl mx-auto text-center border-l-4 border-[#3b82f6]">
        <p className="italic text-[#232323] mb-4">“We’re always looking for thoughtful collaborators — clients who care, students who question, and partners who provoke.”</p>
        <a href="/contact" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-md text-base">🔵 Start a Conversation</a>
      </div>
    </section>
  );
} 