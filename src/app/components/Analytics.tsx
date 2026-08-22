"use client";
import { useEffect } from 'react';
import Script from 'next/script';

// Type declarations for global gtag function
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | string,
      targetId: string,
      config?: {
        page_path?: string;
        page_title?: string;
        page_location?: string;
        send_page_view?: boolean;
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  hotjarId?: string;
  facebookPixelId?: string;
}

export default function Analytics({
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID,
  hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID,
  facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
}: AnalyticsProps) {
  useEffect(() => {
    // Debug logging
    console.log('🔍 Analytics Debug Info:', {
      googleAnalyticsId,
      googleTagManagerId,
      hotjarId,
      facebookPixelId,
      hasGtag: typeof window !== 'undefined' && !!window.gtag,
      currentPath: typeof window !== 'undefined' ? window.location.pathname : 'SSR'
    });

    // Track page views on route changes in App Router
    const sendPageView = () => {
      if (typeof window !== 'undefined' && window.gtag && googleAnalyticsId) {
        console.log('📊 Sending GA page view:', {
          page_path: window.location.pathname,
          page_title: document.title,
          page_location: window.location.href,
        });
        window.gtag('config', googleAnalyticsId, {
          page_path: window.location.pathname,
          page_title: document.title,
          page_location: window.location.href,
        });
      } else {
        console.warn('⚠️ GA page view not sent:', {
          hasWindow: typeof window !== 'undefined',
          hasGtag: typeof window !== 'undefined' && !!window.gtag,
          hasAnalyticsId: !!googleAnalyticsId
        });
      }
    };

    // Listen to popstate and pushState/replaceState
    const onPopState = () => sendPageView();
    const origPushState = history.pushState.bind(window.history);
    const origReplaceState = history.replaceState.bind(window.history);
    (history as any).pushState = function (...args: [data: any, unused: string, url?: string | URL | null | undefined]) {
      const ret = origPushState(args[0], args[1], args[2] as any);
      sendPageView();
      return ret;
    } as typeof history.pushState;
    (history as any).replaceState = function (...args: [data: any, unused: string, url?: string | URL | null | undefined]) {
      const ret = origReplaceState(args[0], args[1], args[2] as any);
      sendPageView();
      return ret;
    } as typeof history.replaceState;
    window.addEventListener('popstate', onPopState);

    return () => {
      history.pushState = origPushState;
      history.replaceState = origReplaceState;
      window.removeEventListener('popstate', onPopState);
    };
  }, [googleAnalyticsId]);

  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              console.log('🚀 GA Script loaded, ID: ${googleAnalyticsId}');
              
              gtag('config', '${googleAnalyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                debug_mode: true
              });
              
              console.log('✅ GA configured with ID: ${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}

      {/* Vercel Speed Insights */}
      <Script
        src="https://vitals.vercel-insights.com/v1/vitals.js"
        strategy="afterInteractive"
      />

      {/* Hotjar */}
      {hotjarId && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}

      {/* Facebook Pixel */}
      {facebookPixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Facebook Pixel (noscript) */}
      {facebookPixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
} 