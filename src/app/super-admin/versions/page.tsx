"use client";
import { useState } from "react";
import Link from "next/link";

export default function VersionsPage() {
  const [versions] = useState([
    { id: "v1", entity: "Ana Sayfa", type: "page", version: 3, date: "2026-07-01 10:00", by: "Super Admin", active: true },
    { id: "v2", entity: "Ana Sayfa", type: "page", version: 2, date: "2026-06-28 14:00", by: "Super Admin", active: false },
    { id: "v3", entity: "Ana Sayfa", type: "page", version: 1, date: "2026-06-25 09:00", by: "Super Admin", active: false },
    { id: "v4", entity: "EUDR Rehberi", type: "post", version: 2, date: "2026-06-28 14:30", by: "Super Admin", active: true },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🔄 Versiyon Geçmişi</h1>
          <p className="text-warm-500 text-sm mt-1">Sayfa ve içerik versiyonlarını görüntüleyin, geri alın</p>
        </div>
      </div>

      <div className="space-y-3">
        {["Ana Sayfa", "EUDR Rehberi"].map(entity => (
          <div key={entity} className="bg-white rounded-xl border border-warm-200 p-6">
            <h2 className="font-semibold text-warm-900 mb-4">{entity}</h2>
            <div className="space-y-3">
              {versions.filter(v => v.entity === entity).map(v => (
                <div key={v.id} className={`flex items-center gap-4 p-4 rounded-lg border ${v.active ? "border-primary bg-primary/5" : "border-warm-200"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${v.active ? "bg-primary text-white" : "bg-warm-100 text-warm-500"}`}>v{v.version}</div>
                  <div className="flex-1">
                    <p className="text-sm text-warm-600">{v.date}</p>
                    <p className="text-xs text-warm-400">{v.by}</p>
                  </div>
                  {v.active ? (
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">Aktif</span>
                  ) : (
                    <button className="text-xs bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-primary-dark transition-colors">Geri Al</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
