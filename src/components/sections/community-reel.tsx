"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * The 9:16 reel that fills the transparent frame in the design. It autoplays
 * muted so it behaves like an inline social reel, but stays pausable — looping
 * motion longer than five seconds needs a control to stop it.
 */
export function CommunityReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Readers who ask for reduced motion get a still first frame instead. The
  // button's label comes from the element's own play/pause events, so it stays
  // truthful even when a browser refuses to autoplay.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[120px]">
      <Reveal className="flex justify-center">
        <div className="group relative aspect-[9/16] w-full max-w-[482px] overflow-hidden rounded-[23.284px] bg-warm-800">
          <video
            ref={videoRef}
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Maverick Creatives community reel"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src="/videos/community-reel.mp4" type="video/mp4" />
          </video>

          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause reel" : "Play reel"}
            className="absolute right-4 bottom-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="size-4 translate-x-px fill-current" />
            )}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
