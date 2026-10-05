import { useState } from 'react';
import './KitchenShowcase.css';

export function KitchenShowcase() {
  const [selectedLayout, setSelectedLayout] = useState('island');

  const layouts: Record<string, { name: string; tag: string; desc: string; spatialBenefits: string[] }> = {
    island: {
      name: 'Island Kitchen Design',
      tag: 'ENTERTAINING & SOCIAL LIVING',
      desc: 'The benchmark of modern luxury living. A freestanding central stone island becomes the family gathering hub, food preparation stage, and casual dining bar with hidden power and integrated wine storage.',
      spatialBenefits: ['Expansive open-plan flow connecting living and alfresco', 'Generous under-island drawers and deep pan storage', 'Casual counter seating for family dining']
    },
    galley: {
      name: 'Galley Kitchen Design',
      tag: 'HIGH-EFFICIENCY CULINARY PASSAGE',
      desc: 'Two parallel walls facing each other form an uninterrupted culinary corridor. Maximizes every single millimeter of vertical and horizontal wall space with minimal wasted steps between fridge, sink, and cooktop.',
      spatialBenefits: ['The gold standard for ergonomic chef efficiency', 'Full-height pantry cabinetry to the ceiling', 'Uncluttered sightlines with integrated panel appliances']
    },
    lshape: {
      name: 'L-Shaped Kitchen Design',
      tag: 'CORNER OPTIMIZATION',
      desc: 'Cabinetry and appliances arranged along two perpendicular walls. Perfect for open-plan dining zones, easily accommodating a breakfast nook or extending into an open living room.',
      spatialBenefits: ['Eliminates traffic bottlenecks in active family homes', 'Clever pull-out LeMans corner carousel storage', 'Natural integration of breakfast tables or movable islands']
    },
    ushape: {
      name: 'U-Shaped Kitchen Design',
      tag: 'MAXIMUM WORK SURFACE',
      desc: 'Cabinetry enclosing three walls to deliver continuous benchtop space. Ideal for home cooks who need dedicated baking zones, prep areas, and abundant overhead cabinetry.',
      spatialBenefits: ['Maximum uninterrupted stone preparation bench space', 'Total separation from living room thoroughfares', 'Comprehensive wall-to-wall under-bench cabinetry']
    },
    peninsula: {
      name: 'Peninsula Kitchen Design',
      tag: 'CONNECTED BREAKFAST BAR',
      desc: 'Connected to the main perimeter wall like an attached island, creating a clear division between cooking and dining areas without closing off natural light.',
      spatialBenefits: ['Provides island-style seating in more compact spaces', 'Defines kitchen boundaries in open-plan floorplates', 'Ideal for busy morning breakfast routines and homework']
    },
    onewall: {
      name: 'One Wall Kitchen Design',
      tag: 'MINIMALIST LINEAR PURITY',
      desc: 'All cabinetry, appliances, and sink seamlessly aligned along a single architectural feature wall. Delivers clean, uncluttered aesthetics with clever vertical storage.',
      spatialBenefits: ['Optimal solution for apartments, lofts, and studio living', 'Vertical shelving and tall cabinetry maximizing ceiling height', 'Leaves open floor space completely unobstructed']
    }
  };

  const turnkeyServices = [
    { title: 'Project Management Start-to-Finish', desc: 'Single point of contact managing demolition, trade scheduling, council certifiers, and final handover.' },
    { title: 'Photorealistic 3D Digital Plans', desc: 'Detailed 3D visualizations and virtual walkthroughs so you experience materials, light, and proportions before building.' },
    { title: 'Bespoke Benchtops & Cabinetry', desc: 'Custom engineered stone, porcelain slabs, soft-close hardware, 2-pac polyurethane, and natural timber veneers.' },
    { title: 'Plumbing & Electrical Rough-in', desc: 'Strategic LED under-cabinet illumination, appliance power points, integrated induction hubs, and waste plumbing.' },
    { title: 'Designer Sinks & Tapware Installed', desc: 'Undermount quartz/granite sinks, gooseneck pull-out mixers in brushed brass, gunmetal, and matte black.' },
    { title: 'Splashbacks, Tiles & Plastering', desc: 'Seamless stone splashbacks, textured subway tiles, mosaic accents, and precision wall plastering.' }
  ];

  return (
    <section id="kitchens" className="kitchen-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="arch-tag">BESPOKE KITCHEN RENOVATIONS // SYDNEY</span>
          <h2 className="section-title">
            Best Kitchen Design, Sydney <br />
            <span className="gold-gradient-text">Functionality Meets Timeless Luxury.</span>
          </h2>
          <p className="section-intro">
            We don’t limit ourselves to ticking boxes — we think outside the box. dp Design Studio creates 
            bespoke culinary spaces where you will love entertaining guests or gathering as a family.
          </p>
        </div>

        {/* Feature Visual Split */}
        <div className="kitchen-hero-split">
          <div className="double-bezel kitchen-visual-bezel">
            <div className="double-bezel-inner kitchen-visual-inner">
              <img
                src="https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Kitchen-Design-and-Renovation.jpg"
                alt="dp Design Studio Bespoke Kitchen Renovation in Sydney"
                className="kitchen-feature-img"
                loading="lazy"
              />
              <div className="kitchen-visual-badge">
                <span className="badge-title">SYDNEY BESPOKE KITCHEN</span>
                <span className="badge-spec">TURNKEY DEMOLITION TO HANDOVER</span>
              </div>
            </div>
          </div>

          <div className="kitchen-philosophy-card">
            <span className="arch-tag">NO GREY AREAS · NO HIDDEN CHARGES</span>
            <h3 className="kitchen-card-title">Turnkey Kitchen Renovations Tailored to Your Home</h3>
            <p className="kitchen-card-text">
              Whether part of a new build or a renovation of your existing property, dp Design Studio is a bespoke 
              kitchen designer who delivers. Our seamless process takes care of every single detail: we listen 
              to what you want, source expert tradespeople, supply and install premium hardware, and obtain 
              all necessary permissions.
            </p>

            <div className="kitchen-styles-list">
              <div className="style-item">
                <span className="style-bullet">◆</span>
                <div>
                  <strong>Modern Luxury Kitchen Design:</strong> Clean waterfall stone islands, integrated handleless cabinetry, and statement pendant illumination.
                </div>
              </div>
              <div className="style-item">
                <span className="style-bullet">◆</span>
                <div>
                  <strong>Contemporary Kitchen Design:</strong> Warm timber textures, matte neutral palettes, fluted glass, and ergonomic appliance positioning.
                </div>
              </div>
              <div className="style-item">
                <span className="style-bullet">◆</span>
                <div>
                  <strong>Victorian & Heritage Reimagined:</strong> Elegant shaker profiles, brass detailing, and traditional craftsmanship with state-of-the-art appliances.
                </div>
              </div>
            </div>

            <div className="kitchen-call-prompt">
              <span>Book a 15-Minute Obligation Free Phone Consultation:</span>
              <a href="tel:1300373374" className="kitchen-hotline">1300 373 374</a>
            </div>
          </div>
        </div>

        {/* Interactive Layout Explorer */}
        <div className="layout-explorer-wrapper">
          <div className="explorer-header">
            <div>
              <span className="arch-tag">SPATIAL CONFIGURATION SELECTOR</span>
              <h3 className="explorer-title">Explore Kitchen Layout Archetypes</h3>
            </div>
            <p className="explorer-desc">
              Select a floorplan layout to view architectural flow, storage benefits, and spatial suitability.
            </p>
          </div>

          {/* Layout Selector Pills */}
          <div className="layout-pills">
            {Object.keys(layouts).map((key) => (
              <button
                key={key}
                className={`layout-pill-btn ${selectedLayout === key ? 'active' : ''}`}
                onClick={() => setSelectedLayout(key)}
              >
                {layouts[key].name}
              </button>
            ))}
          </div>

          {/* Active Layout Spec Box */}
          <div className="layout-display-box double-bezel">
            <div className="double-bezel-inner layout-display-inner">
              <div className="layout-info">
                <span className="layout-tag-badge">{layouts[selectedLayout].tag}</span>
                <h4 className="layout-active-name">{layouts[selectedLayout].name}</h4>
                <p className="layout-active-desc">{layouts[selectedLayout].desc}</p>
                
                <div className="layout-benefits">
                  <span className="benefits-title">ARCHITECTURAL ADVANTAGES:</span>
                  <ul className="benefits-list">
                    {layouts[selectedLayout].spatialBenefits.map((b, i) => (
                      <li key={i}><span className="check-gold">✓</span> {b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="layout-blueprint-card">
                <div className="blueprint-top">
                  <span className="blueprint-title">LAYOUT BLUEPRINT ANALYSIS</span>
                  <span className="blueprint-spec">SYDNEY CODE COMPLIANT</span>
                </div>
                <div className="blueprint-schematic">
                  <div className="schematic-center-text">
                    <span className="schematic-label">SPATIAL ENVELOPE</span>
                    <span className="schematic-val">{layouts[selectedLayout].name}</span>
                  </div>
                </div>
                <a href="#contact" className="btn-gold blueprint-btn">
                  <span>Plan My {layouts[selectedLayout].name}</span>
                  <span className="btn-gold-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Turnkey Package Grid */}
        <div className="turnkey-package-section">
          <div className="turnkey-title-row">
            <h3 className="turnkey-heading">What Our Complete Kitchen Package Includes:</h3>
            <span className="arch-tag">FULL TURNKEY SERVICE</span>
          </div>

          <div className="turnkey-grid">
            {turnkeyServices.map((srv, idx) => (
              <div key={idx} className="turnkey-item">
                <span className="turnkey-num">{String(idx + 1).padStart(2, '0')}</span>
                <h4 className="turnkey-item-title">{srv.title}</h4>
                <p className="turnkey-item-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
