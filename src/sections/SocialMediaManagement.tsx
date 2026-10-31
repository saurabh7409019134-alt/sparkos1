import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import MaskedRevealText from "../components/MaskedRevealText";
import ScrollHighlightText from "../components/ScrollHighlightText";
import cafePromo from "../assets/work-cafe-promo.jpg";
import socialCreative from "../assets/work-social-creative.jpg";

const PILLARS = [
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2.5" y="3.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 2v3M15 2v3M2.5 8.5h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7.5" cy="12.5" r="1.2" fill="currentColor" />
        <circle cx="11" cy="12.5" r="1.2" fill="currentColor" />
        <circle cx="14.5" cy="12.5" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: "Strategy & Content Calendars",
    description:
      "A tailored 30-day roadmap with data-backed content pillars, competitor research, and high-converting hooks.",
    tags: ["Monthly planning", "Hook research", "Content pillars"],
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 8.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </svg>
    ),
    title: "Reels & Creative Production",
    description:
      "High-impact reels, stylized carousels, and stories crafted to stop the scroll and capture attention.",
    tags: ["Instagram Reels", "YouTube Shorts", "Stories & Carousels"],
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Scheduling & Multi-Platform Publishing",
    description:
      "Full hands-off delivery. We format, write compelling captions, and publish directly during your peak reach hours.",
    tags: ["Optimal timing", "Caption writing", "Hashtag strategy"],
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17.5l4.5-5.5 4 3.5 7.5-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6.5h4.5v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Analytics & Monthly Growth Review",
    description:
      "Transparent reporting tracking impressions, audience growth, and creative performance to refine the strategy every month.",
    tags: ["Monthly report", "Creative audit", "Strategy calls"],
  },
];

const PLATFORMS = ["Instagram", "YouTube Shorts", "LinkedIn", "Facebook", "TikTok"];

export default function SocialMediaManagement() {
  return (
    <section id="social-media" className="relative scroll-mt-24 py-20 lg:py-28">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-sparkos-blue/10 blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 h-[320px] w-[320px] rounded-full bg-sparkos-cyan/10 blur-[120px]" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Full-Funnel Management</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <MaskedRevealText
              text="Done-for-You Social Media Management That Drives Real Attention."
              highlightWords={["Attention."]}
            />
          </h2>
          <ScrollHighlightText
            text="We don't just post content — we plan, produce, schedule, and optimize your complete brand presence so you stay consistently top-of-mind without lifting a finger."
            className="mt-5 text-base leading-relaxed sm:text-lg"
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-wider text-white/40">Platforms:</span>
            {PLATFORMS.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/75"
              >
                {platform}
              </span>
            ))}
          </div>
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 70} className="h-full">
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sparkos-cyan/40 hover:bg-white/[0.04] hover:shadow-[0_16px_40px_-16px_rgba(0,229,255,0.25)]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sparkos-cyan transition-colors group-hover:border-sparkos-cyan/40 group-hover:bg-sparkos-cyan/10">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] font-medium text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Visual Showcase Banner */}
        <Reveal delay={200} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-10 backdrop-blur-sm">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-sparkos-cyan/30 bg-sparkos-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sparkos-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-sparkos-cyan animate-pulse" />
                  Consistent Cadence Guaranteed
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Save 20+ Hours Every Week While Increasing Your Reach.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  Every plan includes a designated monthly deliverable volume, full
                  calendar management, 1–2 revision rounds on every creative, and
                  organized delivery. Scale your audience without burnout.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button href="#pricing">Explore Pricing</Button>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sparkos-cyan transition-colors hover:text-white"
                  >
                    Discuss Your Social Strategy &rarr;
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={cafePromo}
                    alt="Social Media Promotion concept"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3.5">
                    <p className="text-xs font-semibold text-white">Daily Story &amp; Reel Cadence</p>
                    <p className="text-[10px] text-white/60">Organized weekly publishing</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 mt-6 sm:mt-8">
                  <img
                    src={socialCreative}
                    alt="Social Media Creative concept"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3.5">
                    <p className="text-xs font-semibold text-white">Strategic Promo Creative</p>
                    <p className="text-[10px] text-white/60">Testing &amp; iteration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
