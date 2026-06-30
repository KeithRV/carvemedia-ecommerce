import { packages } from "../data/content";
import { OngoingDigitalManagementCard } from "./OngoingDigitalManagementCard";
import { SectionHeading } from "./SectionHeading";

export function PackagesSection() {
  return (
    <section
      id="packages"
      className="section relative overflow-hidden bg-foam"
      aria-labelledby="packages-heading"
    >
      <div
        className="absolute left-0 top-20 h-80 w-80 rounded-full bg-sand/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-tide/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="packages-heading"
          eyebrow="Packages"
          title="Simple service options"
        >
          <p>
            Start with a clear store check, move into practical fixes, or give
            the online side of the business a proper local eCommerce lift.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => {
            const featured = index === 1;

            return (
              <article
                key={item.name}
                className={`relative overflow-hidden rounded-3xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  featured
                    ? "border-charcoal bg-charcoal text-foam"
                    : "border-charcoal/10 bg-paper text-charcoal"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                    featured
                      ? "from-mist via-sand to-tide"
                      : "from-tide/60 via-mist/80 to-sand/70"
                  }`}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.22em] ${
                      featured ? "text-mist" : "text-tide"
                    }`}
                  >
                    {index === 0
                      ? "First step"
                      : index === 1
                        ? "Most practical"
                        : "Full lift"}
                  </p>

                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-2xl border text-xs font-bold tracking-[0.18em] ${
                      featured
                        ? "border-white/15 bg-white/10 text-foam"
                        : "border-tide/20 bg-foam text-tide"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={`mt-8 text-sm leading-7 ${
                    featured ? "text-white/72" : "text-charcoal/65"
                  }`}
                >
                  {item.bestFor}
                </p>

                <h3 className="mt-5 text-2xl font-semibold leading-8">
                  {item.name}
                </h3>

                <p className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
                  {item.price}
                </p>

                <ul className="mt-8 space-y-4">
                  {item.includes.map((include) => (
                    <li
                      key={include}
                      className={`flex gap-3 text-sm leading-6 ${
                        featured ? "text-white/78" : "text-charcoal/70"
                      }`}
                    >
                      <span
                        className={`mt-2 h-px w-4 shrink-0 ${
                          featured ? "bg-mist" : "bg-tide"
                        }`}
                        aria-hidden="true"
                      />

                      <span>{include}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center rounded-none border px-5 py-3 text-sm font-semibold transition duration-300 ${
                      featured
                        ? "border-white bg-white text-charcoal hover:bg-foam"
                        : "border-charcoal/10 bg-charcoal text-white hover:bg-tide"
                    }`}
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <OngoingDigitalManagementCard />

        <div className="mt-8 max-w-3xl rounded-3xl border border-charcoal/10 bg-paper p-6 text-base leading-8 text-charcoal/70 shadow-sm">
          Custom support is available for businesses that need ongoing product
          uploads, Shopify maintenance, marketplace help, content creation,
          social media support, YouTube updates, SEO improvements, or practical
          digital workflow management.
        </div>
      </div>
    </section>
  );
}