import { useState } from 'react';
import { ShieldCheck, Award, Layers, ArrowRight, PhoneCall } from 'lucide-react';
import { ContactModal } from './ContactModal';
import './MeetTheArchitect.css';

interface MeetTheArchitectProps {
  variant?: 'light' | 'dark';
}

export function MeetTheArchitect({ variant = 'light' }: MeetTheArchitectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      className={`mta-section ${variant === 'dark' ? 'mta-dark' : 'mta-light'}`} 
      id="architect"
      aria-label="Design Led by a Registered Architect and Licensed Builder"
    >
      <div className="container mta-container">
        <div className="mta-grid">
          
          {/* Left Column: Portrait Photography with Architectural Machined Corners */}
          <div className="mta-photo-col">
            <div className="mta-media-frame">
              <span className="frame-corner frame-tl" />
              <span className="frame-corner frame-tr" />
              <span className="frame-corner frame-bl" />
              <span className="frame-corner frame-br" />

              <img 
                src="/prasad-perera.jpg" 
                alt="Prasad Perera, NSW registered architect, licensed builder and director of dp Design Studio" 
                className="mta-portrait-img"
                loading="lazy"
                width={520}
                height={620}
              />

              <div className="mta-photo-overlay-badge">
                <div className="mta-badge-icon">
                  <Award size={16} />
                </div>
                <div>
                  <span className="mta-badge-name">PRASAD PERERA</span>
                  <span className="mta-badge-role">Director // NSW ARB #12156 // Lic. #492271C</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Stats & Accreditations */}
          <div className="mta-content-col">
            <div className="mta-eyebrow-pill">
              <span className="mta-pill-dot" />
              <span>MEET THE ARCHITECT // LEADERSHIP</span>
            </div>

            <h2 className="mta-heading">
              Design Led by a <span className="mta-gold-emphasis">Registered Architect</span> and <span className="mta-gold-emphasis">Licensed Builder</span>
            </h2>

            <div className="mta-body-text">
              <p>
                <strong>Prasad Perera</strong> is the director of dp Design Studio. He is a NSW registered architect, interior designer and licensed builder. He leads every project from the first idea through to the finished build.
              </p>
              <p>
                Prasad believes good architecture should balance beauty with comfort, function and long-term value. He designs homes that are practical to build, healthy to live in and made for the way you live.
              </p>
            </div>

            {/* Architectural Track-Record Stats Bento */}
            <div className="mta-stats-bento">
              <div className="mta-stat-item">
                <strong className="mta-stat-num">15+</strong>
                <span className="mta-stat-label">Years designing in Australia</span>
              </div>
              <div className="mta-stat-item">
                <strong className="mta-stat-num">10+</strong>
                <span className="mta-stat-label">Years in Sri Lanka &amp; Maldives</span>
              </div>
              <div className="mta-stat-item">
                <strong className="mta-stat-num">8+</strong>
                <span className="mta-stat-label">Years running dp Design Studio</span>
              </div>
            </div>

            {/* Verified Qualifications List */}
            <ul className="mta-creds-list" aria-label="Professional Accreditations">
              <li className="mta-cred-item">
                <ShieldCheck size={18} className="mta-cred-icon" />
                <span>NSW Registered Architect (Reg. 12156)</span>
              </li>
              <li className="mta-cred-item">
                <Award size={18} className="mta-cred-icon" />
                <span>Licensed Builder (Lic. 492271C)</span>
              </li>
              <li className="mta-cred-item">
                <Layers size={18} className="mta-cred-icon" />
                <span>Bespoke Interior Designer</span>
              </li>
            </ul>

            {/* Action Group */}
            <div className="mta-actions">
              <button 
                type="button" 
                className="mta-primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book A Free Phone Consultation</span>
                <ArrowRight size={16} />
              </button>

              <a href="tel:1300373374" className="mta-phone-btn">
                <PhoneCall size={16} />
                <span>1300 373 374</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
