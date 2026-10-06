import Container from "../components/Container";
import Reveal from "../components/Reveal";

const pillars = ["Creativity", "AI", "Execution"];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-sparkos-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(0,58,255,0.08),transparent_70%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for the Way Businesses Grow Today.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Sparkos is an AI-powered creative and growth agency helping modern
            businesses create stronger content, streamline repetitive work,
            and build useful digital experiences.
          </p>
        </Reveal>

        {/* CREATIVITY + AI + EXECUTION = SPARKOS */}
        <Reveal delay={140}>
          <div
            className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-10 backdrop-blur-sm sm:px-10"
            aria-label="Sparkos formula: Creativity plus AI plus Execution equals Sparkos"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              {pillars.map((pillar, i) => (
                <span
                  key={pillar}
                  className="flex items-center gap-4 sm:gap-5"
                >
                  <span
                    className={`rounded-xl border px-6 py-4 text-sm font-bold tracking-[0.18em] sm:text-base ${
                      pillar === "AI"
                        ? "border-sparkos-cyan/50 bg-gradient-to-br from-sparkos-blue/30 to-sparkos-cyan/15 text-sparkos-cyan shadow-[0_0_36px_-8px_rgba(0,229,255,0.5)]"
                        : "border-white/15 bg-white/[0.04] text-white"
                    }`}
                  >
                    {pillar}
                  </span>
                  {i < pillars.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-2xl font-light text-white/30"
                    >
                      +
                    </span>
                  )}
                </span>
              ))}
              <span
                aria-hidden="true"
                className="my-1 text-2xl font-light text-white/30 sm:my-0"
              >
                =
              </span>
              <span className="rounded-xl border border-sparkos-blue/60 bg-gradient-to-r from-sparkos-blue to-sparkos-cyan px-8 py-4 text-base font-extrabold tracking-[0.22em] text-white shadow-[0_12px_40px_-10px_rgba(0,58,255,0.8)] sm:text-lg">
                SPARKOS
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
