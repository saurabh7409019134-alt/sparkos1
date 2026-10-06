import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  /** Renders as an anchor when provided */
  href?: string;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 " +
  "text-[15px] font-medium transition-all duration-300 focus-visible:outline-2 " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-sparkos-blue to-sparkos-cyan text-white " +
    "shadow-[0_8px_30px_-8px_rgba(0,58,255,0.7)] hover:brightness-110 hover:shadow-[0_8px_36px_-6px_rgba(0,58,255,0.9)]",
  secondary:
    "border border-white/20 bg-white/5 text-white backdrop-blur-sm " +
    "hover:border-sparkos-cyan/60 hover:bg-white/10",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M2.5 8h11m-4.5-4.5L13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Shared CTA button. `primary` = blue gradient with arrow;
 * `secondary` = outline. Pass `href` for anchor behaviour,
 * otherwise renders a real <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {variant === "primary" && <Arrow />}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
