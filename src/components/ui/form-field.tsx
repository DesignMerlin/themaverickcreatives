"use client";

import { ChevronDown, CircleAlert, CircleCheck } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Shared field chrome for the contact form.
 *
 * The design shows only the idle field — a 1px #e8e8e8 outline with the label
 * sitting in as the placeholder. The remaining states (focus/typing, error,
 * success, disabled) are built on top of that outline so the resting appearance
 * is untouched and only the border, ring and helper row change.
 */
export type FieldStatus = "idle" | "error" | "success";

/** Border + ring per state. Focus wins over error/success while the user types. */
function borderFor(status: FieldStatus) {
  if (status === "error") {
    return "border-danger-500 focus-within:border-danger-500 focus-within:ring-danger-500/25";
  }
  if (status === "success") {
    return "border-success-500 focus-within:border-success-500 focus-within:ring-success-500/25";
  }
  return "border-[#e8e8e8] hover:border-white focus-within:border-purple-500 focus-within:ring-purple-500/30";
}

const SHARED_RING = "ring-0 focus-within:ring-4 transition-[border-color,box-shadow] duration-200";

/**
 * Text styling for the control itself, matching the design's placeholder spec.
 * The colour is kept out of the base so the select can set its own without two
 * competing `text-*` utilities in one class string — whichever Tailwind emits
 * last would win, regardless of the order written here.
 */
const CONTROL_BASE =
  "w-full bg-transparent font-ui text-base font-medium tracking-[-0.4px] outline-none placeholder:text-text-caption disabled:cursor-not-allowed lg:text-xl";
const CONTROL = `${CONTROL_BASE} text-white`;

function HelperRow({
  id,
  status,
  error,
  hint,
}: {
  id: string;
  status: FieldStatus;
  error?: string;
  hint?: string;
}) {
  // Reserve nothing when idle — the grid gap already spaces the rows.
  if (status === "error" && error) {
    return (
      <p
        id={`${id}-error`}
        role="alert"
        className="mt-2 flex items-center gap-1.5 pl-5 font-ui text-xs text-danger-500 lg:text-sm"
      >
        <CircleAlert className="size-3.5 shrink-0" strokeWidth={2.25} />
        {error}
      </p>
    );
  }
  if (hint) {
    return (
      <p id={`${id}-hint`} className="mt-2 pl-5 font-ui text-xs text-text-body lg:text-sm">
        {hint}
      </p>
    );
  }
  return null;
}

type BaseProps = {
  id: string;
  /** Doubles as the visually-hidden label and the placeholder, as designed. */
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  status: FieldStatus;
  error?: string;
  hint?: string;
  disabled?: boolean;
  autoComplete?: string;
};

function describedBy(id: string, status: FieldStatus, error?: string, hint?: string) {
  if (status === "error" && error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

/** Status affordance pinned to the right of the pill, where the design leaves space. */
function StatusIcon({ status }: { status: FieldStatus }) {
  if (status === "success") {
    return <CircleCheck className="size-5 shrink-0 text-success-500" strokeWidth={2.25} />;
  }
  if (status === "error") {
    return <CircleAlert className="size-5 shrink-0 text-danger-500" strokeWidth={2.25} />;
  }
  return null;
}

export function TextField({
  id,
  label,
  value,
  onChange,
  onBlur,
  status,
  error,
  hint,
  disabled,
  autoComplete,
  type = "text",
  inputMode,
}: BaseProps & {
  type?: "text" | "email" | "tel";
  inputMode?: "text" | "email" | "tel";
}) {
  return (
    <div className={disabled ? "opacity-60" : undefined}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div
        className={`flex h-[60px] items-center gap-3 rounded-full border bg-transparent pr-5 pl-5 lg:h-[78px] ${SHARED_RING} ${borderFor(status)}`}
      >
        <input
          id={id}
          name={id}
          type={type}
          inputMode={inputMode}
          value={value}
          required
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={label}
          aria-invalid={status === "error"}
          aria-describedby={describedBy(id, status, error, hint)}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={CONTROL}
        />
        <StatusIcon status={status} />
      </div>
      <HelperRow id={id} status={status} error={error} hint={hint} />
    </div>
  );
}

/**
 * A native `<select>` wearing the same pill as the text fields. Native keeps the
 * platform's own picker — which is what users expect on touch — so the only
 * custom chrome is the chevron, placed in the space the design leaves on the
 * right. The placeholder is a hidden empty option, so the closed control reads
 * exactly like the other placeholders until something is chosen.
 */
export function SelectField({
  id,
  label,
  value,
  onChange,
  onBlur,
  status,
  error,
  hint,
  disabled,
  options,
}: BaseProps & { options: readonly string[] }) {
  return (
    <div className={disabled ? "opacity-60" : undefined}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div
        className={`flex h-[60px] items-center gap-3 rounded-full border bg-transparent pr-5 pl-5 lg:h-[78px] ${SHARED_RING} ${borderFor(status)}`}
      >
        <select
          id={id}
          name={id}
          value={value}
          required
          disabled={disabled}
          aria-invalid={status === "error"}
          aria-describedby={describedBy(id, status, error, hint)}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${CONTROL_BASE} cursor-pointer appearance-none ${
            value ? "text-white" : "text-text-caption"
          }`}
        >
          <option value="" hidden>
            {label}
          </option>
          {options.map((option) => (
            // Explicit colours: the OS paints the open list, and without these
            // it renders dark-on-dark in Chrome on Windows.
            <option key={option} value={option} className="bg-warm-900 text-white">
              {option}
            </option>
          ))}
        </select>
        <StatusIcon status={status} />
        <ChevronDown
          aria-hidden
          className="size-5 shrink-0 text-text-caption transition-colors duration-200"
          strokeWidth={2.25}
        />
      </div>
      <HelperRow id={id} status={status} error={error} hint={hint} />
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  onBlur,
  status,
  error,
  hint,
  disabled,
}: BaseProps) {
  return (
    <div className={disabled ? "opacity-60" : undefined}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div
        className={`relative rounded-2xl border bg-transparent ${SHARED_RING} ${borderFor(status)}`}
      >
        <textarea
          id={id}
          name={id}
          value={value}
          required
          disabled={disabled}
          placeholder={label}
          aria-invalid={status === "error"}
          aria-describedby={describedBy(id, status, error, hint)}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${CONTROL} h-[220px] resize-none pt-6 pr-12 pb-6 pl-7 lg:h-[474px]`}
        />
        <span className="pointer-events-none absolute top-6 right-6">
          <StatusIcon status={status} />
        </span>
      </div>
      <HelperRow id={id} status={status} error={error} hint={hint} />
    </div>
  );
}

/** Wrapper so the form grid can lay fields out without knowing their internals. */
export function FieldGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[53px] lg:gap-y-7">
      {children}
    </div>
  );
}
