import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberpunkMarquee from './components/CyberpunkMarquee';
import Games from './components/Games';
import Technology from './components/Technology';
import Team from './components/Team';
import Footer from './components/Footer';
import GamesPage from './pages/GamesPage';
import TechnologyPage from './pages/TechnologyPage';

// Track initial site load across navigation
let isInitialSiteLoad = true;

function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}

function HomePage() {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(isInitialSiteLoad);

  useEffect(() => {
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [state]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    isInitialSiteLoad = false;
  };

  return (
    <>
      {!isLoading && <Navbar />}
      <Hero onLoadingComplete={handleLoadingComplete} showLoading={isLoading} />
      <CyberpunkMarquee />
      <Games />
      <Technology showSpline={true} />
      <Team />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={
            <>
              <Navbar />
              <GamesPage />
            </>
          } />
          <Route path="/technology" element={
            <>
              <Navbar />
              <TechnologyPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}