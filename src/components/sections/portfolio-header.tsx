"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";

export function PortfolioHeader() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 sm:px-8 lg:px-[120px] lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
      >
        <h1 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:w-[345px] lg:shrink-0 lg:text-[96px]">
          Our Best
          <br />
          works
        </h1>

        <div className="flex flex-col items-start justify-center gap-6 lg:w-[665px] lg:shrink-0">
          <p className="text-lg leading-[1.2] tracking-[-0.48px] text-text-body sm:text-2xl">
            We combine creativity, strategy, and storytelling to deliver
            impactful branding, event coverage, and media production that
            elevates brands. We provide tailored creative solutions that help
            businesses communicate clearly, stand out confidently, and achieve
            meaningful results.
          </p>
          <PillButton href="#" variant="filled" className="h-12 text-base">
            <span className="flex items-center gap-2">
              <Phone className="size-4" strokeWidth={2.25} />
              Start a Project
            </span>
          </PillButton>
        </div>
      </motion.div>
    </section>
  );
}
