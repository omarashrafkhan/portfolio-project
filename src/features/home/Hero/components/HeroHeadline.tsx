"use client";

import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { heroConfig } from "@/config";

export function HeroHeadline() {
  return (
    <h1 className="mb-6">
      {heroConfig.headlines.map((headline, index) => (
        <div key={headline.text} className="overflow-hidden">
          <div className={`hero-line-${index + 1}`}>
            <TextGenerateEffect
              words={headline.text}
              className={`block text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter ${headline.className}`}
              duration={0.5}
              speed={0.2}
              initialDelay={0.2 + index * 0.15}
            />
          </div>
        </div>
      ))}
    </h1>
  );
}
