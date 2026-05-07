import React from 'react';
import { createRoot } from 'react-dom/client';
import CinematicHeroDemo from './components/ui/cinematic-hero-demo';
import RadialOrbitalTimelineDemo from './components/ui/radial-orbital-timeline-demo';

const heroContainer = document.getElementById('react-hero-root');

if (heroContainer) {
  const root = createRoot(heroContainer);
  root.render(
    <React.StrictMode>
      <CinematicHeroDemo />
    </React.StrictMode>
  );
}

const timelineContainer = document.getElementById('react-timeline-root');

if (timelineContainer) {
  const root = createRoot(timelineContainer);
  root.render(
    <React.StrictMode>
      <RadialOrbitalTimelineDemo />
    </React.StrictMode>
  );
}
