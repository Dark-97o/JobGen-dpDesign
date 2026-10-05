import { useState, useEffect } from 'react';
import { X, Calendar, Clock, BookOpen, ArrowRight, Tag } from 'lucide-react';
import './LatestArticles.css';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imgUrl: string;
  content: {
    lead: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string[];
      subsections?: {
        subheading: string;
        text: string;
      }[];
      bullets?: string[];
    }[];
  };
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'bathroom-guide',
    title: 'Bathroom Design Guide: How to Create a Functional and Relaxing Bathroom Space',
    category: 'Bathroom Design',
    date: 'Aug 24, 2026',
    readTime: '11 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/14-Bathroom-Renovations-1.jpg',
    content: {
      lead: 'A well-designed bathroom should make everyday routines easier while providing a comfortable place to slow down and unwind. Achieving both requires more than choosing attractive tiles and fixtures. Thoughtful bathroom design considers layout, storage, lighting, ventilation, waterproofing and the way each person will use the room.',
      keyTakeaways: [
        'A well designed bathroom starts with understanding how the space will be used and who will use it each day.',
        'Smart layout planning improves comfort by creating better circulation, storage, privacy and wet zone control.',
        'Lighting, ventilation and waterproofing should be planned early because they affect safety, durability and everyday comfort.',
        'The best bathroom designs balance practical function with calming finishes to create a space that works well and feels relaxing.'
      ],
      sections: [
        {
          heading: 'Start With How the Bathroom Will Be Used',
          body: [
            'Every bathroom serves a slightly different purpose. A family bathroom may need to accommodate children and several users each morning, while an ensuite may prioritise privacy, storage and a calmer atmosphere.',
            'Understanding how the room will actually be used provides a foundation for every design decision that follows.'
          ],
          subsections: [
            {
              subheading: 'Identify the Main Users',
              text: 'Think about who regularly uses the bathroom and what they need from it. A family may benefit from generous storage and a bath, while a couple may prefer a larger walk-in shower and double vanity. Guest bathrooms and powder rooms generally have fewer storage requirements, allowing available space to be used differently.'
            },
            {
              subheading: 'Consider Morning and Evening Routines',
              text: 'Daily routines can reveal where the existing bathroom causes frustration. If two people regularly get ready at the same time, separate grooming areas or additional vanity space may improve functionality. Consider how users move between the shower, vanity and storage areas rather than treating each fixture independently.'
            },
            {
              subheading: 'Think About Future Needs',
              text: 'Bathroom renovations are long-term investments. Features such as step-free showers, clear circulation and easily accessible storage can improve everyday comfort now while also supporting changing needs later.'
            }
          ]
        },
        {
          heading: 'Plan the Bathroom Layout Before Choosing Fixtures',
          body: [
            'The layout determines whether a bathroom feels spacious and intuitive or cramped and awkward.',
            'Before choosing a bath or vanity, consider the dimensions of the room, door swings, windows, existing plumbing and available wall space.'
          ],
          subsections: [
            {
              subheading: 'Create Clear Circulation',
              text: 'Users should be able to enter and move around comfortably without squeezing between fixtures. Allow enough room around the vanity, toilet and shower doors for natural movement. Poor circulation can make even a large bathroom feel smaller than it is.'
            },
            {
              subheading: 'Position the Vanity for Everyday Convenience',
              text: 'The vanity is one of the most frequently used areas. It should be easy to access without blocking the main circulation path. In smaller spaces, a compact or floating vanity can provide the necessary functionality while preserving more visible floor area.'
            },
            {
              subheading: 'Give the Toilet Enough Privacy',
              text: 'Where the layout allows, avoid making the toilet the first fixture visible when entering the room. In an ensuite, thoughtful placement can also provide greater privacy from the adjoining bedroom.'
            },
            {
              subheading: 'Separate Wet and Dry Zones',
              text: 'Grouping the shower and bath into a wet zone can help organise the room and protect vanity areas from unnecessary moisture, making cleaning easier and helping the bathroom feel more structured.'
            }
          ]
        },
        {
          heading: 'Decide Whether You Really Need a Bath',
          body: [
            'A bathtub can be valuable, but it should not be included simply because it is expected.',
            'Families with young children may find a bath particularly useful. However, if a bath is rarely used, allocating that space to a larger walk-in shower may provide more everyday value and create room for better storage.'
          ],
          bullets: [
            'Freestanding baths create a strong sculptural focal point but require adequate perimeter cleaning space.',
            'Built-in baths make highly efficient use of tight corners and alcoves.',
            'Shower-over-bath configurations can work well in compact family bathrooms where dual functionality is strictly needed.'
          ]
        },
        {
          heading: 'Design the Shower Around Comfort and Access',
          body: [
            'The shower is often used more frequently than any other major bathroom fixture, so comfort, drainage, and access should be top priorities.',
            'Walk-in showers create cleaner sightlines and provide easier access. Frameless glass screens reduce visual barriers, helping the room feel expansive.'
          ],
          bullets: [
            'Plan drainage and floor falls early to coordinate seamlessly with AS 3740 waterproofing membranes.',
            'Incorporate recessed wall niches to keep shampoos and soaps off the floor without cluttering the shower enclosure.',
            'Combine a ceiling-mounted rain showerhead with an adjustable handheld wand for maximum versatility.'
          ]
        },
        {
          heading: 'Lighting, Ventilation and Waterproofing Standards',
          body: [
            'Layered lighting is critical: position vertical sconces at eye level around vanity mirrors to avoid harsh facial shadows, and use indirect warm LED lighting (2700K–3000K) for relaxed evening soaks.',
            'Effective mechanical exhaust ventilation sized for the room volume prevents mould and condensation issues before they degrade wall linings.',
            'Treat waterproofing as a non-negotiable structural foundation. Waterproofing membranes, floor wastes, and screed falls must work together as one verified system.'
          ]
        }
      ]
    }
  },
  {
    id: 'kitchen-guide',
    title: 'Kitchen Design Guide: How to Plan a Functional, Beautiful and Cost-Effective Kitchen',
    category: 'Kitchen Renovations',
    date: 'Aug 11, 2026',
    readTime: '11 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/08-Kitchen-Renovations-–-1.jpg',
    content: {
      lead: 'A successful kitchen needs to do more than look good. It should support the way you cook, store food, entertain and move through the space every day. Whether you are renovating an existing home or planning a new build, professional kitchen design can help bring layout, storage, appliances, materials and budget together before construction begins.',
      keyTakeaways: [
        'A successful kitchen should be planned around daily use before choosing colours, finishes or premium materials.',
        'The right layout, workflow and clearances help make the kitchen easier to cook in, move through and share.',
        'Smart storage, appliance planning and layered lighting improve function while helping control renovation costs.',
        'Professional kitchen design helps align layout, materials, budget and 3D planning before construction begins.'
      ],
      sections: [
        {
          heading: 'Start With How You Actually Use Your Kitchen',
          body: [
            'Before choosing cabinetry colours or benchtop materials, think about how your household uses the kitchen.',
            'A family that prepares several meals each day will have different storage and preparation requirements from someone who mainly uses the kitchen for light cooking and entertaining. Everyday activities should shape the design brief.'
          ],
          subsections: [
            {
              subheading: 'Identify Everyday Kitchen Activities',
              text: 'Consider how many people cook together, where groceries are unpacked, and whether the island needs to accommodate dining, homework, or laptop work.'
            },
            {
              subheading: 'Plan for Long-Term Household Evolution',
              text: 'A kitchen renovation is a major long-term asset. Ensure accessibility, wide walkways (minimum 1000mm–1200mm clearances), and accessible lower drawers that support changing needs over decades.'
            }
          ]
        },
        {
          heading: 'Choose a Layout That Fits the Space',
          body: [
            'The best kitchen layout responds directly to room dimensions, structural walls, and connections to dining and living areas.'
          ],
          bullets: [
            'One-Wall Kitchens: Ideal for apartments and narrow footprints, relying on high-efficiency full-height vertical joinery.',
            'Galley Kitchens: Parallel benches providing high culinary efficiency and direct line of sight.',
            'L-Shaped Kitchens: Versatile open-corner configuration that integrates naturally with adjacent dining rooms.',
            'Island & Peninsula Kitchens: Centres of family life and social gathering that require adequate surrounding clearance.'
          ]
        },
        {
          heading: 'Plan Kitchen Workflow and Ergonomic Clearances',
          body: [
            'While the classic work triangle (cooktop, sink, refrigerator) remains an essential benchmark, contemporary kitchens operate around dedicated functional zones: food storage, wet preparation, cooking, and plating/serving.',
            'Avoid allowing general household traffic pathways to cut across the cooktop and prep island. Ensure dishwashers and ovens can open fully without colliding with opposite drawers or blocking passageways.'
          ]
        },
        {
          heading: 'Storage, Cabinetry and Butler’s Pantry Planning',
          body: [
            'Drawers outperform traditional cupboards for base cabinetry because their full contents can be seen from above without bending and rummaging.',
            'Before committing floor space to a separate butler’s pantry, evaluate whether that square meterage would create more daily value if integrated into a wider, more expansive main kitchen with a concealed breakfast appliance station.'
          ],
          bullets: [
            'Full-height pantry cabinets with internal pull-out wire baskets or timber drawers.',
            'Durable engineered quartz, porcelain, or natural stone benchtops selected for stain and thermal resistance.',
            'Heavy-duty soft-close drawer runners (e.g. Blum hardware) engineered for lifetime reliability.'
          ]
        },
        {
          heading: 'Lighting, Ventilation and Electrical Layout',
          body: [
            'Implement task illumination under overhead cabinets directly over the worktop, combined with dimmable ceiling downlights and warm statement pendant lights over the kitchen island.',
            'Specify powerful rangehood extraction vented externally to eliminate cooking fumes, oil droplets, and steam, preserving indoor air quality in open-plan homes.'
          ]
        }
      ]
    }
  },
  {
    id: 'arch-drafting-guide',
    title: 'The Complete Guide to Architectural Design & Drafting for Sydney Homeowners',
    category: 'Architectural Design',
    date: 'Aug 04, 2026',
    readTime: '9 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/06-Architectural-services-1.jpg',
    content: {
      lead: 'Planning a new home, renovation or extension can feel exciting, but the process becomes more complex once planning controls, consultants and construction requirements enter the picture. Professional architectural design gives Sydney homeowners a structured path from the first idea to an approved, buildable home. It combines creative thinking, site analysis, practical space planning and accurate documentation.',
      keyTakeaways: [
        'Architectural design helps Sydney homeowners turn ideas into practical plans that suit the site, budget and lifestyle needs.',
        'Accurate drafting turns the design into clear drawings for approvals, pricing and construction.',
        'Site analysis, planning controls, BASIX and consultant coordination are essential for avoiding delays and costly redesigns.',
        'Working with a registered architect provides stronger design direction and better project coordination from concept to completion.'
      ],
      sections: [
        {
          heading: 'What Is Architectural Design & Drafting?',
          body: [
            'Architectural design develops the layout, form, character and performance of a building. For a residential project, it means turning the homeowner’s goals into a spatial solution that responds to the household, property, budget and local planning controls.',
            'Architectural drafting converts those design decisions into precision scaled drawings that certifiers, council planners, structural engineers, builders and trades can construct without ambiguity.'
          ],
          bullets: [
            'Site plans, demolition plans, and existing-condition surveys',
            'Proposed floor plans, roof geometries, elevations, and structural building sections',
            'Precise dimensions, finished floor levels (FFL), and construction specifications',
            'Schedules for windows, external doors, joinery, and internal finishes'
          ]
        },
        {
          heading: 'Understanding Your Site and Council Planning Controls',
          body: [
            'Every Sydney property has distinct opportunities and constraints. A licensed land survey establishes exact boundary lines, ground contour levels, neighbouring windows, mature trees, and Sydney Water drainage easements.',
            'Local Environmental Plans (LEPs) and Development Control Plans (DCPs) differ significantly across Sydney councils (e.g. City of Parramatta, Cumberland, Hills Shire). Factors like Floor Space Ratio (FSR), building height limits, front/rear setbacks, and solar overshadowing angles must be calculated during early concept modeling.'
          ]
        },
        {
          heading: 'Navigating the Approval Pathway: DA vs CDC',
          body: [
            'Residential projects in NSW typically proceed via either a Complying Development Certificate (CDC) or a Development Application (DA).',
            'Complying Development (CDC) combines planning and building approval through a fast-tracked private certifier path, provided the design satisfies every quantitative standard in the State Environmental Planning Policy (SEPP).',
            'Development Applications (DA) are assessed through local council when the site conditions, heritage overlays, or architectural aspirations require site-specific merit assessment.'
          ]
        },
        {
          heading: 'BASIX Energy Commitments & Consultant Coordination',
          body: [
            'In NSW, the Building Sustainability Index (BASIX) sets statutory targets for water conservation, greenhouse gas emissions, and thermal performance.',
            'Orientation, eaves shading, double-glazed window specifications, and cross-ventilation reduce reliance on artificial heating and cooling while ensuring compliance with stringent 7-Star NatHERS energy benchmarks.'
          ],
          bullets: [
            'Structural & Stormwater Civil Engineering',
            'Geotechnical soil testing and wastewater management',
            'Registered certifier and BASIX energy thermal modelling'
          ]
        },
        {
          heading: 'From Concept to Construction Documentation',
          body: [
            'Detailed construction drawings protect your investment. When builders have comprehensive junction details, waterproofing notes, and joinery schedules, they provide realistic, fixed-price tenders without unexpected variation claims during construction.',
            'dp Design Studio provides end-to-end guidance from preliminary sketch design through council lodgement to construction delivery across Sydney.'
          ]
        }
      ]
    }
  }
];

export function LatestArticles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Close modal with ESC key & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };

    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  return (
    <section id="articles" className="articles-section">
      <div className="container articles-container">
        
        {/* Section Header: ONLY the headline */}
        <div className="articles-header-minimal headline-watermark-wrapper">
          <span className="headline-watermark-text is-dark" aria-hidden="true">Latest Articles</span>
          <h2 className="articles-title">Latest Articles</h2>
        </div>

        {/* 3 Cards: Card 1 Up, Card 2 Slightly Down, Card 3 Up
            Card Content: Headline, Date Posted, Read Time, and Type */}
        <div className="articles-grid-staggered">
          {ARTICLES_DATA.map((article, idx) => (
            <article 
              key={article.id} 
              className={`article-card article-card-pos-${idx + 1}`}
              onClick={() => setSelectedArticle(article)}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${article.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedArticle(article);
              }}
            >
              <div className="article-card-inner">
                {/* Thumbnail Image with Category Badge */}
                <div className="article-image-wrap">
                  <img 
                    src={article.imgUrl} 
                    alt={article.title} 
                    className="article-thumb"
                    loading="lazy"
                  />
                  <span className="article-cat-badge">
                    <Tag size={11} className="badge-tag-icon" />
                    {article.category}
                  </span>
                </div>

                {/* Card Content: ONLY Date Posted, Read Time, and Headline */}
                <div className="article-card-body">
                  <div className="article-meta-row">
                    <span className="article-date">
                      <Calendar size={13} className="meta-icon" />
                      <span>{article.date}</span>
                    </span>
                    <span className="meta-dot">•</span>
                    <span className="article-read-time">
                      <Clock size={13} className="meta-icon" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="article-heading">
                    {article.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Pop-up Screen / Modal with Full Readable Article */}
      {selectedArticle && (
        <div 
          className="article-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
        >
          <div className="article-modal-container">
            {/* Modal Close Button */}
            <button 
              className="article-modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article modal"
            >
              <X size={22} />
            </button>

            {/* Modal Article Content */}
            <div className="article-modal-scroll">
              
              {/* Article Hero Banner */}
              <div className="article-modal-hero">
                <img 
                  src={selectedArticle.imgUrl} 
                  alt={selectedArticle.title} 
                  className="article-modal-img" 
                />
                <div className="article-modal-hero-scrim"></div>
                <div className="article-modal-hero-badge">
                  <span>{selectedArticle.category}</span>
                </div>
              </div>

              <div className="article-modal-body">
                {/* Meta Header */}
                <div className="modal-meta-strip">
                  <span className="modal-author">Published by {selectedArticle.author}</span>
                  <span className="meta-dot">•</span>
                  <span>{selectedArticle.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h1 id="modal-article-title" className="modal-article-heading">
                  {selectedArticle.title}
                </h1>

                {/* Lead Statement */}
                <p className="modal-article-lead">
                  {selectedArticle.content.lead}
                </p>

                {/* Key Takeaways Callout Box */}
                <div className="modal-takeaways-card">
                  <div className="takeaways-header">
                    <BookOpen size={18} className="takeaways-icon" />
                    <h3>Key Takeaways</h3>
                  </div>
                  <ul>
                    {selectedArticle.content.keyTakeaways.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                {/* Formatted Sections with Exact Body and Subsections */}
                <div className="modal-sections-wrap">
                  {selectedArticle.content.sections.map((sec, i) => (
                    <section key={i} className="modal-section-block">
                      <h2 className="modal-section-title">{sec.heading}</h2>
                      
                      {sec.body.map((p, pIdx) => (
                        <p key={pIdx} className="modal-section-p">{p}</p>
                      ))}

                      {sec.subsections && (
                        <div className="modal-subsections-list">
                          {sec.subsections.map((sub, sIdx) => (
                            <div key={sIdx} className="modal-sub-block">
                              <h3 className="modal-sub-title">{sub.subheading}</h3>
                              <p className="modal-sub-p">{sub.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.bullets && (
                        <ul className="modal-bullets-list">
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="modal-cta-box">
                  <div>
                    <h4>Planning a Sydney Architectural Project?</h4>
                    <p>Speak directly with Registered Architect Prasad Perera to discuss site feasibility, design options, and council approvals.</p>
                  </div>
                  <a href="#contact" className="modal-cta-btn" onClick={() => setSelectedArticle(null)}>
                    <span>Book Free Consultation</span>
                    <ArrowRight size={15} />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default LatestArticles;
