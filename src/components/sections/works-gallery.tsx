import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";
import { WorkCard } from "@/components/sections/work-card";

const projects = [
  {
    title: "Rewriting Limits",
    subtitle: "Brand Identity • Event Mgt",
    images: [
      { src: "/images/project1-img1.jpg", weight: 665 },
      { src: "/images/project1-img2.jpg", weight: 308 },
      { src: "/images/project1-img3.png", weight: 275 },
    ] as const,
  },
  {
    title: "Immigify Inc.",
    subtitle: "Media Coverage",
    images: [
      { src: "/images/project2-img1.jpg", weight: 308 },
      { src: "/images/project2-img2.jpg", weight: 665 },
      { src: "/images/project2-img3.jpg", weight: 275 },
    ] as const,
  },
  {
    title: "Beyond Convention",
    subtitle: "Media Coverage",
    images: [
      { src: "/images/project3-img1.jpg", weight: 308 },
      { src: "/images/project3-img2.jpg", weight: 275 },
      { src: "/images/project3-img3.jpg", weight: 665 },
    ] as const,
  },
];

export function WorksGallery() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
      <Reveal className="mx-auto mb-16 max-w-[992px] text-center">
        <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-[64px]">
          Take a look at some of our best works
        </h2>
        <p className="mx-auto mt-2 max-w-[860px] text-lg text-text-caption sm:text-2xl">
          By combining media production, branding, event coverage, and growth
          strategy with hands-on training and community, we create impact
          beyond the project.
        </p>
      </Reveal>

      <div className="flex flex-col gap-16 lg:gap-20">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <WorkCard
              title={project.title}
              subtitle={project.subtitle}
              images={[...project.images]}
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 flex justify-center">
        <PillButton href="/portfolio" variant="outline-dark" className="w-full max-w-[425px] py-4 text-base">
          View All
        </PillButton>
      </Reveal>
    </section>
  );
}
