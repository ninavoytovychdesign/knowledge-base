import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Loader from './components/Loader.jsx';
import CursorGlow from './components/CursorGlow.jsx';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(() => {
    // Показуємо лоадер тільки при першому відкритті головної сторінки
    const isHomePage = location.pathname === '/';
    const hasSeenLoader = localStorage.getItem('homeLoaded');
    const shouldShowLoader = isHomePage && !hasSeenLoader;
    
    console.log('Loader debug:', {
      pathname: location.pathname,
      isHomePage,
      hasSeenLoader,
      shouldShowLoader
    });
    
    return shouldShowLoader;
  });

  useEffect(() => {
    // Якщо це перше завантаження головної сторінки, показуємо лоадер
    if (isLoading) {
      console.log('Loader started - will hide in 3 seconds');
      const timer = setTimeout(() => {
        console.log('Loader finished - hiding now');
        setIsLoading(false);
        localStorage.setItem('homeLoaded', 'true');
      }, 3000); // 3 секунди завантаження

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="noise-texture"></div>
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
      <CursorGlow />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;