import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pricing } from "@/config/content";
import { whatsappLink } from "@/config/site";

export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-20 dark:bg-ink-800 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Paket Harga"
          title="Pilih Paket yang Sesuai"
          description="Harga transparan tanpa biaya tersembunyi. Setiap paket dapat disesuaikan dengan kebutuhan bisnis Anda."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-brand-500/50 bg-gradient-to-b from-brand-900 to-brand-950 shadow-2xl shadow-brand-600/30 lg:-translate-y-4"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl dark:border-white/10 dark:bg-ink-900 dark:hover:border-brand-500/40"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-sky-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    Paling Populer
                  </span>
                )}

                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted
                      ? "text-brand-200"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-5 flex items-end gap-1">
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-sm font-medium ${
                        plan.highlighted
                          ? "text-brand-200"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      Rp
                    </span>
                  )}
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlighted ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-sm ${
                      plan.highlighted
                        ? "text-brand-200"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted
                            ? "bg-brand-500 text-white"
                            : "bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300"
                        }`}
                      >
                        <Icon name="check" size={12} />
                      </span>
                      <span
                        className={`text-sm ${
                          plan.highlighted
                            ? "text-brand-100"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Halo, saya tertarik dengan paket ${plan.name}. Boleh info lebih lanjut?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-white text-brand-700 hover:-translate-y-0.5"
                      : "bg-brand-600 text-white hover:bg-brand-700"
                  }`}
                >
                  Pilih Paket
                  <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          *Harga dapat disesuaikan dengan kebutuhan. Hubungi kami untuk penawaran
          khusus.
        </p>
      </div>
    </section>
  );
}
