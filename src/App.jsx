import React from 'react';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { HeroSection } from './components/organisms/HeroSection/HeroSection';
import { ShowroomCard } from './components/molecules/ShowroomCard/ShowroomCard';
import { ProjectCard } from './components/organisms/ProjectCard/ProjectCard';
import { ContactForm } from './components/organisms/ContactForm/ContactForm';
import { Footer } from './components/organisms/Footer/Footer';
import { 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiNodedotjs, 
  SiExpress, 
  SiJavascript, 
  SiPostgresql,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function App() {
  const sampleSvg = (
    <svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/></svg>
  );

  const frontendTech = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss /> },
  ];

  const backendTech = [
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Postgres', icon: <SiPostgresql /> },
  ];

  const toolsTech = [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'VS Code', icon: <VscVscode /> },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: 'var(--text-primary)' }}>
      <Navbar />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '6.5rem 2rem 2rem 2rem', width: '100%' }}>
        <HeroSection />

        <section id="specs" style={{ padding: '6rem 0' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rosso-corsa)', marginBottom: '0.5rem' }}>
              02 // SHOWROOM_SPECS_SHEET
            </p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: '800' }}>
              Performance Inventory
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <ShowroomCard title="Frontend Body Styles" category="AERO_UI" skills={frontendTech} />
            <ShowroomCard title="Backend Performance" category="DRIVETRAIN" skills={backendTech} />
            <ShowroomCard title="Tools & Diagnostics" category="TUNING_ENV" skills={toolsTech} />
          </div>
        </section>

        <section id="garage" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rosso-corsa)', marginBottom: '2rem' }}>
            03 // THE_GARAGE_REPOSITORY
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ProjectCard 
              chassisCode="STAGE_01 // CORE"
              title="Legislative Backtracking System"
              description="A web application that tracks enacted legislation and traces the complete history of Local Legislation from its current state back to its original introduction."
              techStack={["React 19", "TailwindCSS", "Node.js", "Express", "PostgreSQL"]}
              liveUrl="#"
              repoUrl="https://github.com/jig-jig/backtrackingsystem"
            />
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
