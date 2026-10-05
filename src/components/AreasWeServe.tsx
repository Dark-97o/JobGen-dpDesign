import { useState } from 'react';
import './AreasWeServe.css';

export function AreasWeServe() {
  const [selectedLga, setSelectedLga] = useState('parramatta');

  const lgas: Record<string, { council: string; suburbs: string[]; advice: string; cdcEligible: string }> = {
    parramatta: {
      council: 'City of Parramatta Council',
      suburbs: ['Parramatta', 'North Parramatta', 'Westmead', 'Harris Park', 'Rosehill', 'Rydalmere', 'Ermington', 'Dundas', 'Toongabbie', 'Winston Hills', 'Old Toongabbie'],
      advice: 'The Parramatta Local Environmental Plan (LEP) features strict heritage and streetscape controls in North Parramatta and Harris Park, but supports high-density dual occupancy and fast-track CDC in emerging residential zones.',
      cdcEligible: 'Approx. 75% of residential single-dwelling and duplex lots qualify for Complying Development (CDC) with correct setback and tree canopy planning.'
    },
    cumberland: {
      council: 'Cumberland City Council',
      suburbs: ['Granville', 'Merrylands', 'Guildford', 'Auburn', 'South Granville', 'Berala', 'Lidcombe'],
      advice: 'Cumberland LEP actively encourages secondary dwellings (granny flats) and dual occupancies. Stormwater management and on-site detention (OSD) require meticulous engineering detail.',
      cdcEligible: 'Favorable for dual-occupancy CDC under the Low Rise Housing Diversity Code with minimum 500m²-600m² lot sizes.'
    },
    hillsshire: {
      council: 'The Hills Shire Council',
      suburbs: ['Baulkham Hills', 'Castle Hill', 'Bella Vista', 'Kellyville', 'Rouse Hill', 'Dural'],
      advice: 'Significant topography, vegetation overlays, and bushfire risk mapping require specialized site surveys and Bushfire Attack Level (BAL) reports for DA/CDC approvals.',
      cdcEligible: 'Qualifies for CDC where BAL rating does not exceed BAL-29 and biodiversity mapping constraints are respected.'
    },
    ryde: {
      council: 'City of Ryde',
      suburbs: ['Eastwood', 'Denistone', 'Marsfield', 'Macquarie Park', 'Putney', 'Gladesville'],
      advice: 'Strict tree protection orders and floor space ratio (FSR) caps. DP Design Studio conducts deep pre-purchase feasibility to ensure architectural plans pass council review smoothly.',
      cdcEligible: 'CDC viable for single-dwelling new builds and internal transformations with compliant landscaped area ratios.'
    }
  };

  const coreReasons = [
    { title: 'Fully Licensed Architectural Practice', desc: 'Registered with the NSW Architects Registration Board (#12156) and Australian Institute of Architects.' },
    { title: 'Architecture & Interiors Under One Roof', desc: 'Holistic integration ensuring external massing and internal cabinetry, joinery, and lighting harmonize.' },
    { title: 'Deep Parramatta Council Knowledge', desc: 'Decades of experience navigating City of Parramatta, Cumberland, and Western Sydney council certifiers.' },
    { title: 'Builder & Architectural Synergies', desc: 'Operating both DP Design Studio and Daylo Build Pty Ltd delivers accurate construction pricing from day one.' }
  ];

  return (
    <section id="areas" className="areas-section architect-grid-bg section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="areas-head text-center">
          <span className="arch-tag">GEOGRAPHICAL CATCHMENT // SYDNEY & WESTERN SYDNEY</span>
          <h2 className="areas-title">
            Areas We Serve Across Sydney. <br />
            <span className="gold-gradient-text">Headquartered in Parramatta. Built Everywhere.</span>
          </h2>
          <p className="areas-intro">
            From our central Parramatta studio, we deliver bespoke architectural design, DA/CDC approvals, 
            and construction coordination throughout Greater Western Sydney and the Sydney metropolitan basin.
          </p>
        </div>

        {/* LGA Council Interactive Selector */}
        <div className="lga-explorer-box double-bezel">
          <div className="double-bezel-inner lga-explorer-inner">
            <div className="lga-nav-tabs">
              <span className="lga-nav-label">SELECT LOCAL GOVERNMENT AREA (LGA):</span>
              <div className="lga-buttons-group">
                {Object.keys(lgas).map((key) => (
                  <button
                    key={key}
                    className={`lga-btn ${selectedLga === key ? 'active' : ''}`}
                    onClick={() => setSelectedLga(key)}
                  >
                    {lgas[key].council}
                  </button>
                ))}
              </div>
            </div>

            {/* Active LGA Details */}
            <div className="lga-details-panel">
              <div className="lga-suburbs-col">
                <span className="col-sub-tag">PRIMARY SUBURBS SERVED IN THIS LGA:</span>
                <div className="suburbs-tag-cloud">
                  {lgas[selectedLga].suburbs.map((sub, i) => (
                    <span key={i} className="suburb-badge">
                      <span className="suburb-pin">📍</span> {sub}
                    </span>
                  ))}
                </div>
                <p className="suburbs-note">
                  *If your suburb isn’t listed, our studio handles projects across all of Greater Sydney.
                </p>
              </div>

              <div className="lga-planning-col">
                <span className="col-sub-tag">LOCAL PLANNING & COUNCIL INSIGHTS:</span>
                <p className="planning-advice-text">{lgas[selectedLga].advice}</p>
                <div className="cdc-feasibility-card">
                  <span className="cdc-head">CDC FAST-TRACK FEASIBILITY:</span>
                  <p className="cdc-text">{lgas[selectedLga].cdcEligible}</p>
                </div>
                <a href="#contact" className="btn-gold lga-cta">
                  <span>Check Site Feasibility for {lgas[selectedLga].council}</span>
                  <span className="btn-gold-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Banner */}
        <div className="why-choose-grid">
          {coreReasons.map((r, idx) => (
            <div key={idx} className="why-card">
              <span className="why-num">0{idx + 1}</span>
              <h4 className="why-title">{r.title}</h4>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
