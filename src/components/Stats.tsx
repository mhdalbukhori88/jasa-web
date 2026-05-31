import Reveal from "./Reveal";
import { stats } from "@/config/content";

export default function Stats() {
  return (
    <section className="bg-slate-50 py-12 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-200/70 shadow-sm dark:border-white/10 dark:bg-white/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="bg-white p-8 text-center dark:bg-ink-800"
            >
              <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-400 lg:text-4xl">
                {stat.value}
                <span className="text-brand-400 dark:text-brand-500">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
