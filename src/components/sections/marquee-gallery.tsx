"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const images = [
  "/images/marquee-1.jpg",
  "/images/marquee-2.jpg",
  "/images/marquee-3.jpg",
  "/images/marquee-4.jpg",
  "/images/marquee-5.jpg",
  "/images/marquee-6.jpg",
];

/** Pixels per second of idle travel. */
const SPEED = 55;

/**
 * Infinite marquee driven in JS rather than CSS, so the same offset can be taken
 * over by pointer dragging. The track holds two copies of the strip and the
 * offset wraps at half its width, which keeps the loop seamless in both
 * directions no matter how far the user drags.
 */
export function MarqueeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const hovering = useRef(false);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const moved = useRef(0);
  const [grabbing, setGrabbing] = useState(false);

  const apply = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half > 0) {
      // Keep the offset inside (-half, 0] so translateX never runs away.
      offset.current = ((offset.current % half) - half) % half;
    }
    track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduced && !hovering.current && !dragging.current) {
        offset.current -= SPEED * dt;
      }
      apply();
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [apply]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    moved.current = 0;
    lastX.current = e.clientX;
    setGrabbing(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    moved.current += Math.abs(dx);
    offset.current += dx;
    apply();
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    setGrabbing(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const track = [...images, ...images];

  return (
    // touch-pan-y keeps vertical page scrolling working while horizontal drag is ours
    <section
      className={`touch-pan-y overflow-hidden py-4 select-none ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div ref={trackRef} className="flex w-max gap-[22px] will-change-transform">
        {track.map((src, i) => (
          <div
            key={i}
            className="relative h-[280px] w-[360px] shrink-0 overflow-hidden rounded-2xl sm:h-[380px] sm:w-[490px] lg:h-[556px] lg:w-[710px]"
          >
            <Image
              src={src}
              alt=""
              fill
              draggable={false}
              className="pointer-events-none object-cover"
              sizes="(min-width: 1024px) 710px, (min-width: 640px) 490px, 360px"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
