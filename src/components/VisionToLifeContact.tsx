import { useState, type FormEvent } from 'react';
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="vision-contact-section section-padding">
      <div className="container vision-container">
        
        {/* Main Card Container */}
        <div className="vision-form-card">
          
          {/* Header */}
          <div className="vision-header text-center">
            <span className="vision-eyebrow">DP DESIGN STUDIO // OBLIGATION-FREE CONSULTATION</span>
            <h2 className="vision-title">
              Ready to Bring Your Architectural Vision to Life?
            </h2>
            <p className="vision-lead">
              Start with a free phone consultation and speak with DP Design Studio about your project. 
              There is no obligation. Just an honest conversation about what may be possible for your site, lifestyle and budget.
            </p>
          </div>

          {/* Form or Success Confirmation */}
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
                    rows={4}
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
