import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface ScrollHighlightTextProps {
  /** The text string to animate on scroll */
  text: string;
  /** Custom wrapper class */
  className?: string;
  /** Viewport trigger start (fraction from top of viewport, default 0.82) */
  startOffset?: number;
  /** Viewport trigger end (fraction from top of viewport, default 0.38) */
  endOffset?: number;
  /** Optional words to highlight with cyan tint when lit */
  highlightWords?: string[];
}

/**
 * ScrollHighlightText — Scroll-driven text illumination.
 * As the user scrolls down, words progressively illuminate from dim gray (0.22 opacity)
 * to crisp bright white (1.0 opacity), exactly like the spotlight / karaoke reveal effect.
 */
export default function ScrollHighlightText({
  text,
  className = "",
  startOffset = 0.85,
  endOffset = 0.40,
  highlightWords = [],
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [progress, setProgress] = useState<number>(() => (prefersReduced ? 1 : 0));

  useEffect(() => {
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const updateScrollProgress = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const startY = windowHeight * startOffset;
      const endY = windowHeight * endOffset;

      // Calculate progress between startY and endY
      // As element scrolls up, rect.top decreases from startY to endY
      const currentY = rect.top + rect.height * 0.2;
      const rawProgress = (startY - currentY) / (startY - endY);
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setProgress(clamped);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Initial check
    updateScrollProgress();

    // Use IntersectionObserver to attach scroll listener only when near viewport
    let observer: IntersectionObserver | null = null;
    let isAttached = false;

    const attach = () => {
      if (!isAttached) {
        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize, { passive: true });
        isAttached = true;
        updateScrollProgress();
      }
    };

    const detach = () => {
      if (isAttached) {
        window.removeEventListener("scroll", onScrollOrResize);
        window.removeEventListener("resize", onScrollOrResize);
        isAttached = false;
      }
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              attach();
            } else {
              // Still update once to capture final state if scrolled past
              updateScrollProgress();
              detach();
            }
          });
        },
        { rootMargin: "250px 0px 250px 0px" },
      );
      observer.observe(el);
    } else {
      attach();
    }

    return () => {
      detach();
      if (observer) observer.disconnect();
    };
  }, [endOffset, prefersReduced, startOffset]);

  const words = text.split(/\s+/);
  const totalWords = words.length;

  const normalizedHighlights = highlightWords.map((w) =>
    w.toLowerCase().replace(/[^a-z0-9]/g, ""),
  );

  return (
    <p
      ref={containerRef}
      className={`inline-block transition-colors ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => {
        // Compute each word's individual illumination progress
        const wordStart = index / totalWords;
        const wordEnd = (index + 1) / totalWords;

        let wordProgress = 0;
        if (progress >= wordEnd) {
          wordProgress = 1;
        } else if (progress <= wordStart) {
          wordProgress = 0;
        } else {
          wordProgress = (progress - wordStart) / (wordEnd - wordStart);
        }

        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
        const isHighlight = normalizedHighlights.includes(cleanWord);

        // Opacity smoothly travels from 0.22 (dim) to 1.0 (bright)
        const opacity = prefersReduced ? 1 : 0.22 + 0.78 * wordProgress;

        // When bright, highlight words get cyan tint, others get bright white
        const isBright = wordProgress > 0.55;

        const style: CSSProperties = {
          opacity,
          transition: "opacity 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
        };

        return (
          <span
            key={index}
            style={style}
            className={`inline-block mr-[0.28em] last:mr-0 will-change-[opacity,color] ${
              isBright
                ? isHighlight
                  ? "text-sparkos-cyan font-semibold drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                  : "text-white font-medium"
                : "text-white/35 font-normal"
            }`}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
