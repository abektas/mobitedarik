import Link from "next/link";

export default function HataLogPage() {
  const logs = [
    { id: 1, tarih: "2026-07-01 03:42:15", seviye: "UYARI", kaynak: "Prisma", mesaj: "Veritabanı bağlantısı zaman aşımına uğradı. Yeniden bağlanılıyor...", renk: "text-accent bg-accent/10" },
    { id: 2, tarih: "2026-07-01 01:12:33", seviye: "BİLGİ", kaynak: "Auth", mesaj: "Yeni kullanıcı girişi: ali@mobitech.com", renk: "text-blue-600 bg-blue-50" },
    { id: 3, tarih: "2026-06-30 22:05:00", seviye: "BAŞARILI", kaynak: "Cron", mesaj: "Günlük yedekleme tamamlandı (0 dosya)", renk: "text-green-600 bg-green-50" },
    { id: 4, tarih: "2026-06-30 18:30:12", seviye: "HATA", kaynak: "API", mesaj: "Geçersiz API anahtarı ile erişim denemesi - IP: 192.168.1.100", renk: "text-red-600 bg-red-50" },
    { id: 5, tarih: "2026-06-30 15:44:21", seviye: "UYARI", kaynak: "RateLimit", mesaj: "IP 192.168.1.50 rate limit aşımı (15 deneme/dk)", renk: "text-accent bg-accent/10" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Hata Logları</span>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="p-6 border-b border-warm-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-warm-900">📋 Hata Logları</h2>
            <p className="text-sm text-warm-500 mt-1">Sistem olay kayıtları</p>
          </div>
          <div className="flex gap-2">
            <select className="text-xs px-3 py-1.5 rounded-lg border border-warm-200"><option>Tüm Seviyeler</option><option>Hata</option><option>Uyarı</option><option>Bilgi</option></select>
            <button className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">Temizle</button>
          </div>
        </div>
        <div className="divide-y divide-warm-100">
          {logs.map(l => (
            <div key={l.id} className="px-6 py-4 flex items-start gap-4 hover:bg-warm-50">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${l.renk} flex-shrink-0 mt-0.5`}>{l.seviye}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-warm-900">{l.mesaj}</p>
                <p className="text-xs text-warm-400 mt-0.5">{l.kaynak} · {l.tarih}</p>
              </div>
              <button className="text-xs text-warm-400 hover:text-primary flex-shrink-0">Detay</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
