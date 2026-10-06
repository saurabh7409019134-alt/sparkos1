import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "./front-shared.css";

const LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Social Media", href: "#social-media", id: "social-media" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Why Sparkos", href: "#why", id: "why" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

/**
 * Sticky site navigation. Subtle background + border appear on scroll,
 * the in-view section link is highlighted, and the mobile menu is a
 * fully keyboard-operable disclosure (Escape closes, focus is trapped
 * while open and returned to the toggle on close).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Smooth click scroll + instant active update
  const handleNavClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setActive(id);
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Scroll state + active-section highlight.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);

        // Near the bottom of page -> activate last section
        const scrollBottom = window.innerHeight + window.scrollY;
        if (scrollBottom >= document.documentElement.scrollHeight - 60) {
          setActive("faq");
          return;
        }

        const navThreshold = 180;
        let current = "home";
        for (const link of LINKS) {
          const el = document.getElementById(link.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navThreshold) {
              current = link.id;
            }
          }
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu: Escape closes, Tab focus stays inside, scroll locks.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current
      ?.querySelector<HTMLElement>("a[href]")
      ?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-sparkos-ink/90 backdrop-blur-md shadow-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-[76px] items-center justify-between gap-4"
        >
          <Logo withTagline height={34} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link.id, e)}
                  aria-current={active === link.id ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[13.5px] xl:text-[14px] font-medium transition-colors duration-200 ${
                    active === link.id
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sparkos-blue to-sparkos-cyan shadow-[0_0_8px_rgba(0,229,255,0.7)] transition-all duration-200 ${
                      active === link.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact">Get Started</Button>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="transition-transform duration-300"
            >
              {open ? (
                <path
                  d="M5 5l12 12M17 5L5 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6.5h16M3 11h16M3 15.5h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-sparkos-ink/95 backdrop-blur-md lg:hidden"
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? "page" : undefined}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                    active === link.id
                      ? "bg-sparkos-blue/15 text-white font-semibold border-l-2 border-sparkos-cyan"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full bg-sparkos-cyan shadow-[0_0_8px_rgba(0,229,255,0.8)] ${
                      active === link.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li className="px-1 pt-3">
              <Button
                href="#contact"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
