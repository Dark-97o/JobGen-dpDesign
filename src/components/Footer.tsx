import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const suburbs = [
    'Parramatta', 'North Parramatta', 'Westmead', 'Harris Park', 
    'Granville', 'Merrylands', 'Guildford', 'Auburn', 
    'Rydalmere', 'Ermington', 'Dundas', 'Rosehill', 
    'Toongabbie', 'Winston Hills', 'Old Toongabbie'
  ];

  return (
    <footer className="architect-footer">
      <div className="container">
        
        {/* Top Architectural Footer Grid */}
        <div className="footer-main-grid">
          
          {/* Brand & ARB Pillar */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/dplogo.png" alt="DP Design Studio Logo" className="footer-dplogo" />
              <div className="logo-text-group">
                <span className="logo-title text-on-dark">DP DESIGN STUDIO</span>
                <span className="logo-subtitle">ARCHITECTS & BUILDERS · SYDNEY</span>
              </div>
            </div>

            <p className="footer-bio">
              A boutique client-focused architectural and interior design firm, creating sustainable living 
              spaces that match your expectations, lifestyle, and budget. Integrating registered architecture 
              with master construction under Daylo Build Pty Ltd.
            </p>

            <div className="arb-official-badge">
              <span className="arb-badge-lead">OFFICIAL STATUTORY ACCREDITATION</span>
              <p className="arb-badge-text">
                Fully licensed practicing architectural firm registered with the <strong>NSW Architects Registration Board (#12156)</strong> and Australian Institute of Architects. Prasad Perera is the nominated Architect.
              </p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">ARCHITECTURAL SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Custom Residential Homes</a></li>
              <li><a href="#services">Duplex & Dual Occupancy</a></li>
              <li><a href="#services">Townhouse Developments</a></li>
              <li><a href="#services">Alterations & Second-Storey Additions</a></li>
              <li><a href="#services">Granny Flats & Secondary Dwellings</a></li>
              <li><a href="#services">SDA & SIL Accessible Living</a></li>
              <li><a href="#services">Medical Centre Interior Fit-Outs</a></li>
              <li><a href="#approvals">DA & CDC Approvals NSW</a></li>
            </ul>
          </div>

          {/* Interiors & Turnkey */}
          <div className="footer-col">
            <h4 className="footer-col-title">INTERIOR & CONSTRUCTION</h4>
            <ul className="footer-links-list">
              <li><a href="#kitchens">Kitchen Design & Renovation</a></li>
              <li><a href="#bathrooms">Luxury Bathroom Sanctuaries</a></li>
              <li><a href="#kitchens">Island & Galley Kitchen Layouts</a></li>
              <li><a href="#bathrooms">AS 3740 Certified Waterproofing</a></li>
              <li><a href="#approvals">Unauthorized Construction Approvals</a></li>
              <li><a href="#approvals">BASIX & Shadow Diagrams</a></li>
              <li><a href="#architect">Daylo Build Construction Arm</a></li>
              <li><a href="#planner">Interactive Scope & Cost Estimator</a></li>
            </ul>
          </div>

          {/* Contact & Studio Coordinates */}
          <div className="footer-col">
            <h4 className="footer-col-title">PARRAMATTA STUDIO</h4>
            <div className="footer-contact-details">
              <p>
                <strong>PO BOX 3528, PARRAMATTA</strong><br />
                NSW 2150, AUSTRALIA
              </p>
              <p>
                <span>Phone: </span>
                <a href="tel:1300373374" className="footer-highlight">1300 373 374</a>
              </p>
              <p>
                <span>Email: </span>
                <a href="mailto:admin@dpdesignstudio.com.au" className="footer-highlight">admin@dpdesignstudio.com.au</a>
              </p>
              <p>
                <span>Web: </span>
                <a href="https://www.dpdesignstudio.com.au" className="footer-highlight">www.dpdesignstudio.com.au</a>
              </p>
            </div>

            <div className="social-links-row">
              <a href="https://www.instagram.com/dpdesignstudio.com.au/" target="_blank" rel="noopener noreferrer" className="social-pill">Instagram</a>
              <a href="https://www.facebook.com/dpDesignStudioPtyLtd" target="_blank" rel="noopener noreferrer" className="social-pill">Facebook</a>
              <a href="https://www.youtube.com/@dpdesignstudiopty.ltd.4090" target="_blank" rel="noopener noreferrer" className="social-pill">YouTube</a>
            </div>
          </div>

        </div>

        {/* Suburbs Directory Row for SEO */}
        <div className="footer-suburbs-bar">
          <span className="suburbs-bar-label">AREAS SERVED IN GREATER WESTERN SYDNEY:</span>
          <div className="suburbs-inline-list">
            {suburbs.map((sub, i) => (
              <span key={i} className="suburb-inline-item">
                <a href="#areas">{sub}</a>
                {i < suburbs.length - 1 && <span className="suburb-sep">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            Copyright © 2000 to 2026 | dp Design Studio Pty Ltd | All Rights Reserved. Nominated Architect Prasad Perera (ARB #12156).
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
