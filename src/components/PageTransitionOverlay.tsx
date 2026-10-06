import { useEffect, useState } from 'react';
import './PageTransitionOverlay.css';

export type TransitionPhase = 'idle' | 'entering' | 'exiting';

interface PageTransitionOverlayProps {
  phase: TransitionPhase;
}

export function PageTransitionOverlay({ phase }: PageTransitionOverlayProps) {
  const [activeClass, setActiveClass] = useState<'idle' | 'in' | 'out'>('idle');

  useEffect(() => {
    if (phase === 'entering') {
      // Small tick to ensure browser calculates initial translateY(-100%) before animating to translateY(0)
      const timer = requestAnimationFrame(() => {
        setActiveClass('in');
      });
      return () => cancelAnimationFrame(timer);
    } else if (phase === 'exiting') {
      setActiveClass('out');
    } else {
      setActiveClass('idle');
    }
  }, [phase]);

  if (phase === 'idle') return null;

  return (
    <aside 
      className={`page-transition-curtain phase-${activeClass}`} 
      aria-hidden="true"
      role="presentation"
    >
      {/* Bar 1: Left Vertical Pillar */}
      <div className="transition-bar transition-bar-1">
        <div className="transition-bar-accent-top" />
      </div>

      {/* Bar 2: Center Vertical Pillar with DP Logo */}
      <div className="transition-bar transition-bar-2">
        <div className="transition-bar-accent-top" />
        <div className="transition-center-logo-wrap">
          <img 
            src="/dplogo.png" 
            alt="DP Design Studio" 
            className="transition-dp-logo" 
          />
        </div>
      </div>

      {/* Bar 3: Right Vertical Pillar */}
      <div className="transition-bar transition-bar-3">
        <div className="transition-bar-accent-top" />
      </div>
    </aside>
  );
}

export default PageTransitionOverlay;
