import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import restaurantAd from "../assets/work-restaurant-ad.jpg";
import cafePromo from "../assets/work-cafe-promo.jpg";
import productCampaign from "../assets/work-product-campaign.jpg";

const stages = [
  "IDEA",
  "STRATEGY",
  "CREATE",
  "REVIEW",
  "PUBLISH",
  "IMPROVE",
];

const parts = [
  {
    image: restaurantAd,
    alt: "Cinematic close-up of a gourmet plated dish with blue rim lighting — a Sparkos concept for restaurant content",
    title: "Content Creation",
    description:
      "Reels, posts, stories, captions, and promotional creative.",
    points: [
      "Reels and short-form videos",
      "Posts, carousels, and stories",
      "Captions and creative planning",
      "Promotional creative",
    ],
  },
  {
    image: cafePromo,
    alt: "Barista pouring latte art in a dark café with blue accent light — a Sparkos concept for social media management",
    title: "Social Media Management",
    description:
      "Content planning, scheduling, publishing, and performance reviews.",
    points: [
      "Content planning and calendars",
      "Scheduling and publishing",
      "Monthly performance reviews",
      "Consistent posting cadence",
    ],
  },
  {
    image: productCampaign,
    alt: "Studio-lit cosmetic serum bottle with blue gradient light — a Sparkos concept for ad creative production",
    title: "Ad Creative Production",
    description:
      "Creative concepts for food advertisements, product promotions, and social campaigns.",
    points: [
      "Food advertisement concepts",
      "Product promotion creative",
      "Social campaign concepts",
      "Creative testing-ready assets",
    ],
  },
];

function StageArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden shrink-0 items-center px-2 text-sparkos-cyan/70 lg:flex"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 11h15m-5-5 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function FeaturedService() {
  return (
    <section id="featured" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,58,255,0.10),transparent_70%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Primary Service</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Brand Deserves More Than Random Posts.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Sparkos helps businesses plan, create, and manage consistent social
            media content with a clear production process and a focus on
            improving over time.
          </p>
        </Reveal>

        {/* Visual workflow */}
        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              How every project moves
            </p>
            {/* Desktop connecting line (behind the numbered nodes) */}
            <span
              aria-hidden="true"
              className="absolute left-16 right-16 top-[104px] hidden h-px bg-gradient-to-r from-transparent via-sparkos-blue/50 to-transparent lg:block sm:top-[112px]"
            />
            <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-center lg:gap-0">
              {stages.map((stage, i) => (
                <li key={stage} className="flex items-center">
                  <div className="relative flex flex-1 flex-col items-center gap-3 rounded-xl border border-white/10 bg-sparkos-ink/80 px-4 py-5 text-center transition-colors duration-300 hover:border-sparkos-cyan/40 lg:border-0 lg:bg-transparent lg:py-0">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-sparkos-cyan/40 bg-sparkos-ink bg-gradient-to-br from-sparkos-blue/30 to-sparkos-cyan/10 text-sm font-bold text-sparkos-cyan shadow-[0_0_24px_-6px_rgba(0,229,255,0.5)]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold tracking-[0.14em] text-white">
                      {stage}
                    </span>
                  </div>
                  {i < stages.length - 1 && <StageArrow />}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Three parts */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {parts.map((part, i) => (
            <Reveal key={part.title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-sparkos-blue/50 hover:shadow-[0_16px_48px_-16px_rgba(0,58,255,0.45)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-sparkos-ink/70 via-transparent to-transparent"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {part.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                    {part.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {part.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/70"
                      >
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
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
