/**
 * Track a conversion event in GA4 with A/B test variant info.
 *
 * @param {string} eventName - GA4 event name (e.g., "cta_click", "section_viewed")
 * @param {object} params - Additional event parameters
 * @param {string} params.location - Where the event occurred (e.g., "hero", "footer")
 * @param {string} [params.variant] - The A/B test variant
 * @param {string} [params.testName] - The A/B test name
 */
export function trackConversion(eventName, params = {}) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, {
    ...params,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track a CTA click with variant info.
 */
export function trackCTAClick(location, variant, testName) {
  trackConversion("cta_click", {
    cta_location: location,
    variant,
    test_name: testName,
  });
}

/**
 * Track when a section becomes visible.
 */
export function trackSectionView(sectionName, variant, testName) {
  trackConversion("section_viewed", {
    section: sectionName,
    variant,
    test_name: testName,
  });
}

/**
 * Track Remotion video events.
 */
export function trackVideoEvent(eventType, videoName) {
  trackConversion(`video_${eventType}`, {
    video_name: videoName,
  });
}
