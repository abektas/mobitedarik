"use client";
import { useState } from "react";
import Link from "next/link";

export default function SchedulerPage() {
  const [schedules] = useState<any[]>([]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">⏰ Zamanlayıcı</h1>
          <p className="text-warm-500 text-sm mt-1">Planlı yayın, yayından kaldırma ve arşivleme işlemleri</p>
        </div>
      </div>

      {schedules.length === 0 ? (
        <div className="bg-white rounded-xl border border-warm-200 p-16 text-center">
          <p className="text-3xl mb-3">📅</p>
          <h2 className="text-lg font-semibold text-warm-900 mb-2">Planlanmış İşlem Yok</h2>
          <p className="text-warm-400 text-sm">Henüz bir zamanlama bulunmuyor</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-warm-50"><tr><th className="text-left p-4 font-semibold text-warm-700">İçerik</th><th className="text-left p-4 font-semibold text-warm-700">İşlem</th><th className="text-left p-4 font-semibold text-warm-700">Planlanan</th><th className="text-left p-4 font-semibold text-warm-700">Durum</th><th className="text-right p-4 font-semibold text-warm-700">İşlem</th></tr></thead>
            <tbody className="divide-y divide-warm-200">{schedules.map(s => <tr key={s.id}><td className="p-4">—</td></tr>)}</tbody>
          </table>
        </div>
      )}

      <div className="mt-6 bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-sm font-semibold text-warm-900 mb-4">Yeni Zamanlama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div><label className="block text-xs font-medium text-warm-700 mb-1">İçerik</label><select className="w-full px-3 py-2.5 rounded-lg border border-warm-300 text-sm"><option>Sayfa seçin</option><option>Ana Sayfa</option><option>Hakkımızda</option></select></div>
          <div><label className="block text-xs font-medium text-warm-700 mb-1">İşlem</label><select className="w-full px-3 py-2.5 rounded-lg border border-warm-300 text-sm"><option>Yayınla</option><option>Yayından Kaldır</option><option>Arşivle</option></select></div>
          <div><label className="block text-xs font-medium text-warm-700 mb-1">Tarih & Saat</label><input type="datetime-local" className="w-full px-3 py-2.5 rounded-lg border border-warm-300 text-sm" /></div>
          <div className="flex items-end"><button className="bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-dark text-sm font-medium w-full">Planla</button></div>
        </div>
      </div>
    </div>
  );
}
