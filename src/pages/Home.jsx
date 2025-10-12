import React from 'react';
import Hero from '../components/Hero.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';

export default function Home() {
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
