import React, { useState, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Advanced UX",
      image: "/certificate4.png",
      bgColor: "bg-[#101014]",
    },
    {
      title: "Design Thinking",
      image: "/certificate3.png",
      bgColor: "bg-[#3548FE]",
    },
    {
      title: "Product Design", 
      image: "/certificate2.png",
      bgColor: "bg-[#101014]",
    },
    {
      title: "UX/UI Design",
      image: "/certificate1.png",
      bgColor: "bg-[#101014]",
    },
  ];

  const [floatPhase, setFloatPhase] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatPhase(prev => prev + 0.008);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20">
      <div className="flex justify-center">
        <div className="w-[1344px]">
          <h3 className="text-[32px] font-medium text-textPrimary leading-[120%] mb-8 font-helvetica text-left">
            My Certificates
          </h3>
          
          {/* Stacked Certificates Layout */}
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[300px]">
              {certificates.map((certificate, index) => {
                // Floating calculations
                const floatOffset = index * 0.3; // Different phase for each certificate
                const floatAmplitude = 6; // Gentler floating movement
                const floatSpeed = 0.5; // Much slower floating speed
                
                // Vertical floating movement
                const floatY = Math.sin(floatPhase * floatSpeed + floatOffset) * floatAmplitude;
                
                // Horizontal floating movement (smaller)
                const floatX = Math.cos(floatPhase * floatSpeed * 0.7 + floatOffset) * (floatAmplitude * 0.4);
                
                // Rotation floating (very subtle)
                const floatRotation = Math.sin(floatPhase * floatSpeed * 0.5 + floatOffset) * 1;
                
                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 transition-all duration-500 ease-out hover:scale-105 group"
                    style={{
                      transform: `
                        translate(${index * 15 + floatX}px, ${index * 20 + floatY}px) 
                        rotate(${index * -2 + floatRotation}deg)
                      `,
                      zIndex: hoveredIndex === index ? 100 : certificates.length - index,
                      transformOrigin: 'center center'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="max-w-[350px] max-h-[230px] object-contain rounded-lg shadow-lg border-2 border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40 cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
