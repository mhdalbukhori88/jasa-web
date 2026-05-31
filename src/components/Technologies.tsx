import SectionHeading from "./SectionHeading";
import { technologies } from "@/config/content";

export default function Technologies() {
  // Gandakan daftar agar animasi marquee berjalan mulus tanpa jeda.
  const loop = [...technologies, ...technologies];

  return (
    <section className="bg-white py-20 dark:bg-ink-800 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Teknologi Kami"
          title="Teknologi Sesuai Kebutuhan Bisnis Anda"
          description="Kami menggunakan teknologi terbaik untuk menghadirkan pengalaman pengguna yang optimal dan operasional bisnis yang lancar."
        />
      </div>

      {/* Marquee teknologi */}
      <div className="mask-fade-x mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
