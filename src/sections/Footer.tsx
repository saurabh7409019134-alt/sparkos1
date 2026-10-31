import Container from "../components/Container";
import Logo from "../components/Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Social Media", href: "#social-media" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Sparkos", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  { label: "AI Content & Growth", href: "#services" },
  { label: "Social Media Management", href: "#social-media" },
  { label: "AI Websites & AI Agents", href: "#services" },
  { label: "Influencer Marketing", href: "#services" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="border-t border-white/[0.06] bg-sparkos-ink"
    >
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo withTagline height={38} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              AI-powered content, social growth, modern websites, and digital
              creative for businesses.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-sparkos-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-sparkos-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + legal */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={
                      link.href === "#"
                        ? `${link.label} — link coming soon`
                        : link.label
                    }
                    title={link.href === "#" ? "Link coming soon" : undefined}
                    className="text-sm text-white/65 transition-colors hover:text-sparkos-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-5 border-t border-white/[0.06] pt-5">
              <a
                href="#"
                aria-label="Privacy Policy — link coming soon"
                title="Link coming soon"
                className="text-xs text-white/50 transition-colors hover:text-sparkos-cyan"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                aria-label="Terms of Service — link coming soon"
                title="Link coming soon"
                className="text-xs text-white/50 transition-colors hover:text-sparkos-cyan"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6">
          <p className="text-center text-xs text-white/40">
            © 2026 Sparkos. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
