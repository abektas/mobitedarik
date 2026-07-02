"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PageItem {
  id: string;
  title: string;
  slug: string;
  status: string;
  createdAt?: string;
}

export default function CmsPagesPage() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [newPage, setNewPage] = useState({ title: "", slug: "" });

  useEffect(() => {
    fetch("/api/cms/pages")
      .then(r => r.json())
      .then(d => { setPages(d.data); setLoading(false); });
  }, []);

  const addPage = async () => {
    if (!newPage.title) return;
    const res = await fetch("/api/cms/pages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: newPage.title, slug: newPage.slug || "/" + newPage.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') }) });
    const d = await res.json();
    setPages([...pages, d.data]);
    setNewPage({ title: "", slug: "" });
    setShowNew(false);
  };

  const deletePage = async (id: string) => {
    if (!confirm("Bu sayfayı silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/cms/pages/${id}`, { method: "DELETE" });
    setPages(pages.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">📄 Sayfalar</h1>
          <p className="text-warm-500 text-sm mt-1">Tüm sayfaları yönetin, yeni sayfa oluşturun</p>
        </div>
        <button onClick={() => setShowNew(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">+ Yeni Sayfa</button>
      </div>

      {showNew && (
        <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="block text-xs font-medium text-warm-700 mb-1">Sayfa Başlığı</label>
              <input type="text" value={newPage.title} onChange={e => setNewPage({ ...newPage, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="Örn: Kampanyalar" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-warm-700 mb-1">URL (slug)</label>
              <input type="text" value={newPage.slug} onChange={e => setNewPage({ ...newPage, slug: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="/kampanyalar" />
            </div>
            <button onClick={addPage} className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">Oluştur</button>
            <button onClick={() => setShowNew(false)} className="px-4 py-2.5 text-warm-500 hover:text-warm-700 text-sm">İptal</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Başlık</th>
              <th className="text-left p-4 font-semibold text-warm-700">URL</th>
              <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Oluşturma</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {loading ? (
              <tr><td className="p-4 text-center text-warm-400" colSpan={5}>Yükleniyor...</td></tr>
            ) : pages.length === 0 ? (
              <tr><td className="p-4 text-center text-warm-400" colSpan={5}>Henüz sayfa yok</td></tr>
            ) : (
              pages.map(p => (
                <tr key={p.id} className="hover:bg-warm-50">
                  <td className="p-4 font-medium text-warm-900">{p.title}</td>
                  <td className="p-4 text-warm-500 text-xs font-mono">{p.slug}</td>
                  <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "published" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{p.status === "published" ? "Yayında" : p.status === "draft" ? "Taslak" : p.status}</span></td>
                  <td className="p-4 text-warm-400 text-xs hidden md:table-cell">{p.createdAt || "—"}</td>
                  <td className="p-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <Link href={`/super-admin/pages/${p.id}`} className="text-primary text-xs hover:underline">Düzenle</Link>
                      <button onClick={() => deletePage(p.id)} className="text-red-500 text-xs hover:underline">Sil</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
