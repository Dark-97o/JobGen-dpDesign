import { useState } from 'react';
import { 
  Compass, 
  Layers, 
  SunMedium, 
  Scale, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Plus, 
  Home,
  DraftingCompass,
  ChevronDown
} from 'lucide-react';
import { ContactModal } from './ContactModal';
import './ArchitecturalDesignPage.css';

interface ArchitecturalDesignPageProps {
  onNavigateHome: () => void;
  onNavigateService?: (service: string) => void;
}

interface ServiceOfferItem {
  num: string;
  title: string;
  subtitle?: string;
  category: string;
  desc: string;
  image: string;
}

interface AdditionalServiceItem {
  title: string;
  desc: string;
  image: string;
}

export function ArchitecturalDesignPage({ onNavigateHome }: ArchitecturalDesignPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(0);
  const [activeTechPillar, setActiveTechPillar] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const challenges = [
    {
      icon: <Compass size={18} />,
      title: "Vision to Buildable Reality",
      desc: "Translating your aesthetic vision into a council-compliant design that maximizes space, natural light, and budget."
    },
    {
      icon: <Layers size={18} />,
      title: "Inefficient Lifestyle Layouts",
      desc: "Reconfiguring fragmented rooms and poor circulation from the ground up for frictionless modern living."
    },
    {
      icon: <DraftingCompass size={18} />,
      title: "Complex Site Constraints",
      desc: "Overcoming strict setbacks, zoning LEPs, bushfire overlays, and steep topography to unlock land value."
    },
    {
      icon: <Scale size={18} />,
      title: "Budget & Planning Balance",
      desc: "Setting realistic structural grids early so build costs align with your architectural drawings."
    },
    {
      icon: <SunMedium size={18} />,
      title: "Passive Solar & Airflow",
      desc: "Harnessing orientation and cross-ventilation to deliver expansive, energy-efficient homes year-round."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Single-Firm Accountability",
      desc: "One registered team managing design, DA/CDC permits, engineering, and builder tendering end-to-end."
    }
  ];

  const servicesOffered: ServiceOfferItem[] = [
    {
      num: "01",
      title: "Architectural Designs",
      category: "RESIDENTIAL",
      desc: "Bespoke custom homes and high-end residential architecture designed from first principles, balancing site orientation with timeless aesthetics.",
      image: "/images/disciplines/architecture.jpg"
    },
    {
      num: "02",
      title: "Drafting Services",
      category: "DOCUMENTATION",
      desc: "Precise, statutory-compliant 2D and 3D architectural drafting packages, working drawings, and comprehensive elevations for builders and certifiers.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      num: "03",
      title: "Granny Flat Designs",
      category: "SECONDARY DWELLINGS",
      desc: "Council-compliant secondary dwellings and garden studios designed for family comfort, acoustic privacy, and high-yielding rental income.",
      image: "/images/disciplines/granny-flat.jpg"
    },
    {
      num: "04",
      title: "Kitchen Designs",
      category: "INTERIORS",
      desc: "Architecturally resolved culinary spaces featuring bespoke joinery, ergonomic prep triangles, luxury stone islands, and integrated butler pantries.",
      image: "/images/disciplines/kitchen.jpg"
    },
    {
      num: "05",
      title: "Kitchen Renovations",
      category: "RENOVATIONS",
      desc: "Transformative kitchen overhauls that remove load-bearing walls to merge cooking and living spaces with premium tactile finishes.",
      image: "/images/kitchen-architecture.jpg"
    },
    {
      num: "06",
      title: "BBQ Area Designs",
      category: "ALFRESCO",
      desc: "Seamless outdoor entertaining pavilions with built-in barbecues, stone benchtops, weatherproof storage, and integrated dining zones.",
      image: "/images/disciplines/bbq-area.jpg"
    },
    {
      num: "07",
      title: "Landscape Designs",
      category: "OUTDOOR",
      desc: "Site masterplanning and landscape architecture integrating native plantings, level changes, stone terraces, and indoor-outdoor continuity.",
      image: "/images/disciplines/landscape.jpg"
    },
    {
      num: "08",
      title: "Pergola Designs",
      category: "OUTDOOR STRUCTURES",
      desc: "Engineered timber, steel, and motorized louvred pergolas creating climate-responsive outdoor living rooms tailored to Sydney weather.",
      image: "/images/disciplines/pergola.jpg"
    },
    {
      num: "09",
      title: "Survey Plans",
      category: "SITE PLANNING",
      desc: "Cadastral boundary surveys, contour levels, identification reports, and spatial site models ensuring total council accuracy.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      num: "10",
      title: "Colour Consulting",
      category: "PALETTES",
      desc: "Curated architectural exterior and interior material palettes, textured renders, natural timber stains, and tonal cohesion.",
      image: "/images/disciplines/colour-consulting.jpg"
    },
    {
      num: "11",
      title: "Bathroom Renovations",
      category: "RENOVATIONS",
      desc: "Complete structural bathroom renewals featuring certified AS 3740 waterproofing, walk-in double showers, and spa-grade fittings.",
      image: "/images/disciplines/bathroom-renovations.jpg"
    },
    {
      num: "12",
      title: "Alterations and Additions",
      category: "EXTENSIONS",
      desc: "Second-storey additions, ground-floor pavilion extensions, and structural alterations breathing modern life into heritage or dated homes.",
      image: "/images/disciplines/alterations.jpg"
    },
    {
      num: "13",
      title: "Shop Fit-Out Designs",
      category: "COMMERCIAL",
      desc: "Boutique retail, hospitality, and corporate commercial interiors focused on customer journey, spatial efficiency, and BCA compliance.",
      image: "/images/disciplines/shop-fitout.jpg"
    },
    {
      num: "14",
      title: "Pool Designs",
      category: "AQUATIC",
      desc: "Luxury concrete inground pools, plunge spas, compliant frameless glass enclosures, and integrated poolside lounging terraces.",
      image: "/images/disciplines/pool.jpg"
    },
    {
      num: "15",
      title: "Bathroom Designs",
      category: "INTERIORS",
      desc: "Sanctuary-grade bathrooms planned with floating vanities, concealed LED mood niches, fluted glass, and natural stone textures.",
      image: "/images/disciplines/bathroom-designs.jpg"
    },
    {
      num: "16",
      title: "Interior Designs",
      category: "INTERIORS",
      desc: "Holistic interior architecture covering custom cabinetry, architectural lighting plans, ceiling details, and bespoke finishes.",
      image: "/images/disciplines/interior.jpg"
    },
    {
      num: "17",
      title: "Project Management",
      category: "DELIVERY",
      desc: "Full architectural oversight, builder tendering, consultant coordination, and on-site quality assurance from ground-break to handover.",
      image: "/images/disciplines/project-management.jpg"
    },
    {
      num: "18",
      title: "SDA Interior Design & New Build",
      subtitle: "(Specialist Disability Accommodation)",
      category: "NDIS SPECIALIST",
      desc: "High Physical Support and Fully Accessible homes engineered to stringent NDIS standards while maintaining high-end residential warmth.",
      image: "/images/disciplines/sda-sil.jpg"
    },
    {
      num: "19",
      title: "SIL Homes Designs",
      subtitle: "(Supported Independent Living)",
      category: "NDIS SPECIALIST",
      desc: "Dignified, functional living environments tailored for residents with support needs, featuring assistive tech and secure spatial planning.",
      image: "/images/disciplines/sda-sil.jpg"
    },
    {
      num: "20",
      title: "Medical Center Interior & Renovation",
      category: "HEALTHCARE",
      desc: "Compliant medical clinics, consulting suites, and dental practices optimized for patient privacy, sterile requirements, and acoustics.",
      image: "/images/disciplines/medical-center.jpg"
    },
    {
      num: "21",
      title: "Duplex Design & New Build",
      category: "DEVELOPMENT",
      desc: "Torrens-title dual occupancies and luxury duplexes engineered to maximize CDC approval speed, site yield, and long-term resale value.",
      image: "/images/duplex-rendering.jpg"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We listen to your lifestyle aspirations, functional requirements, and project budget, establishing a clear architectural brief."
    },
    {
      num: "02",
      title: "Site Review & Feasibility",
      desc: "Detailed analysis of your property: zoning controls, council LEP/DCP constraints, solar path, slope, stormwater, and infrastructure."
    },
    {
      num: "03",
      title: "Concept Design",
      desc: "Translating your brief into initial 2D floor plans, spatial volumes, and 3D architectural massing sketches to find the optimal direction."
    },
    {
      num: "04",
      title: "Design Development & 3D",
      desc: "Refining spatial configurations, selecting material palettes, generating photorealistic 3D renders, and coordinating structural concepts."
    },
    {
      num: "05",
      title: "DA / CDC Council Approvals",
      desc: "Preparing comprehensive architectural drawing sets, Statement of Environmental Effects, and coordinating consultants for seamless approval."
    },
    {
      num: "06",
      title: "Tender Documentation & Support",
      desc: "Producing precise construction drawings and schedules of finishes for competitive builder tendering and on-site architectural verification."
    }
  ];

  const additionalServices: AdditionalServiceItem[] = [
    {
      title: "Geotechnical reports",
      desc: "Soil classification, bore hole drilling, rock depth assessment, and foundation bearing capacity engineering.",
      image: "/images/geotechnical-inspection.jpg"
    },
    {
      title: "Detailed specification",
      desc: "Exhaustive schedules of architectural materials, building products, structural elements, and workmanship standards.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Investigation of the site and viability studies",
      desc: "Comprehensive zoning analysis, LEP/DCP planning controls, easement verification, and floor space ratio yield studies.",
      image: "/images/disciplines/landscape.jpg"
    },
    {
      title: "Put together and arrange structural detail",
      desc: "Detailed coordination of structural steel framing, suspended concrete slabs, footing engineering, and load-bearing walls.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Complete documents for councils and other authorities for certifications",
      desc: "Statutory drawing packages, Statement of Environmental Effects, Section 68 documentation, and certifier submission sets.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      title: "Unauthorised construction approvals",
      desc: "Retrospective Council DA/CDC approvals, Building Information Certificates (BIC), and engineering regularisation.",
      image: "/images/disciplines/alterations.jpg"
    },
    {
      title: "Building assessments",
      desc: "Detailed structural condition inspections, moisture penetration audits, and compliance reviews for existing properties.",
      image: "/images/geotechnical-inspection.jpg"
    },
    {
      title: "Builders cost estimates",
      desc: "Detailed bill of quantities, trade pricing schedules, and accurate preliminary construction cost projections.",
      image: "/images/disciplines/project-management.jpg"
    },
    {
      title: "3D models and photo montages",
      desc: "Photorealistic 3D architectural visualisations, material montages, and council photomontage submission views.",
      image: "/images/duplex-rendering.jpg"
    },
    {
      title: "Prepare initial designs in sketch form",
      desc: "Hand-drawn concept spatial diagrams, initial massing sketches, and creative exploratory floor layouts.",
      image: "/images/studio-sketch.jpg"
    },
    {
      title: "Arrange a certificate from an engineer",
      desc: "Procuring chartered structural and civil engineering compliance certificates (Form 15 / Design Compliance).",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Referrals and approvals for Sydney water “tap in.”",
      desc: "Sydney Water building over sewer assessments, Section 73 certificates, and Tap-in approvals coordination.",
      image: "/images/geotechnical-inspection.jpg"
    },
    {
      title: "Inspect proposed site",
      desc: "Physical on-site inspections evaluating topography, boundary trees, neighboring privacy sightlines, and access.",
      image: "/images/geotechnical-inspection.jpg"
    },
    {
      title: "General building consulting",
      desc: "Expert advisory across Building Code of Australia (BCA), National Construction Code (NCC), and heritage restrictions.",
      image: "/images/disciplines/architecture.jpg"
    },
    {
      title: "Prepare drawings for development",
      desc: "High-precision architectural plans, elevations, sections, and window schedules tailored for Development Applications.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      title: "Shadow diagrams",
      desc: "Solar access computer modeling showing winter solstice shadows for neighboring property amenity compliance.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Arrange and execute surveys",
      desc: "Cadastral boundary surveys, contour levels, identification reports, and spatial site models.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      title: "Provide plans of the proposed landscaping",
      desc: "Integrated landscape masterplanning, deep soil calculations, private open space design, and planting schedules.",
      image: "/images/disciplines/landscape.jpg"
    },
    {
      title: "Document and design proposals for stormwater",
      desc: "Hydraulic on-site detention (OSD) engineering, absorption trenches, rainwater harvesting, and drainage layouts.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Supply plans in draft form for bathroom, kitchen, cabinetry and laundry fit-outs",
      desc: "Bespoke internal joinery documentation: 1:20 cabinetry elevations, stone benchtop details, and electrical layouts.",
      image: "/images/disciplines/interior.jpg"
    },
    {
      title: "Emergency evacuation diagrams",
      desc: "AS 3745 compliant emergency evacuation floor diagrams and egress route documentation for commercial facilities.",
      image: "/images/technical-blueprints.jpg"
    },
    {
      title: "Compiling development and construction certificate applications",
      desc: "End-to-end compilation of all architectural and consultant documents ready for Private Certifier CC issue.",
      image: "/images/disciplines/survey-plans.jpg"
    },
    {
      title: "Dilapidation reports",
      desc: "Photographic pre-construction condition surveys of adjacent council assets and neighboring properties.",
      image: "/images/geotechnical-inspection.jpg"
    },
    {
      title: "Arrange BASIX reports",
      desc: "NSW statutory thermal comfort, energy conservation, and water sustainability BASIX certification modeling.",
      image: "/images/disciplines/pergola.jpg"
    },
    {
      title: "Supply a report of effects on the environment",
      desc: "Comprehensive Statement of Environmental Effects (SEE) addressing municipal LEP & DCP compliance objectives.",
      image: "/images/disciplines/landscape.jpg"
    },
    {
      title: "Draw up a document detailing all finishes",
      desc: "Complete interior and exterior specification schedules listing paint codes, tile codes, fittings, and joinery veneers.",
      image: "/images/disciplines/colour-consulting.jpg"
    },
    {
      title: "Project manage construction",
      desc: "On-site architectural contract administration, builder quality inspections, and milestone progress verifications.",
      image: "/images/disciplines/project-management.jpg"
    }
  ];

  const faqs = [
    {
      q: "What is the difference between an architect and a draftsperson?",
      a: "In NSW, an Architect is a legally protected title requiring a Master of Architecture degree, thousands of hours of logged practical experience, rigorous state board examinations, and registration with the NSW Architects Registration Board (NSW ARB #12156). Architects offer holistic spatial design, passive solar engineering, planning law mastery, and contract administration, whereas draftspeople typically draw up pre-determined plans without statutory design accountability."
    },
    {
      q: "How do I know whether my project requires a DA or can be approved via CDC?",
      a: "During our initial site feasibility review, we assess your property against the State Environmental Planning Policy (SEPP - Codes SEPP). If your site meets all standard criteria (setbacks, height, land size, bushfire level, and heritage status), your project may qualify for a Complying Development Certificate (CDC), which can be approved by a private certifier in as little as 20 days. If your project requires non-standard variations or is heritage-listed, we prepare a detailed Development Application (DA) for your local municipal council."
    },
    {
      q: "How does DP Design Studio manage project costs during the design phase?",
      a: "Cost control starts on day one. We design to your specified budget by pairing spatial efficiency with sensible structural grid systems. Rather than designing blindly, we produce preliminary scope documentation that can be cross-referenced with reputable builders and quantity surveyors early in the process, ensuring the design you fall in love with can actually be built within your financial target."
    },
    {
      q: "What documentation do you provide for builders to quote on?",
      a: "We deliver full construction documentation packages: 1:100 and 1:50 scaled architectural plans, elevations, building sections, window/door schedules, internal joinery details, electrical/lighting layouts, and comprehensive finishes schedules. This exhaustive detail prevents builder guesswork and eliminates costly on-site variations."
    },
    {
      q: "Can you handle complex sloping sites or bushfire-prone land?",
      a: "Yes. Many of our most successful Sydney projects are set on steep topography, within Bushfire Attack Level (BAL-29 to BAL-FZ) zones, or adjacent to sensitive ecological reserves. We work alongside geotechnical and bushfire consultants to turn site challenges into dramatic, stepped architectural features that maximize panoramic vistas."
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
            poster="/images/hero-facade.jpg"
          >
            <source src="/page.mp4" type="video/mp4" />
          </video>
          {/* Transparent on right side so video shows clearly */}
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
            <span className="breadcrumb-current" style={{ color: 'var(--gold-light)' }}>Architectural Design</span>
          </nav>

          <h1 className="service-hero-title">
            Architectural Design <br />
            <span className="gold-accent">Shaped For Sydney Living</span>
          </h1>

          <p className="service-hero-lead">
            Bespoke architectural solutions for new homes, transformative renovations, duplexes, and extensions. We combine spatial elegance with rigorous planning approval expertise across Greater Sydney.
          </p>

          <div className="service-hero-actions">
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
      </section>

      {/* ── Metrics in a sleek thick solid black band ── */}
      <div className="service-credentials-black-band">
        <div className="service-credentials-inner">
          <div className="service-cred-item">
            <span className="service-cred-num">100%</span>
            <span className="service-cred-label">Registered Architects</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">15+</span>
            <span className="service-cred-label">Years Sydney Experience</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">DA / CDC</span>
            <span className="service-cred-label">End-to-End Approvals</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">5.0 ★</span>
            <span className="service-cred-label">Verified Client Reviews</span>
          </div>
        </div>
      </div>

      {/* ── 01. Architectural Challenges We Overcome (Compact cards + 20% right image + dpabout bg) ── */}
      <section className="service-section challenges-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Architectural Challenges We Overcome</h2>
            <p>
              Every home project starts with unique constraints. We bring clarity and certainty to complex planning laws, difficult sites, and lifestyle demands.
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
                  src="/images/disciplines/architecture.jpg" 
                  alt="Architectural Challenge Resolution" 
                  className="challenges-side-img" 
                  loading="lazy" 
                />
                <div className="challenges-side-badge">
                  <span className="side-badge-lead">PRECISION</span>
                  <span className="side-badge-sub">Site &amp; Council Resolved</span>
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
              Comprehensive architectural typologies, custom dwellings, outdoor living spaces, and commercial fit-outs engineered for Sydney homes.
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

                  {/* Expand Content with Description & Enquire Button (Categories removed) */}
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

      {/* ── 03. 6-Step Methodology (Reverted to 3x2 Grid with Poking Numbers) ── */}
      <section className="service-section process-section">
        <div className="service-container">
          <div className="section-head">
            <h2>How Our Architectural Process Works</h2>
            <p>
              A disciplined, transparent journey from initial concept sketches to council-approved, builder-ready construction sets.
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

      {/* ── 04. Additional Services (Horizontal Pillars) ── */}
      <section className="service-section dark technical-pillars-section">
        <div className="service-container pillars-fullwidth-container">
          <div className="section-head">
            <h2>Additional Services</h2>
            <p>
              Beyond core architectural design, our studio provides comprehensive technical, statutory, environmental, and site consulting across Greater Sydney.
            </p>
          </div>

          {/* Independent 2-column masonry layout so expanding a card doesn't stretch or expand the card next to it */}
          <div className="horizontal-pillars-container">
            <div className="horizontal-pillars-col">
              {additionalServices
                .map((service, index) => ({ service, index }))
                .filter(({ index }) => index % 2 === 0)
                .map(({ service, index }) => {
                  const isActive = activeTechPillar === index;
                  return (
                    <div
                      key={index}
                      className={`horizontal-pillar-item ${isActive ? 'is-expanded' : ''}`}
                      onMouseEnter={() => setActiveTechPillar(index)}
                      onClick={() => setActiveTechPillar(isActive ? null : index)}
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
              {additionalServices
                .map((service, index) => ({ service, index }))
                .filter(({ index }) => index % 2 !== 0)
                .map(({ service, index }) => {
                  const isActive = activeTechPillar === index;
                  return (
                    <div
                      key={index}
                      className={`horizontal-pillar-item ${isActive ? 'is-expanded' : ''}`}
                      onMouseEnter={() => setActiveTechPillar(index)}
                      onClick={() => setActiveTechPillar(isActive ? null : index)}
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

      {/* ── 05. Frequently Asked Questions ── */}
      <section className="service-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Architectural Design FAQs</h2>
            <p>
              Clear answers regarding NSW approvals, architect registration, budget control, and project timelines.
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
                    <Plus size={18} className="faq-icon" />
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

      {/* ── 06. Luxury Consultation CTA Banner ── */}
      <section className="service-section" style={{ paddingTop: 0 }}>
        <div className="service-container">
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Ready to Bring Your Architectural Vision to Life?</h3>
              <p>
                Speak directly with registered architect Prasad Perera (NSW ARB #12156). We review your site constraints and walk through what is achievable for your lifestyle and budget.
              </p>
            </div>
            <div className="cta-banner-actions">
              <button 
                type="button" 
                className="service-primary-btn"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Your Consultation
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

export default ArchitecturalDesignPage;
