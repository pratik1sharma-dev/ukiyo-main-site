"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Project data (same as in the main projects page)
const projects = [
  {
    id: "bandhavgarh-landscape",
    category: "Landscape",
    title: "Breath with the Forest — Landscape Design at Bandhavgarh",
    mainImage: "/projects/bandhavgarh/front.png",
    shortDescription: "Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary.",
    fullDescription: "Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary. The design integrates native flora and sustainable practices to create a harmonious blend with the surrounding wilderness. Our approach focused on ecological restoration while creating functional spaces that respect the natural habitat of the region's diverse wildlife.",
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
    fullDescription: "A comprehensive urban design project focused on activating and revitalizing public spaces in Ahmedabad's historic district. This project demonstrates our commitment to creating inclusive, accessible urban environments that celebrate local culture while meeting modern needs.",
    images: ["/projects/ahmedabad-haat.jpg"],
    cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1bqp8SCVMZchSg8D_61d3UI-Jp9IDczvZ?usp=drive_link" }
  },
  {
    id: "vastrapur-lake",
    category: "Urban Design",
    title: "Vastrapur Lake",
    mainImage: "/projects/vastrapur lake/1.png",
    shortDescription: "Transforming a neglected urban lake into a vibrant community space and ecological asset.",
    fullDescription: "An urban renewal project that transforms Vastrapur Lake into a sustainable, accessible community space while preserving its ecological value. The design incorporates walking paths, seating areas, and native vegetation to create a welcoming environment for all visitors.",
    images: ["/projects/vastrapur lake/1.png"],
    cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1yI6cRDBEAVhhYixb9SaLcXdThOYIqYDX?usp=drive_link" }
  },
  {
    id: "kake-da-hotel",
    category: "Architecture & Interior",
    title: "Kake Da Hotel in Ambience Mall",
    mainImage: "/projects/kake-da-hotel.jpg",
    shortDescription: "Modern restaurant design that blends traditional aesthetics with contemporary functionality.",
    fullDescription: "A sophisticated restaurant interior design project that creates an inviting atmosphere while maximizing space efficiency in a mall setting. The design balances traditional Indian hospitality with modern dining expectations, creating a memorable experience for guests.",
    images: ["/projects/kake-da-hotel.jpg"],
    cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1TcTZLvz9bbA3-CqAUxjz2vLAW6QK_Ove?usp=drive_link" }
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#232323]">Project Not Found</h1>
        <p className="text-[#6b7280] mb-8">The project you're looking for doesn't exist.</p>
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto pt-8 px-4">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-[#232323] hover:text-[#e7a77e] transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Project Header */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96">
              <img
                src={project.mainImage}
                alt={`${project.title} - Main view`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-[#232323] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-[#232323]">Project Overview</h2>
              <p className="text-[#6b7280] leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#232323]">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                  <div key={img} className="group cursor-pointer">
                    <img
                      src={img}
                      alt={`${project.title} - Image ${i + 1}`}
                      className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-[#232323]">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-[#6b7280]">Category</span>
                  <p className="text-[#232323] font-semibold">{project.category}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-[#6b7280]">Images</span>
                  <p className="text-[#232323] font-semibold">{project.images.length} photos</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 