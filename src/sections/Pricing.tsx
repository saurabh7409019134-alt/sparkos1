import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import MaskedRevealText from "../components/MaskedRevealText";
import ScrollHighlightText from "../components/ScrollHighlightText";

type Plan = {
  name: string;
  price: string;
  period: string;
  badge?: string;
  featured?: boolean;
  deliverables: string[];
  includesLabel: string;
  includes: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    deliverables: ["8 Reels", "8 Posts", "12 Stories", "2 Ad Creatives"],
    includesLabel: "Includes",
    includes: [
      "Monthly content strategy",
      "Content calendar",
      "AI-assisted content creation",
      "Captions",
      "Basic research",
      "Scheduling",
      "Monthly performance report",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹25,000",
    period: "/month",
    badge: "Most Popular",
    featured: true,
    deliverables: ["12 Reels", "12 Posts", "20 Stories", "4 Ad Creatives"],
    includesLabel: "Includes",
    includes: [
      "Everything in Starter",
      "Advanced content strategy",
      "Competitor and content research",
      "Creative testing",
      "Basic social media management",
      "Monthly strategy review",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Scale",
    price: "₹40,000",
    period: "/month",
    deliverables: ["16 Reels", "16 Posts", "30 Stories", "8 Ad Creatives"],
    includesLabel: "Includes",
    includes: [
      "Everything in Growth",
      "Advanced content strategy",
      "Multiple creative concepts",
      "Ad creative testing",
      "Optimization",
      "Detailed monthly report",
      "Strategy call",
    ],
    cta: "Scale With Sparkos",
  },
  {
    name: "Custom",
    price: "₹60,000+",
    period: "/month",
    deliverables: [
      "Custom content volume",
      "Custom ad production",
      "Influencer campaigns & seeding",
      "Product shoots",
      "UGC-style videos",
      "AI product photography",
      "Additional platforms",
      "Custom growth systems",
    ],
    includesLabel: "Scoped to your needs",
    includes: [
      "Discussed according to requirements",
    ],
    cta: "Talk to Sparkos",
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0 text-sparkos-cyan"
    >
      <path
        d="m3 8.5 3.2 3.2L13 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_50%_20%,rgba(0,58,255,0.08),transparent_70%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <MaskedRevealText text="Choose Your Growth Level." highlightWords={["Growth"]} />
          </h2>
          <ScrollHighlightText
            text="Start with the right scope for your business and expand when you're ready."
            className="mt-5 text-base leading-relaxed sm:text-lg"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-transparent bg-gradient-to-b from-sparkos-blue/25 via-white/[0.04] to-white/[0.02] shadow-[0_20px_70px_-20px_rgba(0,58,255,0.55)] ring-1 ring-sparkos-blue/60 hover:shadow-[0_24px_80px_-18px_rgba(0,58,255,0.7)] xl:scale-[1.04]"
                    : "border-white/10 bg-white/[0.02] hover:border-sparkos-cyan/40 hover:shadow-[0_16px_48px_-20px_rgba(0,229,255,0.35)]"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-sparkos-blue to-sparkos-cyan px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_-6px_rgba(0,58,255,0.8)]">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-lg font-semibold uppercase tracking-[0.12em] text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.featured ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-white/50">
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {plan.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-[15px] font-medium text-white/85"
                    >
                      <CheckIcon />
                      {d}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {plan.includesLabel}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-1">
                  <Button
                    href="#contact"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/45">
            Final scope, timelines, platform access, and production
            requirements are confirmed before work begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
