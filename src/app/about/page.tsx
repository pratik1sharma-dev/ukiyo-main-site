import Link from 'next/link';

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
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* 1. Hero Section - Origin Story + Design Philosophy */}
        <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 bg-orange-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-100 rounded-full opacity-40"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              A Studio Built on <span className="text-orange-600">Imagination</span>, <span className="text-orange-600">Ecology</span>, and <span className="text-orange-600">Urgency</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              Ukiyo Habitat was born from a shared restlessness — with the way cities were being shaped, with landscapes being reduced to visuals, and with the silence around ecological time.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-12"></div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Design Is Not Just What We Build — It's What We Question.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Ukiyo Habitat, our design process begins with curiosity. We start by listening to the land itself—to the lone Peepal tree in a concrete jungle, or the memory of a drying lake. This is where our questions begin.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Our Approach Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-500">
                <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                  We treat every site as a living system — shaped by water, memory, people, and time.
                </p>
              </div>
              
              <div className="bg-[#f6f2ed] rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every brief becomes an opportunity to challenge assumptions. In a landscape marked by increasing urbanization and shrinking green spaces, we adapt to local ecology and co-create spaces that evolve with changing climates, communities, and contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Design Framework Section */}
        <section className="py-24 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Design Framework
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Observe, Collaborate, Reimagine
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Observe */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Observe</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  We begin with site visits, mapping, and immersive fieldwork — reading the land and its histories. Whether we're studying urban heat and air pollution in Delhi or understanding floodplains and water wastage in Bangalore, we pay attention before we intervene.
                </p>
              </div>

              {/* Collaborate */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Collaborate</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  We work with communities, clients, researchers, and students — not just for input, but as co-authors. In cities often starved of safe and inclusive public spaces, and visually cluttered by intrusive out-of-home advertising, we use co-design workshops and conversations to build shared ownership of the process.
                </p>
              </div>

              {/* Reimagine */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reimagine</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  We prototype spatial futures that are ecologically grounded and culturally relevant — spaces that regenerate, connect, and adapt. Using tools like narrative mapping and systems thinking, we prepare designs that are as resilient as they are poetic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Founders Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Founders
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Founder 1 - Garima Dubey */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl shadow-xl p-10 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">👤</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Garima Dubey</h3>
                  <p className="text-xl text-orange-600 font-semibold mb-4">Landscape Architect & Urban Ecologist</p>
                  <div className="w-16 h-1 bg-orange-400 mx-auto mb-6"></div>
                </div>
                
                <div className="text-left space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Garima Dubey is a landscape architect and urban ecologist based in Jabalpur, Madhya Pradesh. She focuses on designing climate-responsive, inclusive, and ecologically grounded public spaces. As the Co-founder of Ukiyo Habitat, she works at the intersection of spatial planning, ecology, and community placemaking, crafting resilient and meaningful environments.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Garima has led or contributed to projects across several Indian cities, including Indore (MP), Pune (Maharashtra), Hyderabad (Telangana), and Ahmedabad (Gujarat)—each rooted in local ecological contexts and community needs. Her work integrates urban green infrastructure, blue-green systems, and nature-based design solutions to enhance both environmental and social well-being.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    She also teaches design at Dr. B.R. Ambedkar University Delhi and Netaji Subhash University of Technology (NSUT). Her research interests include urban resilience, water-sensitive planning, and public spaces as democratic and ecological commons.
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Landscape Architecture</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Urban Ecology</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Climate-Responsive Design</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Public Space Design</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Blue-Green Systems</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Urban Resilience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 - Vidushi Singh */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl shadow-xl p-10 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">👤</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Vidushi Singh</h3>
                  <p className="text-xl text-orange-600 font-semibold mb-4">Architect, Urban Designer & Design Educator</p>
                  <div className="w-16 h-1 bg-orange-400 mx-auto mb-6"></div>
                </div>
                
                <div className="text-left space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Vidushi Singh is an architect, urban designer, and design educator with over five years of professional experience in architecture, interior design, and urban planning. She is the Co-founder of Ukiyo Habitat, a Delhi-based design studio known for its work in urban resilience, adaptive reuse, and child-friendly public spaces.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Vidushi has contributed to a variety of residential, commercial, institutional, and government architecture projects—including work for the Indian Navy in New Delhi. She teaches architectural design at Vastu Kala Academy and NSUT, Delhi. Her approach combines contextual sensitivity with spatial empathy to create inclusive, sustainable, and locally rooted built environments.
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Architecture</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Urban Design</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Interior Design</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Urban Planning</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Adaptive Reuse</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Child-Friendly Spaces</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Sustainable Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Philosophy in Action Section */}
        <section className="py-24 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Philosophy in Action
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Project Card 1 */}
              <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🟢</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Velachery Railway Ground – Chennai
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  A neglected transit-edge landscape reimagined as a climate-responsive public space — where rain becomes play, flood becomes memory, and edges become connections.
                </p>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌿</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Bandhavgarh Wildlife Edge Design
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Designing not just a boundary wall, but a relationship — between human and wild. Our approach used native vegetation, non-invasive fences, and landscape as transition.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/projects" 
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                See All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-orange-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                We don't just design for outcomes. We design to ask better questions.
              </h2>
              
              <blockquote className="mb-12">
                <p className="text-2xl italic text-gray-700 leading-relaxed">
                  "We're always looking for thoughtful collaborators — clients who care, students who question, and partners who provoke."
                </p>
              </blockquote>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 