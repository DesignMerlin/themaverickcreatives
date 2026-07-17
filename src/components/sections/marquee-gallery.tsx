import Image from "next/image";

const images = [
  "/images/marquee-1.jpg",
  "/images/marquee-2.jpg",
  "/images/marquee-3.jpg",
  "/images/marquee-4.jpg",
  "/images/marquee-5.jpg",
  "/images/marquee-6.jpg",
];

export function MarqueeGallery() {
  const track = [...images, ...images];

  return (
    <section className="overflow-hidden py-4">
      <div className="group flex w-max animate-marquee gap-[22px] hover:[animation-play-state:paused]">
        {track.map((src, i) => (
          <div
            key={i}
            className="relative h-[280px] w-[360px] shrink-0 overflow-hidden rounded-2xl shadow-[0_5px_22px_0_rgba(0,0,0,0.04)] sm:h-[380px] sm:w-[490px] lg:h-[556px] lg:w-[710px]"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 710px, (min-width: 640px) 490px, 360px"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
