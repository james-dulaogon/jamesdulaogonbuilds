// src/components/organisms/HeroSection/HeroSection.jsx
import React from "react";
import { TelemetryBadge } from "@/components/atoms/TelemetryBadge/TelemetryBadge";
import { useTelemetryData } from "@/hooks/useTelemetryData";
import "./HeroSection.css";
import myProfile from '@public/assets/profile.jpg';

export const HeroSection = () => {
  const metrics = useTelemetryData(true);

  return (
    <section id="hero" className="hero-section-organism">
      {/* Upper Matrix Context String */}
      <div className="hero-telemetry-header">
        <span className="hero-serial-readout">LAUNCH_CONTROL // ACTIVE</span>
        <div className="system-pulse-line" />
      </div>

      <div className="hero-split-track">
        {/* LEFT COLUMN: The Engineering Statement */}
        <div className="hero-profile-statement">
          <div className="hero-headline-wrapper">
            <h1 className="hero-main-title">
              ENGINEERING HIGH-PERFORMANCE <br />
              <span className="hero-gradient-text">FRONT-END INTERFACES.</span>
            </h1>

            <p className="hero-subtitle">
              Hi, I'm{" "}
              <strong className="hero-name-highlight">JAMES DULAOGON</strong>. I
              specialize in building near pixel-perfect, mobile-first, highly
              scalable and thoroughly optimized web applications using modern
              component-driven architectures.
            </p>
          </div>

          {/* Live Automotive Interface Dashboard Display */}
          <div className="hero-diagnostic-matrix">
            <div className="matrix-column">
              <span className="matrix-label">LIVE COCKPIT METRICS</span>
              <div className="matrix-badge-stack">
                <TelemetryBadge
                  label="VELOCITY"
                  value={`${metrics.speed} KM/H`}
                />
                <TelemetryBadge
                  label="TACHOMETER"
                  value={`${metrics.rpm} RPM`}
                />
                <TelemetryBadge
                  label="LAT_FORCE"
                  value={`${metrics.gForce} G`}
                />
              </div>
            </div>

            <div className="matrix-column">
              <span className="matrix-label">PERFORMANCE SPECS</span>
              <div className="matrix-data-row">
                <span className="matrix-data-key">RENDER_RATE</span>
                <span className="matrix-data-value">{metrics.fps} FPS</span>
              </div>
              <div className="matrix-data-row">
                <span className="matrix-data-key">ENGINE_LOAD</span>
                <span className="matrix-data-value">
                  {metrics.engineLoad}% CL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Driver Profile Pod */}
        <div className="hero-driver-pod">
          <div className="driver-card-chassis">
            {/* Visual HUD Crosshair Target Markers */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            {/* Serial Metadata Bar */}
            <div className="driver-metadata-strip">
              <span className="meta-badge-id">ENGR_PRFL // NO_017</span>
              <span className="meta-status-active">SYS_OK</span>
            </div>

            <div className="driver-photo-frame">
              <img
                src={myProfile} alt="James Dulaogon"
                className="driver-avatar-img"
                onError={(e) => {
                  // Elegant visual placeholder if your image isn't loaded yet
                  e.target.style.display = "none";
                  e.target.parentNode.classList.add("use-placeholder");
                }}
              />
              <div className="driver-photo-scanline" />
            </div>

            <div className="driver-spec-footer">
              <div className="driver-spec-item">
                <span className="ds-label">CLASS:</span>
                <span className="ds-value">FRONT-END</span>
              </div>
              <div className="driver-spec-item">
                <span className="ds-label">TEAM:</span>
                <span
                  className="ds-value"
                  style={{ color: "var(--rosso-corsa)" }}
                >
                  JD_DEVELOPMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Backdrop Asset */}
      <div className="hero-blueprint-grid" />
    </section>
  );
};
