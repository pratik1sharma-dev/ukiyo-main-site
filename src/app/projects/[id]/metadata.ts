import { Metadata } from 'next';

// Project data (same as in the page component)
const projects = [
  {
    id: "bandhavgarh-landscape",
    category: "Landscape",
    title: "Breath with the Forest — Landscape Design at Bandhavgarh",
    shortDescription: "Set along the forest fringes of Bandhavgarh Tiger Reserve, this landscape project reimagines a once-cleared land into an ecologically rich sanctuary.",
  },
  {
    id: "haldiram-landscape",
    category: "Landscape",
    title: "Haldiram Landscape",
    shortDescription: "A comprehensive landscape design project for Haldiram's corporate campus, creating sustainable outdoor spaces.",
  },
  {
    id: "ahmedabad-haat-street",
    category: "Urban Design",
    title: "Activating Ahmedabad Haat Street",
    shortDescription: "Revitalizing urban spaces through innovative street design and community engagement.",
  },
  {
    id: "vastrapur-lake",
    category: "Urban Design",
    title: "Vastrapur Lake",
    shortDescription: "Transforming a neglected urban lake into a vibrant community space and ecological asset.",
  },
  {
    id: "kake-da-hotel",
    category: "Architecture & Interior",
    title: "Kake Da Hotel in Ambience Mall",
    shortDescription: "Modern restaurant design that blends traditional aesthetics with contemporary functionality.",
  }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found | Ukiyo Habitat",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Ukiyo Habitat`,
    description: project.shortDescription,
    keywords: [
      "Ukiyo Habitat",
      "Architecture",
      "Interior Design",
      "Landscape Design",
      "Urban Design",
      project.category,
      "Delhi",
      "India"
    ],
    openGraph: {
      title: `${project.title} | Ukiyo Habitat`,
      description: project.shortDescription,
      type: "article",
      images: [
        {
          url: `/projects/${project.id}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ukiyo Habitat`,
      description: project.shortDescription,
      images: [`/projects/${project.id}/og-image.jpg`],
    },
  };
} 