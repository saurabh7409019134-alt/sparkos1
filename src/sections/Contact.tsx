import { useState, type FormEvent } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const serviceOptions = [
  "AI Content & Growth",
  "AI Automation",
  "AI Websites & AI Agents",
  "Video Editing",
  "Multiple Services",
];

const budgetOptions = [
  "Under ₹15,000",
  "₹15,000",
  "₹25,000",
  "₹40,000",
  "₹60,000+",
];

type FormValues = {
  name: string;
  businessName: string;
  email: string;
  businessType: string;
  service: string;
  budget: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  businessName: "",
  email: "",
  businessType: "",
  service: "",
  budget: "",
  details: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) errors.service = "Please choose a service.";
  if (!values.budget) errors.budget = "Please choose a budget range.";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 " +
  "transition-colors duration-200 focus:border-sparkos-cyan/70 focus:bg-white/[0.06] focus:outline-none";

const errorClasses = "border-red-400/70 focus:border-red-400/70";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-300">
      {message}
    </p>
  );
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const set = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstErrorField = Object.keys(found)[0] as keyof FormValues;
      document.getElementById(`field-${firstErrorField}`)?.focus();
      return;
    }
    setStatus("sending");
    // Simulated client-side processing only — no backend is connected.
    window.setTimeout(() => setStatus("success"), 1200);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      {/* Subtle blue/cyan gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,58,255,0.16),transparent_70%),radial-gradient(ellipse_50%_40%_at_80%_30%,rgba(0,229,255,0.06),transparent_70%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Turn Attention Into Growth?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Tell us about your business and goals. We&apos;ll help you
            identify the right Sparkos service for your needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact-form">Start a Project</Button>
            <Button href="#work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </Reveal>

        {/* Inquiry form */}
        <Reveal delay={120}>
          <div
            id="contact-form"
            className="mx-auto mt-14 max-w-2xl scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-10"
          >
            {status === "success" ? (
              <div className="py-6 text-center" aria-live="polite">
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sparkos-cyan/40 bg-sparkos-cyan/10 text-sparkos-cyan"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m8 14.5 5.5 5.5L20.5 12"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Your inquiry is ready to send.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
                  Your details passed validation, but this form isn&apos;t
                  connected to a delivery service yet — nothing has been
                  emailed. Connect a form endpoint or email service (for
                  example, a form backend or your own API) to start
                  receiving inquiries.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[15px] font-medium text-white transition-colors hover:border-sparkos-cyan/60 hover:bg-white/10"
                >
                  Start a new inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl font-semibold text-white">
                  Project inquiry
                </h3>
                <p className="mt-1.5 text-sm text-white/55">
                  Fields marked <span aria-hidden="true" className="text-sparkos-cyan">*</span>
                  <span className="sr-only">(required)</span> are required.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="field-name"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Name <span aria-hidden="true" className="text-sparkos-cyan">*</span>
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={set("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      placeholder="Your full name"
                      className={`${inputClasses} ${errors.name ? errorClasses : ""}`}
                    />
                    <FieldError id="error-name" message={errors.name} />
                  </div>

                  <div>
                    <label
                      htmlFor="field-businessName"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Business name
                    </label>
                    <input
                      id="field-businessName"
                      type="text"
                      autoComplete="organization"
                      value={values.businessName}
                      onChange={set("businessName")}
                      placeholder="Your business or brand"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-email"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Email <span aria-hidden="true" className="text-sparkos-cyan">*</span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      placeholder="you@example.com"
                      className={`${inputClasses} ${errors.email ? errorClasses : ""}`}
                    />
                    <FieldError id="error-email" message={errors.email} />
                  </div>

                  <div>
                    <label
                      htmlFor="field-businessType"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Business type
                    </label>
                    <input
                      id="field-businessType"
                      type="text"
                      value={values.businessType}
                      onChange={set("businessType")}
                      placeholder="e.g. Restaurant, café, product brand"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-service"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Service required <span aria-hidden="true" className="text-sparkos-cyan">*</span>
                    </label>
                    <select
                      id="field-service"
                      value={values.service}
                      onChange={set("service")}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "error-service" : undefined}
                      className={`${inputClasses} ${errors.service ? errorClasses : ""} ${values.service ? "" : "text-white/35"}`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-sparkos-ink text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <FieldError id="error-service" message={errors.service} />
                  </div>

                  <div>
                    <label
                      htmlFor="field-budget"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Approximate budget <span aria-hidden="true" className="text-sparkos-cyan">*</span>
                    </label>
                    <select
                      id="field-budget"
                      value={values.budget}
                      onChange={set("budget")}
                      aria-invalid={!!errors.budget}
                      aria-describedby={errors.budget ? "error-budget" : undefined}
                      className={`${inputClasses} ${errors.budget ? errorClasses : ""} ${values.budget ? "" : "text-white/35"}`}
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-sparkos-ink text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <FieldError id="error-budget" message={errors.budget} />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="field-details"
                    className="mb-1.5 block text-sm font-medium text-white/85"
                  >
                    Project details
                  </label>
                  <textarea
                    id="field-details"
                    rows={5}
                    value={values.details}
                    onChange={set("details")}
                    placeholder="Tell us about your business, goals, and what you'd like Sparkos to create."
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                <div className="mt-7">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    ariaLabel={
                      status === "sending" ? "Submitting inquiry" : "Submit project inquiry"
                    }
                  >
                    {status === "sending" ? (
                      <span className="inline-flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="animate-spin"
                        >
                          <circle
                            cx="9"
                            cy="9"
                            r="7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeOpacity="0.25"
                          />
                          <path
                            d="M16 9a7 7 0 0 0-7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Validating…
                      </span>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                  <p className="mt-4 text-xs leading-relaxed text-white/40">
                    This form validates your details in the browser. Real
                    message delivery requires connecting a form endpoint or
                    email service — nothing is sent anywhere yet.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
