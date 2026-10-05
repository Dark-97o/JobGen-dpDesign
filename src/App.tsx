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

export function App() {
  return (
    <div className="dp-design-studio-app">
      {/* Precision 4px Circle Stroke with Center Blur Custom Pointer */}
      <CustomCursor />

      {/* Floating Island Navigation & Top Ribbon */}
      <Navbar />

      <main id="main-content">
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
        <WhyChooseUs />

        {/* 06. Ready to Bring Your Architectural Vision to Life? Form Container */}
        <VisionToLifeContact />
      </main>

      {/* 07. Architectural Monolith Footer */}
      <Footer />
    </div>
  );
}

export default App;

