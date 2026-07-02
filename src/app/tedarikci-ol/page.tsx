"use client";
import { useState } from "react";
import Link from "next/link";

export default function TedarikciOlPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firmaAdi: "", vergiNo: "", sanayiSicilNo: "",
    ad: "", email: "", telefon: "",
    kategoriler: [] as string[],
    sifre: "", sifreTekrar: "",
  });
  const [success, setSuccess] = useState(false);

  const kategorilerList = [
    "Levha & Pano", "Kumaş & Döşemelik", "Ahşap & Kereste",
    "Donanım & Aksesuar", "Kaplama & Yüzey", "Boya, Vernik & Kimyasal",
    "Makine & Ekipman", "Ambalaj & Sevkiyat",
  ];

  const toggleKategori = (kat: string) => {
    setForm(prev => ({
      ...prev,
      kategoriler: prev.kategoriler.includes(kat)
        ? prev.kategoriler.filter(k => k !== kat)
        : [...prev.kategoriler, kat],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    if (step === 2) { setStep(3); return; }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-warm-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold text-warm-900 mb-2">Başvurunuz Alındı!</h2>
          <p className="text-warm-500 mb-6">Tedarikçi başvurunuz admin ekibimiz tarafından incelenecektir. Sonuç e-posta ile bildirilecektir.</p>
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-block">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-warm-900">Tedarikçi Olun</h1>
          <p className="text-warm-500 mt-1">Malzemelerinizi binlerce mobilya üreticisine ulaştırın</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= s ? "bg-primary text-white" : "bg-warm-100 text-warm-400"}`}>{s}</div>
              {s < 3 && <div className="w-12 h-0.5 bg-warm-200"><div className={`h-full bg-primary transition-all ${step > s ? "w-full" : "w-0"}`} /></div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-warm-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <>
                <h2 className="font-semibold text-warm-900 text-lg">Firma Bilgileri</h2>
                <div><label className="block text-sm font-medium text-warm-700 mb-1">Firma Adı *</label><input type="text" name="firmaAdi" required value={form.firmaAdi} onChange={e => setForm({...form, firmaAdi: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">Vergi No *</label><input type="text" name="vergiNo" required value={form.vergiNo} onChange={e => setForm({...form, vergiNo: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">Sanayi Sicil No</label><input type="text" name="sanayiSicilNo" value={form.sanayiSicilNo} onChange={e => setForm({...form, sanayiSicilNo: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                </div>
                <div className="pt-4 flex justify-end"><button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Devam Et</button></div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-semibold text-warm-900 text-lg">Hangi Kategorilerde Satış Yapacaksınız?</h2>
                <p className="text-sm text-warm-500">Bir veya daha fazla kategori seçin.</p>
                <div className="grid grid-cols-2 gap-3">
                  {kategorilerList.map((kat) => (
                    <button key={kat} type="button" onClick={() => toggleKategori(kat)} className={`p-4 rounded-xl border text-left transition-all text-sm ${form.kategoriler.includes(kat) ? "bg-primary/5 border-primary text-primary font-medium" : "bg-white border-warm-200 text-warm-600 hover:border-warm-300"}`}>
                      {form.kategoriler.includes(kat) && <span className="text-primary mr-1">✓</span>}
                      {kat}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button type="button" onClick={() => setStep(1)} className="text-warm-500 hover:text-warm-700 text-sm">← Geri</button>
                  <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold" disabled={form.kategoriler.length === 0}>Devam Et</button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-semibold text-warm-900 text-lg">Yetkili Bilgileri</h2>
                <div><label className="block text-sm font-medium text-warm-700 mb-1">Ad Soyad *</label><input type="text" required value={form.ad} onChange={e => setForm({...form, ad: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">E-posta *</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">Telefon</label><input type="tel" value={form.telefon} onChange={e => setForm({...form, telefon: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">Şifre *</label><input type="password" required value={form.sifre} onChange={e => setForm({...form, sifre: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                  <div><label className="block text-sm font-medium text-warm-700 mb-1">Şifre Tekrar *</label><input type="password" required value={form.sifreTekrar} onChange={e => setForm({...form, sifreTekrar: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" /></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button type="button" onClick={() => setStep(2)} className="text-warm-500 hover:text-warm-700 text-sm">← Geri</button>
                  <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Başvuruyu Tamamla</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
