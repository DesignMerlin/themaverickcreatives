"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

/**
 * The frame's fluid gradient border is the "Gradients/Special/Fluid" style from
 * Figma: a warm radial sweep with a blue radial layered on top in hard-light.
 */
const FLUID_GRADIENT =
  "radial-gradient(120% 90% at 14% 118%, #ffda55 0%, #fbb358 11.3%, #f88c5c 22.7%, #f4645f 34%, #f03d63 45.4%, #d33592 72.7%, #b72dc0 100%)";
const FLUID_GRADIENT_BLUE =
  "radial-gradient(70% 60% at 6% 6%, #3c93e3 25%, rgba(60,147,227,0) 100%)";

export function VideoHighlight({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Tracks the first play only — pausing afterwards keeps the native controls
  // and must not bring the overlay back over them.
  const [started, setStarted] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    void video.play().catch(() => {
      /* Autoplay policies can reject; the native controls are shown regardless. */
    });
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[120px]">
      <Reveal>
        <h2 className="text-center font-heading text-4xl leading-none tracking-[-1.92px] text-white sm:text-6xl lg:text-[96px]">
          Video Highlight
        </h2>

        <div className="relative mt-8 overflow-hidden rounded-[20px] p-2 sm:p-3 lg:mt-12 lg:p-5">
          <div aria-hidden className="absolute inset-0" style={{ background: FLUID_GRADIENT }} />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-hard-light"
            style={{ background: FLUID_GRADIENT_BLUE }}
          />

          <div className="relative aspect-[1160/749] w-full overflow-hidden rounded-[10px] bg-black">
            <video
              ref={videoRef}
              src={src}
              preload="metadata"
              playsInline
              controls={started}
              onPlay={() => setStarted(true)}
              className="size-full object-cover"
            />

            {!started && (
              <button
                type="button"
                onClick={play}
                aria-label={`Play the ${title} highlight video`}
                className="group absolute inset-0 grid cursor-pointer place-items-center"
              >
                <span
                  className="block size-[72px] bg-white/30 backdrop-blur-[23.8px] transition-transform duration-300 ease-out group-hover:scale-105 sm:size-[120px] lg:size-[238px]"
                  style={{
                    maskImage: "url(/images/play-button-mask.svg)",
                    WebkitMaskImage: "url(/images/play-button-mask.svg)",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
