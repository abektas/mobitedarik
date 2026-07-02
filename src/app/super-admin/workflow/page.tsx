"use client";
import { useState } from "react";
import Link from "next/link";

export default function WorkflowPage() {
  const [approvals] = useState<any[]>([]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">📋 İş Akışı & Onaylar</h1>
          <p className="text-warm-500 text-sm mt-1">İçerik onay süreçlerini yönetin</p>
        </div>
      </div>

      {approvals.length === 0 ? (
        <div className="bg-white rounded-xl border border-warm-200 p-16 text-center">
          <p className="text-3xl mb-3">✅</p>
          <h2 className="text-lg font-semibold text-warm-900 mb-2">Bekleyen Onay Yok</h2>
          <p className="text-warm-400 text-sm">Tüm içerikler güncel ve yayında</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-warm-50"><tr><th className="text-left p-4 font-semibold text-warm-700">İçerik</th><th className="text-left p-4 font-semibold text-warm-700">Tür</th><th className="text-left p-4 font-semibold text-warm-700">Durum</th><th className="text-left p-4 font-semibold text-warm-700">Talep Eden</th><th className="text-right p-4 font-semibold text-warm-700">İşlem</th></tr></thead>
            <tbody className="divide-y divide-warm-200">{approvals.map(a => <tr key={a.id}><td className="p-4">—</td></tr>)}</tbody>
          </table>
        </div>
      )}

      <div className="mt-6 bg-warm-50 rounded-xl border border-warm-200 p-6">
        <h2 className="text-sm font-semibold text-warm-900 mb-3">İçerik Yaşam Döngüsü</h2>
        <div className="flex items-center justify-between text-xs text-warm-500">
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-warm-200 flex items-center justify-center text-warm-500 font-medium">1</div>Taslak</div>
          <div className="w-8 h-0.5 bg-warm-200" />
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium">2</div>İncelemede</div>
          <div className="w-8 h-0.5 bg-warm-200" />
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">3</div>Onaylandı</div>
          <div className="w-8 h-0.5 bg-warm-200" />
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">4</div>Yayınlandı</div>
          <div className="w-8 h-0.5 bg-warm-200" />
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-warm-200 flex items-center justify-center text-warm-500 font-medium">5</div>Arşiv</div>
        </div>
      </div>
    </div>
  );
}
