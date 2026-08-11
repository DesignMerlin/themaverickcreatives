import { Reveal } from "@/components/ui/reveal";

/** Crops mirror the Figma frames; each portrait is cropped differently. */
type Member = {
  name: string;
  role: string;
  src: string;
  width?: string;
  height?: string;
  left?: string;
  top?: string;
};

const team: Member[] = [
  { name: "Peace Adesola", role: "Founder & CEO", src: "/images/team/m1.jpg", height: "130.81%", left: "-0.15%", top: "-0.14%" },
  { name: "Funso Ayodele", role: "Chief Operating Officer", src: "/images/team/m2.jpg", width: "103.06%", height: "134.54%", left: "1.16%", top: "-19.92%" },
  { name: "Oluwaseun Hassan", role: "Finance Manager", src: "/images/team/m3.png" },
  { name: "Samuel Ekwenze", role: "Training Manager", src: "/images/team/m4.jpg", height: "141.87%", left: "-0.11%", top: "-8.23%" },
  { name: "Biyayya Philemon", role: "Project Manager", src: "/images/team/m5.jpg", width: "114.52%", height: "151.71%", left: "-10.23%", top: "-18.96%" },
  { name: "Jumoke Adigun", role: "Community Manager", src: "/images/team/m6.jpg", width: "118.57%", height: "168.38%", left: "-15.32%", top: "-23.07%" },
  { name: "Isaac Edeme", role: "Creative Designer", src: "/images/team/m7.jpg", width: "118.41%", height: "168%", left: "0.31%", top: "-8.61%" },
  { name: "Damilola Olagun", role: "Content Creator", src: "/images/team/m8.jpg", height: "130.81%", left: "-0.04%", top: "-7.13%" },
  { name: "Naomi Benjamin", role: "Social Media", src: "/images/team/m9.jpg", width: "104.63%", height: "136.86%", left: "-0.04%", top: "-7.13%" },
  { name: "Olamide", role: "Procurement Officer", src: "/images/team/m10.jpg", width: "109.3%", height: "142.98%", left: "-0.04%", top: "-12.08%" },
];

function TeamMember({ member }: { member: Member }) {
  const cropped = Boolean(member.width || member.height);
  return (
    <div className="group flex flex-col gap-6">
      <div className="relative h-[296px] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.src}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className={
              cropped
                ? "absolute max-w-none object-cover"
                : "absolute inset-0 size-full object-cover object-bottom"
            }
            style={
              cropped
                ? {
                    width: member.width ?? "100%",
                    height: member.height ?? "100%",
                    left: member.left,
                    top: member.top,
                  }
                : undefined
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl leading-[30px] font-semibold text-white">{member.name}</p>
        <p className="font-ui text-lg leading-7 text-purple-500">{member.role}</p>
      </div>
    </div>
  );
}

export function Leadership() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-20 sm:px-8 lg:px-[120px] lg:pt-[162px]">
      <Reveal className="flex flex-col gap-3">
        <h2 className="font-heading text-4xl leading-none tracking-[-1.92px] text-white sm:text-6xl lg:text-[96px]">
          Our leadership
        </h2>
        <p className="max-w-[665px] text-lg leading-[1.2] tracking-[-0.48px] text-text-body sm:text-2xl">
          To be the company our customers want us to be, it takes an eclectic group of
          passionate operators. Get to know the people leading the way at Maverick
          Creatives.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-8 pt-16 lg:grid-cols-4 lg:pt-24">
        {team.slice(0, 8).map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 0.08}>
            <TeamMember member={member} />
          </Reveal>
        ))}
      </div>

      {/* Final two sit centred on their own row, as in the design. */}
      <div className="grid grid-cols-2 gap-8 pt-16 lg:mx-auto lg:w-[592px] lg:pt-16">
        {team.slice(8).map((member, i) => (
          <Reveal key={member.name} delay={i * 0.08}>
            <TeamMember member={member} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
