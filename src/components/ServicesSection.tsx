import { services } from "../data/content";
import { ButtonLink } from "./ButtonLink";
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
  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-foam"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-tide/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-sand/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="What I can help with"
          >
            <p>
              Practical Shopify, product, SEO and online store support for local
              businesses that need the digital side cleaned up, sharpened and
              easier to manage.
            </p>
          </SectionHeading>

          <div className="shrink-0">
            <ButtonLink href="#contact" variant="dark">
              Start a Clean-Up
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-charcoal/10 bg-paper p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/30 hover:bg-charcoal hover:shadow-xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tide/60 via-mist/80 to-sand/70"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-tide/20 bg-foam px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-tide transition group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-mist">
                  {serviceLabels[index]}
                </span>

                <span className="text-sm font-bold tracking-[0.22em] text-charcoal/25 transition group-hover:text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="max-w-xs text-xl font-semibold leading-7 text-charcoal transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-charcoal/68 transition group-hover:text-white/72">
                  {service.description}
                </p>
              </div>

              <div
                className="absolute bottom-5 right-5 size-10 rounded-full border border-charcoal/10 bg-foam/80 transition group-hover:border-white/15 group-hover:bg-white/10"
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-tide transition group-hover:bg-mist" />
                <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-tide transition group-hover:bg-mist" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}