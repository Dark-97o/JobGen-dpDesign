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
  videoSrc: string;
}

interface HeroProps {
  onNavigate?: (page: 'kitchen-design' | 'bathroom-design' | 'architectural-design') => void;
}

export function Hero({ onNavigate }: HeroProps = {}) {
  const slides: Slide[] = [
    {
      id: 0,
      tabLabel: 'ARCHITECTURAL DESIGN',
      eyebrow: '// DP DESIGN STUDIO // ARCHITECTURAL DESIGN',
      title: 'Architecture Shaped for Living.',
      subtitle: 'Custom single & double-storey homes, duplexes, townhouses, alterations, and seamless DA/CDC council approvals across Sydney.',
      btnText: 'EXPLORE ARCHITECTURE',
      btnLink: '#services',
      videoSrc: '/hero.mp4'
    },
    {
      id: 1,
      tabLabel: 'KITCHEN RENOVATIONS',
      eyebrow: '// DP DESIGN STUDIO // KITCHEN RENOVATIONS',
      title: 'Best Kitchen Design, Sydney.',
      subtitle: 'Turnkey luxury culinary spaces with bespoke cabinetry, waterfall stone islands, premium tapware, and full trade project management.',
      btnText: 'EXPLORE KITCHENS',
      btnLink: '#kitchens',
      videoSrc: '/kitchen.mp4'
    },
    {
      id: 2,
      tabLabel: 'LUXURY BATHROOMS',
      eyebrow: '// DP DESIGN STUDIO // LUXURY BATHROOMS',
      title: 'Bespoke Bathroom Sanctuaries.',
      subtitle: 'Balancing beauty with functionality: freestanding bathtubs, curbless walk-in showers, custom vanities, and certified waterproofing.',
      btnText: 'EXPLORE BATHROOMS',
      btnLink: '#bathrooms',
      videoSrc: '/bathroom.mp4'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // On-demand video loading: initial load only downloads hero.mp4 (Slide 0).
  // Subsequent videos (kitchen.mp4, bathroom.mp4) load only when needed or on tab hover.
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    setLoadedVideos((prev) => {
      if (prev.has(currentSlide)) return prev;
      const next = new Set(prev);
      next.add(currentSlide);
      return next;
    });
  }, [currentSlide]);

  const preloadVideo = (idx: number) => {
    setLoadedVideos((prev) => {
      if (prev.has(idx)) return prev;
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    preloadVideo(prev);
    setCurrentSlide(prev);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    preloadVideo(next);
    setCurrentSlide(next);
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
      {/* Background Fullscreen Cross-fading Videos with On-Demand Loading */}
      <div className="hero-video-wrapper">
        {slides.map((slide, idx) => {
          const isLoaded = loadedVideos.has(idx);
          return (
            <video
              key={slide.id}
              autoPlay
              loop
              muted
              playsInline
              className={`hero-video-element ${currentSlide === idx ? 'is-active' : 'is-inactive'}`}
              preload={idx === 0 ? 'auto' : isLoaded ? 'auto' : 'none'}
            >
              {isLoaded && <source src={slide.videoSrc} type="video/mp4" />}
            </video>
          );
        })}
        {/* Cinematic Vignette Overlay */}
        <div className="hero-cinematic-overlay"></div>
        {/* Soft, seamless black overlay fade in text area (no blur box) */}
        <div className="hero-text-area-fade"></div>
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
              <a 
                href={active.btnLink} 
                className="hero-scopri-btn"
                onClick={(e) => {
                  if (active.btnLink === '#kitchens' && onNavigate) {
                    e.preventDefault();
                    onNavigate('kitchen-design');
                  } else if (active.btnLink === '#bathrooms' && onNavigate) {
                    e.preventDefault();
                    onNavigate('bathroom-design');
                  } else if (active.btnLink === '#services' && onNavigate) {
                    // Let in-page smooth scroll happen
                  }
                }}
              >
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
                  onClick={() => {
                    preloadVideo(index);
                    setCurrentSlide(index);
                  }}
                  onMouseEnter={() => preloadVideo(index)}
                  onFocus={() => preloadVideo(index)}
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
