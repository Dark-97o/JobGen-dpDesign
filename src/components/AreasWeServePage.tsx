import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Plus, 
  Home, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { ContactModal } from './ContactModal';
import './AreasWeServePage.css';

interface AreasWeServePageProps {
  onNavigateHome: () => void;
}

export function AreasWeServePage({ onNavigateHome }: AreasWeServePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const locations = [
    {
      id: 'parramatta',
      name: 'Parramatta',
      council: 'City of Parramatta Council // Parramatta LEP & DCP',
      badge: 'Headquarters & Metropolitan Hub',
      image: '/images/parramatta.jpg',
      editorial: 'Parramatta features a rich architectural mix ranging from Federation and Victorian cottages in heritage conservation zones to tight inner-city lots and emerging medium-density precincts. Our registered architects navigate Parramatta LEP controls, tree preservation orders, and solar access envelopes to maximize every square meter.',
      projects: [
        'Heritage Home Renovations & Rear Living Pavilions',
        'Torrens-Title Duplexes & Dual Occupancy Developments',
        'Complying Development (CDC) Fast-Track Approvals',
        'Passive Solar Orientation & Cross-Ventilation Planning',
        'Boutique Commercial, Retail & Medical Fit-Outs',
        'Specialist Disability Accommodation (SDA / SIL Living)'
      ],
      suburbs: [
        'Parramatta', 'North Parramatta', 'Westmead', 'Harris Park', 
        'Rosehill', 'Rydalmere', 'Ermington', 'Dundas', 
        'Oatlands', 'Toongabbie', 'Telopea', 'Granville'
      ],
      callout: 'Strict streetscape and conservation controls apply in North Parramatta and Harris Park. We conduct pre-design site audits to ensure your design satisfies council heritage officers.'
    },
    {
      id: 'box-hill',
      name: 'Box Hill',
      council: 'The Hills Shire Council // North West Growth Area',
      badge: 'Masterplanned Greenfield Growth',
      image: '/images/box-hill.jpg',
      editorial: 'Unlike established suburbs constrained by heritage overlays, Box Hill architecture is centered around maximizing building envelopes, navigating developer estate covenants, managing zero-lot-line boundary walls, and creating seamless indoor-outdoor family entertaining spaces.',
      projects: [
        'Custom Architectural New Homes on Vacant Land',
        'Whole-Home Spatial Reconfigurations & Extensions',
        'Integrated Inground Pools & Alfresco Living Pavilions',
        'Secondary Dwellings & Dual-Income Granny Flats',
        'Estate Covenant & Developer Guideline Compliance',
        'Energy-Efficient BASIX Thermal Envelope Engineering'
      ],
      suburbs: [
        'Box Hill', 'The Gables', 'Nelson', 'Maraylya', 
        'Rouse Hill', 'Oakville', 'Scheyville', 'Vineyard', 'Riverstone'
      ],
      callout: 'Estate covenants often dictate roof pitch, facade materials, and driveway finishes. We cross-reference your Contract of Sale before sketch design to avoid certifier delays.'
    },
    {
      id: 'castle-hill',
      name: 'Castle Hill & The Hills District',
      council: 'The Hills Shire Council // Hills LEP 2019',
      badge: 'Established Family Estates & Bushland Environs',
      image: '/images/castle-hill.jpg',
      editorial: 'With generous blocks averaging 700m² to over 1,200m², Castle Hill projects frequently encounter natural topography falls, sandstone shelves, and bushland edge interfaces. We turn challenging slope contours into dramatic stepped pavilions while resolving Bushfire Attack Level (BAL) requirements.',
      projects: [
        'Knockdown Rebuilds & Bespoke Family Estates',
        'Second-Storey Additions Preserving Ground Gardens',
        'Sloping Site Architecture & Stepped Living Levels',
        'Bushfire Attack Level (BAL-29 to BAL-FZ) Compliance',
        'Resort-Style Pools, Cabanas & Landscaped Alfresco',
        'The Hills Shire Council DA & Private Certifier CDC Sets'
      ],
      suburbs: [
        'Castle Hill', 'Baulkham Hills', 'Kellyville', 'Bella Vista', 
        'Cherrybrook', 'West Pennant Hills', 'Glenhaven', 'Dural'
      ],
      callout: 'The Hills Shire Council enforces rigorous tree preservation orders and stormwater absorption rates. Our integrated survey and hydraulic design prevent costly council RFIs.'
    }
  ];

  const reasons = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Fully Licensed Architectural Practice"
    },
    {
      icon: <Layers size={20} />,
      title: "Architecture & Interiors Under One Roof"
    },
    {
      icon: <Building2 size={20} />,
      title: "Accurate Construction Pricing & Feasibility"
    },
    {
      icon: <FileText size={20} />,
      title: "End-to-End Council DA & CDC Management"
    }
  ];

  const faqs = [
    {
      q: "Do you provide architectural design services across all of Greater Western Sydney and The Hills?",
      a: "Yes. From our central studio in Parramatta, we service clients across the City of Parramatta, The Hills Shire (including Castle Hill and Box Hill), Cumberland, Blacktown, and Hornsby. Our team conducts regular on-site feasibility reviews across all these local government areas."
    },
    {
      q: "Can you help me decide between a Development Application (DA) and a Complying Development Certificate (CDC)?",
      a: "Yes. During our initial site assessment, we review your property's Section 10.7 planning certificate against the State Environmental Planning Policy (Codes SEPP) and the local council's LEP. If your site satisfies setback, height, and site coverage criteria, CDC provides a fast-track approval through a private certifier in as little as 20 days. If your project requires variations, sits on bushfire-prone land, or has heritage overlays, we prepare a full DA for Council."
    },
    {
      q: "How do you handle estate design guidelines and covenants in Box Hill?",
      a: "In masterplanned communities like Box Hill and The Gables, private developers often place specific covenants on land titles regulating external materials, driveway colors, and garage setbacks. We review your Contract of Sale and developer design guidelines prior to drawing initial concepts, ensuring your design achieves estate approval without delays."
    },
    {
      q: "How do you approach knockdown rebuilds vs second-storey additions in Castle Hill?",
      a: "We evaluate the structural integrity of your existing home, its foundation, and its orientation on the block. If the original floor plan requires total re-engineering or ceiling heights are low, a knockdown rebuild often delivers better value and energy performance. If the ground floor has strong structural bones and a functional layout, a second-storey addition allows you to double your living area while preserving your garden."
    },
    {
      q: "What challenges do sloping and bushfire-prone blocks present in The Hills District?",
      a: "Sloping land requires stepped floor plates to minimize excavation and retain natural ground contours, while bushfire-prone land requires compliance with AS 3959 (Construction of buildings in bushfire-prone areas). We work closely with geotechnical engineers and bushfire consultants to specify compliant fire-rated glazing, non-combustible cladding, and ember-shielded subfloors that keep your family safe."
    },
    {
      q: "Can DP Design Studio manage both design and construction?",
      a: "Yes. Through our sister construction arm, Daylo Build Pty Ltd (Lic #492271C), we can manage your project from initial architectural concept all the way through construction and final occupation certificate. This single-point accountability eliminates miscommunication between designer and builder."
    }
  ];

  return (
    <div className="areas-page">
      {/* ── Hero Section ── */}
      <section className="areas-hero">
        <div className="areas-hero-bg-media">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="areas-hero-video"
            poster="/images/hero-facade.jpg"
          >
            <source src="/house.mp4" type="video/mp4" />
          </video>
          <div className="areas-hero-scrim" />
        </div>

        <div className="areas-hero-container">
          {/* Breadcrumb Navigation */}
          <nav className="areas-breadcrumbs" aria-label="Breadcrumb">
            <button 
              type="button" 
              className="breadcrumb-link" 
              onClick={onNavigateHome}
            >
              <Home size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4 }} />
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" style={{ color: 'var(--gold-light)' }}>Areas We Serve</span>
          </nav>

          <h1 className="areas-hero-title">
            Areas We Serve Across Sydney <br />
            <span className="gold-accent areas-hero-locations">Parramatta • Box Hill • Castle Hill</span>
          </h1>

          <div className="areas-hero-actions">
            <button 
              type="button" 
              className="areas-primary-btn"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book Location Consultation
              <ArrowRight size={15} />
            </button>

            <a href="tel:1300373374" className="areas-phone-btn">
              <Phone size={14} />
              <span>1300 373 374</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Black Statutory & Credentials Band ── */}
      <div className="areas-credentials-black-band">
        <div className="areas-credentials-container">
          <div className="areas-cred-item">
            <span className="areas-cred-num">3 Hubs</span>
            <span className="areas-cred-label">Parramatta • Box Hill • Hills</span>
          </div>

          <div className="areas-cred-sep" />

          <div className="areas-cred-item">
            <span className="areas-cred-num">100%</span>
            <span className="areas-cred-label">DA &amp; CDC Approvals</span>
          </div>

          <div className="areas-cred-sep" />

          <div className="areas-cred-item">
            <span className="areas-cred-num">NSW ARB</span>
            <span className="areas-cred-label">Registered Practice #12156</span>
          </div>

          <div className="areas-cred-sep" />

          <div className="areas-cred-item">
            <span className="areas-cred-num">Design &amp; Build</span>
            <span className="areas-cred-label">With Daylo Build Pty Ltd</span>
          </div>
        </div>
      </div>

      {/* ── Header Title Only: Tailored Architectural Solutions ── */}
      <section className="areas-suburb-section-head-wrap">
        <div className="areas-container">
          <div className="areas-suburb-head">
            <h2>Tailored Architectural Solutions</h2>
          </div>
        </div>
      </section>

      {/* ── 01. Alternating Locations Layout (Full-Width Attached Boxes with 45° Angle Separation) ── */}
      <div className="locations-alternating-wrapper">
        {locations.map((loc, index) => {
          // Parramatta (index 0): Left text (55%) attached to screen left, Right image (45%)
          // Box Hill (index 1): Left image (45%), Right text (55%) attached to screen right
          // Castle Hill (index 2): Left text (55%) attached to screen left, Right image (45%)
          const isTextLeft = index % 2 === 0;

          return (
            <div 
              key={loc.id} 
              id={loc.id}
              className={`location-band-row ${isTextLeft ? 'layout-text-left' : 'layout-text-right'}`}
            >
              {isTextLeft ? (
                <>
                  {/* Left: Text Box attached to left of screen (55%) */}
                  <div className="location-textbox attached-left">
                    <div className="location-textbox-content">
                      <h3 className="location-title">{loc.name}</h3>
                      <p className="location-editorial-text">{loc.editorial}</p>

                      <h4 className="location-subtitle">Key Projects in {loc.name}</h4>
                      <div className="location-projects-grid">
                        {loc.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="location-project-item">
                            <CheckCircle2 size={15} />
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>

                      <div className="location-suburbs-section">
                        <h5 className="location-suburbs-title">
                          <MapPin size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4 }} />
                          Suburbs Serviced
                        </h5>
                        <div className="location-suburbs-tags">
                          {loc.suburbs.map((sub, sIdx) => (
                            <span key={sIdx} className="suburb-tag">{sub}</span>
                          ))}
                        </div>
                      </div>

                      <div className="location-planning-callout">
                        <strong>Planning Note:</strong> {loc.callout}
                      </div>
                    </div>
                  </div>

                  {/* Right: Location Image (45%) */}
                  <div className="location-imgbox slant-img-left">
                    <img src={loc.image} alt={loc.name} className="location-img-cover" loading="lazy" />
                    <div className="location-img-scrim to-left" />
                  </div>
                </>
              ) : (
                <>
                  {/* Left: Location Image (45%) */}
                  <div className="location-imgbox slant-img-right">
                    <img src={loc.image} alt={loc.name} className="location-img-cover" loading="lazy" />
                    <div className="location-img-scrim to-right" />
                  </div>

                  {/* Right: Text Box attached to right of screen (55%) */}
                  <div className="location-textbox attached-right">
                    <div className="location-textbox-content">
                      <h3 className="location-title">{loc.name}</h3>
                      <p className="location-editorial-text">{loc.editorial}</p>

                      <h4 className="location-subtitle">Key Projects in {loc.name}</h4>
                      <div className="location-projects-grid">
                        {loc.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="location-project-item">
                            <CheckCircle2 size={15} />
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>

                      <div className="location-suburbs-section">
                        <h5 className="location-suburbs-title">
                          <MapPin size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4 }} />
                          Suburbs Serviced
                        </h5>
                        <div className="location-suburbs-tags">
                          {loc.suburbs.map((sub, sIdx) => (
                            <span key={sIdx} className="suburb-tag">{sub}</span>
                          ))}
                        </div>
                      </div>

                      <div className="location-planning-callout">
                        <strong>Planning Note:</strong> {loc.callout}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* ── 02. Regional Council Comparison Matrix (Dark Section with Blueprint Background) ── */}
      <section className="areas-section dark planning-matrix-section" id="council-matrix">
        <div className="areas-container">
          <div className="areas-head">
            <h2>Regional Council Planning Matrix</h2>
            <p>
              A snapshot of local planning frameworks, approval pathways, and key architectural considerations across our primary catchments.
            </p>
          </div>

          <div className="matrix-table-wrap">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Catchment</th>
                  <th>Local Council (LGA)</th>
                  <th>Primary Zoning Profile</th>
                  <th>Critical Site Factors</th>
                  <th>Approval Feasibility</th>
                  <th>Signature Typology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="matrix-region-name">Parramatta</span></td>
                  <td>City of Parramatta Council</td>
                  <td>R2 Low Density, R3 Medium, R4 High</td>
                  <td>Heritage conservation, streetscape rhythm, tree canopy</td>
                  <td>Fast-track CDC on compliant lots; DA for heritage zones</td>
                  <td>Torrens-Title Duplexes &amp; Contemporary Pavilions</td>
                </tr>
                <tr>
                  <td><span className="matrix-region-name">Box Hill</span></td>
                  <td>The Hills Shire (Growth Area)</td>
                  <td>R2 Low Density, R3 Medium Density</td>
                  <td>Developer estate covenants, zero-lot walls, front setbacks</td>
                  <td>CDC highly viable on newly registered clean allotments</td>
                  <td>Custom Greenfield Residences &amp; Secondary Dwellings</td>
                </tr>
                <tr>
                  <td><span className="matrix-region-name">Castle Hill</span></td>
                  <td>The Hills Shire Council</td>
                  <td>R2 Low Density Residential</td>
                  <td>Steep slope contours, rock shelves, Bushfire (BAL) overlays</td>
                  <td>CDC where BAL ≤ 29; Council DA for sloping/bushland lots</td>
                  <td>Knockdown Rebuilds &amp; Multi-Storey Stepped Estates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 03. Why Choose DP Design Studio (With dpabout background & compact cards) ── */}
      <section className="areas-section why-dp-suburb-section" id="why-choose-dp">
        <div className="areas-container">
          <div className="areas-head">
            <h2>Why Clients Choose dp Design Studio</h2>
            <p>
              We bridge the traditional divide between visionary architecture and realistic on-site building execution.
            </p>
          </div>

          <div className="reasons-grid compact-reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card compact-reason-card">
                <div className="reason-icon-wrap">
                  {r.icon}
                </div>
                <h3 className="reason-title">{r.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-Width Thick Architectural Separator ── */}
      <div className="why-choose-dp-full-separator" aria-hidden="true" />

      {/* ── 04. Regional FAQs Accordion ── */}
      <section className="areas-section areas-faq-section" style={{ paddingTop: '80px' }}>
        <div className="areas-container">
          <div className="areas-head">
            <h2>Areas We Serve: Frequently Asked Questions</h2>
            <p>
              Straightforward answers regarding Western Sydney and The Hills council approvals, building guidelines, and project management.
            </p>
          </div>

          <div className="areas-faqs-wrapper">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`areas-faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="areas-faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="areas-faq-q">{faq.q}</span>
                    <Plus size={18} className="areas-faq-icon" />
                  </button>
                  {isOpen && (
                    <div className="areas-faq-ans">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05. Consultation CTA Banner ── */}
      <section className="areas-section" style={{ paddingTop: 0 }}>
        <div className="areas-container">
          <div className="areas-cta-banner">
            <div className="areas-cta-banner-text">
              <h3>Planning a Project in Parramatta, Box Hill or Castle Hill?</h3>
              <p>
                Schedule an obligation-free feasibility discussion with registered architect Prasad Perera. We review your land survey, zoning controls, and guide you on what is possible for your lifestyle and budget.
              </p>
            </div>
            <div className="areas-cta-banner-actions">
              <button 
                type="button" 
                className="areas-primary-btn"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Feasibility Call
                <ArrowRight size={15} />
              </button>
              <a href="tel:1300373374" className="areas-phone-btn">
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
