'use client';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  images?: string[];
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'creativeWork';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export default function SEOOptimizer({
  title = 'Ukiyo Habitat | Architectural Firm',
  description = 'Ukiyo Habitat is a cross-disciplinary design studio creating sustainable, immersive environments rooted in ecology and driven by innovation.',
  keywords = [],
  image = '/logo.png',
  images,
  url = typeof window !== 'undefined' ? window.location.href : (process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com'),
  type = 'website',
  author = 'Ukiyo Habitat',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOOptimizerProps) {
  const siteName = 'Ukiyo Habitat';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';
  const twitterHandle = '@ukiyohabitat';

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: siteName,
      description: description,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}${image}`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://www.instagram.com/ukiyohabitat',
        'https://www.linkedin.com/company/ukiyo-habitat',
        'https://www.facebook.com/ukiyohabitat'
      ],
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      serviceType: [
        'Landscape Architecture',
        'Urban Design',
        'Sustainable Architecture',
        'Ecological Design',
        'Public Space Design'
      ]
    };

    if (type === 'article') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: `${siteUrl}${image}`,
        author: {
          '@type': 'Organization',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        },
        articleSection: section,
        keywords: keywords.join(', ')
      };
    }

    if (type === 'creativeWork') {
      const imageList = (images && images.length > 0)
        ? images.map((img) => `${siteUrl}${img}`)
        : [`${siteUrl}${image}`];

      return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: title,
        description: description,
        image: imageList,
        author: {
          '@type': 'Organization',
          name: author
        },
        url,
        about: section,
        keywords: keywords.join(', ')
      };
    }

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
    />
  );
} 