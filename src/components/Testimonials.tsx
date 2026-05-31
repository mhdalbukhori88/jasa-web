import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/config/content";

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-slate-50 py-20 dark:bg-ink-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan klien adalah motivasi kami untuk terus berinovasi dan memberikan yang terbaik."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-ink-800">
                <span className="absolute right-6 top-5 font-serif text-6xl leading-none text-brand-100 dark:text-white/10">
                  &rdquo;
                </span>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" size={16} />
                  ))}
                </div>
                <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
