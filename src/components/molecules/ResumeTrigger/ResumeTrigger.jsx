import { SiAdobeacrobatreader } from 'react-icons/si';
import './ResumeTrigger.css';

export const ResumeTrigger = () => {
  return (
    <div className="resume-viewport-pod">
      <div className="resume-hud-meta">
        <span className="rh-code">SYS_DOC // CLS_01</span>
        <span className="rh-status">VERIFIED_STABLE</span>
      </div>

      <div className="resume-action-matrix">
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-hud-anchor link-preview"
        >
          <div className="ra-icon"><SiAdobeacrobatreader /></div>
          <div className="ra-text">
            <span className="ra-title">LAUNCH VIRTUAL SPEC_SHEET</span>
            <span className="ra-sub">Opens high-speed native browser view</span>
          </div>
        </a>

        <a 
          href="/resume.pdf" 
          download="John_Doe_FrontEnd_Resume.pdf" 
          className="resume-hud-anchor link-download"
        >
          <span className="download-hud-btn">DOWNLOAD.RAW</span>
        </a>
      </div>
    </div>
  );
};
