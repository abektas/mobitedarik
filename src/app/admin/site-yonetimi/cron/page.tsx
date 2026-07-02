"use client";
import Link from "next/link";

export default function CronPage() {
  const jobs = [
    { id: 1, isim: "Günlük Özet E-postası", cron: "0 8 * * *", aciklama: "Her gün 08:00'de admin özet maili", sonCalisma: "—", durum: "Pasif", renk: "text-warm-400 bg-warm-100" },
    { id: 2, isim: "Veritabanı Yedekleme", cron: "0 22 * * *", aciklama: "Her gün 22:00'de DB yedekleme", sonCalisma: "—", durum: "Pasif", renk: "text-warm-400 bg-warm-100" },
    { id: 3, isim: "Stok Uyarı Kontrolü", cron: "0 */6 * * *", aciklama: "6 saatte bir düşük stok uyarısı", sonCalisma: "—", durum: "Pasif", renk: "text-warm-400 bg-warm-100" },
    { id: 4, isim: "Teklif Süre Kontrolü", cron: "0 * * * *", aciklama: "Süresi dolan teklifleri pasifleştir", sonCalisma: "—", durum: "Pasif", renk: "text-warm-400 bg-warm-100" },
    { id: 5, isim: "Süresi Dolan Anlaşmalar", cron: "0 6 * * 1", aciklama: "Haftalık anlaşma yenileme hatırlatması", sonCalisma: "—", durum: "Pasif", renk: "text-warm-400 bg-warm-100" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Cron İşleri</span>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="p-6 border-b border-warm-200">
          <h2 className="text-xl font-bold text-warm-900">⏰ Cron İşleri</h2>
          <p className="text-sm text-warm-500 mt-1">Zamanlanmış görevler (Cloudflare Workers ile çalışır)</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr><th className="text-left p-4 font-semibold text-warm-700">İş</th><th className="text-left p-4 font-semibold text-warm-700">Cron</th><th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Açıklama</th><th className="text-left p-4 font-semibold text-warm-700">Durum</th><th className="text-right p-4 font-semibold text-warm-700">İşlem</th></tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {jobs.map(j => (
              <tr key={j.id} className="hover:bg-warm-50">
                <td className="p-4 font-medium text-warm-900">{j.isim}</td>
                <td className="p-4 font-mono text-xs text-warm-500">{j.cron}</td>
                <td className="p-4 text-warm-500 text-xs hidden md:table-cell">{j.aciklama}</td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${j.renk}`}>{j.durum}</span></td>
                <td className="p-4 text-right"><button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary-dark transition-colors">Aktifleştir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
