import { useEffect, useRef, useState, type ReactElement } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import MaskedRevealText from "../components/MaskedRevealText";

type Step = {
  title: string;
  description: string;
  icon: ReactElement;
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": true,
} as const;

const steps: Step[] = [
  {
    title: "Discover",
    description:
      "Understand the business, audience, goals, and requirements.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="m13.5 13.5 3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Strategize",
    description: "Develop the content plan or workflow strategy.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M10 2.5 17 6.5v7L10 17.5 3 13.5v-7L10 2.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 6v4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="10" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Create",
    description: "Produce content or build the agreed solution.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M13.5 3.5 16.5 6.5 7.5 15.5l-4 1 1-4 9.5-9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Review",
    description: "Check quality, branding, accuracy, and functionality.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M10 2 3.5 4.5v5c0 4 2.8 6.8 6.5 8.5 3.7-1.7 6.5-4.5 6.5-8.5v-5L10 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m7 9.8 2.2 2.2L13.5 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Deliver",
    description:
      "Publish, hand over, or deploy the approved work according to the agreement.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M17.5 10v5.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 4 3h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M2.5 10h11m-3.5-3.5L13.5 10 10 13.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Improve",
    description:
      "Review available performance data and identify improvements.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M3 17h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M5 13.5v-4M10 13.5V6.5M15 13.5V4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Activate the timeline line immediately when there is no way to
  // animate it in — reduced-motion users or no IntersectionObserver.
  const [lineLive, setLineLive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });

  useEffect(() => {
    if (lineLive) return;
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineLive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [lineLive]);

  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-sparkos-ink py-20 sm:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <MaskedRevealText text="From Idea to Execution." highlightWords={["Execution."]} />
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-14">
          {/* Mobile vertical connecting line */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[27px] top-4 w-px bg-white/10 lg:hidden"
          />
          <span
            aria-hidden="true"
            className={`absolute bottom-4 left-[27px] top-4 w-px origin-top bg-gradient-to-b from-sparkos-blue to-sparkos-cyan transition-transform duration-[1400ms] ease-out lg:hidden ${
              lineLive ? "scale-y-100" : "scale-y-0"
            }`}
          />
          {/* Desktop horizontal connecting line */}
          <span
            aria-hidden="true"
            className="absolute left-[9%] right-[9%] top-[27px] hidden h-px bg-white/10 lg:block"
          />
          <span
            aria-hidden="true"
            className={`absolute left-[9%] right-[9%] top-[27px] hidden h-px origin-left bg-gradient-to-r from-sparkos-blue to-sparkos-cyan transition-transform duration-[1600ms] ease-out lg:block ${
              lineLive ? "scale-x-100" : "scale-x-0"
            }`}
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 90}>
                  <div className="flex items-start gap-4 lg:block lg:text-center">
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sparkos-blue/50 bg-sparkos-ink text-sparkos-cyan"
                    >
                      {step.icon}
                    </span>
                    <div className="lg:mt-5">
                      <p className="text-xs font-semibold tracking-[0.18em] text-sparkos-cyan/80">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
