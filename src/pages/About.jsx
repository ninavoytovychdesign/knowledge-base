import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [floatPhase, setFloatPhase] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatPhase(prev => prev + 0.008);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  return (
    <div className="bg-background">
      <main className="py-8">
        {/* Секція про мене */}
        <section className="py-20">
          <div className="flex justify-center">
            <div className="flex gap-6 w-[1344px]">
              {/* Текстовий блок */}
              <div className="w-[600px] flex-shrink-0">
                <h2 className="text-[24px] font-medium text-textPrimary leading-[120%] mb-8 font-helvetica">
                  {t('aboutTitle')}
                </h2>
                
                <div className="space-y-6">
                           <p className="text-[16px] font-light text-textSecondary leading-[130%] font-helvetica">
                             {t('aboutText1')}
                           </p>
                           
                           <p className="text-[16px] font-light text-textSecondary leading-[130%] font-helvetica">
                             {t('aboutText2')}
                           </p>
                           
                           <p className="text-[16px] font-light text-textSecondary leading-[130%] font-helvetica">
                             {t('aboutText3')}
                           </p>
                           
                           <p className="text-[16px] font-light text-textSecondary leading-[130%] font-helvetica">
                             {t('aboutText4')}
                           </p>
                           
                           <p className="text-[16px] font-light text-textSecondary leading-[130%] font-helvetica">
                             {t('aboutText5')}
                           </p>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className="flex-shrink-0 ml-[10px] pt-[20px]">
                <div className="grid grid-cols-2 gap-6">
                  {/* Card 1 - Podcast Guest */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="https://open.spotify.com/episode/2LFjZ4nII3Z3iQDHqxlk0L?si=9133db58bd8f422d&nd=1&dlsi=27a591b0e5fb4461"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-between"
                    >
                      {/* Spotify Icon - Centered */}
                      <div className="w-48 h-20 flex items-center justify-center mx-auto mt-14">
                        <img 
                          src="/logos/spotify-logo.svg.png" 
                          alt="Spotify Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Title and Text Container */}
                      <div className="flex flex-col items-center">
                        <h3 className="text-[20px] font-medium text-textPrimary font-helvetica mb-2 leading-[120%] text-center">{t('podcastGuest')}</h3>
                        <p className="text-sm text-[#1DB954] font-medium font-helvetica text-center">{t('listenOnSpotify')}</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Card 2 - My Photo */}
                  <div className="relative h-full rounded-lg bg-[#141414] transition-all duration-300 overflow-hidden hover:bg-[#1B1B1B]">
                    <img 
                      src="/nina-photo.jpg" 
                      alt="Nina Voytovych" 
                      className="w-[307px] h-[307px] object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  
                  {/* Certificates - Free Floating */}
                  <div 
                    className="relative w-[320px] h-[320px]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    {[
                      "/certificate1.png",
                      "/certificate2.png", 
                      "/certificate3.png",
                      "/certificate4.png"
                    ].map((certificate, index) => {
                      // Floating calculations
                      const floatOffset = index * 0.3; // Different phase for each certificate
                      const floatAmplitude = 8; // Larger amplitude for free floating
                      const floatSpeed = 0.5; // Same speed as main section
                      
                      // Vertical floating movement
                      const floatY = Math.sin(floatPhase * floatSpeed + floatOffset) * floatAmplitude;
                      
                      // Horizontal floating movement
                      const floatX = Math.cos(floatPhase * floatSpeed * 0.7 + floatOffset) * (floatAmplitude * 0.4);
                      
                      // Rotation floating
                      const floatRotation = Math.sin(floatPhase * floatSpeed * 0.5 + floatOffset) * 2;
                      
                      return (
                        <div
                          key={index}
                          className="absolute top-0 left-0 transition-all duration-300 ease-magnetic group"
                          style={{
                            transform: `
                              translate(${index * 25 + floatX + (hoveredIndex === index ? mousePosition.x * 20 : 0)}px, ${index * 30 + floatY + (hoveredIndex === index ? mousePosition.y * 20 : 0)}px) 
                              rotate(${index * -2 + floatRotation}deg)
                              scale(${hoveredIndex === index ? 1.3 : 1})
                            `,
                            zIndex: hoveredIndex === index ? 100 : 4 - index,
                            transformOrigin: 'center center',
                            filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
                            opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1
                          }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <img
                            src={certificate}
                            alt={`Certificate ${index + 1}`}
                            className="max-w-[250px] max-h-[180px] object-contain rounded-lg shadow-lg border border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40 cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Card 4 - CV */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-between"
                    >
                      {/* Text File Icon - Centered */}
                      <div className="w-20 h-20 flex items-center justify-center mx-auto mt-14">
                        <img 
                          src="/logos/text-file.svg" 
                          alt="Text File Icon" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Title and Text Container */}
                      <div className="flex flex-col items-center">
                        <h3 className="text-[20px] font-medium text-textPrimary font-helvetica mb-2 leading-[120%] text-center">{t('cvTitle')}</h3>
                        <p className="text-[14px] text-textSecondary font-medium font-helvetica text-center">{t('downloadPdf')}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
               </main>
             </div>
  );
}
