# Website Jasa Pembuatan Website (Tema Biru)

Landing page profesional untuk bisnis jasa pembuatan website, dibangun dengan
**Next.js 16 + TypeScript + Tailwind CSS**. Dirancang agar mudah di-deploy ke
**Vercel** dan dipindahkan ke hosting/domain Anda sendiri nanti.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Build produksi

```bash
npm run build
npm start
```

---

## Cara kustomisasi (PENTING)

Semua data bisnis dipusatkan agar mudah diubah tanpa menyentuh kode komponen.

### 1. Nama brand, kontak, dan media sosial

Edit file **`src/config/site.ts`**:

- `name` — nama brand (saat ini sementara: **"BlueWeb"**). Ganti saat sudah final.
- `contact.whatsapp` — nomor WhatsApp format internasional tanpa `+` (mis. `6281234567890`).
- `contact.phoneDisplay`, `contact.email`, `contact.address`.
- `social` — tautan Instagram, Facebook, LinkedIn, TikTok.
- `url` — ganti dengan domain Anda setelah membeli domain (untuk SEO & sitemap).

### 2. Logo

Logo saat ini berupa placeholder teks + ikon di **`src/components/Logo.tsx`**.
Saat logo gambar sudah jadi:

1. Letakkan file logo di folder `public/` (mis. `public/logo.svg`).
2. Ganti isi `Logo.tsx` mengikuti contoh komentar di dalam file tersebut.
3. Untuk favicon, ganti file `src/app/icon.svg`.

### 3. Konten (layanan, harga, proses, FAQ, testimoni)

Edit file **`src/config/content.ts`**. Semua teks ada di sana:
`services`, `stats`, `technologies`, `process`, `pricing`, `faqs`, `testimonials`.

### 4. Warna tema

Tema biru didefinisikan di **`tailwind.config.ts`** pada objek `colors.brand`.
Ubah nilai hex di sana untuk menyesuaikan nuansa biru (atau warna lain).

---

## Deploy ke Vercel

1. Push proyek ini ke repository GitHub/GitLab.
2. Buka [vercel.com](https://vercel.com), klik **Add New → Project**, lalu impor repo.
3. Vercel otomatis mendeteksi Next.js. Klik **Deploy** (tanpa konfigurasi tambahan).
4. Website langsung online di subdomain `*.vercel.app`.

### Menyambungkan domain sendiri (nanti)

Setelah membeli domain:

1. Di dashboard Vercel project → **Settings → Domains → Add**.
2. Masukkan domain Anda dan ikuti instruksi DNS (A record / CNAME).
3. Update `url` di `src/config/site.ts` ke domain final, lalu deploy ulang.

### Pindah ke hosting sendiri (alternatif)

Karena ini Next.js, Anda bisa juga hosting di server Node sendiri:

```bash
npm run build
npm start   # menjalankan di port 3000
```

Gunakan reverse proxy (Nginx) + PM2 untuk produksi, atau export sesuai kebutuhan
provider hosting Anda.

---

## Struktur proyek

```
src/
├── app/
│   ├── layout.tsx        # Layout + metadata SEO
│   ├── page.tsx          # Halaman utama (menyusun semua section)
│   ├── globals.css       # Style global
│   ├── icon.svg          # Favicon
│   ├── sitemap.ts        # Sitemap otomatis
│   └── robots.ts         # robots.txt otomatis
├── components/           # Komponen UI tiap section
└── config/
    ├── site.ts           # Data bisnis (EDIT DI SINI)
    └── content.ts        # Konten teks (EDIT DI SINI)
```
