import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const variants = {
    primary: "border-charcoal bg-charcoal text-white hover:bg-tide hover:border-tide",
    secondary: "border-charcoal/25 bg-paper/80 text-charcoal hover:border-charcoal hover:bg-paper",
    light: "border-white bg-white text-charcoal hover:bg-mist hover:border-mist",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
