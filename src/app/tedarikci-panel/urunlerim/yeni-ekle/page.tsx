"use client";
import { useState } from "react";
import Link from "next/link";
import { kategoriler } from "@/data/site-data";

export default function YeniMalzemeEklePage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-xl font-bold text-green-800 mb-2">Malzeme Eklendi!</h2>
        <p className="text-green-600 mb-6">Ürününüz admin onayına gönderildi.</p>
        <Link href="/tedarikci-panel/urunlerim" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-block">Malzemelerime Dön</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/tedarikci-panel/urunlerim" className="text-warm-400 hover:text-warm-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </Link>
        <h1 className="text-2xl font-bold text-warm-900">Yeni Malzeme Ekle</h1>
      </div>
      <div className="bg-white rounded-2xl border border-warm-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-warm-700 mb-1">Malzeme Adı *</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="Örn: 18mm MDF-Lam Beyaz" />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">Kategori *</label>
              <select required className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                <option value="">Seçin</option>
                {kategoriler.map(k => <option key={k.id} value={k.id}>{k.ad}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">Birim *</label>
              <select required className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                <option value="m²">m²</option>
                <option value="adet">Adet</option>
                <option value="kg">Kg</option>
                <option value="m³">m³</option>
                <option value="rulo">Rulo</option>
                <option value="takım">Takım</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-700 mb-1">Açıklama</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all resize-none" placeholder="Malzeme açıklaması..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-700 mb-3">Fiyat Kademeleri</label>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm text-warm-500 w-24">{i === 1 ? "1-50" : i === 2 ? "51-200" : "200+"} birim</span>
                  <input type="number" step="0.01" placeholder="Birim fiyat" className="flex-1 px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" />
                  <select className="px-3 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                    <option value="TRY">₺</option>
                    <option value="USD">$</option>
                    <option value="CNY">¥</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">MOQ (Minimum Sipariş)</label>
              <input type="number" className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">Teslimat Süresi</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="3-5 iş günü" />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">Stok Durumu</label>
              <select className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                <option value="icinde">Stokta</option>
                <option value="sinirli">Sınırlı</option>
                <option value="siparis-uzerine">Sipariş Üzerine</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <Link href="/tedarikci-panel/urunlerim" className="px-6 py-3 text-warm-600 hover:text-warm-800 transition-colors font-medium">İptal</Link>
            <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Malzemeyi Ekle</button>
          </div>
        </form>
      </div>
    </div>
  );
}
