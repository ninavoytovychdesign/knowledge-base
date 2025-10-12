import React, { useState, useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";

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
      image: '/certificate1.png',
      title: 'UX Research Fundamentals',
      institution: 'Projector Institute'
    },
    {
      id: 2,
      image: '/certificate2.png',
      title: 'UI Design Principles',
      institution: 'Projector Institute'
    },
    {
      id: 3,
      image: '/certificate3.png',
      title: 'Design Systems',
      institution: 'Projector Institute'
    },
    {
      id: 4,
      image: '/certificate4.png',
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

      {/* Spotify Card */}
      <div className="mt-[60px]">
        <div className="bg-[#141414]/60 border border-[#1A1A1A] rounded-lg p-4 sm:p-6">
          <div className="flex flex-col items-start relative">
            <img src="/logos/spotify-logo.svg.png" alt="Spotify Logo" className="w-[120px] h-[40px] object-contain mb-3" />
            <div className="flex flex-col items-start text-left">
              <h3 className="text-white text-[16px] font-medium font-helvetica">Junior's Diary</h3>
              <p className="text-textSecondary text-[14px] font-helvetica">Podcast Guest</p>
            </div>
                   <button 
                     className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A]/60 hover:bg-[#E6E6E6] hover:text-black transition flex items-center justify-center absolute top-0 right-0 group"
                     onClick={() => window.open('https://open.spotify.com/episode/2LFjZ4nII3Z3iQDHqxlk0L?si=9133db58bd8f422d&nd=1&dlsi=27a591b0e5fb4461', '_blank')}
                   >
                     <svg className="w-4 h-4 text-white group-hover:text-black transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-[60px]">
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

