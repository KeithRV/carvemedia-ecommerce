import { ButtonLink } from "./ButtonLink";

const ctaPoints = [
  "Quick store review",
  "Priority fixes list",
  "Clear next steps",
];

export function CTASection() {
  return (
    <section
      className="section relative overflow-hidden bg-charcoal text-white"
      aria-labelledby="cta-heading"
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
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.42fr] lg:items-center lg:p-12">
            <div>
              <p className="eyebrow text-mist">First step</p>

              <h2
                id="cta-heading"
                className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Want to know what is holding your online shop back?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Book a store check and get a clear, practical view of what needs
                fixing first. No pressure, no agency waffle — just a proper look
                at what can be improved.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {ctaPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-mist"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-charcoal/55 p-6 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
                Start simple
              </p>

              <p className="mt-4 text-xl font-semibold leading-8 text-white">
                Send the store link. I’ll look at the online side and show you
                where the first improvements are.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <ButtonLink href="#contact" variant="light" className="justify-center">
                  Book a Store Check
                </ButtonLink>

                <ButtonLink
                  href="#packages"
                  variant="secondary"
                  className="justify-center border-white/20 bg-white/10 text-white hover:bg-white hover:text-charcoal"
                >
                  View Packages
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.04] px-8 py-5 sm:px-10 lg:px-12">
            <p className="text-sm leading-7 text-white/65">
              Built for local businesses that need practical Shopify,
              eCommerce, product SEO, agentic workflow and online store support
              across the southern Mornington Peninsula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}