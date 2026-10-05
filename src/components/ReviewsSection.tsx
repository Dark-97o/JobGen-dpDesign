import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import './ReviewsSection.css';

interface ReviewItem {
  id: string;
  name: string;
  profileImg: string;
  stars: number;
  text: string;
  projectType: string;
}

const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'ManoRu M',
    profileImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Home Renovation & Ensuite',
    text: 'We engaged dp Design Studio Pty Ltd for the second time to undertake Stage 2 renovations to our family home in Pymble. Based on the quality and reliability of our first project, we felt completely confident re-engaging Architect Prasad Perera. Works included roofing, luxury ensuite bathroom, and joinery. Completed in just two months with flawless quality.'
  },
  {
    id: 'rev-2',
    name: 'Nate & Amanda Hewa',
    profileImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Council Compliance & BIC',
    text: 'After our pool builder left us facing council compliance issues and penalty notices, Prasad personally inspected the property, prepared comprehensive architectural plans, and coordinated surveys. Council issued the Section 6.26 certificate with zero delays. Prasad saved our family considerable stress.'
  },
  {
    id: 'rev-3',
    name: 'C&A Surveyors',
    profileImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Survey & Architectural Plans',
    text: 'Working with Prasad and the team at DP Design Studio has been an outstanding experience. Their professionalism, creativity, and attention to detail are second to none. As surveyors, we greatly value clear communication, prompt responses, and precision drafting on every project.'
  },
  {
    id: 'rev-4',
    name: 'Shankar Vamadevan',
    profileImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Alterations & Additions',
    text: 'We engaged Architect Prasad Perera to modernise our family home in Beecroft, and the experience was exceptional. During the initial consultation, Prasad thoroughly understood our needs and budget. He completed the first stage within just 10 weeks while we continued living in the house with zero disruption.'
  },
  {
    id: 'rev-5',
    name: 'James Harrison',
    profileImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Construction Certificate (CC)',
    text: 'Referred by Skymax, we arranged an initial site consultation with Prasad. We were thoroughly impressed by the professionalism, clear communication, and proactive solutions. Prasad was readily available and efficiently obtained CC approval. Looking forward to the build!'
  },
  {
    id: 'rev-6',
    name: 'Alan de Zwaan',
    profileImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Spatial Refurbishment',
    text: 'We worked with DP Design Studio to update our staircase balustrades and close off a shaft opening. Prasad provided various design options and was extremely responsive from start to finish, completing the work while we were overseas with high quality and regular photo updates.'
  },
  {
    id: 'rev-7',
    name: 'David & Karen Chen',
    profileImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Dual Occupancy Duplex',
    text: 'Prasad designed our duplex project in Epping with brilliant solar orientation and spatial efficiency. Council DA approval was obtained smoothly. His architectural insight and council knowledge made the entire process seamless.'
  },
  {
    id: 'rev-8',
    name: 'Sarah & Michael Jenkins',
    profileImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    stars: 5,
    projectType: 'Kitchen & Master Ensuite',
    text: 'Our kitchen and master ensuite transformation exceeded every expectation. The craftsmanship, joinery detail, and space planning created an absolute sanctuary in our home. Would recommend DP Design Studio without hesitation.'
  }
];

// Multi-colored official Google 'G' Logo
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="google-icon-svg" aria-label="Google">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function ReviewsSection() {
  // Duplicate reviews array to create seamless infinite scrolling track
  const carouselItems = [...REVIEWS_LIST, ...REVIEWS_LIST];

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;

    const updateFishBowl = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) {
        animId = requestAnimationFrame(updateFishBowl);
        return;
      }

      const vpRect = viewport.getBoundingClientRect();
      const vpCenter = vpRect.left + vpRect.width / 2;
      const isMobile = window.innerWidth <= 768;
      // Fishbowl magnification influence zone
      const radius = isMobile ? Math.min(vpRect.width * 0.48, 280) : Math.min(vpRect.width * 0.42, 540);
      const maxScale = isMobile ? 1.08 : 1.18;
      const minScale = isMobile ? 0.90 : 0.88;

      const cards = cardsRef.current;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = cardCenter - vpCenter;
        const absDist = Math.abs(dist);

        if (absDist < radius) {
          // Normalized distance: 0 at exact center, 1 at fishbowl perimeter
          const norm = absDist / radius;
          // Cosine curve simulates true spherical convex lens curvature
          const bulge = Math.cos((norm * Math.PI) / 2);

          const scale = minScale + bulge * (maxScale - minScale);
          const rotateY = -(dist / radius) * (isMobile ? 12 : 22);
          const translateZ = bulge * (isMobile ? 24 : 48);
          const opacity = isMobile ? 1 : 0.65 + bulge * 0.35;

          card.style.transform = `perspective(1100px) translateZ(${translateZ.toFixed(1)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          card.style.opacity = `${opacity.toFixed(2)}`;
          card.style.zIndex = `${Math.round(bulge * 20)}`;

          if (bulge > 0.72) {
            card.classList.add('in-fishbowl-focus');
          } else {
            card.classList.remove('in-fishbowl-focus');
          }
        } else {
          // Outside fishbowl lens radius
          const outsideRotate = dist < 0 ? 12 : -12;
          card.style.transform = `perspective(1100px) translateZ(-16px) rotateY(${outsideRotate}deg) scale(${minScale})`;
          card.style.opacity = isMobile ? '0.85' : '0.52';
          card.style.zIndex = '1';
          card.classList.remove('in-fishbowl-focus');
        }
      }

      animId = requestAnimationFrame(updateFishBowl);
    };

    animId = requestAnimationFrame(updateFishBowl);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="reviews" className="reviews-band-section" aria-label="Customer Reviews">
      <div className="reviews-band-container">
        
        {/* Band Top Header:
            Headline "Excellent", Five Stars, "based on 78 reviews", and "Google" text */}
        <div className="reviews-band-header">
          <div className="reviews-band-headline-group">
            <h2 className="reviews-band-title">Excellent</h2>
            
            <div className="reviews-band-stars" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#FBBC05" color="#FBBC05" className="band-star-icon" />
              ))}
            </div>
          </div>

          <div className="reviews-band-meta-group">
            <span className="reviews-based-text">Based on 78 reviews</span>
            <span className="reviews-meta-separator">•</span>
            <div className="reviews-google-attribution">
              <GoogleIcon />
              <span className="reviews-google-name">Google</span>
            </div>
          </div>
        </div>

        {/* Continuous Left-to-Right Scrolling Carousel with Fish Bowl Effect */}
        <div className="reviews-carousel-viewport" ref={viewportRef}>
          <div className="reviews-carousel-track" ref={trackRef}>
            {carouselItems.map((rev, index) => (
              <div 
                key={`${rev.id}-${index}`} 
                ref={(el) => { cardsRef.current[index] = el; }}
                className="review-box-card"
              >
                
                {/* Review Box Header: Profile Image, Name, Five Stars, and Google Logo */}
                <div className="review-box-header">
                  <div className="review-profile-group">
                    <img 
                      src={rev.profileImg} 
                      alt={rev.name} 
                      className="review-profile-avatar"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback avatar if external image fails
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.name)}&background=C5A059&color=0E0F11`;
                      }}
                    />
                    <div className="review-profile-details">
                      <span className="review-profile-name">{rev.name}</span>
                      <div className="review-box-stars">
                        {[...Array(rev.stars)].map((_, sIdx) => (
                          <Star key={sIdx} size={14} fill="#FBBC05" color="#FBBC05" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Google Logo */}
                  <div className="review-google-badge" title="Google Verified Review">
                    <GoogleIcon />
                  </div>
                </div>

                {/* Review Text */}
                <p className="review-box-text">
                  "{rev.text}"
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ReviewsSection;
