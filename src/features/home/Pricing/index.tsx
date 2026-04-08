"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { SectionHeader } from "@/components/ui";
import { pricingConfig } from "@/config";
import { usePricingToggle } from "./hooks";
import { PricingToggle, PricingCard } from "./components";

export function Pricing() {
  const { annual, setAnnual } = usePricingToggle();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>(".pricing-card");
    cards.forEach((c) => {
      (c as HTMLElement).style.opacity = "0";
      (c as HTMLElement).style.transform =
        "translateY(60px) scale(0.88) rotateX(12deg)";
      (c as HTMLElement).style.transformOrigin = "top center";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(cards, {
            opacity: [0, 1],
            translateY: [60, 0],
            scale: [0.88, 1],
            rotateX: [12, 0],
            duration: 850,
            ease: "outBack",
            delay: stagger(180, { from: "center" }),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={pricingConfig.label}
          title={pricingConfig.title}
          subtitle={pricingConfig.subtitle}
        />

        <PricingToggle annual={annual} onToggle={setAnnual} />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingConfig.plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} annual={annual} />
          ))}
        </div>
      </div>

      <div className="absolute top-40 left-10 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white/5"></div>
    </section>
  );
}
