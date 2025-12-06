import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import LandingPage from './pages/LandingPage';
import { ThankYou } from './pages/ThankYou';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">Testimonials Coming Soon</h1></div>} />
            <Route path="/faq" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">FAQ Coming Soon</h1></div>} />
            
            {/* Funnel */}
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;