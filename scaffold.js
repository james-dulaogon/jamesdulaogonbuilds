// scaffold.js
import fs from 'fs';
import path from 'path';

const dirs = [
  'src/assets',
  'src/hooks',
  'src/styles',
  'src/components/atoms/Button',
  'src/components/atoms/TelemetryBadge',
  'src/components/molecules/NavItem',
  'src/components/molecules/ProjectHeader',
  'src/components/organisms/Navbar',
  'src/components/organisms/HeroSection',
  'src/components/templates/MainLayout',
  'src/components/pages/Dashboard'
];

// Create Directories
dirs.forEach(dir => {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
});

// Define core structural files to initialize
const files = {
  'src/styles/variables.css': `:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #121212;
  --bg-tertiary: #1a1a1a;
  --text-primary: #f5f5f7;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --rosso-corsa: #ef4444;
  --rosso-glow: rgba(239, 68, 68, 0.15);
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --font-sans: 'Inter', system-ui, sans-serif;
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-active: rgba(239, 68, 68, 0.3);
  --transition-speed: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
  'src/styles/index.css': `@import './variables.css';
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}`,
  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
  'src/App.jsx': `import React from 'react';
export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)' }}>
      <h1 style={{ color: 'var(--rosso-corsa)' }}>🏎️ Garage Initialized</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Atomic Design structure is active.</p>
    </div>
  );
}`
};

// Write files
Object.entries(files).forEach(([filepath, content]) => {
  fs.writeFileSync(path.join(process.cwd(), filepath), content.trim());
});

console.log('🏎️ Supercar Atomic Environment successfully assembled!');
