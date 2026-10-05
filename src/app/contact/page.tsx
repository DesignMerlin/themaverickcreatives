import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us — Maverick Creatives",
  description:
    "Have a question, want to collaborate, or simply want to learn more about Maverick Creatives? We’d love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <SiteNav active="Contact Us" />

      <section className="mx-auto w-full max-w-[1440px] px-6 pt-10 sm:px-8 lg:px-[120px] lg:pt-[54px]">
        {/* The bordered card: 1200x-wide, 16px radius, 1px #e8e8e8 outline. */}
        <Reveal className="flex flex-col items-center gap-8 rounded-2xl border border-[#e8e8e8] px-6 py-10 sm:px-10 sm:py-14 lg:gap-12 lg:pt-[72px] lg:pr-[45px] lg:pb-[98px] lg:pl-12">
          <header className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
              Let’s Connect.
            </h1>
            <p className="max-w-[601px] font-ui text-base leading-7 font-medium tracking-[-0.4px] text-text-caption lg:text-xl">
              Have a question, want to collaborate, or simply want to learn more about
              Maverick Creatives? We’d love to hear from you.
            </p>
          </header>

          <ContactForm />
        </Reveal>
      </section>

      <div className="pt-20 lg:pt-24">
        <Footer />
      </div>
    </main>
  );
}
