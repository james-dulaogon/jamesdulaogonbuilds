// src/App.jsx
import React from 'react';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { SpecRow } from './components/molecules/SpecRow/SpecRow';
import { ProjectCard } from './components/organisms/ProjectCard/ProjectCard';

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* 1. Global Viewport Header Organism */}
      <Navbar />

      {/* 2. Scrollable Dashboard Track Area */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '7.5rem 1.5rem 4rem 1.5rem' }}>
        
        {/* Diagnostics Module */}
        <section id="specs" style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rosso-corsa)', marginBottom: '0.5rem' }}>
            SYSTEMS // MATRIX_VERIFICATION
          </p>
          <SpecRow metricName="Framework System Optimization" systemValue="Vite / React" optimizationLevel={96} />
        </section>

        {/* Project Section Wrapper */}
        <section id="garage">
          <ProjectCard 
            chassisCode="STAGE_01 // CORE"
            title="Apex Telemetry Dashboard"
            description="A real-time high-throughput client dashboard using React Hooks and Context API to track custom browser performance telemetry and process memory maps smoothly."
            techStack={["React 19", "Vite", "CSS Grid", "Context API"]}
            liveUrl="https://google.com"
            repoUrl="https://github.com"
          />
        </section>

      </main>
    </div>
  );
}
