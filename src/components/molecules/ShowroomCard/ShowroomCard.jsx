import React from 'react';
import './ShowroomCard.css';

export const ShowroomCard = ({ title, category, skills = [] }) => {
  return (
    <div className="showroom-card-case">
      {/* Upper Panel Tag */}
      <div className="case-header">
        <span className="case-category-label">// DISPLAY_BAY: {category}</span>
        <h3 className="case-title">{title}</h3>
      </div>

      {/* Grid of Component Logos */}
      <div className="case-icon-grid">
        {skills.map((skill, index) => (
          <div key={index} className="tech-logo-pod" title={skill.name}>
            <div className="pod-icon-wrapper">
              {/* Insert the SVG component directly */}
              {skill.icon}
            </div>
            <span className="pod-label">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
