import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({ id, eyebrow, title, children, align = "left", tone = "dark" }: SectionHeadingProps) {
  const titleClass = tone === "light" ? "text-white" : "text-charcoal";
  const bodyClass = tone === "light" ? "text-white/80" : "text-ink/75";
  const eyebrowClass = tone === "light" ? "text-sand" : "";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 id={id} className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {children ? <div className={`mt-5 text-base leading-8 md:text-lg ${bodyClass}`}>{children}</div> : null}
    </div>
  );
}
