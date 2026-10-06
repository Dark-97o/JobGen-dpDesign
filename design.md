# DP Design Studio — Comprehensive Design System & Page Architecture (DESIGN.md)

> **Document Type:** Master Design System Specification & Full Page Architectural Blueprint  
> **Studio:** DP Design Studio Pty Ltd (Nominated Architect: Prasad Perera, NSW ARB #12156, Daylo Build Pty Ltd Lic. #492271C)  
> **Engineered Stack:** React, TypeScript, Vite, Vanilla CSS Design System, Lenis Smooth Scroll, WebGL2 Fluid Simulation  
> **Design Aesthetic:** High-End Architectural Luxury (Obsidian Monolith, Architectural Gold & Alabaster Paper)

---

## 1. Visual Atmosphere & Philosophy

The DP Design Studio digital experience reflects the dual identity of its founder Prasad Perera: **a registered architect governed by statutory precision, and a licensed builder commanding real-world materiality**. 

The design rejects generic SaaS templates, AI tropes, and pastel cards in favor of a timeless, tactile architectural publication:
- **Density:** *Balanced Editorial* (Scale 5/10) — generous architectural margins, disciplined negative space, and strict typographic hierarchy.
- **Variance:** *Curated Asymmetric* (Scale 7/10) — 45° diagonal cuts, split-screen video/print layouts, and varying card geometry that avoids repetitive "3 equal cards" patterns.
- **Motion:** *Frictionless Physicality* (Scale 6/10) — Lenis inertial scrolling, 36-frame scroll-scrubbed interactive canvas, real-time WebGL2 fluid smoke simulation, and micro-hover edge expansions.

---

## 2. Core Design Tokens & Palette

### 2.1 Color Tokens
The palette is calibrated around raw construction materials: honed limestone, oxidized brass, obsidian stone, and architectural ink.

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `--bg-canvas` | `#FAF9F6` | Primary page canvas: Warm Alabaster / Honed Paper |
| `--bg-surface` | `#FFFFFF` | Elevated card & modal background: Pure Gallery White |
| `--bg-surface-warm` | `#F4F2EC` | Secondary surface: Honed Travertine / Limestone |
| `--bg-dark` | `#08090A` | Monolith surface: Deep Obsidian Black |
| `--bg-dark-surface` | `#111215` | Elevated dark card: Blackened Structural Steel |
| `--gold-primary` | `#C5A059` | Primary metallic accent: Architectural Pure Brass |
| `--gold-light` | `#E0C58A` | Highlighting & hover states: Champagne Gold Foil |
| `--gold-deep` | `#9E7D3B` | Structural shadow & border anchor: Burnished Bronze |
| `--text-primary` | `#0E0F11` | Primary typographic ink: Deep Charcoal Ink |
| `--text-secondary` | `#555A62` | Secondary body & notations: Architectural Drafting Gray |
| `--text-muted` | `#8E9196` | Specifications & watermarks: Blueprint Gray |
| `--text-on-dark` | `#FBFBFA` | Dark mode body & headlines: Pure Alabaster |
| `--border-light` | `rgba(0,0,0,0.08)` | Minimal paper hairlines |
| `--border-gold` | `rgba(197,160,89,0.35)` | Metallic specification borders |

### 2.2 Typographic Architecture
Typographic hierarchy is strictly enforced using three complementary font families:

1. **Display / Headlines — `Cinzel` (`--font-display`):**
   - High-contrast classical serif inspired by Roman architectural inscriptions.
   - Used for hero headlines, section watermark labels, and key editorial titles.
   - Letter-spacing: `-0.025em` to `0.04em`.
2. **Body & Interface — `Plus Jakarta Sans` (`--font-sans`):**
   - Clean, geometric modern grotesque providing optimal legibility.
   - Used for cards, navigation, body copy, and form interfaces.
   - Line-height: `1.5` to `1.65`; max-width constrained to `65ch` for reading comfort.
3. **Drafting & Specifications — `JetBrains Mono` (`--font-mono`):**
   - Monospace precision font simulating architectural blueprint callouts, ARB registration numbers, coordinates, and metric dimensions.
   - Text transform: uppercase; letter-spacing: `0.06em` to `0.18em`.

### 2.3 Surface & Spatial Geometry
- **Frosted Glass Blur:** `rgba(255, 255, 255, 0.58)` with `backdrop-filter: blur(14px)` and `1px` high-contrast border.
- **Machined Radii:** Disciplined radii (`4px` for technical badges, `8px`–`10px` for cards, `50px` for organic pill actions).
- **Architectural Edge Brackets:** `3.5px solid #0E0F11` corner bracket accents (`.frame-corner`) that expand outward on user hover.

---

## 3. Home Page Architecture (`/`)

The home page is an immersive, multi-stage architectural journey introducing clients to DP Design Studio’s spatial authority.

```
[01. Floating Island Navbar]
       │
[02. Cinematic Hero Video & 3-Slide Carousel]
       │
[03. Dark Statutory Accreditation Band (NSW ARB #12156)]
       │
[04. Studio Overview: dp Design Studio, Sydney]
       │
[05. Scroll-Driven 36-Frame Video Scrub (Kitchen → Bathroom)]
       │
[06. Architectural Design & "Everything We Design" Accordion]
       │
[07. Recent Projects Gallery & Categorized Portfolio]
       │
[08. Architectural Design Guides & Reading Modal]
       │
[09. Verified Google Reviews Showcase (78 Reviews)]
       │
[10. Why Choose Us (8 Frosted Cards & Slashed Media Frames)]
       │
[11. Vision to Life Interactive Project Planner]
       │
[12. Architectural Monolith Footer with WebGL2 Smoke]
```

### 3.1 Component Breakdown

#### 1. Navigation Bar (`Navbar`)
- **Structure:** Floating top island with dual visual zones: a statutory top ribbon (`Registered Architects NSW ARB #12156 · AIA Member`) and a main floating pill.
- **Brand Mark:** Clean DP Design Studio emblem paired with Cinzel serif wordmark.
- **Nav Links:** Interactive dropdown menus for Services, Architectural Disciplines, Projects, Guides, and About Us.
- **Call-to-Action:** High-contrast pill button (`Book A Consultation`) triggering the seamless lead intake modal.

#### 2. Hero Section (`Hero`)
- **Visual Foundation:** Compressed full-screen video loop (`/hero.mp4`, 5.1 MB) with high-efficiency H.264 playback and subtle vignette scrim.
- **3-Tab Carousel:** Allows direct navigation across core disciplines:
  1. *Architectural Design:* "Architecture Shaped for Living"
  2. *Kitchen Renovations:* "Best Kitchen Design, Sydney"
  3. *Luxury Bathrooms:* "Bespoke Bathroom Sanctuaries"
- **Interactive Controls:** Active slide indicators, dual scopri pill button (`[SCOPRI DI PIÙ]`), and 8-second auto-advance timer with smooth pause-on-hover.

#### 3. Statutory Accreditation Band (`AccreditationBand`)
- **Atmosphere:** Solid obsidian (`#08090A`) dark band bounded by golden hairline borders (`rgba(197, 160, 89, 0.22)`).
- **Layout:** High-impact horizontal strip:
  - **Left:** DP Design Studio emblem (`84px`) + Cinzel brand typography + discipline notation.
  - **Center:** Hairline vertical divider + concise single-line authority statement:  
    `NSW Architect Registration Board and Australian Institute of Architects.`  
    Direct nomination line: `D. P. Perera is the nominated Architect, registration number 12156.`
  - **Right:** Official credential seals for NSW ARB and AIA (`96px`), unboxed and floating cleanly.

#### 4. Studio Overview (`AboutStudioSydney`)
- **Editorial Presentation:** Split narrative introducing Prasad Perera’s 20+ year legacy across Greater Sydney councils.
- **Blueprint Texture:** Subtle 60px blueprint drafting grid background with floating champagne mist spheres.
- **Key Metric Indicators:** 20+ Years Experience, 78+ Verified 5-Star Reviews, 100% Turnkey Delivery accountability.

#### 5. Video Scrub Showcase (`VideoScrubShowcase`)
- **Technological Highlight:** 36-frame scroll-driven canvas scrubber. As the user scrolls through the 200vh section, the canvas fluidly interpolates from a modern kitchen interior (`frame_000.webp`) to a luxury bathroom sanctuary (`frame_035.webp`).
- **Typography Overlays:** Zero-lag crossfading text cards:
  - *Stage 1:* "Kitchen Design" with a concise 2-line description (*Tailored culinary spaces featuring waterfall natural stone islands, bespoke joinery, concealed storage, and turnkey trade delivery.*).
  - *Stage 2:* "Bathroom Design" with a concise 2-line description (*Private spa sanctuaries with bookmatched porcelain, curbless walk-in showers, freestanding soak tubs, and AS 3740 certified waterproofing.*).
- **Interaction:** Custom pill buttons with diagonal arrow glyphs linking directly to `#kitchens` and `#bathrooms`.

#### 6. Architectural Design & Disciplines (`ArchitecturalDesignSection`)
- **Part 1 — Video Feature & Specification Cards:**
  - Embedded Box Hill contemporary residence tour YouTube video framed with dark architectural borders.
  - Right column features three staggered-width specification cards:
    - `01 / Bespoke Custom Residences`
    - `02 / Statutory Council DA & CDC Approvals`
    - `03 / Architect & Builder Synergy (Daylo Build)`
  - Right-aligned "Explore Designs" pill CTA.
- **Part 2 — "Everything We Design for Your Home" Accordion:**
  - 10 vertical accordion pillars spanning the full container width.
  - Each pillar displays a vertical monospace index (`01`–`10`) and vertical typography.
  - On hover, the active pillar smoothly expands to reveal full-bleed architectural photography, title, and descriptive scope.

#### 7. Project Gallery (`ProjectGallery`)
- **Structure:** Dynamic architectural portfolio showcasing Sydney builds.
- **Filtering System:** Category pills (All, Custom Homes, Renovations, Duplexes, Outdoor Living).
- **Cards:** High-resolution imagery with subtle zoom transforms, architectural category tags, and location metadata.

#### 8. Architectural Design Guides (`LatestArticles`)
- **Curated Reading:** 3 in-depth educational resources (Bathroom Design Guide, Council DA/CDC Navigation, Kitchen Ergonomics).
- **Modal Engine:** Clicking an article opens an in-page distraction-free reading modal with rich formatting, avoiding disjointed page reloads.

#### 9. Verified Client Reviews (`ReviewsSection`)
- **Trust Architecture:** Grid of verified client testimonials citing real Sydney projects (Pymble, Parramatta, Hills District).
- **Visuals:** 5 gold stars, client verification badges, Google review attribution stamps, and project type badges.

#### 10. Why Choose Us (`WhyChooseUs`)
- **Visual Concept:** Asymmetric 50/50 split balancing text authority on the left with tactile photography on the right.
- **Left Column:** 8 enlarged frosted glass cards (`padding: 17px 22px`, `border-radius: 10px`, `border-left: 4px solid var(--gold-primary)`):
  1. *Fully licensed practising architect firm*
  2. *Registered with NSW Architect Registration Board*
  3. *Registered with Australian Institute of Architects*
  4. *Sydney-based architectural and interior design expertise*
  5. *Client-focused design tailored to lifestyle and budget*
  6. *Creative solutions balancing beauty, function, and sustainability*
  7. *End-to-end support from first consultation through to completion*
  8. *Experience across residential and commercial projects*
- **Right Column:** Dual architectural photography frames featuring diagonal corner cuts and outward-extending `3.5px` dark steel corner edge brackets (`.frame-corner`).

#### 11. Vision to Life Interactive Terminal (`VisionToLifeContact`)
- **Interactive Scoping:** Multi-step project builder where clients specify development type (New Custom Home, Renovation, Granny Flat, Duplex), council area, timeline, and estimated investment.
- **Form Interface:** High-contrast dark terminal inputs with floating labels, instant validation, and direct consultation booking.

#### 12. Monolithic Footer (`Footer`)
- **Atmosphere:** Monolithic obsidian base with real-time interactive WebGL2 gold smoke canvas (`FooterSmoke`).
- **Separators:** Gold horizon accent line (`.footer-top-line`) at the very top; clean borderless layout for the bottom bar.
- **Grid Layout (4 Columns):**
  - *Column 1:* Studio brand heading, clean unboxed DP logo mark (`height: 52px`), Parramatta PO Box, combined phone/email row, and official web link.
  - *Column 2 (01 //):* Architectural Services (Architectural Designs, Interior Designs, Survey Plans, Landscape Design).
  - *Column 3 (02 //):* Renovation & Interior (Kitchen Design & Renovation, Bathroom Design & Renovation, Project Management).
  - *Column 4 (03 //):* Studio Directory (Home, About Us, Contact Us) and Sydney Studio Hours capsule with pulsating live green status indicator.
- **Bottom Bar:** Formal copyright, principal nomination line (`Nominated Registered Architect Prasad Perera ARB #12156`), and clean inline JobGen badge.

---

## 4. About Page Architecture (`/about-us`)

The About Page provides deep contextual immersion into the studio’s philosophy, leadership, and construction synergy.

```
[01. About Us Hero with /page.mp4 & Breadcrumb Navigation]
       │
[02. Meet The Architect: Prasad Perera (Light Architectural Blueprint)]
       │
[03. Thoughtful Planning: 45° Slanted Video Split (/house.mp4)]
       │
[04. Studio Services Scope: Compact Dark Band with DP Emblem]
       │
[05. Why Choose DP Design Studio: Gradient Image-to-Text Band]
       │
[06. Building & Construction Arm: DAYLO BUILD Pty Ltd Ribbon]
       │
[07. Vision to Life Contact Planner & Consultation Modal]
       │
[08. Monolithic Footer]
```

### 4.1 Section-by-Section Breakdown

#### 1. About Hero Section (`about-hero-section`)
- **Visual Background:** Full-screen looping video (`/page.mp4`, 5.2 MB) overlaid with a dark gradient scrim (`about-hero-scrim`).
- **Breadcrumbs:** Minimalist navigation (`Home › About Us`) with smooth pushState routing support.
- **Headline:** Bold Cinzel title: `About Us` with gold emphasis on "Us".
- **Mission Statement:** Articulates DP Design Studio’s identity as a boutique Sydney interior and architectural firm.
- **Action Strip:** Dual buttons:
  - *Primary Gold Pill:* `Book A Free Phone Consultation` (triggers modal).
  - *Secondary Glass Pill:* Direct tap-to-call link with phone icon (`1300 373 374`).
- **Credentials Ribbon:** Side-by-side badges verifying NSW ARB #12156 and Builder Licence #492271C.

#### 2. Meet The Architect (`MeetTheArchitect`, Light Variant)
- **Theme:** Pristine gallery light theme with warm travertine accents.
- **Left Column:**
  - Principal profile of Prasad Perera detailing education, NSW ARB #12156 accreditation, and dual architect/builder mastery.
  - Architectural quote on spatial integrity and passive climate design.
  - **Stats Bento Grid:** High-contrast statistics blocks (20+ Years in Practice, 100+ Completed Homes, 100% DA/CDC Approval Rate).
- **Right Column (Drafting Canvas):**
  - Precision architectural portrait of Prasad Perera (`/prasad-perera.png`, 247 KB) rendered as a clean cutout without boxed bezels.
  - Integrated SVG drafting blueprint backdrop featuring technical grid lines, dimension callouts, and an authentic architectural North Arrow symbol.

#### 3. Thoughtful Planning (`about-planning-slanted-section`)
- **Dynamic 45° Slanted Split Screen:**
  - **Left Half (White Editorial):** Soft alabaster canvas with a subtle, faded architectural blueprint overlay (`/dpabout.jpg`).
  - **Heading:** "Our planning is thoughtful, giving you a unique living space where you can bond with your family."
  - **Value Proposition Checklist:** Three gold checkmark points highlighting bespoke spatial flow, transparent budget guidance, and passive solar orientation.
  - **Right Half (Looping Video):** Looping architectural video (`/house.mp4`, 2.7 MB) cut precisely at a 45° diagonal angle with a glowing golden separator hairline (`.slanted-separator-line`).

#### 4. Studio Services Scope (`about-services-band-section`)
- **Atmosphere:** Obsidian dark band (`#0A0B0E`) creating a rhythm of dark and light contrast.
- **Title Lockup:** Features the inline DP Design Studio logo emblem alongside "Design Studio Services".
- **2-Column Editorial Narrative:**
  - *Column 1:* The discovery, schematic design, council permit approval, and trusted trade scheduling process.
  - *Column 2:* Cost-effective material specification, budget accountability, and interior detailing.

#### 5. Choose DP Design Studio Band (`about-choose-band-section`)
- **Visual Staging:** Architectural site photograph (`/about-choose.jpg`, 365 KB) spanning from the left and fading across a smooth horizontal gradient.
- **Content Format:** Pure text typography on the right without constraining boxes, providing an open, gallery-grade layout with direct consultation CTA.

#### 6. Building & Construction Arm (`about-compact-construction-section`)
- **The Daylo Build Synergy:** A dedicated structural ribbon spotlighting **DAYLO BUILD PTY LTD** (NSW Builder Licence #492271C).
- **Builder Badge:** Hard-hat icon badge certifying statutory building credentials.
- **Core Message:** Emphasizes that design and construction happen under one roof with single-point accountability—eliminating the traditional finger-pointing between architects and external builders.
- **Direct Director Quote:**  
  *“I am proud to serve as Director of both dp Design Studio Pty Ltd and DAYLO BUILD PTY LTD.”* — Prasad Perera.

#### 7. Vision To Life & Consultation Modal (`VisionToLifeContact` & `ContactModal`)
- Shared high-efficiency inquiry terminal allowing users on the About page to book consultations or calculate feasibility estimates without switching views.

---

### 4.2 Service Pages Architecture (Redesigned & Implemented)

The website features three dedicated, bespoke service pages matching the high-end architectural design system:

```
[01. Architectural Design Services Page]   (#architectural-design)
[02. Kitchen Design & Renovation Page]     (#kitchen-design)
[03. Bathroom Design & Renovation Page]    (#bathroom-design)
```

#### A. Architectural Design Page (`ArchitecturalDesignPage.tsx`)
- **Hero Staging:** Full-screen looping video (`/page.mp4`) with radial obsidian scrim, breadcrumb navigation (`Home / Services / Architectural Design`), statutory registration seal (`NSW ARB #12156`), and direct dual consultation actions.
- **01. Problem-Solving Bento Grid:** 6 spatial challenge cards:
  1. *You Have a Vision But Need Expert Guidance*
  2. *Your Existing Layout Does Not Suit Your Lifestyle*
  3. *Unsure What Is Possible on Your Site (Zoning, LEP, Bushfire, Slope)*
  4. *Design That Respects Planning and Budget*
  5. *Maximize Natural Light, Airflow & Liveability*
  6. *Professional Support From Concept to Completion*
- **02. Core Disciplines Showcase (Dark Obsidian):** 6 residential and commercial typologies with high-resolution imagery and specification tags: Custom New Homes, Alterations & Additions, Duplexes & Multi-Dwellings, Secondary Dwellings & Studios, SDA & SIL Specialized Housing, Commercial & Shop Fit-Outs.
- **03. 6-Step Architectural Methodology:** Numbered timeline cards covering Initial Consultation, Site Review & Feasibility, Concept Design, Design Development & 3D, DA/CDC Approvals, and Tender Documentation.
- **04. 14 Additional Technical Services Matrix:** Dual-column verified checklist detailing geotechnical reports, structural coordination, BASIX modeling, shadow diagrams, Sydney Water Tap-in approvals, and dilapidation surveys.
- **05. Advisory FAQs:** Accordion addressing architect vs draftsperson distinctions, DA vs CDC routes, budget discipline, and sloping site engineering.
- **06. Luxury Consultation CTA Banner:** Integrated consultation modal trigger with tap-to-call direct line (`1300 373 374`).

#### B. Kitchen Design & Renovation Page (`KitchenDesignPage.tsx`)
- **Hero Staging:** Looping culinary background (`/hero.mp4`), gold typography accent, breadcrumb trail, and 10-year hardware warranty credentials.
- **01. Kitchen Challenges Bento:** Addressing cramped workflows, deep pantry storage, awkward floor footprints, budget discipline, and seamless indoor-outdoor alfresco connections.
- **02. Interactive 6 Kitchen Layouts Explorer:** Dynamic tabbed showcase allowing clients to switch and preview:
  - *Island Kitchen:* Central social focal point and waterfall prep zones.
  - *Galley Kitchen:* Culinary efficiency corridor with 100% usable drawer volume.
  - *L-Shaped Kitchen:* Open-plan fluidity and corner integration.
  - *U-Shaped Kitchen:* Maximum continuous worktop surface area.
  - *Peninsula Kitchen:* Connected breakfast bar for space-constrained floor plates.
  - *One-Wall Kitchen:* Ultra-clean linear minimalism for apartments and granny flats.
- **03. Distinctive Kitchen Styles:** Modern Luxury (monolithic stone, handleless joinery), Contemporary Warmth (fluted oak, warm travertine), and Hamptons/Shaker (profiled cabinetry, unlacquered brass, butler sinks).
- **04. 6-Step Turnkey Process:** Eradicating trade coordination stress from initial 3D scan to white-glove handover.
- **05. Renovation FAQs:** Answering load-bearing wall removals, island walkway clearances (1000–1200mm), timelines, and appliance specification.

#### C. Bathroom Design & Renovation Page (`BathroomDesignPage.tsx`)
- **Hero Staging:** Restorative spa video background (`/page.mp4`), breadcrumbs, and credentials highlighting AS 3740 certified waterproofing and 7-year statutory warranty.
- **01. Bathroom Challenges Bento:** Congested layouts, concealed in-wall storage, moisture control, and single-team delivery.
- **02. Spatial Typologies Showcase:**
  - *Master Ensuite Sanctuary:* Floating dual vanities, double rain showers, freestanding stone soakers, and under-tile heating.
  - *High-Performance Family Bathroom:* P4 slip-resistant surfaces, full tubs for children, and durable storage.
  - *Architectural Powder Room:* Jewel-box guest showcase with carved stone basins and moody concealed backlighting.
  - *Curbless Wet Room & Walk-in Shower:* Flush zero-threshold entry with invisible linear tile-insert drains.
- **03. Technical Execution Standards:** AS 3740 Class III dual-coat membrane, dual-ducted mechanical exhaust, multi-tiered task/mood lighting, and structural in-wall cistern concealment.
- **04. 6-Step Turnkey Process:** Laser measurement through to mitred-edge tiling and final water test certification.
- **05. Bathroom FAQs:** Plumbing stack relocation, waterproofing warranties, small bathroom expansion strategies, and fixture sourcing.

---

### 4.3 Areas We Serve Page Architecture (Unified 3-in-1 Hub)

Combining Parramatta, Box Hill, and Castle Hill into a cohesive, high-end regional portal:

```
[01. Areas We Serve Hero with /house.mp4]    (#areas-we-serve)
        │
[02. Sticky Catchment Tabs: All • Parramatta • Box Hill • Castle Hill]
        │
[03. 3 Regional Location Hubs Deep-Dive Cards]
        │
[04. Regulatory Intelligence: Regional Council Planning Matrix (Obsidian)]
        │
[05. Why Clients Choose dp Design Studio (4 Pillars Grid)]
        │
[06. Regional Planning FAQs Accordion]
        │
[07. Feasibility Call CTA Banner & Consultation Modal]
```

#### Key Architectural Components:
1. **Hero Staging:** Looping residential video (`/house.mp4`), gold gradient typography, breadcrumbs (`Home / Areas We Serve`), and credential stats (3 Hubs, 100% DA/CDC Approvals, NSW ARB #12156, Daylo Build Pty Ltd integration).
2. **Sticky Sub-Nav Filter Tabs:** Interactive pills (`All Locations`, `Parramatta`, `Box Hill`, `Castle Hill & The Hills`) allowing instant filtering and jump-to-section focus.
3. **Location Hub Deep-Dives:**
   - **Parramatta Hub:** Headquartered in Parramatta. Focuses on City of Parramatta Council LEP/DCP, heritage conservation areas (North Parramatta, Harris Park), Victorian/Federation extensions, Torrens-Title duplexes, and commercial fit-outs. Servicing 12 surrounding suburbs.
   - **Box Hill Hub:** North West Growth Area. Centers on vacant greenfield blocks, estate covenants, zero-lot walls, whole-home spatial reconfigurations, and secondary dwellings. Servicing 9 masterplanned suburbs.
   - **Castle Hill & The Hills Hub:** Established Hills family estates. Specializes in knockdown rebuilds, second-storey additions, stepped sloping site engineering, and AS 3959 Bushfire Attack Level (BAL-29 to BAL-FZ) compliance. Servicing 8 Hills suburbs.
4. **Regulatory Intelligence Planning Matrix:** Dark comparison table contrasting Local Council (LGA), primary zoning profiles (R2/R3/R4), critical site factors (heritage, covenants, slope/BAL), CDC vs DA feasibility, and signature typologies.
5. **Why Choose dp Design Studio Grid:** Fully licensed architectural practice, architecture & interiors under one roof, real construction pricing via Daylo Build, and end-to-end consultant management.
6. **Unified Regional FAQs:** Comprehensive answers addressing DA vs CDC pathways, estate covenants in Box Hill, knockdown rebuilds in Castle Hill, sloping/bushfire blocks, and design & build delivery.

---

## 5. Micro-Interactions, Motion & Navigation System

1. **Inertial Smooth Scrolling (Lenis):**
   - Configured with exponential frictionless glide: `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`, `duration: 1.2s`.
   - Native anchor interception for all internal hash jumps (`#services`, `#kitchens`, `#bathrooms`, `#why-choose-us`), scrolling to target offset with zero jitter.
2. **Hardware-Accelerated WebGL2 Smoke Canvas:**
   - Real-time physics engine rendering dynamic golden mist that reacts to pointer movement and hovers in the footer background (`speed: 24`, `opacity: 0.65`).
3. **Seamless SPA Routing:**
   - In-memory view switching between `'home'` and `'about'` synchronized with browser History API (`pushState` and `popstate`), ensuring bookmarkable URLs and instant transition without full browser reloads.
4. **Precision Pointer (`CustomCursor`):**
   - 4px stroked metallic circular indicator with gentle center blur that tracks cursor coordinates with subtle spring physics.

---

## 6. Asset Optimization & Performance Benchmarks

All heavy media assets have been optimized for instant initial page paint and zero cumulative layout shift (CLS):

| Asset | Role | Original Size | Optimized Size | Format & Compression |
|---|---|---|---|---|
| `hero.mp4` | Home Hero Video | 18.2 MB | **5.10 MB** | H.264 CRF 28, 30fps, `+faststart`, muted |
| `page.mp4` | About Hero Video | 17.9 MB | **5.21 MB** | H.264 CRF 28, 30fps, `+faststart`, muted |
| `house.mp4` | Planning Slanted Video | 2.73 MB | **2.73 MB** | Optimized H.264 loop |
| `prasad-perera.png` | Principal Portrait Cutout | 3.18 MB | **247 KB** | Indexed color quantization with alpha |
| `why.jpg` | Why Choose Us Canvas | 1.54 MB | **365 KB** | 2400px progressive JPEG (Q82) |
| `about-choose.jpg` | Why Choose Band Background | 107 KB | **107 KB** | Optimized JPEG |

---

## 7. Explicit Design Anti-Patterns (Banned Conventions)

To preserve the firm's high-end architectural authority, the following conventions are strictly prohibited:
- ❌ **No AI Neon / Purple Glows:** Glows are strictly restricted to warm metallic gold (`#C5A059`) and champagne hues.
- ❌ **No Plain Generic Fonts:** Standard system fonts or generic sans like `Inter` are banned in favor of `Cinzel` + `Plus Jakarta Sans` + `JetBrains Mono`.
- ❌ **No Emojis:** Interface indicators must exclusively utilize minimalist line icons from `lucide-react`.
- ❌ **No Unboxed Repetitive Cards:** Standard "3 identical floating cards" grids are prohibited; asymmetrical layouts, staggered-width cards, and slashes are required.
- ❌ **No Cluttered Card Text:** Why Choose Us cards present standalone bold titles with favicons, keeping reading times instantaneous and surfaces uncluttered.
- ❌ **No Hard Page Reloads:** Seamless Lenis anchor scrolling and state-based page switching must be maintained across all interactions.
