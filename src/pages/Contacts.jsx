import React, { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Spotlight } from "../components/ui/spotlight";
import { motion, AnimatePresence } from "framer-motion";

export default function Contacts() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Повертаємо форму до початкового стану через 3 секунди
    setTimeout(() => {
      setIsSubmitted(false);
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-black bg-grid-white/[0.02] relative h-[800px]">
      <Spotlight />
      <section className="pt-[80px] pb-20 bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className="max-w-[600px] bg-transparent rounded-lg pt-0 pb-6 sm:pb-10 px-6 sm:px-10">
          <h1 className="text-[20px] sm:text-[24px] text-textPrimary text-left mb-4 font-helvetica">
            {t('contactTitle')}
          </h1>
          <p className="text-textSecondary text-left mb-8 sm:mb-10 font-helvetica">
            {t('contactDescription')}
          </p>

          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('nameLabel')}</label>
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
                disabled={isSubmitted}
              />
            </div>

            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('emailLabel')}</label>
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
                disabled={isSubmitted}
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
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 pr-12 sm:pr-16 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
                disabled={isSubmitted}
              />
              <div className="absolute bottom-3 right-3 text-xs sm:text-sm text-[#777777] font-helvetica">
                {message.length}/1000
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-black bg-white hover:opacity-90 transition mx-auto flex items-center justify-between px-3 sm:px-4 font-helvetica text-sm sm:text-base"
              disabled={isSubmitted}
            >
              <span>{t('sendButton')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-lg"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-black px-8 py-6 rounded-lg text-center"
                >
                  <div className="text-green-600 text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                  <p className="text-gray-600">Your message has been sent.</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}