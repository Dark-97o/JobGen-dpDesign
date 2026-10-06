import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Calendar, Clock, BookOpen, ArrowRight, ArrowLeft, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
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
    id: 'renovation-design-brief',
    title: 'What to Include in a Renovation Design Brief Before Speaking to a Designer',
    category: 'Architectural Design',
    date: 'Sep 29, 2026',
    readTime: '7 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/05-1.jpg',
    content: {
      lead: 'Walking into a first design meeting with a clear brief makes the conversation far more productive. It gives the designer a solid understanding of what you want, what you have and what you can spend, which helps professional architectural design services give more accurate advice from the start.',
      keyTakeaways: [
        'A clear design brief helps a designer understand your goals, household, site and budget from the first conversation.',
        'The most useful briefs separate must-haves from nice-to-haves and explain what the existing home does well and badly.',
        'Budget, planning controls and timing should be considered early because they shape what is realistic.',
        'A brief should stay flexible, giving the designer a strong starting point rather than a fixed plan.'
      ],
      sections: [
        {
          heading: 'What a Renovation Design Brief Is and Why It Helps',
          body: [
            'A design brief is a short document that sets out what you want to achieve, how you live, what the project needs to deliver and the limits it must work within. It does not need to be formal or technical. A few pages written in plain language is usually enough.',
            'A good brief saves time. It reduces the back-and-forth in early meetings, helps the designer test ideas against real priorities and lowers the risk of redesign later.',
            'It also needs to stay flexible. The brief is a starting point, and early advice about the site, planning controls or budget may change parts of it. What matters is that you begin from clear information.'
          ]
        },
        {
          heading: 'Start With Why You Are Renovating',
          body: [
            'Before listing rooms and features, explain the problem the project needs to solve. You might need more space, a better layout, more natural light, repairs to an ageing home or a house that suits a changing household.',
            'Being clear about the reason helps the designer propose the right type of solution. A cramped kitchen might call for a focused renovation, while a house that no longer has enough bedrooms may point towards an addition.',
            'Also note how you will judge success. Do you want a home that feels brighter, works better for a growing family or is easier to maintain? These outcomes guide every later decision.'
          ]
        },
        {
          heading: 'Describe How Your Household Lives Day to Day',
          body: [
            'A designer can only plan a home that suits you if they understand how you use it. Describe who lives in the house, how many people are home during the week and what a typical day looks like.',
            'Think about routines such as morning rush hours, cooking, homework, working from home and weekend entertaining. Mention pets, hobbies, visiting family and anything that places demands on the space.',
            'Then describe where the current home falls short. Perhaps the kitchen is cut off from the living area, the laundry is too small or there is nowhere to drop bags and shoes. Everyday frustrations are often more useful to a designer than a list of room sizes.'
          ]
        },
        {
          heading: 'Separate Your Must-Haves From Your Nice-to-Haves',
          body: [
            'Almost every renovation involves trade-offs, so the brief should show what matters most. Write a list of the features and spaces you need, then split it into essentials and extras.',
            'An essential might be a fourth bedroom, a larger kitchen or a second bathroom. A nice-to-have might be a pantry, a study nook or an outdoor kitchen. If the budget becomes tight, this list helps the designer protect what counts.',
            'Include practical needs as well as spaces. Storage, natural light, privacy, indoor-outdoor connection and parking can all shape the design.'
          ]
        },
        {
          heading: 'Share a Realistic Budget and What It Needs to Cover',
          body: [
            'A budget range allows the designer to propose ideas that suit your situation. Without one, concepts may be too ambitious or too limited.',
            'Think about what the budget needs to cover. Construction is only part of the cost. Design fees, surveys, engineering, approvals, certification, consultant reports and finishes may also need to be included. Allowing a contingency for unexpected issues can reduce pressure if hidden conditions appear during building.',
            'It also helps to say where you would spend more and where you would save. Sharing this early helps the designer allocate effort and cost with purpose.'
          ]
        },
        {
          heading: 'Explain What You Already Have and Where the Problems Are',
          body: [
            'Tell the designer about the existing home, including what works well. Some features may be worth keeping, such as good ceiling heights, original details or a well-placed living area.',
            'Then note the problems: leaks, damp, cracking, poor ventilation, dark rooms, outdated wiring or a layout that does not flow. Photos and short notes can help, especially if the issues affect how much of the house can be retained.',
            'Gather any documents you already have, such as previous plans, survey information, building reports or council paperwork.'
          ]
        },
        {
          heading: 'Consider the Site and Planning Controls Early',
          body: [
            'The property itself influences what is possible. Orientation, slope, boundaries, neighbouring homes, views and access all affect the design, and they can influence where light enters and where extensions can go.',
            'Planning controls matter too. Zoning, setbacks, height limits, heritage provisions and flood or bushfire overlays can all affect how much you can build. Projects typically follow either a Development Application (DA) or a Complying Development Certificate (CDC).'
          ]
        },
        {
          heading: 'Collect Inspiration That Shows Your Style',
          body: [
            'Images help communicate what words cannot. Collect photos of kitchens, bathrooms, façades, colour schemes, materials and furniture that appeal to you.',
            'For each image, note what you like about it: the warm timber, the large window, the simple joinery or the way the space feels open. Equally, note what you dislike.'
          ]
        }
      ]
    }
  },
  {
    id: 'bathroom-lighting-design',
    title: 'Bathroom Lighting Design: How to Balance Task, Mood and Natural Light',
    category: 'Bathroom Design',
    date: 'Sep 21, 2026',
    readTime: '8 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/18-Bathroom-Designs-1.jpg',
    content: {
      lead: 'A bathroom has to work hard in the morning and slow down at night. Good lighting supports both, which is why planning it early as part of professional bathroom design services can make the room easier to use and more comfortable to be in.',
      keyTakeaways: [
        'A well-lit bathroom needs bright, clear light for grooming and softer light for relaxing, so one ceiling fitting is rarely enough.',
        'Natural light should be considered first, with artificial lighting planned around it and privacy resolved at the same time.',
        'Layered lighting, suitable colour temperature and dimmers let the room adapt from morning routines to evening baths.',
        'Lighting positions are best decided with the layout, before wiring, waterproofing and tiling begin.'
      ],
      sections: [
        {
          heading: 'Why Bathroom Lighting Needs to Do Two Jobs',
          body: [
            'Most people ask two things of their bathroom. In the morning, they want clear light for shaving, skincare, makeup and getting ready. In the evening, they want something softer that helps them wind down.',
            'A single central light cannot do both well. It tends to cast shadows across the face, leave corners dim and feel harsh when you simply want to relax.',
            'The better approach is to think in terms of purpose: decide where you need strong, accurate light, where you want gentle background light and how those settings will change through the day.'
          ]
        },
        {
          heading: 'Start With Natural Light and Plan Artificial Light Around It',
          body: [
            'Daylight is the most pleasant light a bathroom can have, so it makes sense to start there. Windows, highlight windows and skylights all change how bright the room feels, and the direction they face affects how that light behaves through the day.',
            'Artificial lighting should support daylight rather than compete with it. If the room is bright in the morning, you may only need focused light at the mirror. If it is dark for most of the day, you will need more ambient light to keep the space comfortable.'
          ]
        },
        {
          heading: 'Balance Daylight With Privacy',
          body: [
            'Natural light is only useful if you feel comfortable using it. Bathrooms often face neighbouring windows, side fences or streets, so privacy has to be resolved alongside brightness.',
            'Frosted or textured glass lets light in while softening views. A high window can bring in daylight without exposing the room, and a skylight can help where wall space is limited.',
            'Think about sight lines at different times of day: a window that feels private in daylight may become more visible at night once internal lights are on.'
          ]
        },
        {
          heading: 'Build Bathroom Lighting in Three Layers',
          body: [
            'Layering is what makes bathroom lighting flexible. Each layer has a different purpose, and together they let the room adapt.',
            'Task lighting provides clear light where you need to see detail, such as at the vanity, in the shower and around the toilet. Ambient lighting gives general illumination so you can move around safely without harsh contrast. Accent lighting adds depth by softly highlighting a feature such as a recessed niche, textured tile or a freestanding bath.'
          ]
        },
        {
          heading: 'Light the Vanity and Mirror for Clear, Shadow-Free Results',
          body: [
            'The vanity is the most important task area in the bathroom, and it is also where poor lighting is most noticeable. A single downlight above the mirror often creates shadows under the eyes and chin, which makes grooming harder.',
            'Lighting from both sides of the mirror, or an evenly backlit mirror, usually provides more flattering and accurate light across the face. If side lighting is not possible, lights positioned above and in front of the user can help reduce shadows.',
            'Mirror position and height also matter. Glare can occur when a fitting reflects directly in the glass or sits too close to a glossy surface.'
          ]
        },
        {
          heading: 'Plan Shower and Bath Lighting for Safety and Comfort',
          body: [
            'Wet areas call for even, comfortable light. A shower that is too dark can feel unsafe, while a bright spotlight directly overhead can be uncomfortable when you look up.',
            'Soft, evenly spread light helps you see the floor, taps and steps without creating glare. Fittings near wet areas must comply with AS 3000 electrical safety and IP ratings and be installed by a licensed electrician.'
          ]
        },
        {
          heading: 'Choose Colour Temperature and Quality of Light With Care',
          body: [
            'The colour of light changes how a bathroom feels. Warmer light (2700K–3000K) tends to feel relaxing and suits ambient and accent layers, while neutral light (3500K–4000K) gives a cleaner look for grooming and cleaning.',
            'Consistency is important. Mixing very different colour temperatures makes the room look patchy. Good colour rendering (CRI 90+) ensures skin tones, makeup and tile finishes look natural.'
          ]
        },
        {
          heading: 'Use Dimmers and Separate Circuits to Set the Mood',
          body: [
            'Dimmers and separate switching turn a well-lit bathroom into an adaptable sanctuary. Instead of choosing between fully on and fully off, you can set the light for the moment.',
            'A practical setup includes bright task lighting at the mirror for morning routines, a softer ambient setting for evening baths, and a low night setting for late trips to the bathroom.'
          ]
        }
      ]
    }
  },
  {
    id: 'renovate-extend-or-rebuild',
    title: 'How to Choose Between Renovating, Extending or Rebuilding Your Home',
    category: 'Architectural Design',
    date: 'Sep 14, 2026',
    readTime: '10 min read',
    author: 'dp Design Studio',
    imgUrl: 'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/15-Alterations-and-Additions-1-1.jpg',
    content: {
      lead: 'Deciding whether to renovate, extend or rebuild is one of the biggest choices a Sydney homeowner will face. The right answer depends on your existing home, site, budget and household needs rather than on which option sounds most appealing.',
      keyTakeaways: [
        'The right choice depends on your existing home, site, budget and household needs rather than on which option sounds most appealing.',
        'Structure, planning controls and the approval pathway should be checked early because they can narrow your options before design begins.',
        'Costs go well beyond construction, so demolition, approvals, consultants and temporary accommodation need to be part of the comparison.',
        'Early feasibility and concept design let you test all three options on your actual site before committing to one.'
      ],
      sections: [
        {
          heading: 'What Renovating, Extending and Rebuilding Actually Involve',
          body: [
            'A renovation improves the existing home within its current footprint. It may involve reconfiguring rooms, updating a kitchen or bathroom, improving finishes or opening up internal walls.',
            'An extension adds floor area to the home you already have. This might be a rear extension, a side addition or a second-storey addition.',
            'A knockdown rebuild removes the existing home and replaces it with a new one on the same land, offering the greatest freedom in layout, sustainability and technology.'
          ]
        },
        {
          heading: 'Assess What You Already Have Before Choosing a Path',
          body: [
            'Before comparing options, take a close look at the house itself. The structure and foundations matter most, followed by the roof, plumbing and electrical infrastructure.',
            'Then assess how the home performs day to day: solar orientation, thermal comfort, room connectivity and storage. A building inspection or condition report is a practical first step.'
          ]
        },
        {
          heading: 'Check What Sydney Planning Controls Allow on Your Site',
          body: [
            'Your property’s planning controls determine what is possible. Zoning, setbacks, building height, floor space ratio (FSR), landscaped area requirements and heritage overlays differ across Sydney councils.',
            'A Section 10.7 planning certificate is a useful starting point because it shows the statutory planning controls and constraints that apply to the land.'
          ]
        },
        {
          heading: 'DA or CDC: How the Approval Pathway Shapes Your Options',
          body: [
            'Most residential projects proceed through either a Development Application (DA) or a Complying Development Certificate (CDC).',
            'The pathway affects timing, flexibility and design. A CDC can be more streamlined if the design satisfies every state planning policy rule. A DA is required when site-specific merit assessment or heritage approval is needed.',
            'BASIX sustainability benchmarks also apply to new homes and major additions in NSW.'
          ]
        },
        {
          heading: 'When Renovating Is the Right Call',
          body: [
            'Renovating usually suits homes with a sound structure and a layout that can be improved without major structural shifts. It is also suitable where planning controls or budgets restrict new building footprint.',
            'A focused renovation delivers big improvements with less disruption, allowing households to stage the work or remain in the home during construction.'
          ]
        },
        {
          heading: 'When an Extension Makes More Sense',
          body: [
            'An extension suits a home that works well in part but no longer has enough space for a growing family. A ground-floor extension can improve indoor-outdoor living, while a first-floor addition preserves backyard space.',
            'The success of an extension depends on how well new and existing zones connect in terms of circulation, natural light, and roof geometry.'
          ]
        },
        {
          heading: 'When a Knockdown Rebuild Is Worth Considering',
          body: [
            'A rebuild becomes worth considering when the existing home is severely limiting what the site can offer due to foundation movement, poor orientation, or costly termite damage.',
            'It can also make sense when the land value significantly outstrips the existing home, or when you want an architecturally bespoke, 7-star NatHERS energy-efficient home.'
          ]
        },
        {
          heading: 'What Each Option Really Costs Beyond Construction',
          body: [
            'Construction is only one part of the budget. Demolition, asbestos removal, service disconnections, survey fees, engineering reports, council development contributions and temporary rent must be included.',
            'The most useful comparison is the crossover point, where the cost of complex structural alterations approaches the cost of starting fresh with new construction.'
          ]
        }
      ]
    }
  },
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
              text: 'Think about who regularly uses the bathroom and what they need from it. A family may benefit from generous storage and a bath, while a couple may prefer a larger walk-in shower and double vanity.'
            },
            {
              subheading: 'Consider Morning and Evening Routines',
              text: 'Daily routines can reveal where the existing bathroom causes frustration. If two people regularly get ready at the same time, separate grooming areas or additional vanity space may improve functionality.'
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
              text: 'Users should be able to enter and move around comfortably without squeezing between fixtures. Allow enough room around the vanity, toilet and shower doors for natural movement.'
            },
            {
              subheading: 'Position the Vanity for Everyday Convenience',
              text: 'The vanity is one of the most frequently used areas. It should be easy to access without blocking the main circulation path. In smaller spaces, a compact or floating vanity preserves floor area.'
            },
            {
              subheading: 'Give the Toilet Enough Privacy',
              text: 'Where the layout allows, avoid making the toilet the first fixture visible when entering the room.'
            },
            {
              subheading: 'Separate Wet and Dry Zones',
              text: 'Grouping the shower and bath into a wet zone can help organise the room and protect vanity areas from unnecessary moisture.'
            }
          ]
        },
        {
          heading: 'Decide Whether You Really Need a Bath',
          body: [
            'A bathtub can be valuable, but it should not be included simply because it is expected.',
            'Families with young children may find a bath particularly useful. However, if a bath is rarely used, allocating that space to a larger walk-in shower may provide more everyday value.'
          ],
          bullets: [
            'Freestanding baths create a strong sculptural focal point but require perimeter cleaning clearance.',
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
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Check scroll boundary state
  const updateScrollState = useCallback(() => {
    const el = scrollTrackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Small 4px threshold for rounding errors
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);

    // Calculate approximate active card index for indicator
    if (clientWidth > 0) {
      const cardEl = el.firstElementChild as HTMLElement | null;
      const cardWidth = cardEl ? cardEl.getBoundingClientRect().width + 32 : clientWidth / 3;
      const curIndex = Math.min(
        ARTICLES_DATA.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      setActiveCardIndex(curIndex);
    }
  }, []);

  useEffect(() => {
    const el = scrollTrackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Smooth scroll left or right
  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollTrackRef.current;
    if (!el) return;
    const cardEl = el.firstElementChild as HTMLElement | null;
    const cardStep = cardEl ? cardEl.getBoundingClientRect().width + 32 : el.clientWidth * 0.75;
    const targetScroll = direction === 'left' ? -cardStep : cardStep;
    el.scrollBy({ left: targetScroll, behavior: 'smooth' });
  };

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
        
        {/* Section Header with Left/Right Navigation Arrows */}
        <div className="articles-header-row">
          <div className="articles-header-minimal headline-watermark-wrapper">
            <span className="headline-watermark-text is-dark" aria-hidden="true">Latest Articles</span>
            <h2 className="articles-title">Latest Articles</h2>
          </div>

          {/* Luxury Arrow Navigation Controls */}
          <div className="articles-nav-controls" role="group" aria-label="Article carousel navigation">
            <button 
              type="button"
              className={`articles-nav-btn ${!canScrollLeft ? 'is-disabled' : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous articles"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              type="button"
              className={`articles-nav-btn ${!canScrollRight ? 'is-disabled' : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next articles"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Wrapper with Floating Side Arrows for Instant Desktop Clicking */}
        <div className="articles-carousel-shell">
          {/* Floating Left Edge Button */}
          <button
            type="button"
            className={`articles-edge-arrow articles-edge-left ${!canScrollLeft ? 'is-hidden' : ''}`}
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            tabIndex={canScrollLeft ? 0 : -1}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Track with Staggered 6 Cards */}
          <div 
            className="articles-carousel-track" 
            ref={scrollTrackRef}
            tabIndex={0}
            role="region"
            aria-label="Articles horizontal slider"
          >
            {ARTICLES_DATA.map((article, idx) => {
              // Rhythmic stagger: 0, +30px, 0, +30px, 0, +30px
              const staggerClass = idx % 2 === 1 ? 'article-card-stagger-down' : 'article-card-stagger-up';
              return (
                <article 
                  key={article.id} 
                  className={`article-card ${staggerClass} article-card-item-${idx + 1}`}
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
              );
            })}
          </div>

          {/* Floating Right Edge Button */}
          <button
            type="button"
            className={`articles-edge-arrow articles-edge-right ${!canScrollRight ? 'is-hidden' : ''}`}
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            tabIndex={canScrollRight ? 0 : -1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Subtle Carousel Progress Dots Indicator */}
        <div className="articles-pagination-dots" aria-hidden="true">
          {ARTICLES_DATA.map((_, i) => (
            <span 
              key={i} 
              className={`articles-dot ${i === activeCardIndex ? 'is-active' : ''}`} 
            />
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
