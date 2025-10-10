import { FaBehance, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Встановлюємо активну вкладку на основі поточного роуту
    if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/contacts') {
      setActiveSection('contacts');
    } else {
      setActiveSection('home');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Тільки для головної сторінки відстежуємо скрол
      if (location.pathname === '/') {
        const sections = ['home', 'contacts'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);


  return (
    <header className="w-full border-b border-[#1A1A1A] sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-[1440px] mx-auto px-12 h-20">
        <div className="grid grid-cols-3 items-center h-full">
          
          {/* Лого - ліва колонка */}
          <div className="text-[16px] font-medium text-textPrimary">
            Nina Voytovych
          </div>

          {/* Навігація - середня колонка (центрована) */}
          <nav className="flex justify-center">
            <ul className="flex gap-12 text-[16px] font-regular">
            <li>
              <Link 
                to="/"
                className={`transition-colors duration-300 ${
                  activeSection === 'home' 
                    ? 'bg-gradient-accent-text' 
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`transition-colors duration-300 ${
                  activeSection === 'about' 
                    ? 'bg-gradient-accent-text' 
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contacts"
                className={`transition-colors duration-300 ${
                  activeSection === 'contacts' 
                    ? 'bg-gradient-accent-text' 
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                Contacts
              </Link>
            </li>
          </ul>
          </nav>

          {/* Соцмережі - права колонка */}
          <div className="flex justify-end gap-4">
          <a 
            href="https://www.behance.net/ninavoytovych" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center"
          >
            <FaBehance className="w-6 h-6 text-textPrimary hover:text-textSecondary transition-colors duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nina-voytovych/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center"
          >
            <FaLinkedin className="w-6 h-6 text-textPrimary hover:text-textSecondary transition-colors duration-300" />
          </a>
          </div>
        </div>
      </div>
    </header>
  );
}