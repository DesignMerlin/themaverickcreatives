"use client";

import { useState } from "react";
import { Phone, Eye } from "lucide-react";
import { motion } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";
import { Typewriter } from "@/components/ui/typewriter";

const HEADING = "We transform imagination into measurable progress";
const SUBTEXT =
  "By combining media production, branding, event coverage, and growth strategy with hands-on training and community, we create impact beyond the project.";

export function Hero() {
  // The subtext starts typing once the heading finishes.
  const [headingDone, setHeadingDone] = useState(false);

  return (
    <section className="relative">
      <div className="mx-auto flex max-w-[1320px] flex-col px-4 pt-16 sm:px-6 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-[1010px] flex-col items-center gap-6 pb-24 text-center sm:gap-8 sm:pb-32 lg:pb-40"
        >
          <h1 className="font-heading text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[80px]">
            <Typewriter
              text={HEADING}
              speed={34}
              delay={450}
              caret
              onDone={() => setHeadingDone(true)}
            />
          </h1>
          <p className="max-w-[810px] text-base text-text-caption sm:text-xl">
            <Typewriter text={SUBTEXT} speed={12} delay={120} start={headingDone} />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href="#" variant="filled" className="py-3.5 text-base">
              <span className="flex items-center gap-2">
                <Phone className="size-4" strokeWidth={2.25} />
                Start a Project
              </span>
            </PillButton>
            <PillButton href="/portfolio" variant="outline-light" className="py-3.5 text-base">
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
