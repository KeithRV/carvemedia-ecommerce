import { ButtonLink } from "./ButtonLink";

const localAreas = [
  {
    name: "Rosebud",
    copy: "Retailers, service businesses and local operators looking to sharpen their online shop, product pages and search visibility.",
  },
  {
    name: "Capel Sound",
    copy: "Practical eCommerce support for small businesses that need cleaner product presentation, better structure and easier online management.",
  },
  {
    name: "Tootgarook",
    copy: "Online store clean-ups, Shopify fixes and product SEO for independent businesses building stronger local visibility.",
  },
  {
    name: "Rye",
    copy: "Hands-on Shopify, product upload, SEO and online merchandising support for local shops, trades and coastal businesses.",
  },
  {
    name: "Blairgowrie",
    copy: "Premium online presence support for local retailers, makers and service businesses that need a cleaner digital front door.",
  },
  {
    name: "Sorrento",
    copy: "eCommerce clean-ups, product presentation and digital trust improvements for established local businesses and boutique operators.",
  },
  {
    name: "Portsea",
    copy: "Sharp, practical online store support for premium local businesses that need their digital presence to match their real-world reputation.",
  },
  {
    name: "Mornington Peninsula",
    copy: "Broader Shopify, eCommerce, agentic workflow and online optimisation support across the southern Peninsula.",
  },
];

export function LocalAreaSection() {
  return (
    <section
      id="local-area"
      className="section relative overflow-hidden bg-charcoal text-white"
      aria-labelledby="local-area-heading"
    >
      <div
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-tide/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-mist">Local area</p>

            <h2
              id="local-area-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              Built for local businesses from Rosebud to Portsea.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              <strong className="font-semibold text-white">
                Carv'eCommerce
              </strong>{" "}
              works with local businesses across Rosebud, Capel Sound,
              Tootgarook, Rye, Blairgowrie, Sorrento, Portsea and the broader
              Mornington Peninsula.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              This is practical local help for businesses that want the online
              side cleaned up properly — not a distant agency selling
              complicated retainers.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
              Southern Peninsula focus
            </p>

            <p className="mt-4 text-xl font-semibold leading-8 text-white">
              Local retailers, makers, surf stores, trades, hospitality
              businesses and independent operators.
            </p>

            <div className="mt-7">
              <ButtonLink href="#contact" variant="light">
                Book a Store Check
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localAreas.map((area, index) => (
            <article
              key={area.name}
              className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-mist/40 hover:bg-white/10 hover:shadow-xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-mist/80 via-sand/70 to-tide/70"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {area.name}
                </h3>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.64rem] font-bold tracking-[0.18em] text-mist">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {area.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}