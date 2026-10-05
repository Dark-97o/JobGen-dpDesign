import { Layers } from 'lucide-react';
import './Footer.css';
const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-icon-mini">
                <Layers size={18} />
              </div>
              <span className="brand-title">Job<span className="text-gradient">Gen</span></span>
            </div>
            <p className="footer-brand-desc">
              Next-generation React & TypeScript repository for rapid web creation, UI systems, and modern apps.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4>Architecture</h4>
            <a href="#features">Design Tokens</a>
            <a href="#features">TypeScript 6.0</a>
            <a href="#features">Vite 8 Engine</a>
            <a href="#features">React 19</a>
          </div>

          <div className="footer-nav-col">
            <h4>Workflows</h4>
            <a href="#preview">Live Sandbox</a>
            <a href="#architecture">File Blueprint</a>
            <a href="#architecture">CLI Commands</a>
          </div>

          <div className="footer-nav-col">
            <h4>Community</h4>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">React Documentation</a>
            <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite Documentation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {CURRENT_YEAR} JobGen. Built with precision and zero CSS overhead.
          </p>
          <div className="system-status">
            <span className="status-dot"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
