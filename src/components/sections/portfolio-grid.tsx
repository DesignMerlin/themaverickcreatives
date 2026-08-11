import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/projects";

export function PortfolioGrid() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 pb-20 sm:px-8 lg:px-20 lg:pt-[182px] lg:pb-24">
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.1}>
            <Link href={`/portfolio/${project.slug}`} className="group flex flex-col gap-6">
              <div className="relative h-[280px] overflow-hidden rounded-2xl bg-white sm:h-[380px] lg:h-[514px]">
                <Image
                  src={project.cardImage}
                  alt={project.cardTitle}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 624px, (min-width: 640px) 50vw, 100vw"
                  priority={i < 2}
                />
              </div>
              <div className="flex items-center justify-between gap-4 whitespace-nowrap text-white">
                <h2 className="font-ui text-2xl leading-[40px] tracking-[-0.64px] lg:text-[32px]">
                  {project.cardTitle}
                </h2>
                <p className="font-ui text-lg leading-[32px] font-light tracking-[-0.48px] lg:text-2xl">
                  {project.year}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
