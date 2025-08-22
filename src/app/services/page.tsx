import Link from 'next/link';

export const metadata = {
  title: "Services | Ukiyo Habitat",
  description: "Discover the range of architectural and design services offered by Ukiyo Habitat, including landscape architecture, urban design, interior design, and branding.",
  keywords: [
    "landscape architecture services India",
    "urban design Delhi",
    "interior environments design",
    "brand communication design",
    "speculative futures workshops",
    "ecological design services",
    "sustainable landscape architecture",
    "public space design services",
    "campus landscape design",
    "streetscape design India",
    "water-sensitive landscape design",
    "climate-responsive architecture",
    "participatory design workshops",
    "urban planning services",
    "adaptive reuse design",
    "child-friendly space design",
    "blue-green infrastructure design",
    "urban resilience planning",
    "community placemaking services",
    "ecological restoration design",
    "sustainable urban development",
    "landscape-led masterplans",
    "co-designed public spaces",
    "environmental design services",
    "social impact design",
    // Geo service variants
    "landscape architecture services Delhi NCR",
    "landscape architecture services Gurgaon",
    "landscape architecture services Noida",
    "landscape architecture services Bangalore",
    "landscape architecture services Hyderabad",
    "landscape architecture services Ahmedabad",
    "landscape architecture services Pune",
    "urban design consultants Delhi NCR",
    "urban design consultants Gurgaon",
    "urban design consultants Noida",
    "urban design consultants Bangalore",
    "urban design consultants Hyderabad",
    "urban design consultants Ahmedabad",
    "urban design consultants Pune",
    "interior design studio Delhi NCR",
    "interior design studio Gurgaon",
    "interior design studio Noida",
    "interior design studio Bangalore",
    "interior design studio Hyderabad",
    "interior design studio Ahmedabad",
    "interior design studio Pune",
    // Requested cities
    "landscape architect Jabalpur",
    "landscape architect Indore",
    "landscape architect Pushkar",
    "landscape architect Bhopal",
    "landscape architect Ayodhya"
  ],
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#e7a77e]/20 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 bg-[#f59e42]/20 rounded-full opacity-60"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
              Our <span className="text-[#e7a77e]">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
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
                <div className="w-20 h-20 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🌿</span>
                </div>
                <h2 className="text-3xl font-bold text-[#232323] mb-6">Landscape Architecture</h2>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  We design a wide range of outdoor environments, from large-scale public parks and campuses to the vibrant outdoor spaces of restaurants, malls, and private residences. All our landscapes are crafted to function as living ecosystems that manage water, improve biodiversity, and connect people with nature.
                </p>
              </div>

              {/* Urban Design */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🏙️</span>
                </div>
                <h2 className="text-3xl font-bold text-[#232323] mb-6">Urban Design</h2>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  We tackle the challenges of India's rapid urbanization through the design of resilient streetscapes, transit-oriented developments (TODs), and neighborhood revitalization projects.
                </p>
              </div>

              {/* Interior Environments */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🏠</span>
                </div>
                <h2 className="text-3xl font-bold text-[#232323] mb-6">Interior Environments</h2>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  We create sensory-rich interiors that are deeply connected to their context, often using local materials and craftsmanship to provide a sanctuary from the bustle of modern life.
                </p>
              </div>

              {/* Brand & Visual Communication */}
              <div className="bg-gradient-to-br from-[#f6f2ed] to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mb-8">
                  <span className="text-3xl">🎨</span>
                </div>
                <h2 className="text-3xl font-bold text-[#232323] mb-6">Brand & Visual Communication</h2>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  We create visual identities and communication strategies for projects with a purpose. From compelling graphics and campaigns to the thoughtful integration of Out-of-Home (OOH) advertising, our work helps give a clear, compelling voice to environmental and social initiatives.
                </p>
              </div>

            </div>

            {/* Speculative Futures & Workshops - Centered Special Card */}
            <div className="mt-16 flex justify-center">
              <div className="max-w-4xl w-full bg-gradient-to-br from-[#f6f2ed] via-[#f0ebe6] to-[#e7a77e]/10 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-[#e7d8c9]">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <span className="text-5xl">🔮</span>
                  </div>
                  <h2 className="text-4xl font-bold text-[#232323] mb-8">Speculative Futures & Workshops</h2>
                  <p className="text-xl text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                    We facilitate workshops and speculative design sessions that help communities, organizations, and institutions imagine and plan for alternative futures. Our approach combines design thinking, systems mapping, and participatory methods to explore possibilities beyond current constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[#6b7280] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with sustainable, innovative design solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full hover:from-[#e38d5f] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
            >
              Get Started
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 