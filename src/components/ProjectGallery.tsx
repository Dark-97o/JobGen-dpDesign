import { useState, useEffect } from 'react';
import './ProjectGallery.css';

// ONLY verified project images from the original website's recent projects portfolio
const ROW1_RECT_IMAGES = [
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/dp-Design-Studio-Bespoke-Renovations-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/DP-Design-Studio-Architecture-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-01-2.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-26-1.jpg'
];

const ROW1_SQUARE_IMAGES = [
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Kitchen-Design-and-Renovation.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-14-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-34-1.jpg'
];

const ROW2_SQUARE_IMAGES = [
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Bathroom-Design-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-16-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-22-1.jpg'
];

const ROW2_RECT_IMAGES = [
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-26-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/dp-Design-Studio-Bespoke-Renovations-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/DP-Design-Studio-Architecture-1.jpg',
  'https://www.dpdesignstudio.com.au/wp-content/uploads/2020/07/Gallery-01-2.jpg'
];

export function ProjectGallery() {
  const [index, setIndex] = useState(0);

  // Auto-change images every 1 second (1000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
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
            Row 1: 1 rectangle, 1 square
            Row 2: 1 square, 1 rectangle
            Images change after 1 sec each, NO text anywhere */}
        <div className="projects-carousel-layout">
          
          {/* Row 1: 1 Rectangle + 1 Square */}
          <div className="carousel-row">
            <div className="carousel-slot slot-rectangle">
              <img 
                key={`r1-rect-${index % ROW1_RECT_IMAGES.length}`}
                src={ROW1_RECT_IMAGES[index % ROW1_RECT_IMAGES.length]} 
                alt="DP Design Studio Project"
                className="carousel-img"
                loading="eager"
              />
            </div>
            <div className="carousel-slot slot-square">
              <img 
                key={`r1-sq-${index % ROW1_SQUARE_IMAGES.length}`}
                src={ROW1_SQUARE_IMAGES[index % ROW1_SQUARE_IMAGES.length]} 
                alt="DP Design Studio Project"
                className="carousel-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Row 2: 1 Square + 1 Rectangle */}
          <div className="carousel-row">
            <div className="carousel-slot slot-square">
              <img 
                key={`r2-sq-${index % ROW2_SQUARE_IMAGES.length}`}
                src={ROW2_SQUARE_IMAGES[index % ROW2_SQUARE_IMAGES.length]} 
                alt="DP Design Studio Project"
                className="carousel-img"
                loading="eager"
              />
            </div>
            <div className="carousel-slot slot-rectangle">
              <img 
                key={`r2-rect-${index % ROW2_RECT_IMAGES.length}`}
                src={ROW2_RECT_IMAGES[index % ROW2_RECT_IMAGES.length]} 
                alt="DP Design Studio Project"
                className="carousel-img"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectGallery;
