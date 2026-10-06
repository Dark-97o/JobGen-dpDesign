import { ArrowRight, CheckCircle2, ShieldCheck, Award, Building2, Compass, Sparkles, Scale, Layers } from 'lucide-react';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  onKnowMore?: () => void;
}

export function WhyChooseUs({ onKnowMore }: WhyChooseUsProps) {
  const points = [
    {
      title: 'Fully licensed practising architect firm',
      desc: 'Accredited architectural leadership overseeing all statutory drawings and master specifications.',
      icon: ShieldCheck
    },
    {
      title: 'Registered with NSW Architect Registration Board',
      desc: 'Nominated Architect: Prasad Perera (NSW ARB Reg. #12156). Strictly governed by NSW architectural codes.',
      icon: Award
    },
    {
      title: 'Registered with Australian Institute of Architects',
      desc: 'Active member upholding continuous professional development and peer-reviewed design standards.',
      icon: Building2
    },
    {
      title: 'Sydney-based architectural and interior design expertise',
      desc: 'Deep local knowledge of Greater Sydney councils, topography, coastal conditions, and Heritage DCPs.',
      icon: Compass
    },
    {
      title: 'Client-focused design tailored to lifestyle and budget',
      desc: 'No cookie-cutter templates. Every layout responds directly to your family routines and clear investment goals.',
      icon: CheckCircle2
    },
    {
      title: 'Creative solutions balancing beauty, function, and sustainability',
      desc: 'Passive solar orientation, natural cross-ventilation, and durable material selections for long-term equity.',
      icon: Sparkles
    },
    {
      title: 'End-to-end support from first consultation through to completion',
      desc: 'Seamless collaboration with our associated construction arm, Daylo Build Pty Ltd (Builder Lic. #492271C).',
      icon: Layers
    },
    {
      title: 'Experience across residential and commercial projects',
      desc: 'Custom homes, luxury renovations, granny flats, pools, and commercial shop fit-outs delivered with precision.',
      icon: Scale
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section section-padding">
      <div className="container why-choose-container">
        
        {/* Section Header */}
        <div className="why-choose-header headline-watermark-wrapper">
          <span className="headline-watermark-text" aria-hidden="true">Why Choose Us</span>
          <h2 className="why-choose-title">Why Choose Us?</h2>
        </div>

        {/* Content Split: 8 Points on Left, Visual Media on Right */}
        <div className="why-choose-grid">
          
          {/* Left Column: Points List & Know More Button */}
          <div className="why-choose-left">
            <div className="points-grid">
              {points.map((pt, i) => {
                const IconComponent = pt.icon;
                return (
                  <div key={i} className="point-card">
                    <div className="point-card-header">
                      <IconComponent size={22} className="point-favicon-icon" />
                      <h3 className="point-title">{pt.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button: Know More About Us */}
            <div className="why-choose-action">
              <a 
                href="#about" 
                className="know-more-btn"
                onClick={onKnowMore}
              >
                <span>Know More About Us</span>
                <ArrowRight size={16} className="btn-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frames (50% Width) */}
          <div className="why-choose-right">
            
            <div className="media-frame-wrapper">
              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />
              <div className="media-frame media-frame-top">
                <div className="media-frame-inner">
                  <img 
                    src="https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/16-Shop-Fit-Out-Designs-1.jpg" 
                    alt="DP Design Studio interior architectural design"
                    className="media-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="media-frame-wrapper">
              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />
              <div className="media-frame media-frame-bottom">
                <div className="media-frame-inner">
                  <img 
                    src="https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/06-Architectural-services-1.jpg" 
                    alt="DP Design Studio architectural plans and documentation"
                    className="media-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
