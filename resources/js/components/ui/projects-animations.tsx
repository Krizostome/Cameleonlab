import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsAnimations() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const heroTitle = document.querySelector(".page-hero h1");
    const heroP = document.querySelector(".page-hero p");

    const ctx = gsap.context(() => {
      if (heroTitle) {
        gsap.fromTo(heroTitle, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heroP) {
        gsap.fromTo(heroP, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power3.out" });
      }

      gsap.fromTo(filterBtns, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.3, ease: "power3.out" });

      gsap.fromTo(cards, { y: 60, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".projects-grid", start: "top 85%", toggleActions: "play none none reverse" },
      });

      cards.forEach((card) => {
        const img = card.querySelector(".project-image img") as HTMLElement;
        const overlay = card.querySelector(".project-overlay") as HTMLElement;
        const overlayLink = card.querySelector(".project-overlay a") as HTMLElement;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, scale: 1.02, duration: 0.4, ease: "power2.out" });
          if (img) gsap.to(img, { scale: 1.08, duration: 0.5, ease: "power2.out" });
          if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
          if (overlayLink) gsap.to(overlayLink, { y: 0, duration: 0.3, delay: 0.1, ease: "back.out(1.5)" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
          if (img) gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
          if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" });
          if (overlayLink) gsap.to(overlayLink, { y: 20, duration: 0.2, ease: "power2.in" });
        });
      });

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", function (this: HTMLElement) {
          filterBtns.forEach((b) => {
            b.classList.remove("active");
            gsap.to(b, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
          this.classList.add("active");
          gsap.fromTo(this, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });

          const filter = this.getAttribute("data-filter");
          cards.forEach((card) => {
            const cat = card.getAttribute("data-category");
            if (filter === "all" || cat === filter) {
              gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out", display: "block" });
            } else {
              gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in", onComplete: () => { card.style.display = "none"; } });
            }
          });
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}
