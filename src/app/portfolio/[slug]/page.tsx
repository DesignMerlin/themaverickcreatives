import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { VideoHighlight } from "@/components/sections/video-highlight";
import { MediaGallery } from "@/components/sections/media-gallery";
import { Footer } from "@/components/footer";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Maverick Creatives`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="px-4 pt-6 sm:px-6 lg:pt-[52px]">
        <SiteNav active="Portfolios" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 pt-8 sm:px-8 lg:px-[120px] lg:pt-12">
        <Breadcrumbs current={project.title} />
      </div>

      <section className="mx-auto w-full max-w-[1440px] px-6 pt-8 sm:px-8 lg:px-[120px] lg:pt-[52px]">
        <Reveal className="flex flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-4 text-center">
            <h1 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
              {project.title}
            </h1>
            <p className="font-ui text-base leading-7 font-medium tracking-[-0.4px] text-text-caption sm:text-lg lg:text-xl">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#ededed] px-3 py-1 font-ui text-xs leading-5 font-medium text-text-disable"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="pt-20 lg:pt-[112px]">
        <VideoHighlight src={project.video} title={project.title} />
      </div>

      <MediaGallery gallery={project.gallery} title={project.title} />

      <div className="pt-20 lg:pt-24">
        <Footer />
      </div>
    </main>
  );
}
