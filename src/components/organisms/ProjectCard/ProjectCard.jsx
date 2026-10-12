import React from 'react';
import { ProjectCardLink } from '@/components/molecules/ProjectCardLink/ProjectCardLink';
import './ProjectCard.css';

export const ProjectCard = ({ 
  chassisCode,      // e.g., "PRJ_01" or "MOCK_SYS"
  title,            // Project Title
  description,      // Technical breakdown
  techStack = [],   // Array of strings (e.g., ["React", "Tailwind"])
  liveUrl, 
  repoUrl 
}) => {
  return (
    <article className="project-organism-card">
      {/* Top Header Panel */}
      <div className="card-header-panel">
        <span className="chassis-serial-code">{chassisCode}</span>
        <div className="status-laser-dot" />
      </div>

      {/* Main Structural Metadata */}
      <div className="card-body-content">
        <h3 className="project-display-title">{title}</h3>
        <p className="project-technical-desc">{description}</p>
        
        {/* Specs/Tech Stack Row */}
        <div className="project-tech-spec-grid">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-spec-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Module Footer (Embedding your Molecules) */}
      <div className="card-action-footer">
        <ProjectCardLink type="live" href={liveUrl} title="LAUNCH APEX APP" />
        <ProjectCardLink type="source" href={repoUrl} title="AUDIT SOURCE CODE" />
      </div>
    </article>
  );
};