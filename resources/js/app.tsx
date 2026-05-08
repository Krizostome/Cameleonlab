import React from 'react';
import { createRoot } from 'react-dom/client';

const heroContainer = document.getElementById('react-hero-root');

async function mountHero(container: HTMLElement) {
  try {
    const { default: CinematicHeroDemo } = await import('./components/ui/cinematic-hero-demo');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <CinematicHeroDemo />
      </React.StrictMode>
    );
  } catch (e) {
    console.warn('[CameleonLab] Hero failed to load, showing fallback:', e);
  }
}

if (heroContainer) {
  mountHero(heroContainer);
}

const timelineContainer = document.getElementById('react-timeline-root');

async function mountTimeline(container: HTMLElement) {
  try {
    const { default: RadialOrbitalTimelineDemo } = await import('./components/ui/radial-orbital-timeline-demo');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <RadialOrbitalTimelineDemo />
      </React.StrictMode>
    );
  } catch (e) {
    console.warn('[CameleonLab] Timeline failed to load:', e);
  }
}

if (timelineContainer) {
  mountTimeline(timelineContainer);
}
