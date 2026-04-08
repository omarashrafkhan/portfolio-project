import { Code2, Palette, Layers, Zap } from "lucide-react";

export const heroConfig = {
    badge: "Full-Stack Developer & UI/UX Designer",
    headlines: [
        { text: "OMAR", className: "" },
        { text: "ASHRAF", className: "text-neutral-400" },
        { text: "KHAN", className: "" },
    ],
    description:
        "I craft high-performance digital experiences — from pixel-perfect interfaces to robust full-stack applications. Precision meets impact.",
    buttons: {
        primary: { label: "View My Work" },
        secondary: { label: "Get In Touch" },
    },
    shapeAnimationDelay: 0.6,
};

export const featuresConfig = {
    label: "What I Do",
    title: "Skills &",
    subtitle: "Expertise",
    features: [
        {
            icon: Code2,
            title: "Full-Stack Development",
            description:
                "End-to-end web apps built with Next.js, React, Node.js, and modern databases — fast, scalable, and production-ready.",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description:
                "User-centred interfaces crafted with precision — wireframes, prototypes, and polished visual designs that convert.",
        },
        {
            icon: Layers,
            title: "Brand Identity",
            description:
                "Cohesive visual identities that make businesses stand out — logos, style guides, and digital brand assets.",
        },
        {
            icon: Zap,
            title: "Performance & SEO",
            description:
                "Lighthouse-optimised sites with blazing load times, core web vitals compliance, and on-page SEO built in.",
        },
    ],
};

export const workConfig = {
    label: "Selected Work",
    title: "Featured",
    subtitle: "Projects",
    projects: [
        {
            title: "ECOMMERCE",
            subtitle: "Full-Stack Platform",
            image: "/works/1.webp?height=600&width=800",
            year: "2024",
        },
        {
            title: "DASHFLOW",
            subtitle: "SaaS Dashboard UI",
            image: "/works/2.webp?height=600&width=800",
            year: "2024",
        },
        {
            title: "BRANDKIT",
            subtitle: "Brand Identity System",
            image: "/works/3.webp?height=600&width=800",
            year: "2023",
        },
        {
            title: "SWIFTAPP",
            subtitle: "Mobile-First Web App",
            image: "/works/4.webp?height=600&width=800",
            year: "2023",
        },
    ],
};

export const processConfig = {
    label: "How I Work",
    title: "My Process",
    subtitle: "Start to Finish",
    steps: [
        {
            number: "01",
            title: "Discovery",
            description:
                "We deep-dive into your goals, audience, and competitors to build a clear picture of what success looks like for your project.",
        },
        {
            number: "02",
            title: "Strategy",
            description:
                "A focused plan: tech stack selection, information architecture, and a delivery roadmap aligned with your business targets.",
        },
        {
            number: "03",
            title: "Design",
            description:
                "High-fidelity mockups and interactive prototypes — refined through feedback until every pixel earns its place.",
        },
        {
            number: "04",
            title: "Development",
            description:
                "Clean, documented code built with Next.js, TypeScript, and the right tools — optimised for speed and maintainability.",
        },
        {
            number: "05",
            title: "Launch",
            description:
                "Seamless deployment, cross-device QA, and post-launch support to ensure your product lands without a hitch.",
        },
    ],
};

export const testimonialsConfig = {
    label: "Testimonials",
    title: "What Clients",
    subtitle: "Say About Me",
    testimonials: [
        {
            quote:
                "Omar delivered our e-commerce platform ahead of schedule and exceeded every expectation. The attention to performance and design detail is unmatched.",
            author: "Ayesha Tariq",
            role: "Founder, ThreadPK",
        },
        {
            quote:
                "Working with Omar was effortless. He understood our SaaS product vision instantly and turned it into a dashboard that our users love every day.",
            author: "James Whitfield",
            role: "CTO, Streamline HQ",
        },
        {
            quote:
                "Our brand refresh completely transformed how customers perceive us. Omar's eye for clean, purposeful design gave us a huge competitive edge.",
            author: "Hira Baig",
            role: "Marketing Director, NovaCo",
        },
    ],
};

export const pricingConfig = {
    label: "Pricing",
    title: "Transparent",
    subtitle: "Pricing",
    plans: [
        {
            name: "Starter",
            description: "Perfect for small businesses & startups",
            monthlyPrice: 209,
            annualPrice: 2090,
            features: [
                "Up to 5-page website",
                "Responsive design",
                "Basic animations",
                "1 revision round",
                "14-day delivery",
                "Source code handover",
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Growth",
            description: "For brands ready to scale",
            monthlyPrice: 419,
            annualPrice: 4190,
            features: [
                "Everything in Starter",
                "Full-stack web application",
                "Advanced anime.js animations",
                "3 revision rounds",
                "CMS / dashboard integration",
                "10-day delivery",
                "30 days post-launch support",
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "For complex, high-traffic products",
            monthlyPrice: 909,
            annualPrice: 9090,
            features: [
                "Everything in Growth",
                "Custom design system",
                "API & third-party integrations",
                "Unlimited revisions",
                "SEO & performance audit",
                "Priority support",
                "5-day delivery",
            ],
            cta: "Book a Call",
            popular: false,
        },
    ],
};

export const contactConfig = {
    label: "Contact",
    title: "Let's Build",
    subtitle: "Something Great",
    info: {
        email: "omarashraf13456@gmail.com",
        phone: "+92 316 1053550",
        address: {
            street: "Available Remotely Worldwide",
            city: "Karachi, Sindh",
            country: "Pakistan",
        },
    },
};
