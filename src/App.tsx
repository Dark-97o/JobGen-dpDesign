import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccreditationBand } from './components/AccreditationBand';
import { AboutStudioSydney } from './components/AboutStudioSydney';
import { VideoScrubShowcase } from './components/VideoScrubShowcase';
import { ArchitecturalDesignSection } from './components/ArchitecturalDesignSection';
import { ProjectGallery } from './components/ProjectGallery';
import { LatestArticles } from './components/LatestArticles';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisionToLifeContact } from './components/VisionToLifeContact';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { PageTransitionOverlay, type TransitionPhase } from './components/PageTransitionOverlay';

// Code-split subpages so their JS, styles, and media assets are loaded strictly on-demand
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ArchitecturalDesignPage = lazy(() => import('./components/ArchitecturalDesignPage').then(m => ({ default: m.ArchitecturalDesignPage })));
const KitchenDesignPage = lazy(() => import('./components/KitchenDesignPage').then(m => ({ default: m.KitchenDesignPage })));
const BathroomDesignPage = lazy(() => import('./components/BathroomDesignPage').then(m => ({ default: m.BathroomDesignPage })));
const AreasWeServePage = lazy(() => import('./components/AreasWeServePage').then(m => ({ default: m.AreasWeServePage })));

export type PageType = 'home' | 'about' | 'architectural-design' | 'kitchen-design' | 'bathroom-design' | 'areas-we-serve';

function getInitialPage(): PageType {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (
      path.includes('areas-we-serve') ||
      path.includes('parramatta') ||
      path.includes('box-hill') ||
      path.includes('castle-hill') ||
      hash.includes('areas-we-serve') ||
      hash.includes('areas') ||
      hash.includes('parramatta') ||
      hash.includes('box-hill') ||
      hash.includes('castle-hill')
    ) {
      return 'areas-we-serve';
    }
    if (
      path.includes('architectural-design') ||
      hash.includes('architectural-design')
    ) {
      return 'architectural-design';
    }
    if (
      path.includes('kitchen-design') ||
      hash.includes('kitchen-design') ||
      hash === '#kitchens'
    ) {
      return 'kitchen-design';
    }
    if (
      path.includes('bathroom-design') ||
      hash.includes('bathroom-design') ||
      hash === '#bathrooms'
    ) {
      return 'bathroom-design';
    }
    if (
      path === '/about-us' || 
      path === '/about' || 
      hash === '#about-us' || 
      hash === '#/about-us' || 
      hash === '#about'
    ) {
      return 'about';
    }
  }
  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');
  const isTransitioningRef = useRef(false);

  // Initialize Lenis Frictionless Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential frictionless glide
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
      infinite: false,
    });

    (window as unknown as { lenis: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Frictionless in-page anchor scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (
        href && 
        href.startsWith('#') && 
        href.length > 1 && 
        !href.startsWith('#about-us') && 
        !href.startsWith('#/about-us') &&
        !href.startsWith('#architectural-design') &&
        !href.startsWith('#kitchen-design') &&
        !href.startsWith('#bathroom-design') &&
        !href.startsWith('#areas-we-serve') &&
        !href.startsWith('#areas') &&
        !href.startsWith('#parramatta') &&
        !href.startsWith('#box-hill') &&
        !href.startsWith('#castle-hill')
      ) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.25 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  const handleNavigate = (page: PageType) => {
    if (page === currentPage) {
      const lenis = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    // Phase 1: 3 bars descend rapidly from the top to cover the screen
    setTransitionPhase('entering');

    // Immediately prefetch the bundle chunk for the target page
    if (page === 'about') void import('./components/AboutPage');
    else if (page === 'architectural-design') void import('./components/ArchitecturalDesignPage');
    else if (page === 'kitchen-design') void import('./components/KitchenDesignPage');
    else if (page === 'bathroom-design') void import('./components/BathroomDesignPage');
    else if (page === 'areas-we-serve') void import('./components/AreasWeServePage');

    // After the 3 bars completely cover the screen (~480ms)
    setTimeout(() => {
      // 1. Swap active page component
      setCurrentPage(page);

      // 2. Update browser history
      if (page === 'about') {
        window.history.pushState({ page: 'about' }, 'About DP Design Studio | Sydney Architectural & Interior Firm', '#about-us');
      } else if (page === 'architectural-design') {
        window.history.pushState({ page: 'architectural-design' }, 'Architectural Design Sydney | DP Design Studio', '#architectural-design');
      } else if (page === 'kitchen-design') {
        window.history.pushState({ page: 'kitchen-design' }, 'Kitchen Design Sydney | DP Design Studio', '#kitchen-design');
      } else if (page === 'bathroom-design') {
        window.history.pushState({ page: 'bathroom-design' }, 'Bathroom Design Sydney | DP Design Studio', '#bathroom-design');
      } else if (page === 'areas-we-serve') {
        window.history.pushState({ page: 'areas-we-serve' }, 'Areas We Serve | Parramatta, Box Hill & Castle Hill | DP Design Studio', '#areas-we-serve');
      } else {
        window.history.pushState({ page: 'home' }, 'DP Design Studio | Registered Architects Sydney', '#');
      }

      // 3. Reset scroll position immediately while covered
      const lenis = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Phase 2: Bars continue downward to reveal the new page
      setTransitionPhase('exiting');

      // Once bars have fully exited (~520ms)
      setTimeout(() => {
        setTransitionPhase('idle');
        isTransitioningRef.current = false;
      }, 520);
    }, 480);
  };

  useEffect(() => {
    const handlePopState = () => {
      const targetPage = getInitialPage();
      if (targetPage === currentPage || isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setTransitionPhase('entering');
      setTimeout(() => {
        setCurrentPage(targetPage);
        const lenis = (window as unknown as { lenis?: Lenis }).lenis;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        setTransitionPhase('exiting');
        setTimeout(() => {
          setTransitionPhase('idle');
          isTransitioningRef.current = false;
        }, 520);
      }, 480);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [currentPage]);

  return (
    <div className="dp-design-studio-app">
      {/* 3-Bar Cascading Architectural Transition Curtain */}
      <PageTransitionOverlay phase={transitionPhase} />

      {/* Precision 4px Circle Stroke with Center Blur Custom Pointer */}
      <CustomCursor />

      {/* Floating Island Navigation & Top Ribbon */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main id="main-content">
        <Suspense fallback={null}>
          {currentPage === 'about' && (
            <AboutPage onNavigateHome={() => handleNavigate('home')} />
          )}
          {currentPage === 'architectural-design' && (
            <ArchitecturalDesignPage 
              onNavigateHome={() => handleNavigate('home')} 
              onNavigateService={(srv) => handleNavigate(srv as PageType)}
            />
          )}
          {currentPage === 'kitchen-design' && (
            <KitchenDesignPage 
              onNavigateHome={() => handleNavigate('home')} 
              onNavigateService={(srv) => handleNavigate(srv as PageType)}
            />
          )}
          {currentPage === 'bathroom-design' && (
            <BathroomDesignPage 
              onNavigateHome={() => handleNavigate('home')} 
              onNavigateService={(srv) => handleNavigate(srv as PageType)}
            />
          )}
          {currentPage === 'areas-we-serve' && (
            <AreasWeServePage onNavigateHome={() => handleNavigate('home')} />
          )}
        </Suspense>
        {currentPage === 'home' && (
          <>
            {/* 01. Hero: Spatial Authority & Minimalist Video */}
            <Hero onNavigate={handleNavigate} />

            {/* 01B. Dark Black Statutory Accreditation & Credentials Band */}
            <AccreditationBand />

            {/* 01C. dp Design Studio, Sydney Overview */}
            <AboutStudioSydney />

            {/* 01D. Scroll-Driven Video Scrub: Kitchen → Bathroom */}
            <VideoScrubShowcase onNavigate={handleNavigate} />

            {/* 01E. Architectural Design: Cinematic archi1 Video Background & Spatial Narrative */}
            <ArchitecturalDesignSection />

            {/* 02. Recent Projects with Photo Gallery */}
            <ProjectGallery />

            {/* 03. Latest Articles (3 Articles with Readable Pop-up Screen Modal) */}
            <LatestArticles />

            {/* 04. Client Reviews Section (78 Verified Google Reviews) */}
            <ReviewsSection />

            {/* 05. Why Choose Us? Section with 'Know More About Us' Button */}
            <WhyChooseUs onKnowMore={() => handleNavigate('about')} />

            {/* 06. Ready to Bring Your Architectural Vision to Life? Form Container */}
            <VisionToLifeContact />
          </>
        )}
      </main>

      {/* 07. Architectural Monolith Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
