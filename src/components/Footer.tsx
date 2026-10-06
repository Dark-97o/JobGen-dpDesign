import { MapPin, Phone, Mail, Globe, ArrowUpRight, Clock } from 'lucide-react';
import { FooterSmoke } from './FooterSmoke';
import './Footer.css';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'architectural-design' | 'kitchen-design' | 'bathroom-design' | 'areas-we-serve') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: 'home' | 'about' | 'architectural-design' | 'kitchen-design' | 'bathroom-design' | 'areas-we-serve') => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page === 'home' ? '' : `#${page}`;
    }
  };

  return (
    <footer className="architect-footer">
      {/* Interactive WebGL2 Smoke Animation (Daylo Builders) */}
      <FooterSmoke 
        background="#0A0B0E"
        color1="#C5A059"
        color2="#8C7449"
        speed={24}
        size={115}
        angle={-150}
        hover={45}
        reach={250}
        opacity={0.65}
      />

      {/* Subtle architectural gradient scrim overlay */}
      <div className="footer-smoke-scrim" />

      {/* Top Gold Horizon Accent Line */}
      <div className="footer-top-line" />

      <div className="container footer-container">
        
        {/* Main 4-Column Footer Grid (Compact) */}
        <div className="footer-main-grid">
          
          {/* Column 1: Studio Brand & Coordinates */}
          <div className="footer-col-brand">
            
            <div className="footer-brand-header">
              <img src="/dplogo.png" alt="DP Design Studio" className="footer-dplogo" />
              <div className="footer-brand-meta">
                <span className="footer-studio-name">DP DESIGN STUDIO</span>
                <span className="footer-studio-tag">REGISTERED ARCHITECTS // NSW ARB #12156</span>
              </div>
            </div>

            {/* Architectural Coordinates List (Clean, Unboxed) */}
            <div className="footer-coords-list">
              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <MapPin size={12} className="coords-icon" />
                </div>
                <a 
                  href="https://maps.google.com/?cid=10743240316523014348&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coords-link coords-address-link"
                  title="View on Google Maps"
                >
                  <span>PO BOX 3528, PARRAMATTA, NSW 2150, AUSTRALIA</span>
                  <ArrowUpRight size={11} className="coords-ext-arrow" />
                </a>
              </div>

              {/* Combined Phone & Email Row */}
              <div className="coords-row coords-split-row">
                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Phone size={12} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">p :</span>
                  <a href="tel:1300373374" className="coords-link">1300 373 374</a>
                </div>

                <span className="coords-bullet-sep">•</span>

                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Mail size={12} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">e :</span>
                  <a href="mailto:admin@dpdesignstudio.com.au" className="coords-link">admin@dpdesignstudio.com.au</a>
                </div>
              </div>

              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <Globe size={12} className="coords-icon" />
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

          {/* Column 2: Architectural Services */}
          <div className="footer-col-nav">
            <div className="footer-nav-heading">
              <span className="heading-index">01 //</span>
              <h4>ARCHITECTURAL SERVICES</h4>
            </div>

            <ul className="footer-nav-list">
              <li>
                <a 
                  href="#architectural-design" 
                  className="footer-nav-item"
                  onClick={handleNav('architectural-design')}
                >
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
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Survey Plans</span>
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

          {/* Column 3: Renovation & Living */}
          <div className="footer-col-nav">
            <div className="footer-nav-heading">
              <span className="heading-index">02 //</span>
              <h4>RENOVATION & INTERIOR</h4>
            </div>

            <ul className="footer-nav-list">
              <li>
                <a 
                  href="#kitchen-design" 
                  className="footer-nav-item"
                  onClick={handleNav('kitchen-design')}
                >
                  <span className="item-bullet" />
                  <span>Kitchen Design & Renovation</span>
                </a>
              </li>
              <li>
                <a 
                  href="#bathroom-design" 
                  className="footer-nav-item"
                  onClick={handleNav('bathroom-design')}
                >
                  <span className="item-bullet" />
                  <span>Bathroom Design & Renovation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-item">
                  <span className="item-bullet" />
                  <span>Project Management</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Studio Hours */}
          <div className="footer-col-nav">
            <div className="footer-nav-heading">
              <span className="heading-index">03 //</span>
              <h4>STUDIO DIRECTORY</h4>
            </div>

            <ul className="footer-nav-list">
              <li>
                <a 
                  href="#" 
                  className="footer-nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('home');
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="item-bullet" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about-us" 
                  className="footer-nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('about');
                    } else {
                      window.location.hash = '#about-us';
                    }
                  }}
                >
                  <span className="item-bullet" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#areas-we-serve" 
                  className="footer-nav-item"
                  onClick={handleNav('areas-we-serve')}
                >
                  <span className="item-bullet" />
                  <span>Areas We Serve</span>
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

            {/* Prominent Studio Hours Card */}
            <div className="footer-hours-prominent">
              <div className="hours-head-row">
                <div className="hours-status-badge">
                  <span className="hours-dot" />
                  <span className="hours-status-text">SYDNEY STUDIO</span>
                </div>
                <Clock size={13} className="hours-clock-icon" />
              </div>
              <div className="hours-content">
                <span className="hours-days">Monday — Friday</span>
                <span className="hours-time-highlight">8:30 AM — 5:30 PM AEST</span>
              </div>
              <span className="hours-note">Consultations by Appointment</span>
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
            
            {/* Powered by JobGen */}
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

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
