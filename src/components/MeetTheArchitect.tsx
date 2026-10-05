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
      {/* Background Architectural Grid Pattern */}
      <div className="mta-bg-grid" aria-hidden="true" />

      {/* Architect Blueprint Sketch on the Right Side of the Background */}
      <div className="mta-bg-sketch-wrap" aria-hidden="true">
        <svg 
          className="mta-bg-sketch-svg" 
          viewBox="0 0 700 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blueprint Grid Lines */}
          <g stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35">
            <line x1="50" y1="50" x2="650" y2="50" />
            <line x1="50" y1="150" x2="650" y2="150" />
            <line x1="50" y1="250" x2="650" y2="250" />
            <line x1="50" y1="350" x2="650" y2="350" />
            <line x1="50" y1="450" x2="650" y2="450" />
            <line x1="50" y1="550" x2="650" y2="550" />
            <line x1="50" y1="650" x2="650" y2="650" />
            <line x1="50" y1="750" x2="650" y2="750" />
            
            <line x1="100" y1="50" x2="100" y2="750" />
            <line x1="200" y1="50" x2="200" y2="750" />
            <line x1="300" y1="50" x2="300" y2="750" />
            <line x1="400" y1="50" x2="400" y2="750" />
            <line x1="500" y1="50" x2="500" y2="750" />
            <line x1="600" y1="50" x2="600" y2="750" />
          </g>

          {/* Architectural Elevation & Floor Structure Sketch */}
          <g stroke="currentColor" strokeWidth="1.4" opacity="0.45">
            {/* Ground Level Datum */}
            <line x1="40" y1="680" x2="660" y2="680" strokeWidth="2.5" />
            
            {/* Main Residential Pavilion Profile */}
            <path d="M 120 680 L 120 320 L 340 180 L 560 320 L 560 680 Z" strokeWidth="2" />
            <line x1="120" y1="480" x2="560" y2="480" strokeWidth="1.5" />
            <line x1="340" y1="180" x2="340" y2="680" strokeDasharray="4 4" />

            {/* Cantilevered Overhang */}
            <path d="M 80 480 L 260 480 L 260 680" strokeWidth="1.8" />
            <line x1="80" y1="480" x2="80" y2="520" />
            <line x1="80" y1="520" x2="120" y2="520" />

            {/* Window Fenestration & Louvers */}
            <rect x="150" y="360" width="70" height="90" strokeWidth="1.2" />
            <line x1="185" y1="360" x2="185" y2="450" />
            <rect x="250" y="360" width="70" height="90" strokeWidth="1.2" />
            <line x1="285" y1="360" x2="285" y2="450" />
            
            <rect x="360" y="360" width="160" height="90" strokeWidth="1.2" />
            <line x1="400" y1="360" x2="400" y2="450" />
            <line x1="440" y1="360" x2="440" y2="450" />
            <line x1="480" y1="360" x2="480" y2="450" />

            {/* Ground Floor Glazing & Entrance */}
            <rect x="300" y="520" width="80" height="160" strokeWidth="1.6" />
            <rect x="410" y="520" width="120" height="140" strokeWidth="1.2" />

            {/* Dimension Indicators & Callout Arrows */}
            <line x1="120" y1="130" x2="560" y2="130" strokeWidth="1" />
            <path d="M 120 125 L 120 135 M 560 125 L 560 135" />
            <text x="340" y="120" fill="currentColor" fontSize="13" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em">12,400 // ELEVATION NORTH</text>

            <line x1="590" y1="320" x2="590" y2="680" strokeWidth="1" />
            <path d="M 585 320 L 595 320 M 585 680 L 595 680" />
            <text x="605" y="510" fill="currentColor" fontSize="12" fontFamily="monospace" transform="rotate(90 605 510)" letterSpacing="0.1em">RL +45.200</text>

            {/* Drafting Compass Arc */}
            <path d="M 340 180 A 160 160 0 0 1 480 260" strokeDasharray="3 3" strokeWidth="1" />
            <circle cx="340" cy="180" r="4" fill="currentColor" />
          </g>
        </svg>
      </div>

      <div className="container mta-container">
        <div className="mta-grid">
          
          {/* Left Column: Portrait Photography — JUST THE IMAGE, NO TEXT */}
          <div className="mta-photo-col">
            <div className="mta-media-frame">
              <span className="frame-corner frame-tl" />
              <span className="frame-corner frame-tr" />
              <span className="frame-corner frame-bl" />
              <span className="frame-corner frame-br" />

              <img 
                src="/prasad-perera.png" 
                alt="Prasad Perera" 
                className="mta-portrait-img"
                loading="lazy"
                width={520}
                height={620}
              />
            </div>
          </div>

          {/* Right Column: Bio Narrative, Stats & Accreditations (NO PILL ABOVE HEADLINE) */}
          <div className="mta-content-col">
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
                <span>Interior Designer</span>
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
