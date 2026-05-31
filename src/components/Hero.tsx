import Icon from "./Icon";
import { whatsappLink } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Dekorasi latar */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            Website Development Company
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tingkatkan Visibilitas,{" "}
            <span className="bg-gradient-to-r from-brand-300 to-sky-300 bg-clip-text text-transparent">
              Bangun Kredibilitas
            </span>
            , Bisnis Lebih Berkelas
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90">
            Kami bantu brand Anda tampil maksimal lewat website profesional yang
            dirancang untuk meningkatkan kepercayaan, visibilitas di mesin
            pencari, dan daya saing di pasar digital.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-xl shadow-brand-950/40 transition-transform hover:-translate-y-0.5"
            >
              <Icon name="whatsapp" size={18} />
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Lihat Layanan
              <Icon name="arrow-right" size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-brand-100/80">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={16} className="text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0</span>
            </div>
            <span className="h-4 w-px bg-white/20" />
            <span>Dipercaya 120+ klien</span>
          </div>
        </div>

        {/* Ilustrasi kartu */}
        <div className="relative hidden lg:block">
          <div className="animate-float rounded-2xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl bg-white p-5">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-28 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
                <div className="h-3 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-1/2 rounded bg-slate-200" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-16 rounded-lg bg-brand-50" />
                  <div className="h-16 rounded-lg bg-brand-50" />
                  <div className="h-16 rounded-lg bg-brand-50" />
                </div>
                <div className="h-9 w-32 rounded-full bg-brand-600" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Icon name="check" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">SEO-Ready</p>
                <p className="text-xs text-slate-500">Cepat & Optimal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pemisah gelombang */}
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#f8fafc"
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}
