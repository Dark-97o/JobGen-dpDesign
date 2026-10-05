# JobGen — Modern React & TypeScript Website Repository

A high-performance, modular React web application and website building repository configured with **Vite 8**, **React 19**, **TypeScript 6**, and a **zero-bloat Vanilla CSS design system**.

---

## ⚡ Tech Stack & Highlights

- **Vite 8 & Rollup**: Sub-10ms Hot Module Replacement (HMR) and ultra-compact production bundles.
- **React 19**: Modern concurrent architecture and React Compiler-compatible strict purity.
- **TypeScript (Strict Mode)**: Comprehensive static type checking across all components and props.
- **Vanilla CSS Design Tokens**: Clean CSS custom properties (`var(--accent-primary)`, `var(--bg-card)`, etc.) with glassmorphism, responsive clamps, and zero dependency overhead.
- **Lucide Icons**: Crisp, SVG-based icon system with tree-shaking support.
- **Oxlint**: Blazing-fast Rust-based static code analysis with zero lint warnings.

---

## 📁 Repository Blueprint

```
jobgen-dp/
├── index.html                   # HTML5 entrypoint with Google Fonts preconnection
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript root configuration
├── tsconfig.app.json            # Application client compilation config
├── vite.config.ts               # Vite bundler orchestration
├── public/                      # Static assets & public resources
└── src/
    ├── main.tsx                 # Application DOM bootstrap (StrictMode)
    ├── index.css                # Global design tokens, resets & theme variables
    ├── App.tsx                  # Master semantic layout
    └── components/              # Modular UI building blocks
        ├── Navbar.tsx           # Sticky glassmorphism header & responsive nav
        ├── Navbar.css
        ├── Hero.tsx             # High-conversion hero with performance pills
        ├── Hero.css
        ├── BuilderPreview.tsx   # Interactive sandbox with live theme/code switcher
        ├── BuilderPreview.css
        ├── Features.tsx         # Capability matrix with modern glass cards
        ├── Features.css
        ├── Architecture.tsx     # Project blueprint & developer workflows
        ├── Architecture.css
        ├── CTA.tsx              # Action conversion banner with radial glow
        ├── CTA.css
        ├── Footer.tsx           # Semantic footer & system status indicator
        └── Footer.css
```

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Starts Vite at `http://localhost:5173` with instant HMR.

### 2. Linting
```bash
npm run lint
```
Runs Oxlint on `src/` to ensure code purity and error-free syntax.

### 3. Production Build
```bash
npm run build
```
Executes TypeScript type-check (`tsc -b`) and bundles production assets into `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```
Spins up a local server to test the generated production bundle.

---

## 🎨 Design System Customization

All primary tokens are declared at the root level in [src/index.css](file:///c:/Users/subhr/OneDrive/Documents/GitHub/Jobgen-dp/src/index.css):

```css
:root {
  --bg-primary: #07090e;
  --bg-secondary: #0d121f;
  --accent-primary: #6366f1;
  --accent-secondary: #a855f7;
  --accent-cyan: #06b6d4;
  --accent-emerald: #10b981;
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

Simply update these variables to instantly change the theme, accent palettes, typography, or spacing across the entire website.
