import { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  Layers, 
  Award,
  ChevronRight
} from 'lucide-react';
import { VisionToLifeContact } from './VisionToLifeContact';
import { ContactModal } from './ContactModal';
import './AboutPage.css';

interface AboutPageProps {
  onNavigateHome?: () => void;
}

export function AboutPage({ onNavigateHome }: AboutPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="about-page">
      {/* ── SECTION 1: ABOUT US HERO & ETHOS ── */}
      <section className="about-hero-section" id="about-intro">
        <div className="about-hero-pattern" aria-hidden="true" />
        
        <div className="container about-container">
          {/* Breadcrumb Navigation */}
          <nav className="about-breadcrumbs" aria-label="Breadcrumbs">
            <button 
              type="button" 
              onClick={onNavigateHome}
              className="breadcrumb-home-link"
            >
              Home
            </button>
            <ChevronRight size={13} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">About Us</span>
          </nav>

          <div className="about-hero-grid">
            <div className="about-hero-content">
              <div className="about-eyebrow-pill">
                <span className="eyebrow-dot" />
                <span>DP DESIGN STUDIO PTY LTD // NSW ARB #12156</span>
              </div>

              <h1 className="about-hero-title">
                About <span className="title-gold-accent">Us</span>
              </h1>

              <p className="about-hero-lead">
                DP Design Studio is a Sydney interior design studio and architectural services provider delivering bespoke solutions for new builds, renovations, and outdoor spaces. With an innovative and client-focused approach, we create personalised spaces and environments that challenge convention, reflect your unique style, and support the way you live or work.
              </p>

              <div className="about-hero-actions">
                <button 
                  type="button"
                  className="about-primary-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book A Free Phone Consultation Today</span>
                  <ArrowRight size={16} className="btn-icon" />
                </button>

                <a href="tel:1300373374" className="about-secondary-phone-btn">
                  <PhoneCall size={16} />
                  <span>1300 373 374</span>
                </a>
              </div>

              <div className="about-credentials-strip">
                <div className="cred-badge">
                  <Award size={15} className="cred-icon" />
                  <span>NSW ARB Registered Architects #12156</span>
                </div>
                <div className="cred-badge">
                  <ShieldCheck size={15} className="cred-icon" />
                  <span>Licensed Builders #492271C</span>
                </div>
              </div>
            </div>

            {/* Ethos Monolith Card */}
            <div className="about-ethos-card">
              <div className="ethos-card-header">
                <span className="ethos-tag">STUDIO PHILOSOPHY</span>
                <span className="ethos-code">SEC // 01</span>
              </div>

              <blockquote className="ethos-quote">
                “dp Design Studio is a client-focused boutique high-quality architectural and interior design firm, that creates sustainable living spaces which match your expectations and budget.”
              </blockquote>

              <div className="ethos-divider" />

              <p className="ethos-specialisations">
                We specialise and focus on architectural design + drafting + council or CDC approvals + interior + project management for Medical Centres, NDIS homes, SILL homes, Day respite centres, Single or two storey residential, duplex, town houses, granny flats and all other commercial or residential interiors.
              </p>

              <p className="ethos-refinement">
                As a Sydney interior design studio &amp; architectural services firm, we pride ourselves on delivering personalised designs that blend form, function, and timeless aesthetic.
              </p>

              <div className="ethos-footer-note">
                <CheckCircle2 size={16} className="ethos-check-icon" />
                <span>Don’t hesitate to contact dp Design Studio Pty Ltd, if you need any assistance with your building needs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OUR PLANNING IS THOUGHTFUL ── */}
      <section className="about-planning-section" id="thoughtful-planning">
        <div className="container about-container">
          <div className="about-planning-grid">
            
            {/* Left Content Column */}
            <div className="about-planning-text-col">
              <div className="section-index-pill">
                <span className="index-number">02</span>
                <span className="index-label">FAMILY LIVING &amp; SPATIAL HARMONY</span>
              </div>

              <h2 className="about-section-heading">
                Our planning is thoughtful, giving you a unique living space where you can bond with your family.
              </h2>

              <p className="about-body-paragraph">
                We believe working in a way that’s cost effective for you. It’s not all about the money, but the reward of appreciation that comes from delivering a top-class service every time.
              </p>

              <p className="about-body-paragraph">
                To find out how dp Design Studio can transform your home, call us today on <a href="tel:1300373374" className="inline-gold-link">1300 373 374</a>, or fill in our contact form.
              </p>

              <div className="planning-benefits-list">
                <div className="benefit-item">
                  <div className="benefit-bullet"><Check size={14} /></div>
                  <div>
                    <strong>Tailored Spatial Circulation</strong>
                    <p>Designed around daily family routines, maximizing sunlight, acoustics, and open-plan flow.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-bullet"><Check size={14} /></div>
                  <div>
                    <strong>Transparent Cost Control</strong>
                    <p>Disciplined budgeting with honest material schedules—eliminating unexpected variations.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-bullet"><Check size={14} /></div>
                  <div>
                    <strong>Lifelong Sustainability</strong>
                    <p>Passive solar orientation and durable finishes that retain value for generations to come.</p>
                  </div>
                </div>
              </div>

              <div className="about-section-action">
                <button 
                  type="button"
                  className="about-primary-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book A Free Phone Consultation Today</span>
                  <ArrowRight size={16} className="btn-icon" />
                </button>
              </div>
            </div>

            {/* Right Visual Column: Framed Photography */}
            <div className="about-planning-media-col">
              <div className="architectural-media-frame">
                <span className="frame-corner frame-tl" />
                <span className="frame-corner frame-tr" />
                <span className="frame-corner frame-bl" />
                <span className="frame-corner frame-br" />

                <img 
                  src="/about-family.jpg" 
                  alt="Thoughtful family living spaces by dp Design Studio" 
                  className="framed-feature-img"
                  loading="lazy"
                />

                <div className="media-frame-caption">
                  <span className="caption-tag">PORTFOLIO // RESIDENTIAL LIVING</span>
                  <span className="caption-title">Warm Architectural Living Environments</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: DP DESIGN STUDIO SERVICES ── */}
      <section className="about-services-section" id="services-scope">
        <div className="container about-container">
          
          <div className="services-header-split">
            <div className="services-header-text">
              <div className="section-index-pill">
                <span className="index-number">03</span>
                <span className="index-label">CORE ARCHITECTURAL SCOPE</span>
              </div>
              <h2 className="about-section-heading">dp Design Studio Services</h2>
              <p className="services-lead-text">
                Whether you want a home designed from scratch or a renovation tailored to your lifestyle, <strong className="gold-text-emphasis">DP Design Studio — a Sydney interior design studio &amp; architectural services firm — has you covered</strong>.
              </p>
            </div>

            <div className="services-header-callout">
              <span className="callout-eyebrow">OUR COMMITMENT</span>
              <h3 className="callout-heading">We can help you to achieve your dream.</h3>
              <p className="callout-desc">
                From initial site investigation through DA / CDC permits, trade selection, and build supervision, we stay with you every step of the journey.
              </p>
            </div>
          </div>

          {/* Narrative Process Split */}
          <div className="services-narrative-card">
            <div className="narrative-col">
              <p>
                Our process begins by getting to know you and understanding what you want from your space. From there, we initiate the design and investigation phases, obtain all relevant permits, carefully select trusted tradespeople, and project manage every detail through to completion — including a follow-up after the work is done.
              </p>
            </div>
            <div className="narrative-col">
              <p>
                As a Sydney interior design studio &amp; architectural services provider, our goal is to deliver cost-effective solutions that align with your budget. Using high-quality materials and creative inspiration, we ensure your renovation or new build exceeds expectations.
              </p>
            </div>
          </div>

          {/* Services Hero Feature Image */}
          <div className="services-feature-visual">
            <div className="architectural-media-frame">
              <span className="frame-corner frame-tl" />
              <span className="frame-corner frame-tr" />
              <span className="frame-corner frame-bl" />
              <span className="frame-corner frame-br" />
              <img 
                src="/about-services.jpg" 
                alt="Kitchen Design and Renovation by dp Design Studio" 
                className="framed-feature-img wide-banner"
                loading="lazy"
              />
              <div className="media-frame-caption">
                <span className="caption-tag">INTEGRATED INTERIOR ARCHITECTURE</span>
                <span className="caption-title">Custom Kitchens, Living Reconfigurations &amp; Luxury Joinery</span>
              </div>
            </div>
          </div>

          {/* 3 Pillar Cards */}
          <div className="about-service-pillars-grid">
            
            {/* Pillar 1: Architectural Design */}
            <div className="service-pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Compass size={22} />
                </div>
                <span className="pillar-number">01</span>
              </div>
              <h3 className="pillar-title">Architectural Design</h3>
              <p className="pillar-body">
                Your dreams are our vision. At dp Design Studio, we get to know and understand you, your project, and your site. Our complete, bespoke service includes an investigation and design process, as well as obtaining all the relevant permits. Next, we pull together a team to execute your project, helping you achieve the home you have always desired.
              </p>
              <div className="pillar-footer">
                <span className="pillar-tag">Site Feasibility</span>
                <span className="pillar-tag">Council DA / CDC</span>
                <span className="pillar-tag">Bespoke Homes</span>
              </div>
            </div>

            {/* Pillar 2: Kitchen Design */}
            <div className="service-pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Layers size={22} />
                </div>
                <span className="pillar-number">02</span>
              </div>
              <h3 className="pillar-title">Kitchen Design</h3>
              <p className="pillar-body">
                Kitchens need to be functional as well as aesthetically pleasing. No matter how much space you have available, dp Design Studio can create a high-quality kitchen that works for you. With a kitchen that flows and is a pleasure to behold, you will enjoy it for many years to come.
              </p>
              <div className="pillar-extra-note">
                Our complete kitchen renovations include design, demolition, installation, and management of all associated trades.
              </div>
              <div className="pillar-footer">
                <span className="pillar-tag">Stone Islands</span>
                <span className="pillar-tag">Custom Joinery</span>
                <span className="pillar-tag">Turnkey Trades</span>
              </div>
            </div>

            {/* Pillar 3: Bathroom Design */}
            <div className="service-pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Sparkles size={22} />
                </div>
                <span className="pillar-number">03</span>
              </div>
              <h3 className="pillar-title">Bathroom Design</h3>
              <p className="pillar-body">
                Today’s bathrooms reflect our lifestyle and are an integral part of our homes. dp Design Studio can help you create a functional space, where you can relax at the end of a busy day. From the smallest powder room to the largest high-end bathroom, clean straight lines and uncluttered counter spaces will transform the look. We provide a haven you’ll want to spend pampering time in.
              </p>
              <div className="pillar-footer">
                <span className="pillar-tag">Spa Sanctuaries</span>
                <span className="pillar-tag">AS 3740 Waterproofing</span>
                <span className="pillar-tag">Walk-in Showers</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 4: CHOOSE DP DESIGN STUDIO FOR YOUR NEXT PROJECT ── */}
      <section className="about-choose-section" id="choose-dp-design">
        <div className="container about-container">
          <div className="about-choose-grid">
            
            {/* Visual Column on Left */}
            <div className="about-choose-media-col">
              <div className="architectural-media-frame">
                <span className="frame-corner frame-tl" />
                <span className="frame-corner frame-tr" />
                <span className="frame-corner frame-bl" />
                <span className="frame-corner frame-br" />

                <img 
                  src="/about-choose.jpg" 
                  alt="Choose dp Design Studio for your next architectural project" 
                  className="framed-feature-img"
                  loading="lazy"
                />

                <div className="media-frame-caption">
                  <span className="caption-tag">PRECISION PLANNING &amp; DELIVERY</span>
                  <span className="caption-title">From Wishlist to Physical Reality</span>
                </div>
              </div>
            </div>

            {/* Text Column on Right */}
            <div className="about-choose-text-col">
              <div className="section-index-pill">
                <span className="index-number">04</span>
                <span className="index-label">CLIENT-FIRST COLLABORATION</span>
              </div>

              <h2 className="about-section-heading">
                Choose dp Design Studio for Your Next Project
              </h2>

              <p className="about-body-paragraph">
                DP Design Studio is a Sydney interior design studio &amp; architectural services provider offering unique design solutions for new builds and renovations. Imagine having everything on your wish list incorporated into a space that’s beautiful, functional, and tailored to your lifestyle — from open-plan living to maximising air and light in your home.
              </p>

              <p className="about-body-paragraph">
                With deep expertise and honest, client-first communication, we find innovative ways to make your home stand out. Our meticulous planning ensures clarity, and our cost-effective quotes are based on your real needs — no grey areas, no surprises.
              </p>

              <div className="choose-highlight-quote">
                <p>
                  So, when you want a team who thinks outside the box and delivers with care, call DP Design Studio on <a href="tel:1300373374" className="inline-gold-link">1300 373 374</a> or fill in our contact form.
                </p>
              </div>

              <div className="about-choose-action">
                <button 
                  type="button"
                  className="about-primary-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book A Free Phone Consultation Today</span>
                  <ArrowRight size={16} className="btn-icon" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR BUILDING & CONSTRUCTION ARM ── */}
      <section className="about-construction-arm-section" id="building-arm">
        <div className="container about-container">
          <div className="bca-architectural-card">
            <div className="bca-card-glow" aria-hidden="true" />
            
            <div className="bca-card-content">
              
              <div className="bca-top-badge">
                <div className="bca-shield-box">
                  <ShieldCheck size={18} />
                </div>
                <span>NSW LICENSED BUILDER // LICENCE NO. 492271C</span>
              </div>

              <h2 className="bca-card-title">Our Building &amp; Construction Arm</h2>
              <p className="bca-card-subtitle">From design to delivery, under one roof</p>

              <div className="bca-body-grid">
                <div className="bca-info-block">
                  <p className="bca-main-statement">
                    The building and construction arm of <strong>dp Design Studio Pty Ltd</strong> is <strong>DAYLO BUILD PTY LTD</strong>, a licensed building company operating under <strong>NSW Builder Licence No. 492271C</strong> for residential and commercial construction works.
                  </p>
                  
                  <p className="bca-sub-statement">
                    This means your project can move from concept and council approvals through to construction with one team accountable for the outcome, no gaps, no finger-pointing between designer and builder.
                  </p>
                </div>

                <div className="bca-quote-box">
                  <div className="bca-quote-dot" />
                  <p className="bca-quote-text">
                    “I am proud to serve as Director of both dp Design Studio Pty Ltd and DAYLO BUILD PTY LTD.”
                  </p>
                  <div className="bca-director-info">
                    <strong>Prasad Perera</strong>
                    <span>Director // Registered Architect NSW ARB #12156 // Licensed Builder #492271C</span>
                  </div>
                </div>
              </div>

              <div className="bca-card-cta">
                <button 
                  type="button"
                  className="bca-consultation-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book a Free Phone Consultation Today</span>
                  <ArrowRight size={16} />
                </button>
                <a href="tel:1300373374" className="bca-phone-link">
                  <PhoneCall size={15} />
                  <span>Call Direct: 1300 373 374</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: READY TO BRING YOUR VISION TO LIFE FORM ── */}
      <VisionToLifeContact />

      {/* Interactive Consultation Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
