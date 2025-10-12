import React from 'react';
import { FaBehance, FaLinkedin } from "react-icons/fa";
import { useLanguage } from '../lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <div className="relative">
      {/* Marquee */}
      <div className="absolute bottom-[64px] left-0 w-full bg-black border-t border-[#1A1A1A] py-1 overflow-hidden z-0">
        <div className="marquee">
          <div className="marquee-content text-[64px] text-transparent font-bold font-helvetica uppercase" style={{ WebkitTextStroke: '1px #1A1A1A' }}>
            SaaS · Fintech · Civic Tech · Mobile Apps · E-commerce · Branding · AI-enhanced Workflows · SaaS · Fintech · Civic Tech · Mobile Apps · E-commerce · Branding · AI-enhanced Workflows · SaaS · Fintech · Civic Tech · Mobile Apps · E-commerce · Branding · AI-enhanced Workflows
          </div>
        </div>
      </div>
      
      <footer className="w-full bg-[#141414]/30 backdrop-blur-md border-t border-[#1A1A1A] h-16 text-sm text-textSecondary relative z-10 opacity-90">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Копірайт - ліва сторона */}
        <div className="text-left">
          <span>{t('footerText')} • </span>
          <a href="/privacy" className="underline hover:bg-gradient-accent-text transition-colors duration-300">{t('privacyPolicy')}</a>
        </div>

        {/* Соцмережі - права сторона */}
        <div className="flex items-center gap-3 sm:gap-4">
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
    </div>
  );
};

export default Footer;