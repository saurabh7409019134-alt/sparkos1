import Container from "../components/Container";
import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";
import ScrollHighlightText from "../components/ScrollHighlightText";
import heroFood from "../assets/hero-food.jpg";
import heroProduct from "../assets/hero-product.jpg";
import heroReel from "../assets/hero-reel.jpg";
import "./hero.css";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
    >
      <circle cx="13" cy="13" r="12" fill="rgba(10,10,15,0.55)" stroke="rgba(255,255,255,0.5)" />
      <path d="M10.5 8.8v8.4l6.8-4.2-6.8-4.2Z" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Hero — id="home". Eyebrow, H1 with cyan-gradient "Growth.", supporting
 * copy, dual CTAs, audience line, and a floating-card visual composition
 * (restaurant ad, product ad, reel preview, AI automation workflow card)
 * joined by blue/cyan light trails. Entrance is staggered CSS fade-up.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient background: restrained grid + blue/cyan glow washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-sparkos-blue/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[360px] w-[360px] rounded-full bg-sparkos-cyan/10 blur-[110px]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28 lg:pt-24">
          {/* ── Copy ── */}
          <div className="max-w-2xl">
            <div className="hero-anim" style={{ animationDelay: "0ms" }}>
              <SectionLabel>AI-Powered Creative &amp; Growth Agency</SectionLabel>
            </div>

            <h1
              className="hero-anim mt-6 text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]"
              style={{ animationDelay: "120ms" }}
            >
              Turn Attention Into{" "}
              <span className="bg-gradient-to-r from-sparkos-blue to-sparkos-cyan bg-clip-text text-transparent">
                Growth.
              </span>
            </h1>

            <ScrollHighlightText
              text="AI-powered content, social media growth, websites, and digital solutions for modern businesses."
              className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
              startOffset={0.95}
              endOffset={0.65}
            />

            <div
              className="hero-anim mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              style={{ animationDelay: "360ms" }}
            >
              <Button href="#contact" className="w-full sm:w-auto">
                Get Started
              </Button>
              <Button href="#work" variant="secondary" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </div>

            <p
              className="hero-anim mt-8 flex items-center gap-2.5 text-sm text-white/45"
              style={{ animationDelay: "480ms" }}
            >
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-sparkos-blue to-sparkos-cyan" />
              Built for restaurants, cafés, product brands, and creators.
            </p>
          </div>

          {/* ── Visual composition ── */}
          <div
            className="hero-anim relative mx-auto h-[500px] w-full max-w-[560px] sm:h-[560px]"
            style={{ animationDelay: "520ms" }}
          >
            {/* Light trails */}
            <svg
              aria-hidden="true"
              viewBox="0 0 560 560"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="trail-grad" x1="0" y1="0" x2="560" y2="560" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#003AFF" />
                  <stop offset="1" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
              <path
                d="M120 150 C 260 190, 300 300, 420 360"
                stroke="url(#trail-grad)"
                strokeWidth="1.5"
                strokeDasharray="5 9"
                className="trail-flow"
                opacity="0.55"
              />
              <path
                d="M430 140 C 470 240, 380 320, 300 420"
                stroke="url(#trail-grad)"
                strokeWidth="1.5"
                strokeDasharray="5 9"
                className="trail-flow"
                style={{ animationDelay: "-4s" }}
                opacity="0.4"
              />
              <path
                d="M180 470 C 220 400, 260 380, 320 380"
                stroke="url(#trail-grad)"
                strokeWidth="1.5"
                strokeDasharray="5 9"
                className="trail-flow"
                style={{ animationDelay: "-2s" }}
                opacity="0.35"
              />
            </svg>

            {/* Restaurant ad card */}
            <figure
              className="hero-float absolute left-0 top-0 w-[63%] overflow-hidden rounded-2xl border border-white/10 bg-sparkos-ink/60 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.8)]"
              style={{ animationDelay: "-1s" }}
            >
              <img
                src={heroFood}
                alt="Cinematic restaurant advertisement concept: gourmet plated dish with rising steam on a dark background"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="flex items-center justify-between px-3.5 py-2.5 text-[11px] font-medium">
                <span className="text-white/80">Restaurant ad</span>
                <span className="rounded-full border border-sparkos-cyan/30 bg-sparkos-cyan/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-sparkos-cyan">
                  Concept
                </span>
              </figcaption>
            </figure>

            {/* Product ad card */}
            <figure
              className="hero-float absolute right-0 top-[27%] w-[52%] overflow-hidden rounded-2xl border border-white/10 bg-sparkos-ink/60 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.8)]"
              style={{ animationDelay: "-3.5s", animationDuration: "8s" }}
            >
              <img
                src={heroProduct}
                alt="Premium product advertisement concept: black perfume bottle with blue and cyan studio lighting"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="flex items-center justify-between px-3.5 py-2.5 text-[11px] font-medium">
                <span className="text-white/80">Product ad</span>
                <span className="rounded-full border border-sparkos-cyan/30 bg-sparkos-cyan/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-sparkos-cyan">
                  Concept
                </span>
              </figcaption>
            </figure>

            {/* Reel preview card */}
            <figure
              className="hero-float absolute bottom-0 left-[5%] w-[29%] overflow-hidden rounded-2xl border border-white/10 bg-sparkos-ink/60 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.8)]"
              style={{ animationDelay: "-5.5s", animationDuration: "6.5s" }}
            >
              <div className="relative">
                <img
                  src={heroReel}
                  alt="Social media reel preview concept: barista pouring latte art in a dark café"
                  className="aspect-[9/16] w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon />
                </div>
              </div>
              <figcaption className="px-3.5 py-2.5 text-[11px] font-medium text-white/80">
                Reel preview
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
