/**
 * Project detail content. Gallery crops mirror the Figma frames exactly — each
 * cell positions its source image absolutely rather than relying on object-cover,
 * because the designed crops are off-centre. `flip` reproduces Figma's
 * rotate(180deg) + scaleY(-1) pairing, which is a horizontal mirror.
 */
export type GalleryCell = {
  src: string;
  /** Width of the image relative to the cell, e.g. "157.46%". Omit for a plain cover fit. */
  width?: string;
  height?: string;
  left?: string;
  top?: string;
  flip?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  /** Title as it appears on the portfolio index card. */
  cardTitle: string;
  year: string;
  cardImage: string;
  description: string;
  tags: string[];
  video: string;
  gallery: GalleryCell[];
};

const SHARED_DESCRIPTION =
  "Every detail was captured with intention, from video coverage and photography to full recordings and a curated highlight. Behind the scenes, the right audio team ensured a seamless experience throughout. At Maverick Creatives, moments are captured with purpose and transformed into lasting stories.";

const TAGS = ["Event Management", "Branding"];

export const projects: Project[] = [
  {
    slug: "rewriting-limits",
    title: "Rewriting Limits",
    cardTitle: "Rewriting Limits",
    year: "©2024",
    cardImage: "/images/portfolio-rewriting-limits.jpg",
    description:
      "Rewriting Limits was built from the ground up, with full creative and operational direction guiding every stage, from strategy to final execution. From shaping the vision and story to designing the event identity, visuals, and immersive environment, every detail was crafted to create a meaningful experience. At Maverick Creatives, ideas aren’t just executed, they’re transformed into impactful, living experiences.",
    tags: TAGS,
    video: "/videos/highlight-1.mp4",
    gallery: [
      { src: "/images/projects/rewriting-limits/g1.jpg" },
      { src: "/images/projects/rewriting-limits/g2.jpg", width: "157.46%", left: "-30.7%", top: "0.02%" },
      { src: "/images/projects/rewriting-limits/g3.jpg", width: "168.5%", height: "105.31%", left: "-42.83%", top: "-2.66%" },
      { src: "/images/projects/rewriting-limits/g4.jpg", width: "113.57%", height: "104.9%", left: "-13.57%", top: "-0.04%" },
      { src: "/images/projects/rewriting-limits/g5.jpg", width: "112.03%", left: "-12.09%", top: "0%" },
      { src: "/images/projects/rewriting-limits/g6.jpg", width: "160.02%", left: "-29.85%", top: "0%", flip: true },
      { src: "/images/projects/rewriting-limits/g7.jpg", width: "159.99%", left: "-20.15%", top: "-0.04%", flip: true },
      { src: "/images/projects/rewriting-limits/g8.jpg", width: "112.01%", left: "-5.87%", top: "0.06%" },
    ],
  },
  {
    slug: "immigify",
    title: "Immigify Inc.",
    cardTitle: "Immigify",
    year: "©2025",
    cardImage: "/images/portfolio-immigify.jpg",
    description: SHARED_DESCRIPTION,
    tags: TAGS,
    video: "/videos/highlight-2.mp4",
    gallery: [
      { src: "/images/projects/immigify/g1.jpg" },
      { src: "/images/projects/immigify/g2.jpg" },
      { src: "/images/projects/immigify/g3.jpg", flip: true },
      { src: "/images/projects/immigify/g4.jpg" },
      { src: "/images/projects/immigify/g5.jpg" },
      { src: "/images/projects/immigify/g6.jpg", flip: true },
      { src: "/images/projects/immigify/g7.jpg", width: "133.57%", left: "-6.59%", top: "0.06%" },
      { src: "/images/projects/immigify/g8.jpg" },
    ],
  },
  {
    slug: "tunes-and-thrills",
    title: "Tunes & Thrills",
    cardTitle: "Tunes & Thrills",
    year: "©2024",
    cardImage: "/images/portfolio-tunes-thrills.jpg",
    description: SHARED_DESCRIPTION,
    tags: TAGS,
    video: "/videos/highlight-3.mp4",
    gallery: [
      { src: "/images/projects/tunes-and-thrills/g1.jpg" },
      { src: "/images/projects/tunes-and-thrills/g2.jpg", width: "160.27%", left: "-11.49%", top: "4.03%" },
      { src: "/images/projects/tunes-and-thrills/g3.jpg", flip: true },
      { src: "/images/projects/tunes-and-thrills/g4.jpg" },
      { src: "/images/projects/tunes-and-thrills/g5.jpg", width: "144.1%", height: "118.87%", left: "-18.66%", top: "-9.45%" },
      { src: "/images/projects/tunes-and-thrills/g6.jpg", width: "203.61%", height: "127.04%", left: "-62.95%", top: "-5.67%" },
      { src: "/images/projects/tunes-and-thrills/g7.jpg", width: "133.57%", left: "-16.68%", top: "0.08%" },
      { src: "/images/projects/tunes-and-thrills/g8.jpg", width: "138.85%", height: "123.74%", left: "-1.99%", top: "-0.52%" },
    ],
  },
  {
    slug: "beyond-convention",
    title: "Beyond Convention",
    cardTitle: "Beyond Convention",
    year: "©2025",
    cardImage: "/images/portfolio-beyond-convention.jpg",
    description: SHARED_DESCRIPTION,
    tags: TAGS,
    video: "/videos/highlight-4.mp4",
    gallery: [
      { src: "/images/projects/beyond-convention/g1.jpg" },
      { src: "/images/projects/beyond-convention/g2.jpg", width: "116.42%", height: "136.18%", left: "-11.72%", top: "-26.59%" },
      { src: "/images/projects/beyond-convention/g3.jpg", flip: true },
      { src: "/images/projects/beyond-convention/g4.jpg" },
      { src: "/images/projects/beyond-convention/g5.jpg", width: "144.1%", height: "118.87%", left: "-7.09%", top: "-9.34%" },
      { src: "/images/projects/beyond-convention/g6.jpg", width: "160.81%", height: "100.34%", left: "-32.72%", top: "3.12%" },
      { src: "/images/projects/beyond-convention/g7.jpg", width: "114.37%", height: "133.78%", left: "-11.62%", top: "-24.72%", flip: true },
      { src: "/images/projects/beyond-convention/g8.jpg", width: "112.79%", height: "100.52%", left: "-1.99%", top: "-0.52%" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
