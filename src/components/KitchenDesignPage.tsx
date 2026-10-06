import { useState } from 'react';
import { 
  UtensilsCrossed, 
  Box, 
  Maximize2, 
  Scale, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Home, 
  ChevronDown
} from 'lucide-react';
import { ContactModal } from './ContactModal';
import './KitchenDesignPage.css';

interface KitchenDesignPageProps {
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

export function KitchenDesignPage({ onNavigateHome }: KitchenDesignPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const challenges = [
    {
      icon: <UtensilsCrossed size={18} />,
      title: "Cramped Prep & Awkward Walkways",
      desc: "Appliances colliding with cabinet doors and congested cooking zones make daily prep frustrating. We reconfigure the culinary work triangle for frictionless ergonomics."
    },
    {
      icon: <Box size={18} />,
      title: "Storage Needs Without Losing Space",
      desc: "Full-height pantries, deep servo-drive drawers, concealed appliance garages, and corner LeMans pull-outs so every centimeter works without feeling boxed in."
    },
    {
      icon: <Maximize2 size={18} />,
      title: "Small or Awkward Footprints",
      desc: "Odd angles, structural columns, and low ceilings require architectural ingenuity. We utilize vertical cabinetry, integrated lighting, and continuous joinery to visually expand space."
    },
    {
      icon: <Scale size={18} />,
      title: "Budget & Premium Material Balance",
      desc: "We establish clear cost priorities on stone, hardware, and cabinetry early, guiding smart value-engineering so you never overpay for high-impact culinary luxury."
    },
    {
      icon: <Sparkles size={18} />,
      title: "Seamless Flow With Whole Home",
      desc: "Open-plan sightlines, natural daylighting, acoustic management, and indoor-outdoor alfresco connections ensure your kitchen anchors the entire living floor."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Single Team From Concept to Handover",
      desc: "No juggling cabinetmakers, stonemasons, plumbers, and electricians. We coordinate architectural documentation, statutory compliance, and trade execution under one roof."
    }
  ];

  const servicesOffered: ServiceOfferItem[] = [
    {
      num: "01",
      title: "One Wall Kitchen Design",
      subtitle: "Linear Spatial Efficiency",
      desc: "All cabinetry, integrated appliances, and sinks aligned along a single architectural feature wall for pristine spatial clarity and compact urban elegance.",
      image: "/images/kitchen/one-wall-kitchen.jpg"
    },
    {
      num: "02",
      title: "Gallery Kitchen Design",
      subtitle: "Culinary Workflow Master",
      desc: "Two parallel runs of cabinetry creating an exceptionally efficient, high-performance cooking corridor favored by professional chefs and narrow floor plates.",
      image: "/images/kitchen/gallery-kitchen.jpg"
    },
    {
      num: "03",
      title: "L-Shaped Kitchen Design",
      subtitle: "Open-Plan Flexibility",
      desc: "Two perpendicular walls creating a naturally open, fluid cooking zone that integrates effortlessly with adjoining dining or living spaces.",
      image: "/images/kitchen/l-shaped-kitchen.jpg"
    },
    {
      num: "04",
      title: "U-Shaped Kitchen Design",
      subtitle: "Maximum Bench Space & Storage",
      desc: "Surrounds the cook on three sides with continuous bench space and cabinetry, providing unparalleled countertop surface and storage capacity.",
      image: "/images/kitchen/u-shaped-kitchen.jpg"
    },
    {
      num: "05",
      title: "Island Kitchen Design",
      subtitle: "Entertainment & Social Hub",
      desc: "The quintessential modern luxury layout. Features a dramatic central monolithic island bench acting as a culinary prep zone, informal dining bar, and family gathering point.",
      image: "/images/kitchen/island-kitchen.jpg"
    },
    {
      num: "06",
      title: "Peninsula Kitchen Design",
      subtitle: "Connected Island Solution",
      desc: "An island connected directly to a returning cabinetry run, delivering all the social perks of an island without demanding massive floor clearances.",
      image: "/images/kitchen/peninsula-kitchen.jpg"
    },
    {
      num: "07",
      title: "Modern Luxury Kitchen Design",
      subtitle: "Monolithic Stone & Architectural Finishes",
      desc: "Monolithic natural stone or engineered porcelain slab waterfall islands, handleless touch-to-open dark timber joinery, integrated architectural shadowlines, and concealed induction technology.",
      image: "/images/kitchen/modern-luxury-kitchen.jpg"
    },
    {
      num: "08",
      title: "Contemporary Kitchen Design",
      subtitle: "Warm Tactile Textures",
      desc: "Rich fluted timber veneers, honed limestone or quartz worktops, brushed gunmetal tapware, and warm ambient backlighting that creates an inviting, tactile atmosphere.",
      image: "/images/kitchen/contemporary-kitchen.jpg"
    },
    {
      num: "09",
      title: "Victorian Kitchen Design",
      subtitle: "Heritage & Shaker Character",
      desc: "Timeless recessed panel cabinetry, ceramic undermount butler sinks, hand-cast brass hardware, textured splashbacks, and classic architectural moldings reinterpreted for modern Sydney homes.",
      image: "/images/kitchen/victorian-kitchen.jpg"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We discuss how your family cooks, entertains, and lives, determining exact appliance requirements, storage goals, and aesthetic vision."
    },
    {
      num: "02",
      title: "Ergonomic Site Assessment",
      desc: "Laser site measurement of structural walls, plumbing rough-in locations, electrical load capacity, ceiling heights, and natural light sources."
    },
    {
      num: "03",
      title: "Spatial Concept & Flow",
      desc: "Developing optimal work triangle configurations, traffic clearances, and spatial connections between the kitchen and adjacent living areas."
    },
    {
      num: "04",
      title: "3D Documentation & Finishes",
      desc: "Full photorealistic 3D renders, internal joinery elevations, hardware schedules, stone selections, and comprehensive electrical/lighting layouts."
    },
    {
      num: "05",
      title: "Trade & Approvals Coordination",
      desc: "Managing structural wall removal engineering, council or strata approvals, and trade scheduling (cabinetry, plumbing, electrical, stonemasonry)."
    },
    {
      num: "06",
      title: "Installation & Handover",
      desc: "Precision cabinetry install, seamless stone countertop fabrication, appliance commissioning, and thorough quality inspection."
    }
  ];

  const faqs = [
    {
      q: "Can you remove a load-bearing wall to create an open-plan kitchen?",
      a: "Yes. As registered architectural practitioners, we coordinate certified structural engineering calculations, specify universal steel beams (UB/PFC), and manage council or private certifier approvals (DA/CDC) where required. We oversee the temporary propping and lintel installation to ensure zero structural risk to your home."
    },
    {
      q: "How long does a complete kitchen renovation take from start to finish?",
      a: "The design, 3D visualization, and material selection phase takes 2 to 4 weeks. Once trades commence on-site, a standard luxury kitchen installation takes 3 to 4 weeks. This includes demolition, plumbing and electrical rough-in, plastering, cabinetry installation, laser template for stone, stone fabrication (approx. 7–10 days), and final appliance commissioning."
    },
    {
      q: "What is the difference between natural marble, engineered quartz, and porcelain?",
      a: "Natural marble (Calacatta, Carrara) offers peerless organic beauty but requires periodic sealing against acid etching. Engineered quartz offers high durability and stain resistance. Sintered porcelain is 100% heat-proof, UV-stable, and scratch-proof, allowing boiling pots to be placed directly on the surface without trivets."
    },
    {
      q: "Do you supply and coordinate the kitchen appliances?",
      a: "Yes. We work directly with leading premium appliance distributors (Miele, Sub-Zero, Wolf, Gaggenau, Fisher & Paykel, Bora). We provide integrated cabinetry specifications ensuring millimetre-flush alignment, adequate ventilation paths, and electrical circuit allocations, while extending trade discount savings to our clients."
    },
    {
      q: "Can you handle kitchen renovations in Sydney apartment buildings with strata rules?",
      a: "Yes. We specialize in strata-compliant renovations across Sydney. We prepare complete architectural scope of works, acoustic underlay compliance, work-hours schedules, and contractor public liability packs required for Strata Committee approval and Section 108/110 by-law registrations."
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
            poster="/images/kitchen-architecture.jpg"
          >
            <source src="/page.mp4" type="video/mp4" />
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
            <span className="breadcrumb-current" style={{ color: 'var(--gold-light)' }}>Kitchen Design</span>
          </nav>

          <h1 className="service-hero-title">
            Kitchen Design & Renovation <br />
            <span className="gold-accent">Crafted For The Way You Live</span>
          </h1>

          <p className="service-hero-lead">
            From spatial layout and bespoke joinery to luxury stone selection, structural wall removal, and turnkey trade coordination. We design kitchens that perform as exquisitely as they look across Greater Sydney.
          </p>

          <div className="service-hero-actions">
            <button 
              type="button" 
              className="service-primary-btn"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book Kitchen Design Consult
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
            <span className="service-cred-label">Architectural Joinery</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">10-Year</span>
            <span className="service-cred-label">Hardware Warranty</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">3D Renders</span>
            <span className="service-cred-label">Photo-Real Visuals</span>
          </div>
          <div className="service-cred-divider" />
          <div className="service-cred-item">
            <span className="service-cred-num">5.0 ★</span>
            <span className="service-cred-label">Verified Client Reviews</span>
          </div>
        </div>
      </div>

      {/* ── 01. Kitchen Challenges We Overcome (Compact cards + 20% right image + dpabout bg) ── */}
      <section className="service-section challenges-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Kitchen Challenges We Overcome</h2>
            <p>
              A great kitchen is engineered from the inside out. We address real everyday pain points to unlock optimal flow, storage, and natural light.
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
                  src="/images/kitchen-architecture.jpg" 
                  alt="Kitchen Layout Resolution" 
                  className="challenges-side-img" 
                  loading="lazy" 
                />
                <div className="challenges-side-badge">
                  <span className="side-badge-lead">PRECISION</span>
                  <span className="side-badge-sub">Culinary Workflows Resolved</span>
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
              Bespoke culinary typologies, custom cabinetry suites, butler's pantries, and outdoor entertainment kitchens engineered for Sydney homes.
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
            <h2>How Our Kitchen Design Process Works</h2>
            <p>
              A disciplined, transparent progression eliminating stress and ensuring complete accountability from concept through installation.
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

      {/* ── 04. Frequently Asked Questions ── */}
      <section className="service-section">
        <div className="service-container">
          <div className="section-head">
            <h2>Kitchen Renovation FAQs</h2>
            <p>
              Practical answers to frequent questions about load-bearing walls, stone surfaces, strata permissions, and appliance planning.
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

      {/* ── 06. Luxury Consultation CTA Banner ── */}
      <section className="service-section" style={{ paddingTop: 0 }}>
        <div className="service-container">
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Ready to Design Your Dream Kitchen?</h3>
              <p>
                Book a design consultation with our architectural team. We will analyze your layout, explore bespoke joinery and stone options, and deliver an inspiring plan tailored to your budget.
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
