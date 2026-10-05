import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BuilderPreview } from './components/BuilderPreview';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BuilderPreview />
        <Features />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
