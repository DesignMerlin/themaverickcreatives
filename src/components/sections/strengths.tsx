import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";

const strengths = [
  "Branding & Strategy",
  "Media Production",
  "Digital Services",
  "Event Coverage",
  "Training & Growth",
];

/**
 * Figma stacks this as title (83) + 41 gap + list (1022) + 42 gap + button (64),
 * totalling 1252 within an 845px column.
 */
export function Strengths() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:pt-[162px]">
      <div className="mx-auto flex w-full max-w-[845px] flex-col items-center gap-8 lg:gap-[41px]">
        <Reveal className="w-full">
          <h2 className="text-center font-heading text-3xl leading-[1.3] tracking-[-1.28px] text-white sm:text-5xl lg:text-[64px]">
            We know what we are good at!
          </h2>
        </Reveal>

        <div className="flex w-full flex-col items-center gap-8 lg:gap-[42px]">
          <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
            {strengths.map((item, i) => (
              <Reveal key={item} delay={i * 0.05} className="w-full">
                <p className="text-center font-heading text-4xl leading-[1.3] tracking-[-2.56px] text-white sm:text-7xl lg:text-[128px]">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="w-full">
            <PillButton
              href="/portfolio"
              variant="filled"
              className="h-14 w-full text-lg lg:h-16 lg:text-2xl"
            >
              View Our Works
            </PillButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
