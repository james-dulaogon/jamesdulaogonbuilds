import { useState, useEffect } from 'react';

export const useTelemetryData = (isActive = true) => {
  const [telemetry, setTelemetry] = useState({
    speed: 0,
    rpm: 800,
    gForce: 1.0,
    engineLoad: 12,
    fps: 60
  });

  useEffect(() => {
    if (!isActive) return;

    // Simulate high-frequency cockpit telemetry stream
    const dataStream = setInterval(() => {
      setTelemetry((prev) => {
        // Accelerate or fluctuate naturally
        const targetSpeed = 184;
        const speedDelta = (targetSpeed - prev.speed) * 0.05;
        const newSpeed = Math.min(prev.speed + speedDelta + (Math.random() * 2 - 1), targetSpeed);
        
        // Match RPM to speed acceleration arcs
        const basicRpm = 2500 + (newSpeed * 25);
        const rpmFluctuation = Math.sin(Date.now() / 200) * 150;
        const newRpm = newSpeed > 180 ? 6800 + (Math.random() * 60) : basicRpm + rpmFluctuation;

        // Calculate dynamic lateral pressure forces
        const newGForce = 1.0 + (Math.sin(Date.now() / 500) * 0.4) + (Math.random() * 0.1);
        
        // Frame processing calculation
        const newFps = Math.floor(58 + Math.random() * 3);

        return {
          speed: Math.max(0, parseFloat(newSpeed.toFixed(1))),
          rpm: Math.max(800, Math.floor(newRpm)),
          gForce: parseFloat(newGForce.toFixed(2)),
          engineLoad: Math.min(100, Math.floor(15 + (newSpeed * 0.4))),
          fps: Math.min(60, newFps)
        };
      });
    }, 250); // Refresh data window every quarter-second

    // Crucial memory optimization step: Clear the interval block when the component unmounts
    return () => clearInterval(dataStream);
  }, [isActive]);

  return telemetry;
};
