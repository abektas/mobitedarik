import Link from "next/link";
import { gundemYazilari } from "@/data/site-data";

export default function GundemPage() {
  const yayindakiler = gundemYazilari.filter(y => y.durum === "yayinda");
  const kategoriler = [...new Set(yayindakiler.map(y => y.kategori))];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-warm-900">Mobilya Sektörü Gündemi</h1>
          <p className="text-warm-500 mt-1">Sektörel haberler, piyasa analizi ve üretim rehberleri</p>
        </div>

        {/* Kategori filtreleri */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">Tümü</button>
          {kategoriler.map((kat) => (
            <button key={kat} className="bg-warm-100 text-warm-600 hover:bg-warm-200 px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              {kat.replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        {/* Yazılar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yayindakiler.map((yazi) => (
            <article key={yazi.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-[16/9] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-warm-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {yazi.kategori === "piyasa-fiyat" ? "Piyasa" : yazi.kategori === "sektorel-haberler" ? "Haber" : yazi.kategori === "trend-tasarim" ? "Trend" : "Rehber"}
                  </span>
                  <span className="text-[10px] text-warm-400">{yazi.yayinTarihi}</span>
                </div>
                <h2 className="text-base font-semibold text-warm-900 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/gundem/${yazi.slug}`}>{yazi.baslik}</Link>
                </h2>
                <p className="text-sm text-warm-500 mt-2 line-clamp-2">{yazi.ozet}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {yazi.altKonuEtiketleri.map((etiket) => (
                    <span key={etiket} className="text-[10px] text-warm-400 bg-warm-50 px-2 py-0.5 rounded-full">#{etiket}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
