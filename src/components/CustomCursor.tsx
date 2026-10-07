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

    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
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

    const loop = () => {
      // Ultra-snappy, direct responsive pointer physics (zero spongy drag)
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
        currentX = mouseX;
        currentY = mouseY;
      } else {
        currentX += dx * 0.88;
        currentY += dy * 0.88;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
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
