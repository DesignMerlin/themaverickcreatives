"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { trainingTracks } from "@/lib/training";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MavbridgeTraining() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Vertical tablist: arrows move and select, wrapping at both ends.
  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = trainingTracks.length - 1;
    const next = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const track = trainingTracks[active];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[120px]">
      <Reveal className="flex flex-col gap-6">
        <h2 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
          Mavbridge Training
        </h2>
        <div className="flex flex-col items-start gap-6">
          <p className="max-w-[1113px] text-lg leading-[1.2] tracking-[-0.48px] text-text-body sm:text-2xl">
            Practical, hands-on training designed to equip the next generation
            of creatives and tech professionals with future-ready digital
            skills, expert mentorship, and the confidence to grow and thrive.
          </p>
          <PillButton href="#" variant="filled" showArrow className="h-12 text-base">
            Join the Next Cohort
          </PillButton>
        </div>
      </Reveal>

      <Reveal className="mt-12 grid gap-8 lg:mt-[76px] lg:grid-cols-[556fr_616fr] lg:gap-x-7">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Training tracks"
          onKeyDown={onKeyDown}
          className="flex flex-col gap-4 lg:gap-6"
        >
          {trainingTracks.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.slug}
                ref={(node) => {
                  tabRefs.current[i] = node;
                }}
                type="button"
                role="tab"
                id={`training-tab-${item.slug}`}
                aria-selected={isActive}
                aria-controls={`training-panel-${item.slug}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex min-h-[64px] cursor-pointer items-center rounded-2xl p-5 text-left shadow-[0_0_0_0_rgba(0,0,0,0.06),0_5px_22px_0_rgba(0,0,0,0.04)] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-900 sm:p-6 lg:h-[76px] lg:min-h-0 ${
                  isActive
                    ? "border border-purple-200 bg-white/[0.03]"
                    : "border-[0.5px] border-white hover:bg-white/[0.03]"
                }`}
              >
                <span className="w-full font-heading text-3xl tracking-[-0.8px] text-white sm:text-4xl lg:text-[40px]">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`training-panel-${track.slug}`}
          aria-labelledby={`training-tab-${track.slug}`}
          className="flex flex-col"
        >
          <div className="relative aspect-[616/345] w-full overflow-hidden rounded-2xl">
            {/* Crossfade so the next frame is already painted rather than
                leaving a gap between tracks. */}
            <AnimatePresence>
              <motion.div
                key={track.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={track.image}
                  alt={`${track.title} training at Maverick Creatives`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: track.objectPosition }}
                  sizes="(min-width: 1024px) 616px, 100vw"
                />
                {track.dim && <div className="absolute inset-0 bg-black/20" />}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            key={track.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="flex flex-col"
          >
            <p className="mt-3 text-base leading-[1.48] text-text-caption">
              {track.description}
            </p>

            <p className="mt-6 text-base font-semibold leading-[1.48] text-text-caption">
              COURSE OUTLINE:
            </p>
            <ul className="mt-3 flex flex-col">
              {track.outline.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-base leading-[1.48] text-text-caption"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/training/outline-bullet.svg"
                    alt=""
                    aria-hidden
                    className="mt-[0.37em] h-[0.743em] w-[0.769em] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
