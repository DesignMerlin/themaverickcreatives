import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { LegalDocument } from "@/components/sections/legal-document";
import { Footer } from "@/components/footer";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Maverick Creatives",
  description: privacyPolicy.intro,
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <SiteNav />

      <LegalDocument doc={privacyPolicy} />

      <div className="pt-20 lg:pt-24">
        <Footer />
      </div>
    </main>
  );
}
