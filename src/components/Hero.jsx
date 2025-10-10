import React, { useState, useEffect } from "react";

export function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    // Спочатку тайтл
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    // Потім опис
    const descriptionTimer = setTimeout(() => {
      setDescriptionVisible(true);
    }, 1000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 pb-[60px] bg-black">
      {/* Контент */}
      <div className="text-center max-w-[808px] px-6">
        <h1 className={`text-5xl font-medium text-textPrimary transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-accent-text">
            UI/UX Designer
          </span>{" "}
          creating intuitive & aesthetic digital experiences
        </h1>
        <p className={`mt-6 text-[20px] text-textSecondary transition-all duration-1000 ease-out ${
          descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          I'm Nina Voytovych! I specialize in crafting user-centered websites and
          digital products — from e-commerce redesigns to investment dashboards
          and mobile apps. My work combines a strong artistic background with
          analytical UX thinking, helping transform complex ideas into clear,
          engaging interfaces.
        </p>
      </div>
    </section>
  );
}

export default Hero;
