import React from "react";
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

  return (
    <div className="w-full py-20">
      <div className="flex justify-center">
        <div className="w-[1344px]">
          <h3 className="text-[32px] font-medium text-textPrimary leading-[120%] mb-8 font-poppins text-left">
            My Certificates
          </h3>
          <div className="flex items-center gap-6">
        {certificates.map((certificate, index) => (
          <DraggableCardBody key={index} className="">
            <img
              src={certificate.image}
              alt={certificate.title}
              className={`pointer-events-none relative z-10 w-[328px] h-[218px] object-contain rounded-lg ${certificate.bgColor}`}
            />
          </DraggableCardBody>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}
