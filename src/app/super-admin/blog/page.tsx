"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", category: "sektorel_haberler" });

  useEffect(() => {
    fetch("/api/cms/posts").then(r => r.json()).then(d => { setPosts(d.data); setLoading(false); });
  }, []);

  const addPost = async () => {
    if (!newPost.title) return;
    const res = await fetch("/api/cms/posts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newPost) });
    const d = await res.json();
    setPosts([...posts, d.data]);
    setNewPost({ title: "", category: "sektorel_haberler" });
    setShowNew(false);
  };

  const deletePost = async (id: string) => {
    if (!confirm("Sil?")) return;
    await fetch(`/api/cms/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter(p => p.id !== id));
  };

  const categories = [
    { value: "piyasa_fiyat", label: "Piyasa & Fiyat" },
    { value: "sektorel_haberler", label: "Sektörel Haberler" },
    { value: "trend_tasarim", label: "Trend & Tasarım" },
    { value: "egitim_rehber", label: "Eğitim & Rehber" },
    { value: "roportaj", label: "Röportaj" },
    { value: "veri_istatistik", label: "Veri & İstatistik" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">📰 Blog & Gündem</h1>
          <p className="text-warm-500 text-sm mt-1">Blog yazılarını yönetin, planlayın, yayınlayın</p>
        </div>
        <button onClick={() => setShowNew(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold">+ Yeni Yazı</button>
      </div>

      {showNew && (
        <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
          <div className="flex items-end gap-4">
            <div className="flex-[2]"><label className="block text-xs font-medium text-warm-700 mb-1">Başlık</label><input type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            <div className="flex-1"><label className="block text-xs font-medium text-warm-700 mb-1">Kategori</label><select value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm">{categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></div>
            <button onClick={addPost} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium">Oluştur</button>
            <button onClick={() => setShowNew(false)} className="text-warm-500 text-sm">İptal</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50">
            <tr><th className="text-left p-4 font-semibold text-warm-700">Başlık</th><th className="text-left p-4 font-semibold text-warm-700">Kategori</th><th className="text-left p-4 font-semibold text-warm-700">Durum</th><th className="text-left p-4 font-semibold text-warm-700">Tarih</th><th className="text-right p-4 font-semibold text-warm-700">İşlem</th></tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {loading ? <tr><td className="p-4 text-center text-warm-400" colSpan={5}>Yükleniyor...</td></tr> : posts.length === 0 ? <tr><td className="p-4 text-center text-warm-400" colSpan={5}>Henüz yazı yok</td></tr> : posts.map(p => (
              <tr key={p.id} className="hover:bg-warm-50">
                <td className="p-4 font-medium text-warm-900">{p.title}</td>
                <td className="p-4"><span className="text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{categories.find(c => c.value === p.category)?.label || p.category}</span></td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "published" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{p.status === "published" ? "Yayında" : "Taslak"}</span></td>
                <td className="p-4 text-warm-400 text-xs">{p.createdAt || "—"}</td>
                <td className="p-4 text-right"><button onClick={() => deletePost(p.id)} className="text-red-500 text-xs hover:underline">Sil</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
