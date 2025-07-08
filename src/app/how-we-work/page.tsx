export const metadata = {
  title: "How We Work | Ukiyo Habitat",
  description: "Discover Ukiyo Habitat's process: design rooted in curiosity, collaboration, and ecological thinking. Learn how we observe, collaborate, and reimagine spaces in India.",
  keywords: [
    "design process India",
    "participatory design studio",
    "ecological urbanism",
    "co-design workshops",
    "site-responsive architecture",
    "spatial inquiry"
  ],
};

export default function HowWeWork() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-6 text-center font-[var(--font-cormorant)]">Design Is Not Just What We Build — It’s What We Question.</h2>
      {/* Intro Paragraph */}
      <p className="text-lg text-[#232323] mb-10 text-center max-w-2xl mx-auto">
        At Ukiyo Habitat, we believe that good design in India’s cities begins not with a blueprint, but with curiosity. Our approach is rooted in walking, listening, wondering — and sometimes, unlearning.<br/><br/>
        We treat every site as a living system — shaped by water, memory, people, and time.<br/><br/>
        Every brief becomes an opportunity to challenge assumptions, adapt to local ecology, and co-create spaces that evolve with changing climates, communities, and contexts.<br/><br/>
        From sponge landscapes in Chennai to campus design in Central India, our work is driven by inquiry — not repetition.
      </p>
      {/* 3-Part Design Framework */}
      <h3 className="text-xl font-semibold text-[#232323] mb-6 text-center">🔁 Our 3-Part Design Framework</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {/* Observe */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">🔍</span>
          <div className="font-semibold text-lg mb-2">Observe</div>
          <div className="text-sm text-[#232323] text-center">We begin with site visits, mapping, and immersive fieldwork — reading the land and its histories. Whether we’re studying urban heat zones in Delhi or understanding floodplains in Bangalore, we pay attention before we intervene.</div>
        </div>
        {/* Collaborate */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">✏</span>
          <div className="font-semibold text-lg mb-2">Collaborate</div>
          <div className="text-sm text-[#232323] text-center">We work with communities, clients, researchers, and students — not just for input, but as co-authors. Through co-design workshops, walkshops, and conversations, we build shared ownership of the process.</div>
        </div>
        {/* Reimagine */}
        <div className="bg-[#f6f2ed] rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-2">🌱</span>
          <div className="font-semibold text-lg mb-2">Reimagine</div>
          <div className="text-sm text-[#232323] text-center">We prototype spatial futures that are ecologically grounded and culturally relevant — spaces that regenerate, connect, and adapt. Using tools like narrative mapping, data overlays, and systems thinking, we prepare designs that are as resilient as they are poetic.</div>
        </div>
      </div>
      {/* Optional Closing Statement */}
      <div className="text-center mt-12 mb-8">
        <p className="text-lg text-[#232323] italic mb-6 max-w-2xl mx-auto">We don’t just design for outcomes. We design to ask better questions.</p>
        <a href="/contact" className="inline-block bg-[#f59e42] hover:bg-[#ea580c] text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-md text-base">🟠 Learn How We Work</a>
      </div>
    </section>
  );
} 