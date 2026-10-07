import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only activate for devices with fine pointer (mouse/trackpad)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, select, textarea, label, summary, [role="button"], [role="link"], [role="tab"], [tabindex]:not([tabindex="-1"]), [onclick], .nav-item, .nav-book-pill, .vscrub-cta, .articles-nav-btn, .breadcrumb-home-link, .interactive, .clickable'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`custom-pointer-arrow ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
      aria-hidden="true"
    >
      {/* Scaling wrap for hover/click interaction states */}
      <div className="custom-pointer-scale-wrap">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="custom-arrowhead-svg"
        >
          <g className="arrowhead-group">
            {/* Left Dark Facet */}
            <path
              d="M2 2L6.2 20.8L10.6 13.6Z"
              className="arrowhead-facet-left"
            />
            {/* Right Elevated Facet */}
            <path
              d="M2 2L10.6 13.6L18.4 10.2Z"
              className="arrowhead-facet-right"
            />
            {/* Crisp Outer Hairline Contour */}
            <path
              d="M2 2L6.2 20.8L10.6 13.6L18.4 10.2Z"
              className="arrowhead-outline"
            />
            {/* Central Architectural Ridge */}
            <path
              d="M2 2L10.6 13.6"
              className="arrowhead-ridge"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
