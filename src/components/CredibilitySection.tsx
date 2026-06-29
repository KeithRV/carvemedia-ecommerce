const experiencePoints = [
  {
    label: "Shopify systems",
    title: "Product, collection and store structure",
    copy: "Hands-on experience cleaning up Shopify products, collections, menus, product data, metafields, images and front-end presentation.",
  },
  {
    label: "Search visibility",
    title: "SEO and product content writing",
    copy: "Practical product SEO, collection copy, image alt text, meta descriptions and search-friendly wording that helps customers understand what they are buying.",
  },
  {
    label: "Retail workflow",
    title: "Real eCommerce and shop-floor understanding",
    copy: "Experience across retail, product uploads, online merchandising, customer flow, POS thinking, marketplace setup and the reality of running a local store.",
  },
  {
    label: "Agentic workflows",
    title: "AI-assisted setup and optimisation",
    copy: "Support with practical AI workflows for product uploads, SEO tasks, content planning, admin processes, Shopify support and repeatable online store operations.",
  },
];

export function CredibilitySection() {
  return (
    <section
      className="section relative overflow-hidden bg-charcoal text-white"
      aria-labelledby="credibility-heading"
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
        <div className="max-w-3xl">
          <p className="eyebrow text-mist">Experience</p>

          <h2
            id="credibility-heading"
            className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Hands-on eCommerce experience, not theory.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/75">
            This service is built from real-world work across Shopify stores,
            retail products, surf and lifestyle businesses, product uploads, SEO
            packages, collection structures, image naming, alt text, eBay
            integration, online merchandising and content presentation.
          </p>

          <p className="mt-5 text-lg leading-8 text-white/70">
            The focus is simple: make the store clearer, cleaner, easier to
            manage and more likely to convert.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experiencePoints.map((item, index) => (
              <article
                key={item.title}
                className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-charcoal/55 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-mist/40 hover:bg-white/10 hover:shadow-xl"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-mist/80 via-sand/70 to-tide/70"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-mist">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold tracking-[0.22em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-semibold leading-7 text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
            Built for practical outcomes
          </p>

          <p className="mt-4 text-xl font-semibold leading-8 text-white">
            Better product pages. Cleaner structure. Stronger search signals.
            Less online mess.
          </p>
        </div>
      </div>
    </section>
  );
}