import { Reveal } from "@/components/ui/reveal";

/**
 * The card outline is Figma's "Union" shape — a 50px rounded rect with a
 * circular notch bitten out of the top-right corner, where the star sits.
 * The star spins endlessly.
 */
function Card({
  title,
  body,
  outline,
  star,
}: {
  title: string;
  body: string;
  outline: string;
  star: string;
}) {
  return (
    <div className="relative w-full">
      {/* Outline scales with the card; 586x515 is the Figma artboard size. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${outline})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        aria-hidden
        className="absolute right-0 top-0 size-[15.7%] min-w-[52px] animate-spin-slow"
        style={{
          backgroundImage: `url(${star})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "1 / 1",
        }}
      />

      <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-6 px-8 py-16 text-center sm:min-h-[420px] sm:px-12 lg:h-[515px] lg:px-[53px]">
        <h2 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
          {title}
        </h2>
        <p className="text-lg leading-[1.2] tracking-[-0.64px] text-text-disable sm:text-2xl lg:text-[32px]">
          {body}
        </p>
      </div>
    </div>
  );
}

export function MissionVision() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[123px]">
      <Reveal className="grid gap-8 lg:grid-cols-2">
        <Card
          title="Our Mission"
          body="To empower creatives and brands through innovation, collaboration, and impact-driven storytelling."
          outline="/images/about/mission-union.svg"
          star="/images/about/mission-star.svg"
        />
        <Card
          title="Our Vision"
          body="To become a leading creative ecosystem shaping culture, business, and digital transformation."
          outline="/images/about/vision-union.svg"
          star="/images/about/vision-star.svg"
        />
      </Reveal>
    </section>
  );
}
