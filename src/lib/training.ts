/**
 * Mavbridge training tracks. Each track is one tab in the training section —
 * it supplies the tab label, the frame image, and the course outline.
 */
export type TrainingTrack = {
  slug: string;
  /** Tab label, and the accessible name of the matching panel. */
  title: string;
  description: string;
  image: string;
  /**
   * Figma lays a 20% black scrim over two of the six frames to bring their
   * brightness in line with the rest of the set.
   */
  dim?: boolean;
  /** Frames whose designed crop is anchored somewhere other than the centre. */
  objectPosition?: string;
  outline: string[];
};

export const trainingTracks: TrainingTrack[] = [
  {
    slug: "photography",
    title: "Photography",
    description:
      "Learn to see the world through a creative lens as you master the art of capturing powerful moments and telling compelling visual stories.",
    image: "/images/training/photography.jpg",
    dim: true,
    outline: [
      "Photography Fundamentals & Camera Basics",
      "Camera Settings, Exposure & Lighting",
      "Composition, Framing & Creative Techniques",
      "Lenses, Mobile Photography & Photo Editing",
      "Practical Shooting, Portfolio Building & Feedback",
      "Professional Development, Freelancing & Final Project",
    ],
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    description:
      "Learn to transform ideas into compelling visuals using color, typography, and design principles that communicate and inspire.",
    image: "/images/training/graphics-design.jpg",
    outline: [
      "Design Fundamentals & Creative Thinking",
      "Typography, Color Theory & Visual Communication",
      "Layouts, Responsive Design & Design Tools",
      "Marketing Design & Real-World Projects",
      "AI-Powered Design, Portfolio Development & Branding",
      "Freelancing, Client Management & Business Growth",
    ],
  },
  {
    slug: "videography",
    title: "Videography",
    description:
      "Learn to capture powerful stories through cinematic visuals, dynamic camera movement, and professional editing that inspire, and leave a lasting impact.",
    image: "/images/training/videography.jpg",
    outline: [
      "Videography Fundamentals, Camera Operation & Creative Composition",
      "Camera Settings, Lighting & Professional Audio Techniques",
      "Cinematic Filming, Storytelling & Production Workflows",
      "Video Editing, Color Grading & Post-Production",
      "Practical Projects, Portfolio Development & Career Readiness",
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    description:
      "Learn to create compelling content that captures attention, tells meaningful stories, and builds authentic connections across digital platforms.",
    image: "/images/training/content-creation.jpg",
    dim: true,
    outline: [
      "Content Creation Fundamentals, Audience Research & Brand Voice",
      "Storytelling, Creative Writing & Content Strategy",
      "Video Content Production, Scripting & Editing",
      "Social Media Marketing, Branding & Audience Growth",
      "Content Planning, Analytics & Creative Tools",
      "Monetization, Portfolio Development & Career Growth",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    description:
      "Learn to transform raw footage into compelling stories through professional editing, cinematic techniques, and creative storytelling.",
    image: "/images/training/video-editing.jpg",
    outline: [
      "Video Editing Fundamentals & Professional Workflows",
      "Timeline Editing, Audio Mixing & Storytelling",
      "Motion Graphics, Visual Effects & Creative Editing",
      "Color Correction, Color Grading & Post-Production",
      "Commercial, Social Media & Cinematic Video Editing",
      "Portfolio Development, Client Projects & Freelancing",
    ],
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    description:
      "Learn to transform static designs into motion graphics through animation, visual effects, and creative storytelling that engage audiences and elevate brands.",
    image: "/images/training/motion-design.jpg",
    objectPosition: "bottom",
    outline: [
      "Motion Design Fundamentals, Principles & Animation Basics",
      "Adobe After Effects, Keyframing & Motion Techniques",
      "Typography Animation, Shape Layers & Visual Effects",
      "Logo Animation, Motion Graphics & Brand Storytelling",
      "2D Animation, Social Media Content & Commercial Projects",
      "Portfolio Development, Client Projects & Freelancing",
    ],
  },
];
