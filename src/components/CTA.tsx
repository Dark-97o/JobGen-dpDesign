import { Rocket, ArrowRight } from 'lucide-react';
import './CTA.css';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="pill-badge cta-badge">
              <Rocket size={14} />
              <span>Ready for Expansion</span>
            </div>
            <h2 className="cta-title">
              Ready to construct your next <span className="text-gradient">web breakthrough</span>?
            </h2>
            <p className="cta-subtitle">
              Clone or customize this template, plug in your business logic or visual builder components, and ship in record time.
            </p>
            <div className="cta-actions">
              <a href="#preview" className="btn btn-primary cta-btn">
                <span>Start Designing Now</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary cta-btn"
              >
                <GithubIcon />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
