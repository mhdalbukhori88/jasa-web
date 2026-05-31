/**
 * Content Security Policy.
 *
 * Dibuat ketat namun tetap kompatibel dengan Next.js:
 * - 'unsafe-inline' pada script-src diperlukan untuk script tema anti-flash
 *   dan JSON-LD inline. Untuk keamanan maksimal di kemudian hari, ini bisa
 *   diganti dengan mekanisme nonce.
 * - Koneksi WhatsApp (wa.me) & mailto ditangani lewat navigasi, bukan fetch,
 *   sehingga tidak perlu didaftarkan di connect-src.
 */
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

/** Header keamanan yang diterapkan ke semua route. */
const securityHeaders = [
  // Mencegah situs dibingkai (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Mencegah MIME-sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Membatasi informasi referrer yang dikirim ke situs lain.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Menonaktifkan API browser sensitif yang tidak dipakai.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Memaksa HTTPS selama 2 tahun, termasuk subdomain.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy.
  { key: "Content-Security-Policy", value: cspDirectives },
  // Mengisolasi origin sebagai mitigasi serangan lintas-origin.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Menyembunyikan header "X-Powered-By: Next.js" agar tidak membocorkan stack.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
