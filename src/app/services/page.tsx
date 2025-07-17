import Link from 'next/link';

export const metadata = {
  title: "Services | Ukiyo Habitat",
  description: "Discover the range of architectural and design services offered by Ukiyo Habitat, including landscape architecture, urban design, interior design, and branding.",
  keywords: [
    "landscape architecture services",
    "urban design India",
    "interior environments",
    "brand communication",
    "speculative futures workshops",
    "ecological design services"
  ],
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 bg-orange-300 rounded-full opacity-30"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Our <span className="text-orange-600">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We offer comprehensive design services that bridge the gap between ecological thinking and human experience, creating spaces that are both sustainable and meaningful.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Landscape Architecture */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🌿</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Landscape Architecture</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We design a wide range of outdoor environments, from large-scale public parks and campuses to the vibrant outdoor spaces of restaurants, malls, and private residences. All our landscapes are crafted to function as living ecosystems that manage water, improve biodiversity, and connect people with nature.
                </p>
              </div>

              {/* Urban Design */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🏙️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Urban Design</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We tackle the challenges of India's rapid urbanization through the design of resilient streetscapes, transit-oriented developments (TODs), and neighborhood revitalization projects.
                </p>
              </div>

              {/* Interior Environments */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🏠</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Interior Environments</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We create sensory-rich interiors that are deeply connected to their context, often using local materials and craftsmanship to provide a sanctuary from the bustle of modern life.
                </p>
              </div>

              {/* Brand & Visual Communication */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🎨</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand & Visual Communication</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We create visual identities and communication strategies for projects with a purpose. From compelling graphics and campaigns to the thoughtful integration of Out-of-Home (OOH) advertising, our work helps give a clear, compelling voice to environmental and social initiatives.
                </p>
              </div>

            </div>

            {/* Speculative Futures & Workshops - Centered Special Card */}
            <div className="mt-16 flex justify-center">
              <div className="max-w-4xl w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <span className="text-5xl">🔮</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">Speculative Futures & Workshops</h2>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    We lead innovation workshops, strategic research, and collaborative design studios. We partner with institutions and communities to explore future possibilities and co-design solutions to complex challenges.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Approach Works Section */}
        <section className="py-24 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why This Approach Works
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Placement</h3>
                <p className="text-gray-700 leading-relaxed">
                  It positions OOH as a component of your high-level branding and communication services, not just a standalone item.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Thoughtful Framing</h3>
                <p className="text-gray-700 leading-relaxed">
                  The phrase "thoughtful integration of Out-of-Home (OOH) advertising" aligns perfectly with your brand's critical perspective. It implies that you don't just create ads; you consider how they fit within the larger urban fabric.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clarity</h3>
                <p className="text-gray-700 leading-relaxed">
                  It clearly states that you offer this service while maintaining the sophisticated and conscientious tone of your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-3xl shadow-2xl p-12 border border-orange-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Let's discuss how our services can bring your vision to life while creating positive impact for communities and the environment.
              </p>
              
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