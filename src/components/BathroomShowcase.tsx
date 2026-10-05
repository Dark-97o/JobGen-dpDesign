import { useState } from 'react';
import './BathroomShowcase.css';

export function BathroomShowcase() {
  const [activeFactor, setActiveFactor] = useState(0);

  const factors = [
    {
      num: '01',
      title: 'Assessing Your Needs',
      tag: 'BESPOKE BATHING PREFERENCE',
      desc: 'We work with you to understand your daily routines: do you crave a sculptural freestanding soaking tub, an expansive curbless walk-in shower, or a dual-vanity family layout? Every fixture is selected for your lifestyle.',
      detail: 'Options include deep fluted bathtubs, double rain-heads, thermostatic mixers, and accessible step-free entries.'
    },
    {
      num: '02',
      title: 'Ventilation & Mould Prevention',
      desc: 'Irrespective of where in the home your bathroom is situated, ventilation is critical. Residual condensation leads to mould and mildew. We integrate high-capacity silent extraction and passive airflow.',
      tag: 'LONG-TERM HYGIENE & CLIMATE',
      detail: 'Engineered inline exhaust fans, ducted external venting, and heated towel rails to ensure zero moisture lingering.'
    },
    {
      num: '03',
      title: 'Ergonomic Layout & Spatial Flow',
      desc: 'You should never be squeezing past a bath to reach the washbasin or toilet. We reconfigure spatial envelopes to ensure graceful circulation, generous vanity clearance, and private toilet zones.',
      tag: 'UNOBSTRUCTED MOVEMENT',
      detail: 'Architectural sightline alignment from the entry door, avoiding open views into wet zones.'
    },
    {
      num: '04',
      title: 'Integrated Storage Architecture',
      desc: 'Creating an uncluttered, harmonious sanctuary demands intelligent storage. We design recessed mirrored shaving cabinets, floating stone vanities, custom laundry chutes, and illuminated shampoo niches.',
      tag: 'SEAMLESS CONCEALMENT',
      detail: 'Recessed in-wall cabinets flush with tiles, soft-close internal dividers, and hidden power points for shavers/dryers.'
    },
    {
      num: '05',
      title: 'Multi-Tiered Architectural Lighting',
      desc: 'There are times when you need crisp 4000K illumination for grooming, and times when you want warm 2700K muted light for a restorative evening bath. We deliver dual-circuit ambient and task lighting.',
      tag: 'ATMOSPHERE & PRECISION',
      detail: 'Concealed LED strip under-vanity nightlights, halo-backlit mirrors, and IP67 shower recess illumination.'
    },
    {
      num: '06',
      title: 'Precision Tiling & Material Palette',
      desc: 'One of the most transformative elements is the clever use of materials. We specify large-format rectified porcelain, honed travertine slabs, terrazzo tiles, and water-resistant micro-cements.',
      tag: 'SURFACE SOPHISTICATION',
      detail: 'Full-height floor-to-ceiling tiling, mitred external tile joints, and epoxy mould-resistant grout.'
    },
    {
      num: '07',
      title: 'Spatial Realism & Wall Relocation',
      desc: 'Sometimes working with existing walls restricts your dream. Because Prasad Perera is both an Architect and Licensed Builder, we safely relocate non-structural or structural walls and doors to expand your bathroom footprint.',
      tag: 'STRUCTURAL FLEXIBILITY',
      detail: 'Cavity sliding doors, moving partition walls into adjacent cupboards, and window relocations.'
    }
  ];

  const executionSteps = [
    { step: '1', title: 'Site Preparation & Floor Protection', text: 'Careful protective sheeting laid across all floor surfaces between the entry and wet areas to protect your home.' },
    { step: '2', title: 'Controlled Strip-Out & Demolition', text: 'Old tiles, fixtures, and redundant walls safely removed with compliant waste disposal and structural check.' },
    { step: '3', title: 'Rough-in Plumbing & Electrical', text: 'New water lines, drainage falls, power points, and multi-tier lighting circuits positioned to exact millimetre tolerances.' },
    { step: '4', title: 'AS 3740 Certified Waterproofing', text: 'Multi-coat membrane application with bond breakers and puddle flanges, certified to strict NSW building standards.' },
    { step: '5', title: 'Precision Tiling & Grouting', text: 'Master tiler execution using premium polymer adhesives, laser-level alignment, and epoxy stain-resistant grouting.' },
    { step: '6', title: 'Fixtures, Glass & Handover', text: 'Installation of tapware, custom vanities, frameless glass screens, illuminated mirrors, and comprehensive post-build cleaning.' }
  ];

  return (
    <section id="bathrooms" className="bathroom-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="arch-tag">LUXURY BATHROOM DESIGN & RENOVATION // SYDNEY</span>
          <h2 className="section-title">
            Bespoke Bathroom Sanctuaries. <br />
            <span className="gold-gradient-text">Balancing Beauty, Function & Enduring Quality.</span>
          </h2>
          <p className="section-intro">
            Bathroom design is often overlooked, yet it is your most private daily retreat. 
            dp Design Studio creates serene spaces to relax and pamper yourself while delivering 
            robust durability for the entire family.
          </p>
        </div>

        {/* Feature Visual Split */}
        <div className="bathroom-hero-split">
          <div className="bathroom-narrative-card">
            <span className="arch-tag">RENOVATIONS · ENSUITES · MASTER SUITES</span>
            <h3 className="bathroom-card-title">Realising Your Luxury Bathroom Ideas</h3>
            <p className="bathroom-card-text">
              Choosing a luxury bathroom design in Sydney to match your lifestyle and budget is 
              something dp Design Studio has decades of experience in. Our unique approach treats 
              the bathroom not merely as a utilitarian washroom, but as an architectural spa haven.
            </p>
            <p className="bathroom-card-text">
              From compact powder rooms to lavish master ensuites with freestanding stone bathtubs 
              and frameless fluted glass showers, we manage the entire transformation seamlessly.
            </p>

            <div className="bathroom-stats-pills">
              <div className="bath-pill">
                <span className="pill-metric">100%</span>
                <span className="pill-name">AS 3740 Waterproofing Certified</span>
              </div>
              <div className="bath-pill">
                <span className="pill-metric">15-Min</span>
                <span className="pill-name">Obligation-Free Consultation</span>
              </div>
              <div className="bath-pill">
                <span className="pill-metric">Fixed</span>
                <span className="pill-name">No Hidden Variations</span>
              </div>
            </div>

            <div className="bathroom-cta-box">
              <a href="#contact" className="btn-gold">
                <span>Book Bathroom Design Consultation</span>
                <span className="btn-gold-icon">↗</span>
              </a>
              <a href="tel:1300373374" className="btn-outline">
                <span>Call 1300 373 374</span>
              </a>
            </div>
          </div>

          <div className="double-bezel bathroom-visual-bezel">
            <div className="double-bezel-inner bathroom-visual-inner">
              <img
                src="https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Bathroom-Design-1.jpg"
                alt="dp Design Studio Luxury Bathroom Renovation in Sydney"
                className="bathroom-feature-img"
                loading="lazy"
              />
              <div className="bathroom-visual-badge">
                <span className="bath-badge-title">SYDNEY MASTER ENSUITE</span>
                <span className="bath-badge-sub">STONE VANITY & FRAMELESS SHOWER</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 7 Crucial Design Factors (Interactive Factor Tabs) */}
        <div className="factors-wrapper">
          <div className="factors-head">
            <div>
              <span className="arch-tag">ARCHITECTURAL DESIGN CRITERIA</span>
              <h3 className="factors-title">7 Crucial Factors We Consider in Every Bathroom</h3>
            </div>
            <p className="factors-sub">
              Click through the factors to see how architectural planning eliminates condensation, clutter, and layout errors.
            </p>
          </div>

          <div className="factors-selector-row">
            {factors.map((f, i) => (
              <button
                key={i}
                className={`factor-nav-btn ${activeFactor === i ? 'active' : ''}`}
                onClick={() => setActiveFactor(i)}
              >
                <span className="factor-num">{f.num}</span>
                <span className="factor-label">{f.title}</span>
              </button>
            ))}
          </div>

          {/* Active Factor Detail Card */}
          <div className="active-factor-panel double-bezel">
            <div className="double-bezel-inner active-factor-inner">
              <div className="factor-main-info">
                <span className="factor-tag-badge">{factors[activeFactor].tag}</span>
                <h4 className="factor-panel-heading">{factors[activeFactor].num}. {factors[activeFactor].title}</h4>
                <p className="factor-panel-body">{factors[activeFactor].desc}</p>
                
                <div className="factor-highlight-box">
                  <span className="highlight-lead">DP DESIGN STUDIO SPECIFICATION:</span>
                  <p className="highlight-text">{factors[activeFactor].detail}</p>
                </div>
              </div>

              <div className="factor-side-card">
                <span className="side-title">TRANSFORMATION PROTOCOL</span>
                <p className="side-text">
                  Our licensed builders and registered architects oversee every waterproofing test, plumbing pressure test, and tiling fall to drain.
                </p>
                <a href="#contact" className="btn-dark factor-cta-btn">
                  <span>Inquire About {factors[activeFactor].title}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How Your Bathroom Renovation Works (Step-by-Step Execution Protocol) */}
        <div className="execution-protocol-section">
          <div className="protocol-head">
            <span className="arch-tag">CONSTRUCTION RIGOUR // DAYLO BUILD</span>
            <h3 className="protocol-title">How Your Bathroom Renovation Works: Step-by-Step</h3>
            <p className="protocol-sub">
              From floor protection to final polish, we ensure zero disturbance to the rest of your home.
            </p>
          </div>

          <div className="execution-steps-grid">
            {executionSteps.map((s, idx) => (
              <div key={idx} className="execution-step-card">
                <div className="step-circle">{s.step}</div>
                <h4 className="execution-step-title">{s.title}</h4>
                <p className="execution-step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
