import './DesignsMasterList.css';

export function DesignsMasterList() {
  const services = [
    { title: 'Architectural Designs', tag: 'CORE DISCIPLINE', desc: 'Custom residential single & double storey luxury homes, bespoke pavilions, and modern extensions.' },
    { title: 'Granny Flat Designs', tag: 'SECONDARY DWELLING', desc: 'Compliant secondary residences designed for independent family living, rental return, or guest pavilions.' },
    { title: 'BBQ Area Designs', tag: 'OUTDOOR LIVING', desc: 'Architecturally integrated alfresco dining pavilions, outdoor kitchens, pizza ovens, and entertaining terraces.' },
    { title: 'Colour Consulting', tag: 'MATERIAL PALETTES', desc: 'Sophisticated interior and exterior material selection, stone textures, render finishes, and tonal palettes.' },
    { title: 'Landscape Designs', tag: 'ENVIRONMENTAL FLOW', desc: 'Harmonious exterior masterplanning, hardscaping, boundary planting, courtyard gardens, and retaining walls.' },
    { title: 'Kitchen Designs', tag: 'CULINARY HUB', desc: '3D spatial layout planning, bespoke cabinetry, stone waterfall islands, and ergonomic task triangulation.' },
    { title: 'Kitchen Renovations', tag: 'TURNKEY EXECUTION', desc: 'Full demolition, trade management, custom joinery, electrical, plumbing, splashbacks, and handover.' },
    { title: 'Bathroom Renovations', tag: 'SPA SANCTUARY', desc: 'Luxury transformations, AS 3740 waterproofing, curbless walk-in showers, freestanding tubs, and LED lighting.' },
    { title: 'Bathroom Designs', tag: 'SPATIAL HARMONY', desc: 'Custom vanities, spatial reconfiguration, door/wall relocation, and multi-tier ambient illumination.' },
    { title: 'Survey Plans', tag: 'SITE INTELLIGENCE', desc: 'Cadastral boundary surveys, contour details, levels, easements, tree location, and site constraint modeling.' },
    { title: 'Pergola Designs', tag: 'ARCHITECTURAL SHADE', desc: 'Engineered timber, steel, and louvred pergola structures extending living areas into shaded outdoor spaces.' },
    { title: 'Shop Fit-Out Designs', tag: 'COMMERCIAL RETAIL', desc: 'Boutique retail shopfronts, brand spaces, customer journey layouts, display joinery, and council compliance.' },
    { title: 'Alterations & Additions', tag: 'HOME EXTENSIONS', desc: 'Second-storey additions, ground-floor rear extensions, and structural wall removals to unlock space.' },
    { title: 'Pool Designs', tag: 'AQUATIC LIVING', desc: 'Luxury inground swimming pools, plunge pools, pool cabanas, compliance fencing, and water features.' },
    { title: 'Interior Designs', tag: 'TACTILE LUXURY', desc: 'Holistic interior environments, lighting plans, bespoke built-in joinery, finishes, and spatial ambiance.' },
    { title: 'Project Management', tag: 'DIRECTOR OVERSIGHT', desc: 'Turnkey contract administration, trade supervision, budget controls, and quality assurance to lockup.' },
    { title: 'SDA & NDIS Housing', tag: 'SPECIALIST LIVING', desc: 'High Physical Support, Robust, and Fully Accessible homes compliant with NDIS Design Standards.' },
    { title: 'SIL Homes Designs', tag: 'SUPPORTED LIVING', desc: 'Supported Independent Living residential facilities crafted for dignity, accessibility, and comfort.' },
    { title: 'Medical Center Interiors', tag: 'HEALTHCARE DESIGN', desc: 'General practice clinics, dental surgeries, allied health suites, acoustics, infection control, and DDA access.' },
    { title: 'Duplex Design & Builds', tag: 'DUAL OCCUPANCY', desc: 'Attached and detached dual occupancy developments maximizing land yield, solar access, and capital value.' }
  ];

  return (
    <section className="designs-master-section architect-grid-bg section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="designs-head">
          <div>
            <span className="arch-tag">COMPREHENSIVE CAPABILITIES INDEX</span>
            <h2 className="designs-title">
              Our Designs & Specialized Services
            </h2>
            <p className="designs-subtitle">
              Our architectural practice covers every facet of residential, commercial, and interior transformation.
            </p>
          </div>

          <div className="designs-callout">
            <span className="callout-lead">NEED A CUSTOM COMMISSION?</span>
            <p className="callout-text">Call Prasad Perera directly on <strong>1300 373 374</strong></p>
          </div>
        </div>

        {/* 20-Item Architectural Matrix */}
        <div className="services-matrix-grid">
          {services.map((item, index) => (
            <div key={index} className="matrix-card double-bezel">
              <div className="double-bezel-inner matrix-card-inner">
                <div className="matrix-card-top">
                  <span className="matrix-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="matrix-tag">{item.tag}</span>
                </div>
                <h3 className="matrix-title">{item.title}</h3>
                <p className="matrix-desc">{item.desc}</p>
                <div className="matrix-footer">
                  <a href="#contact" className="matrix-link">
                    <span>Inquire Scope</span>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner from original site */}
        <div className="designs-cta-banner">
          <div className="banner-left">
            <span className="banner-tag">OBLIGATION-FREE ARCHITECTURAL CONSULTATION</span>
            <h3 className="banner-heading">
              Your unique design is waiting to be created.
            </h3>
            <p className="banner-sub">
              Speak with our Registered Architect to review your property, planning parameters, and budget realism.
            </p>
          </div>
          <div className="banner-right">
            <a href="tel:1300373374" className="btn-dark banner-call">
              <span>✆ 1300 373 374</span>
            </a>
            <a href="#contact" className="btn-gold">
              <span>Request Project Consultation</span>
              <span className="btn-gold-icon">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
