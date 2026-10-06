import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Eyebrow pill label used above section headings:
 * cyan uppercase text on a dark pill with a subtle cyan border.
 */
export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-sparkos-cyan/25 bg-sparkos-cyan/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sparkos-cyan ${className}`}
    >
      {children}
    </span>
  );
}
