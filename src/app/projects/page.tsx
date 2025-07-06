"use client";
import { useState } from "react";

const categories = ["All", "Landscape", "Urban", "Interiors", "Conceptual"];

const projects = [
  {
    title: "Green Oasis Park",
    category: "Landscape",
    image: "/project1.jpg",
  },
  {
    title: "City Square Revitalization",
    category: "Urban",
    image: "/project2.jpg",
  },
  {
    title: "Modern Loft Interiors",
    category: "Interiors",
    image: "/project3.jpg",
  },
  {
    title: "Eco Campus",
    category: "Landscape",
    image: "/project4.jpg",
  },
  {
    title: "Transit-Oriented District",
    category: "Urban",
    image: "/project5.jpg",
  },
  {
    title: "Concept Pavilion",
    category: "Conceptual",
    image: "/project6.jpg",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#232323] text-center">Our Projects</h1>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border transition-colors text-base font-medium ${selected === cat ? "bg-[#e7a77e] text-white border-[#e7a77e]" : "bg-white text-[#232323] border-[#b7c9c9] hover:bg-[#f2ede7]"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Gallery */}
      <div className="grid gap-8">
        {filtered.map((project, idx) => (
          <div key={idx} className="w-full relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-6 py-4 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="font-semibold text-lg">{project.title}</div>
              <div className="text-sm uppercase tracking-wide">{project.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 