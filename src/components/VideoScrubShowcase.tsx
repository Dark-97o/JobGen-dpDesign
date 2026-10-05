import { useEffect, useRef, useState, useCallback } from 'react';
import './VideoScrubShowcase.css';

const TOTAL_FRAMES = 36;

// Format frame index: frame_000.webp ... frame_035.webp
const getFrameSrc = (index: number) => {
  const padded = String(index).padStart(3, '0');
  return `/frames/frame_${padded}.webp`;
};

export function VideoScrubShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameId = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);

  // Helper to draw a specific frame to canvas with crisp cover scaling
  const renderFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Enable high-quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Find requested image or closest loaded frame
    let img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const lower = imagesRef.current[frameIdx - offset];
        if (lower && lower.complete && lower.naturalWidth > 0) {
          img = lower;
          break;
        }
        const higher = imagesRef.current[frameIdx + offset];
        if (higher && higher.complete && higher.naturalWidth > 0) {
          img = higher;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Pixel-perfect aspect ratio cover math
    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let dw = cw;
    let dh = ch;
    let dx = 0;
    let dy = 0;

    if (canvasRatio > imgRatio) {
      dw = cw;
      dh = Math.ceil(cw / imgRatio);
      dy = Math.round((ch - dh) / 2);
    } else {
      dh = ch;
      dw = Math.ceil(ch * imgRatio);
      dx = Math.round((cw - dw) / 2);
    }

    ctx.drawImage(img, dx, dy, dw, dh);
    lastDrawnFrameRef.current = frameIdx;
  }, []);

  // Sync canvas resolution to physical device pixels (DPR aware)
  const syncCanvasResolution = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || window.innerHeight;
    const targetW = Math.round(w * dpr);
    const targetH = Math.round(h * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const currentFrame = lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
    renderFrame(currentFrame);
  }, [renderFrame]);

  // Preload frame images
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    syncCanvasResolution();

    // Immediately load frame 0 (kitchen poster)
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    imagesRef.current[0] = firstImg;
    firstImg.onload = () => {
      syncCanvasResolution();
      renderFrame(0);
    };

    // Load final frame
    const lastImg = new Image();
    lastImg.src = getFrameSrc(TOTAL_FRAMES - 1);
    imagesRef.current[TOTAL_FRAMES - 1] = lastImg;

    // Preload remaining frames
    for (let i = 1; i < TOTAL_FRAMES - 1; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      imagesRef.current[i] = img;
    }

    const ro = new ResizeObserver(() => {
      syncCanvasResolution();
    });

    if (stickyRef.current) {
      ro.observe(stickyRef.current);
    }

    window.addEventListener('resize', syncCanvasResolution);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncCanvasResolution);
    };
  }, [renderFrame, syncCanvasResolution]);

  // Scroll listener mapped directly to 36 frames
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDist = section.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const rawPct = scrolled / scrollableDist;
      const pct = Math.max(0, Math.min(1, rawPct));

      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        setProgress(pct);

        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(pct * (TOTAL_FRAMES - 1)))
        );

        renderFrame(targetFrame);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [renderFrame]);

  // Bathroom design text appears near the 25th frame (25/35 ≈ 0.714 progress)
  const kitchenOpacity = Math.max(0, Math.min(1, (0.72 - progress) / 0.10));
  const bathroomOpacity = Math.max(0, Math.min(1, (progress - 0.64) / 0.10));
  const isBathroomActive = progress >= 0.69;

  return (
    <section
      ref={sectionRef}
      className="vscrub-section"
      aria-label="Kitchen and Bathroom Design Interactive Showcase"
    >
      {/* Sticky Viewport pinned during scroll travel */}
      <div ref={stickyRef} className="vscrub-sticky">
        {/* Crisp Hardware-accelerated Canvas */}
        <canvas
          ref={canvasRef}
          className="vscrub-canvas"
          aria-hidden="true"
        />

        {/* Fallback poster image behind canvas to prevent black flash */}
        <div
          className="vscrub-poster-fallback"
          style={{ backgroundImage: `url(${getFrameSrc(0)})` }}
          aria-hidden="true"
        />

        {/* Short black fade on top edge to blend seamlessly */}
        <div className="vscrub-top-fade" aria-hidden="true" />

        {/* Localized text readability gradient */}
        <div className="vscrub-text-scrim" />

        {/* Fluid Stacked Text Overlays (Zero latency crossfade) */}
        <div className="vscrub-text-container">
          {/* Stage 1: Kitchen Design */}
          <div
            className="vscrub-text-block vscrub-kitchen-block"
            style={{
              opacity: kitchenOpacity,
              transform: `translateY(${(1 - kitchenOpacity) * 16}px)`,
              pointerEvents: !isBathroomActive ? 'auto' : 'none',
              visibility: kitchenOpacity > 0 ? 'visible' : 'hidden',
            }}
          >
            <h2 className="vscrub-stage-title">Kitchen Design</h2>
            <p className="vscrub-stage-sub">
              Tailored culinary spaces featuring waterfall natural stone islands, bespoke joinery, concealed storage, and turnkey trade delivery.
            </p>
            <a href="#kitchens" className="vscrub-cta">
              <span>EXPLORE KITCHENS</span>
              <span className="vscrub-arrow">↗</span>
            </a>
          </div>

          {/* Stage 2: Bathroom Design */}
          <div
            className="vscrub-text-block vscrub-bathroom-block"
            style={{
              opacity: bathroomOpacity,
              transform: `translateY(${(1 - bathroomOpacity) * 16}px)`,
              pointerEvents: isBathroomActive ? 'auto' : 'none',
              visibility: bathroomOpacity > 0 ? 'visible' : 'hidden',
            }}
          >
            <h2 className="vscrub-stage-title">Bathroom Design</h2>
            <p className="vscrub-stage-sub">
              Private spa sanctuaries with bookmatched porcelain, curbless walk-in showers, freestanding soak tubs, and AS 3740 certified waterproofing.
            </p>
            <a href="#bathrooms" className="vscrub-cta">
              <span>EXPLORE BATHROOMS</span>
              <span className="vscrub-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
