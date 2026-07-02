"use client";
import { useState } from "react";
import Link from "next/link";

export default function SistemAyarlariPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteTitle: "MobiTedarik",
    siteDescription: "B2B Mobilya Malzeme Tedarik Platformu",
    siteUrl: "https://www.mobitedarik.com",
    adminEmail: "admin@mobitedarik.com",
    supportEmail: "destek@mobitedarik.com",
    fromEmail: "noreply@mobitedarik.com",
    kayitAktif: "true",
    tedarikciBasvuruAktif: "true",
    komisyonOrani: "3.5",
    maxDosyaBoyutu: "10",
    dil: "tr",
    paraBirimi: "TRY",
    bakimModu: "false",
    sayfaBasinaUrun: "24",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
    setSaved(false);
  };

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
        <span className="text-sm text-warm-600">Sistem Ayarları</span>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-warm-900">⚙️ Sistem Ayarları</h2>
          {saved && <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-lg font-medium">✓ Kaydedildi</span>}
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          {/* Genel */}
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Genel Ayarlar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Site Başlığı</label><input type="text" name="siteTitle" value={settings.siteTitle} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Site URL</label><input type="text" name="siteUrl" value={settings.siteUrl} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div className="sm:col-span-2"><label className="block text-sm font-medium text-warm-700 mb-1">Site Açıklaması</label><input type="text" name="siteDescription" value={settings.siteDescription} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            </div>
          </div>

          {/* E-posta */}
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">E-posta Ayarları</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Admin E-posta</label><input type="email" name="adminEmail" value={settings.adminEmail} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Destek E-posta</label><input type="email" name="supportEmail" value={settings.supportEmail} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Gönderici E-posta</label><input type="email" name="fromEmail" value={settings.fromEmail} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Platform Ayarları</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Kayıt</label><select name="kayitAktif" value={settings.kayitAktif} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option value="true">Açık</option><option value="false">Kapalı</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Tedarikçi Başvurusu</label><select name="tedarikciBasvuruAktif" value={settings.tedarikciBasvuruAktif} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option value="true">Açık</option><option value="false">Kapalı</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Bakım Modu</label><select name="bakimModu" value={settings.bakimModu} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option value="false">Kapalı</option><option value="true">Açık</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Komisyon Oranı (%)</label><input type="number" step="0.1" name="komisyonOrani" value={settings.komisyonOrani} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Maks. Dosya Boyutu (MB)</label><input type="number" name="maxDosyaBoyutu" value={settings.maxDosyaBoyutu} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Sayfa Başına Ürün</label><input type="number" name="sayfaBasinaUrun" value={settings.sayfaBasinaUrun} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Dil</label><select name="dil" value={settings.dil} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option value="tr">Türkçe</option><option value="en">English</option></select></div>
              <div><label className="block text-sm font-medium text-warm-700 mb-1">Para Birimi</label><select name="paraBirimi" value={settings.paraBirimi} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm"><option value="TRY">₺ TL</option><option value="USD">$ USD</option><option value="EUR">€ EUR</option></select></div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-warm-200">
            <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Ayarları Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
}
