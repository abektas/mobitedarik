import Link from "next/link";

export default function SiteYonetimiDashboard() {
  const systemStats = [
    { label: "Node.js", value: "v24.18.0", bg: "bg-blue-50 text-blue-700" },
    { label: "Next.js", value: "16.2.9", bg: "bg-blue-50 text-blue-700" },
    { label: "React", value: "19.2.4", bg: "bg-cyan-50 text-cyan-700" },
    { label: "TypeScript", value: "5.9.3", bg: "bg-indigo-50 text-indigo-700" },
    { label: "Prisma", value: "7.8.0", bg: "bg-emerald-50 text-emerald-700" },
    { label: "Tailwind", value: "4.x", bg: "bg-teal-50 text-teal-700" },
    { label: "Auth.js", value: "v5 beta", bg: "bg-amber-50 text-amber-700" },
    { label: "PostgreSQL", value: "Hazır", bg: "bg-blue-50 text-blue-700" },
  ];

  const healthChecks = [
    { name: "Veritabanı Bağlantısı", status: "warning", text: "Bağlantı ayarlanmadı", icon: "🟡" },
    { name: "Redis / Önbellek", status: "off", text: "Aktif değil", icon: "⚪" },
    { name: "E-posta Sunucusu", status: "warning", text: "Ayarlanmadı", icon: "🟡" },
    { name: "Cloudflare R2", status: "off", text: "Aktif değil", icon: "⚪" },
    { name: "Meilisearch", status: "off", text: "Kurulmadı", icon: "⚪" },
    { name: "WhatsApp API", status: "off", text: "Entegre edilmedi", icon: "⚪" },
    { name: "e-Fatura Servisi", status: "off", text: "Entegre edilmedi", icon: "⚪" },
    { name: "Sentry", status: "off", text: "Kurulmadı", icon: "⚪" },
  ];

  return (
    <div className="space-y-8">
      {/* Sistem Bilgisi */}
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">🖥️ Sistem Bilgisi</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {systemStats.map(s => (
            <div key={s.label} className={`${s.bg} rounded-lg px-4 py-3`}>
              <p className="text-[10px] uppercase tracking-wider opacity-70">{s.label}</p>
              <p className="text-sm font-bold mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Durum Kontrolleri */}
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">🔌 Servis Durumu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {healthChecks.map(h => (
            <div key={h.name} className="flex items-center gap-3 p-3 bg-warm-50 rounded-lg">
              <span className="text-lg">{h.icon}</span>
              <div>
                <p className="text-sm font-medium text-warm-900">{h.name}</p>
                <p className="text-xs text-warm-400">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hızlı İşlem Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { href: "/admin/site-yonetimi/sistem-ayarlari", label: "⚙️ Sistem Ayarları", desc: "Site genel ayarları" },
          { href: "/admin/site-yonetimi/guvenlik", label: "🔒 Güvenlik", desc: "Güvenlik yapılandırması" },
          { href: "/admin/site-yonetimi/one-bellek", label: "🗄️ Önbellek", desc: "Cache temizleme" },
          { href: "/admin/site-yonetimi/hata-log", label: "📋 Hata Logları", desc: "Sistem hata kayıtları" },
          { href: "/admin/site-yonetimi/veritabani", label: "🗃️ Veritabanı", desc: "DB bakım ve yönetim" },
          { href: "/admin/site-yonetimi/api-anahtarlari", label: "🔑 API Anahtarları", desc: "Harici servis anahtarları" },
          { href: "/admin/site-yonetimi/yedekleme", label: "💾 Yedekleme", desc: "Veri yedekleme" },
          { href: "/admin/site-yonetimi/eposta-ayarlari", label: "📧 E-posta", desc: "SMTP ayarları" },
        ].map(card => (
          <Link key={card.href} href={card.href} className="bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md hover:border-primary/30 transition-all">
            <p className="text-lg mb-1">{card.label}</p>
            <p className="text-xs text-warm-400">{card.desc}</p>
          </Link>
        ))}
      </div>

      {/* Hızlı Kod */}
      <div className="bg-warm-50 rounded-xl border border-warm-200 p-5">
        <h3 className="font-semibold text-warm-900 text-sm mb-2">📦 Ortam Bilgisi</h3>
        <pre className="text-xs text-warm-600 bg-white rounded-lg p-4 border border-warm-200 overflow-x-auto">
{`Platform:    win32
Node.js:     v24.18.0
Next.js:     16.2.9 (Turbopack)
Prisma:      7.8.0
Database:    PostgreSQL (Supabase) — bağlantı bekliyor
Auth:        NextAuth v5 (Credentials)
Storage:     Cloudflare R2 — yapılandırılmadı
Search:      Meilisearch — ileri faz
CDN:         Cloudflare CDN — yapılandırılmadı
Hosting:     Cloudflare Pages — yapılandırılmadı`}
        </pre>
      </div>
    </div>
  );
}
