import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Collection } from './components/Collection';
import { Lifestyle } from './components/Lifestyle';
import { Vineyard } from './components/Vineyard';
import { Timeline } from './components/Timeline';
import { Awards } from './components/Awards';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  useSmoothScroll();

  return (
    <div className="bg-background text-white min-h-screen font-body selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      
        <Story />
        <Features />
        <Collection />
        <Lifestyle />
        <Vineyard />
        <Timeline />
        <Awards />
        <Testimonials />
        <Gallery />
        <CTA />
        <Footer />
    </div>
  );
}

export default App;
