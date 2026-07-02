"use client";
import { useState } from "react";
import Link from "next/link";

export default function CmsSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "MobiTedarik",
    supportEmail: "destek@mobitedarik.com",
    itemsPerPage: "24",
    maintenanceMode: "false",
    defaultLanguage: "tr",
    dateFormat: "YYYY-MM-DD",
  });
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">⚙️ CMS Ayarları</h1>
          <p className="text-warm-500 text-sm mt-1">İçerik yönetim sistemi yapılandırması</p>
        </div>
        <button onClick={save} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold">{saved ? "✓ Kaydedildi" : "Kaydet"}</button>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { key: "siteName", label: "Site Adı", type: "text" },
            { key: "supportEmail", label: "Destek E-postası", type: "email" },
            { key: "itemsPerPage", label: "Sayfa Başına Öğe", type: "number" },
            { key: "defaultLanguage", label: "Varsayılan Dil", type: "select", options: [{ value: "tr", label: "Türkçe" }, { value: "en", label: "English" }] },
            { key: "dateFormat", label: "Tarih Formatı", type: "select", options: [{ value: "YYYY-MM-DD", label: "2026-07-01" }, { value: "DD.MM.YYYY", label: "01.07.2026" }] },
            { key: "maintenanceMode", label: "Bakım Modu", type: "select", options: [{ value: "false", label: "Kapalı" }, { value: "true", label: "Açık" }] },
          ].map(field => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-warm-700 mb-1">{field.label}</label>
              {field.type === "select" ? (
                <select value={settings[field.key as keyof typeof settings]} onChange={e => setSettings({ ...settings, [field.key]: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm">
                  {field.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ) : (
                <input type={field.type} value={settings[field.key as keyof typeof settings]} onChange={e => setSettings({ ...settings, [field.key]: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
