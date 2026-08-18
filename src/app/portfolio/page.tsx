import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { PortfolioHeader } from "@/components/sections/portfolio-header";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Best Works — Maverick Creatives",
  description:
    "We combine creativity, strategy, and storytelling to deliver impactful branding, event coverage, and media production that elevates brands.",
};

export default function PortfolioPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <SiteNav active="Portfolios" />
      <PortfolioHeader />
      <PortfolioGrid />
      <Footer />
    </main>
  );
}
