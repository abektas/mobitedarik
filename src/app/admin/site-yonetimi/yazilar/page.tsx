"use client";
import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: "published" | "draft";
  date: string;
  image?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([
    { id: "g1", title: "EUDR: AB Ormansızlaşma Yönetmeliği", slug: "eudr-ab-ormansizlasma-yonetmeligi", category: "sektorel-haberler", author: "Mobi Tedarik Analiz", status: "published", date: "2026-06-15" },
    { id: "g2", title: "Sunta ve MDF Fiyatları Haziran 2026", slug: "sunta-mdf-fiyat-haziran-2026", category: "piyasa-fiyat", author: "Piyasa İzleme", status: "published", date: "2026-06-28" },
    { id: "g3", title: "2027 Mobilya Trendleri", slug: "mobilya-trendleri-2027", category: "trend-tasarim", author: "Tasarım Ekibi", status: "published", date: "2026-06-20" },
    { id: "g4", title: "Dahilde İşleme Rejimi Rehberi", slug: "dahilde-isleme-rejimi-rehber", category: "egitim-rehber", author: "Dış Ticaret Danışmanı", status: "draft", date: "2026-06-10" },
  ]);
  const [showNew, setShowNew] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", slug: "", category: "sektorel-haberler" });

  const addPost = () => {
    if (!newPost.title) return;
    setPosts([...posts, { id: Date.now().toString(), title: newPost.title, slug: newPost.slug || newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'), category: newPost.category, author: "Super Admin", status: "draft", date: new Date().toISOString().split('T')[0] }]);
    setNewPost({ title: "", slug: "", category: "sektorel-haberler" });
    setShowNew(false);
  };

  const deletePost = (id: string) => {
    if (confirm("Bu yazıyı silmek istediğinize emin misiniz?")) setPosts(posts.filter(p => p.id !== id));
  };

  const categories = [
    { value: "piyasa-fiyat", label: "Piyasa & Fiyat" },
    { value: "sektorel-haberler", label: "Sektörel Haberler" },
    { value: "trend-tasarim", label: "Trend & Tasarım" },
    { value: "egitim-rehber", label: "Eğitim & Rehber" },
    { value: "roportaj", label: "Röportaj" },
    { value: "veri-istatistik", label: "Veri & İstatistik" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Blog / Gündem Yönetimi</span>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <div className="p-6 border-b border-warm-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-warm-900">📰 Blog & Gündem Yazıları</h2>
            <p className="text-sm text-warm-500 mt-1">Sektör gündemi yazılarını yönetin</p>
          </div>
          <button onClick={() => setShowNew(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">+ Yeni Yazı</button>
        </div>

        {showNew && (
          <div className="p-6 bg-warm-50 border-b border-warm-200">
            <div className="flex items-end gap-4">
              <div className="flex-[2]">
                <label className="block text-xs font-medium text-warm-700 mb-1">Yazı Başlığı</label>
                <input type="text" value={newPost.title} onChange={e => setNewPost({ ...newPost, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="Yazı başlığı" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-warm-700 mb-1">Kategori</label>
                <select value={newPost.category} onChange={e => setNewPost({ ...newPost, category: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm">
                  {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>
              <button onClick={addPost} className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">Oluştur</button>
              <button onClick={() => setShowNew(false)} className="px-4 py-2.5 text-warm-500 hover:text-warm-700 text-sm">İptal</button>
            </div>
          </div>
        )}

        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Başlık</th>
              <th className="text-left p-4 font-semibold text-warm-700">Kategori</th>
              <th className="text-left p-4 font-semibold text-warm-700">Yazar</th>
              <th className="text-left p-4 font-semibold text-warm-700">Tarih</th>
              <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {posts.map(p => (
              <tr key={p.id} className="hover:bg-warm-50">
                <td className="p-4 font-medium text-warm-900">{p.title}</td>
                <td className="p-4"><span className="text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{categories.find(c => c.value === p.category)?.label || p.category}</span></td>
                <td className="p-4 text-warm-500 text-xs">{p.author}</td>
                <td className="p-4 text-warm-400 text-xs">{p.date}</td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "published" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{p.status === "published" ? "Yayında" : "Taslak"}</span></td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <button className="text-primary text-xs hover:underline">Düzenle</button>
                    <button onClick={() => deletePost(p.id)} className="text-red-500 text-xs hover:underline">Sil</button>
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
