"use client";
import { useState } from "react";
import Link from "next/link";

interface PageItem {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  updatedAt: string;
  sections: number;
}

export default function SayfalarPage() {
  const [pages, setPages] = useState<PageItem[]>([
    { id: "1", title: "Ana Sayfa", slug: "/", status: "published", updatedAt: "2026-07-01", sections: 8 },
    { id: "2", title: "Hakkımızda", slug: "/hakkimizda", status: "published", updatedAt: "2026-06-28", sections: 4 },
    { id: "3", title: "İletişim", slug: "/iletisim", status: "published", updatedAt: "2026-06-25", sections: 2 },
    { id: "4", title: "Tedarikçi Ol", slug: "/tedarikci-ol", status: "published", updatedAt: "2026-06-30", sections: 3 },
    { id: "5", title: "S.S.S.", slug: "/destek", status: "draft", updatedAt: "—", sections: 0 },
  ]);
  const [showNew, setShowNew] = useState(false);
  const [newPage, setNewPage] = useState({ title: "", slug: "" });

  const addPage = () => {
    if (!newPage.title || !newPage.slug) return;
    setPages([...pages, { id: Date.now().toString(), title: newPage.title, slug: newPage.slug, status: "draft", updatedAt: "—", sections: 0 }]);
    setNewPage({ title: "", slug: "" });
    setShowNew(false);
  };

  const deletePage = (id: string) => {
    if (confirm("Bu sayfayı silmek istediğinize emin misiniz?")) {
      setPages(pages.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Sayfa Yönetimi</span>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="p-6 border-b border-warm-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-warm-900">📄 Sayfa Yönetimi</h2>
            <p className="text-sm text-warm-500 mt-1">Site sayfalarını ekleyin, düzenleyin, silin</p>
          </div>
          <button onClick={() => setShowNew(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">+ Yeni Sayfa</button>
        </div>

        {showNew && (
          <div className="p-6 bg-warm-50 border-b border-warm-200">
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-warm-700 mb-1">Sayfa Başlığı</label>
                <input type="text" value={newPage.title} onChange={e => setNewPage({ ...newPage, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="Örn: Kampanyalar" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-warm-700 mb-1">URL (slug)</label>
                <input type="text" value={newPage.slug} onChange={e => setNewPage({ ...newPage, slug: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="Örn: kampanyalar" />
              </div>
              <button onClick={addPage} className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">Oluştur</button>
              <button onClick={() => setShowNew(false)} className="px-4 py-2.5 text-warm-500 hover:text-warm-700 text-sm">İptal</button>
            </div>
          </div>
        )}

        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Sayfa</th>
              <th className="text-left p-4 font-semibold text-warm-700">URL</th>
              <th className="text-left p-4 font-semibold text-warm-700">Bölüm</th>
              <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Son Güncelleme</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {pages.map(p => (
              <tr key={p.id} className="hover:bg-warm-50">
                <td className="p-4 font-medium text-warm-900">{p.title}</td>
                <td className="p-4 text-warm-500 text-xs font-mono">{p.slug}</td>
                <td className="p-4 text-warm-600">{p.sections}</td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "published" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{p.status === "published" ? "Yayında" : "Taslak"}</span></td>
                <td className="p-4 text-warm-400 text-xs hidden md:table-cell">{p.updatedAt}</td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/admin/site-yonetimi/sayfalar/${p.id}`} className="text-primary text-xs hover:underline">Düzenle</Link>
                    <button onClick={() => deletePage(p.id)} className="text-red-500 text-xs hover:underline">Sil</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
