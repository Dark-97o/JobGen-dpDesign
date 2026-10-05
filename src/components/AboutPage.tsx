import { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  Check, 
  Award,
  ChevronRight,
  HardHat
} from 'lucide-react';
import { VisionToLifeContact } from './VisionToLifeContact';
import { ContactModal } from './ContactModal';
import { MeetTheArchitect } from './MeetTheArchitect';
import './AboutPage.css';

interface AboutPageProps {
  onNavigateHome?: () => void;
}

export function AboutPage({ onNavigateHome }: AboutPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="about-page">
      {/* ── SECTION 1: ABOUT US HERO (USING /page.mp4 & STREAMLINED TEXT) ── */}
      <section className="about-hero-section" id="about-intro">
        {/* Cinematic Background Video using page.mp4 */}
        <div className="about-hero-video-wrap">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="about-hero-video"
          >
            <source src="/page.mp4" type="video/mp4" />
          </video>
          <div className="about-hero-scrim" />
        </div>
        
        <div className="container about-container about-hero-container">
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

          <div className="about-hero-content-clean">
            <h1 className="about-hero-title">
              About <span className="title-gold-accent">Us</span>
            </h1>

            <p className="about-hero-lead">
              DP Design Studio is a boutique Sydney interior design studio and architectural services provider delivering bespoke solutions for new builds, renovations, and outdoor spaces. We create personalised living environments that reflect your unique style and support the way you live.
            </p>

            <div className="about-hero-actions">
              <button 
                type="button"
                className="about-primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book A Free Phone Consultation</span>
                <ArrowRight size={16} className="btn-icon" />
              </button>

              <a href="tel:1300373374" className="about-secondary-phone-btn">
                <PhoneCall size={16} />
                <span>1300 373 374</span>
              </a>
            </div>

            <div className="about-hero-credentials-row">
              <div className="hero-cred-item">
                <Award size={15} className="hero-cred-icon" />
                <span>NSW ARB Registered Architects #12156</span>
              </div>
              <div className="hero-cred-item">
                <ShieldCheck size={15} className="hero-cred-icon" />
                <span>Licensed Builders Lic. #492271C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: MEET THE ARCHITECT (LIGHT THEME + BLACK HOUSE SKETCH ON RIGHT + NO BOX ON PHOTO) ── */}
      <MeetTheArchitect variant="light" />

      {/* ── SECTION 3: OUR PLANNING IS THOUGHTFUL (USING /house.mp4 + DPABOUT AS FADED BG BEHIND TEXT + 45° SLANTED SEPARATION) ── */}
      <section className="about-planning-slanted-section" id="thoughtful-planning">
        <div className="planning-slanted-wrapper">
          
          {/* Left Half: White Area with dpabout.jpg faded behind text */}
          <div className="planning-left-white">
            <div className="planning-dpabout-bg-overlay" aria-hidden="true" />
            <div className="planning-white-inner">
              <h2 className="about-section-heading">
                Our planning is thoughtful, giving you a unique living space where you can bond with your family.
              </h2>

              <p className="about-body-paragraph">
                We believe working in a way that’s cost effective for you. It’s not all about the money, but the reward of appreciation that comes from delivering a top-class service every time.
              </p>

              <p className="about-body-paragraph">
                To find out how dp Design Studio can transform your home, call us today on <a href="tel:1300373374" className="inline-gold-link">1300 373 374</a>, or fill in our contact form.
              </p>

              <div className="planning-key-points">
                <div className="point-row">
                  <div className="point-check-wrap"><Check size={14} /></div>
                  <span>Bespoke spatial flow designed around your everyday lifestyle</span>
                </div>
                <div className="point-row">
                  <div className="point-check-wrap"><Check size={14} /></div>
                  <span>Transparent budget guidance with no hidden variations</span>
                </div>
                <div className="point-row">
                  <div className="point-check-wrap"><Check size={14} /></div>
                  <span>Passive solar orientation &amp; timeless architectural finishes</span>
                </div>
              </div>

              <div className="planning-cta-row">
                <button 
                  type="button"
                  className="about-primary-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book A Free Phone Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Half: Looping house.mp4 Video with 45 Degree Slanted Separation */}
          <div className="planning-right-video-half">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="planning-bg-video"
            >
              <source src="/house.mp4" type="video/mp4" />
            </video>
            <div className="planning-video-overlay" />
            <div className="slanted-separator-line" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* ── SECTION 4: DP DESIGN STUDIO SERVICES (DARK THEME BAND WITH DP LOGO) ── */}
      <section className="about-services-band-section" id="services-scope">
        <div className="container about-container">
          <div className="services-band-inner">
            <div className="services-band-header compact-header">
              <h2 className="about-section-heading compact-heading services-title-with-logo">
                <img src="/dplogo.png" alt="dp" className="services-inline-dp-logo" />
                <span>Design Studio Services</span>
              </h2>
              <p className="services-band-lead compact-lead">
                Whether you want a home designed from scratch or a renovation tailored to your lifestyle, <strong className="gold-text-emphasis">DP Design Studio — a Sydney interior design studio &amp; architectural services firm — has you covered</strong>.
              </p>
            </div>

            <div className="services-band-grid compact-grid">
              <div className="services-band-col">
                <p>
                  Our process begins by getting to know you and understanding what you want from your space. From there, we initiate the design and investigation phases, obtain all relevant permits, carefully select trusted tradespeople, and project manage every detail through to completion — including a follow-up after the work is done.
                </p>
              </div>
              <div className="services-band-col">
                <p>
                  As a Sydney interior design studio &amp; architectural services provider, our goal is to deliver cost-effective solutions that align with your budget. Using high-quality materials and creative inspiration, we ensure your renovation or new build exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CHOOSE DP DESIGN STUDIO FOR YOUR NEXT PROJECT (BAND WITH IMAGE FADING FROM LEFT, JUST TEXT ON RIGHT — NO CONTAINER) ── */}
      <section className="about-choose-band-section" id="choose-dp-design">
        {/* Left Image Fading Throughout Toward the Right Side */}
        <div className="choose-band-bg-image-wrapper">
          <img 
            src="/about-choose.jpg" 
            alt="Choose dp Design Studio for your next architectural project" 
            className="choose-band-bg-img"
          />
          <div className="choose-band-gradient-fade" />
        </div>

        <div className="container about-container choose-band-container">
          {/* JUST TEXT — NO BOXED CONTAINER */}
          <div className="choose-band-pure-text-right">
            <h2 className="about-section-heading">
              Choose dp Design Studio for Your Next Project
            </h2>

            <p className="choose-text-paragraph">
              DP Design Studio is a Sydney interior design studio &amp; architectural services provider offering unique design solutions for new builds and renovations. Imagine having everything on your wish list incorporated into a space that’s beautiful, functional, and tailored to your lifestyle — from open-plan living to maximising air and light in your home.
            </p>

            <p className="choose-text-paragraph">
              With deep expertise and honest, client-first communication, we find innovative ways to make your home stand out. Our meticulous planning ensures clarity, and our cost-effective quotes are based on your real needs — no grey areas, no surprises.
            </p>

            <p className="choose-text-highlight">
              So, when you want a team who thinks outside the box and delivers with care, call DP Design Studio on <a href="tel:1300373374" className="inline-gold-link">1300 373 374</a> or fill in our contact form.
            </p>

            <div className="choose-band-actions">
              <button 
                type="button"
                className="about-primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book A Free Phone Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: OUR BUILDING & CONSTRUCTION ARM (COMPACT RIBBON) ── */}
      <section className="about-compact-construction-section" id="building-arm">
        <div className="container about-container">
          <div className="compact-bca-card">
            
            <div className="compact-bca-header">
              <div className="compact-bca-badge">
                <HardHat size={16} className="compact-bca-badge-icon" />
                <span>NSW LICENSED BUILDER // LICENCE NO. 492271C</span>
              </div>
              <h2 className="compact-bca-title">Our Building &amp; Construction Arm</h2>
              <span className="compact-bca-subtitle">From design to delivery, under one roof</span>
            </div>

            <div className="compact-bca-body">
              <p className="compact-bca-desc">
                The building and construction arm of <strong>dp Design Studio Pty Ltd</strong> is <strong>DAYLO BUILD PTY LTD</strong> (NSW Builder Licence No. 492271C). Your project moves from concept through to construction with one unified team accountable for the outcome—no gaps, no finger-pointing.
              </p>
              
              <div className="compact-bca-quote">
                “I am proud to serve as Director of both dp Design Studio Pty Ltd and DAYLO BUILD PTY LTD.”
                <span className="quote-author">— Prasad Perera (NSW ARB #12156, Builder #492271C)</span>
              </div>
            </div>

            <div className="compact-bca-actions">
              <button 
                type="button"
                className="compact-bca-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={15} />
              </button>
              <a href="tel:1300373374" className="compact-bca-call-btn">
                <PhoneCall size={14} />
                <span>1300 373 374</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: READY TO BRING YOUR VISION TO LIFE FORM CONTAINER ── */}
      <VisionToLifeContact />

      {/* Interactive Consultation Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
