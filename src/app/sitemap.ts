import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/think-tank`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Dynamic project pages
  const projects = [
    'bandhavgarh-landscape',
    'haldiram-landscape',
    'ahmedabad-haat-street',
    'vastrapur-lake',
    'kake-da-hotel',
    'chevella-mansion-interior',
    'gurgaon-residential-interior',
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic think tank articles
  const thinkTankArticles = [
    'ooh-urban-design',
    'sustainable-architecture-india',
    'landscape-design-trends',
    'haldiram-commercial-landscape',
  ];

  const articlePages = thinkTankArticles.map((article) => ({
    url: `${baseUrl}/think-tank/${article}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...articlePages];
} 