"use client";
import { useState } from "react";

export default function OfferForm() {
  const [form, setForm] = useState({
    company: "", name: "", email: "", phone: "",
    material: "", quantity: "", deliveryDate: "", notes: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">Teklif Talebiniz Alındı!</h3>
        <p className="text-green-600 mt-1">Tedarikçiler en kısa sürede size tekliflerini iletecek.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Firma Adı *</label>
          <input type="text" required value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Firma Adı" />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Ad Soyad *</label>
          <input type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Ad Soyad" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">İş E-postası *</label>
          <input type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="ornek@firma.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Telefon</label>
          <input type="tel" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+90 5XX XXX XX XX" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Malzeme / Kategori *</label>
          <select required value={form.material}
            onChange={(e) => setForm({ ...form, material: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
            <option value="">Seçiniz</option>
            <option value="levha">Levha & Pano (MDF, Sunta)</option>
            <option value="kumas">Kumaş & Döşemelik</option>
            <option value="ahsap">Ahşap & Kereste</option>
            <option value="donanim">Donanım & Aksesuar</option>
            <option value="kaplama">Kaplama & Yüzey</option>
            <option value="boya">Boya, Vernik & Kimyasal</option>
            <option value="makine">Makine & Ekipman</option>
            <option value="ambalaj">Ambalaj & Sevkiyat</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Miktar *</label>
          <input type="text" required value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="örn: 500 m², 1000 adet" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-1">Tahmini Teslim Tarihi</label>
        <input type="date" value={form.deliveryDate}
          onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-1">Teknik Notlar / Özel İhtiyaçlar</label>
        <textarea rows={4} value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          placeholder="Varsa eklemek istedikleriniz..." />
      </div>
      <button type="submit"
        className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-light transition-colors font-semibold">
        Teklif İste
      </button>
    </form>
  );
}
