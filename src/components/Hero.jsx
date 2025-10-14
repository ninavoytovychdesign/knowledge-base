import React, { useState, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Spotlight } from "./ui/spotlight";

export function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Анімація тайтлу
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
      
      // Хаотичне з'явлення літер
      const titleText = t('heroTitleHighlight') + t('heroTitleLine2');
      const totalLetters = titleText.length;
      const visibleLetters = [];
      
      // Створюємо масив індексів для хаотичного порядку
      const indices = Array.from({ length: totalLetters }, (_, i) => i);
      const shuffledIndices = indices.sort(() => Math.random() - 0.5);
      
      // Додаємо літери по черзі з випадковою затримкою
      shuffledIndices.forEach((index, i) => {
        setTimeout(() => {
          visibleLetters.push(index);
          setLettersVisible([...visibleLetters]);
        }, i * 20 + Math.random() * 30); // 20-50ms між літерами
      });
      
    }, 500);

    return () => {
      clearTimeout(titleTimer);
    };
  }, [t]);

  // Функція для рендерингу тексту з анімацією літер
  const renderAnimatedText = (text, className = '', startIndex = 0) => {
    return text.split('').map((letter, index) => (
      <span
        key={startIndex + index}
        className={`transition-all duration-150 ${
          lettersVisible.includes(startIndex + index) 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-75'
        } ${className}`}
        style={{
          transitionDelay: `${Math.random() * 100}ms`
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
          <section className="relative flex flex-col items-center justify-start h-[800px] bg-black bg-grid-white/[0.02] pt-36">
      {/* Spotlight Effect */}
      <Spotlight />
      
      {/* Контент */}
      <div className="text-center max-w-[600px] px-6 relative z-10">
        {/* Ім'я та прізвище */}
        <div className={`inline-block text-[16px] font-medium text-textPrimary font-helvetica mb-3 px-4 py-1 bg-[#141414]/30 border border-[#1A1A1A] rounded-[50px] transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t('heroName')}
        </div>
        
        {/* Основний тайтл */}
        <h1 className={`text-[28px] font-medium leading-[130%] font-helvetica transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-white !important" style={{ color: 'white !important' }}>
            <div>
              {renderAnimatedText(t('heroTitleHighlight'), 'text-white', 0)}
            </div>
            <div className="text-white !important" style={{ color: 'white !important' }}>
              {renderAnimatedText(t('heroTitleLine2'), 'text-white', t('heroTitleHighlight').length)}
            </div>
          </div>
        </h1>
        
        {/* Sparkles effect - temporarily hidden */}
        {/* <div className="w-full h-16 sm:h-24 lg:h-32 relative" style={{ marginTop: '8px' }}>
          {/* Gradients */}
          {/* <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
