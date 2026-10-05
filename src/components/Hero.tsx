import { useState, useEffect } from 'react';
import './Hero.css';

interface Slide {
  id: number;
  tabLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  btnText: string;
  btnLink: string;
}

export function Hero() {
  const slides: Slide[] = [
    {
      id: 0,
      tabLabel: 'ARCHITECTURAL DESIGN',
      eyebrow: '// DP DESIGN STUDIO // ARCHITECTURAL DESIGN',
      title: 'Architecture Shaped for Living.',
      subtitle: 'Custom single & double-storey homes, duplexes, townhouses, alterations, and seamless DA/CDC council approvals across Sydney.',
      btnText: 'EXPLORE ARCHITECTURE',
      btnLink: '#services'
    },
    {
      id: 1,
      tabLabel: 'KITCHEN RENOVATIONS',
      eyebrow: '// DP DESIGN STUDIO // KITCHEN RENOVATIONS',
      title: 'Best Kitchen Design, Sydney.',
      subtitle: 'Turnkey luxury culinary spaces with bespoke cabinetry, waterfall stone islands, premium tapware, and full trade project management.',
      btnText: 'EXPLORE KITCHENS',
      btnLink: '#kitchens'
    },
    {
      id: 2,
      tabLabel: 'LUXURY BATHROOMS',
      eyebrow: '// DP DESIGN STUDIO // LUXURY BATHROOMS',
      title: 'Bespoke Bathroom Sanctuaries.',
      subtitle: 'Balancing beauty with functionality: freestanding bathtubs, curbless walk-in showers, custom vanities, and certified waterproofing.',
      btnText: 'EXPLORE BATHROOMS',
      btnLink: '#bathrooms'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToNextSection = () => {
    const nextElem = document.getElementById('services');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = slides[currentSlide];

  return (
    <section className="hero-minimal-section">
      {/* Background Fullscreen Video */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-element"
          poster="/images/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette Overlay */}
        <div className="hero-cinematic-overlay"></div>
      </div>

      {/* Main Hero Content (Bottom-Left Aligned matching reference image) */}
      <div className="hero-content-viewport">
        <div className="container hero-content-inner">
          <div className="hero-text-block" key={active.id}>
            {/* Slide Eyebrow */}
            <div className="hero-eyebrow-line">
              <span className="hero-slide-eyebrow">{active.eyebrow}</span>
            </div>

            {/* Giant Display Title */}
            <h1 className="hero-display-headline">
              {active.title}
            </h1>

            {/* Subtitle & Inline Outlined Pill Button */}
            <div className="hero-subtitle-cta-row">
              <p className="hero-display-subtitle">
                {active.subtitle}
              </p>
              <a href={active.btnLink} className="hero-scopri-btn">
                <span>{active.btnText}</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Carousel Navigation Strip */}
      <div className="hero-bottom-strip">
        <div className="container hero-bottom-container">
          
          {/* Left Arrow Controls */}
          <div className="hero-arrows-group">
            <button
              onClick={prevSlide}
              className="hero-arrow-btn"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="hero-arrow-btn"
              aria-label="Next slide"
            >
              →
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="hero-tabs-group" role="tablist">
            {slides.map((slide, index) => {
              const isCurrent = currentSlide === index;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={isCurrent}
                  className={`hero-nav-tab ${isCurrent ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <span className="tab-title">{slide.tabLabel}</span>
                  {isCurrent && <span className="tab-active-indicator"></span>}
                </button>
              );
            })}
          </div>

          {/* Right Scroll Down Anchor Button */}
          <button
            onClick={scrollToNextSection}
            className="hero-scroll-btn"
            aria-label="Scroll down to services"
          >
            ↓
          </button>

        </div>
      </div>
    </section>
  );
}
