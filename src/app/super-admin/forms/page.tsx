"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CmsFormsPage() {
  const [forms, setForms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cms/forms").then(r => r.json()).then(d => { setForms(d.data); setLoading(false); });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">📋 Form Yönetimi</h1>
          <p className="text-warm-500 text-sm mt-1">Site formlarını oluşturun ve yönetin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? <p className="text-warm-400">Yükleniyor...</p> : forms.length === 0 ? <p className="text-warm-400">Henüz form yok</p> : forms.map(f => (
          <div key={f.id} className="bg-white rounded-xl border border-warm-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-warm-900">{f.title}</h2>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${f.active ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{f.active ? "Aktif" : "Pasif"}</span>
            </div>
            <div className="space-y-2">
              {(f.fields || []).map((field: any, i: number) => (
                <div key={i} className="flex items-center gap-3 p-2 bg-warm-50 rounded-lg text-sm">
                  <span className="text-xs bg-warm-200 text-warm-600 px-1.5 py-0.5 rounded">{field.type}</span>
                  <span className="text-warm-700">{field.label}</span>
                  {field.required && <span className="text-red-400 text-xs">*zorunlu</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
