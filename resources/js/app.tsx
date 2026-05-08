import React from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import CinematicHeroDemo from './components/ui/cinematic-hero-demo';
import RadialOrbitalTimelineDemo from './components/ui/radial-orbital-timeline-demo';

const heroContainer = document.getElementById('react-hero-root');


function mountHero(container: HTMLElement) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <CinematicHeroDemo />
      </React.StrictMode>
    );
    console.log('[CameleonLab] Hero React mounted successfully');
  } catch (e) {
    console.warn('[CameleonLab] Hero failed to load:', e);
  }
}

if (heroContainer) {
  mountHero(heroContainer);
}

const timelineContainer = document.getElementById('react-timeline-root');

function mountTimeline(container: HTMLElement) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <RadialOrbitalTimelineDemo />
      </React.StrictMode>
    );
    console.log('[CameleonLab] Timeline React mounted successfully');
  } catch (e) {
    console.warn('[CameleonLab] Timeline failed to load:', e);
  }
}

if (timelineContainer) {
  mountTimeline(timelineContainer);
}
