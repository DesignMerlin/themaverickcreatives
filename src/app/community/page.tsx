import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { CommunityHero } from "@/components/sections/community-hero";
import { TribeBanner } from "@/components/sections/tribe-banner";
import { CommunityReel } from "@/components/sections/community-reel";
import { MavbridgeTraining } from "@/components/sections/mavbridge-training";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Community — Maverick Creatives",
  description:
    "Aspiring and established creatives, entrepreneurs, and tech enthusiasts looking to connect, learn, collaborate, and access opportunities that accelerate their journey.",
};

export default function CommunityPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="px-4 pt-6 sm:px-6 lg:pt-[52px]">
        <SiteNav active="Community" />
      </div>

      <CommunityHero />
      <TribeBanner />
      <CommunityReel />
      <MavbridgeTraining />

      <div className="pt-20 lg:pt-10">
        <Footer />
      </div>
    </main>
  );
}
