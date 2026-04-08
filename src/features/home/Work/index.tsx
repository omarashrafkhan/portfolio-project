"use client";

import { useState, useEffect, useRef } from "react";
import { animate } from "animejs";
import { ArrowRight } from "lucide-react";
import { SectionHeader, Button } from "@/components/ui";
import { workConfig } from "@/config";
import { ProjectCard } from "./components";

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>(".work-card"));
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(60px) scale(0.93)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cards.forEach((card, i) => {
            animate(card, {
              opacity: [0, 1],
              translateX: [i % 2 === 0 ? -70 : 70, 0],
              translateY: [60, 0],
              scale: [0.93, 1],
              duration: 950,
              ease: "outExpo",
              delay: i * 120,
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
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              {workConfig.label}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              {workConfig.title}
              <br />
              <span className="text-white/70">{workConfig.subtitle}</span>
            </h2>
            <Button
              variant="secondary"
              className="border-2 border-white/20 hover:border-white hover:bg-white/5 group"
            >
              View All Work
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workConfig.projects.map((project, index) => (
            <div
              key={index}
              className="work-card"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                year={project.year}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
    </section>
  );
}
