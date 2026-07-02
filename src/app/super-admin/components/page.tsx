"use client";
import { useState, useEffect } from "react";

export default function ComponentsPage() {
  const [components, setComponents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetch("/api/cms/components")
      .then(r => r.json())
      .then(d => { setComponents(d.data); setLoading(false); });
  }, []);

  const categoryLabels: Record<string, string> = {
    content: "İçerik", media: "Medya", layout: "Düzen", form: "Form", navigation: "Navigasyon", custom: "Özel",
  };
  const categoryColors: Record<string, string> = {
    content: "bg-blue-50 text-blue-600", media: "bg-green-50 text-green-600", layout: "bg-purple-50 text-purple-600",
    form: "bg-pink-50 text-pink-600", navigation: "bg-amber-50 text-amber-600", custom: "bg-warm-100 text-warm-600",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🧩 Bileşenler</h1>
          <p className="text-warm-500 text-sm mt-1">Sayfa oluştururken kullanabileceğiniz bileşen kütüphanesi</p>
        </div>
      </div>

      {loading ? (
        <p className="text-warm-400">Yükleniyor...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {components.map((c: any) => (
            <button key={c.key} onClick={() => setSelected(c)} className="text-left bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase ${categoryColors[c.category] || "bg-warm-100 text-warm-500"}`}>{categoryLabels[c.category] || c.category}</span>
              <h3 className="font-semibold text-warm-900 mt-2">{c.name}</h3>
              <p className="text-xs text-warm-400 mt-1 font-mono">{c.key}</p>
            </button>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-warm-900">{selected.name}</h2>
              <button onClick={() => setSelected(null)} className="text-warm-400 hover:text-warm-600 text-xl">✕</button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-warm-400">Anahtar:</span><p className="font-mono text-warm-800">{selected.key}</p></div>
                <div><span className="text-warm-400">Kategori:</span><p className="text-warm-800 capitalize">{categoryLabels[selected.category] || selected.category}</p></div>
              </div>
              <div className="bg-warm-50 rounded-xl p-6 text-center">
                <p className="text-warm-400 text-sm">Bu bileşen görsel düzenleyicide kullanılabilir.</p>
                <p className="text-xs text-warm-300 mt-1">Sayfa düzenleyicide eklemek için bir sayfa açın ve &quot;+ Bölüm Ekle&quot; butonunu kullanın.</p>
              </div>
              <div className="flex justify-end gap-3">
                <button onClick={() => setSelected(null)} className="px-4 py-2 text-sm text-warm-600 hover:text-warm-800 transition-colors">Kapat</button>
                <button onClick={() => { setSelected(null); window.location.href = "/super-admin/pages"; }} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-medium">Sayfalara Git</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
