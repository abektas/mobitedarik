import Link from "next/link";

export default function CmsDashboardPage() {
  const stats = [
    { label: "Sayfalar", value: "6", href: "/super-admin/pages", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Bileşenler", value: "14", href: "/super-admin/components", color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Medya", value: "2", href: "/super-admin/media", color: "text-green-600", bg: "bg-green-50" },
    { label: "Blog Yazıları", value: "4", href: "/super-admin/blog", color: "text-accent", bg: "bg-accent/10" },
    { label: "Formlar", value: "2", href: "/super-admin/forms", color: "text-pink-600", bg: "bg-pink-50" },
    { label: "Bekleyen Onay", value: "0", href: "/super-admin/workflow", color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">⚡ CMS V2 Dashboard</h1>
          <p className="text-warm-500 text-sm mt-1">İçerik yönetim sistemine hoş geldiniz</p>
        </div>
        <Link href="/super-admin/pages/new" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">+ Yeni Sayfa</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-sm text-warm-500 mt-1">{s.label}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Son Aktiviteler */}
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Son Aktiviteler</h2>
          <div className="space-y-3">
            {[
              { action: "Sayfa güncellendi", entity: "Ana Sayfa", user: "Super Admin", time: "2 dk önce" },
              { action: "Medya yüklendi", entity: "hero-bg.jpg", user: "Super Admin", time: "15 dk önce" },
              { action: "Blog yayınlandı", entity: "EUDR Rehberi", user: "Super Admin", time: "1 saat önce" },
              { action: "Tema güncellendi", entity: "Light Tema", user: "Super Admin", time: "2 saat önce" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-warm-100 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">SA</div>
                <div className="flex-1">
                  <p className="text-sm text-warm-900"><strong>{item.action}:</strong> {item.entity}</p>
                  <p className="text-xs text-warm-400">{item.user} · {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hızlı Erişim */}
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Hızlı Erişim</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: "/super-admin/pages", label: "📄 Sayfalar", desc: "Tüm sayfaları yönet" },
              { href: "/super-admin/blog", label: "📰 Blog", desc: "Yazıları yönet" },
              { href: "/super-admin/media", label: "🖼️ Medya", desc: "Dosya kütüphanesi" },
              { href: "/super-admin/design", label: "🎨 Tema", desc: "Tasarım ayarları" },
              { href: "/super-admin/navigation", label: "🧭 Navigasyon", desc: "Menüleri düzenle" },
              { href: "/super-admin/seo", label: "🔍 SEO", desc: "SEO ayarları" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
                <p className="font-semibold text-warm-900 text-sm">{item.label}</p>
                <p className="text-xs text-warm-400 mt-0.5">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
