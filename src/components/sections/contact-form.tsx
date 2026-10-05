"use client";

import { useRef, useState } from "react";
import { CircleCheck, Loader2 } from "lucide-react";
import {
  FieldGrid,
  SelectField,
  TextAreaField,
  TextField,
  type FieldStatus,
} from "@/components/ui/form-field";

/**
 * Mirrors the five service lines on the site, then the enquiries that do not map
 * to a service. Keeping these aligned with the Services section means the routing
 * of an enquiry matches how the studio actually describes its work.
 */
const ENQUIRY_TYPES = [
  "Branding & Strategy",
  "Media Production",
  "Digital Services",
  "Event Coverage",
  "Training & Growth",
  "Partnership or Collaboration",
  "Press or Media Enquiry",
  "Careers & Internships",
  "Something Else",
] as const;

type FieldName = "name" | "email" | "phone" | "enquiry" | "message";

const EMPTY: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  enquiry: "",
  message: "",
};

/**
 * Every field is required. Each validator returns an error string or undefined,
 * so the form state is derived rather than stored — there is no second copy of
 * "is this valid" to drift out of sync with the value.
 */
const validators: Record<FieldName, (value: string) => string | undefined> = {
  name: (v) => {
    if (!v.trim()) return "Please enter your name.";
    if (v.trim().length < 2) return "That name looks too short.";
    return undefined;
  },
  email: (v) => {
    if (!v.trim()) return "Please enter your email address.";
    // Deliberately permissive: one @, a dot in the domain, no whitespace.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) {
      return "That doesn’t look like a valid email address.";
    }
    return undefined;
  },
  phone: (v) => {
    if (!v.trim()) return "Please enter your phone number.";
    if (!/^[+()\d][\d\s()-]{6,}$/.test(v.trim())) {
      return "Please enter a valid phone number.";
    }
    return undefined;
  },
  enquiry: (v) => {
    if (!v) return "Please choose an enquiry type.";
    // Guards against a value arriving from anywhere but the list.
    if (!ENQUIRY_TYPES.includes(v as (typeof ENQUIRY_TYPES)[number])) {
      return "Please choose one of the listed enquiry types.";
    }
    return undefined;
  },
  message: (v) => {
    if (!v.trim()) return "Please write a message.";
    if (v.trim().length < 10) return "Please write at least 10 characters.";
    return undefined;
  },
};

const FIELD_ORDER: FieldName[] = ["name", "email", "phone", "enquiry", "message"];

export function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = FIELD_ORDER.reduce<Partial<Record<FieldName, string>>>((acc, field) => {
    const message = validators[field](values[field]);
    if (message) acc[field] = message;
    return acc;
  }, {});

  /**
   * A field only turns red once it has been left (or the form submitted), so the
   * user is not scolded mid-type; once it has been touched it updates live, so a
   * correction clears the error immediately and shows success.
   */
  const statusOf = (field: FieldName): FieldStatus => {
    if (!touched[field]) return "idle";
    return errors[field] ? "error" : "success";
  };

  const set = (field: FieldName) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (sent) setSent(false);
  };

  const blur = (field: FieldName) => () => setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => errors[f]);
    if (firstInvalid) {
      // Move focus to the first problem so keyboard and screen-reader users are
      // taken to it rather than left at the submit button.
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      // No endpoint is wired yet — swap this for the real submission.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSent(true);
      setValues(EMPTY);
      setTouched({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-8 lg:gap-12">
      <FieldGrid>
        <TextField
          id="name"
          label="Name"
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          onBlur={blur("name")}
          status={statusOf("name")}
          error={errors.name}
          disabled={submitting}
        />
        <TextField
          id="email"
          label="Email Address"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          onBlur={blur("email")}
          status={statusOf("email")}
          error={errors.email}
          disabled={submitting}
        />
        <TextField
          id="phone"
          label="Phone Number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
          onBlur={blur("phone")}
          status={statusOf("phone")}
          error={errors.phone}
          disabled={submitting}
        />
        <SelectField
          id="enquiry"
          label="Enquiry Type"
          options={ENQUIRY_TYPES}
          value={values.enquiry}
          // Picking from a list is a deliberate choice, so it resolves on change
          // rather than waiting for blur the way the free-text fields do.
          onChange={(v) => {
            set("enquiry")(v);
            setTouched((t) => ({ ...t, enquiry: true }));
          }}
          onBlur={blur("enquiry")}
          status={statusOf("enquiry")}
          error={errors.enquiry}
          disabled={submitting}
        />
      </FieldGrid>

      <TextAreaField
        id="message"
        label="Message"
        value={values.message}
        onChange={set("message")}
        onBlur={blur("message")}
        status={statusOf("message")}
        error={errors.message}
        disabled={submitting}
      />

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[#d9d9d9] bg-purple-500 font-ui text-base font-medium tracking-[-0.4px] text-white transition-colors duration-300 hover:bg-purple-900 focus-visible:ring-4 focus-visible:ring-purple-500/40 focus-visible:outline-none active:scale-[0.995] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[71px] lg:text-xl"
        >
          {submitting && <Loader2 className="size-5 animate-spin" strokeWidth={2.25} />}
          {submitting ? "Sending…" : "Send Message"}
        </button>

        {/* Polite so it is announced after the form settles, not mid-submit. */}
        <p aria-live="polite" className="min-h-0">
          {sent && (
            <span className="flex items-center justify-center gap-2 font-ui text-sm text-success-500 lg:text-base">
              <CircleCheck className="size-4 shrink-0" strokeWidth={2.25} />
              Thanks — your message is on its way. We’ll be in touch shortly.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
