export const metadata = {
  title: "Locations | Ukiyo Habitat",
  description: "City-specific landing page for Ukiyo Habitat services across India.",
};

const cityCopy: Record<string, { h1: string; intro: string }> = {
  jabalpur: {
    h1: "Landscape & Urban Design in Jabalpur",
    intro: "We deliver climate-responsive landscape and urban design in Jabalpur — rooted in local ecology and community."
  },
  indore: {
    h1: "Landscape & Urban Design in Indore",
    intro: "From resilient streetscapes to campus landscapes, we serve Indore with sustainable design solutions."
  },
  bangalore: {
    h1: "Landscape & Urban Design in Bangalore",
    intro: "We craft blue-green infrastructures and people-centric public spaces across Bangalore's fast-growing urban fabric."
  },
  pushkar: {
    h1: "Landscape & Urban Design in Pushkar",
    intro: "Sensitive, context-driven design for heritage-rich environments in and around Pushkar."
  },
  bhopal: {
    h1: "Landscape & Urban Design in Bhopal",
    intro: "Ecology-first design for public spaces, campuses, and institutions across Bhopal."
  },
  ayodhya: {
    h1: "Landscape & Urban Design in Ayodhya",
    intro: "Culturally attuned landscape and urban design interventions for Ayodhya and nearby regions."
  },
  "delhi-ncr": {
    h1: "Landscape & Urban Design in Delhi NCR",
    intro: "Full-spectrum landscape, urban, and interior design services across Delhi NCR."
  },
  gurgaon: {
    h1: "Landscape & Urban Design in Gurgaon",
    intro: "Workplace campuses, streetscapes, and public spaces for Gurgaon’s evolving urban contexts."
  },
  noida: {
    h1: "Landscape & Urban Design in Noida",
    intro: "Resilient, people-centric environments — from campuses to civic public spaces — across Noida."
  }
};

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.toLowerCase();
  const copy = cityCopy[city] || {
    h1: `Landscape & Urban Design in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    intro: "We provide ecological, climate-responsive design services tailored to your city."
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-16 bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#232323] mb-6">{copy.h1}</h1>
          <p className="text-lg text-[#6b7280] max-w-3xl mx-auto">{copy.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#232323] mb-4">What we do</h2>
          <ul className="list-disc pl-6 text-[#6b7280] space-y-2">
            <li>Landscape Architecture: campuses, streetscapes, parks, waterfronts</li>
            <li>Urban Design: public spaces, TOD edges, resilience-focused interventions</li>
            <li>Interior Environments: hospitality, workplace, residential</li>
            <li>Brand & Communication for place-based initiatives</li>
          </ul>

          <div className="mt-8 flex gap-3 flex-wrap">
            <a href="/services" className="tag-primary">Explore Services</a>
            <a href="/projects" className="tag-primary">View Projects</a>
            <a href="/contact" className="tag-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}