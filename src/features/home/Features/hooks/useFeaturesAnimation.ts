"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function useFeaturesAnimation() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const cards = el.querySelectorAll<HTMLElement>(".feature-card");
        cards.forEach((card) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(60px) rotateX(20deg) scale(0.92)";
            card.style.transformOrigin = "top center";
        });

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animate(cards, {
                        opacity: [0, 1],
                        translateY: [60, 0],
                        rotateX: [20, 0],
                        scale: [0.92, 1],
                        duration: 900,
                        ease: "outExpo",
                        delay: stagger(130, { from: "first" }),
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { sectionRef };
}
