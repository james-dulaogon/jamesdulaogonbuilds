// src/components/organisms/Footer/Footer.jsx
import React from "react";
import "./Footer.css";
import portfolio from './public/assets/RESUME.pdf';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dashboard-footer">
      <div className="footer-border-trim" />

      <div className="footer-container">
        {/* Left Aspect: Branding & System Log */}
        <div className="footer-status-group">
          <span className="footer-copyright">
            © {currentYear} JAMES DULAOGON{" "}
            <span className="footer-muted">//</span> ALL_SYSTEMS_OPERATIONAL
          </span>
          <p className="footer-build-ledger">
            BUILD: v1.0.4-RELEASE // OPTIMIZED_MODE
          </p>
        </div>

        {/* Right Aspect: Actionable Network Links */}
        <div className="footer-network-links">
          <a
            href="https://github.com/jig-jig"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-item"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/james-dulaogon-61479713b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-item"
          >
            LINKEDIN
          </a>
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-item link-accent"
          >
            RESUME.PDF [▲]
          </a>
        </div>
      </div>
    </footer>
  );
};
