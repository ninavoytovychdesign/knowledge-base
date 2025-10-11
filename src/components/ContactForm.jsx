import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  return (
    <section className="flex justify-center items-center py-20 bg-black">
      <div className="w-[808px] bg-transparent rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-[#4C4C4C] text-center mb-4">
          {t('contactTitle')}
        </h2>
        <p className="text-[#777777] text-center mb-10">
          {t('contactDescription')}
        </p>

        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">{t('nameLabel')}</label>
            <input
              type="text"
              placeholder={t('namePlaceholder')}
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-lg px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">{t('emailLabel')}</label>
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-lg px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">{t('messageLabel')}</label>
            <textarea
              placeholder={t('messagePlaceholder')}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-lg px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
            <div className="text-right text-sm text-[#777777] mt-1">
              {message.length}/1000
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium text-black bg-gradient-accent hover:opacity-90 transition"
          >
            {t('sendButton')}
          </button>
        </form>
      </div>
    </section>
  );
}