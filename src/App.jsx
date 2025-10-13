import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import CursorGlow from './components/CursorGlow.jsx';

function App() {
  return (
    <Router basename="/knowledge-base">
      <div className="min-h-screen flex flex-col bg-background">
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
    </Router>
  );
}

export default App;