"use client";
import { useState } from "react";
import Link from "next/link";

export default function EpostaAyarlariPage() {
  const [saved, setSaved] = useState(false);
  const handleSave = (e: React.FormEvent) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">E-posta Ayarları</span>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-warm-900">📧 E-posta Ayarları</h2>
          {saved && <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-lg">✓ Kaydedildi</span>}
        </div>
        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-warm-700 mb-1">SMTP Sunucu</label><input type="text" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="smtp.example.com" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">SMTP Port</label><input type="number" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="587" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">SMTP Kullanıcı</label><input type="text" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">SMTP Şifre</label><input type="password" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Güvenlik</label><select className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option>TLS</option><option>SSL</option><option>STARTTLS</option></select></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Gönderici Adı</label><input type="text" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="MobiTedarik" /></div>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <button type="submit" className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm">Kaydet</button>
            <button type="button" className="bg-warm-100 text-warm-700 px-6 py-2.5 rounded-lg hover:bg-warm-200 transition-colors text-sm font-medium">Test E-postası Gönder</button>
          </div>
        </form>
      </div>
    </div>
  );
}
