import Container from "../components/Container";
import Reveal from "../components/Reveal";

function AttentionIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M2.5 10s3-5.5 7.5-5.5S17.5 10 17.5 10 14.5 15.5 10 15.5 2.5 10 2.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M11 2 4.5 11.5H9L8 18l7-9.5H10.5L11 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5 17 6.5 10 10.5 3 6.5l7-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.5l7 4 7-4M3 14l7 4 7-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M2.5 15.5 7.5 10l3.5 3.5 6.5-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ITEMS = [
  { label: "Content That Gets Attention", Icon: AttentionIcon },
  { label: "Automation That Saves Time", Icon: AutomationIcon },
  { label: "Systems That Scale", Icon: SystemsIcon },
  { label: "Growth That Lasts", Icon: GrowthIcon },
];

/**
 * Capabilities strip directly below the hero: four brand promises with
 * small cyan icons and subtle separators. No performance claims.
 */
export default function Capabilities() {
  return (
    <section aria-label="Capabilities" className="border-y border-white/8 bg-white/[0.015]">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4 lg:py-9">
            {ITEMS.map(({ label, Icon }, i) => (
              <li
                key={label}
                className={`flex items-center gap-3.5 ${
                  i > 0 ? "lg:border-l lg:border-white/8 lg:pl-8" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-sparkos-cyan/20 bg-sparkos-cyan/[0.07] text-sparkos-cyan"
                >
                  <Icon />
                </span>
                <span className="text-[14px] font-medium leading-snug text-white/75">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
