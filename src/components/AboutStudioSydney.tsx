import './AboutStudioSydney.css';

export function AboutStudioSydney() {
  return (
    <section className="about-studio-section" id="about" aria-label="About dp Design Studio, Sydney">
      {/* Background Image: dpabout in /public */}
      <div className="about-studio-bg-wrapper">
        <img 
          src="/dpabout.jpg" 
          alt="dp Design Studio Sydney Architecture and Living Spaces" 
          className="about-studio-bg-image" 
        />
        <div className="about-studio-readability-scrim"></div>
      </div>

      {/* Spacious 2-Column Layout: Text on Left, Floating Frame Image on Right */}
      <div className="container about-studio-container">
        <div className="about-studio-grid">
          
          {/* Left Column: Pure Dark Text */}
          <div className="about-studio-text-col">
            <h2 className="about-studio-title">
              <span className="about-studio-dp-circle">dp</span>
              <span className="about-studio-title-rest"> Design Studio, Sydney</span>
            </h2>

            <p className="about-studio-lead">
              dp Design Studio offers a comprehensive architectural and interior design solution tailored for Sydney living. Whether you are seeking refined design for a brand new custom build, a full residence renovation, luxury kitchen and bathroom revitalisation, or a secondary dwelling such as a granny flat, our practice delivers complete spatial excellence.
            </p>

            <p className="about-studio-subtext">
              Our vision encompasses both internal and external environments. We shape harmonious outdoor spaces featuring tailored landscaping, custom pools, pergolas, and alfresco living zones engineered to integrate effortlessly with your home architecture.
            </p>
          </div>

          {/* Right Column: Floating Frame Image (No card enclosure) */}
          <div className="about-studio-media-col">
            <img 
              src="/frame.png" 
              alt="dp Design Studio Architecture Showcase" 
              className="about-studio-frame-img" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
