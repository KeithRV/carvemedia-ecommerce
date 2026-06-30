import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  businessName: string;
  location: string;
  website: string;
  message: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  name: "",
  businessName: "",
  location: "",
  website: "",
  message: "",
  email: "",
  phone: "",
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-charcoal/10 bg-foam px-4 py-4 text-base text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-tide focus:bg-white focus:ring-4 focus:ring-tide/10";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.name ||
      !form.businessName ||
      !form.location ||
      !form.message ||
      !form.email
    ) {
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-foam"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sand/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-tide/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
        <div>
          <p className="eyebrow text-tide">Contact</p>

          <h2
            id="contact-heading"
            className="mt-4 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-6xl"
          >
            Get your online shop working properly.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/72">
            You already run the business. I’ll help get the online side cleaner,
            clearer and easier to manage.
          </p>

          <div className="mt-8 rounded-3xl border border-charcoal/10 bg-charcoal p-6 text-white shadow-[0_20px_50px_rgba(25,43,48,0.18)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-mist">
              Store check
            </p>

            <p className="mt-4 text-xl font-semibold leading-8">
              Send through your store link and what feels messy. I’ll come back
              with practical next steps.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl border border-charcoal/10 bg-paper p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tide">
                Email
              </p>
              <a
                href="mailto:ecomm@carvemedia.com.au"
                className="mt-2 block text-lg font-semibold text-charcoal transition hover:text-tide"
              >
                ecomm@carvemedia.com.au
              </a>
            </div>

            <div className="rounded-3xl border border-charcoal/10 bg-paper p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tide">
                Phone
              </p>
              <a
                href="tel:0459879211"
                className="mt-2 block text-lg font-semibold text-charcoal transition hover:text-tide"
              >
                0459 879 211
              </a>
            </div>

            <div className="rounded-3xl border border-charcoal/10 bg-paper p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tide">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold text-charcoal">
                Blairgowrie / Southern Mornington Peninsula
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-charcoal/10 bg-paper p-6 shadow-[0_28px_80px_rgba(25,43,48,0.12)] sm:p-8">
          {submitted ? (
            <div className="rounded-3xl border border-tide/20 bg-foam p-8">
              <p className="eyebrow text-tide">Enquiry received</p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-charcoal">
                Thanks — your enquiry has been received.
              </h3>

              <p className="mt-4 text-lg leading-8 text-charcoal/70">
                I’ll get back to you shortly with the next step.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-2xl bg-charcoal px-6 py-4 text-sm font-bold text-white transition hover:bg-tide"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-charcoal">
                  Name <span className="text-tide">*</span>
                  <input
                    className={fieldClass}
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                  />
                </label>

                <label className="block text-sm font-bold text-charcoal">
                  Business name <span className="text-tide">*</span>
                  <input
                    className={fieldClass}
                    value={form.businessName}
                    onChange={(event) =>
                      updateField("businessName", event.target.value)
                    }
                    required
                  />
                </label>

                <label className="block text-sm font-bold text-charcoal">
                  Location <span className="text-tide">*</span>
                  <input
                    className={fieldClass}
                    placeholder="Rye, Rosebud, Sorrento..."
                    value={form.location}
                    onChange={(event) =>
                      updateField("location", event.target.value)
                    }
                    required
                  />
                </label>

                <label className="block text-sm font-bold text-charcoal">
                  Website / Shopify store URL
                  <input
                    className={fieldClass}
                    placeholder="https://"
                    value={form.website}
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-bold text-charcoal">
                What do you need help with?{" "}
                <span className="text-tide">*</span>
                <textarea
                  className={`${fieldClass} min-h-40 resize-y`}
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  required
                />
              </label>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-charcoal">
                  Email <span className="text-tide">*</span>
                  <input
                    type="email"
                    className={fieldClass}
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    required
                  />
                </label>

                <label className="block text-sm font-bold text-charcoal">
                  Phone
                  <input
                    className={fieldClass}
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                  />
                </label>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="rounded-2xl bg-charcoal px-7 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(25,43,48,0.16)] transition hover:-translate-y-0.5 hover:bg-tide hover:shadow-lg"
                >
                  Send Enquiry
                </button>

                <p className="text-sm leading-6 text-charcoal/55">
                  Required fields are marked with an asterisk.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}