"use client";
import { useState } from "react";
import Link from "next/link";

export default function ApiAnahtarlariPage() {
  const [keys] = useState([
    { id: 1, name: "Supabase / PostgreSQL", key: "sbp_••••••••••••••••", status: "Bağlı Değil", statusClass: "text-red-600 bg-red-50" },
    { id: 2, name: "Cloudflare R2 (Storage)", key: "r2_•••••••••••••••••••", status: "Yapılandırılmadı", statusClass: "text-warm-500 bg-warm-100" },
    { id: 3, name: "Meilisearch (Arama)", key: "ms_••••••••••••••••", status: "Kurulmadı", statusClass: "text-warm-500 bg-warm-100" },
    { id: 4, name: "Sentry (Hata Takip)", key: "snt_••••••••••••••••", status: "Kurulmadı", statusClass: "text-warm-500 bg-warm-100" },
    { id: 5, name: "WhatsApp Business API", key: "wa_•••••••••••••••••", status: "Entegre Edilmedi", statusClass: "text-warm-500 bg-warm-100" },
    { id: 6, name: "SMTP (E-posta)", key: "smtp_••••••••••••••••", status: "Ayarlanmadı", statusClass: "text-warm-500 bg-warm-100" },
    { id: 7, name: "e-Fatura Servisi", key: "ef_••••••••••••••••••", status: "Entegre Edilmedi", statusClass: "text-warm-500 bg-warm-100" },
    { id: 8, name: "Accio AI (Trend)", key: "accio_••••••••••••••••", status: "Manuel HTML", statusClass: "text-accent bg-accent/10" },
    { id: 9, name: "Auth.js Secret", key: "••••••••••••••••••••", status: "Aktif", statusClass: "text-green-600 bg-green-50" },
  ]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">API Anahtarları</span>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="p-6 border-b border-warm-200">
          <h2 className="text-xl font-bold text-warm-900">🔑 API Anahtarları</h2>
          <p className="text-sm text-warm-500 mt-1">Harici servis bağlantılarını yönetin</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Servis</th>
              <th className="text-left p-4 font-semibold text-warm-700">Anahtar</th>
              <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {keys.map(k => (
              <tr key={k.id} className="hover:bg-warm-50">
                <td className="p-4 font-medium text-warm-900">{k.name}</td>
                <td className="p-4 text-warm-400 font-mono text-xs">{k.key}</td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${k.statusClass}`}>{k.status}</span></td>
                <td className="p-4 text-right"><button className="text-primary text-xs hover:underline">Düzenle</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
