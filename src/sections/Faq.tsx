import { useState } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What types of businesses does Sparkos work with?",
    answer:
      "Sparkos works primarily with restaurants, cafés, product-based businesses, and content creators — but the production process adapts to most modern businesses with something to show and something to sell.",
  },
  {
    question: "What is included in social media management?",
    answer:
      "Content planning and calendars, scheduling and publishing, and regular performance reviews — so posting stays consistent and improves over time. The depth of management grows across packages, from basic management in Growth to a fuller cadence in Scale.",
  },
  {
    question: "Can I buy content without social media management?",
    answer:
      "Yes. Every package includes a set volume of reels, posts, stories, and ad creatives with a content calendar and scheduling. Deeper management — planning cadence, publishing, and strategy reviews — increases with the Growth and Scale packages.",
  },
  {
    question: "Can Sparkos create advertisements?",
    answer:
      "Yes. Ad creative production is part of the Content & Growth service: food and product ad concepts built for social campaigns. Every package includes ad creatives — from 2 in Starter up to 8 in Scale.",
  },
  {
    question: "How does Sparkos use AI?",
    answer:
      "AI supports research, ideation, caption drafting, and production tasks, while human review and creative judgment shape the final work before anything is published or delivered.",
  },
  {
    question: "Can I start with a smaller package?",
    answer:
      "The Starter package at ₹15,000/month is the entry point: 8 reels, 8 posts, 12 stories, and 2 ad creatives, with a monthly content strategy and calendar. If your needs don't fit a package, the Custom package is scoped to your requirements.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. Start with the right scope for your business and expand to Growth, Scale, or a custom scope whenever you're ready.",
  },
  {
    question: "How does the production and freelancer process work?",
    answer:
      "Sparkos manages production end-to-end: we discover your business and goals, strategize the plan, create the content, review it with you, deliver the approved work, and keep improving over time. You'll always know what's being made and when.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Each deliverable includes 1–2 revision rounds, so we can refine creative direction, captions, and branding together. Larger reworks or entirely new concepts outside the agreed scope are scoped separately.",
  },
  {
    question: "Can Sparkos build websites and AI agents?",
    answer:
      "Yes. Beyond content, Sparkos builds landing pages and business websites, plus AI chatbots and agents that capture inquiries, qualify leads, and handle routine customer questions.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Common Questions.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const buttonId = `faq-button-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal key={faq.question} delay={Math.min(i, 4) * 60}>
                <div
                  className={`mb-3 overflow-hidden rounded-xl border transition-colors duration-300 ${
                    open
                      ? "border-sparkos-blue/50 bg-white/[0.03]"
                      : "border-white/10 bg-white/[0.015] hover:border-white/25"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-[15px] font-semibold text-white sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open
                            ? "rotate-45 border-sparkos-cyan/60 text-sparkos-cyan"
                            : "border-white/15 text-white/60"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 2v10M2 7h10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                  >
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-white/65 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
