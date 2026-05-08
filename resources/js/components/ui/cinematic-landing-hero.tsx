"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, #2ECC71 0%, color-mix(in srgb, #2ECC71 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px rgba(46, 204, 113, 0.15)) 
          drop-shadow(0px 2px 4px rgba(46, 204, 113, 0.1));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #2ECC71 0%, #A9DFBF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #1E8449 0%, #0D1117 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(46, 204, 113, 0.08);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(46, 204, 113, 0.08) 0%, rgba(46, 204, 113, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(46, 204, 113, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #2ECC71 0%, #27AE60 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(46,204,113,0.2), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(46,204,113,0.3), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(46,204,113,0.3), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(46,204,113,0.4), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #27AE60 0%, #1E8449 100%);
      box-shadow: 0 0 0 1px rgba(46,204,113,0.2), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #2ECC71;
      box-shadow: 0 0 0 1px rgba(46,204,113,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(46,204,113,0.2), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(46,204,113,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 326;
      stroke-dashoffset: 326;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({ 
  brandName = "CameleonLab",
  tagline1 = "Nous construisons",
  tagline2 = "le web de demain.",
  cardHeading = "Solutions web innovantes",
  cardDescription = <><span className="text-white font-semibold">CameleonLab</span> conçoit des solutions web performantes et sur mesure pour propulser votre entreprise dans l&apos;ère digitale.</>,
  metricValue = 50,
  metricLabel = "Projets livrés",
  ctaHeading = "Prêt à innover ?",
  ctaDescription = "Donnons vie à vos projets digitaux avec des solutions modernes, performantes et évolutives.",
  className, 
  ...props 
}: CinematicHeroProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  },[]);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;

    try {
      const ctx = gsap.context(() => {
        gsap.set(".text-track", { opacity: 0, y: 30 });
        gsap.set(".text-days", { opacity: 0 });
        gsap.set(".main-card", { y: window.innerHeight + 200 });

        const introTl = gsap.timeline({ delay: 0 });
        introTl
          .to(".text-track", { duration: 0.8, opacity: 1, y: 0, ease: "expo.out" })
          .to(".text-days", { duration: 0.6, opacity: 1, ease: "expo.out" }, "-=0.4");

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=7000",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        scrollTl
          .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
          .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
          .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
          .fromTo(".mockup-scroll-wrapper",
            { y: 300, z: -500, rotationX: 50, rotationY: -30, opacity: 0, scale: 0.6 },
            { y: 0, z: 0, rotationX: 0, rotationY: 0, opacity: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
          )
          .fromTo(".phone-widget", { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
          .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
          .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
          .fromTo(".floating-badge", { y: 100, opacity: 0, scale: 0.7, rotationZ: -10 }, { y: 0, opacity: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
          .fromTo(".card-left-text", { x: -50, opacity: 0 }, { x: 0, opacity: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
          .fromTo(".card-right-text", { x: 50, opacity: 0, scale: 0.8 }, { x: 0, opacity: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
          .to({}, { duration: 2.5 })
          .set(".hero-text-wrapper", { opacity: 0 })
          .set(".cta-wrapper", { opacity: 1 }) 
          .to({}, { duration: 1.5 })
          .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
            scale: 0.9, y: -40, z: -200, opacity: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
          })
          .to(".main-card", { 
            width: isMobile ? "92vw" : "85vw", 
            height: isMobile ? "92vh" : "85vh", 
            borderRadius: isMobile ? "32px" : "40px", 
            ease: "expo.inOut", 
            duration: 1.8 
          }, "pullback") 
          .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
          .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

      }, containerRef);

      const fallbackTimer = setTimeout(() => {
        gsap.set([".text-track", ".text-days", ".cta-wrapper"], { clearProps: "opacity" });
      }, 3000);

      return () => {
        ctx.revert();
        clearTimeout(fallbackTimer);
      };
    } catch (e) {
      console.warn("GSAP error:", e);
    }
  },[metricValue]); 

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track text-3d-matte text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days text-silver-matte text-3xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 pointer-events-auto will-change-transform">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" aria-label="Démarrer un projet" className="btn-modern-light flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[1.125rem] group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 whitespace-nowrap">
            <svg className="w-5 h-5 transition-transform group-hover:scale-105 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] font-bold tracking-wider text-green-100 uppercase mb-[-1px]">Commencez</div>
              <div className="text-sm font-bold leading-none tracking-tight">Démarrer un projet</div>
            </div>
          </a>
          <a href="/projets" aria-label="Voir nos projets" className="btn-modern-dark flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[1.125rem] group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background whitespace-nowrap">
            <svg className="w-5 h-5 transition-transform group-hover:scale-105 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] font-bold tracking-wider text-green-300 uppercase mb-[-1px]">Découvrez</div>
              <div className="text-sm font-bold leading-none tracking-tight">Nos réalisations</div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            
            <div className="card-right-text order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0">
                {brandName}
              </h2>
            </div>

            <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">
                
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                >
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(46,204,113,0.8)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full pt-8 px-4 pb-6 flex flex-col">
                      <div className="phone-widget flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold mb-0.5">Live</span>
                          <span className="text-sm font-bold tracking-tight text-white drop-shadow-md">Dashboard</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center font-bold text-[10px] border border-green-500/20 shadow-lg shadow-black/50">CL</div>
                      </div>

                      <div className="phone-widget relative w-36 h-36 mx-auto flex items-center justify-center mb-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="72" cy="72" r="52" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                          <circle className="progress-ring" cx="72" cy="72" r="52" fill="none" stroke="#2ECC71" strokeWidth="10" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-2xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="text-[7px] text-green-200/50 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="phone-widget widget-depth rounded-xl p-2.5 flex items-center">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center mr-2 border border-green-400/20 shadow-inner shrink-0">
                            <svg className="w-3.5 h-3.5 text-green-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="h-1.5 w-16 bg-neutral-300 rounded-full mb-1.5 shadow-inner" />
                            <div className="h-1 w-10 bg-neutral-600 rounded-full shadow-inner" />
                          </div>
                        </div>
                        <div className="phone-widget widget-depth rounded-xl p-2.5 flex items-center">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mr-2 border border-emerald-400/20 shadow-inner shrink-0">
                            <svg className="w-3.5 h-3.5 text-emerald-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="h-1.5 w-12 bg-neutral-300 rounded-full mb-1.5 shadow-inner" />
                            <div className="h-1 w-20 bg-neutral-600 rounded-full shadow-inner" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl p-2.5 lg:p-3 items-center gap-2 lg:gap-3 z-30">
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-b from-green-500/20 to-green-900/10 flex items-center justify-center border border-green-400/30 shadow-inner">
                    <span className="text-sm lg:text-lg drop-shadow-lg" aria-hidden="true">🚀</span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] lg:text-sm font-bold tracking-tight whitespace-nowrap">30+ Clients</p>
                    <p className="text-green-200/50 text-[9px] lg:text-xs font-medium whitespace-nowrap">Satisfaits</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl p-2.5 lg:p-3 items-center gap-2 lg:gap-3 z-30">
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-b from-emerald-500/20 to-emerald-900/10 flex items-center justify-center border border-emerald-400/30 shadow-inner">
                    <span className="text-sm lg:text-lg drop-shadow-lg" aria-hidden="true">💚</span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] lg:text-sm font-bold tracking-tight whitespace-nowrap">5+ Années</p>
                    <p className="text-green-200/50 text-[9px] lg:text-xs font-medium whitespace-nowrap">D'expertise</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="card-left-text order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-0 lg:mb-4 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-blue-100/70 text-xs md:text-sm lg:text-base font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
