"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SEOOptimizer from "../../components/SEOOptimizer";

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
    cta: { label: "View Gallery", href: "https://drive.google.com/drive/folders/1TcTZLvz9bbA3-CqAUxjz2vLAW6QK_Ove?usp=drive_link" }
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
    mainImage: "/projects/gurgaon-residential/1.jpg",
    shortDescription: "A luxury residential interior design project in Gurgaon, creating sophisticated modern living spaces with premium finishes and thoughtful functionality.",
    fullDescription: "A luxury residential interior design project in Gurgaon that transforms living spaces into sophisticated, elegant environments. The design combines contemporary aesthetics with premium materials and finishes, creating spaces that reflect refined taste and modern luxury while maintaining warmth and character.",
    images: [
      "/projects/gurgaon-residential/1.jpg",
      "/projects/gurgaon-residential/2.jpg",
      "/projects/gurgaon-residential/4.jpg",
      "/projects/gurgaon-residential/5.jpg",
      "/projects/gurgaon-residential/6.png"
    ],
    cta: null
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
    <>
      <SEOOptimizer
        type="creativeWork"
        title={project.title}
        description={project.shortDescription}
        image={project.mainImage}
        images={project.images}
        author={"Ukiyo Habitat"}
        section={project.category}
        tags={[]}
      />
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
    </>
  );
} 