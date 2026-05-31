import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { process } from "@/config/content";
import { whatsappLink } from "@/config/site";

export default function Process() {
  return (
    <section id="proses" className="bg-slate-50 py-20 dark:bg-ink-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Proses Terarah untuk Hasil Optimal"
          description="Website yang luar biasa lahir dari proses yang tepat. Inilah langkah kami menciptakan website yang bukan hanya indah, tapi juga efektif untuk bisnis Anda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-100 dark:border-white/10 dark:bg-ink-800 dark:hover:shadow-brand-950/50">
                <span className="absolute -right-2 -top-4 text-7xl font-black text-brand-50 transition-colors group-hover:text-brand-100 dark:text-white/5 dark:group-hover:text-white/10">
                  {item.step}
                </span>
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <Icon name="whatsapp" size={18} />
            Konsultasi Gratis Sekarang
          </a>
        </Reveal>
      </div>
    </section>
  );
}
