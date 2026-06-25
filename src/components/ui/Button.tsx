import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: {
  variant?: ButtonVariant;
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  const styles =
    variant === "primary"
      ? "bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
      : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

