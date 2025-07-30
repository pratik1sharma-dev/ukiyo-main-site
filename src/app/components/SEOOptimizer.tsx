"use client";
import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
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
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://ukiyohabitat.com',
  type = 'website',
  author = 'Ukiyo Habitat',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOOptimizerProps) {
  const siteName = 'Ukiyo Habitat';
  const siteUrl = 'https://ukiyohabitat.com';
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

    return baseData;
  };

  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTags = () => {
      // Update title
      document.title = title;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));

      // Update Open Graph tags
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${siteUrl}${image}` },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: 'en_US' }
      ];

      ogTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', tag.property);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', tag.content);
      });

      // Update Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:creator', content: twitterHandle },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${siteUrl}${image}` }
      ];

      twitterTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', tag.name);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', tag.content);
      });
    };

    updateMetaTags();
  }, [title, description, keywords, image, url, type]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi, India" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#e7a77e" />
      <meta name="msapplication-TileColor" content="#e7a77e" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
} 