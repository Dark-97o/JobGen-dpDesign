import { useState, useEffect } from 'react';
import './ProjectGallery.css';

/**
 * 12 Curated Architectural House Designs:
 * Coastal pavilions, board-formed concrete villas, cantilevered residences,
 * dual-occupancy luxury duplexes, modernist glasshouses, and urban estates.
 */
interface ArchitectureHouse {
  id: string;
  src: string;
  title: string;
  category: string;
}

const ARCHITECTURE_HOUSES: ArchitectureHouse[] = [
  {
    id: 'house-01',
    src: '/images/projects/house-01-coastal-pavilion.jpg',
    title: 'Modern Coastal Pavilion Residence',
    category: 'Coastal Architecture'
  },
  {
    id: 'house-02',
    src: '/images/projects/house-02-brutalist-concrete.jpg',
    title: 'Board-Formed Concrete Architectural Villa',
    category: 'Modernist Concrete'
  },
  {
    id: 'house-03',
    src: '/images/projects/house-03-bespoke-residence.jpg',
    title: 'Bespoke Multi-Level Modern Residence',
    category: 'Custom Residence'
  },
  {
    id: 'house-04',
    src: '/images/projects/house-04-cantilever-pavilion.jpg',
    title: 'The Cantilevered Glass Pavilion',
    category: 'Architectural Residence'
  },
  {
    id: 'house-05',
    src: '/images/projects/house-05-architectural-villa.jpg',
    title: 'Modernist Architectural Villa',
    category: 'Bespoke Architecture'
  },
  {
    id: 'house-06',
    src: '/images/projects/house-06-castle-hill.jpg',
    title: 'Castle Hill Modernist Estate',
    category: 'Luxury Family Estate'
  },
  {
    id: 'house-07',
    src: '/images/projects/house-07-box-hill.jpg',
    title: 'Box Hill Contemporary Designer Home',
    category: 'Contemporary Architecture'
  },
  {
    id: 'house-08',
    src: '/images/projects/house-08-project-facade.jpg',
    title: 'Vertical Slatted Timber Screen House',
    category: 'Timber & Stone Architecture'
  },
  {
    id: 'house-09',
    src: '/images/projects/house-09-modernist-glasshouse.jpg',
    title: 'The Modernist Glasshouse Pavilion',
    category: 'Indoor-Outdoor Architecture'
  },
  {
    id: 'house-10',
    src: '/images/projects/house-10-garden-pavilion.jpg',
    title: 'Architectural Garden Residence',
    category: 'Pavilion Dwelling'
  },
  {
    id: 'house-11',
    src: '/images/projects/house-11-urban-residence.jpg',
    title: 'Urban Sanctuary Residence',
    category: 'Contemporary Infill'
  },
  {
    id: 'house-12',
    src: '/images/projects/house-12-luxury-extension.jpg',
    title: 'Sculptural Modernist Addition',
    category: 'Architectural Transformation'
  }
];

interface SmoothCardSlotProps {
  images: ArchitectureHouse[];
  initialOffset: number;
  slotClass: string;
  intervalMs?: number;
  staggerDelayMs?: number;
}

function SmoothCardSlot({
  images,
  initialOffset,
  slotClass,
  intervalMs = 3200,
  staggerDelayMs = 0
}: SmoothCardSlotProps) {
  const [currIndex, setCurrIndex] = useState(initialOffset % images.length);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance images smoothly with staggered timing
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const delayTimeout = setTimeout(() => {
      timer = setInterval(() => {
        if (!isPaused) {
          setCurrIndex((prev) => {
            setPrevIndex(prev);
            setIsCrossfading(true);
            return (prev + 1) % images.length;
          });
        }
      }, intervalMs);
    }, staggerDelayMs);

    return () => {
      clearTimeout(delayTimeout);
      if (timer) clearInterval(timer);
    };
  }, [images.length, intervalMs, staggerDelayMs, isPaused]);

  // Reset crossfade state once 1000ms transition completes
  useEffect(() => {
    if (isCrossfading) {
      const resetTimer = setTimeout(() => {
        setIsCrossfading(false);
        setPrevIndex(null);
      }, 1000);
      return () => clearTimeout(resetTimer);
    }
  }, [isCrossfading, currIndex]);

  const currentHouse = images[currIndex];
  const prevHouse = prevIndex !== null ? images[prevIndex] : null;

  return (
    <div
      className={`carousel-slot ${slotClass}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title={`${currentHouse.title} — ${currentHouse.category}`}
    >
      {/* Base / Outgoing Layer: Stays solid underneath to guarantee zero flicker */}
      {prevHouse && (
        <div className="carousel-slide-layer carousel-slide-base" aria-hidden="true">
          <img
            src={prevHouse.src}
            alt={prevHouse.title}
            className="carousel-img"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      {/* Incoming / Active Layer: Velvet crossfade overlay */}
      <div
        className={`carousel-slide-layer carousel-slide-active ${
          isCrossfading ? 'is-crossfading' : 'is-settled'
        }`}
      >
        <img
          src={currentHouse.src}
          alt={currentHouse.title}
          className="carousel-img"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Subtle luxury architectural glass vignette */}
      <div className="carousel-slot-vignette" aria-hidden="true" />
    </div>
  );
}

export function ProjectGallery() {
  // Preload all 12 architectural images in browser cache for zero-latency transitions
  useEffect(() => {
    ARCHITECTURE_HOUSES.forEach((house) => {
      const img = new Image();
      img.src = house.src;
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      {/* Floating Yellow / Golden Mist Sphere Animation in background */}
      <div className="portfolio-mist-layer" aria-hidden="true">
        <div className="portfolio-mist-sphere portfolio-sphere-primary" />
        <div className="portfolio-mist-sphere portfolio-sphere-secondary" />
        <div className="portfolio-mist-sphere portfolio-sphere-tertiary" />
      </div>

      <div className="container portfolio-container">
        {/* Headline only: Shifted slightly towards the right */}
        <div className="portfolio-head-minimal headline-watermark-wrapper">
          <span className="headline-watermark-text" aria-hidden="true">Recent Projects</span>
          <h2 className="portfolio-title">Recent Projects</h2>
        </div>

        {/* 2 Rows of Carousel:
            Row 1: 1 rectangle (offset 0), 1 square (offset 3)
            Row 2: 1 square (offset 6), 1 rectangle (offset 9)
            Smooth velvet crossfade across all 12 architectural house designs */}
        <div className="projects-carousel-layout">
          {/* Row 1: 1 Rectangle + 1 Square */}
          <div className="carousel-row">
            <SmoothCardSlot
              images={ARCHITECTURE_HOUSES}
              initialOffset={0}
              slotClass="slot-rectangle"
              intervalMs={3200}
              staggerDelayMs={0}
            />
            <SmoothCardSlot
              images={ARCHITECTURE_HOUSES}
              initialOffset={3}
              slotClass="slot-square"
              intervalMs={3200}
              staggerDelayMs={450}
            />
          </div>

          {/* Row 2: 1 Square + 1 Rectangle */}
          <div className="carousel-row">
            <SmoothCardSlot
              images={ARCHITECTURE_HOUSES}
              initialOffset={6}
              slotClass="slot-square"
              intervalMs={3200}
              staggerDelayMs={900}
            />
            <SmoothCardSlot
              images={ARCHITECTURE_HOUSES}
              initialOffset={9}
              slotClass="slot-rectangle"
              intervalMs={3200}
              staggerDelayMs={1350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
