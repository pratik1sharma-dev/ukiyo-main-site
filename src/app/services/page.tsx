export const metadata = {
  title: "Services | Ukiyo Habitat",
  description: "Discover the range of architectural and design services offered by Ukiyo Habitat, including landscape architecture, urban design, interior design, and branding.",
};

export default function Services() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#232323]">Our Services</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">Landscape Architecture</li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">Urban Design</li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">Interior Design</li>
        <li className="bg-white rounded-lg shadow p-6 text-[#232323]">Branding</li>
      </ul>
    </section>
  );
} 