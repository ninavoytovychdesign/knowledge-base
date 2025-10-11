import React from 'react';
import { CertificatesSection } from '../components/CertificatesSection.jsx';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <main className="py-8">
        {/* Секція про мене */}
        <section className="py-20">
          <div className="flex justify-center">
            <div className="flex gap-6 w-[1344px]">
              {/* Текстовий блок */}
              <div className="w-[660px] flex-shrink-0">
                <h2 className="text-[32px] font-medium text-textPrimary leading-[120%] mb-8 font-poppins">
                  {t('aboutTitle')}
                </h2>
                
                <div className="space-y-6">
                  <p className="text-[20px] font-light text-textSecondary leading-[130%] font-poppins">
                    {t('aboutText1')}
                  </p>
                  
                  <p className="text-[20px] font-light text-textSecondary leading-[130%] font-poppins">
                    {t('aboutText2')}
                  </p>
                  
                  <p className="text-[20px] font-light text-textSecondary leading-[130%] font-poppins">
                    {t('aboutText3')}
                  </p>
                  
                  <p className="text-[20px] font-light text-textSecondary leading-[130%] font-poppins">
                    {t('aboutText4')}
                  </p>
                  
                  <p className="text-[20px] font-light text-textSecondary leading-[130%] font-poppins">
                    {t('aboutText5')}
                  </p>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className="flex-shrink-0 pt-[75px] ml-[10px]">
                <div className="grid grid-cols-2 gap-6">
                  {/* Card 1 - Podcast Guest */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="https://open.spotify.com/episode/2LFjZ4nII3Z3iQDHqxlk0L?si=9133db58bd8f422d&nd=1&dlsi=27a591b0e5fb4461"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center"
                    >
                      {/* Spotify Icon - Centered */}
                      <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[32px] font-medium text-textPrimary font-poppins mb-2 leading-[120%] text-center">{t('podcastGuest')}</h3>
                      
                      {/* Subtitle */}
                      <p className="text-sm text-[#1DB954] font-medium text-center">{t('listenOnSpotify')}</p>
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
                  
                  {/* Card 3 - Certificates */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="#certificates"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center"
                    >
                      {/* Projector Institute Logo - Centered */}
                      <div className="w-20 h-12 flex items-center justify-center mb-4">
                        <svg className="w-full h-full" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Projector Institute Logo */}
                          <rect x="10" y="15" width="40" height="30" rx="3" fill="#4F46E5"/>
                          <rect x="15" y="20" width="30" height="20" rx="2" fill="#1E1B4B"/>
                          <circle cx="30" cy="30" r="6" fill="#6366F1"/>
                          <rect x="20" y="28" width="20" height="1.5" fill="#A5B4FC"/>
                          <rect x="25" y="31" width="10" height="1" fill="#A5B4FC"/>
                          <rect x="30" y="34" width="5" height="0.5" fill="#A5B4FC"/>
                          {/* Base */}
                          <rect x="25" y="45" width="10" height="6" rx="1" fill="#4F46E5"/>
                          <rect x="20" y="51" width="20" height="3" rx="1" fill="#6366F1"/>
                          {/* Text "PROJECTOR" */}
                          <text x="60" y="25" fill="#4F46E5" fontSize="12" fontWeight="bold" fontFamily="Arial">PROJECTOR</text>
                          <text x="60" y="40" fill="#6366F1" fontSize="8" fontFamily="Arial">INSTITUTE</text>
                        </svg>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[32px] font-medium text-textPrimary font-poppins mb-2 leading-[120%] text-center">{t('certificates')}</h3>
                      
                      {/* Subtitle */}
                      <p className="text-[16px] text-textSecondary font-medium text-center">{t('projectorInstitute')}</p>
                    </a>
                  </div>
                  
                  {/* Card 4 - CV */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center"
                    >
                      {/* Download Arrow Icon - Centered */}
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-textSecondary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 13.17V7h2v6.17l2.59-2.58L16 12l-5 5z"/>
                        </svg>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[32px] font-medium text-textPrimary font-poppins mb-2 leading-[120%] text-center">CV</h3>
                      
                      {/* Subtitle */}
                      <p className="text-[16px] text-textSecondary font-medium text-center">{t('downloadPdf')}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* Certificates Section */}
      <CertificatesSection />
    </div>
  );
}
