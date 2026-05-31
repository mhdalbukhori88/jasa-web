import Icon from "./Icon";
import Reveal from "./Reveal";
import { siteConfig, whatsappLink } from "@/config/site";

export default function CTA() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-8 py-14 text-center lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Siap Membawa Bisnis Anda ke Dunia Digital?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-brand-100/90">
                Konsultasikan kebutuhan website Anda sekarang. Gratis, tanpa
                komitmen. Tim {siteConfig.name} siap membantu mewujudkannya.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="whatsapp" size={18} />
                  Konsultasi Gratis Sekarang
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Icon name="mail" size={18} />
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
