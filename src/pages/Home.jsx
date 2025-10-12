import React from 'react';
import Hero from '../components/Hero.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';
import FloatingGradientBackground from '../components/FloatingGradientBackground.jsx';

export default function Home() {
  return (
    <div className="relative">
      <FloatingGradientBackground />
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
