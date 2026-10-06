type LogoProps = {
  /** Extra classes on the wrapper link */
  className?: string;
  /** Rendered logo height in px (width auto-scales). Default 36. */
  height?: number;
  /** Show the official tagline beneath the wordmark. Default false. */
  withTagline?: boolean;
};

/**
 * Sparkos brand mark. The ONLY logo source is `public/logo.png`,
 * cropped from the provided brand reference (blue rounded-square mark
 * + "Sparkos" wordmark). Never redesign or replace it.
 */
export default function Logo({ className = "", height = 36, withTagline = false }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Sparkos — back to top"
      className={`inline-flex flex-col items-start gap-1 group ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <img
          src="/logo.png"
          alt="Sparkos"
          style={{ height: `${height}px`, width: "auto" }}
          className="block object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <span className="font-sans text-[22px] font-extrabold tracking-tight text-white leading-none">
          Sparkos
        </span>
      </div>
      {withTagline && (
        <span className="text-[11px] font-medium tracking-wide text-white/50">
          Turn Attention Into Growth.
        </span>
      )}
    </a>
  );
}
