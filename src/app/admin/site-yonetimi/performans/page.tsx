import Link from "next/link";

export default function PerformansPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Performans</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          { label: "Sayfa Yükleme", value: "45ms", sub: "Ortalama" },
          { label: "Toplam Sayfa", value: "41", sub: "Route sayısı" },
          { label: "Build Süresi", value: "4.5sn", sub: "TypeScript + Turbo" },
          { label: "Derleme Boyutu", value: "~2.1MB", sub: "Next.js output" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-warm-200 p-5">
            <p className="text-xs text-warm-400">{s.label}</p>
            <p className="text-2xl font-bold text-warm-900 mt-1">{s.value}</p>
            <p className="text-xs text-warm-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">📊 Performans Metrikleri</h2>
          <div className="space-y-4">
            {[
              { label: "LCP (Largest Contentful Paint)", value: "—", note: "Sentry kurulumu bekliyor" },
              { label: "FID (First Input Delay)", value: "—", note: "Sentry kurulumu bekliyor" },
              { label: "CLS (Cumulative Layout Shift)", value: "—", note: "Sentry kurulumu bekliyor" },
              { label: "TTFB (Time to First Byte)", value: "—", note: "Ölçüm yapılmadı" },
            ].map(m => (
              <div key={m.label} className="flex items-center justify-between py-2 border-b border-warm-100">
                <span className="text-sm text-warm-600">{m.label}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-warm-900">{m.value}</span>
                  <p className="text-[10px] text-warm-400">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">⚡ Optimizasyon Önerileri</h2>
          <div className="space-y-3">
            {[
              { icon: "📦", text: "Meilisearch kurulumu ile arama performansı artırılabilir" },
              { icon: "🖼️", text: "Cloudflare R2 + Image Optimization kurulumu gerekli" },
              { icon: "🔍", text: "pgvector ile anlamsal arama eklenebilir (ileri faz)" },
              { icon: "⚡", text: "Sentry ile gerçek kullanıcı metrikleri toplanabilir" },
              { icon: "🗄️", text: "Redis önbellek ile sayfa hızı iyileştirilebilir" },
            ].map(o => (
              <div key={o.text} className="flex items-start gap-3 p-3 bg-warm-50 rounded-lg">
                <span>{o.icon}</span>
                <p className="text-sm text-warm-600">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
