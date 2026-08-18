"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolios", href: "/portfolio" },
  { label: "Community", href: "/community" },
  { label: "Contact Us", href: "#" },
];

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  // Driven straight off the scroll position as a motion value rather than React
  // state, so the blur is correct on first paint even when the page is restored
  // mid-scroll, and scrolling never triggers a re-render.
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 24], [0, 1]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape, and whenever the viewport grows past the mobile breakpoint
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => query.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    query.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      query.removeEventListener("change", onChange);
    };
  }, []);

  return (
    // Pinned to the top of the page. `main` is the containing block, so the nav
    // stays stuck for the whole document rather than only its own section.
    <div className="sticky top-0 z-50 px-4 pt-6 sm:px-6 lg:pt-[52px]">
      {/* The band that blurs whatever scrolls beneath the nav. Masked at the
          bottom so the blur dissolves instead of ending on a hard line. */}
      <motion.div
        aria-hidden
        style={{
          opacity: backdropOpacity,
          maskImage: "linear-gradient(to bottom, #000 62%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent)",
        }}
        className="pointer-events-none absolute inset-x-0 -top-px -bottom-8 -z-10 bg-warm-900/50 backdrop-blur-xl"
      />

      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 mx-auto w-full max-w-[1158px] rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-md lg:rounded-full"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:h-20 lg:py-0">
          <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
            <span className="relative size-9 shrink-0 sm:size-10">
              <Image src="/images/logo-mark-v2.png" alt="" fill sizes="40px" className="object-contain" />
            </span>
            <span className="hidden font-ui text-sm leading-tight font-semibold text-white sm:block">
              Maverick
              <br />
              Creatives
            </span>
          </Link>

          <div className="hidden items-center gap-8 font-ui text-sm lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.label === active ? "page" : undefined}
                className={`transition-colors duration-300 ${
                  link.label === active
                    ? "text-purple-400"
                    : "text-white hover:text-text-caption"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <PillButton href="#" variant="filled" className="py-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Phone className="size-3.5" strokeWidth={2.25} />
                Start a Project
              </span>
            </PillButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Collapsed with a CSS grid-row transition rather than a JS animation, so the
            menu is never dependent on an animation frame to become visible. */}
        <div
          id="mobile-menu"
          aria-hidden={!open}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-300 ease-out lg:hidden ${
            open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                  aria-current={link.label === active ? "page" : undefined}
                  className={`rounded-xl px-3 py-3 font-ui text-base transition-colors duration-300 ${
                    link.label === active
                      ? "bg-white/5 text-purple-400"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <PillButton href="#" variant="filled" className="mt-3 w-full py-3 text-sm">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="size-4" strokeWidth={2.25} />
                  Start a Project
                </span>
              </PillButton>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
