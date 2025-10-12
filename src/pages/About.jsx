import React from 'react';
import AboutSection from '../sections/About/AboutSection';
import { Spotlight } from '../components/ui/spotlight';

export default function About() {
  return (
    <div className="bg-black bg-grid-white/[0.02] relative h-[800px]">
      <Spotlight />
      <section className="pt-[80px] pb-20 bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className="max-w-[600px] bg-transparent rounded-lg pt-0 pb-6 sm:pb-10 px-6 sm:px-10">
              <AboutSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
