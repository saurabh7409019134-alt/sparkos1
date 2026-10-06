import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (e.g. 100, 200). Default 0. */
  delay?: number;
  className?: string;
  /** IntersectionObserver threshold. Default 0.15. */
  threshold?: number;
};

/**
 * Scroll fade-up wrapper. Adds `.reveal` + `.is-visible` (see index.css)
 * via IntersectionObserver, fired once. If the user prefers reduced
 * motion (or IO is unavailable), content renders visible immediately —
 * never hidden.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Render visible immediately when there is no way to animate in —
  // reduced-motion users or no IntersectionObserver support.
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
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

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
