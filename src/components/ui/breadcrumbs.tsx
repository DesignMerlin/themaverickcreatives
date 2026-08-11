import Link from "next/link";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-4 py-2.5 text-sm font-medium">
      <Link
        href="/portfolio"
        className="text-text-body transition-colors duration-300 hover:text-white"
      >
        Our Projects
      </Link>
      <span aria-hidden className="w-4 text-center text-text-disable">
        /
      </span>
      <span aria-current="page" className="text-purple-500">
        {current}
      </span>
    </nav>
  );
}
