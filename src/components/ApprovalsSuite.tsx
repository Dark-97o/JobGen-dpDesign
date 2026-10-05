import { useState } from 'react';
import './ApprovalsSuite.css';

export function ApprovalsSuite() {
  const [activeCategory, setActiveCategory] = useState('all');

  const technicalServices = [
    { name: 'Complying Development Certificates (CDC)', cat: 'approvals', desc: 'Fast-track approval pathway via accredited private certifiers under the NSW Housing Code, bypassing lengthy council delays.' },
    { name: 'Council Development Applications (DA)', cat: 'approvals', desc: 'Complete architectural submission packages for complex sites, heritage conservation areas, and custom luxury homes.' },
    { name: 'Unauthorized Construction Approvals', cat: 'approvals', desc: 'Regularization and council building certificates for historical unapproved works, pergolas, and additions.' },
    { name: 'BASIX Energy & Thermal Reports', cat: 'compliance', desc: 'Legally required NSW energy, greenhouse gas, and water efficiency modeling ensuring sustainable thermal comfort.' },
    { name: 'Shadow Diagrams (Solar Modeling)', cat: 'compliance', desc: '3D shadow cast simulations for winter solstice (9am, 12pm, 3pm) to prove solar access compliance to neighbors.' },
    { name: 'Sydney Water "Tap In" Approvals', cat: 'approvals', desc: 'Building Over or Adjacent to Sewer (BOAS) permits and water main clearance approvals across Sydney.' },
    { name: 'Stormwater & Drainage Design', cat: 'engineering', desc: 'On-site stormwater detention (OSD) systems, rainwater retention tanks, and council-compliant drainage proposals.' },
    { name: 'Geotechnical & Soil Reports', cat: 'engineering', desc: 'Site soil testing, borehole drilling, foundation bearing capacity, and slope stability risk assessment.' },
    { name: 'Structural Engineering Details', cat: 'engineering', desc: 'Collaborating with certified structural engineers for beam calculations, slab designs, and steel framing.' },
    { name: 'Dilapidation Reports', cat: 'compliance', desc: 'Photographic condition assessments of neighboring properties prior to excavation and construction.' },
    { name: 'Statement of Environmental Effects', cat: 'compliance', desc: 'Comprehensive formal planning justifications addressing zoning objectives, environmental impacts, and privacy.' },
    { name: 'Builders Detailed Cost Estimates', cat: 'financial', desc: 'Accurate quantity takeoffs and trade cost breakdowns powered by Daylo Build construction pricing intelligence.' },
    { name: 'Site Viability & Feasibility Studies', cat: 'planning', desc: 'Due diligence site inspections to verify maximum permissible floor space (FSR), height limits, and easements.' },
    { name: '3D Photorealistic Models & Montages', cat: 'planning', desc: 'Rendered photo montages showing how your new residence sits naturally in the existing streetscape.' },
    { name: 'Detailed Finishes Specification', cat: 'planning', desc: 'Granular schedule of materials, tiles, paint finishes, tapware, and joinery hardware for contract precision.' },
    { name: 'Emergency Evacuation Diagrams', cat: 'commercial', desc: 'Compliant AS 3745 evacuation diagrams for commercial premises, NDIS facilities, and medical centres.' }
  ];

  const filtered = activeCategory === 'all' 
    ? technicalServices 
    : technicalServices.filter(s => s.cat === activeCategory);

  return (
    <section id="approvals" className="approvals-section section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="approvals-header text-center">
          <span className="arch-tag">PLANNING, DA/CDC APPROVALS & COMPLIANCE // NSW</span>
          <h2 className="approvals-title">
            Navigating Sydney Planning With Absolute Certainty. <br />
            <span className="gold-gradient-text">Complete Council & Technical Approvals.</span>
          </h2>
          <p className="approvals-intro">
            From DA and CDC approvals to BASIX reports and Sydney Water permits, we handle every 
            regulatory detail. As Registered Architects, we know exactly what council certifiers require.
          </p>
        </div>

        {/* DA vs CDC Explanation Box */}
        <div className="dacadc-comparison-box double-bezel">
          <div className="double-bezel-inner comparison-inner">
            <div className="comparison-col da-col">
              <div className="col-top">
                <span className="col-badge">PATHWAY 01</span>
                <h3 className="col-title">Development Application (DA)</h3>
              </div>
              <p className="col-desc">
                Lodged directly with your local municipal council (e.g., City of Parramatta, Cumberland, Hills Shire). 
                Required for properties with heritage conservation overlays, bushfire risks, or designs requiring 
                variation from standard planning controls.
              </p>
              <ul className="col-features">
                <li><span>✓</span> Full municipal council planning assessment</li>
                <li><span>✓</span> Accommodates unique architectural expressions</li>
                <li><span>✓</span> Typical timeframe: 8 to 16 weeks depending on council</li>
              </ul>
            </div>

            <div className="comparison-divider-col">
              <span className="vs-circle">VS</span>
            </div>

            <div className="comparison-col cdc-col">
              <div className="col-top">
                <span className="col-badge cdc-badge">PATHWAY 02 (FAST-TRACK)</span>
                <h3 className="col-title">Complying Development (CDC)</h3>
              </div>
              <p className="col-desc">
                Fast-tracked approval through an accredited Private Certifier under the State Environmental 
                Planning Policy (SEPP). If your site and design meet predetermined parameters (setbacks, height, 
                landscaped area), approval is issued rapidly.
              </p>
              <ul className="col-features">
                <li><span>✓</span> Approved by Private Certifier (No council wait)</li>
                <li><span>✓</span> Rapid approval turnaround in 20-30 days</li>
                <li><span>✓</span> Lower bureaucratic costs and streamlined process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="approvals-filter-row">
          <button className={`app-filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Technical Services (16)</button>
          <button className={`app-filter-btn ${activeCategory === 'approvals' ? 'active' : ''}`} onClick={() => setActiveCategory('approvals')}>Approvals & Certifications</button>
          <button className={`app-filter-btn ${activeCategory === 'compliance' ? 'active' : ''}`} onClick={() => setActiveCategory('compliance')}>BASIX & Environmental</button>
          <button className={`app-filter-btn ${activeCategory === 'engineering' ? 'active' : ''}`} onClick={() => setActiveCategory('engineering')}>Engineering & Soil</button>
          <button className={`app-filter-btn ${activeCategory === 'planning' ? 'active' : ''}`} onClick={() => setActiveCategory('planning')}>Planning & 3D Feasibility</button>
        </div>

        {/* Services Grid */}
        <div className="approvals-grid">
          {filtered.map((item, idx) => (
            <div key={idx} className="approval-card double-bezel">
              <div className="double-bezel-inner approval-card-inner">
                <div className="card-top-tag">
                  <span className="card-cat">{item.cat.toUpperCase()}</span>
                  <span className="card-check">✓ NSW COMPLIANT</span>
                </div>
                <h4 className="approval-card-title">{item.name}</h4>
                <p className="approval-card-desc">{item.desc}</p>
                <div className="approval-card-footer">
                  <a href="#contact" className="approval-inquire-link">
                    <span>Include in My Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="unauthorized-banner">
          <div className="unauthorized-content">
            <span className="unauthorized-tag">REGULATORY PROBLEM SOLVING</span>
            <h3 className="unauthorized-title">Have Unapproved Historical Building Works?</h3>
            <p className="unauthorized-text">
              We specialize in preparing retrospective council applications, structural certificates, and Building Information 
              Certificates (BIC) to regularize unauthorized construction for sale or peace of mind.
            </p>
          </div>
          <a href="#contact" className="btn-gold unauthorized-btn">
            <span>Speak with Prasad Perera</span>
            <span className="btn-gold-icon">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
