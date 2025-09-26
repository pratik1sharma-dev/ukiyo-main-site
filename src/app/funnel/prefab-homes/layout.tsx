import "../../globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Analytics from "../../components/Analytics";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ukiyohabitat.com';

export const metadata: Metadata = {
  title: "Fast Prefab Homes India | 10 Week Construction | LGSF Steel Frame Houses",
  description: "Stop construction delays and cost overruns. Get your modern prefab home built in 10 weeks with LGSF technology. Fixed pricing, 25-year warranty. Free feasibility report.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/funnel/prefab-homes`,
    siteName: 'Fast Prefab Homes India',
    title: 'Build Your Dream Home in 10 Weeks | Prefab Steel Frame Construction',
    description: 'Avoid 18-month delays. Get fixed pricing, zero hidden costs, and 25-year warranty on your new prefab home.',
    images: [
      {
        url: `${siteUrl}/prefab-home-hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Modern Prefab Steel Frame Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Your Dream Home in 10 Weeks | Prefab Construction',
    description: 'Stop construction nightmares. Fixed pricing, fast delivery, 25-year warranty.',
    images: [`${siteUrl}/prefab-home-hero.jpg`],
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
  keywords: [
    'prefab homes India',
    'steel frame construction India',
    'LGSF homes',
    'fast home construction',
    'modular homes India',
    'prefabricated houses',
    'quick construction India',
    'steel structure homes',
    'modern prefab homes',
    'construction delays solution',
    'fixed price home construction',
    'reliable home builders',
    'prefab homes Delhi',
    'prefab homes Bangalore',
    'prefab homes Mumbai',
    'prefab homes Pune',
    'prefab homes Gurgaon',
    'prefab homes Hyderabad',
    'steel frame houses India',
    '10 week home construction',
    'fast track construction',
    'pre-engineered homes',
    'factory built homes India'
  ],
};

export default function FunnelLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
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
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fast Prefab Homes India",
              "description": "Leading prefab steel frame home construction company in India. Build your dream home in 10 weeks with LGSF technology.",
              "url": `${siteUrl}/funnel`,
              "telephone": "+91-98765-43210",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.7041",
                "longitude": "77.1025"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₹₹₹",
              "areaServed": [
                "Delhi", "Gurgaon", "Noida", "Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai", "Kolkata"
              ],
              "serviceType": "Prefab Home Construction",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Prefab Home Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "LGSF Steel Frame Home Construction",
                      "description": "Complete prefab home construction in 10 weeks"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${cormorant.variable} bg-white min-h-screen`}>
        {/* No Header - Clean funnel experience */}
        <main className="w-full">
          {children}
        </main>
        {/* No Footer - Keep focus on conversion */}
        
        <Analytics />
        
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/919205510427?text=Hi! I'm interested in your prefab homes. Can you help me?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
          </a>
        </div>
        
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
