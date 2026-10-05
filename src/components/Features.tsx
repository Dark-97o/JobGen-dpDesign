import type { ReactNode } from 'react';
import { 
  Zap, 
  Cpu, 
  Box, 
  Paintbrush, 
  Smartphone, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2 
} from 'lucide-react';
import './Features.css';

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  tag: string;
}

const features: FeatureItem[] = [
  {
    icon: <Zap size={22} />,
    title: 'Lightning Fast Tooling',
    description: 'Powered by Vite 8 engine delivering sub-10ms HMR updates and highly optimized Rollup production bundles.',
    tag: 'Core Performance'
  },
  {
    icon: <Cpu size={22} />,
    title: 'Strict TypeScript Typing',
    description: 'Built with full end-to-end type safety, modern tsconfig standards, and strict property validation across components.',
    tag: 'Developer Experience'
  },
  {
    icon: <Paintbrush size={22} />,
    title: 'Vanilla Design Tokens',
    description: 'Zero third-party CSS overhead. Pure CSS custom properties allow instant dark mode calibration and seamless brand skinning.',
    tag: 'CSS Architecture'
  },
  {
    icon: <Box size={22} />,
    title: 'Modular Block System',
    description: 'Autonomous, composable UI building blocks ready to assemble into landing pages, portals, or full SaaS dashboards.',
    tag: 'Scalability'
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Adaptive & Fluid Layouts',
    description: 'Fluid clamp scales and responsive grid templates guarantee flawless presentation across mobile, tablet, and widescreen monitors.',
    tag: 'Responsiveness'
  },
  {
    icon: <Search size={22} />,
    title: 'Built-in SEO & Semantic HTML',
    description: 'Optimized meta tags, structured landmark tags (header, main, nav, section, footer), and accessibility-tested ARIA attributes.',
    tag: 'Production Ready'
  }
];

export const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <SlidersHorizontal size={14} />
            <span>Architecture & Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Production Speed</span>
          </h2>
          <p className="section-desc">
            Everything you need to rapidly construct, refine, and deploy world-class web applications without configuration friction.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card glass-card">
              <div className="card-top">
                <div className="feature-icon-wrapper">
                  {feat.icon}
                </div>
                <span className="feature-tag">{feat.tag}</span>
              </div>
              <h3 className="feature-heading">{feat.title}</h3>
              <p className="feature-body">{feat.description}</p>
              <div className="feature-footer">
                <CheckCircle2 size={14} className="check-icon" />
                <span>Pre-configured & verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
