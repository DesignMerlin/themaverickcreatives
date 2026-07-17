import { Reveal } from "@/components/ui/reveal";

const logos = [
  { src: "/images/logo-wiflow.png", w: 63, alt: "Wiflow" },
  { src: "/images/logo-touchfilms.png", w: 44, alt: "Touch Films" },
  { src: "/images/logo-pearl.svg", w: 64, alt: "Lighted Pearl" },
  { src: "/images/logo-jeremy.png", w: 48, alt: "Jeremy" },
  { src: "/images/logo-youth.png", w: 71, alt: "Youth Conference" },
  { src: "/images/logo-temiloye.png", w: 137, alt: "Temiloye" },
];

export function PartnersBar() {
  const track = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-warm-800/40 py-12">
      <Reveal className="mx-auto max-w-[1280px] px-8">
        <p className="mb-8 text-center text-2xl text-text-disable">
          We&apos;ve worked with over 20+ brands and agencies
        </p>
      </Reveal>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-[80px] sm:gap-[110px] lg:gap-[150px]">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex h-[36px] shrink-0 items-center sm:h-[48px]"
              style={{ width: logo.w * 0.8 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full object-contain object-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
