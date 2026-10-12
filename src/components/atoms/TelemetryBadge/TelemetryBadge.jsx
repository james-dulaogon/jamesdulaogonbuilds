import React from 'react';
import './TelemetryBadge.css';

export const TelemetryBadge = ({ label, value }) => {
  return (
    <div className="telemetry-badge">
      <span className="telemetry-label">{label}</span>
      <span className="telemetry-value">{value}</span>
    </div>
  );
};