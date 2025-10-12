import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#000]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-3xl leading-tight text-[#E6E6E6] md:text-5xl md:leading-[1.15] tracking-tight">
          I'm Nina Voytovych<br />
          UI/UX Designer
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-3xl text-base text-[#777777] md:text-lg">
          I'm passionate about crafting clear, empathetic and precise digital
          experiences. I combine artistic background with analytical UX thinking
          and enjoy transforming complex ideas into elegant, useful interfaces.
        </p>

        {/* Logos card */}
        <div className="mt-10">
          <BrandsCard />
        </div>
      </div>
    </section>
  );
}

function BrandsCard() {
  const items = [
    { label: "Spotify", src: "/logos/spotify.svg", href: "https://open.spotify.com/", alt: "Spotify" },
    { label: "Projector Institute", src: "/logos/projector.svg", href: "https://prjctr.com/", alt: "Projector" },
    { label: "CV (PDF)", src: "/logos/cv.svg", href: "/CV.pdf", alt: "CV" },
  ];

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-[#333333] 
        bg-[#1A1A1A] p-5 md:p-8 card-shine
      "
    >
      {/* glowing border on hover */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(120deg, rgba(182,202,251,0.35), rgba(189,179,255,0.35))",
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          padding: "1px",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              className="
                flex items-center gap-4 rounded-xl border border-transparent 
                p-4 transition-colors hover:border-[#333333]
              "
              href={it.href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={it.src}
                alt={it.alt}
                className="h-9 w-9 shrink-0 md:h-10 md:w-10"
              />
              <span className="text-sm text-[#E6E6E6] md:text-base">
                {it.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
