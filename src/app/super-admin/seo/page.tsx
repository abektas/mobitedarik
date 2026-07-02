"use client";
import { useState } from "react";
import Link from "next/link";

export default function SeoPage() {
  const [seo, setSeo] = useState({
    siteTitle: "MobiTedarik - B2B Mobilya Malzeme Tedarik Platformu",
    siteDescription: "Mobilya fabrikaları ve atölyeleri için MDF, sunta, kumaş, menteşe, boya ve makine toptan tedarik platformu.",
    siteUrl: "https://www.mobitedarik.com",
    robotsTxt: "User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /super-admin/\nSitemap: https://www.mobitedarik.com/sitemap.xml",
    googleAnalytics: "",
    ogDefaultImage: "",
  });
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">🔍 SEO Ayarları</h1>
          <p className="text-warm-500 text-sm mt-1">Site geneli SEO yapılandırması</p>
        </div>
        <button onClick={save} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark text-sm font-semibold">{saved ? "✓ Kaydedildi" : "Kaydet"}</button>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6 space-y-5">
        <div>
          <h2 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Genel SEO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Site Başlığı</label><input type="text" value={seo.siteTitle} onChange={e => setSeo({...seo, siteTitle: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Site URL</label><input type="text" value={seo.siteUrl} onChange={e => setSeo({...seo, siteUrl: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" /></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium text-warm-700 mb-1">Site Açıklaması</label><textarea rows={3} value={seo.siteDescription} onChange={e => setSeo({...seo, siteDescription: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm resize-none" /></div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">robots.txt</h2>
          <textarea rows={6} value={seo.robotsTxt} onChange={e => setSeo({...seo, robotsTxt: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm font-mono resize-none" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-warm-900 uppercase tracking-wider mb-4 pb-2 border-b border-warm-200">Entegrasyonlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Google Analytics ID</label><input type="text" value={seo.googleAnalytics} onChange={e => setSeo({...seo, googleAnalytics: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="G-XXXXXXXXXX" /></div>
            <div><label className="block text-sm font-medium text-warm-700 mb-1">Open Graph Varsayılan Görsel</label><input type="text" value={seo.ogDefaultImage} onChange={e => setSeo({...seo, ogDefaultImage: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-primary outline-none text-sm" placeholder="https://..." /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
