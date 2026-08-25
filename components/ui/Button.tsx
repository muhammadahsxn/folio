import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#373332] text-[#FDFAF5] hover:-translate-y-0.5"
      : "border border-[#373332]/15 text-[#373332] hover:bg-[#373332]/5";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${styles}`}
    >
      {children}
    </Link>
  );
}