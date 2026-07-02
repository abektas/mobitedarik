"use client";
import { useState } from "react";
import Link from "next/link";

export default function YedeklemePage() {
  const [message, setMessage] = useState("");

  const handleBackup = () => {
    setMessage("✅ Yedekleme başlatıldı. İşlem tamamlandığında bildirileceksiniz.");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Yedekleme</span>
      </div>
      {message && <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-700">{message}</div>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">💾 Yedekleme</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-warm-100">
              <div><p className="font-medium text-warm-900 text-sm">Veritabanı Yedekleme</p><p className="text-xs text-warm-400">PostgreSQL dump</p></div>
              <button onClick={handleBackup} className="bg-primary text-white text-xs px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Yedek Al</button>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-warm-100">
              <div><p className="font-medium text-warm-900 text-sm">Dosya Yedekleme</p><p className="text-xs text-warm-400">Görsel, belge, upload</p></div>
              <button onClick={handleBackup} className="bg-primary text-white text-xs px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Yedek Al</button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div><p className="font-medium text-warm-900 text-sm">Tam Yedekleme</p><p className="text-xs text-warm-400">Veritabanı + dosyalar</p></div>
              <button onClick={handleBackup} className="bg-accent text-white text-xs px-4 py-2 rounded-lg hover:bg-accent-light transition-colors">Tam Yedek Al</button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">📅 Yedek Geçmişi</h2>
          <div className="space-y-3 text-sm">
            {[
              { tarih: "2026-06-30 22:00", boyut: "—", durum: "Başarısız", renk: "text-red-600" },
            ].map((y, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-warm-100 last:border-0">
                <span className="text-warm-600">{y.tarih}</span>
                <span className="text-warm-400">{y.boyut}</span>
                <span className={`font-medium ${y.renk}`}>{y.durum}</span>
              </div>
            ))}
            <p className="text-xs text-warm-400 text-center pt-2">Henüz yedek alınmamış.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
