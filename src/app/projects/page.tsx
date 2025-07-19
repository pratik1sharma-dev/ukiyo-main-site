"use client";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  // Project data (grouped by category)
  const projects = [
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
      cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1K_qC4Nabxr6m7ge3Q8CYSjU1FQmyybdf?usp=sharing" }
    },
    {
      id: "haldiram-landscape",
      category: "Landscape",
      title: "Haldiram Landscape",
      mainImage: "/projects/haldiram/13.png",
      shortDescription: "A comprehensive landscape design project for Haldiram's corporate campus, creating sustainable outdoor spaces.",
      fullDescription: "Project details coming soon.",
      images: [
        "/projects/haldiram/13.png",
        "/projects/haldiram/9.png",
        "/projects/haldiram/12.png",
        "/projects/haldiram/14.png",
        "/projects/haldiram/11.png",
        "/projects/haldiram/10.png"
      ],
      cta: null
    },
    {
      id: "ahmedabad-haat-street",
      category: "Urban Design",
      title: "Activating Ahmedabad Haat Street",
      mainImage: "/projects/ahmedabad-haat.jpg",
      shortDescription: "Revitalizing urban spaces through innovative street design and community engagement.",
      fullDescription: "A comprehensive urban design project focused on activating and revitalizing public spaces in Ahmedabad's historic district.",
      images: ["/projects/ahmedabad-haat.jpg"],
      cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1bqp8SCVMZchSg8D_61d3UI-Jp9IDczvZ?usp=drive_link" }
    },
    {
      id: "vastrapur-lake",
      category: "Urban Design",
      title: "Vastrapur Lake",
      mainImage: "/projects/vastrapur lake/1.png",
      shortDescription: "Transforming a neglected urban lake into a vibrant community space and ecological asset.",
      fullDescription: "An urban renewal project that transforms Vastrapur Lake into a sustainable, accessible community space while preserving its ecological value.",
      images: ["/projects/vastrapur lake/1.png"],
      cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1yI6cRDBEAVhhYixb9SaLcXdThOYIqYDX?usp=drive_link" }
    },
    {
      id: "kake-da-hotel",
      category: "Architecture & Interior",
      title: "Kake Da Hotel in Ambience Mall",
      mainImage: "/projects/kake-da-hotel.jpg",
      shortDescription: "Modern restaurant design that blends traditional aesthetics with contemporary functionality.",
      fullDescription: "A sophisticated restaurant interior design project that creates an inviting atmosphere while maximizing space efficiency in a mall setting.",
      images: ["/projects/kake-da-hotel.jpg"],
      cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1TcTZLvz9bbA3-CqAUxjz2vLAW6QK_Ove?usp=drive_link" }
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
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-[#232323] text-center">Our Work</h1>
      
      {/* Filter Tabs/Chips */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e7a77e] text-base shadow-sm
              ${selectedCategory === cat
                ? "bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white border-transparent shadow-lg"
                : "bg-white text-[#232323] border-[#e7a77e] hover:bg-[#f6f2ed] hover:shadow-md"}
            `}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CSS Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.title + idx}
            className="bg-white rounded-3xl shadow-xl overflow-hidden opacity-0 animate-fadeIn hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
          >
            {/* Hero Image */}
            <div className="relative flex-shrink-0">
              <img
                src={project.mainImage}
                alt={`${project.title} - Main view`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-[#232323] px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-[#232323] leading-tight min-h-[3rem]">
                {project.title}
              </h3>
              
              {/* Short Description */}
              <p className="text-[#6b7280] mb-6 text-sm leading-relaxed flex-grow">
                {project.shortDescription}
              </p>

              {/* Action Button */}
              <div className="mt-auto">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm text-center block"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.6s ease forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
} 