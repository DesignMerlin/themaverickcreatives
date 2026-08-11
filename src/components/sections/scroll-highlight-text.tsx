"use client";

import { useScroll, useTransform, motion, type MotionValue } from "motion/react";
import { useRef } from "react";

/** The brand gradient Figma applies to the closing line. */
const ACCENT_GRADIENT =
  "linear-gradient(124.26deg, #fed802 19.606%, #f18b1c 33.761%, #fd1d4f 47.916%, #7538fe 65.374%)";

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[0.22em] inline-block">
      <span className="text-text-body">{children}</span>
      <motion.span
        style={{
          opacity,
          ...(accent
            ? { backgroundImage: ACCENT_GRADIENT, WebkitBackgroundClip: "text" }
            : null),
        }}
        className={`absolute inset-0 ${accent ? "bg-clip-text text-transparent" : "text-white"}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * The paragraph pins to the viewport while the page scrolls through a tall
 * spacer. Over that distance the words fill from grey to white, finishing with
 * the accent line in the brand gradient; once complete the section releases and
 * the page carries on to the image below.
 */
export function ScrollHighlightText({
  text,
  accent,
}: {
  text: string;
  /** Trailing phrase rendered in the brand gradient. */
  accent?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];
  const all = [...words, ...accentWords];

  // Finish the fill a little before the pin releases, so the last word is fully
  // lit while the section is still on screen.
  const span = 0.85;

  return (
    <div ref={container} className="relative h-[220vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[120px]">
          <p className="flex flex-wrap font-heading text-3xl leading-none tracking-[-1.28px] sm:text-5xl lg:text-[64px]">
            {all.map((word, i) => (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[(i / all.length) * span, ((i + 1) / all.length) * span]}
                accent={i >= words.length}
              >
                {word}
              </Word>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
