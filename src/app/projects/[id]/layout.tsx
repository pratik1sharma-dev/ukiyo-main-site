// src/app/projects/[id]/layout.tsx

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';
  const id = params.id;
  const titleMap: Record<string, { title: string; description: string; image?: string; keywords?: string[] }> = {
    'bandhavgarh-landscape': {
      title: 'Breath with the Forest — Bandhavgarh Landscape | Ukiyo Habitat',
      description: 'Ecological landscape design at Bandhavgarh focusing on restoration and native systems.',
      image: '/projects/bandhavgarh/front.png',
      keywords: [
        'Bandhavgarh landscape design',
        'ecological restoration landscape',
        'native planting design India',
        'wildlife edge landscape design',
        'central India landscape architect'
      ]
    },
    'haldiram-landscape': {
      title: 'Haldiram Landscape | Ukiyo Habitat',
      description: 'Premium landscape design for Haldiram at Modi Mall, Noida—safe, sustainable, accessible, and Instagram-worthy spaces that boost footfall and brand identity.',
      image: '/projects/haldiram/1.jpg',
      keywords: [
        'Landscape design Noida',
        'Commercial landscape architecture India',
        'Sustainable landscape solutions',
        'Public space design for malls',
        'Barrier-free landscape design',
        'Waterlogging prevention landscape',
        'Kids play area landscape design',
        'Haldiram landscape project',
        'Eco-friendly materials in landscaping',
        'Native plantation landscape India'
      ]
    },
    'kake-da-hotel': {
      title: 'Kake Da Hotel — Ambience Mall | Ukiyo Habitat',
      description: 'Contemporary restaurant interior blending tradition and modernity in New Delhi.',
      image: '/projects/kake.jpg',
      keywords: [
        'restaurant interior design Vasant Kunj',
        'mall restaurant interior Delhi',
        'North Indian restaurant interior',
        'hospitality interior design Delhi NCR'
      ]
    },
    'chevella-mansion-interior': {
      title: 'Chevella Mansion — Interior Design | Ukiyo Habitat',
      description: 'A luxurious private residence near Hyderabad with timeless interiors.',
      image: '/projects/mansion/OP1 P2.jpg',
      keywords: [
        'luxury interior design Hyderabad',
        'private residence interior Telangana',
        'bespoke interior design India'
      ]
    },
    'gurgaon-residential-interior': {
      title: 'Luxury Residential Interior Design — Gurgaon | Ukiyo Habitat',
      description: 'Luxury 1300 sq ft 4 BHK residential interior design in Gurgaon with premium finishes, sophisticated modern living spaces, and thoughtful functionality.',
      image: '/projects/gurgaon-residential/2.jpg',
      keywords: [
        'luxury residential interior design Gurgaon',
        '4 BHK interior design Gurgaon',
        '1300 sq ft home interior design',
        'luxury apartment interior Gurgaon',
        'premium residential interior Delhi NCR',
        'luxury home interior design Gurgaon',
        '4 bedroom luxury interior design',
        'premium interior design Gurgaon',
        'luxury residential interior architect Gurgaon',
        'high-end home design India',
        'modern luxury residential interior',
        'Gurgaon luxury apartment design',
        'premium 4 BHK interior Gurgaon'
      ]
    },
  };

  const entry = titleMap[id];
  if (!entry) return {};

  const canonical = `${baseUrl}/projects/${id}`;
  const ogImage = entry.image ? `${baseUrl}${entry.image}` : `${baseUrl}/logo.png`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: entry.title,
      description: entry.description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
      images: [ogImage],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {children}
    </div>
  );
}
