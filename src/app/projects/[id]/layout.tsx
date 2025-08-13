// src/app/projects/[id]/layout.tsx

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const baseUrl = 'https://ukiyohabitat.com';
  const id = params.id;
  const titleMap: Record<string, { title: string; description: string; image?: string }> = {
    'bandhavgarh-landscape': {
      title: 'Breath with the Forest — Bandhavgarh Landscape | Ukiyo Habitat',
      description: 'Ecological landscape design at Bandhavgarh focusing on restoration and native systems.',
      image: '/projects/bandhavgarh/front.png',
    },
    'haldiram-landscape': {
      title: 'Haldiram Landscape | Ukiyo Habitat',
      description: 'Sustainable corporate campus landscape design for Haldiram.',
      image: '/projects/haldiram/13.png',
    },
    'kake-da-hotel': {
      title: 'Kake Da Hotel — Ambience Mall | Ukiyo Habitat',
      description: 'Contemporary restaurant interior blending tradition and modernity in New Delhi.',
      image: '/projects/kake.jpg',
    },
    'chevella-mansion-interior': {
      title: 'Chevella Mansion — Interior Design | Ukiyo Habitat',
      description: 'A luxurious private residence near Hyderabad with timeless interiors.',
      image: '/projects/mansion/OP1 P2.jpg',
    },
  };

  const entry = titleMap[id];
  if (!entry) return {};

  const canonical = `${baseUrl}/projects/${id}`;
  const ogImage = entry.image ? `${baseUrl}${entry.image}` : `${baseUrl}/logo.png`;

  return {
    title: entry.title,
    description: entry.description,
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
