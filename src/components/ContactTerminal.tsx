import { useState, type FormEvent } from 'react';
import './ContactTerminal.css';

export function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    devType: 'New House',
    budget: '$350,000 - $500,000',
    services: 'Architectural Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section architect-dark-grid-bg section-monolith section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="contact-head text-center">
          <span className="arch-tag arch-tag-dark">DIRECT STUDIO CONSULTATION // PARRAMATTA</span>
          <h2 className="contact-title">
            Start Your Architectural Journey. <br />
            <span className="gold-gradient-text">Book a 15-Minute Obligation-Free Phone Call.</span>
          </h2>
          <p className="contact-intro">
            Connect directly with Director and Registered Architect Prasad Perera to discuss your site, 
            zoning controls, budget parameters, and initial feasibility.
          </p>
        </div>

        {/* Contact Terminal Split */}
        <div className="contact-terminal-grid">
          
          {/* Left Column: Direct Coordinates */}
          <div className="contact-info-col">
            <div className="studio-card double-bezel-dark">
              <div className="double-bezel-dark-inner studio-card-inner">
                <span className="studio-tag">HEADQUARTERS & MAILING DESK</span>
                <h3 className="studio-title">DP DESIGN STUDIO PTY LTD</h3>
                <p className="studio-meta">
                  Nominated Architect: Prasad Perera (NSW ARB #12156)<br />
                  Associated Builder: Daylo Build Pty Ltd
                </p>

                <div className="contact-channels-list">
                  <div className="channel-item">
                    <span className="channel-icon">✆</span>
                    <div>
                      <span className="channel-k">DIRECT PHONE HOTLINE</span>
                      <a href="tel:1300373374" className="channel-v highlight-v">1300 373 374</a>
                    </div>
                  </div>

                  <div className="channel-item">
                    <span className="channel-icon">✉</span>
                    <div>
                      <span className="channel-k">STUDIO INQUIRIES</span>
                      <a href="mailto:admin@dpdesignstudio.com.au" className="channel-v">admin@dpdesignstudio.com.au</a>
                    </div>
                  </div>

                  <div className="channel-item">
                    <span className="channel-icon">📍</span>
                    <div>
                      <span className="channel-k">STUDIO MAILING ADDRESS</span>
                      <span className="channel-v">PO BOX 3528, PARRAMATTA, NSW 2150, AUSTRALIA</span>
                    </div>
                  </div>

                  <div className="channel-item">
                    <span className="channel-icon">🌐</span>
                    <div>
                      <span className="channel-k">ONLINE REPOSITORY</span>
                      <span className="channel-v">www.dpdesignstudio.com.au</span>
                    </div>
                  </div>
                </div>

                <div className="consult-guarantee">
                  <span className="guarantee-badge">15-MINUTE PROMISE</span>
                  <p>
                    Every phone consultation is held directly with an experienced architectural professional. 
                    No salespeople, no pushy scripts—only realistic guidance on what is buildable on your site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Intake Form */}
          <div className="contact-form-col">
            <div className="form-card double-bezel-dark">
              <div className="double-bezel-dark-inner form-card-inner">
                {submitted ? (
                  <div className="form-success-box">
                    <div className="success-icon">✓</div>
                    <h3 className="success-title">Consultation Request Received</h3>
                    <p className="success-text">
                      Thank you, <strong>{formData.name}</strong>. Prasad Perera and the DP Design Studio 
                      team will review your project parameters for <strong>{formData.suburb || 'your property'}</strong> and 
                      reach out via phone within 1 business day.
                    </p>
                    <div className="success-action">
                      <span>Need an immediate conversation? Call directly:</span>
                      <a href="tel:1300373374" className="btn-gold">
                        <span>Call 1300 373 374</span>
                        <span className="btn-gold-icon">✆</span>
                      </a>
                    </div>
                    <button className="reset-btn" onClick={() => setSubmitted(false)}>
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="project-intake-form">
                    <div className="form-row">
                      <div className="form-field">
                        <label className="field-label">FULL NAME *</label>
                        <input
                          type="text"
                          required
                          className="field-input"
                          placeholder="e.g. John Henderson"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label className="field-label">PHONE NUMBER *</label>
                        <input
                          type="tel"
                          required
                          className="field-input"
                          placeholder="e.g. 0412 345 678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label className="field-label">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          className="field-input"
                          placeholder="e.g. john@example.com.au"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label className="field-label">PROJECT SUBURB / ADDRESS *</label>
                        <input
                          type="text"
                          required
                          className="field-input"
                          placeholder="e.g. Parramatta, NSW 2150"
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label className="field-label">TYPE OF DEVELOPMENT</label>
                        <select
                          className="field-select"
                          value={formData.devType}
                          onChange={(e) => setFormData({ ...formData, devType: e.target.value })}
                        >
                          <option value="New House">New House</option>
                          <option value="Alterations & Additions">Alterations & Additions</option>
                          <option value="Dual Occupancy">Dual Occupancy / Duplex</option>
                          <option value="Town houses">Town houses</option>
                          <option value="Kitchen & Bathroom">Kitchen & Bathroom</option>
                          <option value="Commercial">Commercial / Medical Centre</option>
                          <option value="SDA / NDIS Living">SDA / NDIS Living</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label className="field-label">APPROXIMATE BUDGET</label>
                        <select
                          className="field-select"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="Less than $50,000">Less than $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                          <option value="$250,000 - $350,000">$250,000 - $350,000</option>
                          <option value="$350,000 - $500,000">$350,000 - $500,000</option>
                          <option value="Over $500,000">Over $500,000</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="field-label">PRIMARY SERVICE NEEDED</label>
                      <select
                        className="field-select"
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                      >
                        <option value="Architectural Design">Architectural Design & Planning</option>
                        <option value="Interior Design">Interior Design & Joinery</option>
                        <option value="Project Management">Turnkey Project Management (Design & Build)</option>
                        <option value="Feasibility Study">Site Feasibility & Zoning Study</option>
                        <option value="Construction Documentation">Construction Documentation for DA/CDC</option>
                        <option value="Contract Administration">Contract Administration</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">PROJECT DETAILS & SPECIAL REQUIREMENTS</label>
                      <textarea
                        rows={3}
                        className="field-textarea"
                        placeholder="Tell us about your property goals, timeline, block size, or any specific requirements (e.g. Biophilic flow, Vastu, pool, 2nd storey)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-gold form-submit-btn">
                      <span>Schedule 15-Min Phone Consultation</span>
                      <span className="btn-gold-icon">↗</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
