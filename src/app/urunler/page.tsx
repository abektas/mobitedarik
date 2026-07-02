import Link from "next/link";
import { malzemeler, kategoriler } from "@/data/site-data";

export default function ProductsPage() {
  const allCategories = ["Tümü", ...kategoriler.map(k => k.ad)];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-warm-900">Tüm Malzemeler</h1>
          <p className="text-warm-500 mt-1">Mobilya üretiminiz için endüstriyel malzeme kataloğu</p>
        </div>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "Tümü"
                  ? "bg-primary text-white"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Malzeme Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {malzemeler.map((m) => {
            const enDusuk = m.fiyatKademeleri[0];
            const tedarikci = m.tedarikciAdi;
            return (
              <div key={m.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <p className="text-xs text-warm-400 mt-2">Görsel</p>
                  </div>
                  {m.stokDurumu === "icinde" && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">Stokta</span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.kategoriAdi}</span>
                    <span className="text-[10px] text-warm-400">{m.birim}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-warm-900 line-clamp-1">{m.baslik}</h3>
                  <p className="text-[11px] text-warm-400 mt-0.5">{tedarikci}</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-warm-900">₺{enDusuk.birimFiyat.toFixed(2)}</span>
                    <span className="text-[10px] text-warm-400">/ {m.birim}</span>
                    <span className="ml-auto text-[10px] text-warm-400">MOQ: {m.moq}</span>
                  </div>
                  <div className="mt-3 flex gap-1.5">
                    <Link href={`/teklif-iste/${m.id}`} className="flex-1 text-center bg-accent text-white text-[11px] py-2 rounded-lg hover:bg-accent-light transition-colors font-medium">
                      Teklif İste
                    </Link>
                    <Link href={`/${m.slug}-p-${m.id}`} className="px-3 py-2 border border-warm-300 rounded-lg hover:bg-warm-50 text-[11px] text-warm-600 font-medium">
                      Detay
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
