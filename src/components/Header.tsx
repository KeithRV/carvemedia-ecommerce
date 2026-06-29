import { useState } from "react";
import { navItems } from "../data/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-foam/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center">
          <img
            src="/images/darkPackmanCM.png"
            alt="CarvemediA eCommerce"
            className="h-12 w-auto"
          />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-charcoal/70 transition hover:text-charcoal"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-tide transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-2xl border border-charcoal bg-charcoal px-6 py-3 text-sm font-bold text-foam shadow-[0_12px_24px_rgba(25,43,48,0.16)] transition hover:-translate-y-0.5 hover:bg-tide hover:shadow-lg"
          >
            Book a Store Check
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-charcoal/10 bg-paper px-4 py-3 text-sm font-bold text-charcoal lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-charcoal/10 bg-foam px-4 pb-5 pt-2 lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal/75 transition hover:bg-paper hover:text-charcoal"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-charcoal px-4 py-3 text-center text-sm font-bold text-foam"
            >
              Book a Store Check
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}