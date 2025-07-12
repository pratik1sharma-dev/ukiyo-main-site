import Link from 'next/link';

export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#f6f2ed] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Design Is Not Just What We Build — It's What We Question.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Ukiyo Habitat, our design process begins with curiosity. We start by listening to the land itself—to the lone Peepal tree in a concrete jungle, or the memory of a drying lake. This is where our questions begin.
            </p>
          </div>
        </section>

        {/* Body Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We treat every site as a living system — shaped by water, memory, people, and time.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Every brief becomes an opportunity to challenge assumptions. In a landscape marked by increasing urbanization and shrinking green spaces, we adapt to local ecology and co-create spaces that evolve with changing climates, communities, and contexts.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                From designing sponge landscapes to combat water scarcity in Chennai to creating a campus that breathes life back into its local environment in Central India, our work is driven by inquiry — not repetition.
              </p>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-20 bg-[#f6f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Design Framework: Observe, Collaborate, Reimagine
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Observe */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Observe</h3>
                <p className="text-gray-700 leading-relaxed">
                  We begin with site visits, mapping, and immersive fieldwork — reading the land and its histories. Whether we're studying urban heat and air pollution in Delhi or understanding floodplains and water wastage in Bangalore, we pay attention before we intervene.
                </p>
              </div>

              {/* Collaborate */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✏️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborate</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with communities, clients, researchers, and students — not just for input, but as co-authors. In cities often starved of safe and inclusive public spaces, and visually cluttered by intrusive out-of-home advertising, we use co-design workshops and conversations to build shared ownership of the process.
                </p>
              </div>

              {/* Reimagine */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reimagine</h3>
                <p className="text-gray-700 leading-relaxed">
                  We prototype spatial futures that are ecologically grounded and culturally relevant — spaces that regenerate, connect, and adapt. Using tools like narrative mapping and systems thinking, we prepare designs that are as resilient as they are poetic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              We don't just design for outcomes. We design to ask better questions.
            </h2>
            <Link 
              href="/projects" 
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              🟠 See Our Process in Action →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 