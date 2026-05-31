/**
 * Konfigurasi pusat untuk seluruh data bisnis.
 *
 * GANTI nilai-nilai di bawah ini saat nama brand, logo, dan kontak
 * sudah final. Semua komponen membaca dari sini, jadi cukup ubah di
 * satu tempat.
 */

export const siteConfig = {
  // Nama brand (sementara). Ganti saat sudah ditentukan.
  name: "BlueWeb",
  // Tagline pendek di bawah logo / untuk SEO.
  tagline: "Jasa Pembuatan Website Profesional",
  // Deskripsi untuk SEO (meta description).
  description:
    "Jasa pembuatan website profesional untuk bisnis Anda. Tingkatkan visibilitas, bangun kredibilitas, dan tampil lebih berkelas dengan website modern, cepat, dan SEO-ready.",
  // URL utama (ganti dengan domain Anda setelah membeli domain).
  url: "https://example.com",

  // Kontak — ganti dengan nomor & email bisnis Anda.
  contact: {
    // Format internasional tanpa tanda + atau spasi untuk link WhatsApp.
    whatsapp: "6281234567890",
    // Nomor yang ditampilkan ke pengguna.
    phoneDisplay: "+62 812-3456-7890",
    email: "halo@example.com",
    address: "Jakarta, Indonesia",
  },

  // Tautan media sosial (kosongkan string jika belum ada).
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    tiktok: "https://tiktok.com/",
  },
};

export type SiteConfig = typeof siteConfig;

// Pesan default saat pengguna klik tombol konsultasi WhatsApp.
export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      `Halo ${siteConfig.name}, saya tertarik dengan jasa pembuatan website. Boleh konsultasi?`
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
};
