import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const baseUrl = 'https://ukiyohabitat.com';
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
