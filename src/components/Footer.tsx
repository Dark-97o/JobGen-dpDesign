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
              </div>
            </div>

            {/* Architectural Coordinates List (Clean, Unboxed) */}
            <div className="footer-coords-list">
              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <MapPin size={13.5} className="coords-icon" />
                </div>
                <a 
                  href="https://maps.google.com/?cid=10743240316523014348&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coords-link coords-address-link"
                  title="View on Google Maps"
                >
                  <span>PO BOX 3528, PARRAMATTA, NSW 2150, AUSTRALIA</span>
                  <ArrowUpRight size={12} className="coords-ext-arrow" />
                </a>
              </div>

              {/* Combined Phone & Email Row */}
              <div className="coords-row coords-split-row">
                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Phone size={13.5} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">p :</span>
                  <a href="tel:1300373374" className="coords-link">1300 373 374</a>
                </div>

                <span className="coords-bullet-sep">•</span>

                <div className="coords-inline-item">
                  <div className="coords-icon-wrap">
                    <Mail size={13.5} className="coords-icon" />
                  </div>
                  <span className="coords-lbl">e :</span>
                  <a href="mailto:admin@dpdesignstudio.com.au" className="coords-link">admin@dpdesignstudio.com.au</a>
                </div>
              </div>

              <div className="coords-row">
                <div className="coords-icon-wrap">
                  <Globe size={13.5} className="coords-icon" />
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

            {/* Studio Hours Pill Just Below Contacts */}
            <div className="footer-hours-pill">
              <span className="hours-dot" />
              <Clock size={13} className="hours-clock-icon" />
              <span className="hours-pill-text">Mon — Fri: 8:30 AM — 5:30 PM AEST</span>
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
          </div>

          {/* Column 5: Studio Location Map (Right Side) */}
          <div className="footer-col-map">
            <div className="footer-nav-heading">
              <span className="heading-index">04 //</span>
              <h4>LOCATION</h4>
            </div>

            <div className="footer-side-map-wrap" style={{ height: '230px', minHeight: '230px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.845218397058!2d151.0036056!3d-33.8163072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31d0c55ee37%3A0x9517a825d30268cc!2sdp%20Design%20Studio%20Pty.%20Ltd.!5e0!3m2!1sen!2sin!4v1791293034761!5m2!1sen!2sin" 
                width="100%" 
                height="230" 
                style={{ border: 0, width: '100%', height: '100%', minHeight: '230px', display: 'block' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="dp Design Studio Pty. Ltd. Location Map"
              />
            </div>

            <a 
              href="https://maps.google.com/?cid=10743240316523014348&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-side-map-link"
              title="Get directions to DP Design Studio on Google Maps"
            >
              <span>Get Directions</span>
              <ArrowUpRight size={10.5} />
            </a>
          </div>

        </div>

        {/* Bottom Legal, Copyright & Powered by JobGen (Compact) */}
        <div className="footer-bottom-bar">
          
          <div className="footer-bottom-left">
            <span className="footer-copy-text">
              &copy; 2000 — 2026 DP Design Studio Pty Ltd. All Rights Reserved.
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
