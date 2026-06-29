const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const serviceAreas = [
  "Rosebud",
  "Capel Sound",
  "Tootgarook",
  "Rye",
  "Blairgowrie",
  "Sorrento",
  "Portsea",
];

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white">
      <div
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-tide/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr_0.45fr] lg:items-start">
          <div>
            <a href="#top" className="inline-flex items-center">
              <img
                src="/images/CMCee.png"
                alt="CarvemediA eCommerce"
                className="h-12 w-auto"
              />
            </a>

            <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-white">
              eCommerce · Local online store support
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
              Local Shopify, eCommerce, product SEO, agentic workflow and online
              store support for businesses across the southern Mornington
              Peninsula.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-mist"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
              Quick links
            </p>

            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-white/72 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
              Contact
            </p>

            <div className="mt-5 grid gap-4 text-base leading-7">
              <a
                href="mailto:hello@carvemedia.com.au"
                className="text-white/72 transition hover:text-white"
              >
                hello@carvemedia.com.au
              </a>

              <a
                href="tel:0459879211"
                className="text-white/72 transition hover:text-white"
              >
                0459 879 211
              </a>

              <p className="text-white/60">
                Blairgowrie / Southern Mornington Peninsula
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CarvemediA eCommerce. All rights
            reserved.
          </p>

          <p>Built for local businesses that want the online side cleaned up.</p>
        </div>
      </div>
    </footer>
  );
}