"use client";

import { useEffect, useRef, useState } from "react";

export const GlowingEffect = ({
  children,
  className,
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  glowColor = "#B6CAFB",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovered(true));
      container.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovered(true));
        container.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      }}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-all duration-300"
          style={{
            background: `radial-gradient(${spread}px circle at var(--mouse-x) var(--mouse-y), ${glowColor}15, transparent 40%)`,
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered ? `0 0 20px ${glowColor}40, inset 0 0 20px ${glowColor}20` : 'none',
          }}
        />
      )}
      {children}
    </div>
  );
};
