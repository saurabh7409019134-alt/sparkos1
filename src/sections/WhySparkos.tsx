import type { ReactElement } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

type Benefit = {
  title: string;
  description: string;
  icon: ReactElement;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  fill: "none",
  "aria-hidden": true,
} as const;

const benefits: Benefit[] = [
  {
    title: "AI-Powered",
    description: "Use AI to support research, ideation, and production.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M11 2 3.5 6.5v7L11 18l7.5-4.5v-7L11 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 7.5v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="11" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Human Creativity",
    description: "Human review and creative judgment shape the final work.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M15 3.5 18.5 7 8.5 17l-5 1.5L5 13.5 15 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Consistent Execution",
    description: "Follow an organized content and delivery process.",
    icon: (
      <svg {...iconProps}>
        <rect
          x="3"
          y="4"
          width="16"
          height="15"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3 9h16M7.5 2.5V6M14.5 2.5V6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="m7 13 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Scope",
    description:
      "Choose an appropriate package and expand as requirements grow.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M4 7h14M4 11h14M4 15h9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Multiple Capabilities",
    description:
      "Access content, automation, websites, AI agents, and video services through one agency.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M11 3 3.5 7.5 11 12l7.5-4.5L11 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m3.5 12 7.5 4.5L18.5 12M3.5 16.5 11 21l7.5-4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhySparkos() {
  return (
    <section id="why" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Than Content. A Growth System.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            The way Sparkos works — combining modern tools, human judgment,
            and organized delivery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 100}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sparkos-cyan/40 hover:shadow-[0_16px_48px_-20px_rgba(0,229,255,0.35)]">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-sparkos-blue/40 bg-gradient-to-br from-sparkos-blue/25 to-sparkos-cyan/10 text-sparkos-cyan"
                >
                  {benefit.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}

          {/* Sixth cell: quiet brand anchor to balance the grid */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-sparkos-blue/40 bg-gradient-to-br from-sparkos-blue/[0.08] to-transparent p-7">
              <p className="text-lg font-semibold leading-snug text-white">
                One partner for content, systems, and{" "}
                <span className="bg-gradient-to-r from-sparkos-blue to-sparkos-cyan bg-clip-text text-transparent">
                  growth.
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Start with content, add automation, websites, or video when
                you&apos;re ready.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
