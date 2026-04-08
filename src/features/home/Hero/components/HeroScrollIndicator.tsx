"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 3,  suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export function HeroScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".hero-stat");
    items.forEach((s) => { s.style.opacity = "0"; s.style.transform = "translateY(24px)"; });

    // Stagger the stat boxes in
    animate(items, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 600,
      ease: "outExpo",
      delay: stagger(140, { start: 1400 }),
    });

    // Animate each counter number
    el.querySelectorAll<HTMLElement>(".stat-number").forEach((counter) => {
      const target = parseInt(counter.dataset.value ?? "0", 10);
      const obj = { val: 0 };
      animate(obj, {
        val: [0, target],
        duration: 2000,
        ease: "outExpo",
        delay: 1600,
        onUpdate: () => {
          counter.textContent = Math.round(obj.val).toString();
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="mt-16 flex justify-center">
      <div className="flex items-stretch w-full max-w-2xl border border-neutral-800 divide-x divide-neutral-800">
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="hero-stat flex-1 text-center px-8 py-5">
            <div className="text-2xl font-bold text-white tracking-tighter flex items-baseline justify-center gap-0.5">
              <span className="stat-number tabular-nums" data-value={value}>0</span>
              <span className="text-white/70">{suffix}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

