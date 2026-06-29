const outcomes = [
  {
    number: "01",
    title: "Find the right product faster",
    copy: "Clear collections, cleaner product pages and better navigation help customers get where they need to go without friction.",
  },
  {
    number: "02",
    title: "Trust the business sooner",
    copy: "Better images, sharper descriptions and consistent store details make the business feel more reliable before the customer walks in or buys.",
  },
  {
    number: "03",
    title: "Understand the offer clearly",
    copy: "Strong product content explains what matters: size, fit, use, value, availability and why the product is worth choosing.",
  },
  {
    number: "04",
    title: "Buy or enquire with confidence",
    copy: "A cleaner online store removes doubt, answers the basic questions and makes the next step easier.",
  },
  {
    number: "05",
    title: "Stop drifting to competitors",
    copy: "If the online store feels neglected, customers keep searching. A sharper presence helps keep attention where it belongs.",
  },
];

export function WhyItMatters() {
  return (
    <section
      id="why-it-matters"
      className="section relative overflow-hidden bg-[#e8eff0]"
      aria-labelledby="why-heading"
    >
      <div
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sand/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-tide/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div>
          <p className="eyebrow text-tide">Why it matters</p>

          <h2
            id="why-heading"
            className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-6xl"
          >
            A cleaner online store makes the real shop stronger.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/72">
            For local businesses, the online store is often the first impression.
            Customers check products, prices, opening hours, availability,
            location, photos and trust signals before they walk through the door.
          </p>

          <div className="mt-8 rounded-3xl border border-charcoal/10 bg-charcoal p-6 text-foam shadow-[0_20px_50px_rgba(25,43,48,0.18)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
              The practical outcome
            </p>
            <p className="mt-4 text-xl font-semibold leading-8">
              Customers should understand what you sell, trust what they see,
              and know exactly what to do next.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {outcomes.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-3xl border border-charcoal/10 bg-paper p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/30 hover:bg-charcoal hover:shadow-xl"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-tide/70 via-mist to-sand/80"
                aria-hidden="true"
              />

              <div className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-tide/20 bg-gradient-to-br from-charcoal via-[#2f4449] to-tide text-xs font-bold tracking-[0.18em] text-foam shadow-[0_12px_24px_rgba(25,43,48,0.18)] transition group-hover:border-white/15">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold leading-7 text-charcoal transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal/68 transition group-hover:text-white/72">
                    {item.copy}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}