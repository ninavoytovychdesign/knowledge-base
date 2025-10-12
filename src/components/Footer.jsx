import React from 'react';
import { FaBehance, FaLinkedin } from "react-icons/fa";
import { useLanguage } from '../lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full bg-black border-t border-[#1A1A1A] py-6 text-sm text-textSecondary">
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        {/* Копірайт - ліва сторона */}
        <div className="text-left">
          <span>{t('footerText')} • </span>
          <a href="/privacy" className="underline hover:bg-gradient-accent-text transition-colors duration-300">{t('privacyPolicy')}</a>
        </div>

        {/* Соцмережі - права сторона */}
        <div className="flex items-center gap-4">
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
    </footer>
  );
};

export default Footer;