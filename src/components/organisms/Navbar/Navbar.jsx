import { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setSystemTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="dashboard-navbar">
      <div className="navbar-container">
        <div className="navbar-logo-group">
          <span className="logo-indicator-triangle">▲</span>
          <span className="logo-text">
            James Dulaogon | Front-End Developer {" "}
            <br />
            <span className="logo-version">//Let Me Build Your Next App</span>
          </span>
        </div>

        <nav className="navbar-links">
          <a href="#hero" className="nav-hud-item">
            <span className="nav-index">01</span> // OVERVIEW
          </a>
          <a href="#specs" className="nav-hud-item">
            <span className="nav-index">02</span> // SPEC SHEET
          </a>
          <a href="#garage" className="nav-hud-item">
            <span className="nav-index">03</span> // THE_GARAGE
          </a>
          <a href="#contact" className="nav-hud-item">
            <span className="nav-index">04</span> // CONTACT
          </a>
        </nav>

        <div className="navbar-telemetry-status">
          <span className="status-label">SYS_TIME:</span>
          <span className="status-clock-value">{systemTime || "00:00:00"}</span>
        </div>
      </div>

      <div className="navbar-border-trim" />
    </header>
  );
};
