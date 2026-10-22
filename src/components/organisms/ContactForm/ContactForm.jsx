import './ContactForm.css';

export const ContactForm = () => {
  const myEmail = "jamesucabdulaogon@gmail.com"; // <-- Insert your actual email here
  const emailSubject = encodeURIComponent("Front-End Engineering Inquiry // Interested in your services");
  const emailBody = encodeURIComponent("Hi James,\n\nI reviewed your performance portfolio and would love to discuss a front-end opportunity...");

  // Generate the native hardware communication pipeline link
  const mailtoUrl = `mailto:${myEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="contact-form-organism">
      <div className="contact-meta-header">
        <span className="contact-serial-code">COMMS_LINK // DIRECT_UPLINK</span>
        <div className="contact-laser-line" />
      </div>

      <div className="contact-layout-grid">
        {/* Left Information Panel */}
        <div className="contact-info-panel">
          <h2 className="contact-main-title">INITIATE DEPLOYMENT.</h2>
          <p className="contact-description">
            Ready to integrate a high-performance engineer into your production workflow? Use the direct transmission terminal to open a channel.
          </p>
          
          <div className="contact-diagnostic-readout">
            <div className="diag-line"><span className="diag-key">PROTOCOL:</span> <span className="diag-val">DIRECT_MAILTO</span></div>
            <div className="diag-line"><span className="diag-key">RESPONSE:</span> <span className="diag-val">&lt; 24_HOURS</span></div>
          </div>
        </div>

        {/* Right Active Terminal HUD Block */}
        <div className="contact-terminal-hud">
          
            <span className="hud-card-label">ENGINEER_IDENTITY</span>
            <h3 className="hud-card-name">JAMES DULAOGON</h3>

          
            <span className="hud-card-label">COMMUNICATION_ENDPOINT</span>
            
            {/* The Interactive Link Trigger */}
            <a href={mailtoUrl} className="hud-email-anchor">
              <span className="email-text-value">{myEmail}</span>
              <div className="hud-action-trigger-btn">
                <span>OPEN TERMINAL</span>
                <span className="btn-vector-arrow">▲</span>
              </div>
            </a>
          </div>
      </div>
    </section>
  );
};
