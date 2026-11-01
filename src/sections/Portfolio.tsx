import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import MaskedRevealText from "../components/MaskedRevealText";
import ScrollHighlightText from "../components/ScrollHighlightText";
import restaurantAd from "../assets/work-restaurant-ad.jpg";
import cafePromo from "../assets/work-cafe-promo.jpg";
import cafePromoMp4 from "../assets/work-cafe-promo.mp4";
import productCampaign from "../assets/work-product-campaign.jpg";
import productCampaignMp4 from "../assets/work-product-campaign.mp4";
import videoThumbnail from "../assets/work-video-thumbnail.jpg";
import socialCreative from "../assets/work-social-creative.jpg";
import socialCreativeMp4 from "../assets/work-social-creative.mp4";
import productVideo from "../assets/work-product-video.jpg";
import productVideoMp4 from "../assets/work-product-video.mp4";

type Project = {
  id: string;
  title: string;
  categories: string[];
  creativeType: string;
  description: string;
  image: string;
  alt: string;
  video?: string;
};

const filters = [
  "All",
  "Restaurants",
  "Products",
  "Social Content",
  "Ads",
  "Video",
];

const projects: Project[] = [
  {
    id: "signature-dish",
    title: "Signature Dish Spotlight",
    categories: ["Restaurants", "Ads"],
    creativeType: "Restaurant ad",
    description:
      "Cinematic close-ups of a signature dish, styled and lit for a high-impact restaurant advertisement.",
    image: restaurantAd,
    alt: "Cinematic close-up of a gourmet plated dish with blue rim lighting",
  },
  {
    id: "cafe-morning-rush",
    title: "Café Morning Rush",
    categories: ["Restaurants", "Social Content"],
    creativeType: "Café promo creative",
    description:
      "A morning-rush story series: latte art, warm interiors, and the café experience in motion.",
    image: cafePromo,
    alt: "Barista pouring latte art in a dark café with blue accent light",
    video: cafePromoMp4,
  },
  {
    id: "product-launch-teaser",
    title: "Product Launch Teaser",
    categories: ["Products", "Ads"],
    creativeType: "Ad creative",
    description:
      "Studio-lit product visuals built to tease a launch across ads and social placements.",
    image: productCampaign,
    alt: "Studio-lit cosmetic serum bottle with blue gradient lighting",
    video: productCampaignMp4,
  },
  {
    id: "behind-the-counter",
    title: "Behind the Counter",
    categories: ["Video", "Social Content"],
    creativeType: "Short-form video",
    description:
      "A day-in-the-life reel: dough in motion, shot vertical for Reels and Shorts.",
    image: videoThumbnail,
    alt: "Hands stretching pizza dough mid-air in a dark pizzeria kitchen",
  },
  {
    id: "weekend-offer",
    title: "Weekend Offer Creative",
    categories: ["Social Content", "Ads"],
    creativeType: "Social creative",
    description:
      "A colorful promotional creative for a weekend dessert offer, made for feeds and stories.",
    image: socialCreative,
    alt: "Overhead flat lay of dessert jars and ingredients on a dark background",
    video: socialCreativeMp4,
  },
  {
    id: "unboxing-reel",
    title: "Unboxing Reel",
    categories: ["Products", "Video"],
    creativeType: "Short-form video",
    description:
      "An unboxing-style product video with cinematic studio lighting for launch week.",
    image: productVideo,
    alt: "Hands opening a black box revealing premium headphones with blue glow",
    video: productVideoMp4,
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // When a video project is opened, play with sound
  useEffect(() => {
    if (project.video && videoRef.current) {
      const vid = videoRef.current;
      vid.muted = false;
      vid.volume = 1.0;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser requires muted initial playback
          vid.muted = true;
          vid.play().catch(() => {});
        });
      }
    }
  }, [project.video]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
    >
      <button
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-sparkos-ink shadow-2xl">
        <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
          {project.video ? (
            <div className="relative h-full w-full flex items-center justify-center bg-black">
              {/* Ambient backdrop */}
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25 blur-xl scale-110 pointer-events-none"
              />
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                controls
                autoPlay
                playsInline
                className="relative z-10 max-h-full max-w-full h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.alt}
              className="h-full w-full object-cover"
            />
          )}
          <span className="absolute left-4 top-4 z-20 rounded-full border border-sparkos-cyan/40 bg-sparkos-ink/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sparkos-cyan backdrop-blur-sm">
            Sparkos Project
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/60"
              >
                {c}
              </span>
            ))}
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/60">
              {project.creativeType}
            </span>
          </div>
          <h3
            id={`project-title-${project.id}`}
            className="mt-4 text-2xl font-bold text-white"
          >
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-white/65">
            {project.description}
          </p>
        </div>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-sparkos-ink/70 text-white backdrop-blur-sm transition-colors hover:border-sparkos-cyan/60 hover:text-sparkos-cyan"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m3 3 10 10M13 3 3 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-sparkos-ink py-20 sm:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Featured Work</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <MaskedRevealText text="Work That Speaks for Itself." highlightWords={["Speaks"]} />
          </h2>
          <ScrollHighlightText
            text="Projects created by Sparkos to demonstrate what consistent, well-produced creative looks like."
            className="mt-5 text-base leading-relaxed sm:text-lg"
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2.5"
            role="group"
            aria-label="Filter projects by category"
          >
            {filters.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-sparkos-blue to-sparkos-cyan text-white shadow-[0_8px_24px_-8px_rgba(0,58,255,0.8)]"
                      : "border border-white/15 bg-white/[0.03] text-white/65 hover:border-sparkos-cyan/50 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <article
                className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-sparkos-blue/50 hover:shadow-[0_16px_48px_-16px_rgba(0,58,255,0.45)]"
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-sparkos-ink/80 via-transparent to-transparent"
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-sparkos-ink/85 text-sparkos-cyan shadow-[0_0_24px_rgba(0,229,255,0.45)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-sparkos-cyan/70 group-hover:bg-sparkos-blue/30">
                        <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full border border-sparkos-cyan/40 bg-sparkos-ink/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sparkos-cyan backdrop-blur-sm">
                    Sparkos Project
                  </span>
                  {project.video && (
                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-sparkos-cyan/30 bg-sparkos-ink/85 px-2.5 py-1 text-[10px] font-medium text-sparkos-cyan backdrop-blur-sm">
                      <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Video
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sparkos-cyan/80">
                    {project.creativeType}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
