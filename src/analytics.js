const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const analyticsConfigured = /^G-[A-Z0-9]+$/i.test(measurementId || "");

let analyticsInitialized = false;

export function initializeAnalytics() {
  if (!analyticsConfigured || analyticsInitialized) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  if (!document.getElementById("google-analytics-script")) {
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  analyticsInitialized = true;
}
