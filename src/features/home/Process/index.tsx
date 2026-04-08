"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { SectionHeader } from "@/components/ui";
import { processConfig } from "@/config";
import { ProcessStep } from "./components";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const steps = Array.from(el.querySelectorAll<HTMLElement>(".process-step"));
    steps.forEach((s, i) => {
      s.style.opacity = "0";
      s.style.transform = `translateX(${i % 2 === 0 ? -60 : 60}px) scale(0.95)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((step, i) => {
            animate(step, {
              opacity: [0, 1],
              translateX: [i % 2 === 0 ? -60 : 60, 0],
              scale: [0.95, 1],
              duration: 800,
              ease: "outExpo",
              delay: i * 130,
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={processConfig.label}
          title={processConfig.title}
          subtitle={processConfig.subtitle}
        />

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/30 md:left-1/2"></div>

          {processConfig.steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-20 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-white/5"></div>
    </section>
  );
}
