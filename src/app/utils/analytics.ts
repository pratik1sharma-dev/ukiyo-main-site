/**
 * Utility to send track events to both GA4 (gtag) and Google Tag Manager (dataLayer)
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;

  // Send to GA4 via gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Push to GTM dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

/**
 * Tracks lead form submission (GA4 standard generate_lead event)
 */
export const trackLeadSubmission = (projectType: string, location?: string) => {
  trackEvent('generate_lead', {
    event_category: 'Contact Form',
    event_label: projectType,
    project_type: projectType,
    lead_location: location || 'Not Specified',
  });
};

/**
 * Tracks WhatsApp button click
 */
export const trackWhatsAppClick = (source: string) => {
  trackEvent('click_whatsapp', {
    event_category: 'Engagement',
    event_label: source,
  });
};

/**
 * Tracks phone call click
 */
export const trackPhoneClick = (source: string) => {
  trackEvent('click_phone', {
    event_category: 'Engagement',
    event_label: source,
  });
};
