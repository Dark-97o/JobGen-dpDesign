import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="architect-footer">
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          
          {/* Brand & Studio Contact Information */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/dplogo.png" alt="DP Design Studio Logo" className="footer-dplogo" />
              <div className="logo-text-group">
                <span className="logo-title text-on-dark">DP DESIGN STUDIO</span>
                <span className="logo-subtitle">ARCHITECTS &amp; BUILDERS · SYDNEY</span>
              </div>
            </div>

            <div className="footer-contact-details">
              <p className="footer-company-name">DP DESIGN STUDIO PTY LTD</p>
              <p className="footer-address">PO BOX 3528, PARRAMATTA, NSW 2150, AUSTRALIA</p>
              <p className="footer-contact-line">
                <span className="contact-prefix">p : </span>
                <a href="tel:1300373374" className="footer-highlight">1300 373 374</a>
              </p>
              <p className="footer-contact-line">
                <span className="contact-prefix">e : </span>
                <a href="mailto:admin@dpdesignstudio.com.au" className="footer-highlight">admin@dpdesignstudio.com.au</a>
              </p>
              <p className="footer-contact-line">
                <span className="contact-prefix">w : </span>
                <a href="https://www.dpdesignstudio.com.au/" target="_blank" rel="noopener noreferrer" className="footer-highlight">www.dpdesignstudio.com.au</a>
              </p>
            </div>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">OUR SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Architectural Designs</a></li>
              <li>
                <a href="https://www.dpdesignstudio.com.au/architectural-design/#Interior_Designs" target="_blank" rel="noopener noreferrer">
                  Interior Designs
                </a>
              </li>
              <li>
                <a href="https://www.dpdesignstudio.com.au/kitchen-design/" target="_blank" rel="noopener noreferrer">
                  Kitchen Design and Renovation
                </a>
              </li>
              <li>
                <a href="https://www.dpdesignstudio.com.au/bathroom-design/" target="_blank" rel="noopener noreferrer">
                  Bathroom Design and Renovation
                </a>
              </li>
              <li><a href="#services">Survey Plans</a></li>
              <li><a href="#services">Project Management</a></li>
              <li><a href="#services">Landscape Design</a></li>
            </ul>
          </div>

          {/* Pages / Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links-list">
              <li><a href="https://www.dpdesignstudio.com.au/" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li><a href="https://www.dpdesignstudio.com.au/about-us/" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="https://www.dpdesignstudio.com.au/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar with Powered by JobGen */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            Copyright © 2000 to 2026 | DP Design Studio Pty Ltd | All Rights Reserved.
          </div>
          <div className="footer-bottom-right">
            <div className="powered-by-jobgen">
              <span className="powered-text">Powered by</span>
              <img src="/jobgen-logo.webp" alt="JobGen Logo" className="jobgen-logo-img" />
              <span className="jobgen-brand-name">JobGen</span>
            </div>
            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
