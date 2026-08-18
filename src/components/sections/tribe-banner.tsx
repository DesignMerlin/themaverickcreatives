import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const panels = [
  { src: "/images/community/tribe-1.jpg", alt: "Maverick Creatives community members in front of the Tribe mural" },
  { src: "/images/community/tribe-2.jpg", alt: "The Tribe mural at a Maverick Creatives gathering" },
  { src: "/images/community/tribe-3.jpg", alt: "Maverick Creatives members gathered at the Tribe mural" },
];

/**
 * Triptych of the Tribe mural. The row holds its designed aspect ratio at every
 * width, which keeps each panel at roughly the source photos' own 4:5 crop —
 * so the three frames scale together instead of being cropped apart.
 */
export function TribeBanner() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[120px]">
      <Reveal className="flex aspect-[1199/514] w-full gap-[2px]">
        {panels.map((panel) => (
          <div key={panel.src} className="relative h-full flex-1">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 400px, 33vw"
            />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
