import { useState } from "react";
import { services } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const serviceLabels = [
  "Store structure",
  "Product clarity",
  "Search visibility",
  "Browse + buy",
  "Visual content",
  "Staff handover",
  "Marketplace flow",
  "Local trust",
  "AI workflows",
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(
    null,
  );

  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-foam py-24"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute left-0 top-20 h-80 w-80 rounded-full bg-sand/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-tide/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="What I can help with"
            >
              <p>
                Practical Shopify, product, SEO and online store support for
                local businesses that need the digital side cleaned up,
                sharpened and easier to manage.
              </p>
            </SectionHeading>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
            >
              Start a Clean-Up
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const detailId = `service-detail-${index}`;
            const canExpand = Boolean(
              service.detailIntro &&
                service.includes?.length &&
                service.outcome &&
                service.ctaLabel,
            );
            const isExpanded = expandedService === detailId;
            const eyebrow = service.eyebrow ?? serviceLabels[index];
            const number =
              service.number ?? String(index + 1).padStart(2, "0");

            return (
              <article
                key={service.title}
                className={[
                  "group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2rem] border p-6 pb-20 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-tide/30 hover:bg-charcoal hover:shadow-xl",
                  isExpanded
                    ? "border-tide/30 bg-charcoal shadow-xl"
                    : "border-charcoal/10 bg-white/80",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "rounded-full border px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] transition group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-mist",
                      isExpanded
                        ? "border-white/15 bg-white/10 text-mist"
                        : "border-tide/20 bg-foam text-tide",
                    ].join(" ")}
                  >
                    {eyebrow}
                  </span>

                  <span
                    className={[
                      "text-sm font-bold tracking-[0.22em] transition group-hover:text-white/30",
                      isExpanded ? "text-white/35" : "text-charcoal/25",
                    ].join(" ")}
                  >
                    {number}
                  </span>
                </div>

                <div className="mt-10">
                  <h3
                    className={[
                      "max-w-xs text-xl font-semibold leading-7 transition group-hover:text-white",
                      isExpanded ? "text-white" : "text-charcoal",
                    ].join(" ")}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={[
                      "mt-5 text-base leading-8 transition group-hover:text-foam/90",
                      isExpanded ? "text-foam/90" : "text-charcoal/68",
                    ].join(" ")}
                  >
                    {service.description}
                  </p>
                </div>

                {canExpand && isExpanded ? (
                  <div
                    id={detailId}
                    className="mt-7 space-y-6 border-t border-foam/[0.15] pt-6 text-sm leading-7 text-foam/[0.88]"
                  >
                    <p className="text-foam/[0.88]">{service.detailIntro}</p>

                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand">
                        What this can include
                      </p>
                      <ul className="mt-3 space-y-2 text-foam/[0.88]">
                        {service.includes?.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-[0.78rem] h-px w-4 shrink-0 bg-sand/80"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand">
                        Outcome
                      </p>
                      <p className="mt-2 text-foam/[0.88]">
                        {service.outcome}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex rounded-full border border-white/15 bg-foam px-4 py-2 text-sm font-bold text-charcoal transition hover:bg-mist focus:outline-none focus:ring-2 focus:ring-mist/50"
                    >
                      {service.ctaLabel}
                    </a>
                  </div>
                ) : null}

                {canExpand ? (
                  <button
                    type="button"
                    className={[
                      "absolute bottom-5 right-5 size-10 rounded-full border transition duration-300 focus:outline-none focus:ring-2 focus:ring-tide/45 group-hover:border-white/15 group-hover:bg-white/10",
                      isExpanded
                        ? "rotate-45 border-white/15 bg-white/10"
                        : "border-charcoal/10 bg-foam/80",
                    ].join(" ")}
                    aria-controls={detailId}
                    aria-expanded={isExpanded}
                    aria-label={`${
                      isExpanded ? "Hide" : "Show"
                    } details for ${service.title}`}
                    onClick={() =>
                      setExpandedService(isExpanded ? null : detailId)
                    }
                  >
                    <span
                      className={[
                        "absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 transition group-hover:bg-mist",
                        isExpanded ? "bg-mist" : "bg-tide",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    <span
                      className={[
                        "absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 transition group-hover:bg-mist",
                        isExpanded ? "bg-mist" : "bg-tide",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
