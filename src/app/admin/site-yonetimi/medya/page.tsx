"use client";
import { useState } from "react";
import Link from "next/link";

export default function MedyaKutuphanesiPage() {
  const [media] = useState([
    { id: "1", name: "hero-bg.jpg", type: "image/jpeg", size: "245 KB", dimensions: "1920x800", date: "2026-06-28", url: "#" },
    { id: "2", name: "mdf-urun.jpg", type: "image/jpeg", size: "128 KB", dimensions: "800x600", date: "2026-06-25", url: "#" },
    { id: "3", name: "tedarikci-logo.png", type: "image/png", size: "64 KB", dimensions: "400x400", date: "2026-06-20", url: "#" },
  ]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Medya Kütüphanesi</span>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-warm-900">🖼️ Medya Kütüphanesi</h2>
          <label className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold cursor-pointer">
            + Dosya Yükle
            <input type="file" multiple className="hidden" accept="image/*,.pdf,.svg" />
          </label>
        </div>

        {/* Yükleme alanı */}
        <div className="border-2 border-dashed border-warm-300 rounded-xl p-10 text-center hover:border-primary transition-colors cursor-pointer mb-6">
          <p className="text-3xl mb-2">📁</p>
          <p className="text-warm-500 font-medium">Dosyaları sürükleyip bırakın veya seçin</p>
          <p className="text-xs text-warm-300 mt-1">PNG, JPG, WEBP, SVG, PDF — Max 10MB</p>
        </div>

        {/* Medya grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {media.map(m => (
            <div key={m.id} className="group relative bg-warm-50 rounded-xl border border-warm-200 overflow-hidden hover:shadow-md transition-all cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center">
                <span className="text-3xl">🖼️</span>
              </div>
              <div className="p-2">
                <p className="text-[10px] text-warm-700 truncate">{m.name}</p>
                <p className="text-[9px] text-warm-400">{m.size}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="bg-white text-xs px-2 py-1 rounded-lg">📋 Kopyala</button>
                <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
