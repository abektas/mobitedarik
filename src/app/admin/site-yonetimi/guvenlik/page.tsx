"use client";
import { useState } from "react";
import Link from "next/link";

export default function GuvenlikPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Güvenlik</span>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-warm-900">🔒 Güvenlik Ayarları</h2>
          {saved && <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-lg font-medium">✓ Kaydedildi</span>}
        </div>
        <form onSubmit={handleSave} className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Giriş Güvenliği</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Maks. Başarısız Giriş Denemesi</label><select className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option>5</option><option>10</option><option selected>3</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Hesap Kilitleme Süresi (dk)</label><input type="number" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" defaultValue={15} /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Şifre Politikası</label><select className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option>Standart</option><option selected>Güçlü</option><option>Çok Güçlü</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">2FA Doğrulama</label><select className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option selected>Kapalı</option><option>Zorunlu (Admin)</option><option>Tüm Kullanıcılar</option></select></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Rate Limiting</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">API Rate Limit (istek/dk)</label><input type="number" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" defaultValue={60} /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Giriş Rate Limit (deneme/dk)</label><input type="number" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" defaultValue={5} /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Kayıt Rate Limit (kayıt/saat)</label><input type="number" className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" defaultValue={10} /></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Diğer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">CORS İzin Verilen Domainler</label><textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm resize-none" defaultValue="http://localhost:3001" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">IP Kara Liste</label><textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm resize-none" placeholder="Her satıra bir IP adresi" /></div>
            </div>
          </div>
          <div className="flex justify-end pt-4 border-t border-warm-200"><button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Ayarları Kaydet</button></div>
        </form>
      </div>
    </div>
  );
}
