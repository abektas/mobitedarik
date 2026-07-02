import Link from "next/link";

export default function AuditPage() {
  const logs = [
    { id: "1", actor: "super@mobitedarik.com", action: "update", entity: "Ana Sayfa", type: "page", time: "2026-07-01 10:00", detail: "Hero bölümü güncellendi" },
    { id: "2", actor: "super@mobitedarik.com", action: "publish", entity: "EUDR Rehberi", type: "post", time: "2026-06-28 14:30", detail: "Blog yazısı yayınlandı" },
    { id: "3", actor: "super@mobitedarik.com", action: "upload", entity: "hero-bg.jpg", type: "media", time: "2026-06-28 12:15", detail: "Medya dosyası yüklendi" },
    { id: "4", actor: "admin@mobitedarik.com", action: "login", entity: "Admin Panel", type: "auth", time: "2026-06-28 09:00", detail: "Giriş yapıldı" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">📋 Denetim Kayıtları</h1>
          <p className="text-warm-500 text-sm mt-1">Tüm yönetim işlemlerinin izlenebilir kaydı</p>
        </div>
        <button className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">Temizle</button>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="divide-y divide-warm-100">
          {logs.map(l => (
            <div key={l.id} className="px-6 py-4 flex items-start gap-4 hover:bg-warm-50">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-primary" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-warm-900">{l.actor}</span>
                  <span className="text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{l.action}</span>
                  <span className="text-xs text-warm-400">{l.type}</span>
                </div>
                <p className="text-sm text-warm-600 mt-0.5">{l.detail}</p>
                <p className="text-xs text-warm-400 mt-0.5">{l.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
