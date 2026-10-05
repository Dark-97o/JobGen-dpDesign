import { useState } from 'react';
import './MeetTheArchitect.css';

export function MeetTheArchitect() {
  const [activeTab, setActiveTab] = useState(0);

  const interview = [
    {
      q: 'What Drew You to Architecture, Interior and Construction?',
      a: 'To transform ideas into meaningful spaces that positively influence how people live, work and feel. My passion is to create sustainable, thoughtfully designed environments that strengthen the connection between people, nature and the spaces they experience every day. I am also deeply interested in thoughtfully integrating Vastu, Feng Shui, biophilic design and selected ancient spatial philosophies with contemporary Australian architecture.'
    },
    {
      q: 'Why Do You Operate Both a Design Practice and a Building Company?',
      a: 'Working as both a Registered Architect and Licensed Builder (via Daylo Build Pty Ltd) allows me to carry a client’s vision from the very first concept sketch through council approvals and right into physical construction. It completely eliminates the common friction between architects who draw unbuildable designs and builders who compromise aesthetics. It delivers total accountability, cost transparency, and peace of mind.'
    },
    {
      q: 'What Projects Do You Enjoy the Most?',
      a: 'I most enjoy projects where architecture can genuinely improve the way people live, work and connect with their surroundings. This includes bespoke new homes, major renovations, duplexes, spatial transformations, and specialized NDIS living spaces. I particularly enjoy challenging sites where planning controls or slope require inventive, compliant solutions.'
    },
    {
      q: 'What Is the Most Rewarding Part of Your Work?',
      a: 'The most rewarding projects are those where we create something distinctive, functional and emotionally uplifting while making the entire process as clear, efficient and stress-free as possible for the client. Seeing a family move into their light-filled home that enhances their daily wellbeing is the ultimate reward.'
    }
  ];

  return (
    <section id="architect" className="architect-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="arch-tag">LEADERSHIP & SPATIAL PHILOSOPHY // SYDNEY</span>
          <h2 className="section-title">
            Meet Prasad Perera. <br />
            <span className="gold-gradient-text">Registered Architect, Builder & Spatial Visionary.</span>
          </h2>
          <p className="section-intro">
            NSW Registered Architect #12156 · Member Australian Institute of Architects · Licensed Builder
          </p>
        </div>

        {/* Architect Feature Box */}
        <div className="architect-feature-grid">
          
          {/* Left Column: Portrait & Credentials Stamp */}
          <div className="architect-portrait-col">
            <div className="double-bezel architect-bezel">
              <div className="double-bezel-inner architect-bezel-inner">
                <img
                  src="https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/About-dp-Design-studio.jpg"
                  alt="Prasad Perera Principal Architect DP Design Studio"
                  className="architect-img"
                  loading="lazy"
                />
                <div className="architect-creds-badge">
                  <span className="cred-arb">NSW ARB REGISTRATION #12156</span>
                  <span className="cred-name">PRASAD PERERA</span>
                  <span className="cred-role">DIRECTOR: DP DESIGN STUDIO & DAYLO BUILD</span>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="certs-card">
              <div className="cert-row">
                <span className="cert-check">✓</span>
                <span><strong>NSW ARB #12156:</strong> NSW Architects Registration Board Nominated Architect</span>
              </div>
              <div className="cert-row">
                <span className="cert-check">✓</span>
                <span><strong>AIA:</strong> Active Member, Australian Institute of Architects</span>
              </div>
              <div className="cert-row">
                <span className="cert-check">✓</span>
                <span><strong>LICENSED BUILDER:</strong> Direct building & construction oversight</span>
              </div>
              <div className="cert-row">
                <span className="cert-check">✓</span>
                <span><strong>DAYLO BUILD PTY LTD:</strong> Integrated master construction arm</span>
              </div>
            </div>
          </div>

          {/* Right Column: In Prasad's Own Words & Philosophy */}
          <div className="architect-philosophy-col">
            <div className="philosophy-quote-box">
              <span className="quote-mark">“</span>
              <p className="quote-text">
                My design philosophy is centred on creating meaningful, sustainable spaces that enhance health, 
                wellbeing and the way people connect with one another and their surroundings.
              </p>
              <p className="quote-text-secondary">
                I believe good architecture should balance beauty with functionality, comfort, buildability and 
                long-term value. Where appropriate, I integrate <strong>Biophilic design, Vastu Shastra, Feng Shui</strong>, 
                and selected ancient spatial philosophies with contemporary architecture to encourage harmony, natural airflow, 
                and deep connection with nature.
              </p>
              <div className="quote-author">
                <span className="author-name">Prasad Perera</span>
                <span className="author-title">Director & Principal Architect</span>
              </div>
            </div>

            {/* Interactive Q&A Accordion/Tabs */}
            <div className="qa-wrapper">
              <span className="qa-lead-tag">A FEW QUESTIONS WITH PRASAD</span>
              
              <div className="qa-tabs-list">
                {interview.map((item, idx) => (
                  <button
                    key={idx}
                    className={`qa-tab-btn ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span>{idx + 1}. {item.q}</span>
                  </button>
                ))}
              </div>

              <div className="qa-display-panel">
                <h4 className="qa-display-q">{interview[activeTab].q}</h4>
                <p className="qa-display-a">{interview[activeTab].a}</p>
                <div className="qa-panel-footer">
                  <a href="#contact" className="qa-consult-link">
                    <span>Discuss Your Project Directly with Prasad →</span>
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
