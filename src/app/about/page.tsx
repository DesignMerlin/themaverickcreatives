import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { ScrollHighlightText } from "@/components/sections/scroll-highlight-text";
import { MissionVision } from "@/components/sections/mission-vision";
import { Strengths } from "@/components/sections/strengths";
import { Leadership } from "@/components/sections/leadership";
import { Footer } from "@/components/footer";

const INTRO =
  "We are the unconventional ones. We transform imagination into experiences that matter, helping brands connect, stories resonate, and creatives show up with clarity and confidence. We don’t just deliver, we create memories, shape culture, and leave impact in every space we touch.";
const INTRO_ACCENT = "Welcome to Maverick.";

export const metadata: Metadata = {
  title: "About Us — Maverick Creatives",
  description: `${INTRO} ${INTRO_ACCENT}`,
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="px-4 pt-6 sm:px-6 lg:pt-[52px]">
        <SiteNav active="About" />
      </div>

      <ScrollHighlightText text={INTRO} accent={INTRO_ACCENT} />

      <div className="relative h-[280px] w-full sm:h-[460px] lg:h-[720px]">
        <Image
          src="/images/about/hero.jpg"
          alt="The Maverick Creatives team at work"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <MissionVision />
      <Strengths />
      <Leadership />

      <div className="pt-20 lg:pt-24">
        <Footer />
      </div>
    </main>
  );
}
