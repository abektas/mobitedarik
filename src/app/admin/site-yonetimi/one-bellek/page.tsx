"use client";
import { useState } from "react";
import Link from "next/link";

export default function OneBellekPage() {
  const [message, setMessage] = useState("");

  const handleClear = (type: string) => {
    setMessage(`${type} önbelleği temizlendi.`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Önbellek Yönetimi</span>
      </div>
      {message && <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-700">{message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: "Next.js Build Cache", desc: "Derlenmiş sayfalar ve statik dosyalar", btn: "Build Cache Temizle", cmd: "Build" },
          { title: "Next.js Data Cache", desc: "fetch() ve veri önbelleği", btn: "Data Cache Temizle", cmd: "Data" },
          { title: "Tarayıcı Önbelleği", desc: "CSS, JS, görsel önbelleği", btn: "Sürüm Yükselt", cmd: "Browser" },
          { title: "React Server Components", desc: "Sunucu bileşen payload önbelleği", btn: "RSC Cache Temizle", cmd: "RSC" },
          { title: "Turbopack Cache", desc: "Geliştirme derleme önbelleği", btn: "Turbopack Temizle", cmd: "Turbopack" },
          { title: "Next.js Bildirim Önbelleği", desc: "Tüm bildirim verileri", btn: "Tamamen Temizle", cmd: "Full" },
        ].map(c => (
          <div key={c.title} className="bg-white rounded-xl border border-warm-200 p-5">
            <h3 className="font-semibold text-warm-900 text-sm">{c.title}</h3>
            <p className="text-xs text-warm-400 mt-1 mb-4">{c.desc}</p>
            <button onClick={() => handleClear(c.cmd)} className="bg-primary text-white text-xs px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">{c.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
