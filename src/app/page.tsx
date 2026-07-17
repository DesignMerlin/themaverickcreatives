import { Hero } from "@/components/hero";
import { PartnersBar } from "@/components/sections/partners-bar";
import { MarqueeGallery } from "@/components/sections/marquee-gallery";
import { WorksGallery } from "@/components/sections/works-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";
import { OurServices } from "@/components/sections/our-services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      <Hero />
      <MarqueeGallery />
      <PartnersBar />
      <WorksGallery />
      <CtaBanner />
      <OurServices />
      <Footer />
    </main>
  );
}
