import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          light ? "text-brand-300" : "text-brand-600 dark:text-brand-400"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-brand-100/80" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
