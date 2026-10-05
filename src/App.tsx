import { useState, useEffect } from 'react';
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
import { AboutPage } from './components/AboutPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
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
  });

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
      if (href && href.startsWith('#') && href.length > 1 && !href.startsWith('#about-us') && !href.startsWith('#/about-us')) {
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

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.history.pushState({ page: 'about' }, 'About DP Design Studio | Sydney Architectural & Interior Firm', '#about-us');
    } else {
      window.history.pushState({ page: 'home' }, 'DP Design Studio | Registered Architects Sydney', '#');
    }
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path === '/about-us' || 
        path === '/about' || 
        hash === '#about-us' || 
        hash === '#/about-us' || 
        hash === '#about'
      ) {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
      const lenis = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  return (
    <div className="dp-design-studio-app">
      {/* Precision 4px Circle Stroke with Center Blur Custom Pointer */}
      <CustomCursor />

      {/* Floating Island Navigation & Top Ribbon */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main id="main-content">
        {currentPage === 'about' ? (
          <AboutPage onNavigateHome={() => handleNavigate('home')} />
        ) : (
          <>
            {/* 01. Hero: Spatial Authority & Minimalist Video */}
            <Hero />

            {/* 01B. Dark Black Statutory Accreditation & Credentials Band */}
            <AccreditationBand />

            {/* 01C. dp Design Studio, Sydney Overview */}
            <AboutStudioSydney />

            {/* 01D. Scroll-Driven Video Scrub: Kitchen → Bathroom */}
            <VideoScrubShowcase />

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
