import { useState } from 'react';
import { 
  Palette, 
  Layout, 
  Code2, 
  Check, 
  Copy, 
  Eye, 
  Sliders, 
  Sparkles,
  Component
} from 'lucide-react';
import './BuilderPreview.css';

export const BuilderPreview = () => {
  const [activeTheme, setActiveTheme] = useState<'indigo' | 'cyan' | 'emerald'>('indigo');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [headlineText, setHeadlineText] = useState('Build Faster with React');
  const [badgeText, setBadgeText] = useState('New Release v1.0');
  const [showFeatureCards, setShowFeatureCards] = useState(true);

  const sampleCode = `// Generated JobGen Component Template
import React from 'react';
import './Card.css';

export const HeroBanner = () => {
  return (
    <div className="custom-banner ${activeTheme}-accent">
      <span className="badge">${badgeText}</span>
      <h2>${headlineText}</h2>
      <p>Clean TypeScript architecture with instant Vite tooling.</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="preview" className="builder-section">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <Component size={14} />
            <span>Interactive Studio Demo</span>
          </div>
          <h2 className="section-title">
            Visual Website <span className="text-gradient">Sandbox</span>
          </h2>
          <p className="section-desc">
            Test the modular tokens and dynamic state engine directly. Adjust styles, inspect live code, and experience zero-latency updates.
          </p>
        </div>

        <div className="builder-frame glass-card">
          {/* Top Window Bar */}
          <div className="frame-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-url-bar">
              <span className="url-prefix">https://</span>
              <span className="url-domain">jobgen.local/studio</span>
            </div>
            <div className="tab-switchers">
              <button 
                className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                onClick={() => setActiveTab('preview')}
              >
                <Eye size={15} />
                <span>Live Preview</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <Code2 size={15} />
                <span>Source Code</span>
              </button>
            </div>
          </div>

          <div className="frame-body">
            {/* Control Panel / Studio Sidebar */}
            <aside className="builder-controls">
              <div className="control-group">
                <label className="control-label">
                  <Palette size={15} />
                  <span>Accent Theme</span>
                </label>
                <div className="theme-selector">
                  <button 
                    className={`theme-btn theme-indigo ${activeTheme === 'indigo' ? 'active' : ''}`}
                    onClick={() => setActiveTheme('indigo')}
                    title="Indigo Violet"
                  >
                    Indigo
                  </button>
                  <button 
                    className={`theme-btn theme-cyan ${activeTheme === 'cyan' ? 'active' : ''}`}
                    onClick={() => setActiveTheme('cyan')}
                    title="Cyber Cyan"
                  >
                    Cyan
                  </button>
                  <button 
                    className={`theme-btn theme-emerald ${activeTheme === 'emerald' ? 'active' : ''}`}
                    onClick={() => setActiveTheme('emerald')}
                    title="Emerald"
                  >
                    Emerald
                  </button>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label">
                  <Sliders size={15} />
                  <span>Badge Copy</span>
                </label>
                <input 
                  type="text" 
                  className="control-input"
                  value={badgeText} 
                  onChange={(e) => setBadgeText(e.target.value)}
                  placeholder="Enter badge label"
                />
              </div>

              <div className="control-group">
                <label className="control-label">
                  <Layout size={15} />
                  <span>Banner Title</span>
                </label>
                <input 
                  type="text" 
                  className="control-input"
                  value={headlineText} 
                  onChange={(e) => setHeadlineText(e.target.value)}
                  placeholder="Enter headline"
                />
              </div>

              <div className="control-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={showFeatureCards} 
                    onChange={(e) => setShowFeatureCards(e.target.checked)}
                  />
                  <span>Show Module Grid</span>
                </label>
              </div>

              <div className="control-info-box">
                <Sparkles size={16} className="info-icon" />
                <p>Pure reactive state synchronization without external state manager libraries.</p>
              </div>
            </aside>

            {/* Canvas / Viewport */}
            <main className="builder-canvas">
              {activeTab === 'preview' ? (
                <div className={`canvas-mockup-inner theme-${activeTheme}`}>
                  <div className="mockup-header-preview">
                    <span className="mockup-badge">
                      <span className="mockup-badge-dot"></span>
                      {badgeText || 'Badge Label'}
                    </span>
                    <h3 className="mockup-heading">{headlineText || 'Your Headline Here'}</h3>
                    <p className="mockup-sub">
                      Engineered with component boundaries that scale seamlessly from simple landing pages to enterprise web applications.
                    </p>
                    <div className="mockup-actions">
                      <button className="mockup-primary-btn">Deploy Blueprint</button>
                      <button className="mockup-secondary-btn">Documentation</button>
                    </div>
                  </div>

                  {showFeatureCards && (
                    <div className="mockup-card-grid">
                      <div className="mockup-card">
                        <div className="card-indicator"></div>
                        <h4>Type Safe</h4>
                        <p>Fully inferred props with zero runtime overhead.</p>
                      </div>
                      <div className="mockup-card">
                        <div className="card-indicator"></div>
                        <h4>Ultra Fast</h4>
                        <p>Vite Rollup bundling with sub-second hot reloading.</p>
                      </div>
                      <div className="mockup-card">
                        <div className="card-indicator"></div>
                        <h4>Design Tokens</h4>
                        <p>CSS custom variables for immediate theme switching.</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="code-viewer">
                  <div className="code-viewer-top">
                    <span className="code-filename">BannerModule.tsx</span>
                    <button className="copy-code-btn" onClick={handleCopy}>
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="code-block">
                    <code>{sampleCode}</code>
                  </pre>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};
