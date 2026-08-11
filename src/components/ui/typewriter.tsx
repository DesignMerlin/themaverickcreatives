"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types text out one character at a time. Every character stays in the DOM and
 * is only toggled with `visibility`, so the text wraps and reserves its final
 * height from the first frame — no layout shift as it types.
 */
export function Typewriter({
  text,
  className,
  speed = 26,
  delay = 0,
  caret = false,
  start = true,
  onDone,
}: {
  text: string;
  className?: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Milliseconds to wait before typing starts. */
  delay?: number;
  caret?: boolean;
  /** Hold the animation until this flips true (for chaining one line after another). */
  start?: boolean;
  onDone?: () => void;
}) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!start) return;

    // Honour reduced motion by revealing the whole string on the first frame.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      startTime ??= now;
      const n = reduced
        ? text.length
        : Math.min(text.length, Math.floor((now - startTime) / speed));
      setCount(n);
      if (n < text.length) {
        frame = requestAnimationFrame(tick);
      } else {
        doneRef.current?.();
      }
    };

    const timer = setTimeout(
      () => {
        frame = requestAnimationFrame(tick);
      },
      reduced ? 0 : delay,
    );

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [text, speed, delay, start]);

  const typing = count < text.length;

  return (
    <span className={className}>
      {/* Screen readers get the whole string; the per-character spans are decorative. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {Array.from(text).map((char, i) => (
          <span key={i} style={{ visibility: i < count ? "visible" : "hidden" }}>
            {char}
          </span>
        ))}
        {caret && typing && (
          <span className="animate-caret ml-1 inline-block w-[0.06em] self-stretch bg-current align-baseline">
            &nbsp;
          </span>
        )}
      </span>
    </span>
  );
}
