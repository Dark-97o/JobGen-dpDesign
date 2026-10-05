import { useState } from 'react';
import './ProjectPlanner.css';

export function ProjectPlanner() {
  const [devType, setDevType] = useState('New House');
  const [budget, setBudget] = useState('$350,000 - $500,000');
  const [approvalGoal, setApprovalGoal] = useState('CDC Fast-Track');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Architectural Design',
    'Construction Documentation',
    'Project Management'
  ]);

  const devTypes = [
    'New House',
    'Alterations & Additions',
    'Dual Occupancy',
    'Town houses',
    'Kitchen & Bathroom',
    'SDA / NDIS Housing',
    'Commercial'
  ];

  const budgetTiers = [
    'Less than $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $350,000',
    '$350,000 - $500,000',
    'Over $500,000'
  ];

  const serviceOptions = [
    'Architectural Design',
    'Interior Design',
    'Project Management',
    'Feasibility Study',
    'Construction Documentation',
    'Contract Administration'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const getEstimatedTimeline = () => {
    if (devType === 'Kitchen & Bathroom') return '4 - 8 Weeks';
    if (approvalGoal === 'CDC Fast-Track') return '3 - 5 Months (Design to Approval)';
    return '6 - 9 Months (Design to Council DA)';
  };

  return (
    <section id="planner" className="planner-section section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="planner-head text-center">
          <span className="arch-tag">INTERACTIVE ARCHITECTURAL ESTIMATOR // SYDNEY</span>
          <h2 className="planner-title">
            Plan Your Project Scope & Timeline. <br />
            <span className="gold-gradient-text">Clear Budgets. Zero Grey Areas.</span>
          </h2>
          <p className="planner-intro">
            Tailor your build parameters using our official consultation matrix. Receive an instant 
            architectural roadmap before scheduling your obligation-free 15-minute phone consultation.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="planner-card double-bezel">
          <div className="double-bezel-inner planner-inner">
            
            {/* Left Column: Form Controls */}
            <div className="planner-controls-col">
              
              {/* Step 1: Type of Development */}
              <div className="planner-group">
                <label className="planner-label">
                  <span className="group-num">01</span>
                  <span>TYPE OF DEVELOPMENT:</span>
                </label>
                <div className="planner-options-row">
                  {devTypes.map((type) => (
                    <button
                      key={type}
                      className={`planner-chip ${devType === type ? 'active' : ''}`}
                      onClick={() => setDevType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget Bracket */}
              <div className="planner-group">
                <label className="planner-label">
                  <span className="group-num">02</span>
                  <span>ESTIMATED BUDGET BRACKET (AUD):</span>
                </label>
                <div className="planner-options-row">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      className={`planner-chip ${budget === tier ? 'active' : ''}`}
                      onClick={() => setBudget(tier)}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Approval Preference */}
              <div className="planner-group">
                <label className="planner-label">
                  <span className="group-num">03</span>
                  <span>PREFERRED APPROVAL ROUTE:</span>
                </label>
                <div className="planner-options-row">
                  {['CDC Fast-Track (Private Certifier)', 'Council DA (Local Municipality)', 'Unsure / Require Site Feasibility'].map((route) => (
                    <button
                      key={route}
                      className={`planner-chip ${approvalGoal === route ? 'active' : ''}`}
                      onClick={() => setApprovalGoal(route)}
                    >
                      {route}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Required Professional Services */}
              <div className="planner-group">
                <label className="planner-label">
                  <span className="group-num">04</span>
                  <span>SELECT ARCHITECTURAL SERVICES NEEDED:</span>
                </label>
                <div className="planner-services-grid">
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        className={`planner-checkbox-btn ${isSelected ? 'checked' : ''}`}
                        onClick={() => toggleService(srv)}
                      >
                        <span className="check-box-icon">{isSelected ? '✓' : ''}</span>
                        <span>{srv}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Roadmap Summary */}
            <div className="planner-summary-col">
              <div className="summary-header">
                <span className="summary-tag">ESTIMATED ARCHITECTURAL ROADMAP</span>
                <h3 className="summary-dev-title">{devType}</h3>
                <span className="summary-budget-badge">{budget}</span>
              </div>

              <div className="summary-specs-list">
                <div className="summary-spec-item">
                  <span className="spec-k">APPROVAL PATHWAY</span>
                  <span className="spec-v">{approvalGoal}</span>
                </div>
                <div className="summary-spec-item">
                  <span className="spec-k">PROJECTED TIMEFRAME</span>
                  <span className="spec-v highlight-v">{getEstimatedTimeline()}</span>
                </div>
                <div className="summary-spec-item">
                  <span className="spec-k">ACTIVE SCOPE MODULES</span>
                  <span className="spec-v">{selectedServices.length} Selected</span>
                </div>
                <div className="summary-spec-item">
                  <span className="spec-k">SUPERVISING ARCHITECT</span>
                  <span className="spec-v">Prasad Perera (NSW ARB #12156)</span>
                </div>
              </div>

              <div className="summary-guarantee-box">
                <span className="guarantee-icon">🛡</span>
                <div className="guarantee-text">
                  <strong>The DP Design Studio Promise:</strong>
                  <p>Accurate budget alignment from sketch phase. Transparent construction estimates via Daylo Build.</p>
                </div>
              </div>

              <a
                href={`#contact`}
                className="btn-gold summary-submit-btn"
              >
                <span>Submit Scope for Free 15-Min Review</span>
                <span className="btn-gold-icon">↗</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
