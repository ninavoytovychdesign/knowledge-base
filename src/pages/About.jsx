import React from 'react';
import AboutSection from '../sections/About/AboutSection';
import { Spotlight } from '../components/ui/spotlight';

export default function About() {
  return (
    <div className="bg-black bg-grid-white/[0.02] relative h-[800px]">
      <Spotlight />
      <div className="relative z-10">
        <AboutSection />
      </div>
    </div>
  );
}
