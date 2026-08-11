import { Reveal } from "@/components/ui/reveal";
import type { GalleryCell } from "@/lib/projects";

/**
 * Rows alternate which side carries the wide image: the wide cell fills the
 * remaining space, the narrow one is a fixed 481px at the design width.
 */
function Cell({ cell, alt, wide }: { cell: GalleryCell; alt: string; wide: boolean }) {
  const cropped = Boolean(cell.width);

  return (
    <div
      className={`group relative h-[240px] shrink-0 overflow-hidden rounded-2xl sm:h-[360px] lg:h-[514px] ${
        wide ? "w-full lg:min-w-0 lg:flex-1" : "w-full lg:w-[481px]"
      }`}
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cell.src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={
            cropped
              ? "absolute max-w-none object-cover"
              : "absolute inset-0 size-full object-cover"
          }
          style={{
            ...(cropped
              ? {
                  width: cell.width,
                  height: cell.height ?? "100%",
                  left: cell.left,
                  top: cell.top,
                }
              : null),
            ...(cell.flip ? { transform: "scaleX(-1)" } : null),
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/10" />
    </div>
  );
}

export function MediaGallery({ gallery, title }: { gallery: GalleryCell[]; title: string }) {
  const rows = [0, 1, 2, 3].map((i) => gallery.slice(i * 2, i * 2 + 2));

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[104px]">
      <Reveal>
        <h2 className="text-center font-heading text-4xl leading-none tracking-[-1.92px] text-white sm:text-6xl lg:text-[96px]">
          Media &amp; Gallery
        </h2>
      </Reveal>

      <div className="mt-8 flex flex-col gap-8 lg:mt-12">
        {rows.map((row, r) => {
          // Even rows lead with the wide image, odd rows lead with the narrow one.
          const wideFirst = r % 2 === 0;
          return (
            <Reveal key={r} className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <Cell cell={row[0]} alt={`${title} gallery image ${r * 2 + 1}`} wide={wideFirst} />
              <Cell cell={row[1]} alt={`${title} gallery image ${r * 2 + 2}`} wide={!wideFirst} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
