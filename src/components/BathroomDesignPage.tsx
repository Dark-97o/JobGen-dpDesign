import { useState } from 'react';
import { 
  Bath, 
  Droplets, 
  Maximize2, 
  Wind, 
  Scale, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Home, 
  ChevronDown,
  CheckCircle2,
  Layers,
  Sun,
  Sparkles,
  Building2
} from 'lucide-react';
import { ContactModal } from './ContactModal';
import './BathroomDesignPage.css';

interface BathroomDesignPageProps {
  onNavigateHome: () => void;
  onNavigateService?: (service: string) => void;
}

interface ServiceOfferItem {
  num: string;
  title: string;
  subtitle?: string;
  desc: string;
  image: string;
}

interface GlanceServiceItem {
  title: string;
  desc: string;
  image: string;
}

interface FactorItem {
  num: string;
  badge: string;
  spec: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  styleClass: string;
  bgImage: string;
  chips?: string[];
}

export function BathroomDesignPage({ onNavigateHome }: BathroomDesignPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(0);
  const [activeGlancePillar, setActiveGlancePillar] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const challenges = [
    {
      icon: <Bath size={18} />,
      title: "Congested Fixtures & Awkward Door Swings",
      desc: "Doors knocking into shower screens, vanities blocking walkways, and cramped toilet zones. We rework room geometry for comfortable, intuitive circulation."
    },
    {
      icon: <Droplets size={18} />,
      title: "More Storage Without Visible Clutter",
      desc: "Shaving cabinets recessed flush into stud walls, deep vanity pull-outs with internal power points, and illuminated niches keep surfaces immaculate."
    },
    {
      icon: <Maximize2 size={18} />,
      title: "Small or Awkward Bathrooms",
      desc: "Compact dimensions and angled ceilings still allow a five-star experience. We employ wall-hung fixtures, frameless glass, and continuous tiles to visually double the space."
    },
    {
      icon: <Wind size={18} />,
      title: "Light, Ventilation & AS 3740 Moisture Control",
      desc: "Dark, steamy bathrooms deteriorate quickly. We engineer dual-ducted inline extraction, natural skylights, and licensed AS 3740 waterproofing membranes."
    },
    {
      icon: <Scale size={18} />,
      title: "Budget & Premium Fixture Balance",
      desc: "We prioritize investment into high-wear tapware valves, certified waterproofing, and feature stone walls, while recommending smart savings on secondary surfaces."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Single Team From Concept to Handover",
      desc: "No coordinating separate plumbers, tilers, electricians, and waterproofing certifiers. Our architectural studio manages design, trade execution, and warranty sign-off."
    }
  ];

  const servicesOffered: ServiceOfferItem[] = [
    {
      num: "01",
      title: "Family Bathroom Design",
      subtitle: "Freestanding Bath & Long Storage Vanity",
      desc: "Family bathroom design with freestanding bath and long storage vanity by DP Design Studio, engineered to withstand the morning rush of a bustling Sydney household while retaining refined hotel-grade aesthetics.",
      image: "/images/bathroom/family-bathroom.jpg"
    },
    {
      num: "02",
      title: "Ensuite Design",
      subtitle: "Freestanding Bath & Floating Double Vanity",
      desc: "Ensuite design with freestanding bath and floating double vanity by DP Design Studio, featuring dual monsoon rain showerheads, hidden power outlets, under-cabinet lighting, and private sanctuary zoning.",
      image: "/images/bathroom/ensuite-bathroom.jpg"
    },
    {
      num: "03",
      title: "Powder Room Design",
      subtitle: "Feature Mirror & Wall-Hung Vanity",
      desc: "Compact powder room designs with feature mirror and wall-hung vanity by DP Design Studio, delivering a high-impact jewel-box space with monolithic stone basins, dramatic dark plaster, and moody halo illumination.",
      image: "/images/bathroom/powder-room.jpg"
    },
    {
      num: "04",
      title: "Wet Room and Walk-In Shower Design",
      subtitle: "Frameless Glass & Recessed Niche",
      desc: "Walk-in shower with frameless glass and recessed niche designed by DP Design Studio, featuring zero-step curbless threshold transitions, invisible linear slot drains, and complete AS 3740 tanking waterproofing.",
      image: "/images/bathroom/wet-room-walkin.jpg"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We discuss your functional requirements, storage wish-list, fixtures preferences, and establish a clear budget framework."
    },
    {
      num: "02",
      title: "Site & Plumbing Audit",
      desc: "Laser survey of the existing bathroom, inspecting waste pipe locations, floor structure, water pressure, and electrical feeds."
    },
    {
      num: "03",
      title: "Concept Layout & Flow",
      desc: "Developing 2D layout options optimizing ergonomics, shower placement, door swings, and natural daylight penetration."
    },
    {
      num: "04",
      title: "3D Documentation & Finishes",
      desc: "Photorealistic 3D rendering, detailed tile setout drawings, vanity joinery details, and complete PC (prime cost) fixture schedules."
    },
    {
      num: "05",
      title: "Waterproofing & Rough-In",
      desc: "Clean strip-out, plumbing/electrical relocation, screeding to exact falls, and dual-layer AS 3740 certified waterproofing application."
    },
    {
      num: "06",
      title: "Precision Tiling & Handover",
      desc: "Mitred-edge tile installation, frameless glass fitting, tapware commissioning, silicone seal execution, and final quality sign-off."
    }
  ];

  const glanceServices: GlanceServiceItem[] = [
    {
      title: "Complete bathroom, ensuite and powder room renovations",
      desc: "End-to-end full bathroom renewals from strip-out to final handover, managing all trades and materials under registered single-firm accountability.",
      image: "/images/bathroom/renovations-full.jpg"
    },
    {
      title: "Bathroom suites designed, supplied and fitted, including all required fixtures and accessories",
      desc: "Curated designer packages specifying baths, floating vanities, architectural tapware, mirrored cabinets, and heated towel rails.",
      image: "/images/bathroom/family-bathroom.jpg"
    },
    {
      title: "Bathroom and plumbing work",
      desc: "Licensed hydraulic rough-in, water supply pipework, in-wall mixer bodies, pressure testing, and core-drilling relocation.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Carpentry and plastering work",
      desc: "Structural wall framing, pocket door installations, recessed stud wall niches, moisture-resistant Villaboard linings, and shadowline finishes.",
      image: "/images/disciplines/alterations.jpg"
    },
    {
      title: "Wet room and shower waterproofing",
      desc: "Licensed dual-coat AS 3740 Class III polyurethane tanking membranes with certified bond-breakers, puddle flanges, and statutory warranty.",
      image: "/images/bathroom/waterproofing.jpg"
    },
    {
      title: "Bathroom tiling and flooring",
      desc: "Large-format porcelain and natural stone floor and wall tiling, laser-screeded falls to drains, mitred apron edges, and epoxy grouting.",
      image: "/images/bathroom/tiling-flooring.jpg"
    },
    {
      title: "Bathroom electrical installation",
      desc: "IP-rated zone-compliant electrical rough-in, shadow-free mirror illumination, concealed exhaust ducting, and programmable underfloor heating.",
      image: "/images/bathroom/powder-room.jpg"
    },
    {
      title: "Custom-designed, manufactured and installed cabinetry",
      desc: "Bespoke moisture-resistant joinery, 2-pack polyurethane, fluted timber drawer faces, internal power points, and stone vanity tops.",
      image: "/images/bathroom/custom-cabinetry.jpg"
    }
  ];

  const additionalBathroomServices = [
    "Detailed specifications and a document listing all finishes",
    "Draft plans for bathroom, cabinetry, kitchen and laundry fit-outs",
    "3D models and photo montages so you can see the bathroom before it is built",
    "Layout sketches and initial design options",
    "Builder's cost estimates",
    "Site inspection and general building consulting",
    "Structural detail and engineer certificates where walls or openings change",
    "Development and construction certificate applications where they are needed",
    "Project management through construction"
  ];

  const designFactors: FactorItem[] = [
    {
      num: "01",
      badge: "LIFESTYLE",
      spec: "WELLNESS FOCUS",
      title: "Assessing Your Needs",
      summary: "Harmonising freestanding baths, walk-in showers, and double vanities with your household's daily wellness routines.",
      icon: <Bath size={18} />,
      styleClass: "factor-card-sanctuary",
      bgImage: "/images/bathroom/factor-sanctuary.jpg",
      chips: ["Freestanding Baths", "Walk-In Enclosures", "Double Vanities"]
    },
    {
      num: "02",
      badge: "CLIMATE",
      spec: "50 L/s EXTRACTION",
      title: "Ventilation Engineering",
      summary: "High-velocity inline ducted extraction engineered to eliminate condensation, steam, and mould.",
      icon: <Wind size={18} />,
      styleClass: "factor-card-climate",
      bgImage: "/images/bathroom/factor-ventilation.jpg"
    },
    {
      num: "03",
      badge: "SPATIAL FLOW",
      spec: "CAD CLEARANCES",
      title: "Planning The Layout",
      summary: "Millimetre-accurate clearances eliminating door clashes and optimizing circulation between wet zones.",
      icon: <Maximize2 size={18} />,
      styleClass: "factor-card-blueprint",
      bgImage: "/images/bathroom/factor-layout.jpg"
    },
    {
      num: "04",
      badge: "STORAGE",
      spec: "IN-WALL NICHES",
      title: "Smart Concealed Storage",
      summary: "Recessed mirrored shaving cabinets and deep soft-close vanities keeping surfaces calm and clutter-free.",
      icon: <Layers size={18} />,
      styleClass: "factor-card-storage",
      bgImage: "/images/bathroom/factor-storage.jpg"
    },
    {
      num: "05",
      badge: "LIGHTING",
      spec: "2700K WARM LED",
      title: "Architectural Lighting",
      summary: "Shadow-free vanity mirror task lighting layered with warm indirect LED coves for restorative evenings.",
      icon: <Sun size={18} />,
      styleClass: "factor-card-lighting",
      bgImage: "/images/bathroom/factor-lighting.jpg"
    },
    {
      num: "06",
      badge: "FINISHES",
      spec: "AS 4586 SLIP RATED",
      title: "Tiling & Tactile Finishes",
      summary: "Honed natural stone, large-format porcelain slabs, and non-slip textural finishes curated for endurance.",
      icon: <Sparkles size={18} />,
      styleClass: "factor-card-finishes",
      bgImage: "/images/bathroom/factor-finishes.jpg"
    },
    {
      num: "07",
      badge: "STRUCTURE",
      spec: "NCC COMPLIANT",
      title: "Being Realistic About Space",
      summary: "Assessing load-bearing wall removals, window relocations, and service drops to unlock maximum usable area and natural light.",
      icon: <Building2 size={18} />,
      styleClass: "factor-card-structural",
      bgImage: "/images/bathroom/factor-space.jpg",
      chips: ["Load-Bearing Removals", "Soil Stack Drops", "Window Shifts"]
    }
  ];

  const faqs = [
    {
      q: "Can you move the toilet, shower, and vanity locations in an existing bathroom?",
      a: "Yes. In houses with subfloor crawl spaces or timber joists, moving plumbing services is straightforward. On concrete slab foundations or in multi-storey apartment buildings, relocating soil waste stacks requires specialized core-drilling, raised screed floors, or coordinating with strata bylaws. As registered architects, we evaluate structural implications and coordinate certified hydraulic solutions."
    },
    {
      q: "Why is AS 3740 waterproofing certification so critical in NSW?",
      a: "Waterproofing failure is the single most common and costly defect in Australian residential building. We enforce compliance with Australian Standard AS 3740 (Waterproofing of domestic wet areas), utilizing premium Class III polyurethane membranes with reinforced bond-breakers, puddle flanges, and water-stop angles. Every bathroom is certified by a licensed waterproofer for complete peace of mind."
    },
    {
      q: "How long does a full bathroom renovation take from demolition to completion?",
      a: "The physical construction typically requires 3 to 4 weeks. This includes demolition (2 days), plumbing/electrical rough-in (3 days), floor screeding and curing (2 days), multi-coat waterproofing with mandatory drying times (3 to 4 days), precision tiling and grouting (5 to 7 days), and final fixture fit-off and glass installation (3 days)."
    },
    {
      q: "How do you make a small Sydney bathroom feel significantly larger?",
      a: "We utilize four key architectural strategies: (1) Wall-hung vanities and concealed-cistern toilets that expose continuous floor area; (2) Large-format tiles (e.g. 600x1200mm) with color-matched grout to minimize visual grid lines; (3) Frameless glass shower screens with curbless floor transitions; (4) Recessed mirrored shaving cabinets extending across the full wall width."
    },
    {
      q: "Do you supply the tiles, tapware, and sanitary fixtures?",
      a: "We collaborate with Australia's premier architectural suppliers (Reece, Astra Walker, Brodware, Rogerseller, Candana, Academy Tiles). We produce complete fixture schedules with exact model codes, finishes, and technical rough-in requirements, allowing you to access our trade pricing discounts."
    }
  ];

  return (
    <div className="service-page">
      {/* ── Hero Section ── */}
      <section className="service-hero">
        <div className="service-hero-bg-media">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="service-hero-video"
            poster="/images/bathroom-sanctuary.jpg"
          >
            <source src="/bathroom.mp4" type="video/mp4" />
          </video>
          <div className="service-hero-scrim" />
        </div>

        <div className="service-hero-container">
          {/* Breadcrumb Navigation */}
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <button 
              type="button" 
              className="breadcrumb-link" 
              onClick={onNavigateHome}
            >
              <Home size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4 }} />
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Services</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" style={{ color: 'var(--gold-light)' }}>Bathroom Design</span>
          </nav>

          <h1 className="service-hero-title">
            Bathroom Design & Renovation <br />
            <span className="gold-accent">Calm, Restorative & Built To Last</span>
          </h1>

          <p className="service-hero-lead">
            Elevate your daily routine with bespoke bathrooms balancing serene aesthetics, intuitive circulation, and uncompromising AS 3740 waterproofing standards across Greater Sydney.
          </p>

          <div className="service-hero-actions">
            <button 
              type="button" 
              className="service-primary-btn"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book Bathroom Design Consult
              <ArrowRight size={15} />
            </button>

            <a href="tel:1300373374" className="service-phone-btn">
              <Phone size={14} />
              <span>1300 373 374</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Metrics in a sleek thick solid black band ── */}
      <div className="service-credentials-black-band">
        <div className="service-credentials-inner">
          <div className="service-cred-item">
            <span className="service-cred-num">AS 3740</span>
            <span className="service-cred-label">Certified Waterproofing</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">7-Year</span>
            <span className="service-cred-label">Statutory Warranty</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">Curbless</span>
            <span className="service-cred-label">Wet Room Specialists</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">5.0 ★</span>
            <span className="service-cred-label">Verified Client Reviews</span>
          </div>
        </div>
      </div>

      {/* ── 01. Bathroom Challenges We Overcome (Compact cards + 20% right image + dpabout bg) ── */}
      <section className="service-section challenges-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Bathroom Challenges We Overcome</h2>
            <p>
              A bathroom must work hard every single day while feeling like a serene sanctuary. We solve circulation, moisture, and storage challenges from first principles.
            </p>
          </div>

          <div className="challenges-layout-split">
            {/* 80% Left Compact Cards */}
            <div className="challenges-left-compact">
              <div className="challenges-grid-compact">
                {challenges.map((c, i) => (
                  <div key={i} className="challenge-card-compact">
                    <div className="challenge-card-top">
                      <div className="challenge-icon-compact">
                        {c.icon}
                      </div>
                      <h3 className="challenge-title-compact">{c.title}</h3>
                    </div>
                    <p className="challenge-desc-compact">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 20% Right Image */}
            <div className="challenges-right-image-col">
              <div className="challenges-side-image-card">
                <img 
                  src="/images/bathroom-sanctuary.jpg" 
                  alt="Bathroom Layout Resolution" 
                  className="challenges-side-img" 
                  loading="lazy" 
                />
                <div className="challenges-side-badge">
                  <span className="side-badge-lead">WATERPROOF</span>
                  <span className="side-badge-sub">AS 3740 Certified Peace of Mind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. Services We Offer (Straight rows with separators + hover image expansion) ── */}
      <section className="service-section dark services-we-offer-section">
        <div className="service-container services-fullwidth-container">
          <div className="section-head">
            <h2>Services We Offer</h2>
            <p>
              From master ensuite sanctuaries to jewel-box powder rooms and curbless wet rooms tailored to Sydney residences.
            </p>
          </div>

          <div className="services-expand-list">
            {servicesOffered.map((service, index) => {
              const isHovered = hoveredService === index;
              return (
                <div 
                  key={index} 
                  className={`service-hover-row ${isHovered ? 'is-expanded' : ''}`}
                  onMouseEnter={() => setHoveredService(index)}
                  onClick={() => setHoveredService(isHovered ? null : index)}
                  style={{
                    backgroundImage: isHovered ? `url(${service.image})` : undefined
                  }}
                >
                  {/* Full card background scrim overlay when expanded */}
                  {isHovered && <div className="service-row-bg-scrim" />}

                  <div className="service-row-main">
                    <div className="service-row-left">
                      <span className="service-row-num">{service.num}</span>
                      <div className="service-row-title-wrap">
                        <span className="service-row-title">{service.title}</span>
                        {service.subtitle && (
                          <span className="service-row-subtitle">{service.subtitle}</span>
                        )}
                      </div>
                    </div>

                    <div className="service-row-right">
                      <div className="service-row-arrow-wrap">
                        <ChevronDown 
                          size={18} 
                          className={`service-row-chevron ${isHovered ? 'rotate-up' : ''}`} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expand Content with Description & Enquire Button */}
                  <div className="service-row-expand-content">
                    <div className="service-expand-inner">
                      <div className="service-expand-info">
                        <p className="service-expand-desc">{service.desc}</p>
                        <button 
                          type="button" 
                          className="service-expand-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsContactModalOpen(true);
                          }}
                        >
                          Enquire About {service.title}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. 6-Step Methodology (3x2 Grid with Poking Numbers) ── */}
      <section className="service-section process-section">
        <div className="service-container">
          <div className="section-head">
            <h2>How Our Bathroom Design Process Works</h2>
            <p>
              A disciplined, structured journey ensuring certified waterproofing, millimetre-accurate tile setouts, and long-term peace of mind.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step-card">
                <div className="process-step-num-poking">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. Bathroom Renovation Services at a Glance (Horizontal Pillars) ── */}
      <section className="service-section dark technical-pillars-section">
        <div className="service-container pillars-fullwidth-container">
          <div className="section-head">
            <h2>Bathroom Renovation Services at a Glance</h2>
            <p>
              Comprehensive trade coordination, architectural precision, and guaranteed statutory compliance for Sydney wet areas.
            </p>
          </div>

          {/* Independent 2-column masonry layout so expanding a card doesn't stretch or expand the card next to it */}
          <div className="horizontal-pillars-container">
            <div className="horizontal-pillars-col">
              {glanceServices
                .map((service, index) => ({ service, index }))
                .filter(({ index }) => index % 2 === 0)
                .map(({ service, index }) => {
                  const isActive = activeGlancePillar === index;
                  return (
                    <div
                      key={index}
                      className={`horizontal-pillar-item ${isActive ? 'is-expanded' : ''}`}
                      onMouseEnter={() => setActiveGlancePillar(index)}
                      onClick={() => setActiveGlancePillar(isActive ? null : index)}
                      style={{ backgroundImage: `url(${service.image})`, order: index }}
                    >
                      <div className="horizontal-pillar-scrim" />
                      <div className="horizontal-pillar-content">
                        <div className="horizontal-pillar-header">
                          <div className="horizontal-pillar-title-wrap">
                            <span className="horizontal-pillar-bullet" />
                            <h3 className="horizontal-pillar-title">{service.title}</h3>
                          </div>
                          <div className="horizontal-pillar-toggle">
                            <ChevronDown 
                              size={18} 
                              className={`horizontal-pillar-chevron ${isActive ? 'rotate-up' : ''}`} 
                            />
                          </div>
                        </div>

                        <div className="horizontal-pillar-details">
                          <p className="horizontal-pillar-desc">{service.desc}</p>
                          <button 
                            type="button" 
                            className="horizontal-pillar-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsContactModalOpen(true);
                            }}
                          >
                            <span>Enquire Now</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="horizontal-pillars-col">
              {glanceServices
                .map((service, index) => ({ service, index }))
                .filter(({ index }) => index % 2 !== 0)
                .map(({ service, index }) => {
                  const isActive = activeGlancePillar === index;
                  return (
                    <div
                      key={index}
                      className={`horizontal-pillar-item ${isActive ? 'is-expanded' : ''}`}
                      onMouseEnter={() => setActiveGlancePillar(index)}
                      onClick={() => setActiveGlancePillar(isActive ? null : index)}
                      style={{ backgroundImage: `url(${service.image})`, order: index }}
                    >
                      <div className="horizontal-pillar-scrim" />
                      <div className="horizontal-pillar-content">
                        <div className="horizontal-pillar-header">
                          <div className="horizontal-pillar-title-wrap">
                            <span className="horizontal-pillar-bullet" />
                            <h3 className="horizontal-pillar-title">{service.title}</h3>
                          </div>
                          <div className="horizontal-pillar-toggle">
                            <ChevronDown 
                              size={18} 
                              className={`horizontal-pillar-chevron ${isActive ? 'rotate-up' : ''}`} 
                            />
                          </div>
                        </div>

                        <div className="horizontal-pillar-details">
                          <p className="horizontal-pillar-desc">{service.desc}</p>
                          <button 
                            type="button" 
                            className="horizontal-pillar-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsContactModalOpen(true);
                            }}
                          >
                            <span>Enquire Now</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. Additional Bathroom Services (Light Theme) ── */}
      <section className="service-section additional-bathroom-services-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Additional Bathroom Services</h2>
            <p>
              Apart from the design itself, we also organise the following for your bathroom project:
            </p>
          </div>

          <div className="bathroom-extra-services-grid">
            {additionalBathroomServices.map((item, idx) => (
              <div key={idx} className="bathroom-extra-service-card">
                <div className="bathroom-extra-service-icon-wrap">
                  <CheckCircle2 size={17} />
                </div>
                <p className="bathroom-extra-service-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. Realising Your Bathroom Design Ideas (Compact Bento Grid with Distinct Designs) ── */}
      <section className="service-section dark realising-design-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Realising Your Bathroom Design Ideas</h2>
          </div>

          <div className="realising-factors-bento">
            {designFactors.map((factor, idx) => (
              <div key={idx} className={`factor-card-compact ${factor.styleClass}`}>
                {/* Background image & scrim layer */}
                <div className="factor-card-bg-wrap">
                  <img 
                    src={factor.bgImage} 
                    alt={factor.title} 
                    className="factor-card-bg-img" 
                    loading="lazy" 
                  />
                  <div className="factor-card-bg-scrim" />
                </div>

                <div className="factor-card-top-row">
                  <div className="factor-card-icon-badge-group">
                    <div className="factor-card-icon-wrap">
                      {factor.icon}
                    </div>
                    <span className="factor-badge-pill">{factor.badge}</span>
                  </div>
                  <span className="factor-spec-tag">{factor.spec}</span>
                </div>

                <div className="factor-card-body">
                  <h3 className="factor-compact-title">{factor.title}</h3>
                  <p className="factor-compact-summary">{factor.summary}</p>
                </div>

                {factor.chips && (
                  <div className="factor-chips-row">
                    {factor.chips.map((chip, cIdx) => (
                      <span key={cIdx} className="factor-chip-item">{chip}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07. Frequently Asked Questions ── */}
      <section className="service-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Bathroom Renovation FAQs</h2>
            <p>
              Clear guidance regarding plumbing relocations, AS 3740 waterproofing, spatial expansion techniques, and timelines.
            </p>
          </div>

          <div className="faqs-wrapper">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 08. Luxury Consultation CTA Banner ── */}
      <section className="service-section" style={{ paddingTop: 0 }}>
        <div className="service-container">
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Ready to Design Your Dream Bathroom?</h3>
              <p>
                Book a design consultation with our architectural team. We will analyze your layout, explore material options, and deliver an inspiring plan tailored to your budget.
              </p>
            </div>
            <div className="cta-banner-actions">
              <button 
                type="button" 
                className="service-primary-btn"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Design Consultation
                <ArrowRight size={15} />
              </button>
              <a href="tel:1300373374" className="service-phone-btn">
                <Phone size={14} />
                <span>1300 373 374</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Consultation Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
