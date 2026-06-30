const monthlyPlans = [
  {
    label: "Starter",
    badge: "04A",
    name: "Starter Support",
    price: "From $650 / month",
    bestFor:
      "Best for light monthly updates, small content jobs, product changes and practical website support.",
    includes: [
      "Monthly Shopify or website updates",
      "Product and collection changes",
      "Basic content creation for socials",
      "Website copy and content refinements",
      "Basic SEO and image alt text maintenance",
      "Monthly priority task list",
    ],
  },
  {
    label: "Growth",
    badge: "04B",
    name: "Growth Support",
    price: "From $950 / month",
    bestFor:
      "Best for businesses that need regular store updates, content creation, SEO support and digital improvements.",
    includes: [
      "More regular website and store updates",
      "Product, collection and content improvements",
      "Social media content creation support",
      "Website and landing page content updates",
      "SEO title and meta improvements",
      "Marketplace and workflow support",
      "Simple monthly recommendations",
    ],
  },
  {
    label: "Managed",
    badge: "04C",
    name: "Managed Digital Support",
    price: "From $1,250+ / month",
    bestFor:
      "Best for businesses wanting deeper ongoing support across their website, store, socials, YouTube and content direction.",
    includes: [
      "Ongoing Shopify or website management",
      "Content creation for socials and website",
      "YouTube or video content support",
      "Landing page and campaign updates",
      "Store structure and SEO improvements",
      "Marketplace and digital workflow support",
      "Monthly reporting and digital direction",
    ],
  },
];

export function OngoingDigitalManagementCard() {
  return (
    <article className="relative mt-8 overflow-hidden rounded-3xl border border-charcoal/10 bg-paper p-7 text-charcoal shadow-sm">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tide/60 via-mist/80 to-sand/70"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-tide">
            Ongoing Support
          </p>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em]">
            Ongoing Digital Management
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-charcoal/65">
            Flexible monthly support for local businesses that need practical
            help managing their store, website, social content, YouTube updates
            and wider digital requirements.
          </p>
        </div>

        <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-tide/20 bg-foam text-xs font-bold tracking-[0.18em] text-tide">
          04
        </span>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {monthlyPlans.map((plan, index) => {
          const featured = index === 1;

          return (
            <article
              key={plan.name}
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
                  {plan.label}
                </p>

                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-2xl border text-[10px] font-bold tracking-[0.12em] ${
                    featured
                      ? "border-white/15 bg-white/10 text-foam"
                      : "border-tide/20 bg-foam text-tide"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <p
                className={`mt-8 text-sm leading-7 ${
                  featured ? "text-white/72" : "text-charcoal/65"
                }`}
              >
                {plan.bestFor}
              </p>

              <h4 className="mt-5 text-2xl font-semibold leading-8">
                {plan.name}
              </h4>

              <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-sand">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.includes.map((include) => (
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
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-charcoal/10 bg-foam p-6 text-sm leading-7 text-charcoal/70 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl">
          Monthly scope is agreed before work begins. Each plan includes content
          creation support, with extra work quoted separately when needed.
        </p>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center border border-charcoal/10 bg-charcoal px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-tide"
        >
          Build My Monthly Plan
        </a>
      </div>
    </article>
  );
}