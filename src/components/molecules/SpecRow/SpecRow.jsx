import React from 'react';
import { TelemetryBadge } from '@/components/atoms/TelemetryBadge/TelemetryBadge';
import './SpecRow.css';

export const SpecRow = ({ metricName, systemValue, optimizationLevel }) => {
  return (
    <div className="spec-row">
      {/* Visual Identity Anchor */}
      <div className="spec-meta">
        <span className="spec-indicator"></span>
        <span className="spec-name">{metricName}</span>
      </div>

      {/* Embedded Atom Component */}
      <div className="spec-badge-wrapper">
        <TelemetryBadge label="SYSTEM" value={systemValue} />
      </div>

      {/* Visual Telemetry Telemetry Metric */}
      <div className="spec-gauge-container">
        <div 
          className="spec-gauge-fill" 
          style={{ width: `${optimizationLevel}%` }}
          role="progressbar"
          aria-valuenow={optimizationLevel}
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <span className="spec-percentage">{optimizationLevel}% OPT</span>
      </div>
    </div>
  );
};