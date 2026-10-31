import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface MaskedRevealTextProps {
  /** The text string to animate */
  text: string;
  /** Base delay in ms before entrance starts */
  delay?: number;
  /** Stagger time in ms between each successive word (default 40ms) */
  stagger?: number;
  /** Word or array of words that should receive the cyan/blue gradient */
  highlightWords?: string[];
  /** Custom gradient classes for highlighted words */
  highlightClassName?: string;
  /** Additional wrapper class */
  className?: string;
  /** IntersectionObserver threshold to trigger reveal */
  threshold?: number;
}

/**
 * MaskedRevealText — Razorpay AI Builders inspired word-by-word masked reveal.
 * Each word rises from an overflow-hidden mask with soft blur-to-focus and staggered timing.
 */
export default function MaskedRevealText({
  text,
  delay = 0,
  stagger = 40,
  highlightWords = [],
  highlightClassName = "bg-gradient-to-r from-sparkos-blue to-sparkos-cyan bg-clip-text text-transparent animate-gradient-flow font-extrabold",
  className = "",
  threshold = 0.15,
}: MaskedRevealTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });

  useEffect(() => {
    if (visible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, visible]);

  const words = text.split(" ");
  const normalizedHighlights = highlightWords.map((w) =>
    w.toLowerCase().replace(/[^a-z0-9]/g, ""),
  );

  return (
    <span
      ref={containerRef}
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
        const isHighlight = normalizedHighlights.includes(cleanWord);
        const wordDelay = delay + index * stagger;

        const style: CSSProperties = {
          transitionDelay: `${wordDelay}ms`,
        };

        return (
          <span key={index} className="rzp-mask mr-[0.28em] last:mr-0">
            <span
              className={`rzp-word ${visible ? "is-visible" : ""} ${
                isHighlight ? highlightClassName : ""
              }`}
              style={style}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
}
