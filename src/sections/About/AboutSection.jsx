import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex justify-center items-center">
          <div className="max-w-[600px] bg-transparent rounded-lg p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-[20px] sm:text-[24px] leading-tight text-[#E6E6E6] tracking-tight font-helvetica mb-4 text-left">
          About
        </h1>

        {/* Paragraph */}
        <div className="text-[18px] text-textSecondary text-left mb-8 sm:mb-10 font-helvetica space-y-3 sm:space-y-4">
          <p>
            I'm Nina Voytovych, a UI/UX designer based in Italy.
          </p>
          <p>
            With a background in art and a passion for user-centered design, I craft products that combine functionality, emotion, and visual clarity. My work spans SaaS platforms, civic tech, and e-commerce — blending research, clean aesthetics, and attention to detail.
          </p>
          <p>
            Beyond design, I explore how AI and code can empower creative processes and make design smarter.
          </p>
        </div>

          </div>
        </div>
      </div>

    </section>
  );
}

