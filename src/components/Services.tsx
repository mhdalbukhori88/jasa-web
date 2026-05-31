import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/config/content";

export default function Services() {
  return (
    <section id="layanan" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Keunggulan"
          title="Layanan Kami"
          description="Setiap proyek yang kami tangani bukan hanya tentang membangun website, tetapi menciptakan solusi yang berdampak nyata bagi bisnis Anda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={service.icon as IconName} size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
