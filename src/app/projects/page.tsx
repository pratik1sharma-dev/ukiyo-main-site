"use client";
import { useState } from "react";

const tabs = [
  { label: "Landscape", id: "landscape" },
  { label: "Urban Design", id: "urban" },
  { label: "Architecture & Interior", id: "interior" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("landscape");

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#232323] text-center">Our Work</h1>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-10">
        <nav role="tablist" aria-label="Project categories" className="flex gap-2 bg-[#f6f2ed] rounded-full p-2 shadow">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e7a77e] text-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white shadow"
                  : "bg-transparent text-[#232323] hover:bg-[#e7a77e]/20"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Panels */}
      {/* Landscape Tab */}
      <div
        id="tabpanel-landscape"
        role="tabpanel"
        aria-labelledby="tab-landscape"
        hidden={activeTab !== "landscape"}
        className={activeTab === "landscape" ? "block" : "hidden"}
      >
        {/* Bandhavgarh Project */}
        <div className="bg-[#f6f2ed] rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 md:mb-0">
            <img src="/projects/bandhavgarh-1.jpg" alt="Bandhavgarh site 1" className="w-full h-48 object-cover rounded-xl" />
            <img src="/projects/bandhavgarh-2.jpg" alt="Bandhavgarh site 2" className="w-full h-48 object-cover rounded-xl" />
            <img src="/projects/bandhavgarh-3.jpg" alt="Bandhavgarh site 3" className="w-full h-48 object-cover rounded-xl sm:col-span-2" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Breath with the Forest — Landscape Design at Bandhavgarh</h3>
            <div className="text-[#6b7280] mb-2">Project area: 1 acre</div>
            <p className="text-[#232323] mb-4 text-sm leading-relaxed">
              Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary. Designed for nature enthusiasts, the site revolves around a seasonal water body — a relic of human intervention — which now serves as the ecological anchor for the entire design.<br/><br/>
              The approach prioritizes restoration through native planting, integrating species like karanj, neem, jamun, kadamb, and moringa that support local biodiversity and require minimal irrigation once mature. Thoughtfully layered plantings mimic natural forest systems, offering habitat, food sources, and nesting opportunities for birds and animals.<br/><br/>
              Sustainability lies at the core of the project. The water body is revitalized using soil bioengineering and local vegetation. A rainwater harvesting system with underground perforated piping helps recharge the groundwater table, while open spaces use permeable surfaces to reduce runoff.<br/><br/>
              "Breath with the Forest" is more than a landscape — it’s a regenerative vision. The design blurs boundaries between built and natural, creating a space where people can live in quiet dialogue with the land, witnessing seasonal rhythms and ecological resilience unfold.
            </p>
            <a href="https://drive.google.com/drive/folders/1K_qC4Nabxr6m7ge3Q8CYSjU1FQmyybdf?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">View Gallery</a>
          </div>
        </div>
        {/* Haldiram Landscape Placeholder */}
        <div className="bg-[#f6f2ed] rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex items-center justify-center">
            <img src="/projects/haldiram-placeholder.jpg" alt="Haldiram Landscape" className="w-full h-48 object-cover rounded-xl max-w-xs" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Haldiram Landscape</h3>
            <div className="text-[#6b7280] mb-2">Project details coming soon.</div>
          </div>
        </div>
      </div>

      {/* Urban Design Tab */}
      <div
        id="tabpanel-urban"
        role="tabpanel"
        aria-labelledby="tab-urban"
        hidden={activeTab !== "urban"}
        className={activeTab === "urban" ? "block" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ahmedabad Haat Street */}
          <div className="bg-[#f6f2ed] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <img src="/projects/ahmedabad-haat.jpg" alt="Ahmedabad Haat Street" className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-lg font-bold mb-2">Activating Ahmedabad Haat Street</h3>
            <a href="https://drive.google.com/drive/folders/1bqp8SCVMZchSg8D_61d3UI-Jp9IDczvZ?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">View Gallery</a>
          </div>
          {/* Vastrapur Lake */}
          <div className="bg-[#f6f2ed] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <img src="/projects/vastrapur-lake.jpg" alt="Vastrapur Lake" className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-lg font-bold mb-2">Vastrapur Lake</h3>
            <a href="https://drive.google.com/drive/folders/1yI6cRDBEAVhhYixb9SaLcXdThOYIqYDX?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">View Gallery</a>
          </div>
        </div>
      </div>

      {/* Architecture & Interior Tab */}
      <div
        id="tabpanel-interior"
        role="tabpanel"
        aria-labelledby="tab-interior"
        hidden={activeTab !== "interior"}
        className={activeTab === "interior" ? "block" : "hidden"}
      >
        <div className="bg-[#f6f2ed] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex items-center justify-center">
            <img src="/projects/kake-da-hotel.jpg" alt="Kake Da Hotel in Ambience Mall" className="w-full h-48 object-cover rounded-xl max-w-xs" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Kake Da Hotel in Ambience Mall</h3>
            <a href="https://drive.google.com/drive/folders/1TcTZLvz9bbA3-CqAUxjz2vLAW6QK_Ove?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow hover:shadow-lg text-sm">View Gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
} 