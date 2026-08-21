import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { AgeGate } from './components/AgeGate';

const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(module => ({ default: module.TermsOfService })));

function App() {
  useSmoothScroll();

  return (
    <Router>
      <div className="bg-background text-primary min-h-screen font-body selection:bg-accent selection:text-white">
        <AgeGate />
        <Cursor />
        <Navbar />
        <Suspense fallback={<div className="h-screen w-full bg-[#030303] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
