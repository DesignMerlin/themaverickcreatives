"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const AUTO_ADVANCE_MS = 6000;

const services = [
  {
    title: "Branding & Strategy",
    description:
      "We develop strong, memorable brand identities through strategic design, visual storytelling, and creative direction that help businesses stand out.",
    image: "/images/services-branding.jpg",
  },
  {
    title: "Media Production",
    description:
      "We create high-quality visual content, including photography, videography, and multimedia productions that tell compelling stories and elevate brand presence.",
    image: "/images/services-media.jpg",
  },
  {
    title: "Digital Services",
    description:
      "From content strategy to social media management and digital campaigns, we provide solutions that enhance online visibility and audience engagement.",
    image: "/images/services-digital.jpg",
  },
  {
    title: "Event Coverage",
    description:
      "We capture moments with precision and creativity, delivering professional photo and video coverage that preserves experiences and showcases events beautifully.",
    image: "/images/services-event.jpg",
  },
  {
    title: "Training & Growth",
    description:
      "Thoughtful planning and direction that ensure your content aligns with your goals, audience, and brand voice.",
    image: "/images/services-training.jpg",
  },
];

export function OurServices() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const selectService = (index: number) => {
    setActive(index);
    setProgress(0);
  };

  useEffect(() => {
    let elapsed = 0;
    let last = Date.now();
    const tick = setInterval(() => {
      const now = Date.now();
      if (!pausedRef.current) {
        elapsed += now - last;
      }
      last = now;
      const pct = Math.min(100, (elapsed / AUTO_ADVANCE_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        setActive((prev) => (prev + 1) % services.length);
        setProgress(0);
      }
    }, 50);
    return () => clearInterval(tick);
  }, [active]);

  const activeService = services[active];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:py-28">
      <Reveal className="mx-auto mb-16 max-w-[992px] text-center">
        <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-[64px]">
          We know our strengths and we build around them.
        </h2>
        <p className="mx-auto mt-2 max-w-[860px] text-lg text-text-caption sm:text-2xl">
          By combining media production, branding, event coverage, and growth
          strategy with hands-on training and community, we create impact
          beyond the project.
        </p>
      </Reveal>

      <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="relative order-1 h-[280px] overflow-hidden rounded-2xl sm:h-[380px] lg:order-2 lg:h-[601px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 584px, 100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="order-2 flex flex-col gap-3 lg:order-1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {services.map((service, i) => {
            const isActive = i === active;
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => selectService(i)}
                className={`flex w-full items-center overflow-hidden rounded-2xl bg-warm-800 px-6 text-left shadow-[0_5px_11px_0_rgba(0,0,0,0.04)] transition-[height] duration-500 ease-out ${
                  isActive ? "h-auto py-6" : "h-[76px] py-0"
                }`}
              >
                <div className="w-full">
                  <h3 className="font-heading text-2xl text-white sm:text-3xl lg:text-[40px]">
                    {service.title}
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2 overflow-hidden">
                      <p className="pt-2 text-base leading-relaxed text-text-caption">
                        {service.description}
                      </p>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-[#eaecf0]/20">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          style={{
                            width: `${isActive ? progress : 0}%`,
                            transition: isActive ? "none" : "width 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
