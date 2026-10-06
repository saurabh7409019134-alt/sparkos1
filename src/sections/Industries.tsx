import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import industryFood from "../assets/industry-food.jpg";
import industryProduct from "../assets/industry-product.jpg";

const INDUSTRIES = [
  {
    image: industryFood,
    alt: "Cinematic restaurant content concept: appetizing dishes on a dark wooden table in moody restaurant lighting",
    eyebrow: "Restaurants & Cafés",
    headline: "Make People Crave It Before They Try It.",
    description:
      "Create engaging food content and promotional campaigns that showcase your menu, atmosphere, and customer experience.",
    features: [
      "Food reels",
      "Menu promotions",
      "New dish launches",
      "Offers and events",
      "Café experience content",
      "Restaurant advertisements",
    ],
    cta: "Create Restaurant Content",
  },
  {
    image: industryProduct,
    alt: "Product content concept: premium skincare product with dramatic blue studio lighting and water splash",
    eyebrow: "Product Businesses",
    headline: "Turn Products Into Content People Want.",
    description:
      "Transform product features into visual stories, promotional videos, and creative campaigns for modern brands.",
    features: [
      "Product reels",
      "Product photography",
      "UGC-style ads",
      "New product launches",
      "Promotional creatives",
      "Social media content",
    ],
    cta: "Create Product Content",
  },
];

/**
 * Industries — id="industries". Two large visual cards showing how
 * Sparkos content fits restaurants/cafés and product businesses.
 * All visuals are concept demonstrations, never presented as client work.
 */
export default function Industries() {
  return (
    <section id="industries" className="relative py-20 lg:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionLabel>Built for Modern Businesses</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Content That Fits Your Business.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.eyebrow} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-sparkos-cyan/40 hover:shadow-[0_20px_60px_-18px_rgba(0,229,255,0.3)]">
                <div className="relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#0A0A0F]/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                    {industry.eyebrow}
                  </span>
                </div>

                <div className="flex h-full flex-col p-7 sm:p-8">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {industry.headline}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {industry.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {industry.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-[14px] text-white/70"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sparkos-blue to-sparkos-cyan"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Button href="#contact" className="w-full sm:w-auto">
                      {industry.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
