"use client";
import { useState } from "react";
import Link from "next/link";

export default function TaslaklarPage() {
  const [drafts] = useState([
    { id: "d1", name: "25mm MDF-Lam Akçaağaç", step: "Fiyat & Stok", progress: 60, saved: "10 dk önce" },
    { id: "d2", name: "Döşemelik Kumaş Keten Bej", step: "Fotoğraf", progress: 80, saved: "25 dk önce" },
    { id: "d3", name: "Endüstriyel Menteşe 110°", step: "Temel Bilgi", progress: 30, saved: "1 saat önce" },
  ]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Link href="/tedarikci-panel" className="text-warm-400 hover:text-warm-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></Link>
        <h1 className="text-xl font-bold text-warm-900">📝 Taslaklar</h1>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
        <h2 className="font-semibold text-warm-900 mb-2">Kaldığınız Yerden Devam Edin</h2>
        <p className="text-sm text-warm-500 mb-6">Yarıda bıraktığınız ürün girişlerini tamamlayın. Tüm bilgileriniz otomatik kaydedilir.</p>

        {drafts.length === 0 ? (
          <div className="bg-warm-50 rounded-xl p-8 text-center">
            <p className="text-warm-400">Kaydedilmiş taslak bulunmuyor.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {drafts.map(d => (
              <div key={d.id} className="flex items-center gap-4 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">T</div>
                <div className="flex-1">
                  <p className="font-medium text-warm-900">{d.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-warm-400">
                    <span>{d.step}</span>
                    <div className="w-24 h-1.5 bg-warm-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${d.progress}%` }} />
                    </div>
                    <span>%{d.progress}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-warm-400">{d.saved}</p>
                  <Link href="/tedarikci-panel/urunlerim/hizli-ekle" className="text-primary text-xs font-medium hover:underline">Devam Et →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
