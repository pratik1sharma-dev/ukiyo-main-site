import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
// Import Header and Footer components (to be created)
import Header from "./Header";
import Footer from "./Footer";
import { Cormorant_Garamond } from "next/font/google";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Analytics from "./components/Analytics";
import SEOOptimizer from "./components/SEOOptimizer";
import WhatsAppButton from "./components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';
const siteName = 'Ukiyo Habitat';
const siteDescription = 'Ukiyo Habitat is a cross-disciplinary design studio creating sustainable, immersive environments rooted in ecology and driven by innovation.';
const siteImage = `${siteUrl}/images/og-image.jpg`;

// Define shared metadata
export const metadata: Metadata = {
  title: {
    default: `${siteName} | Architectural Firm`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [siteImage],
    creator: '@ukiyohabitat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'landscape architecture India',
    'urban design Delhi',
    'sustainable architecture firm',
    'ecological design studio',
    'climate-responsive design',
    'participatory urbanism',
    'blue-green infrastructure',
    'public space design',
    'urban resilience',
    'community placemaking',
    'water-sensitive design',
    'adaptive reuse architecture',
    'child-friendly spaces',
    'Ukiyo Habitat',
    'architectural firm Delhi',
    'landscape architect India',
    'urban ecologist',
    'sustainable urban design',
    'ecological landscape architecture',
    'climate-adaptive design'
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        <SEOOptimizer />
        
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}
        {/* End Google Tag Manager */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: siteName,
              image: siteImage,
              '@id': siteUrl,
              url: siteUrl,
              telephone: '+91-XXXXXXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Your Street Address',
                addressLocality: 'City',
                postalCode: 'XXXXXX',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 0,
                longitude: 0,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.instagram.com/ukiyohabitat',
                'https://www.linkedin.com/company/ukiyo-habitat',
              ],
            }),
          }}
        />
      </head>
      <body className={`${cormorant.variable} bg-[#f6f2ed] min-h-screen flex flex-col`}>
        <PerformanceMonitor />
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <Analytics />
        <WhatsAppButton 
          phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210"}
          message="Hi! I'm interested in your architectural services. Can you help me?"
        />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
