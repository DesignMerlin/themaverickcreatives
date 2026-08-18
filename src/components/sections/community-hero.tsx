"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PillButton } from "@/components/ui/pill-button";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The stacked-card collage on the right. Every offset is a percentage of the
 * composition box, so the three layers keep their designed relationship at any
 * width instead of drifting apart the way fixed pixel offsets would.
 */
function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
      className="relative aspect-[583/617] w-full"
    >
      <div className="absolute left-[17.25%] top-0 h-[48.5%] w-[82.75%] rounded-3xl bg-purple-500" />
      <div className="absolute left-0 top-[51.5%] h-[48.5%] w-[82.75%] rounded-3xl bg-orange-500" />

      <div className="absolute left-[4.105%] top-[3.81%] h-[91%] w-[90.47%] overflow-hidden rounded-[18px] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_5px_22px_0_rgba(0,0,0,0.04)]">
        {/* Figma crops the photo to nearly twice the card width and anchors it
            left of centre — reproduced here rather than letting object-cover
            centre it, which would lose the group at the edge of the frame. */}
        <div className="absolute top-0 left-[-42.6%] h-full w-[199.23%]">
          <Image
            src="/images/community/hero-card.jpg"
            alt="Maverick Creatives community members collaborating around a laptop"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1060px, 200vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function CommunityHero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-12 sm:px-8 lg:px-[120px] lg:pt-[104px]">
      <div className="grid items-start gap-12 lg:grid-cols-[584fr_583fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
              Empowering creatives, brands &amp; communities to grow
            </h1>
            <p className="text-lg leading-[1.2] tracking-[-0.48px] text-text-body sm:text-2xl">
              Aspiring and established creatives, entrepreneurs, and tech
              enthusiasts looking to connect, learn, collaborate, and access
              opportunities that accelerate their journey.
            </p>
          </div>
          <PillButton href="#" variant="filled" showArrow className="h-12 text-base">
            Join the Tribe
          </PillButton>
        </motion.div>

        {/* Capped so the collage keeps its designed size on very wide screens
            instead of stretching past the text column it is paired with. */}
        <div className="mx-auto w-full max-w-[583px] lg:mx-0 lg:pt-[21px]">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}
