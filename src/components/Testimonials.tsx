import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/config/content";

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan klien adalah motivasi kami untuk terus berinovasi dan memberikan yang terbaik."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" size={16} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.role}</p>
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
