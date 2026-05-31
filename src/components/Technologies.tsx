import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/config/content";

export default function Technologies() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Teknologi Kami"
          title="Teknologi Sesuai Kebutuhan Bisnis Anda"
          description="Kami menggunakan teknologi terbaik untuk menghadirkan pengalaman pengguna yang optimal dan operasional bisnis yang lancar."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <Reveal key={tech} delay={i * 50}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
