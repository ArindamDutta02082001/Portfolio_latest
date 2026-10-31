import React from "react";
import "./AnalyticsConsent.css";

export default function AnalyticsConsent({ visible, onChoice }) {
  if (!visible) {
    return null;
  }

  return (
    <aside className="analytics-consent" role="dialog" aria-label="Analytics preferences">
      <div className="analytics-consent-copy">
        <strong>Help improve this portfolio</strong>
        <p>Allow Google Analytics to collect basic usage data? Analytics stays off unless you opt in.</p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="analytics-consent-reject" onClick={() => onChoice("rejected")}>
          No thanks
        </button>
        <button type="button" className="analytics-consent-accept" onClick={() => onChoice("accepted")}>
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
