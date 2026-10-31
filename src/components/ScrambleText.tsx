import { useEffect, useRef, useState, useCallback } from "react";

const NARROW_GLYPHS = "iIl1jrt";
const REGULAR_GLYPHS = "acdeghknopqsuvxyzACDEGHKNOPQSUVXYZ34567";
const WIDE_GLYPHS = "mwbdfMWBDF";

/**
 * Razorpay AI Builders inspired glyph selector.
 * Chooses glyphs matching the aspect-ratio of the underlying character
 * so layout stays stable during decoding.
 */
function getGlyphForChar(char: string): string {
  if (char === " ") return " ";
  if ("iIl1jrt|:;!.,'".includes(char)) {
    return NARROW_GLYPHS[Math.floor(Math.random() * NARROW_GLYPHS.length)];
  }
  if ("mwbdfMWBDF@#%&".includes(char)) {
    return WIDE_GLYPHS[Math.floor(Math.random() * WIDE_GLYPHS.length)];
  }
  return REGULAR_GLYPHS[Math.floor(Math.random() * REGULAR_GLYPHS.length)];
}

function generateRevealDelays(length: number, duration: number, jitter: number): number[] {
  return Array.from(
    { length },
    (_, i) => (i / Math.max(length - 1, 1)) * duration + Math.random() * jitter,
  );
}

export interface ScrambleTextProps {
  /** The target string to display */
  text: string;
  /** Delay before reveal animation starts (in milliseconds) */
  delay?: number;
  /** Total duration in ms for characters to progressively resolve */
  revealDurationMs?: number;
  /** Random jitter in ms added to each character's resolve time */
  revealJitterMs?: number;
  /** Whether to periodically micro-glitch random characters like Razorpay AI Builders */
  idleGlitch?: boolean;
  /** Interval between idle glitches (default ~7500ms) */
  idleGlitchIntervalMs?: number;
  /** Custom class for the wrapper */
  className?: string;
  /** Whether hover triggers a quick re-scramble */
  hoverScramble?: boolean;
}

/**
 * ScrambleText — Razorpay AI Builders inspired cipher scramble decoder.
 * Scrambles characters using aspect-ratio matched glyphs, resolves left-to-right,
 * and maintains an ambient micro-glitch cycle.
 */
export default function ScrambleText({
  text,
  delay = 0,
  revealDurationMs = 500,
  revealJitterMs = 160,
  idleGlitch = true,
  idleGlitchIntervalMs = 7500,
  className = "",
  hoverScramble = true,
}: ScrambleTextProps) {
  const chars = text.split("");
  const len = chars.length;

  // Check prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Track which characters have resolved to their true letter
  const [resolved, setResolved] = useState<boolean[]>(() =>
    Array(len).fill(prefersReduced),
  );
  // Current display characters
  const [displayChars, setDisplayChars] = useState<string[]>(() =>
    prefersReduced ? chars : chars.map((c) => (c === " " ? " " : getGlyphForChar(c))),
  );
  // Characters actively in glitch mode
  const [glitched, setGlitched] = useState<boolean[]>(() => Array(len).fill(false));

  const resolvedRef = useRef<boolean[]>(Array(len).fill(prefersReduced));
  const isFullyResolved = useRef<boolean>(prefersReduced);
  const isGlitching = useRef<boolean>(false);

  // Sync ref
  useEffect(() => {
    resolvedRef.current = resolved;
  }, [resolved]);

  // Main entrance scramble & reveal
  useEffect(() => {
    if (prefersReduced) return;

    let scrambleInterval: ReturnType<typeof setInterval> | null = null;
    let revealTimer: ReturnType<typeof setTimeout> | null = null;

    // Scramble while waiting for reveal start
    scrambleInterval = setInterval(() => {
      if (isFullyResolved.current) {
        if (scrambleInterval) clearInterval(scrambleInterval);
        return;
      }
      setDisplayChars((prev) =>
        prev.map((_, i) =>
          resolvedRef.current[i] ? chars[i] : chars[i] === " " ? " " : getGlyphForChar(chars[i]),
        ),
      );
    }, 45);

    // Schedule progressive resolution
    revealTimer = setTimeout(() => {
      const delays = generateRevealDelays(len, revealDurationMs, revealJitterMs);
      const startTime = performance.now();

      const resolveInterval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const nextResolved = resolvedRef.current.map(
          (isRes, i) => isRes || elapsed >= delays[i],
        );

        resolvedRef.current = nextResolved;
        setResolved(nextResolved);

        setDisplayChars(
          nextResolved.map((isRes, i) =>
            isRes ? chars[i] : chars[i] === " " ? " " : getGlyphForChar(chars[i]),
          ),
        );

        if (nextResolved.every(Boolean)) {
          isFullyResolved.current = true;
          setDisplayChars(chars);
          clearInterval(resolveInterval);
          if (scrambleInterval) clearInterval(scrambleInterval);
        }
      }, 35);

      return () => clearInterval(resolveInterval);
    }, delay);

    return () => {
      if (scrambleInterval) clearInterval(scrambleInterval);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, [chars, delay, len, prefersReduced, revealDurationMs, revealJitterMs]);

  // Ambient idle micro-glitch (Razorpay trademark: a few letters glitch briefly every 7.5s)
  useEffect(() => {
    if (!idleGlitch || prefersReduced) return;

    let glitchTimeout: ReturnType<typeof setTimeout> | null = null;
    let glitchInterval: ReturnType<typeof setInterval> | null = null;

    const nonSpaceIndices = chars
      .map((c, i) => (c !== " " ? i : -1))
      .filter((i) => i >= 0);

    const runGlitch = () => {
      if (!isFullyResolved.current || isGlitching.current || nonSpaceIndices.length === 0) {
        glitchTimeout = setTimeout(runGlitch, 1000);
        return;
      }

      isGlitching.current = true;
      // Pick 2-4 characters to glitch
      const glitchCount = Math.min(
        nonSpaceIndices.length,
        Math.max(1, Math.floor(nonSpaceIndices.length * 0.22)),
      );
      const shuffled = [...nonSpaceIndices].sort(() => Math.random() - 0.5);
      const targetIndices = new Set(shuffled.slice(0, glitchCount));

      const glitchFlags = Array(len).fill(false);
      targetIndices.forEach((idx) => {
        glitchFlags[idx] = true;
      });
      setGlitched(glitchFlags);

      // Scramble those target characters
      setDisplayChars((prev) =>
        prev.map((_, i) => (targetIndices.has(i) ? getGlyphForChar(chars[i]) : chars[i])),
      );

      const glitchDuration = 220 + Math.random() * 100;
      const glitchStartTime = performance.now();

      glitchInterval = setInterval(() => {
        const elapsed = performance.now() - glitchStartTime;
        if (elapsed >= glitchDuration) {
          if (glitchInterval) clearInterval(glitchInterval);
          setDisplayChars(chars);
          setGlitched(Array(len).fill(false));
          isGlitching.current = false;
          glitchTimeout = setTimeout(runGlitch, idleGlitchIntervalMs);
        } else {
          setDisplayChars((prev) =>
            prev.map((_, i) =>
              targetIndices.has(i) ? getGlyphForChar(chars[i]) : chars[i],
            ),
          );
        }
      }, 40);
    };

    glitchTimeout = setTimeout(runGlitch, delay + revealDurationMs + idleGlitchIntervalMs);

    return () => {
      if (glitchTimeout) clearTimeout(glitchTimeout);
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, [chars, delay, idleGlitch, idleGlitchIntervalMs, len, prefersReduced, revealDurationMs]);

  // Optional hover re-scramble
  const handleMouseEnter = useCallback(() => {
    if (!hoverScramble || !isFullyResolved.current || isGlitching.current || prefersReduced) {
      return;
    }
    isGlitching.current = true;
    const delays = generateRevealDelays(len, 280, 80);
    const startTime = performance.now();

    const hoverInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const nextResolved = delays.map((d) => elapsed >= d);

      setDisplayChars((prev) =>
        prev.map((_, i) =>
          nextResolved[i] ? chars[i] : chars[i] === " " ? " " : getGlyphForChar(chars[i]),
        ),
      );
      setGlitched(nextResolved.map((res, i) => !res && chars[i] !== " "));

      if (nextResolved.every(Boolean)) {
        clearInterval(hoverInterval);
        setDisplayChars(chars);
        setGlitched(Array(len).fill(false));
        isGlitching.current = false;
      }
    }, 35);
  }, [chars, hoverScramble, len, prefersReduced]);

  return (
    <span
      className={`inline-block ${className}`}
      aria-label={text}
      role="text"
      onMouseEnter={handleMouseEnter}
    >
      {displayChars.map((char, index) => {
        const isRes = resolved[index];
        const isGlt = glitched[index];

        return (
          <span
            key={index}
            className={`transition-colors duration-150 ${
              isGlt
                ? "text-sparkos-cyan opacity-90 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
                : isRes
                  ? ""
                  : "opacity-35 text-white/50"
            }`}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
