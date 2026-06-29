import { ButtonLink } from "./ButtonLink";

const serviceTags = [
  "Shopify clean-up",
  "Product SEO",
  "Online merchandising",
  "Agentic workflows",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-charcoal text-white"
    >
      <img
        src="/images/hero-background.webp"
        alt="Coastal workspace with laptop showing an online shop"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/78 to-charcoal/32"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/45"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/75 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[690px] max-w-7xl content-center px-4 py-24 sm:px-6 lg:min-h-[760px] lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-mist">
            Based on the southern Mornington Peninsula
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white md:text-7xl">
            Get your online shop working properly.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/92 md:text-xl">
            Shopify clean-ups, product page improvements, SEO fixes, online
            store structure, and practical eCommerce support for local
            businesses from Rosebud to Portsea.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
            Your products might already be strong. Your shop might already have
            local trust. But if the online side is messy, unclear, slow to
            manage, or hard to buy from, customers will drift before they
            enquire or purchase.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
            CarvemediA eCommerce helps local businesses clean up their online
            store, sharpen product presentation, improve search visibility, and
            make the digital side of the business easier to run.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {serviceTags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/82 shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" variant="light">
              Book a Store Check
            </ButtonLink>

            <ButtonLink
              href="#services"
              variant="secondary"
              className="border-white/35 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-charcoal"
            >
              See What I Fix
            </ButtonLink>
          </div>
        </div>

        <p className="mt-12 max-w-4xl border-l-2 border-sand pl-5 text-sm leading-7 text-white/76">
          For local retailers, makers, surf stores, trades, hospitality
          businesses and independent operators across the southern Mornington
          Peninsula.
        </p>
      </div>
    </section>
  );
}