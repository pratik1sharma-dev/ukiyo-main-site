"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

// Define TypeScript interfaces
interface CTA {
  href: string;
  label: string;
}

interface Project {
  id: string;
  category: string;
  title: string;
  mainImage: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  cta: CTA | null;
}

export default function Projects() {
  // Project data (grouped by category)
  const projects: Project[] = [
    {
      id: "bandhavgarh-landscape",
      category: "Landscape",
      title: "Breath with the Forest — Landscape Design at Bandhavgarh",
      mainImage: "/projects/bandhavgarh/front.png",
      shortDescription: "Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary.",
      fullDescription: "Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary. The design integrates native flora and sustainable practices to create a harmonious blend with the surrounding wilderness.",
      images: [
        "/projects/bandhavgarh/front.png",
        "/projects/bandhavgarh/1.png",
        "/projects/bandhavgarh/2.png",
        "/projects/bandhavgarh/3.png",
        "/projects/bandhavgarh/4.png"
      ],
      cta: null
    },
    {
      id: "haldiram-landscape",
      category: "Landscape",
      title: "Haldiram Landscape",
      mainImage: "/projects/haldiram/1.jpg",
      shortDescription: "A flagship landscape design proposal for Haldiram at Modi Mall, Noida, built around safety, sustainability, accessibility, and commercial impact.",
      fullDescription: "A sustainable and accessible landscape design for Haldiram at Modi Mall, Noida, featuring non-slip pathways, advanced drainage to prevent kichad, safe kids' play zones, and Instagram-friendly visual elements. The design enhances user comfort, boosts brand visibility, and drives higher footfall through thoughtful, eco-friendly planning.",
      images: [
        "/projects/haldiram/1.jpg",
        "/projects/haldiram/2.png",
        "/projects/haldiram/3.png",
        "/projects/haldiram/4.png",
        "/projects/haldiram/5.jpg",
        "/projects/haldiram/6.png"
      ],
      cta: null
    },
    {
      id: "kake-da-hotel",
      category: "Architecture & Interior",
      title: "Kake Da Hotel in Ambience Mall",
      mainImage: "/projects/kake.jpg",
      shortDescription: "Modern restaurant design that blends traditional aesthetics with contemporary functionality.",
      fullDescription: "The Kake Da Hotel project at Ambience Mall, Vasant Kunj, New Delhi, is a 3,200 square foot contemporary restaurant design that reimagines traditional Punjabi dhaba culture for a luxury retail environment. Located on the mall's food court level, our design seamlessly blends rustic Punjabi elements with modern aesthetics through the use of warm terracotta tones, handcrafted jali work, and custom brass lighting fixtures. The space features an open kitchen concept with a live tandoors section, creating an interactive dining experience. We incorporated sustainable materials like reclaimed wood and local sandstone, while optimizing the layout to accommodate 85 covers without compromising comfort. The design includes a dedicated bar area with a backlit onyx counter and a private dining zone with traditional 'charpai' seating reinterpreted in modern materials. The project was completed in 2023 and has since become one of the mall's most Instagrammed dining destinations, praised for its authentic yet elevated take on North Indian cuisine culture.",
      images: ["/projects/kake.jpg"],
      cta: null
    },
    {
      id: "chevella-mansion-interior",
      category: "Architecture & Interior",
      title: "Chevella Mansion — Interior Design",
      mainImage: "/projects/mansion/OP1 P2.jpg",
      shortDescription: "A luxurious private residence near Hyderabad, blending contemporary elegance with traditional warmth.",
      fullDescription: "Located in Chevella, near Hyderabad, this mansion interior project reimagines residential luxury. The design harmonizes modern aesthetics with regional influences, creating inviting spaces filled with natural light, bespoke finishes, and a sense of timeless comfort.",
      images: [
        "/projects/mansion/OP1 P2.jpg",
        "/projects/mansion/OP2 P2.jpg",
        "/projects/mansion/OP3 P2.jpg",
        "/projects/mansion/ROOM INTERIOR P2.jpg"
      ],
      cta: null
    },
    {
      id: "gurgaon-residential-interior",
      category: "Architecture & Interior",
      title: "Luxury Residential Interior Design — Gurgaon",
      mainImage: "/projects/gurgaon-residential/2.jpg",
      shortDescription: "A luxury residential interior design project in Gurgaon, creating sophisticated modern living spaces with premium finishes and thoughtful functionality.",
      fullDescription: "A luxury residential interior design project in Gurgaon that transforms living spaces into sophisticated, elegant environments. The design combines contemporary aesthetics with premium materials and finishes, creating spaces that reflect refined taste and modern luxury while maintaining warmth and character.",
      images: [
        "/projects/gurgaon-residential/2.jpg",
        "/projects/gurgaon-residential/4.jpg",
        "/projects/gurgaon-residential/5.jpg",
        "/projects/gurgaon-residential/6.png"
      ],
      cta: null
    }
  ];

  // Group by category for headings
  const categories = ["All", "Landscape", "Urban Design", "Architecture & Interior"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
            Our <span className="text-[#e7a77e]">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
            Each project is a conversation — with land, with people, and with possibility. Explore how our work translates values into space, and vision into impact.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white shadow-lg'
                    : 'bg-[#f6f2ed] text-[#6b7280] hover:bg-[#e7a77e]/10 hover:text-[#e7a77e]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer group"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#e7a77e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#232323] mb-3 leading-tight group-hover:text-[#e7a77e] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center text-[#e7a77e] font-semibold group-hover:text-[#e38d5f] transition-colors duration-200">
                    View Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] rounded-2xl p-12 border border-[#e7d8c9]">
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
                Start a Conversation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 