import { MapPin, Phone, Mail, Globe, ArrowUpRight, ArrowUp } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="architect-footer">
      {/* Top Gold Horizon Accent Line */}
      <div className="footer-top-line" />

      <div className="container footer-container">
        
        {/* Main 3-Column Footer Grid (Compact) */}
        <div className="footer-main-grid">
          
          {/* Column 1: Studio Brand & Coordinates */}
          <div className="footer-col-brand">
            
            <div className="footer-brand-header">
              <div className="footer-logo-bezel">
                <img src="/dplogo.png" alt="DP Design Studio" className="footer-dplogo" />
              </div>
              <div className="footer-brand-meta">
                <span className="footer-studio-name">DP DESIGN STUDIO</span>
                <span className="footer-studio-tag">REGISTERED ARCHITECTS // NSW ARB #12156</span>
              </div>
            </div>

            {/* Architectural Coordinates Card (Compact) */}
            <div className="footer-coords-card">
              <div className="coords-entity-title">DP DESIGN STUDIO PTY LTD</div>
              
              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <MapPin size={11} className="coords-icon" />
                </div>
                <span className="coords-val">PO BOX 3528, PARRAMATTA, NSW 2150, AUSTRALIA</span>
              </div>

              {/* Combined Phone & Email Row for Compact Layout */}
              <div className="coords-row coords-split-row">
                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Phone size={11} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">p :</span>
                  <a href="tel:1300373374" className="coords-link">1300 373 374</a>
                </div>

                <span className="coords-bullet-sep">•</span>

                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Mail size={11} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">e :</span>
                  <a href="mailto:admin@dpdesignstudio.com.au" className="coords-link">admin@dpdesignstudio.com.au</a>
                </div>
              </div>

              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <Globe size={11} className="coords-icon" />
                </div>
                <div className="coords-val-group">
                  <span className="coords-lbl">w :</span>
                  <a 
                    href="https://www.dpdesignstudio.com.au/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="coords-link"
                  >
                    www.dpdesignstudio.com.au
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Our Services (Compact) */}
          <div className="footer-col-nav">
            <div className="footer-nav-heading">
              <span className="heading-index">01 //</span>
              <h4>OUR SERVICES</h4>
            </div>

            <ul className="footer-nav-list">
              <li>
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Architectural Designs</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/architectural-design/#Interior_Designs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>Interior Designs</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/kitchen-design/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>Kitchen Design and Renovation</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/bathroom-design/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>Bathroom Design and Renovation</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Survey Plans</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Project Management</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Landscape Design</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Studio Hours (Compact) */}
          <div className="footer-col-nav">
            <div className="footer-nav-heading">
              <span className="heading-index">02 //</span>
              <h4>STUDIO DIRECTORY</h4>
            </div>

            <ul className="footer-nav-list">
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>Home</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/about-us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>About</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dpdesignstudio.com.au/contact-us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-nav-item external"
                >
                  <span className="item-bullet" />
                  <span>Contact Us</span>
                  <ArrowUpRight size={10.5} className="link-ext-arrow" />
                </a>
              </li>
            </ul>

            {/* Studio Hours Micro-Pill (Compact) */}
            <div className="footer-hours-capsule">
              <span className="hours-dot" />
              <div className="hours-meta">
                <span className="hours-label">SYDNEY STUDIO HOURS</span>
                <span className="hours-time">Mon — Fri · 8:30 AM — 5:30 PM AEST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Copyright & Powered by JobGen (Compact) */}
        <div className="footer-bottom-bar">
          
          <div className="footer-bottom-left">
            <span className="footer-copy-text">
              &copy; 2000 — 2026 DP Design Studio Pty Ltd. All Rights Reserved.
            </span>
            <span className="footer-copy-sub">
              Nominated Registered Architect Prasad Perera (ARB #12156)
            </span>
          </div>

          <div className="footer-bottom-right">
            
            {/* Powered by JobGen Badge (Compact) */}
            <a 
              href="https://jobgen.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="powered-by-jobgen-badge"
              title="Powered by JobGen"
            >
              <span className="powered-caption">Powered by</span>
              <div className="jobgen-mark-container">
                <img 
                  src="/jobgen-logo.webp" 
                  alt="JobGen Logo" 
                  className="jobgen-mark-img" 
                />
              </div>
              <span className="jobgen-brand-text">JobGen</span>
            </a>

            {/* Button-in-Button Back to Top (Compact) */}
            <button 
              className="footer-top-btn" 
              onClick={scrollToTop} 
              aria-label="Back to top"
            >
              <span className="top-btn-label">TOP</span>
              <span className="top-btn-icon-disc">
                <ArrowUp size={10} />
              </span>
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
