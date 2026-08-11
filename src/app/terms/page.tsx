import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { LegalDocument } from "@/components/sections/legal-document";
import { Footer } from "@/components/footer";
import { termsOfService } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Maverick Creatives",
  description: termsOfService.intro,
};

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="px-4 pt-6 sm:px-6 lg:pt-[52px]">
        <SiteNav />
      </div>

      <LegalDocument doc={termsOfService} />

      <div className="pt-20 lg:pt-24">
        <Footer />
      </div>
    </main>
  );
}
