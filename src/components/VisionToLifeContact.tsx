import { useState, useRef, useEffect, type FormEvent } from 'react';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './VisionToLifeContact.css';

export function VisionToLifeContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const pcScreenRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      // Calculate normalized cursor position relative to the contact card
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      targetRotY = Math.max(-1, Math.min(1, x)) * 15; // Max 15 deg yaw
      targetRotX = Math.max(-1, Math.min(1, -y)) * 12; // Max 12 deg pitch
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    const lerp = () => {
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      if (pcScreenRef.current) {
        pcScreenRef.current.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
        
        // Dynamic specular glare angle
        const glareX = 50 + currentRotY * 1.8;
        const glareY = 50 - currentRotX * 1.8;
        pcScreenRef.current.style.setProperty('--glare-x', `${glareX}%`);
        pcScreenRef.current.style.setProperty('--glare-y', `${glareY}%`);
      }

      animId = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="vision-contact-section">
      {/* Golden Architectural Full-Width Separator at Top of Contact Section */}
      <div className="vision-top-gold-separator" aria-hidden="true" />

      <div className="container vision-container">
        
        {/* Main Card Container */}
        <div className="vision-form-card" ref={cardRef}>
          
          {/* Header */}
          <div className="vision-header text-center">
            <h2 className="vision-title">
              Ready to Bring Your Architectural Vision to Life?
            </h2>
          </div>

          {/* 2-Column Card Body: 3D PC Screen on Left, Form on Right */}
          <div className="vision-card-body">
            
            {/* 3D PC Screen Column: Fixed in position, tilts in 3D following mouse pointer */}
            <div className="vision-pc-col">
              <div 
                ref={pcScreenRef}
                className="pc-3d-wrapper"
              >
                {/* 3D Monitor Chassis */}
                <div className="pc-monitor">
                  {/* Monitor Top Bezel with Webcam Sensor */}
                  <div className="pc-bezel-top">
                    <span className="pc-webcam" />
                  </div>

                  {/* Monitor Screen Glass */}
                  <div className="pc-screen-glass">
                    {/* Screen Glare Layer */}
                    <div className="pc-glare" />

                    {/* Big DP Logo Display */}
                    <div className="pc-screen-display">
                      <div className="pc-logo-ambient-glow" />
                      <img 
                        src="/dplogo.png" 
                        alt="dp Design Studio" 
                        className="pc-big-screen-logo" 
                      />
                    </div>
                  </div>

                  {/* Monitor Bottom Chin with Brand & Power LED */}
                  <div className="pc-bezel-bottom">
                    <span className="pc-brand">DP // DESIGN STUDIO</span>
                    <span className="pc-power-led" />
                  </div>
                </div>

                {/* 3D Monitor Stand Neck & Base */}
                <div className="pc-stand-neck" />
                <div className="pc-stand-base">
                  <div className="pc-stand-bevel" />
                </div>
                <div className="pc-desk-shadow" />
              </div>
            </div>

            {/* Right Column: Form or Success Confirmation */}
            <div className="vision-form-col">
              {submitted ? (
                <div className="vision-success-card">
                  <div className="vision-success-icon-wrap">
                    <CheckCircle2 size={54} className="vision-success-icon" />
                  </div>
                  <h3 className="vision-success-title">Thank You, {formData.name || 'Friend'}!</h3>
                  <p className="vision-success-desc">
                    Your consultation request has been received directly by Director &amp; Registered Architect Prasad Perera. 
                    Our studio will review your site and contact you at <strong>{formData.phone || formData.email}</strong> within 24 business hours.
                  </p>
                  <div className="vision-success-call">
                    <span>Prefer immediate phone discussion?</span>
                    <a href="tel:1300373374" className="vision-direct-phone-link">
                      <PhoneCall size={14} />
                      <span>Call 1300 373 374</span>
                    </a>
                  </div>
                  <button 
                    className="vision-reset-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="vision-form" onSubmit={handleSubmit}>
                  
                  <div className="vision-inputs-grid">
                    {/* 1. Name */}
                    <div className="vision-field">
                      <label htmlFor="vision-name">Name *</label>
                      <input
                        id="vision-name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* 2. Phone */}
                    <div className="vision-field">
                      <label htmlFor="vision-phone">Phone *</label>
                      <input
                        id="vision-phone"
                        type="tel"
                        required
                        placeholder="0400 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* 3. Email */}
                    <div className="vision-field full-col">
                      <label htmlFor="vision-email">Email Address *</label>
                      <input
                        id="vision-email"
                        type="email"
                        required
                        placeholder="name@example.com.au"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* 4. Message */}
                    <div className="vision-field full-col">
                      <label htmlFor="vision-message">Tell Us About Your Project *</label>
                      <textarea
                        id="vision-message"
                        required
                        rows={3}
                        placeholder="Describe your property, goals (e.g. new home, renovation, DA approval, budget, timeframe)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="vision-submit-row">
                    <button type="submit" className="vision-submit-btn">
                      <span>Submit Consultation Request</span>
                      <Send size={15} />
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

          {/* Quick Studio Coordinates Ribbon */}
          <div className="vision-coords-ribbon">
            <div className="coord-item">
              <PhoneCall size={15} className="coord-icon" />
              <span>Direct Hotline:</span>
              <a href="tel:1300373374">1300 373 374</a>
            </div>
            <div className="coord-divider">•</div>
            <div className="coord-item">
              <Mail size={15} className="coord-icon" />
              <span>Studio:</span>
              <a href="mailto:admin@dpdesignstudio.com.au">admin@dpdesignstudio.com.au</a>
            </div>
            <div className="coord-divider">•</div>
            <div className="coord-item">
              <MapPin size={15} className="coord-icon" />
              <span>Parramatta, Sydney NSW</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default VisionToLifeContact;
