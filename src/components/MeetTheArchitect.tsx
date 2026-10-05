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

      <div className="container mta-container">
        <div className="mta-grid">
          
          {/* Left Column: Portrait Photography with Scaled House Sketch Below */}
          <div className="mta-photo-col">
            {/* Black House Architectural Elevation Sketch — Scaled down and positioned lower below Prasad image */}
            <div className="mta-bg-sketch-wrap" aria-hidden="true">
              <svg 
                className="mta-bg-sketch-svg" 
                viewBox="0 0 760 840" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Drafting Coordinate Grid */}
                <g stroke="#000000" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.12">
                  <line x1="40" y1="80" x2="720" y2="80" />
                  <line x1="40" y1="180" x2="720" y2="180" />
                  <line x1="40" y1="280" x2="720" y2="280" />
                  <line x1="40" y1="380" x2="720" y2="380" />
                  <line x1="40" y1="480" x2="720" y2="480" />
                  <line x1="40" y1="580" x2="720" y2="580" />
                  <line x1="40" y1="680" x2="720" y2="680" />
                  <line x1="40" y1="780" x2="720" y2="780" />
                  
                  <line x1="100" y1="60" x2="100" y2="800" />
                  <line x1="220" y1="60" x2="220" y2="800" />
                  <line x1="340" y1="60" x2="340" y2="800" />
                  <line x1="460" y1="60" x2="460" y2="800" />
                  <line x1="580" y1="60" x2="580" y2="800" />
                  <line x1="700" y1="60" x2="700" y2="800" />
                </g>

                {/* Black House Architectural Line Sketch */}
                <g stroke="#121314" strokeLinejoin="miter" strokeLinecap="square">
                  {/* Ground Natural Level & Foundation Hatch */}
                  <line x1="20" y1="720" x2="740" y2="720" strokeWidth="3" opacity="0.35" />
                  <line x1="40" y1="730" x2="720" y2="730" strokeWidth="1" strokeDasharray="6 4" opacity="0.2" />

                  {/* Main Two-Storey House Outline */}
                  {/* Ground Floor Box */}
                  <rect x="140" y="460" width="460" height="260" strokeWidth="2.2" opacity="0.32" />
                  
                  {/* Upper Floor Cantilever & Terraces */}
                  <rect x="100" y="240" width="380" height="220" strokeWidth="2.2" opacity="0.32" />
                  
                  {/* Pitched Roof Accent Pavilion */}
                  <path d="M 80 240 L 290 120 L 500 240 Z" strokeWidth="2.4" opacity="0.32" />
                  <line x1="290" y1="120" x2="290" y2="460" strokeDasharray="4 4" strokeWidth="1" opacity="0.2" />

                  {/* Upper Floor Balcony & Glass Balustrade */}
                  <rect x="480" y="340" width="140" height="120" strokeWidth="1.6" opacity="0.28" />
                  <line x1="480" y1="420" x2="620" y2="420" strokeWidth="1.4" opacity="0.3" />
                  <line x1="510" y1="420" x2="510" y2="460" strokeWidth="1" opacity="0.25" />
                  <line x1="550" y1="420" x2="550" y2="460" strokeWidth="1" opacity="0.25" />
                  <line x1="590" y1="420" x2="590" y2="460" strokeWidth="1" opacity="0.25" />

                  {/* Vertical Timber/Louvre Feature Slats */}
                  <g strokeWidth="1.2" opacity="0.22">
                    <line x1="120" y1="260" x2="120" y2="440" />
                    <line x1="135" y1="260" x2="135" y2="440" />
                    <line x1="150" y1="260" x2="150" y2="440" />
                    <line x1="165" y1="260" x2="165" y2="440" />
                    <line x1="180" y1="260" x2="180" y2="440" />
                  </g>

                  {/* Master Suite High Window & Mullions */}
                  <rect x="220" y="270" width="130" height="110" strokeWidth="1.5" opacity="0.3" />
                  <line x1="285" y1="270" x2="285" y2="380" strokeWidth="1.2" opacity="0.25" />
                  
                  <rect x="370" y="270" width="90" height="110" strokeWidth="1.5" opacity="0.3" />
                  <line x1="415" y1="270" x2="415" y2="380" strokeWidth="1.2" opacity="0.25" />

                  {/* Ground Floor Large Format Sliding Glass Doors */}
                  <rect x="180" y="520" width="220" height="200" strokeWidth="1.8" opacity="0.32" />
                  <line x1="253" y1="520" x2="253" y2="720" strokeWidth="1.2" opacity="0.25" />
                  <line x1="326" y1="520" x2="326" y2="720" strokeWidth="1.2" opacity="0.25" />

                  {/* Entrance Pivot Door & Canopy */}
                  <path d="M 430 460 L 580 460 L 580 500" strokeWidth="1.8" opacity="0.3" />
                  <rect x="440" y="520" width="90" height="200" strokeWidth="1.8" opacity="0.32" />
                  <line x1="515" y1="610" x2="515" y2="640" strokeWidth="2.5" opacity="0.35" />

                  {/* Alfresco Pergola on Right */}
                  <line x1="600" y1="520" x2="710" y2="520" strokeWidth="2" opacity="0.3" />
                  <line x1="710" y1="520" x2="710" y2="720" strokeWidth="2.2" opacity="0.3" />
                  <line x1="620" y1="500" x2="620" y2="530" strokeWidth="1.2" opacity="0.25" />
                  <line x1="650" y1="500" x2="650" y2="530" strokeWidth="1.2" opacity="0.25" />
                  <line x1="680" y1="500" x2="680" y2="530" strokeWidth="1.2" opacity="0.25" />

                  {/* Architectural Dimension Markings */}
                  <g strokeWidth="1" opacity="0.25">
                    <line x1="100" y1="70" x2="480" y2="70" />
                    <line x1="100" y1="65" x2="100" y2="75" />
                    <line x1="480" y1="65" x2="480" y2="75" />
                    <text x="290" y="62" fill="#121314" fontSize="12" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">14,200 // ROOF SPAN</text>

                    <line x1="650" y1="240" x2="650" y2="720" />
                    <line x1="645" y1="240" x2="655" y2="240" />
                    <line x1="645" y1="460" x2="655" y2="460" />
                    <line x1="645" y1="720" x2="655" y2="720" />
                    <text x="665" y="350" fill="#121314" fontSize="11" fontFamily="monospace" opacity="0.7">F.F.L +3.200</text>
                    <text x="665" y="600" fill="#121314" fontSize="11" fontFamily="monospace" opacity="0.7">G.F.L +0.000</text>

                    {/* North Arrow Symbol */}
                    <circle cx="680" cy="140" r="22" />
                    <polygon points="680,123 686,145 680,140 674,145" fill="#121314" opacity="0.5" />
                    <text x="680" y="116" fill="#121314" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">N</text>
                  </g>
                </g>
              </svg>
            </div>

            <div className="mta-portrait-clean-wrap">
              <img 
                src="/prasad-perera.png" 
                alt="Prasad Perera" 
                className="mta-portrait-clean-img"
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

            {/* Architectural Track-Record Stats Bento (Number 2x text height, text next to number) */}
            <div className="mta-stats-bento">
              <div className="mta-stat-item">
                <span className="mta-stat-num">15+</span>
                <span className="mta-stat-label">Years designing in Australia</span>
              </div>
              <div className="mta-stat-item">
                <span className="mta-stat-num">10+</span>
                <span className="mta-stat-label">Years in Sri Lanka &amp; Maldives</span>
              </div>
              <div className="mta-stat-item">
                <span className="mta-stat-num">8+</span>
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
