// Analytics utility functions for enhanced tracking

// Track email clicks
export const trackEmailClick = (emailAddress) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: emailAddress,
      value: 1
    });
  }
};

// Track calendar booking clicks
export const trackCalendarBooking = (source = 'unknown') => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calendar_booking', {
      event_category: 'conversion',
      event_label: source,
      value: 1
    });
  }
};

// Track FAQ interactions
export const trackFAQInteraction = (question) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'faq_interaction', {
      event_category: 'engagement',
      event_label: question,
      value: 1
    });
  }
};

// Track navigation usage
export const trackNavigation = (section) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'navigation_click', {
      event_category: 'navigation',
      event_label: section,
      value: 1
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage
    });
  }
};

// Track time on page milestones
export const trackTimeOnPage = (seconds) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: `${seconds} seconds`,
      value: seconds
    });
  }
};

// Track form interactions (for future contact forms)
export const trackFormInteraction = (formName, action) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'form_interaction', {
      event_category: 'form',
      event_label: `${formName}_${action}`,
      value: 1
    });
  }
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'external_link_click', {
      event_category: 'outbound',
      event_label: url,
      value: 1
    });
  }
};

// Track search interactions (for future search functionality)
export const trackSearch = (searchTerm, resultsCount = 0) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      event_category: 'search',
      event_label: searchTerm,
      value: resultsCount
    });
  }
};