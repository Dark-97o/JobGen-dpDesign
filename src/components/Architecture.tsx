import { FolderTree, Terminal, CheckCircle } from 'lucide-react';
import './Architecture.css';

export const Architecture = () => {
  return (
    <section id="architecture" className="arch-section">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <FolderTree size={14} />
            <span>Repository Blueprint</span>
          </div>
          <h2 className="section-title">
            Clean, Transparent <span className="text-gradient">File Architecture</span>
          </h2>
          <p className="section-desc">
            Organized for effortless maintenance and scale. Add new components, styles, and data models cleanly.
          </p>
        </div>

        <div className="arch-grid">
          {/* File Structure Tree */}
          <div className="glass-card arch-card">
            <div className="arch-card-header">
              <FolderTree size={18} className="arch-header-icon" />
              <h3>Project Structure</h3>
            </div>
            <div className="tree-container">
              <pre className="tree-code">
{`jobgen-dp/
├── index.html                 # HTML5 semantic entrypoint
├── package.json               # Scripts & dependencies
├── tsconfig.json              # TypeScript strict compiler config
├── vite.config.ts             # Vite build orchestration
├── public/                    # Static assets & favicons
└── src/
    ├── main.tsx               # React 19 root bootstrap
    ├── index.css              # Design system tokens & reset
    ├── App.tsx                # Master composition view
    └── components/            # Autonomous UI building blocks
        ├── Navbar.tsx         # Responsive brand header
        ├── Hero.tsx           # Conversion hero block
        ├── BuilderPreview.tsx # Interactive playground
        ├── Features.tsx       # Capability showcase
        ├── Architecture.tsx   # Project blueprint view
        ├── CTA.tsx            # Action conversion card
        └── Footer.tsx         # Legal & navigation links`}
              </pre>
            </div>
          </div>

          {/* Quick CLI Commands */}
          <div className="glass-card arch-card">
            <div className="arch-card-header">
              <Terminal size={18} className="arch-header-icon" />
              <h3>Developer Workflows</h3>
            </div>
            <div className="workflows-list">
              <div className="workflow-item">
                <div className="workflow-meta">
                  <span className="workflow-command">npm run dev</span>
                  <span className="workflow-desc">Spin up local development server with Vite HMR</span>
                </div>
                <div className="workflow-status">
                  <CheckCircle size={14} className="status-ok" />
                  <span>Ready</span>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-meta">
                  <span className="workflow-command">npm run build</span>
                  <span className="workflow-desc">Type-check with tsc and output minified production bundle</span>
                </div>
                <div className="workflow-status">
                  <CheckCircle size={14} className="status-ok" />
                  <span>Tested</span>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-meta">
                  <span className="workflow-command">npm run preview</span>
                  <span className="workflow-desc">Locally preview production build before deploying</span>
                </div>
                <div className="workflow-status">
                  <CheckCircle size={14} className="status-ok" />
                  <span>Ready</span>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-meta">
                  <span className="workflow-command">npm run lint</span>
                  <span className="workflow-desc">Instant linter checks for clean code hygiene</span>
                </div>
                <div className="workflow-status">
                  <CheckCircle size={14} className="status-ok" />
                  <span>Configured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
