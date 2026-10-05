import { useState, useEffect } from 'react';
import { ContactModal } from './ContactModal';
import './Navbar.css';

interface NavbarProps {
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pop out only when scrolled past the hero section
      const heroThreshold = Math.max(window.innerHeight - 80, 450);
      setScrolled(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate('about');
    } else {
      window.location.hash = '#about-us';
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled || currentPage === 'about' ? 'scrolled' : 'transparent-hero'}`}>
        <div className="navbar-pill">
          
          {/* Minimalist Architectural Wordmark matching reference */}
          <a href="#" className="navbar-logo" onClick={handleHomeClick}>
            <span className="logo-main-name">
              dp<span className="logo-accent">_</span>
            </span>
            <span className="logo-subline">DESIGN STUDIO</span>
          </a>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {/* 1. Home */}
            <a 
              href="#" 
              className={`nav-item ${currentPage === 'home' ? 'active-page' : ''}`}
              onClick={handleHomeClick}
            >
              Home
            </a>

            {/* 2. About Us */}
            <a 
              href="#about-us" 
              className={`nav-item ${currentPage === 'about' ? 'active-page' : ''}`}
              onClick={handleAboutClick}
            >
              About Us
            </a>

            {/* 3. Services Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`nav-item nav-dropdown-trigger ${activeDropdown === 'services' ? 'open' : ''}`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <span className="dropdown-chevron">▾</span>
              </button>
              <div className={`nav-dropdown-menu ${activeDropdown === 'services' ? 'visible' : ''}`}>
                <a href="#architectural-design" className="dropdown-link">Architectural Design</a>
                <a href="#kitchens" className="dropdown-link">Kitchen Design</a>
                <a href="#bathrooms" className="dropdown-link">Bathroom Design</a>
              </div>
            </div>

            {/* 4. Areas We Serve Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('areas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`nav-item nav-dropdown-trigger ${activeDropdown === 'areas' ? 'open' : ''}`}
                aria-expanded={activeDropdown === 'areas'}
              >
                <span>Areas We Serve</span>
                <span className="dropdown-chevron">▾</span>
              </button>
              <div className={`nav-dropdown-menu ${activeDropdown === 'areas' ? 'visible' : ''}`}>
                <a href="#areas" className="dropdown-link">Parramatta</a>
                <a href="#areas" className="dropdown-link">All Areas We Serve</a>
              </div>
            </div>

            {/* 5. Blogs */}
            <a href="#blogs" className="nav-item">Blogs</a>

            {/* 6. Contact */}
            <a href="#contact" className="nav-item">Contact</a>
          </nav>

          {/* Action Group: Sleek Compact Book Now Pill (reveals 1300 373 374 on hover, opens Contact Modal on click) */}
          <div className="navbar-actions">
            <button 
              type="button"
              className="nav-book-pill" 
              onClick={() => setIsContactModalOpen(true)}
              aria-label="Book a Consultation - Call 1300 373 374"
            >
              <span className="book-pill-inner">
                {/* Default State: Book Now */}
                <span className="book-pill-label book-pill-default">
                  Book Now
                </span>
                {/* Hover State: Phone Number */}
                <span className="book-pill-label book-pill-hover">
                  1300 373 374
                </span>
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Pop-up Consultation Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
