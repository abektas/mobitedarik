"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavigationPage() {
  const [nav, setNav] = useState({
    header: [
      { label: "Levha & Pano", url: "/kategori/levha-pano", children: [{ label: "MDF", url: "/kategori/levha-pano?s=MDF" }, { label: "Sunta", url: "/kategori/levha-pano?s=Sunta" }] },
      { label: "Kumaş & Döşemelik", url: "/kategori/kumas-dosemelik" },
      { label: "Donanım", url: "/kategori/donanim-aksesuar" },
      { label: "Çin'den Tedarik", url: "/cinden-tedarik" },
    ],
    footer: [
      { label: "Hakkımızda", url: "/hakkimizda" },
      { label: "İletişim", url: "/iletisim" },
      { label: "Gündem", url: "/gundem" },
    ],
  });
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addItem = (location: "header" | "footer") => {
    const label = prompt("Menü başlığı:");
    if (!label) return;
    const url = prompt("URL:");
    if (!url) return;
    setNav({ ...nav, [location]: [...nav[location], { label, url }] });
  };

  const deleteItem = (location: "header" | "footer", idx: number) => {
    setNav({ ...nav, [location]: nav[location].filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🧭 Navigasyon Yönetimi</h1>
          <p className="text-warm-500 text-sm mt-1">Header, footer ve mobil menüleri düzenleyin</p>
        </div>
        <button onClick={save} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold">{saved ? "✓ Kaydedildi" : "Kaydet"}</button>
      </div>

      {(["header", "footer"] as const).map(location => (
        <div key={location} className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-warm-900 capitalize">{location} Menüsü</h2>
            <button onClick={() => addItem(location)} className="text-primary text-sm hover:underline">+ Öğe Ekle</button>
          </div>
          <div className="space-y-2">
            {nav[location].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-warm-50 rounded-lg">
                <span className="cursor-grab text-warm-300">⠿</span>
                <div className="flex-1">
                  <input type="text" value={item.label} onChange={e => { const newNav = { ...nav }; newNav[location][idx] = { ...newNav[location][idx], label: e.target.value }; setNav(newNav); }} className="px-2 py-1 rounded border border-warm-200 text-sm focus:border-primary outline-none w-48" />
                  <input type="text" value={item.url} onChange={e => { const newNav = { ...nav }; newNav[location][idx] = { ...newNav[location][idx], url: e.target.value }; setNav(newNav); }} className="ml-2 px-2 py-1 rounded border border-warm-200 text-sm font-mono text-warm-500 focus:border-primary outline-none w-64" />
                </div>
                <button onClick={() => deleteItem(location, idx)} className="text-xs text-red-500 hover:text-red-600">Sil</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
