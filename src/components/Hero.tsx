import { ArrowRight, Terminal, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="pill-badge hero-badge">
            <span className="pill-badge-dot"></span>
            <span>Vite 8 + React 19 + TypeScript Ready</span>
            <Sparkles size={14} className="badge-sparkle" />
          </div>

          <h1 className="hero-title">
            Build Modern Web Experiences with <span className="text-gradient">Pure Precision</span>
          </h1>

          <p className="hero-subtitle">
            A high-performance repository foundation designed for speed, flexibility, and architectural elegance. Pre-configured with modular design tokens, zero-bloat CSS, and type-safe components.
          </p>

          <div className="hero-cta-group">
            <a href="#preview" className="btn btn-primary hero-btn">
              <span>Try Live Studio</span>
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn btn-secondary hero-btn">
              <Terminal size={18} />
              <span>Explore Features</span>
            </a>
          </div>

          <div className="hero-features-strip">
            <div className="strip-item">
              <Zap size={16} className="strip-icon" />
              <span>Instant Vite HMR</span>
            </div>
            <div className="strip-divider"></div>
            <div className="strip-item">
              <ShieldCheck size={16} className="strip-icon" />
              <span>100% Strict TypeScript</span>
            </div>
            <div className="strip-divider"></div>
            <div className="strip-item">
              <Sparkles size={16} className="strip-icon" />
              <span>Zero-Bloat Vanilla Design System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
