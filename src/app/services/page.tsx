export const metadata = {
  title: "Services | Ukiyo Habitat",
  description: "Discover the range of architectural and design services offered by Ukiyo Habitat, including landscape architecture, urban design, interior design, and branding.",
};

export default function Services() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#232323]">Our Services</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">
          <div className="text-xl font-semibold mb-2">Landscape Architecture</div>
          <div className="text-sm text-[#555]">Public parks, campuses, and green infrastructure that foster ecological balance and community well-being.</div>
        </li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">
          <div className="text-xl font-semibold mb-2">Urban Design</div>
          <div className="text-sm text-[#555]">Resilient streetscapes, transit-oriented developments, and neighborhood revitalization for vibrant urban life.</div>
        </li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">
          <div className="text-xl font-semibold mb-2">Interior Environments</div>
          <div className="text-sm text-[#555]">Context-driven, sensory-sensitive spaces that enhance comfort, creativity, and well-being indoors.</div>
        </li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">
          <div className="text-xl font-semibold mb-2">Brand & Visual Communication</div>
          <div className="text-sm text-[#555]">Campaigns and graphics for social impact, bringing clarity and identity to your mission.</div>
        </li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323] sm:col-span-2">
          <div className="text-xl font-semibold mb-2">Speculative Futures & Workshops</div>
          <div className="text-sm text-[#555]">Think-tank programs, research, and co-design studios exploring new frontiers in design and collaboration.</div>
        </li>
      </ul>
    </section>
  );
} 