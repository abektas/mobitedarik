"use client";
import { useState } from "react";
import Link from "next/link";

export default function MediaPage() {
  const [media] = useState([
    { id: "m1", name: "hero-bg.jpg", size: "245 KB", dim: "1920x800", date: "2026-06-28" },
    { id: "m2", name: "mdf-urun.jpg", size: "128 KB", dim: "800x600", date: "2026-06-25" },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🖼️ Medya Kütüphanesi</h1>
          <p className="text-warm-500 text-sm mt-1">Görsel, dosya ve medya yönetimi</p>
        </div>
        <label className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold cursor-pointer">+ Yükle<input type="file" multiple className="hidden" accept="image/*" /></label>
      </div>

      <div className="border-2 border-dashed border-warm-300 rounded-xl p-10 text-center hover:border-primary transition-colors cursor-pointer mb-6">
        <p className="text-3xl mb-2">📁</p>
        <p className="text-warm-500 font-medium">Dosyaları sürükleyip bırakın</p>
        <p className="text-xs text-warm-300 mt-1">PNG, JPG, WEBP, SVG — Max 10MB</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {media.map(m => (
          <div key={m.id} className="group bg-warm-50 rounded-xl border border-warm-200 overflow-hidden hover:shadow-md cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center"><span className="text-3xl">🖼️</span></div>
            <div className="p-2"><p className="text-[10px] text-warm-700 truncate">{m.name}</p><p className="text-[9px] text-warm-400">{m.size}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
