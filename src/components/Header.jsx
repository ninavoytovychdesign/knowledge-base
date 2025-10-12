import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";

export default function Header() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'EN', flag: '🇺🇸', name: 'English' },
    { code: 'UA', flag: '🇺🇦', name: 'Українська' },
    { code: 'IT', flag: '🇮🇹', name: 'Italiano' }
  ];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
  };

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
      <div className="max-w-[1440px] mx-auto px-6 h-16">
        <div className="flex justify-between items-center h-full">
          
          {/* Лого - ліва сторона */}
          <div className="text-[22px] font-medium font-helvetica">
            <span className="text-textPrimary">Nina </span>
            <span className="text-white">Voytovych</span>
          </div>

          {/* Перемикач мов та навігація - права сторона */}
          <div className="flex items-center gap-8">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-1 rounded-lg bg-transparent hover:bg-[#1A1A1A] transition-colors duration-300">
                <span className="text-sm text-textPrimary font-medium font-helvetica">{currentLanguage}</span>
                <svg className="w-3 h-3 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 bg-[#141414] border border-[#1A1A1A] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-helvetica hover:bg-[#1A1A1A] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      currentLanguage === lang.code ? 'text-textPrimary' : 'text-textSecondary'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="whitespace-nowrap">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Навігація */}
            <nav>
              <ul className="flex gap-12 text-[16px] font-regular font-helvetica">
              <li>
                <Link 
                  to="/"
                  className={`transition-colors duration-300 ${
                    activeSection === 'home' 
                      ? 'bg-gradient-accent-text' 
                      : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {t('home')}
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
                  {t('about')}
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
                  {t('contacts')}
                </Link>
              </li>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}