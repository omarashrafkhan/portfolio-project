"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

export function useHeroAnime() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const badge = el.querySelector<HTMLElement>(".hero-badge");
    const line1 = el.querySelector<HTMLElement>(".hero-line-1");
    const line2 = el.querySelector<HTMLElement>(".hero-line-2");
    const line3 = el.querySelector<HTMLElement>(".hero-line-3");
    const desc = el.querySelector<HTMLElement>(".hero-description");
    const buttons = el.querySelector<HTMLElement>(".hero-buttons");
    const shape = el.querySelector<HTMLElement>(".hero-shape");

    // Set initial states
    if (badge) { badge.style.opacity = "0"; badge.style.transform = "scale(0.75)"; }
    if (line1) { line1.style.transform = "translateY(110%) skewY(6deg)"; }
    if (line2) { line2.style.transform = "translateY(110%) skewY(6deg)"; }
    if (line3) { line3.style.transform = "translateY(110%) skewY(6deg)"; }
    if (desc) { desc.style.opacity = "0"; desc.style.transform = "translateX(-40px)"; }
    if (buttons) { buttons.style.opacity = "0"; buttons.style.transform = "translateY(20px) scale(0.97)"; }
    if (shape) { shape.style.opacity = "0"; shape.style.transform = "scale(0.8) rotate(-6deg)"; }

    const tl = createTimeline({ defaults: { ease: "outExpo" }, autoplay: true });

    if (badge) tl.add(badge, { opacity: [0, 1], scale: [0.75, 1], duration: 600 });
    if (line1) tl.add(line1, { translateY: ["110%", "0%"], skewY: [6, 0], duration: 850 }, "-=200");
    if (line2) tl.add(line2, { translateY: ["110%", "0%"], skewY: [6, 0], duration: 850 }, "-=650");
    if (line3) tl.add(line3, { translateY: ["110%", "0%"], skewY: [6, 0], duration: 850 }, "-=650");
    if (desc) tl.add(desc, { opacity: [0, 1], translateX: [-40, 0], duration: 700, ease: "outCubic" }, "-=400");
    if (buttons) tl.add(buttons, { opacity: [0, 1], translateY: [20, 0], scale: [0.97, 1], duration: 600 }, "-=450");
    if (shape) tl.add(shape, { opacity: [0, 1], scale: [0.8, 1], rotate: [-6, 0], duration: 1000, ease: "outBack" }, "-=1200");
  }, []);

  return { containerRef };
}
