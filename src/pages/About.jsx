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
                <h2 className="text-[24px] font-medium text-textPrimary leading-[120%] mb-8 font-helvetica">
                  {t('aboutTitle')}
                </h2>
                
                <div className="space-y-6">
                  <p className="text-[14px] font-light text-textSecondary leading-[130%] font-helvetica">
                    {t('aboutText1')}
                  </p>
                  
                  <p className="text-[14px] font-light text-textSecondary leading-[130%] font-helvetica">
                    {t('aboutText2')}
                  </p>
                  
                  <p className="text-[14px] font-light text-textSecondary leading-[130%] font-helvetica">
                    {t('aboutText3')}
                  </p>
                  
                  <p className="text-[14px] font-light text-textSecondary leading-[130%] font-helvetica">
                    {t('aboutText4')}
                  </p>
                  
                  <p className="text-[14px] font-light text-textSecondary leading-[130%] font-helvetica">
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
                  
                  {/* Card 3 - Certificates */}
                  <div className="relative h-full rounded-lg bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1B1B1B]">
                    <a 
                      href="#certificates"
                      className="w-[260px] h-[260px] rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex flex-col items-center justify-between"
                    >
                      {/* Projector Institute Logo - Centered */}
                      <div className="flex items-center justify-center mx-auto mt-14 rounded bg-white overflow-hidden">
                        <img 
                          src="/logos/projector-logo.png" 
                          alt="Projector Institute Logo" 
                          className="h-20 object-contain rounded"
                        />
                      </div>
                      
                      {/* Title and Text Container */}
                      <div className="flex flex-col items-center">
                        <h3 className="text-[20px] font-medium text-textPrimary font-helvetica mb-2 leading-[120%] text-center">{t('certificates')}</h3>
                        <p className="text-[14px] text-textSecondary font-medium font-helvetica text-center">{t('projectorInstitute')}</p>
                      </div>
                    </a>
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

      {/* Certificates Section */}
      <CertificatesSection />
    </div>
  );
}
