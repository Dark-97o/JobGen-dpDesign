import { useState, useEffect, type FormEvent } from 'react';
import { X, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Architectural Design',
    suburb: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Close on Escape & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.start();
      setSubmitted(false);
    }

    return () => {
      document.body.style.overflow = '';
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="contact-modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultation-title"
    >
      <div className="contact-modal-container" data-lenis-prevent>
        
        {/* Close Button */}
        <button 
          className="contact-modal-close" 
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="contact-modal-header">
          <div className="modal-eyebrow">
            <span className="eyebrow-accent">DP DESIGN STUDIO</span>
            <span className="eyebrow-separator">•</span>
            <span>SYDNEY PRACTICE</span>
          </div>
          <h2 id="modal-consultation-title" className="modal-title">
            Book a Consultation
          </h2>
          <p className="modal-subtitle">
            Schedule an obligation-free discussion directly with Director &amp; Registered Architect Prasad Perera (NSW ARB #12156).
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h3 className="success-heading">Consultation Request Received</h3>
            <p className="success-message">
              Thank you, <strong>{formData.name || 'there'}</strong>. Prasad Perera and our senior architectural team will review your site and contact you at <strong>{formData.phone || formData.email}</strong> within 24 business hours.
            </p>
            <div className="success-direct-call">
              <span>Urgent architectural enquiry?</span>
              <a href="tel:1300373374" className="success-phone-link">
                <PhoneCall size={14} />
                <span>1300 373 374</span>
              </a>
            </div>
            <button className="modal-done-btn" onClick={onClose}>
              Done &amp; Return to Studio
            </button>
          </div>
        ) : (
          <form className="contact-modal-form" onSubmit={handleSubmit}>
            <div className="form-grid-two">
              <div className="form-field">
                <label htmlFor="modal-name">Full Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Johnathan Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="modal-phone">Phone Number *</label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="e.g. 0400 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-two">
              <div className="form-field">
                <label htmlFor="modal-email">Email Address *</label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="e.g. johnathan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="modal-suburb">Project Suburb / LGA</label>
                <input
                  id="modal-suburb"
                  type="text"
                  placeholder="e.g. Parramatta, Box Hill, Hills Shire"
                  value={formData.suburb}
                  onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="modal-service">Scope of Service</label>
              <select
                id="modal-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="Architectural Design">Architectural Design &amp; Master Planning</option>
                <option value="Bespoke Custom Residence">Bespoke Custom Residence</option>
                <option value="Council DA & CDC Approvals">Council DA &amp; CDC Approvals</option>
                <option value="Granny Flat Designs">Granny Flat Designs</option>
                <option value="Alterations & Additions">Alterations &amp; Additions / Renovations</option>
                <option value="Kitchen & Bathroom Design">Kitchen &amp; Bathroom Design</option>
                <option value="Landscape & Pool Designs">Landscape &amp; Pool Designs</option>
                <option value="Commercial & Shop Fit-outs">Commercial &amp; Shop Fit-outs</option>
                <option value="Other Architectural Inquiries">Other Architectural Inquiries</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="modal-message">Project Notes / Site Details (Optional)</label>
              <textarea
                id="modal-message"
                rows={3}
                placeholder="Tell us briefly about your property, timeline, or design aspirations..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Submit Action */}
            <div className="modal-actions">
              <button type="submit" className="modal-submit-btn">
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Direct Phone Assistance */}
            <div className="modal-footer-call">
              <span>Prefer to speak right now?</span>
              <a href="tel:1300373374" className="modal-direct-phone">
                <PhoneCall size={13} />
                <span>Call 1300 373 374</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
