// Performance monitoring utilities
export const trackPerformance = () => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (lastEntry.startTime > 2500) {
        console.warn('LCP is slow:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
        
        if (entry.processingStart - entry.startTime > 100) {
          console.warn('FID is slow:', entry.processingStart - entry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      
      if (clsValue > 0.1) {
        console.warn('CLS is poor:', clsValue);
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log('Page load time:', loadTime);
    
    if (loadTime > 3000) {
      console.warn('Page load is slow:', loadTime);
    }
  });
};

// Image loading performance
export const trackImageLoad = (imageSrc: string) => {
  const startTime = performance.now();
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image loaded: ${imageSrc} in ${loadTime}ms`);
      resolve(loadTime);
    };
    img.src = imageSrc;
  });
};

// Bundle size monitoring
export const getBundleSize = () => {
  if (typeof window === 'undefined') return;
  
  const resources = performance.getEntriesByType('resource');
  const jsResources = resources.filter(r => r.name.includes('.js'));
  const cssResources = resources.filter(r => r.name.includes('.css'));
  
  const totalJS = jsResources.reduce((sum, r) => sum + r.transferSize, 0);
  const totalCSS = cssResources.reduce((sum, r) => sum + r.transferSize, 0);
  
  console.log('Bundle sizes:', {
    js: `${(totalJS / 1024).toFixed(2)}KB`,
    css: `${(totalCSS / 1024).toFixed(2)}KB`,
    total: `${((totalJS + totalCSS) / 1024).toFixed(2)}KB`
  });
}; 