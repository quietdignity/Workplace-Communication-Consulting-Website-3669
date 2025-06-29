import supabase from '../lib/supabase';

// Enhanced analytics utility functions with Supabase integration

// Get or create session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Track event to both Google Analytics and Supabase
const trackEventToSupabase = async (eventType, eventCategory, eventLabel, metadata = {}) => {
  try {
    await supabase
      .from('analytics_events_wm2024')
      .insert([
        {
          event_type: eventType,
          event_category: eventCategory,
          event_label: eventLabel,
          user_session: getSessionId(),
          page_url: window.location.href,
          ...metadata
        }
      ]);
  } catch (error) {
    console.error('Error tracking event to Supabase:', error);
  }
};

// Track email clicks
export const trackEmailClick = (emailAddress) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: emailAddress,
      value: 1
    });
  }
  
  trackEventToSupabase('email_click', 'engagement', emailAddress);
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
  
  trackEventToSupabase('calendar_booking', 'conversion', source);
};

// Track FAQ interactions
export const trackFAQInteraction = async (question) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'faq_interaction', {
      event_category: 'engagement',
      event_label: question,
      value: 1
    });
  }
  
  // Track in dedicated FAQ table
  try {
    await supabase
      .from('faq_interactions_wm2024')
      .insert([
        {
          question: question,
          user_session: getSessionId(),
          interaction_type: 'view'
        }
      ]);
  } catch (error) {
    console.error('Error tracking FAQ interaction:', error);
  }
  
  trackEventToSupabase('faq_interaction', 'engagement', question);
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
  
  trackEventToSupabase('navigation_click', 'navigation', section);
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
  
  trackEventToSupabase('scroll_depth', 'engagement', `${percentage}%`, { percentage });
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
  
  trackEventToSupabase('time_on_page', 'engagement', `${seconds} seconds`, { seconds });
};

// Track form interactions
export const trackFormInteraction = (formName, action) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'form_interaction', {
      event_category: 'form',
      event_label: `${formName}_${action}`,
      value: 1
    });
  }
  
  trackEventToSupabase('form_interaction', 'form', `${formName}_${action}`, { form_name: formName, action });
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
  
  trackEventToSupabase('external_link_click', 'outbound', url, { link_text: linkText });
};

// Track search interactions
export const trackSearch = (searchTerm, resultsCount = 0) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      event_category: 'search',
      event_label: searchTerm,
      value: resultsCount
    });
  }
  
  trackEventToSupabase('search', 'search', searchTerm, { results_count: resultsCount });
};

// Track chat widget interactions
export const trackChatInteraction = (interactionType, question = '') => {
  trackEventToSupabase('chat_interaction', 'engagement', interactionType, { question });
};