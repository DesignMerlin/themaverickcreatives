import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { PartnersBar } from "@/components/sections/partners-bar";
import { MarqueeGallery } from "@/components/sections/marquee-gallery";
import { WorksGallery } from "@/components/sections/works-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";
import { OurServices } from "@/components/sections/our-services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      {/* A direct child of main so it stays stuck for the whole document. */}
      <SiteNav />

      {/* The gradient spans the hero and the marquee so the images sit on the
          gradient rather than a flat dark band, and drifts endlessly. It is
          pulled up behind the nav and pads the same amount back, so the gradient
          reaches the top of the page without moving the hero. */}
      <div className="relative -mt-[var(--nav-offset)] pt-[var(--nav-offset)]">
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="animate-drift absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <Hero />
        <MarqueeGallery />
      </div>

      <PartnersBar />
      <WorksGallery />
      <CtaBanner />
      <OurServices />
      <Footer />
    </main>
  );
}
