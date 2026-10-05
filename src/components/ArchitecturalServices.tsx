import { useState } from 'react';
import './ArchitecturalServices.css';

export function ArchitecturalServices() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      num: '01',
      title: 'Initial Consultation',
      desc: 'We meet to understand your goals, lifestyle needs, aesthetic vision, budget parameters, and site priorities to establish a crystal-clear architectural brief.',
      deliverable: 'Project Brief & Feasibility Roadmap'
    },
    {
      num: '02',
      title: 'Site Review & Assessment',
      desc: 'Thorough investigation of your property, orientation, sun angles, council zoning controls, easements, sewer mains, and site topography.',
      deliverable: 'Site Analysis & Planning Matrix'
    },
    {
      num: '03',
      title: 'Concept Architectural Design',
      desc: 'Exploring spatial layouts, massing, natural light studies, room flow, and initial sketch floor plans tailored to your land and budget.',
      deliverable: 'Floor Plans & 3D Volumetric Sketches'
    },
    {
      num: '04',
      title: 'Design Development & Documentation',
      desc: 'Detailed architectural drawings, material selections, joinery specifications, electrical layouts, window schedules, and structural coordination.',
      deliverable: 'Complete Construction Documentation'
    },
    {
      num: '05',
      title: 'Permits, Approvals & Coordination',
      desc: 'Compiling Development Application (DA) or Complying Development Certificate (CDC) packages, BASIX certificates, engineering sign-offs, and authority referrals.',
      deliverable: 'Council DA / CDC Approval Consent'
    },
    {
      num: '06',
      title: 'Project Support & Construction',
      desc: 'Direct construction execution through Daylo Build Pty Ltd or builder liaison, trade coordination, and on-site architectural oversight to handover.',
      deliverable: 'Occupancy Certificate & Handover'
    }
  ];

  const challenges = [
    {
      icon: '📐',
      title: 'Vision Needing Expert Guidance',
      desc: 'You have ideas for your home but need a licensed, NSW Registered Architect to shape that vision into a buildable, compliant, and architecturally stunning reality.'
    },
    {
      icon: '🔄',
      title: 'Outdated Layout & Poor Flow',
      desc: 'Your existing layout restricts daily life. Rooms are disconnected, storage is lacking, and there is no intuitive transition between indoor and outdoor entertaining.'
    },
    {
      icon: '📍',
      title: 'Unsure What Site Rules Allow',
      desc: 'Uncertain whether your property qualifies for CDC fast-track or requires a full Council DA, or what envelope setback limits and slope restrictions apply.'
    },
    {
      icon: '⚖️',
      title: 'Balancing Design with Real Budget',
      desc: 'You need an architectural practice that understands real construction costs from day one, preventing unbuildable designs and devastating budget blowouts.'
    },
    {
      icon: '☀️',
      title: 'Maximizing Light, Airflow & Wellbeing',
      desc: 'Harnessing passive solar orientation, cross-ventilation, and Biophilic design principles so your living spaces feel naturally radiant, tranquil, and healthy.'
    },
    {
      icon: '🤝',
      title: 'Concept-to-Completion Support',
      desc: 'Eliminating the stressful gap between separate architects and builders with a single accountable director guiding permits, materials, and construction.'
    }
  ];

  return (
    <section id="services" className="arch-services-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="arch-tag">ARCHITECTURAL DESIGN SERVICES // SYDNEY</span>
          <h2 className="section-title">
            Architecture That Brings Your Vision to Life. <br />
            <span className="gold-gradient-text">Functional, Sustainable & Uniquely Yours.</span>
          </h2>
          <p className="section-intro">
            Custom architectural solutions for new homes, duplexes, renovations, and specialist 
            living spaces across Sydney. We respond thoughtfully to your lifestyle, land, and budget.
          </p>
        </div>

        {/* The 6 Challenges We Help Sydney Homeowners Overcome */}
        <div className="challenges-wrapper">
          <div className="challenges-title-bar">
            <h3 className="challenges-heading">Architectural Design Challenges We Help You Overcome</h3>
            <span className="challenges-sub">PRACTICAL EXPERTISE AT EVERY STAGE</span>
          </div>

          <div className="challenges-grid">
            {challenges.map((c, i) => (
              <div key={i} className="challenge-card double-bezel">
                <div className="double-bezel-inner challenge-card-inner">
                  <div className="challenge-icon-box">{c.icon}</div>
                  <h4 className="challenge-title">{c.title}</h4>
                  <p className="challenge-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Design Process (Interactive Timeline) */}
        <div className="process-wrapper">
          <div className="process-header">
            <div>
              <span className="arch-tag">STAGE-BY-STAGE METHODOLOGY</span>
              <h3 className="process-title">How Our Architectural Design Process Works</h3>
            </div>
            <p className="process-subtitle">
              A clear, transparent process giving you complete confidence from first sketch to final lockup.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="process-stepper-tabs">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                className={`step-tab ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="step-num">{step.num}</span>
                <span className="step-name">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div className="active-step-panel double-bezel">
            <div className="double-bezel-inner active-step-inner">
              <div className="active-step-left">
                <span className="step-badge">PHASE {processSteps[activeStep].num} // ARCHITECTURAL MILESTONE</span>
                <h4 className="active-step-title">{processSteps[activeStep].title}</h4>
                <p className="active-step-desc">{processSteps[activeStep].desc}</p>
                
                <div className="active-step-deliverable">
                  <span className="deliverable-label">CORE DELIVERABLE:</span>
                  <span className="deliverable-val">{processSteps[activeStep].deliverable}</span>
                </div>
              </div>

              <div className="active-step-right">
                <div className="active-step-blueprint">
                  <div className="blueprint-lines"></div>
                  <div className="blueprint-meta">
                    <span>NSW ARB REG. 12156</span>
                    <span>DP DESIGN STUDIO PTY LTD</span>
                    <span>DAYLO BUILD CONSTRUCTION ARM</span>
                  </div>
                  <a href="#contact" className="btn-gold step-cta">
                    <span>Discuss Phase {processSteps[activeStep].num}</span>
                    <span className="btn-gold-icon">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
