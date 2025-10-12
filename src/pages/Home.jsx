import React from 'react';
import Hero from '../components/Hero.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
