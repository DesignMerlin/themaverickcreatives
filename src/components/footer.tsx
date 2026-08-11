import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";

const socials: { href: string; icon: string; fg?: string; alt: string }[] = [
  { href: "#", icon: "/images/icon-fb.svg", alt: "Facebook" },
  { href: "#", icon: "/images/icon-tw-bg.svg", fg: "/images/icon-tw-fg.svg", alt: "X / Twitter" },
  { href: "#", icon: "/images/icon-ig.svg", alt: "Instagram" },
  { href: "#", icon: "/images/icon-ln.svg", alt: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-16 overflow-hidden bg-warm-900 px-6 pt-16 sm:px-8 lg:gap-[100px] lg:px-[120px] lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[21.7%]">
        <Image
          src="/images/footer-map.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <Reveal className="relative flex w-full max-w-[1216px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:themaverickcreatives@gmail.com"
            className="text-base text-white hover:text-text-caption"
          >
            themaverickcreatives@gmail.com
          </a>
          <p className="text-center text-base text-white">
            9 Ayoka Street, opposite Justrite Supermarket, Bariga, Lagos.
          </p>
          <p className="text-base text-white">
            ©2026 Maverick Creatives. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                aria-label={social.alt}
                className="relative size-6 transition-transform duration-300 hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={social.icon} alt="" className="size-full object-contain" />
                {social.fg && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={social.fg}
                    alt=""
                    className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 object-contain"
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        <PillButton href="#" variant="outline-light" className="w-full py-4 text-xl">
          Start a Project
        </PillButton>

        <div className="flex w-full flex-col gap-8">
          <div className="h-px w-full bg-[#e4e7ec]" />
          <div className="flex items-center justify-center gap-8 text-base text-text-caption">
            <Link href="/terms" className="transition-colors duration-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Reveal>

      <p
        aria-hidden
        className="relative -mb-4 select-none whitespace-nowrap bg-gradient-to-b from-[#7c00e8] from-[10%] to-transparent to-[81%] bg-clip-text text-center font-heading text-[18vw] leading-[1.45] text-transparent sm:text-[13vw] lg:text-[190px]"
      >
        Maverick Creatives
      </p>
    </footer>
  );
}
