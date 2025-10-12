"use client";
import React from "react";

export function Spotlight() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main spotlight */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full bg-gradient-radial from-white/10 via-white/5 to-transparent opacity-60 blur-3xl"></div>
      
      {/* Secondary light spots */}
      <div className="absolute top-1/6 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-gradient-radial from-blue-500/20 via-blue-500/10 to-transparent opacity-40 blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent opacity-40 blur-2xl"></div>
      
      {/* Additional accent lights */}
      <div className="absolute top-1/4 right-1/3 w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] rounded-full bg-gradient-radial from-pink-500/15 via-pink-500/5 to-transparent opacity-30 blur-xl"></div>
      <div className="absolute bottom-1/2 left-1/3 w-[120px] sm:w-[250px] h-[120px] sm:h-[250px] rounded-full bg-gradient-radial from-cyan-500/15 via-cyan-500/5 to-transparent opacity-30 blur-xl"></div>
    </div>
  );
}
