import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full bg-black border-t border-[#1A1A1A] py-6 text-center text-sm text-textSecondary">
      <div className="max-w-screen-xl mx-auto px-12">
        {t('footerText')}
        <br />
        <a href="/privacy" className="underline hover:bg-gradient-accent-text transition-colors duration-300">{t('privacyPolicy')}</a>
      </div>
    </footer>
  );
};

export default Footer;