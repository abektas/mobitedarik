"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { productTemplates } from "@/data/attribute-dictionary";

export default function KatalogYonetPage() {
  const router = useRouter();
  const [importType, setImportType] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Link href="/tedarikci-panel" className="text-warm-400 hover:text-warm-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></Link>
        <h1 className="text-xl font-bold text-warm-900">📦 Katalog Yönetimi</h1>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
        <h2 className="font-semibold text-warm-900 mb-2">Toplu Ürün Yükle</h2>
        <p className="text-sm text-warm-500 mb-4">Excel, CSV, PDF veya ERP çıktınızı yükleyin, AI analiz etsin.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { key: "excel", label: "Excel", icon: "📊", desc: ".xlsx, .xls" },
            { key: "csv", label: "CSV", icon: "📄", desc: ".csv" },
            { key: "pdf", label: "PDF Katalog", icon: "📕", desc: "PDF'den çıkar" },
            { key: "zip", label: "ZIP Görsel", icon: "📦", desc: "Toplu fotoğraf" },
            { key: "url", label: "Web Sitesi", icon: "🌐", desc: "URL'den çek" },
            { key: "erp", label: "ERP Çıktısı", icon: "🏢", desc: "Logo/Mikro" },
          ].map(item => (
            <button key={item.key} onClick={() => setImportType(item.key)} className={`p-4 rounded-xl border text-center transition-all ${importType === item.key ? "border-primary bg-primary/5" : "border-warm-200 hover:border-warm-300"}`}>
              <span className="text-2xl block mb-1">{item.icon}</span>
              <span className="text-sm font-medium text-warm-900">{item.label}</span>
              <p className="text-[10px] text-warm-400">{item.desc}</p>
            </button>
          ))}
        </div>

        {importType && !uploaded && (
          <div className="border-2 border-dashed border-warm-300 rounded-xl p-10 text-center hover:border-primary transition-all cursor-pointer" onClick={() => setUploaded(true)}>
            <p className="text-3xl mb-2">📁</p>
            <p className="text-warm-500 font-medium">Dosyayı sürükleyin veya seçin</p>
            <p className="text-xs text-warm-300 mt-1">{importType === "excel" ? "Excel şablonu: Ürün Adı | Kategori | Birim | Fiyat | Stok" : "Tüm formatlar desteklenir"}</p>
          </div>
        )}

        {uploaded && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-green-800">AI Analiz Tamamlandı</p>
                <p className="text-sm text-green-600">24 ürün bulundu, 22'si başarıyla ayrıştırıldı</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 max-h-40 overflow-y-auto mb-4">
              <table className="w-full text-xs">
                <thead className="bg-green-50 sticky top-0"><tr><th className="p-2 text-left text-green-700">Ürün</th><th className="p-2 text-left text-green-700">Kategori</th><th className="p-2 text-left text-green-700">Fiyat</th><th className="p-2 text-left text-green-700">Durum</th></tr></thead>
                <tbody className="divide-y divide-green-100">
                  {["18mm MDF-Lam Beyaz", "25mm MDF-Lam Akçaağaç", "16mm Sunta"].map((u, i) => (
                    <tr key={i} className={i === 2 ? "bg-red-50" : ""}>
                      <td className="p-2 text-warm-800">{u}</td>
                      <td className="p-2 text-warm-500">Levha & Pano</td>
                      <td className="p-2 text-warm-800">₺45.50</td>
                      <td className="p-2"><span className={i === 2 ? "text-red-500" : "text-green-600"}>{i === 2 ? "Eksik veri" : "✅ Hazır"}</span></td>
                    </tr>
                  ))}
                  <tr><td className="p-2 text-warm-400 italic" colSpan={4}>+ 19 ürün daha</td></tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark text-sm font-semibold">22 Ürünü Yayınla</button>
              <button className="bg-white border border-green-300 text-green-700 px-6 py-2.5 rounded-lg hover:bg-green-50 text-sm font-medium">Düzenle</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="font-semibold text-warm-900 mb-4">📋 Ürün Şablonları</h2>
        <p className="text-sm text-warm-500 mb-4">Sık kullandığınız ürün tipleri için hazır şablonlar</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {productTemplates.map(t => (
            <button key={t.key} onClick={() => router.push(`/tedarikci-panel/urunlerim/hizli-ekle?template=${t.key}`)} className="p-3 rounded-lg border border-warm-200 hover:border-primary hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium text-warm-900">{t.name}</span>
              <p className="text-[10px] text-warm-400">{t.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
