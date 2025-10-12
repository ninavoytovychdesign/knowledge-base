import React from "react";
import { useLanguage } from "../../lib/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex justify-center items-center">
          <div className="max-w-[600px] bg-transparent rounded-lg p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-[20px] sm:text-[24px] leading-tight text-[#E6E6E6] tracking-tight font-helvetica mb-4 text-left">
          {t('aboutTitle')}
        </h1>

        {/* Paragraph */}
        <div className="text-[18px] text-textSecondary text-left mb-8 sm:mb-10 font-helvetica space-y-3 sm:space-y-4">
          <p>
            {t('aboutText1')}
          </p>
          <p>
            {t('aboutText2')}
          </p>
          <p>
            {t('aboutText3')}
          </p>
          <p>
            {t('aboutText4')}
          </p>
        </div>

          </div>
        </div>
      </div>

    </section>
  );
}

