"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AnimeOnViewOptions {
  targets?: string;
  params: Record<string, unknown>;
  threshold?: number;
  once?: boolean;
}

export function useAnimeOnView<T extends HTMLElement = HTMLElement>({
  params,
  threshold = 0.2,
  once = true,
}: AnimeOnViewOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(el, params as Parameters<typeof animate>[1]);
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [params, threshold, once]);

  return ref;
}
