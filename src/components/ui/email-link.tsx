"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, ExternalLink, Mail, X } from "lucide-react";

export const CONTACT_EMAIL = "themaverickcreatives@gmail.com";

const to = encodeURIComponent(CONTACT_EMAIL);

/**
 * Webmail compose deep links. A bare `mailto:` only reaches people who have a
 * desktop mail client registered — most readers are on webmail and would get
 * nothing at all — so the address opens a chooser instead, keeping `mailto:`
 * as one option rather than the only one.
 */
const providers = [
  { name: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}` },
  { name: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}` },
  { name: "Yahoo Mail", href: `https://compose.mail.yahoo.com/?to=${to}` },
];

const rowClasses =
  "flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none";

export function EmailLink({ className = "" }: { className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const close = () => dialogRef.current?.close();

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
      } else {
        // Older browsers, and any page not served over a secure origin, have no
        // async clipboard — fall back to a throwaway selection.
        const field = document.createElement("textarea");
        field.value = CONTACT_EMAIL;
        field.setAttribute("readonly", "");
        field.style.cssText = "position:fixed;top:0;left:0;opacity:0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={`cursor-pointer rounded transition-colors duration-300 hover:text-text-caption focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none ${className}`}
      >
        {CONTACT_EMAIL}
      </button>

      {/* A native dialog so focus containment, background inerting and the
          Escape key come from the platform rather than hand-rolled listeners. */}
      <dialog
        ref={dialogRef}
        aria-labelledby="email-dialog-title"
        onClose={() => setCopied(false)}
        onClick={(event) => {
          // Clicks land on the dialog itself only when they hit the backdrop.
          if (event.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(92vw,380px)] rounded-2xl border border-white/10 bg-warm-800 p-0 text-white backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                <Mail className="size-4" />
              </span>
              <h2 id="email-dialog-title" className="font-ui text-base font-semibold">
                Send us an email
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-text-caption transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Full width rather than beside the title, so the address never has
              to break mid-word on a narrow screen. */}
          <p className="mt-3 text-sm break-words text-text-caption">{CONTACT_EMAIL}</p>

          <div className="mt-4 flex flex-col gap-2">
            {providers.map((provider) => (
              <a
                key={provider.name}
                href={provider.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={rowClasses}
              >
                {provider.name}
                <ExternalLink className="size-4 shrink-0 text-text-caption" />
              </a>
            ))}

            <a href={`mailto:${CONTACT_EMAIL}`} onClick={close} className={rowClasses}>
              Default mail app
              <Mail className="size-4 shrink-0 text-text-caption" />
            </a>

            <button type="button" onClick={copy} className={`${rowClasses} cursor-pointer`}>
              {copied ? "Address copied" : "Copy address"}
              {copied ? (
                <Check className="size-4 shrink-0 text-purple-400" />
              ) : (
                <Copy className="size-4 shrink-0 text-text-caption" />
              )}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
