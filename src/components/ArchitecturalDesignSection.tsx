import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './ArchitecturalDesignSection.css';

interface PillarService {
  title: string;
  desc: string;
  image: string;
  category: string;
}

const PILLAR_SERVICES: PillarService[] = [
  {
    title: 'Architectural designs',
    desc: 'Custom luxury residences, pavilions, and contemporary multi-storey homes crafted for Sydney living.',
    image: '/images/disciplines/architecture.jpg',
    category: 'RESIDENTIAL'
  },
  {
    title: 'Granny flat designs.',
    desc: 'Council-compliant secondary dwellings engineered for family comfort, rental yield, and privacy.',
    image: '/images/disciplines/granny-flat.jpg',
    category: 'SECONDARY DWELLING'
  },
  {
    title: 'BBQ area designs.',
    desc: 'Integrated outdoor entertaining pavilions, built-in cookers, stone benchtops, and alfresco dining.',
    image: '/images/disciplines/bbq-area.jpg',
    category: 'ALFRESCO'
  },
  {
    title: 'Colour consulting.',
    desc: 'Sophisticated architectural palettes, render textures, natural timber tones, and surface finishes.',
    image: '/images/disciplines/colour-consulting.jpg',
    category: 'PALETTES'
  },
  {
    title: 'Landscape designs.',
    desc: 'Harmonious site masterplanning, courtyard gardens, stone pathways, retaining walls, and greenery.',
    image: '/images/disciplines/landscape.jpg',
    category: 'LANDSCAPE'
  },
  {
    title: 'Kitchen designs.',
    desc: 'Ergonomic 3D spatial flow, stone waterfall islands, bespoke cabinetry, and butler’s pantries.',
    image: '/images/disciplines/kitchen.jpg',
    category: 'CULINARY'
  },
  {
    title: 'Bathroom renovations.',
    desc: 'Turnkey spa transformations, AS 3740 waterproofing, walk-in showers, and restorative luxury.',
    image: '/images/disciplines/bathroom-renovations.jpg',
    category: 'BATHROOM'
  },
  {
    title: 'Bathroom designs.',
    desc: 'Floating vanities, fluted glass, concealed LED niches, and bespoke tactile tile layouts.',
    image: '/images/disciplines/bathroom-designs.jpg',
    category: 'INTERIOR'
  },
  {
    title: 'Survey plans.',
    desc: 'Cadastral boundary surveys, contour details, easements, levels, and site constraint modeling.',
    image: '/images/disciplines/survey-plans.jpg',
    category: 'SURVEY'
  },
  {
    title: 'Pergola designs.',
    desc: 'Engineered timber, steel, and louvred pergola structures bridging indoor and outdoor spaces.',
    image: '/images/disciplines/pergola.jpg',
    category: 'OUTDOOR'
  },
  {
    title: 'Shop fit-out designs.',
    desc: 'Boutique retail shopfronts, commercial interiors, customer flow, and council compliance.',
    image: '/images/disciplines/shop-fitout.jpg',
    category: 'COMMERCIAL'
  },
  {
    title: 'Alterations and additions.',
    desc: 'Second-storey additions, ground-floor extensions, and structural wall removals to unlock space.',
    image: '/images/disciplines/alterations.jpg',
    category: 'EXTENSIONS'
  },
  {
    title: 'Pool designs.',
    desc: 'Luxury inground concrete pools, plunge spas, compliance glass fencing, and pool cabanas.',
    image: '/images/disciplines/pool.jpg',
    category: 'AQUATIC'
  },
  {
    title: 'Interior designs.',
    desc: 'Comprehensive interior architecture, bespoke built-in joinery, lighting schedules, and materiality.',
    image: '/images/disciplines/interior.jpg',
    category: 'INTERIOR'
  },
  {
    title: 'Project management.',
    desc: 'Architect & licensed builder oversight, trade coordination, council certifiers, and turnkey delivery.',
    image: '/images/disciplines/project-management.jpg',
    category: 'EXECUTION'
  }
];

export function ArchitecturalDesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [activePillar, setActivePillar] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!hasStarted && videoRef.current) {
            setHasStarted(true);
            videoRef.current.play().catch(() => {});
          }
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const handleVideoEnded = () => {
    setIsEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="architectural-design" 
      className="archi-design-section" 
      aria-label="Architectural Design Practice"
    >
      {/* 01. Upper Stage: Video Sketch + Frame + Headline + 3 Rounded Cards */}
      <div className="archi-stage">
        {/* Dedicated Video & Frame Viewport with seamless letterbox-free framing */}
        <div className="archi-video-viewport">
          {/* Background Sketch Video */}
          <video
            ref={videoRef}
            src="/archi1.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            className={`archi-bg-video ${isEnded ? 'video-static-last-frame' : ''}`}
          />

          {/* Floating Golden Mist Sphere Animation on top of archi1 */}
          <div className="archi-golden-mist-layer" aria-hidden="true">
            <div className="archi-mist-sphere archi-sphere-primary"></div>
            <div className="archi-mist-sphere archi-sphere-secondary"></div>
            <div className="archi-mist-sphere archi-sphere-tertiary"></div>
          </div>

          {/* YouTube Video: Aligned to inner frame */}
          {isEnded && (
            <div className="archi-yt-frame-container" aria-label="Box Hill Residence Tour">
              <iframe
                className="archi-yt-iframe"
                src="https://www.youtube.com/embed/Bi4jsD_P-1I?autoplay=1&mute=1&loop=1&playlist=Bi4jsD_P-1I&playsinline=1&controls=1&rel=0&modestbranding=1"
                title="Box Hill NSW 2765 Luxurious Contemporary Residence - dp Design Studio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Half-faded architectural background image on the right */}
        <div className="archi-bg-dpabout-wrapper" aria-hidden="true">
          <img 
            src="/dpabout.jpg" 
            alt="dp Design Studio Architecture" 
            className="archi-bg-dpabout-img" 
          />
          <div className="archi-dpabout-fade-mask"></div>
        </div>

        {/* Right Side Content: Bigger headline, 3 rounded corner cards (different widths, left-aligned text) & Explore button */}
        <div className="archi-right-content">
          <div className="archi-main-title-wrap headline-watermark-wrapper">
            <span className="headline-watermark-text" aria-hidden="true">Architectural Design</span>
            <h2 className="archi-main-title">
              Architectural Design
            </h2>
          </div>

          <p className="archi-lead-statement">
            dp Design Studio delivers visionary architectural design tailored for modern Sydney living. From bespoke custom residences and luxury alterations to seamless Council DA and CDC approvals, we create enduring spaces where elegance meets lifestyle.
          </p>

          {/* 3 Architectural Specification Cards (Distinct from button) */}
          <div className="archi-feature-cards">
            <div className="archi-feature-card card-width-1">
              <span className="card-index">01</span>
              <span className="card-divider">/</span>
              <span className="card-text">Bespoke Custom Residences</span>
            </div>

            <div className="archi-feature-card card-width-2">
              <span className="card-index">02</span>
              <span className="card-divider">/</span>
              <span className="card-text">Statutory Council DA &amp; CDC Approvals</span>
            </div>

            <div className="archi-feature-card card-width-3">
              <span className="card-index">03</span>
              <span className="card-divider">/</span>
              <span className="card-text">Architect &amp; Builder Synergy (Daylo Build)</span>
            </div>
          </div>

          {/* Explore Button */}
          <div className="archi-action-strip">
            <a href="#portfolio" className="archi-explore-btn">
              <span>Explore Designs</span>
              <ArrowRight size={16} className="explore-arrow-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* 02. Vertical Pillars Accordion with Vertical Text & Expandable Image Backgrounds */}
      <div className="archi-pillars-wrapper">
        <div className="container archi-pillars-container">
          <div className="archi-pillars-header headline-watermark-wrapper">
            <span className="headline-watermark-text is-right" aria-hidden="true">Everything We Design</span>
            <h3 className="pillars-section-title">Everything We Design for Your Home</h3>
          </div>

          <div className="archi-pillars-accordion">
            {PILLAR_SERVICES.map((service, index) => {
              const isActive = activePillar === index;
              const numStr = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={index}
                  className={`archi-pillar-column ${isActive ? 'is-expanded' : ''}`}
                  onMouseEnter={() => setActivePillar(index)}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  {/* Black dark scrim overlay */}
                  <div className="pillar-scrim" />

                  {/* Vertical Collapsed Header (shows when not expanded) */}
                  <div className="pillar-vertical-wrap">
                    <span className="pillar-vertical-num">{numStr}</span>
                    <span className="pillar-vertical-text">{service.title}</span>
                  </div>

                  {/* Expanded Content View (fades in on hover) - Yellow badge box removed */}
                  <div className="pillar-expanded-view">
                    <h4 className="pillar-expanded-title">{service.title}</h4>
                    <p className="pillar-expanded-desc">{service.desc}</p>

                    <a href="#designs" className="pillar-expanded-link">
                      <span>Explore Scope</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitecturalDesignSection;
