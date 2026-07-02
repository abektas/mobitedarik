"use client";
import { useState } from "react";
import Link from "next/link";

export default function DesignPage() {
  const [tokens, setTokens] = useState({
    colors: { primary: "#1a5e3a", "primary-light": "#2a7a4e", "primary-dark": "#0f4228", accent: "#c8703a", "accent-light": "#db8a56", secondary: "#5b7b4a", background: "#f7f6f4", foreground: "#2c2a26" },
    radius: { default: "0.75rem", lg: "1rem", xl: "1.25rem" },
  });
  const [saved, setSaved] = useState(false);

  const updateColor = (key: string, value: string) => {
    setTokens({ ...tokens, colors: { ...tokens.colors, [key]: value } });
  };

  const saveTheme = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🎨 Tema & Tasarım</h1>
          <p className="text-warm-500 text-sm mt-1">Site renklerini, yazı tiplerini ve görsel stilleri yönetin</p>
        </div>
        <button onClick={saveTheme} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold">{saved ? "✓ Kaydedildi" : "Kaydet"}</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-warm-200 p-6">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Renkler</h2>
          <div className="space-y-3">
            {Object.entries(tokens.colors).map(([key, val]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="text-sm text-warm-600 w-32 capitalize">{key.replace(/-/g, ' ')}</span>
                <input type="color" value={val as string} onChange={e => updateColor(key, e.target.value)} className="w-10 h-10 rounded-lg border border-warm-200 cursor-pointer" />
                <input type="text" value={val as string} onChange={e => updateColor(key, e.target.value)} className="flex-1 px-3 py-2 rounded-lg border border-warm-200 text-sm font-mono focus:border-primary outline-none" />
                <div className="w-8 h-8 rounded-full border border-warm-200" style={{ backgroundColor: val as string }} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-warm-200 p-6">
            <h2 className="text-lg font-semibold text-warm-900 mb-4">Köşe Yuvarlaklığı</h2>
            <div className="space-y-3">
              {Object.entries(tokens.radius).map(([key, val]) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="text-sm text-warm-600 w-32 capitalize">{key}</span>
                  <input type="range" min="0" max="2" step="0.25" value={parseFloat(val as string)} onChange={e => setTokens({ ...tokens, radius: { ...tokens.radius, [key]: `${e.target.value}rem` } })} className="flex-1" />
                  <span className="text-sm font-mono text-warm-500 w-20">{val as string}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-warm-200 p-6">
            <h2 className="text-lg font-semibold text-warm-900 mb-4">Canlı Önizleme</h2>
            <div className="rounded-xl p-6 border text-center" style={{ backgroundColor: tokens.colors.background, borderRadius: tokens.radius.lg }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: tokens.colors.primary, borderRadius: tokens.radius.default }}>Birincil Buton</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold ml-2" style={{ backgroundColor: tokens.colors.accent, borderRadius: tokens.radius.default }}>Aksan Buton</div>
              <div className="mt-4 text-sm" style={{ color: tokens.colors.foreground }}>Önizleme metni</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
