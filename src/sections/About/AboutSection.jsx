import React, { useState, useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { getAssetPath } from "../../utils/assetPath";

export default function AboutSection() {
  const { t } = useLanguage();
  const [hoveredCertificate, setHoveredCertificate] = useState(null);
  const [lettersVisible, setLettersVisible] = useState([]);

  useEffect(() => {
    // Анімація літер для заголовків
    const titleText = t('aboutTitle') + ' ' + t('certificates');
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
      }, i * 80 + Math.random() * 120); // 80-200ms між літерами
    });
  }, [t]);

  // Функція для рендерингу тексту з анімацією літер
  const renderAnimatedText = (text, className = '', startIndex = 0) => {
    return text.split('').map((letter, index) => (
      <span
        key={startIndex + index}
        className={`transition-all duration-300 ${
          lettersVisible.includes(startIndex + index) 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-75'
        } ${className}`}
        style={{
          transitionDelay: `${Math.random() * 200}ms`
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const certificates = [
    {
      id: 1,
      image: getAssetPath('certificate1.png'),
      title: 'UX Research Fundamentals',
      institution: 'Projector Institute'
    },
    {
      id: 2,
      image: getAssetPath('certificate2.png'),
      title: 'UI Design Principles',
      institution: 'Projector Institute'
    },
    {
      id: 3,
      image: getAssetPath('certificate3.png'),
      title: 'Design Systems',
      institution: 'Projector Institute'
    },
    {
      id: 4,
      image: getAssetPath('certificate4.png'),
      title: 'Advanced UX Methods',
      institution: 'Projector Institute'
    }
  ];
  return (
    <>
      {/* Title */}
      <h1 className="text-[20px] sm:text-[24px] text-textPrimary text-left mb-4 font-helvetica">
        {renderAnimatedText(t('aboutTitle'), 'text-textPrimary', 0)}
      </h1>

      {/* Paragraph */}
      <div className="text-textSecondary text-left mb-8 sm:mb-10 font-helvetica space-y-3 sm:space-y-4">
        <p>
          {t('aboutText1')}
        </p>
        <p>
          {t('aboutText2')}
        </p>
        <p>
          {t('aboutText3')}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-[60px] flex justify-start">
        <div className="flex gap-6">
          <div className="w-[288px] h-[288px] max-w-[288px] flex-shrink-0 inline-block">
            <div className="relative bg-[#141414]/30 border border-[#1A1A1A] rounded-lg p-6 h-full flex flex-col items-center justify-center hover:bg-[#1A1A1A]/40 transition-all duration-300">
              <img src={getAssetPath('logos/spotify-logo.svg.png')} alt="Spotify Logo" className="w-[160px] h-[60px] object-contain mb-4 mx-auto" />
              <p className="text-white text-[12px] font-helvetica font-medium text-center">
                Podcast Guest
              </p>
            </div>
          </div>
          
          <div className="w-[288px] h-[288px] max-w-[288px] flex-shrink-0 inline-block">
            <div className="relative bg-[#141414]/30 border border-[#1A1A1A] rounded-lg p-6 h-full flex flex-col items-center justify-center hover:bg-[#1A1A1A]/40 transition-all duration-300">
              <img src={getAssetPath('logos/projector-logo.png')} alt="Projector Logo" className="w-[160px] h-[60px] object-contain mb-4 mx-auto" />
              <p className="text-white text-[12px] font-helvetica font-medium text-center">
                My Certificates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-[60px] hidden">
        <div className="text-left mb-6">
          <h2 className="text-[20px] sm:text-[24px] text-white font-helvetica font-medium">
            {renderAnimatedText(t('certificates'), 'text-white', t('aboutTitle').length)}
          </h2>
        </div>
        
               <div className="flex justify-center items-center gap-3 overflow-visible pb-4">
                 {certificates.slice().reverse().map((certificate) => (
                   <div
                     key={certificate.id}
                     className="flex-shrink-0 relative"
                     onMouseEnter={() => setHoveredCertificate(certificate.id)}
                     onMouseLeave={() => setHoveredCertificate(null)}
                   >
                     <img
                       src={certificate.image}
                       alt={certificate.title}
                       className="w-[120px] h-auto rounded-lg hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                     />
                   </div>
                 ))}
                 {/* Blur overlay */}
                 <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-700 ease-in-out pointer-events-none ${hoveredCertificate ? 'opacity-100' : 'opacity-0'}`}></div>
                 {/* Enlarged certificate overlay */}
                 {certificates.slice().reverse().map((certificate) => (
                   <div
                     key={`enlarged-${certificate.id}`}
                     className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-in-out pointer-events-none ${hoveredCertificate === certificate.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                   >
                     <img
                       src={certificate.image}
                       alt={certificate.title}
                       className="w-[600px] h-auto rounded-lg grayscale-0"
                     />
                   </div>
                 ))}
        </div>
      </div>
    </>
  );
}

