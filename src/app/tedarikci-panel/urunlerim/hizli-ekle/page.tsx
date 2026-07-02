"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { kategoriler } from "@/data/site-data";
import { productTemplates } from "@/data/attribute-dictionary";

function HizliEkleContent() {
  const searchParams = useSearchParams();
  const templateKey = searchParams.get("template");

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    kategori: "", urunAdi: "", birim: "m²", fiyat: "", stok: "icinde", aciklama: "",
    teknikOzellikler: {} as Record<string, string>,
  });
  const [success, setSuccess] = useState(false);

  const selectedTemplate = templateKey ? productTemplates.find(t => t.key === templateKey) : null;
  const selectedKategori = kategoriler.find(k => k.id === form.kategori);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) { setStep(s => s + 1); return; }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-xl font-bold text-green-800 mb-2">✅ Ürün Yayında!</h2>
        <p className="text-green-600 mb-6">Ürününüz başarıyla eklendi ve yayına alındı.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setSuccess(false); setStep(1); setForm({kategori:"",urunAdi:"",birim:"m²",fiyat:"",stok:"icinde",aciklama:"",teknikOzellikler:{}}); }} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark font-semibold">Yeni Ürün Ekle</button>
          <Link href="/tedarikci-panel/urunlerim" className="bg-warm-100 text-warm-700 px-6 py-3 rounded-lg hover:bg-warm-200 font-semibold">Ürünlerime Dön</Link>
        </div>
      </div>
    );
  }

  const progressPercent = (step / 4) * 100;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Link href="/tedarikci-panel/urunlerim" className="text-warm-400 hover:text-warm-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></Link>
        <h1 className="text-xl font-bold text-warm-900">⚡ Hızlı Ürün Ekle</h1>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl border border-warm-200 p-4 mb-6">
        <div className="flex items-center justify-between text-xs text-warm-400 mb-2">
          <span className={step >= 1 ? "text-primary font-medium" : ""}>📁 Kategori</span>
          <span className={step >= 2 ? "text-primary font-medium" : ""}>📝 Temel Bilgi</span>
          <span className={step >= 3 ? "text-primary font-medium" : ""}>💰 Fiyat & Stok</span>
          <span className={step >= 4 ? "text-primary font-medium" : ""}>📸 Fotoğraf</span>
        </div>
        <div className="h-2 bg-warm-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <p className="text-xs text-warm-400 mt-2 text-right">{step}/4 adım</p>
      </div>

      <div className="bg-white rounded-2xl border border-warm-200 p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Kategori */}
          {step === 1 && (
            <>
              <h2 className="font-semibold text-warm-900">Hangi kategoride satış yapacaksınız?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {kategoriler.map(k => (
                  <button key={k.id} type="button" onClick={() => setForm({...form, kategori: k.id})} className={`p-4 rounded-xl border text-left transition-all text-sm ${form.kategori === k.id ? "bg-primary/5 border-primary text-primary font-medium" : "border-warm-200 text-warm-600 hover:border-warm-300"}`}>
                    {k.ad}
                    <p className="text-[10px] text-warm-400 mt-0.5">{k.urunSayisi} ürün</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Temel Bilgi */}
          {step === 2 && (
            <>
              <h2 className="font-semibold text-warm-900">Temel Bilgiler</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Ürün Adı *</label>
                  <input type="text" required value={form.urunAdi} onChange={e => setForm({...form, urunAdi: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="Örn: 18mm MDF-Lam Beyaz" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Açıklama</label>
                  <textarea rows={3} value={form.aciklama} onChange={e => setForm({...form, aciklama: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all resize-none" placeholder="Ürün açıklaması..." />
                </div>

                {/* Dinamik teknik özellikler */}
                {selectedKategori && selectedKategori.teknikOzellikSablonu.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-2">Teknik Özellikler</label>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedKategori.teknikOzellikSablonu.map((oz) => (
                        <div key={oz}>
                          <label className="block text-xs text-warm-500 mb-0.5 capitalize">{oz.replace(/-/g, ' ')}</label>
                          <input type="text" value={form.teknikOzellikler[oz] || ""} onChange={e => setForm({...form, teknikOzellikler: {...form.teknikOzellikler, [oz]: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder={oz === "kalınlık" ? "18mm" : oz === "ebat" ? "2800x2070" : oz} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Step 3: Fiyat & Stok */}
          {step === 3 && (
            <>
              <h2 className="font-semibold text-warm-900">Fiyat & Stok</h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Birim Fiyat *</label>
                  <div className="flex items-center gap-2">
                    <span className="text-warm-500">₺</span>
                    <input type="number" step="0.01" required value={form.fiyat} onChange={e => setForm({...form, fiyat: e.target.value})} className="flex-1 px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none" placeholder="45.50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Birim</label>
                  <select value={form.birim} onChange={e => setForm({...form, birim: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none">
                    <option value="m²">m²</option><option value="adet">Adet</option><option value="kg">Kg</option><option value="m³">m³</option><option value="rulo">Rulo</option><option value="takım">Takım</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Stok Durumu</label>
                  <select value={form.stok} onChange={e => setForm({...form, stok: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none">
                    <option value="icinde">Stokta</option><option value="sinirli">Sınırlı</option><option value="siparis-uzerine">Sipariş Üzerine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">MOQ</label>
                  <input type="number" className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none" placeholder="1" />
                </div>
              </div>
            </>
          )}

          {/* Step 4: Fotoğraf */}
          {step === 4 && (
            <>
              <h2 className="font-semibold text-warm-900">Fotoğraf Yükle</h2>
              <div className="border-2 border-dashed border-warm-300 rounded-xl p-10 text-center hover:border-primary transition-all cursor-pointer">
                <p className="text-4xl mb-2">📸</p>
                <p className="text-warm-500 font-medium">Fotoğraf çekin veya yükleyin</p>
                <p className="text-xs text-warm-300 mt-1">PNG, JPG, WEBP — İlk fotoğraf ürün görseli olur</p>
              </div>
              <div className="flex gap-3 justify-center">
                <button type="button" className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">📷 Kamerayı Aç</button>
                <label className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer">📁 Dosya Seç<input type="file" accept="image/*" className="hidden" /></label>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-warm-200">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(s => s - 1)} className="text-warm-500 hover:text-warm-700 text-sm font-medium">← Geri</button>
            ) : (
              <div />
            )}
            <button type="submit" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-light font-semibold">
              {step === 4 ? "✅ Yayınla" : "Devam Et →"}
            </button>
          </div>
        </form>
      </div>

      <p className="text-xs text-warm-400 mt-4 text-center">💡 İlerlemeniz otomatik kaydedilir. Kaldığınız yerden devam edebilirsiniz.</p>
    </div>
  );
}

export default function HizliEklePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-warm-400">Yükleniyor...</div>}>
      <HizliEkleContent />
    </Suspense>
  );
}
