import React, { useState, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";

export function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Анімація тайтлу
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-[800px] bg-black">
      {/* Контент */}
      <div className="text-center max-w-[880px] px-6">
        <h1 className={`text-[28px] font-medium text-textPrimary leading-[130%] font-helvetica transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-accent-text">
            {t('heroTitleHighlight')}
          </div>
          <div>
            {t('heroTitleLine2')}
          </div>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
