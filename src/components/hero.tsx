"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Eye, Menu } from "lucide-react";
import { motion } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";

const navLinks = ["About", "Portfolios", "Community", "Contact Us"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-16 px-4 pt-6 sm:px-6 lg:gap-24 lg:pt-8">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-md sm:px-6"
        >
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="relative size-9 shrink-0 sm:size-10">
              <Image src="/images/logo-mark.png" alt="" fill sizes="40px" className="object-contain" />
            </span>
            <span className="hidden font-ui text-sm leading-tight font-semibold text-white sm:block">
              Maverick
              <br />
              Creatives
            </span>
          </Link>

          <div className="hidden items-center gap-8 font-ui text-sm text-white lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="transition-colors duration-300 hover:text-text-caption"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <PillButton href="#" variant="filled" className="py-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Phone className="size-3.5" strokeWidth={2.25} />
                Start a Project
              </span>
            </PillButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white sm:hidden"
          >
            <Menu className="size-4" />
          </button>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-[1010px] flex-col items-center gap-6 pb-24 text-center sm:gap-8 sm:pb-32 lg:pb-40"
        >
          <h1 className="font-heading text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[80px]">
            We transform imagination into measurable progress
          </h1>
          <p className="max-w-[810px] text-base text-text-caption sm:text-xl">
            By combining media production, branding, event coverage, and
            growth strategy with hands-on training and community, we create
            impact beyond the project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href="#" variant="filled" className="py-3.5 text-base">
              <span className="flex items-center gap-2">
                <Phone className="size-4" strokeWidth={2.25} />
                Start a Project
              </span>
            </PillButton>
            <PillButton href="#" variant="outline-light" className="py-3.5 text-base">
              <span className="flex items-center gap-2">
                <Eye className="size-4" strokeWidth={2.25} />
                View Our Works
              </span>
            </PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
