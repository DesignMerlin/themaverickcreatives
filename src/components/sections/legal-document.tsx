import { Reveal } from "@/components/ui/reveal";
import type { LegalDoc } from "@/lib/legal";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto w-full max-w-[1440px] px-6 pt-12 text-center sm:px-8 lg:px-[120px] lg:pt-20">
      <Reveal className="mx-auto flex max-w-[860px] flex-col gap-4">
        <h1 className="font-heading text-5xl leading-none tracking-[-1.92px] text-white sm:text-7xl lg:text-[96px]">
          {doc.title}
        </h1>
        <p className="font-ui text-sm text-text-body">Last updated: {doc.updated}</p>
        <p className="text-lg leading-relaxed text-text-caption sm:text-xl">{doc.intro}</p>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-[860px] flex-col gap-12 lg:mt-20">
        {doc.sections.map((section) => (
          <Reveal key={section.heading} className="flex flex-col gap-4">
            <h2 className="font-ui text-xl font-semibold text-white sm:text-2xl">
              {section.heading}
            </h2>
            {section.blocks.map((block, i) =>
              block.type === "p" ? (
                <p key={i} className="text-base leading-relaxed text-text-caption sm:text-lg">
                  {block.text}
                </p>
              ) : (
                // The list is centred as a block while its items stay left-aligned,
                // so the bullets line up instead of stepping raggedly.
                <ul
                  key={i}
                  className="mx-auto flex w-fit max-w-full list-disc flex-col gap-3 pl-6 text-left"
                >
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-base leading-relaxed text-text-caption marker:text-purple-500 sm:text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            )}
          </Reveal>
        ))}
      </div>
    </article>
  );
}
