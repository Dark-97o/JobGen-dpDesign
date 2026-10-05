import { useState } from 'react';
import './FAQSection.css';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. What is included in architectural design services?',
      a: 'Our architectural design service is completely comprehensive. It includes the initial feasibility and site analysis, concept design sketches, photorealistic 3D models, complete architectural drafting for Development Application (DA) or Complying Development Certificate (CDC), coordination of structural engineering, BASIX certificates, finishes schedules, and turnkey construction management via Daylo Build Pty Ltd.'
    },
    {
      q: '2. Do I need an architect for my renovation or extension?',
      a: 'Yes. While basic draftspersons only draw lines, a Registered Architect (NSW ARB #12156) brings deep knowledge of spatial flow, solar orientation, ventilation, building physics, and planning law. Having a Registered Architect ensures that second-storey additions, kitchen/bathroom alterations, or heritage works not only pass council smoothly but add substantial long-term market value to your home.'
    },
    {
      q: '3. What is the difference between a DA and a CDC in NSW?',
      a: 'A Development Application (DA) is lodged directly with your municipal council (e.g., City of Parramatta, Cumberland, Hills Shire) and is evaluated under local environmental plans. A Complying Development Certificate (CDC) is a fast-track pathway certified by an accredited Private Certifier under the NSW State Environmental Planning Policy (SEPP), requiring around 20-30 days if your design complies with all state standards.'
    },
    {
      q: '4. What types of architectural projects can DP Design Studio manage?',
      a: 'We manage bespoke single and double-storey custom residences, duplexes and dual occupancy developments, townhouses, granny flats, second-storey additions, turnkey luxury kitchen and bathroom renovations, Specialist Disability Accommodation (SDA) and SIL homes for NDIS participants, as well as medical clinics and commercial interior fit-outs.'
    },
    {
      q: '5. How much do architectural design services cost?',
      a: 'We pride ourselves on honesty, integrity, and absolute cost clarity—no grey areas, no surprises. Our architectural design and approval fees are customized based on the scale of your development, site complexity, and whether you require concept design only or full turnkey design-and-construct services with Daylo Build. We provide itemized quotes tailored to your real budget.'
    },
    {
      q: '6. How do I get started with DP Design Studio?',
      a: 'Getting started is simple. Contact our team by calling 1300 373 374, emailing admin@dpdesignstudio.com.au, or submitting our online contact form. We will schedule a 15-minute obligation-free phone consultation directly with Director and Registered Architect Prasad Perera to review your site, requirements, and next steps.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container-narrow">
        
        {/* Header */}
        <div className="faq-head text-center">
          <span className="arch-tag">FREQUENTLY ASKED QUESTIONS // CLEAR GUIDANCE</span>
          <h2 className="faq-title">
            Architectural Design FAQs. <br />
            <span className="gold-gradient-text">Everything You Need to Know.</span>
          </h2>
          <p className="faq-intro">
            Have questions about planning approvals, architects versus draftspeople, or construction budgets? 
            Here are direct answers from our registered architectural practice.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item double-bezel ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="double-bezel-inner faq-item-inner">
                  <div className="faq-question-row">
                    <h3 className="faq-question-text">{faq.q}</h3>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="faq-footer-callout">
          <span>Have a specific site query or council question?</span>
          <a href="#contact" className="btn-gold faq-callout-btn">
            <span>Ask Prasad Perera (15-Min Free Call)</span>
            <span className="btn-gold-icon">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
