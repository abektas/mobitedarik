"use client";
import { useState } from "react";
import Link from "next/link";

export default function VeritabaniPage() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Veritabanı Yönetimi</span>
      </div>
      {message && <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-700">{message}</div>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">🗃️ Veritabanı Bilgisi</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: "Sistem", value: "PostgreSQL (Supabase)" },
              { label: "Durum", value: "🟡 Bağlantı ayarlanmadı" },
              { label: "Host", value: "—" },
              { label: "Database", value: "mobilya-tedarik" },
              { label: "ORM", value: "Prisma 7.8.0" },
              { label: "Model Sayısı", value: "22" },
            ].map(i => (
              <div key={i.label} className="flex justify-between py-2 border-b border-warm-100">
                <span className="text-warm-500">{i.label}</span>
                <span className="font-medium text-warm-900">{i.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4">⚡ Veritabanı İşlemleri</h2>
          <div className="space-y-3">
            {[
              { label: "Migration Çalıştır", desc: "Bekleyen migrationları uygula", btn: "prisma migrate dev", color: "bg-primary" },
              { label: "Seed Verisi Yükle", desc: "Demo verileri veritabanına ekle", btn: "prisma db seed", color: "bg-accent" },
              { label: "Prisma Studio", desc: "Veritabanı GUI aracını aç", btn: "prisma studio", color: "bg-primary" },
              { label: "Tabloları Sıfırla", desc: "Tüm verileri temizle (dikkat!)", btn: "Sıfırla", color: "bg-red-500" },
            ].map(i => (
              <div key={i.label} className="flex items-center justify-between py-3 border-b border-warm-100 last:border-0">
                <div><p className="font-medium text-warm-900 text-sm">{i.label}</p><p className="text-xs text-warm-400">{i.desc}</p></div>
                <button onClick={() => setMessage(`"${i.btn}" komutu başlatıldı.`)} className={`${i.color} text-white text-xs px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}>{i.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
