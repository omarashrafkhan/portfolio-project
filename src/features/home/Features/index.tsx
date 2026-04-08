"use client";

import { SectionHeader } from "@/components/ui";
import { featuresConfig } from "@/config";
import { useFeaturesAnimation } from "./hooks";
import { FeatureCard } from "./components";

export function Features() {
  const { sectionRef } = useFeaturesAnimation();

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={featuresConfig.label}
          title={featuresConfig.title}
          subtitle={featuresConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresConfig.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}
