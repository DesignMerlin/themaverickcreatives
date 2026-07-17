import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";

type WorkImage = {
  src: string;
  weight: number;
};

export function WorkCard({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: [WorkImage, WorkImage, WorkImage];
}) {
  return (
    <article className="flex flex-col gap-6">
      <div className="flex h-[220px] gap-3 sm:h-[340px] lg:h-[528px] lg:gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="group/photo relative h-full overflow-hidden rounded-xl lg:rounded-2xl"
            style={{ flexGrow: image.weight, flexBasis: 0 }}
          >
            <Image
              src={image.src}
              alt={`${title} artwork ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover/photo:scale-110"
              sizes="(min-width: 1024px) 700px, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover/photo:bg-black/10" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl text-white">{title}</h3>
          <p className="text-base text-text-caption">{subtitle}</p>
        </div>
        <PillButton href="#" variant="filled" showArrow className="shrink-0">
          View Project
        </PillButton>
      </div>
    </article>
  );
}
