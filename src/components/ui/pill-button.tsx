import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline-dark" | "outline-light";
  showArrow?: boolean;
  className?: string;
};

const variantClasses: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  filled:
    "bg-purple-500 text-white hover:bg-purple-900 active:scale-[0.97]",
  "outline-dark":
    "border border-[#232323] text-[#c9c8c8] hover:border-warm-300 hover:text-white",
  "outline-light":
    "border-[1.5px] border-warm-300 text-white hover:bg-white hover:text-warm-900",
};

export function PillButton({
  href,
  children,
  variant = "filled",
  showArrow = false,
  className = "",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ${variantClasses[variant]} ${className}`}
    >
      <span className="px-2">{children}</span>
      {showArrow && (
        <span className="relative size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/button-icon-arrow.svg" alt="" className="size-full object-contain" />
        </span>
      )}
    </Link>
  );
}
