// src/App.jsx
import React from 'react';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { HeroSection } from './components/organisms/HeroSection/HeroSection';
import { SpecRow } from './components/molecules/SpecRow/SpecRow';
import { ProjectCard } from './components/organisms/ProjectCard/ProjectCard';
import { ContactForm } from './components/organisms/ContactForm/ContactForm';
import { Footer } from './components/organisms/Footer/Footer'; // <--- Import Footer

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: 'var(--text-primary)' }}>
      <Navbar />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '6.5rem 2rem 2rem 2rem', width: '100%' }}>
        <HeroSection />

        {/* SECTION 2: Technical Metrics */}
        <section id="specs" style={{ padding: '6rem 0 4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rosso-corsa)', marginBottom: '1.5rem' }}>
            02 // CORE_DIAGNOSTICS
          </p>
          <div style={{ maxWidth: '700px' }}>
            <SpecRow metricName="Framework System Optimization" systemValue="Vite / React" optimizationLevel={96} />
            <SpecRow metricName="Type Safety Configuration" systemValue="TypeScript" optimizationLevel={89} />
          </div>
        </section>

        {/* SECTION 3: The Factory Garage */}
        <section id="garage" style={{ padding: '6rem 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rosso-corsa)', marginBottom: '2rem' }}>
            03 // THE_GARAGE_REPOSITORY
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ProjectCard 
              chassisCode="STAGE_01 // CORE"
              title="Apex Telemetry Dashboard"
              description="A real-time high-throughput client dashboard using React Hooks and Context API to track custom browser performance telemetry and process memory maps smoothly."
              techStack={["React 19", "Vite", "CSS Grid", "Context API"]}
              liveUrl="https://google.com"
              repoUrl="https://github.com"
            />
          </div>
        </section>

        {/* SECTION 4: Terminal Communications Uplink */}
        <ContactForm />
      </main>

      {/* SECTION 5: Closing Dashboard Data Frame Footer */}
      <Footer />
    </div>
  );
}
