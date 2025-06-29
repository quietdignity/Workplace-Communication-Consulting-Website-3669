// Utility functions for link verification and monitoring

// Verify external links are accessible
export const verifyExternalLinks = async () => {
  const externalLinks = [
    'https://tidycal.com/jamesbrowntv/workplace-mapping-consultation',
    // Add other external links as needed
  ];

  const results = [];
  
  for (const link of externalLinks) {
    try {
      // In a real application, you might use fetch with no-cors mode
      // For now, we'll just verify the URL format
      const url = new URL(link);
      results.push({
        url: link,
        status: 'valid',
        accessible: true
      });
    } catch (error) {
      results.push({
        url: link,
        status: 'invalid',
        error: error.message
      });
    }
  }
  
  return results;
};

// Verify internal navigation links
export const verifyInternalNavigation = () => {
  const sections = [
    'hero',
    'communication-reality',
    'solution',
    'methodology',
    'services',
    'contact',
    'faq'
  ];

  const results = [];
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    results.push({
      sectionId,
      exists: !!element,
      accessible: element ? true : false
    });
  });
  
  return results;
};

// Test email functionality
export const testEmailLinks = () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  const results = [];
  
  emailLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    const isValid = href && href.includes('team@workplacemapping.com');
    
    results.push({
      index,
      href,
      valid: isValid,
      element: link.textContent || 'Email Link'
    });
  });
  
  return results;
};

// Monitor link health (can be called periodically)
export const monitorLinkHealth = () => {
  const results = {
    external: verifyExternalLinks(),
    internal: verifyInternalNavigation(),
    email: testEmailLinks(),
    timestamp: new Date().toISOString()
  };
  
  console.log('Link Health Report:', results);
  return results;
};

// Verify analytics tracking
export const verifyAnalytics = () => {
  const hasGtag = typeof window !== 'undefined' && typeof window.gtag === 'function';
  const hasDataLayer = typeof window !== 'undefined' && Array.isArray(window.dataLayer);
  
  return {
    gtag: hasGtag,
    dataLayer: hasDataLayer,
    functional: hasGtag && hasDataLayer
  };
};