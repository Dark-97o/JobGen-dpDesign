import { useState } from 'react';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <div className="brand-icon">
            <Layers size={22} className="brand-svg" />
          </div>
          <span className="brand-text">
            Job<span className="text-gradient">Gen</span>
          </span>
        </a>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#preview" onClick={() => setMobileMenuOpen(false)}>Interactive Studio</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="GitHub Repository"
          >
            <GithubIcon />
          </a>
          <a href="#preview" className="btn btn-primary nav-cta">
            <span>Explore App</span>
            <ArrowRight size={16} />
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
