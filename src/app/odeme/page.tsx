"use client";
import { useState } from "react";
import Link from "next/link";

export default function OdemePage() {
  const [step, setStep] = useState(1);
  const [odemeYontemi, setOdemeYontemi] = useState("pesin");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) { setStep(s => s + 1); return; }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-warm-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold text-warm-900 mb-2">Siparişiniz Oluşturuldu!</h2>
          <p className="text-warm-500 mb-6">Siparişiniz tedarikçilere iletildi. Sipariş durumunu panelden takip edebilirsiniz.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/panelim/siparislerim" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Siparişlerim</Link>
            <Link href="/" className="bg-warm-100 text-warm-700 px-6 py-3 rounded-lg hover:bg-warm-200 transition-colors font-semibold">Ana Sayfa</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adımlar */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { num: 1, label: "Teslimat" },
            { num: 2, label: "Ödeme" },
            { num: 3, label: "Onay" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-3">
              <div className={`flex items-center gap-2 ${step >= s.num ? "text-primary" : "text-warm-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= s.num ? "bg-primary text-white" : "bg-warm-100 text-warm-400"}`}>{s.num}</div>
                <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
              </div>
              {s.num < 3 && <div className="w-16 h-0.5 bg-warm-200"><div className={`h-full bg-primary transition-all ${step > s.num ? "w-full" : "w-0"}`} /></div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-warm-200 p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold text-warm-900 mb-6">Teslimat Bilgileri</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Teslimat Adresi *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                      <option value="">Adres seçin</option>
                      <option value="a1">İkitelli OSB, Başakşehir, İstanbul</option>
                      <option value="a2">Dudullu OSB, Ümraniye, İstanbul</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-700 mb-1">İl *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" defaultValue="İstanbul" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-700 mb-1">İlçe</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" defaultValue="Başakşehir" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Teslimat Notu</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all resize-none" placeholder="Varsa özel teslimat notu..." />
                  </div>
                </div>
                <div className="flex justify-end mt-8"><button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Devam Et</button></div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold text-warm-900 mb-6">Ödeme Yöntemi</h2>
                <div className="space-y-4">
                  <label className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${odemeYontemi === "pesin" ? "border-primary bg-primary/5" : "border-warm-200 hover:border-warm-300"}`}>
                    <input type="radio" name="odeme" value="pesin" checked={odemeYontemi === "pesin"} onChange={() => setOdemeYontemi("pesin")} className="sr-only" />
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${odemeYontemi === "pesin" ? "border-primary" : "border-warm-300"}`}>
                        {odemeYontemi === "pesin" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <p className="font-semibold text-warm-900">Peşin Ödeme</p>
                        <p className="text-sm text-warm-500">Kredi kartı veya banka havalesi ile peşin ödeme</p>
                      </div>
                    </div>
                  </label>
                  <label className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${odemeYontemi === "cari" ? "border-primary bg-primary/5" : "border-warm-200 hover:border-warm-300"}`}>
                    <input type="radio" name="odeme" value="cari" checked={odemeYontemi === "cari"} onChange={() => setOdemeYontemi("cari")} className="sr-only" />
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${odemeYontemi === "cari" ? "border-primary" : "border-warm-300"}`}>
                        {odemeYontemi === "cari" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <p className="font-semibold text-warm-900">Cari Hesap / Vadeli</p>
                        <p className="text-sm text-warm-500">30-60-90 gün vade ile ödeme (admin onayı gerekebilir)</p>
                      </div>
                    </div>
                  </label>
                </div>
                {odemeYontemi === "cari" && (
                  <div className="mt-6 bg-warm-50 rounded-xl p-4">
                    <p className="text-sm text-warm-600">Cari hesap limitiniz: <strong className="text-warm-900">₺50.000</strong></p>
                    <p className="text-xs text-warm-400 mt-1">Bu sipariş limitiniz dahilindedir.</p>
                  </div>
                )}
                <div className="flex items-center justify-between mt-8">
                  <button type="button" onClick={() => setStep(1)} className="text-warm-500 hover:text-warm-700 text-sm">← Geri</button>
                  <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Devam Et</button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-bold text-warm-900 mb-6">Sipariş Onayı</h2>
                <div className="space-y-4">
                  <div className="bg-warm-50 rounded-xl p-5">
                    <h3 className="font-semibold text-warm-900 mb-3">Sipariş Özeti</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-warm-500">Tedarikçi Sayısı</span><span className="font-medium">2</span></div>
                      <div className="flex justify-between"><span className="text-warm-500">Toplam Kalem</span><span className="font-medium">3</span></div>
                      <div className="flex justify-between"><span className="text-warm-500">Ödeme Yöntemi</span><span className="font-medium">{odemeYontemi === "pesin" ? "Peşin" : "Cari Hesap"}</span></div>
                      <div className="border-t border-warm-200 pt-2 mt-2 flex justify-between"><span className="font-bold text-warm-900">Toplam Tutar</span><span className="font-bold text-xl text-warm-900">₺13.490,00</span></div>
                    </div>
                  </div>
                  <div className="bg-warm-50 rounded-xl p-5">
                    <h3 className="font-semibold text-warm-900 mb-3">Teslimat</h3>
                    <p className="text-sm text-warm-600">İkitelli OSB, Başakşehir, İstanbul</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button type="button" onClick={() => setStep(2)} className="text-warm-500 hover:text-warm-700 text-sm">← Geri</button>
                  <button type="submit" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-light transition-colors font-semibold text-lg">Siparişi Onayla</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
