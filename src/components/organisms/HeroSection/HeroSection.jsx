// src/components/organisms/HeroSection/HeroSection.jsx
import React from "react";
import { TelemetryBadge } from "@/components/atoms/TelemetryBadge/TelemetryBadge";
import { useTelemetryData } from "@/hooks/useTelemetryData"; // <--- Import your hook
import "./HeroSection.css";

export const HeroSection = () => {
  // Activate the live telemetry stream engine
  const metrics = useTelemetryData(true);

  return (
    <section id="hero" className="hero-section-organism">
      <div className="hero-telemetry-header">
        <span className="hero-serial-readout">LAUNCH_SEQUENCE // RUNNING</span>
        <div className="system-pulse-line" />
      </div>

      <div className="hero-headline-wrapper">
        <h1 className="hero-main-title">
          ENGINEERING HIGH-PERFORMANCE <br />
          <span className="hero-gradient-text">FRONT-END INTERFACES.</span>
        </h1>

        <p className="hero-subtitle">
          Hi, I'm{" "}
          <strong className="hero-name-highlight">James Dulaogon</strong>. I
          specialize in building pixel-perfect, accessible, and thoroughly
          optimized web applications using modern component-driven
          architectures. <a href="#garage" className="hero-projects-link">See Projects.</a>
        </p>
      </div>

      {/* Live Automotive Interface Dashboard Display */}
      <div className="hero-diagnostic-matrix">
        <div className="matrix-column">
          <span className="matrix-label">LIVE COCKPIT METRICS</span>
          <div className="matrix-badge-stack">
            <TelemetryBadge label="VELOCITY" value={`${metrics.speed} KM/H`} />
            <TelemetryBadge label="TACHOMETER" value={`${metrics.rpm} RPM`} />
            <TelemetryBadge label="LAT_FORCE" value={`${metrics.gForce} G`} />
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
            <span className="matrix-data-value">{metrics.engineLoad}% CL</span>
          </div>
        </div>
      </div>

      <div className="hero-blueprint-grid" />
    </section>
  );
};
