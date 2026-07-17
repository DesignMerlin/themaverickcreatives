import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-4 sm:px-8">
      <Reveal className="flex flex-col items-center gap-8">
        <h2 className="max-w-[860px] text-center font-heading text-3xl leading-tight tracking-tight text-white sm:text-5xl lg:text-[64px]">
          We transform imagination into experiences that connect, inspire,
          and endure.{" "}
          <span className="bg-[linear-gradient(135deg,#fed802_20%,#f18b1c_34%,#fd1d4f_48%,#7538fe_65%)] bg-clip-text text-transparent">
            Welcome to Maverick.
          </span>
        </h2>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[420px] lg:h-[720px]">
          <Image
            src="/images/cta-image.jpg"
            alt="Maverick Creatives team filming an event"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
