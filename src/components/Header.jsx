import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { getAssetPath } from "../utils/assetPath";

export default function Header() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      if (location.pathname === '' || location.pathname === '/') {
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16">
        <div className="flex justify-between items-center h-full">
          
          {/* Лого - ліва сторона */}
          <div className="h-6">
            <img 
              src={getAssetPath('logos/nina-logo.svg')} 
              alt="Nina Voytovych Logo" 
              className="h-full w-auto"
            />
          </div>

          {/* Перемикач мов та навігація - права сторона */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Language Switcher - прихований на мобайлі */}
            <div className="relative group hidden sm:block">
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

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="flex gap-6 text-[16px] font-regular font-helvetica">
                <li>
                  <Link 
                    to="/"
                    className={`transition-colors duration-300 ${
                      activeSection === 'home' 
                        ? 'text-white' 
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
                        ? 'text-white' 
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
                        ? 'text-white' 
                        : 'text-textSecondary hover:text-textPrimary'
                    }`}
                  >
                    {t('contacts')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden flex items-center justify-center w-8 h-8 text-textSecondary hover:text-textPrimary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden bg-[#141414] border-t border-[#1A1A1A] transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4">
          {/* Mobile Language Switcher */}
          <div className="mb-4">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-3 py-1 rounded text-sm font-helvetica transition-colors duration-200 ${
                    currentLanguage === lang.code 
                      ? 'bg-[#1A1A1A] text-textPrimary' 
                      : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {lang.flag} {lang.code}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav>
            <ul className="flex flex-col gap-2">
              <li>
                <Link 
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-[16px] font-helvetica transition-colors duration-300 ${
                    activeSection === 'home' 
                      ? 'text-white bg-[#1A1A1A]' 
                      : 'text-textSecondary hover:text-textPrimary hover:bg-[#1A1A1A]'
                  }`}
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-[16px] font-helvetica transition-colors duration-300 ${
                    activeSection === 'about' 
                      ? 'text-white bg-[#1A1A1A]' 
                      : 'text-textSecondary hover:text-textPrimary hover:bg-[#1A1A1A]'
                  }`}
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-[16px] font-helvetica transition-colors duration-300 ${
                    activeSection === 'contacts' 
                      ? 'text-white bg-[#1A1A1A]' 
                      : 'text-textSecondary hover:text-textPrimary hover:bg-[#1A1A1A]'
                  }`}
                >
                  {t('contacts')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}