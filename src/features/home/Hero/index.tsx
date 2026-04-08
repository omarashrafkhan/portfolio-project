"use client";

import { Badge } from "@/components/ui";
import { heroConfig } from "@/config";
import { useHeroMouseEffect, useHeroAnime } from "./hooks";
import {
  HeroHeadline,
  HeroButtons,
  HeroShape,
  HeroScrollIndicator,
} from "./components";

export function Hero() {
  const { shapeRef } = useHeroMouseEffect();
  const { containerRef } = useHeroAnime();

  return (
    <section className="relative flex items-center px-10 py-[100px] sm:py-[110px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_70%)]"></div>
        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-badge mb-6">
              <Badge
                variant="outline"
                className="border-white/30 text-white/80 uppercase tracking-widest text-xs"
              >
                {heroConfig.badge}
              </Badge>
            </div>

            <div className="hero-headline">
              <HeroHeadline />
            </div>

            <p className="hero-description text-neutral-400 mb-8 max-w-md text-lg leading-relaxed">
              {heroConfig.description}
            </p>

            <div className="hero-buttons">
              <HeroButtons />
            </div>
          </div>

          <div className="hero-shape">
            <HeroShape ref={shapeRef} />
          </div>
        </div>

        <HeroScrollIndicator />
      </div>
    </section>
  );
}
