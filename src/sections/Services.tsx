import type { ReactElement } from "react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import heroFood from "../assets/hero-food.jpg";
import heroProduct from "../assets/hero-product.jpg";
import heroReel from "../assets/hero-reel.jpg";

function ContentIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2.5" y="4.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 8.8v4.4l3.8-2.2-3.8-2.2Z" fill="currentColor" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 11h17M11 2.5c2.6 2.3 3.9 5.2 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.2-3.9-8.5S8.4 4.8 11 2.5Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2.5" y="7" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 10.5l5-2.8v6.6l-5-2.8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.5 4.5l2-1.5M8 4.5l1.5-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-none">
      <path d="M2.5 7.3 5.8 10.5 11.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[15px] font-medium text-sparkos-cyan transition-colors hover:text-white"
    >
      {label}
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-300 group-hover/link:translate-x-1"
      >
        <path d="M2.5 8h11m-4.5-4.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

const PREVIEW_IMAGES = [
  { src: heroFood, alt: "Restaurant content concept: cinematic food advertisement" },
  { src: heroProduct, alt: "Product ad concept: premium product photography" },
  { src: heroReel, alt: "Social media creative concept: vertical reel preview" },
];

type Service = {
  num: string;
  title: string;
  badge?: string;
  description: string;
  capabilities: string[];
  cta: { label: string; href: string };
  icon: () => ReactElement;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "AI Content & Growth",
    badge: "Primary Service",
    description:
      "Build a consistent social presence with strategic content, social media management, and advertising creative.",
    capabilities: [
      "Reels and short-form videos",
      "Posts, carousels, and stories",
      "Content strategy and calendars",
      "Captions and creative planning",
      "Social media management",
      "Advertisement creative production",
      "Content performance reporting",
    ],
    cta: { label: "Explore Content & Growth", href: "#featured" },
    icon: ContentIcon,
    featured: true,
  },
  {
    num: "02",
    title: "AI Websites & AI Agents",
    description:
      "Build modern websites and intelligent customer experiences that help businesses capture inquiries and handle routine questions.",
    capabilities: [
      "Landing pages",
      "Business websites",
      "AI chatbots",
      "AI agents",
      "Lead qualification",
      "Customer support workflows",
    ],
    cta: { label: "Explore AI Systems", href: "#contact" },
    icon: WebIcon,
  },
  {
    num: "03",
    title: "Video Editing",
    description:
      "Transform raw footage and creative ideas into polished content for social media and advertising.",
    capabilities: [
      "Instagram Reels",
      "YouTube Shorts",
      "Product videos",
      "Social media ads",
      "Promotional videos",
      "Motion graphics",
    ],
    cta: { label: "Explore Video Editing", href: "#contact" },
    icon: VideoIcon,
  },
];

const cardBase =
  "group flex h-full flex-col rounded-3xl border bg-white/[0.02] p-7 transition-all duration-300 " +
  "hover:-translate-y-1.5 sm:p-8";

function CapabilityList({ items, twoCol = false }: { items: string[]; twoCol?: boolean }) {
  return (
    <ul className={`grid gap-x-6 gap-y-2.5 ${twoCol ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/65">
          <span className="text-sparkos-cyan"><CheckIcon /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Services — id="services". Four cards in exact priority order.
 * Card 01 (AI Content & Growth) is featured full-width with the
 * PRIMARY SERVICE badge, strongest emphasis, restrained accent glow,
 * and miniature content previews. Card 02 includes the looping
 * workflow animation.
 */
export default function Services() {
  const [primary, ...rest] = SERVICES;
  const PrimaryIcon = primary.icon;

  return (
    <section id="services" className="relative scroll-mt-24 py-20 lg:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Everything You Need to Grow With AI.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            From high-impact content creation to intelligent web experiences and video production, Sparkos helps
            businesses build a commanding digital presence.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* ── 01 · Featured: AI Content & Growth ── */}
          <Reveal className="lg:col-span-2" delay={80}>
            <article
              className={`${cardBase} relative overflow-hidden border-sparkos-cyan/25 bg-gradient-to-br from-sparkos-blue/[0.08] via-white/[0.02] to-transparent ` +
                `shadow-[0_0_50px_-12px_rgba(0,58,255,0.35)] ` +
                `hover:border-sparkos-cyan/50 hover:shadow-[0_0_70px_-10px_rgba(0,229,255,0.35)]`}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold tracking-[0.2em] text-white/35">
                      {primary.num}
                    </span>
                    <span className="rounded-full border border-sparkos-cyan/40 bg-sparkos-cyan/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sparkos-cyan">
                      {primary.badge}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-3.5">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-sparkos-cyan/25 bg-sparkos-cyan/[0.08] text-sparkos-cyan">
                      <PrimaryIcon />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-[28px]">
                      {primary.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                    {primary.description}
                  </p>
                  <div className="mt-6">
                    <CapabilityList items={primary.capabilities} twoCol />
                  </div>
                  <CardLink label={primary.cta.label} href={primary.cta.href} />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {PREVIEW_IMAGES.map((img) => (
                    <img
                      key={img.alt}
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ))}
                  <p className="col-span-3 text-xs text-white/40">
                    Miniature previews of restaurant content, product ads, and
                    social media creative.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ── 02–04 · Standard cards ── */}
          {rest.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.num} delay={120 + i * 80} className="h-full">
                <article
                  className={`${cardBase} border-white/10 hover:border-sparkos-cyan/40 hover:shadow-[0_16px_50px_-16px_rgba(0,229,255,0.3)]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-[0.2em] text-white/35">
                      {service.num}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sparkos-cyan transition-colors duration-300 group-hover:border-sparkos-cyan/30 group-hover:bg-sparkos-cyan/[0.08]">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <div className="mt-5">
                    <CapabilityList items={service.capabilities} />
                  </div>
                  <CardLink label={service.cta.label} href={service.cta.href} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
