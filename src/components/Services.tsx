import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/config/content";

export default function Services() {
  return (
    <section
      id="layanan"
      className="bg-slate-50 py-20 dark:bg-ink-900 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Keunggulan"
          title="Layanan Kami"
          description="Setiap proyek yang kami tangani bukan hanya tentang membangun website, tetapi menciptakan solusi yang berdampak nyata bagi bisnis Anda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100 dark:border-white/10 dark:bg-ink-800 dark:hover:border-brand-500/40 dark:hover:shadow-brand-950/50">
                {/* Glow halus saat hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/10" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
                  <Icon name={service.icon as IconName} size={26} />
                </div>
                <h3 className="relative mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
