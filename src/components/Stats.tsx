import Reveal from "./Reveal";
import { stats } from "@/config/content";

export default function Stats() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="text-3xl font-extrabold text-brand-600 lg:text-4xl">
                {stat.value}
                <span className="text-brand-400">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
