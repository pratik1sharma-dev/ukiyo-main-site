import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';
  const id = params.id;
  const titleMap: Record<string, { title: string; description: string; image?: string }> = {
    'villa-wellness-hub': {
      title: 'How to Make My Villa a Wellness Hub | Ukiyo Habitat',
      description: 'Turn your villa into a comprehensive wellness sanctuary with sustainable design and holistic living.',
      image: '/hero-bg-3.jpg',
    },
    'ooh-urban-design': {
      title: 'Reimagining OOH in Public Space Design | Ukiyo Habitat',
      description: 'How OOH can integrate with public spaces to enhance urban experience and design.',
      image: '/ooh-garima.jpg',
    },
    'ahmedabad-haat-street': {
      title: 'Ahmedabad Haat Street Revitalization | Ukiyo Habitat',
      description: 'Research on urban street revitalization through Ahmedabad’s Haat Street transformation.',
      image: '/projects/haat/9.png',
    },
    'vastrapur-lake': {
      title: 'Vastrapur Lake Revitalization | Ukiyo Habitat',
      description: 'Insights on urban lake revitalization and climate resilience in Ahmedabad.',
      image: '/projects/vastrapur lake/1.png',
    },
    'haldiram-commercial-landscape': {
      title: 'Designing Commercial Landscapes: Safety, Sustainability, and Brand Impact | Ukiyo Habitat',
      description: 'A case study of the Haldiram landscape design at Modi Mall, Noida, exploring how thoughtful design creates safe, sustainable, and commercially successful spaces.',
      image: '/projects/haldiram/1.jpg',
    },
    'extreme-heat-landscape-infrastructure': {
      title: 'Designing Indian Cities for Extreme Heat: Landscape as Urban Infrastructure | Ukiyo Habitat',
      description: 'How landscape can act as cooling infrastructure in Indian cities facing extreme heat and urban heat island effects.',
      image: '/projects/bandhavgarh/front.png',
    },
    'retail-public-realm-footfall': {
      title: 'From Parking Lots to Public Realms: Landscape Design for Indian Retail | Ukiyo Habitat',
      description: 'How better landscape and public realm design can increase footfall, dwell time, and brand visibility for Indian retail and F&B.',
      image: '/projects/haldiram/1.jpg',
    },
    'election-ooh-better-cities': {
      title: 'Can Political Advertising Make Better Cities? Rethinking OOH During Election Season | Ukiyo Habitat',
      description: 'A critical look at how election-season OOH could double as public infrastructure instead of visual clutter in Indian cities.',
      image: '/ooh-garima.jpg',
    },
  };

  const entry = titleMap[id];
  if (!entry) return {};

  const canonical = `${baseUrl}/think-tank/${id}`;
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

export default function ThinkTankItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f9f7f4] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
