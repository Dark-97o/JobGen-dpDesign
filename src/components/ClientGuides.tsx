import './ClientGuides.css';

export function ClientGuides() {
  const guides = [
    {
      category: 'ARCHITECTURAL DESIGN & DRAFTING',
      readTime: '6 MIN READ',
      title: 'The Complete Guide to Architectural Design & Drafting for Sydney Homeowners',
      excerpt: 'Understand how zoning envelopes, FSR ratios, shadow diagrams, and site slope influence your custom home design. Learn when a DA is mandatory versus fast-tracked CDC approvals.',
      author: 'Prasad Perera (NSW ARB #12156)',
      date: 'SYDNEY PLANNING EDITION'
    },
    {
      category: 'KITCHEN PLANNING',
      readTime: '5 MIN READ',
      title: 'Kitchen Design Guide: How to Plan a Functional, Beautiful & Cost-Effective Kitchen',
      excerpt: 'From the ergonomic work triangle to specifying porcelain versus natural stone benchtops. Practical trade guidance on cabinetry durability, butler’s pantries, and multi-tier lighting.',
      author: 'DP Design Studio Team',
      date: 'INTERIOR ARCHITECTURE'
    },
    {
      category: 'BATHROOM SANCTUARIES',
      readTime: '4 MIN READ',
      title: 'Bathroom Design Guide: Creating a Functional, Spa-Inspired Haven',
      excerpt: 'Essential advice on AS 3740 waterproofing, continuous under-tile drainage falls, silent ventilation extraction, and choosing between freestanding sculptural baths and walk-in showers.',
      author: 'DP Design Studio Team',
      date: 'RESIDENTIAL RENOVATIONS'
    }
  ];

  return (
    <section id="blogs" className="guides-section architect-grid-bg section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="guides-head">
          <div>
            <span className="arch-tag">ARCHITECTURAL INSIGHTS & JOURNAL // SYDNEY</span>
            <h2 className="guides-title">
              Client Design Guides & Practical Advice
            </h2>
            <p className="guides-intro">
              Authored by NSW Registered Architect Prasad Perera to help Sydney homeowners 
              navigate building codes, layout planning, and construction budgeting with clarity.
            </p>
          </div>
          <a href="#contact" className="btn-outline guides-view-btn">
            <span>Book 15-Min Free Q&A Call</span>
            <span>↗</span>
          </a>
        </div>

        {/* Guides Grid */}
        <div className="guides-grid">
          {guides.map((g, idx) => (
            <article key={idx} className="guide-card double-bezel">
              <div className="double-bezel-inner guide-card-inner">
                <div className="guide-meta-top">
                  <span className="guide-cat">{g.category}</span>
                  <span className="guide-time">{g.readTime}</span>
                </div>
                <h3 className="guide-card-title">{g.title}</h3>
                <p className="guide-card-excerpt">{g.excerpt}</p>
                <div className="guide-card-footer">
                  <div className="guide-author-info">
                    <span className="author-tag">{g.author}</span>
                    <span className="date-tag">{g.date}</span>
                  </div>
                  <a href="#contact" className="guide-read-link">
                    <span>Read Overview</span>
                    <span className="read-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
