"use client";

import { ArrowRight } from "lucide-react";
import { heroConfig } from "@/config";

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#work"
        className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
      >
        {heroConfig.buttons.primary.label}
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      <a
        href="#contact"
        className="border border-neutral-700 px-8 py-3 text-sm uppercase tracking-widest text-neutral-400 hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
      >
        {heroConfig.buttons.secondary.label}
      </a>
    </div>
  );
}
