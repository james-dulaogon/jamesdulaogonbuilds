import './ProjectCardLink.css';

export const ProjectCardLink = ({ type, href, title = 'VIEW SOURCE' }) => {
  // Use specialized diagnostic indicators depending on deployment target
  const statusIndicator = type === 'live' ? 'LAUNCH_APP' : 'SRC_SYS';

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`project-link-card link-type-${type}`}
    >
      <div className="link-chassis">
        {/* Core Label Text */}
        <div className="link-title-group">
          <span className="link-diagnostic-code">{statusIndicator}</span>
          <span className="link-main-text">{title}</span>
        </div>

        {/* Vector Arrow Accent */}
        <div className="link-vector-arrow">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Laser Glow Bottom Trim */}
      <div className="link-laser-trim" />
    </a>
  );
};