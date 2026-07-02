"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firmaAdi: "", vergiNo: "", firmaTipi: "kucuk-isletme",
    ad: "", email: "", telefon: "", sifre: "", sifreTekrar: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-warm-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold text-warm-900 mb-2">Kayıt Başarılı!</h2>
          <p className="text-warm-500 mb-6">Hesabınız oluşturuldu. Giriş yaparak panele erişebilirsiniz.</p>
          <Link href="/giris" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-block">Giriş Yap</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl border border-warm-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-warm-900">Alıcı Hesabı Oluşturun</h1>
            <p className="text-warm-500 text-sm mt-1">Mobilya fabrikanız veya atölyeniz için kayıt olun</p>
          </div>

          {/* Adım gösterge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? "bg-primary text-white" : "bg-warm-100 text-warm-400"}`}>1</div>
            <div className="w-12 h-0.5 bg-warm-200"><div className={`h-full bg-primary transition-all ${step >= 2 ? "w-full" : "w-0"}`} /></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? "bg-primary text-white" : "bg-warm-100 text-warm-400"}`}>2</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <h2 className="font-semibold text-warm-900">Firma Bilgileri</h2>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Firma Adı *</label>
                  <input type="text" name="firmaAdi" required value={form.firmaAdi} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Firma Adı" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Vergi No *</label>
                    <input type="text" name="vergiNo" required value={form.vergiNo} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="Vergi No" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Firma Tipi</label>
                    <select name="firmaTipi" value={form.firmaTipi} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all">
                      <option value="fabrika">Fabrika</option>
                      <option value="kucuk-isletme">Küçük İşletme</option>
                      <option value="atolye">Atölye</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Devam Et</button>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-semibold text-warm-900">Yetkili Bilgileri</h2>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Ad Soyad *</label>
                  <input type="text" name="ad" required value={form.ad} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="Ad Soyad" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">E-posta *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="ornek@firma.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Telefon</label>
                    <input type="tel" name="telefon" value={form.telefon} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="+90 5XX" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Şifre *</label>
                    <input type="password" name="sifre" required value={form.sifre} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Şifre Tekrar *</label>
                    <input type="password" name="sifreTekrar" required value={form.sifreTekrar} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary outline-none transition-all" placeholder="••••••" />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button type="button" onClick={() => setStep(1)} className="text-warm-500 hover:text-warm-700 text-sm">← Geri</button>
                  <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">Kayıt Ol</button>
                </div>
              </>
            )}
          </form>

          <p className="text-center text-sm text-warm-500 mt-6">
            Zaten hesabınız var mı? <Link href="/giris" className="text-primary hover:underline font-medium">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
