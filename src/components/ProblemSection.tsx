import { problems } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ProblemSection() {
  return (
    <section className="section bg-foam" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="problem-heading"
          title="Your online shop should not be working against you."
        >
          <p>
            Most local businesses do not need a massive agency. They need
            someone who can look at the store, spot the problems, clean up the
            structure, and make the online presence stronger without
            overcomplicating it.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem}
              className="group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-paper p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/30 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tide/50 via-mist/70 to-sand/60" />

              <div className="flex items-start gap-5">
                <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-tide/20 bg-gradient-to-br from-charcoal via-[#2f4449] to-tide text-xs font-bold tracking-[0.18em] text-foam shadow-[0_12px_24px_rgba(25,43,48,0.18)]">
                  <span className="absolute inset-[3px] rounded-[14px] border border-white/10" />
                  <span className="absolute -right-4 -top-4 size-10 rounded-full bg-white/10 blur-sm" />
                  <span className="relative">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>

                <h3 className="pt-1.5 text-lg font-semibold leading-7 text-charcoal">
                  {problem}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}