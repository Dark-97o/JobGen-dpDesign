import { useState, useEffect } from 'react';
import { ContactModal } from './ContactModal';
import './Navbar.css';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'architectural-design' | 'kitchen-design' | 'bathroom-design' | 'areas-we-serve';
  onNavigate?: (page: 'home' | 'about' | 'architectural-design' | 'kitchen-design' | 'bathroom-design' | 'areas-we-serve') => void;
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

  const handleServiceClick = (service: 'architectural-design' | 'kitchen-design' | 'bathroom-design') => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate(service);
    } else {
      window.location.hash = `#${service}`;
    }
  };

  const handleAreasClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate('areas-we-serve');
    } else {
      window.location.hash = '#areas-we-serve';
    }
  };

  const handleBlogsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('blogs') || document.getElementById('articles');
          if (el) {
            const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number; duration?: number }) => void } }).lenis;
            if (lenis) {
              lenis.scrollTo(el, { offset: -70, duration: 1.25 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 800);
      } else {
        window.location.hash = '#blogs';
      }
    } else {
      const el = document.getElementById('blogs') || document.getElementById('articles');
      if (el) {
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number; duration?: number }) => void } }).lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -70, duration: 1.25 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.hash = '#blogs';
      }
    }
  };

  const isInnerPage = currentPage !== 'home';

  return (
    <>
      <header className={`navbar-header ${scrolled || isInnerPage ? 'scrolled' : 'transparent-hero'}`}>
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
                className={`nav-item nav-dropdown-trigger ${
                  activeDropdown === 'services' || 
                  ['architectural-design', 'kitchen-design', 'bathroom-design'].includes(currentPage) 
                    ? 'open active-page' 
                    : ''
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <span className="dropdown-chevron">▾</span>
              </button>
              <div className={`nav-dropdown-menu ${activeDropdown === 'services' ? 'visible' : ''}`}>
                <a 
                  href="#architectural-design" 
                  className={`dropdown-link ${currentPage === 'architectural-design' ? 'active-item' : ''}`}
                  onClick={handleServiceClick('architectural-design')}
                >
                  Architectural Design
                </a>
                <a 
                  href="#kitchen-design" 
                  className={`dropdown-link ${currentPage === 'kitchen-design' ? 'active-item' : ''}`}
                  onClick={handleServiceClick('kitchen-design')}
                >
                  Kitchen Design
                </a>
                <a 
                  href="#bathroom-design" 
                  className={`dropdown-link ${currentPage === 'bathroom-design' ? 'active-item' : ''}`}
                  onClick={handleServiceClick('bathroom-design')}
                >
                  Bathroom Design
                </a>
              </div>
            </div>

            {/* 4. Areas We Serve */}
            <a 
              href="#areas-we-serve" 
              className={`nav-item ${currentPage === 'areas-we-serve' ? 'active-page' : ''}`}
              onClick={handleAreasClick}
            >
              Areas We Serve
            </a>

            {/* 5. Blogs */}
            <a href="#blogs" className="nav-item" onClick={handleBlogsClick}>Blogs</a>

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
