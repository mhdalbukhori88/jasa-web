import { siteConfig } from "@/config/site";

/**
 * Logo placeholder berbasis teks.
 *
 * Saat logo gambar sudah jadi, ganti isi komponen ini dengan:
 *   import Image from "next/image";
 *   <Image src="/logo.svg" alt={siteConfig.name} width={140} height={36} priority />
 * dan letakkan file logo di folder /public.
 *
 * Prop `light` memaksa teks berwarna putih (mis. di footer gelap).
 * Tanpa prop, warna mengikuti mode terang/gelap otomatis.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/40">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="relative">
          <path
            d="M3 7l9-4 9 4-9 4-9-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M3 12l9 4 9-4M3 17l9 4 9-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </span>
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
