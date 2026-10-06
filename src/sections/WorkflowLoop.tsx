import "./workflow-loop.css";

type Step = { label: string };

const STEPS: Step[] = [
  { label: "Lead" },
  { label: "AI Process" },
  { label: "CRM Sync" },
  { label: "Follow-up" },
];

/** Node light-up offsets within the 6s loop (staggered 1.2s apart). */
const NODE_DELAYS = ["0s", "1.2s", "2.4s", "3.6s"];
/** Pulse travel offsets — fires just after its left node lights up. */
const PULSE_DELAYS = ["0.8s", "2s", "3.2s"];

/**
 * Compact AI workflow loop: nodes illuminate sequentially, a cyan pulse
 * travels along each connector, then a brief checkmark confirms
 * completion before the 6s loop resets. Decorative — hidden from AT.
 */
export default function WorkflowLoop() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full items-center justify-between gap-1 select-none overflow-hidden"
    >
      {STEPS.map((step, i) => (
        <div key={step.label} className="flex min-w-0 flex-1 items-center">
          <div className="flex flex-col items-center gap-1 min-w-0">
            <span
              className="wf-node flex-shrink-0"
              style={{ ["--wf-d" as string]: NODE_DELAYS[i] }}
            />
            <span className="flex items-center gap-0.5 text-[9px] sm:text-[10px] font-medium text-white/70 whitespace-nowrap">
              {step.label}
              {i === STEPS.length - 1 && (
                <span className="wf-check text-sparkos-cyan inline-flex flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.2 5.2 8.9 9.5 3.6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="wf-link mx-1 flex-1 min-w-[8px] h-[2px] relative overflow-hidden rounded-full">
              <span
                className="wf-pulse"
                style={{ ["--wf-d" as string]: PULSE_DELAYS[i] }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
