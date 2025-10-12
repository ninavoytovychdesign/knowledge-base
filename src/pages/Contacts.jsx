import React, { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Spotlight } from "../components/ui/spotlight";

export default function Contacts() {
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  return (
    <div className="bg-black bg-grid-white/[0.02] relative h-[800px]">
      <Spotlight />
      <section className="py-20 bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className="max-w-[600px] bg-transparent rounded-lg p-6 sm:p-10">
          <h1 className="text-[20px] sm:text-[24px] text-textPrimary text-left mb-4 font-helvetica">
            {t('contactTitle')}
          </h1>
          <p className="text-textSecondary text-left mb-8 sm:mb-10 font-helvetica">
            {t('contactDescription')}
          </p>

          <form className="flex flex-col gap-4 sm:gap-5">
            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('nameLabel')}</label>
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
              />
            </div>

            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('emailLabel')}</label>
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('messageLabel')}</label>
              <textarea
                placeholder={t('messagePlaceholder')}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 pr-12 sm:pr-16 focus:outline-none border border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
              />
              <div className="absolute bottom-3 right-3 text-xs sm:text-sm text-[#777777] font-helvetica">
                {message.length}/1000
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-black bg-white hover:opacity-90 transition mx-auto flex items-center justify-between px-3 sm:px-4 font-helvetica text-sm sm:text-base"
            >
              <span>{t('sendButton')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}